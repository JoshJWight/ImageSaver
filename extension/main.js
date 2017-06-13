urls = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("got message " + request.message);
    
	
	if(request.message=="set-urls") {
		urls = request.urls;
		sendResponse("urls received by main");
	} else if(request.message=="get-urls") {
		sendResponse(urls);
	} else if(request.message=="submit-url") {
		urls.splice(urls.indexOf(request.url), 1);
		var ws = new WebSocket("ws://localhost:1515");
		ws.onopen = function()
		{
			ws.send("submit-url;" + request.url);
			console.log("Message is sent...");
		};
		sendResponse(urls);
	}
	
	
	
	
});



