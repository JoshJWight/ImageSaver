

rateObject = function(rating){
	$("object-rate-panel").hide();
	chrome.runtime.sendMessage({message:"rate-object", rating: rating}, function() {
		getObject();
	});
};

approveObject = function(){
	rateObject(true);
};

rejectObject = function(){
	rateObject(false);
};

getURLs = function(){
	chrome.runtime.sendMessage({message:"get-urls"}, function(urls) {
		$(".image-panel").empty();
		console.log(urls);
		urls.forEach(function(url){
			$(".image-panel").append("<img class=\"urlimg\" src=\"" + url + "\"/>");
		});
		$(".urlimg").click(submitURL);
	});
}

getObject = function(){
	chrome.runtime.sendMessage({message:"get-object"}, function(objectImg) {
		$("#object-panel").empty();
		$("#object-panel").append("<img src=\"" + objectImg + "\">");
		$("#object-rate-panel").show();
	});
};
			
submitURL = function(event){
	imgUrl = event.currentTarget.src;
	event.currentTarget.remove();
	chrome.runtime.sendMessage({message:"submit-url", url: imgUrl}, function(response) {
	});
};

//run on startup
$("#checkmark").attr("src", chrome.extension.getURL("checkmark.png"));
$("#x").attr("src", chrome.extension.getURL("x.png"));
$("#checkmark").click(approveObject);
$("#x").click(rejectObject);
getURLs();
getObject();
