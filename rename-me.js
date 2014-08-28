//alert("JavaScript works!");

// Coby Pilpel
// Project 4
//SDI 1408
//Aug 28th 2014

//Global variables (I'm throwing these up here as I run into a situation where I need one)
var checkUrl = "https://orgsync.com"
//var checkUrl = "htts://orgsync.com" <----Alternate incorrectly formatted URL to confirm string function 1 works.





//Number function 1 - Converting a string to an integer. Prompt for the number active.
//Code also works with the included simpler variable that I commented into the code.

var convertToNumber = function (stringFormat) 
	{var stringFormat = prompt("Pick a number","")
	//{var stringFormat = "20"
	var answer;
	answer = parseInt(stringFormat);
	return answer;};

console.log(convertToNumber())

console.log(isNaN(convertToNumber))

//Number function 2 - Format a number to use a specific number of decimal places
//brain block - will come back to this later



//String function 1 - Is the string a URL?
var urlCheck = function(checkUrl) 
	{var url ;
	if(checkUrl.substring(0,7) === "http://" || checkUrl.substring(0,8) === "https://") 
	{url = true;} 
	else 
	{url = false;}
    return url;};

console.log(urlCheck(checkUrl))

//

