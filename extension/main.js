chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("got message");
    console.log(request.urls);
    sendResponse("Response is valid!");
	
	var ws = new WebSocket("ws://107.180.51.244:1515");
    ws.onopen = function()
    {
        ws.send(request.urls);
        console.log("Message is sent...");
    };
	
});



