var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			var mapSW;
			var panorama;
			$(document).ready(function(){
			/*  map = new GMaps({
				div: '#map',
				lat: 41.39123,
				lng: -73.288004,
			  });*/
			  mapSW = new GMaps({
				div: '#mapSW',
				lat: 41.346749,
				lng: -73.248090,
				zoom: 16
			  });
			/*   var marker = map.addMarker({
		            lat: 41.39123,
					lng: -73.288004,
		            title: 'Cannon Ridge Training Center'
		        });*/
				var markerSW = mapSW.addMarker({
		            lat: 41.346749,
					lng: -73.248090,
		            title: 'Cannon Ridge Training Center'
		        });
				mapSW.drawOverlay({
		            lat: 41.347749,
					lng: -73.248090,
					content: '<h5>Cannon Ridge Training Center</h5>'
});
				
			});
        }
    };
}();

var ContactSW = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 41.416889,
				lng: -73.425849
			  });
			   var marker = map.addMarker({
		            lat: 41.416889,
					lng: -73.425849,
		            title: 'Sport & Wellness'
		        });
			});
        }

    };
}();

41.416889,-73.425849
