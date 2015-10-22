// two global variables
var secondsRemaining; 
var intervalHandle; 

function resetPage() { 
	document.getElementById('inputArea').style.display = 'block'; 
}

function tick() { 
	// grab the h1
	var timeDisplay = document.getElementById('time'); 
	
	// turn seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60); 
	var sec = secondsRemaining - (min * 60); 
	
	// add a leading zero if seconds less than 10
	if (sec < 10) { 
		sec = "0" + sec; 
	}
		
	// concatenate w/ colon
	var message = min + ":" + sec; 
	// now change the display
	timeDisplay.innerHTML = message; 
	
	// stop if down to zero
	if ( secondsRemaining === 0 ) { 
		alert("ME DONE!"); 
		clearInterval(intervalHandle); 
		resetPage(); 
	}
	
		// change color
	if ( min === 0 && sec < 11 ) { 
		document.getElementById('time').className = 'red'; 
	}

	
	// subtract from seconds remaining
	secondsRemaining--; 
}

function startCountdown() { 
	// get contents of the "minutes" text box 
	var minutes = document.getElementById("minutes").value; 
	// check if not a number
	if (isNaN(minutes)) { 
		alert("Please enter a number"); 
		return; 
	}
	
	// how many seconds
	secondsRemaining = minutes * 60; 
	intervalHandle = setInterval(tick, 1000); 
	// hide the form
	document.getElementById('inputArea').style.display = 'none'; 
}

// as soon as the page loads
window.onload = function() { 
	// create input text box and give it an id of "minutes" 
	var inputMinutes = document.createElement("input"); 
	inputMinutes.setAttribute("id", "minutes"); 
	inputMinutes.setAttribute("type", "text"); 
	
	// create button
	var startButton = document.createElement("input"); 
	startButton.setAttribute("type", "button"); 
	startButton.setAttribute("value", "Start Countdown"); 
	startButton.onclick = function() { 
		startCountdown(); 
	}; 
	
	// add to the DOM, inputArea
	document.getElementById("inputArea").appendChild(inputMinutes); 
	document.getElementById("inputArea").appendChild(startButton); 
}