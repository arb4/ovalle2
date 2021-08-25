
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-30.608318, -71.199705],
    zoom: 18,
    zoomControl: true
});


				
var	areas = L.geoJson(areas, {	
              	    style: function(feature) {
        switch (feature.properties.NUMPOINTS) {
            case '100': return {color: "yellow"};
            case '89':   return {color: "green"};
			case '98':   return {color: "blue"};
			case '92':   return {color: "orange"};
			case '105':   return {color: "olive"};
			case '91':   return {color: "teal"};
			case '90':   return {color: "purple"};
			case '94':   return {color: "red"};
			case '53': return {color: "yellow"};
            case '44':   return {color: "green"};
			case '93':   return {color: "blue"};
			case '103':   return {color: "orange"};
			case '95':   return {color: "olive"};
			case '95':   return {color: "teal"};
			case '50':   return {color: "purple"};
			
        }
    },

     onEachFeature: function (feature, layer) {
	var txt = "Usted está en el sector donde hay aprox :";	 
	var txt2 = "Homepass";
       layer.bindPopup(txt.fontcolor("DarkGreen")+" "+" "+feature.properties.NUMPOINTS.fontcolor("blue").fontsize(3)+" "+txt2.fontcolor("DarkGreen"));
   } 	
                  
              }).addTo(map);
			  
			  
			  
var style1 = {
                    'color': "red",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.5
                };								  
			  
	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	
 var cent= L.geoJSON(cent, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);		  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
