
var current = 0;
var LEFT = 37;
var RIGHT = 39;
var UP = 38;
var DOWN = 40;

var images = [];
var album = "";


function initImages(theAlbum, theImages) {
	album = theAlbum;
	images = theImages;
	showImage();
}

function showImage() {
	var image = document.getElementById('image');
	image.src = album + "/" + images[current].img;

	if (images[current].caption) {
		$("#caption").text(images[current].caption);
		var w = $(".text-block").width();
		console.log("Width of text is", w);
		$(".text-block").css("left", (1740 - w) / 2);
		$(".text-block").show();
	} else {
		$(".text-block").hide();	
	}
	

}
function doPrevious() {
	if (current == 0) {
		return;
	}
	current--;
	showImage();

}

function doNext() {
	if (current == images.length - 1) {
		return;
	}
	current++;
	showImage();

}

function doFirst() {
	current = 0;
	showImage();
}

function doLast() {
	current = images.length - 1;
	showImage();
}



document.addEventListener("keydown", function (inEvent) {
	switch (inEvent.keyCode) {
		case LEFT:
			doPrevious();
			break;
		case RIGHT:
			doNext();
			break;
		case UP:
			doFirst();
			break;
		case DOWN:
			doLast();
			break;
	}
});

