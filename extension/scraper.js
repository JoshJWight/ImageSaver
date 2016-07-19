console.log("starting scraper.js");

var imageStr = "";

for(var i = 0; i<document.images.length; ++i)
{
    imageStr += document.images[i].src;
    if (i<document.images.length-1) {
        imageStr+="\n";
    }
}

console.log("sending message");
console.log(imageStr);

chrome.runtime.sendMessage({urls:[imageStr]}, function(response) {
  console.log("scraper received response");
  console.log(response);
});


