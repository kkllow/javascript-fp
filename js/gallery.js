window.onload = addTabIndex;

function addTabIndex(){
	console.log("addTabIndex triggered on page load");
	var previews = document.getElementsByClassName("preview");
	for(var i = 0; i < previews.length; i++){
		previews[i].setAttribute("tabindex", i + 1);
	}
}

function upDate(previewPic){
	console.log("upDate triggered");
	console.log("alt: " + previewPic.alt);
	console.log("src: " + previewPic.src);
	document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
	document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
	document.getElementById("image").style.backgroundImage = "url('')";
	document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
