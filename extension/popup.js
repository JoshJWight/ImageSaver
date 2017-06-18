submitURL = function(event){
	imgUrl = event.currentTarget.src;
	event.currentTarget.remove();
	chrome.runtime.sendMessage({message:"submit-url", url: imgUrl}, function(response) {
	});
}

chrome.runtime.sendMessage({message:"get-urls"}, function(urls) {
	$(".image-panel").empty();
	console.log(urls);
	urls.forEach(function(url){
		$(".image-panel").append("<img class=\"urlimg\" src=\"" + url + "\"/>");
	});
	$(".urlimg").click(submitURL);
});

chrome.runtime.sendMessage({message:"get-object"}, function(objectImg) {
	console.log(objectImg);
	$(".object-rate-panel").empty();
	$(".object-rate-panel").append("<img src=\"" + objectImg + "\">");
});

