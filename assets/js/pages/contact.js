var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 41.391419,
				lng: -73.288702,
			  });
			  mapSW = new GMaps({
				div: '#mapSW',
				lat: 41.416889,
				lng: -73.425849
			  });
			   var marker = map.addMarker({
		            lat: 41.391419,
					lng: -73.288702,
		            title: 'Cannon Ridge Training Center'
		        });
				var markerSW = mapSW.addMarker({
		            lat: 41.416889,
					lng: -73.425849,
		            title: 'Sport & Wellness'
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
