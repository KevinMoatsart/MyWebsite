window.onload = initPics;

function initPics(){
	for(var i=0; i < document.images.length; i++){
		if(focument.images[i].parentNode.tagName =="A"){
			setupRollover(document.images[i]);
			alert("Found image");
		}
	}
}

function setupRollover(currentImage){
	
}