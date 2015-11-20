var myArray = [
	true, 
	true, 
	true, 
	false, 
	true, 
	true
]; 

var myItem = null; 

while (myItem != false) { 
	console.log('myArray has ' + myArray.length + ' items now. This loop will go until we pop a false.'); 
	myItem = myArray.pop(); 
}; 