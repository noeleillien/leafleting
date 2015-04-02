


(function(){
	// Start writing your JavaScript inside, and only inside this function
var map = L.map('map').setView([40.807, -73.963], 17);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.807532, -73.963532]).addTo(map);
marker.bindPopup("<b>This is my world!</b><br>#jschool");


 $('.button').on("click", function(){
	map.locate({setView: true})
	});

$('#home').on("click", function(){
	map.locate({setView: false})
	map.panTo([47.3686, 8.5391])
	map.zoomOut(4)
	});
	
$('#dream').on("click", function(){
	map.locate({setView: false})
	map.panTo([1.977247, 73.536103], 13)
	map.zoomOut(6)
	});

//$.getJSON('../data/data.json', function(myData){
//		console.log('this is my data', myData)


	var image_data = [
			{
				name: 'Empire State building',
				lat: '40.748441',
				lng: '-73.985664',
				text: 'Tourist Trap'
			},
			{
				name: 'Bushwick',
				lat: '40.694428', 
				lng: '-73.921286',
				text: 'Hipster Alert'
			},
			{
				name: 'Union Square',
				lat: '42.379654',
				lng: '-71.095602',
				text: 'Great Brunch'
			}
			];

	var locations = ['Empire State Building', 'Bushwick', 'Union Square']

	//$(".loop").on("click", function(){
	//	$(this).attr('locations')

		
	//	image_data.mark, 
	//	marker.bindPopup('image_data')
	
	//});

	function cycle(markers) {
   	 var i = 0;
   	 function run() {
        if (++i > markers.length - 1) i = 0;
        map.setView(markers[i].getLatLng(), 12);
        markers[i].openPopup();
        window.setTimeout(run, 2000);
    }
    run();}

    	for (var i = 0; i < image_data.length; i++) {
   marker = new L.marker([image_data[i][1],planes[i][2]])
    .bindPopup(planes[i][0])
    .addTo(map);
  }


		// for (var i = 0; i < image_data.length; i++){
		//		 console.log(image_data[i], i);
		//		 console.log(i);
		//	}

		//$('.loop').on('click', function(){	
		//	l.marker.image_data.mark({true})


	//	];
		// shopping_list.forEach(function(item, index){
		// 	console.log(item, index);
		// });




}).call(this);