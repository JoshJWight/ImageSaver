urls = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("got message");
    console.log(request.urls);
    
	
	if(request.message=="set-urls") {
		urls = request.urls;
		sendResponse("urls received by main");
	} else if(request.message=="get-urls") {
		sendResponse(urls);
	}
	
	
	/*var ws = new WebSocket("ws://localhost:1515");
    ws.onopen = function()
    {
        ws.send(request.urls);
        console.log("Message is sent...");
    };*/
	
});



