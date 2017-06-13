submitURL = function(event){
	imgUrl = event.currentTarget.src;
	event.currentTarget.remove();
	chrome.runtime.sendMessage({message:"submit-url", url: imgUrl}, function(response) {
	});
}

chrome.runtime.sendMessage({message:"get-urls"}, function(urls) {
	$(".popup").empty();
	console.log(urls);
	urls.forEach(function(url){
		$(".popup").append("<img class=\"urlimg\" src=\"" + url + "\"/>");
	});
	$(".urlimg").click(submitURL);
});

