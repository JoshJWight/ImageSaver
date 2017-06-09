console.log("starting scraper.js");

//splat because document.images is a htmlcollection rather than an array
imageUrls = [...document.images].map(function(img){
	return img.src;
});

console.log("sending message");
console.log(imageUrls);

chrome.runtime.sendMessage({message:"set-urls", urls: imageUrls}, function(response) {
  console.log(response);
});


