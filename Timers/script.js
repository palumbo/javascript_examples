var myImage = document.getElementById('mainImage'); 

var imageArray = ["_images/overlook.jpg", "_images/winery_sign.jpg", "_images/lunch.jpg", "_images/flag_photo.jpg", "_images/mission_look.jpg"]; 

var imageIndex = 0; 

function changeImage(){
	myImage.setAttribute('src', imageArray[imageIndex]); 
	imageIndex++; 
	if (imageIndex >= imageArray.length) { 
		imageIndex = 0; 
	}
}

setInterval(changeImage, 5000); 