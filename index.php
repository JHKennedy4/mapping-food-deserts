<!DOCTYPE html>
<html>
    <head>
        <title>Hello Maps!</title>
        
        
        <style type="text/css">
            section#map {height: 400px; width: 600px }
            #map_canvas { height: 100% }
        </style>
        
        <script type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzYW7xXOgWTl2OZ_hYrox5jg0kYeggY9E&sensor=false&libraries=visualization">
        </script>
        <script src='mymaps.js'></script>
    </head>
    <body onload="initialize()">
        <h1>Hello Google Maps API!</h1>
        
        <section id="map">
                <div id="map_canvas" style="width: 100%; height: 100%;"></div>
	</section>
        <section>
		<div>
			Jump to another location: 
			<input id="address" type="textbox" value="Rochester, NY">
			<input type="button" value="Go" onclick="codeAddress()">
			<br />
			<input id="address" type="textbox" value="">
			<input type="button" value="Set Query Rate" onclick="">
                </div>
	</section>
    </body>
</html>
    
