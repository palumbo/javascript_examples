/*
	var pageNames = [ 'Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog']; 
			
			for (var i = 0;  i < pageNames.length; i++ ) { 
				var currentPageTitle = pageNames[i];
				
				if ( document.title === currentPageTitle ) { 
					console.log("We are here: " + currentPageTitle); 
				} else { 
					console.log("We are NOT here: " + currentPageTitle); 
				} 
			}; 
			
		
	for (var p in pageNames) { 
		console.log(p + " is " + pageNames[p]); 
	}; 
	
	var pages = { 
		'first' : 'Home', 
		'second' : 'About Us', 
		'third' : 'Contact Us', 
		'fourth' : 'JavaScript Playaground', 
		'fifth' : 'Blog'
	}; 
	
	for ( var p in pages ) { 
		if (pages.hasOwnProperty(p)) { 
			console.log(p + ' is ' + pages[p]); 
		}
	}; 
	
	// trying a while loop 
	var x = 0; 
	while (x <= 10) { 
		console.log(x + "...this will keep looping until it hits 10"); 
		x++; 
	}; 
	
	
*/
var name = window.prompt("What is your name?"); 

while (name.length == 0) { 
	name = window.prompt("What is your name?"); 
}; 

if (name.length > 0) { 
	document.getElementById('welcome').innerHTML = "Hello " + name + ", we've been expecting you."; 
}; 
