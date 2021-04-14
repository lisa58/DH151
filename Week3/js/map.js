let locations = [
	{
        'title': "Sequoia National Park",
        'lat': 45.5762,
        'lon': -122.1158,
        'url':
        "https://i.redd.it/isuxb4axwb821.jpg",
        'paragraph':
            "This was the first national park I went to with my family. I'm just really fasinated by nature and it was insane seeing just how tall the General Sherman Tree was in person.",
   
    },
    {
		'title':'Griffith Observatory',
		'lat': 34.11833055887679,
		'lon': -118.30012118997443,
        'url': "https://www.hikespeak.com/img/la/Griffith/Observatory/West_Observatory_Trail_Griffith_Park_hike_0217.jpg",
		'paragraph': "Whenever our relatives come over, we always bring them here, either because it's one of the first tourist locations we've ever been to or because we want others to also suffer the uphill walk to the observatory."
	},
    {
        'title': "Grand Canyon Skywalk",
        'lat': 36.0119,
        'lon': -113.8108,
        'url':
            "https://www.maverickhelicopter.com/images/tours/tour-skywalk-odyssey/skywalk-odyssey-tour-lg4.jpg",
        'paragraph': "I'm afraid of heights so I couldn't really enjoy the view through my tears. But once I was safely off the Skywalk, I loved the view. It's incredible that there's rocks that we can see that are older than the oldest known dinosaurs.",
    },
    {
        'title': "Zion National Park",
        'lat': 37.2982,
        'lon': -113.0263,
        'url':
            "https://wallpapercave.com/wp/wp2213487.jpg",
        'paragraph': "When we first crossed the border into Utah, you could just tell it was a different state because we were greeted by pastel colored mountains which I had never seen before.",
    },    
    {
        'title': "Zainul Abedin Art Museum",
        'lat': 24.7703,
        'lon': 90.3950,
        'url':
            "https://www.documenta14.de/images/d14_Zainul_Abedin_Famine_Sektches_Installation_View_%C2%A9_Milan_Soremski-004.jpg,1440",
        'paragraph': "He's known for illustrating the Bengal Famine of 1943 and being at the forefront of preserving Bangladeshi culture during its liberation to the rest of the Bangladesh. But, in my family, he's known as the student my grandpa told to pursue art because he was bad at math",
    },

	
];

    var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
	var map = L.map('map').setView([37.33548,139.745438],12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let myMarkers = L.featureGroup();

locations.forEach(function(item,index){
	var marker = L.marker([item.lat,item.lon],{icon: violetIcon})
		.bindPopup("<center><h3>" +
        item.title +
        "</h3></center>" +
        "<h4>" +
        "<center><img src ='" +
        item.url +
        "'width=60%'/></center>")

		myMarkers.addLayer(marker)
		
		$('.sidebar').append(`<div class="sidebar-item" onclick="flyToIndex(${index});ShowAndHide(${index})">${item.title}</div>`)
		$('.sidebar').append(`<div id = "${index}" style="display: none">${item.paragraph}</div>`)
        $('.sidebar-item').click(function() {
            $('.sidebar-item').removeClass('unselected')
            $(this).addClass('selected')
        })

        
    });

myMarkers.addTo(map)

let layers = {
	"My Markers":myMarkers
}
L.control.layers(null,layers).addTo(map)
map.fitBounds(myMarkers.getBounds())





function flyToIndex(index){
	var x = document.getElementById(index);
	if (x.style.display == 'none'){
		map.flyTo([locations[index].lat,locations[index].lon],15)
		myMarkers.getLayers()[index].openPopup(
        )	
	}
}
function ShowAndHide(index) {
    var x = document.getElementById(index);
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

