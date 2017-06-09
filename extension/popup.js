chrome.runtime.sendMessage({message:"get-urls"}, function(urls) {
	$(".popup").empty();
	console.log(urls);
	urls.forEach(function(url){
		$(".popup").append("<img src=\"" + url + "\"/>");
	});
});
