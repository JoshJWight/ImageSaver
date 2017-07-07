WS_ADDR = "ws://localhost:1515"

urls = [];
objectName = "";



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("got message " + request.message);
    
	
	if(request.message=="set-urls") {
		urls = request.urls;
		sendResponse();
	} else if(request.message=="get-urls") {
		sendResponse(urls);
	} else if(request.message=="submit-url") {
		urls.splice(urls.indexOf(request.url), 1);
		var ws = new WebSocket();
		ws.onopen = function()
		{
			ws.send(JSON.stringify({method:"submit-url", url:request.url}));
		};
		sendResponse(urls);
	} else if(request.message=="get-object") {
		var ws = new WebSocket(WS_ADDR);
		ws.onopen = function()
		{
			ws.send(JSON.stringify({method:"get-object"}));
		};
		ws.onmessage = function(event) {
			data = JSON.parse(event.data);
			objectName = data.name;
			sendResponse(data.image);
		};
		//this allows the response to be sent asynchronously
		return true;
	} else if(request.message=="rate-object") {
		var ws = new WebSocket(WS_ADDR);
		ws.onopen = function()
		{
			ws.send(JSON.stringify({method:"rate-object", name: objectName, rating:request.rating}));
		};
		sendResponse();
	} else if(request.message=="get-wallpaper") {
		var ws = new WebSocket(WS_ADDR);
		ws.onopen = function()
		{
			ws.send(JSON.stringify({method:"get-wallpaper"}));
		};
		ws.onmessage = function(event) {
			data = JSON.parse(event.data);
			sendResponse(data.image);
		};
		return true
	}
	
	
	
	
});



