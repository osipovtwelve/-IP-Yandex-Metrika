<script>(function () {
	setTimeout(function() {		
		var settings = {
			IDmetrika: *******
		};
		
		if (!sessionStorage.deviceIP) {
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function() { 
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
				{ 
				var deviceIP = xmlHttp.responseText; 			
				ym(settings.IDmetrika, 'userParams', {
					IP: deviceIP
				});	
				console.log("IP: " + deviceIP);
				sessionStorage.deviceIP = deviceIP;
				}
			}
			xmlHttp.open("GET", "https://api.ipify.org", true);
			xmlHttp.send(null);						
		} else {
			console.log("SessionStorage IP: " + sessionStorage.deviceIP);
		}
	}, 1000);
}());
</script>