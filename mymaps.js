var geocoder;
var map, pointarray, heatmap;
function initialize() {
    console.log("initializing");
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40,-90); //Rochester, NY: 43.1547, -77.6158
    var mapOptions = {
        zoom: 3,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(6);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }     
    });
}
function changeAddress(address) {
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                zoom:5,
                position: results[0].geometry.location,
                visible:true
            });
        } else {
            console.log("Geocode was not successful for the following reason: " + status);
        }     
    });
}

// Twitter Analytics:
// where are my followers
// where am I being mentioned
// how often am I being mentioned

function createHeatMap(locations) {
    
    try {
    pointArray = new google.maps.MVCArray(locations);
    } catch(err) {
        console.log("pointArray = new");
    }
    try {
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });
    } catch(err) {
        console.log("heatmap = new google.maps.vis");
    }
    try {
    heatmap.setOptions({radius: 8});
    heatmap.setOptions({opacity: 4});
    heatmap.setMap(map);
    } catch(err) {
        console.log("heatmap.setMap(map)");
    }
}
