//alert("JavaScript works!");

// Coby Pilpel
// Project 4
//SDI 1408
//Aug 28th 2014

//Global variables (I'm throwing these up here as I run into a situation where I need one)
var checkUrl = "https://orgsync.com"
//var checkUrl = "htts://orgsync.com" <----Alternate incorrectly formatted URL to confirm string function 1 works.
var arrayFunctionOne = [2, 3, 6, 8, 11, 13];
var aNumber = 9



//Number function 1 - Converting a string to an integer. Prompt for the number active.
//Code also works with the included simpler variable that I commented into the code.
console.log("Number function one")
var convertToNumber = function (stringFormat) 
	{var stringFormat = prompt("Pick a number","")
	//{var stringFormat = "20"
	var answer;
	answer = parseInt(stringFormat);
	return answer;};

console.log(convertToNumber())

console.log(isNaN(convertToNumber))



//Array function 1 - Find the smallest value in an array that is greater than a given number
console.log("Array function 1")
var smallYetGreater = function(aNumber,arrayFunctionOne) {
	arrayFunctionOne.sort();
	for (var i = 0; i <= arrayFunctionOne.length; i++) 
	{if (arrayFunctionOne[i] > aNumber) 
	{return arrayFunctionOne[i];}}};


console.log(smallYetGreater(aNumber,arrayFunctionOne))



//String function 1 - Is the string a URL?
console.log("String function 1")
var urlCheck = function(checkUrl) 
	{var url ;
	if(checkUrl.substring(0,7) === "http://" || checkUrl.substring(0,8) === "https://") 
	{url = true;} 
	else 
	{url = false;}
    return url;};

console.log(urlCheck("www.orgsync.com"))
//console.log(urlCheck("ww.orgsync.com"))
//switch the console.log statements to confirm function is working


//String function 2 - Does a string follow a 123-456-7890 pattern like a phone number?
console.log("String function 2")
var confirmFormat = function (phoneNo) 
	{var checkNumber = phoneNo;
	var breakOne = (checkNumber.substring(3, 4));
	var breakTwo = (checkNumber.substring(7, 8));
	if (checkNumber.length == 12) 
	{if (breakOne =="-" && breakTwo =="-") 
	{return true;} 
	else 
	{return false;}}
	else 
	{return false;}};
	
	var check = confirmFormat("914-260-0947");
    //var check = confirmFormat("91-4260-0947")
    //switch the var check statements to confirm function is working
console.log(check)




//String function 3 - Does a string follow an aaa@bbb.ccc pattern like an email address?
console.log("String function 3")
var checkFormat = function (email) 
	{var address = email;
	var period = address.indexOf(".");
	var at = address.indexOf("@");
	if (at == -1 || period == -1 || (at +2) >= period) 
	{return false;} 
	else 
	{return true;};}
	
	var testEmail = checkFormat("cobyrpilpel@fullsail.edu");
	//var testEmail = checkFormat("cobyrpilpel@fullsail")
    //switch the var testEmail statements to confirm function is working
console.log(testEmail);



//String function 4 - Title-case a string (split into words, then uppercase the first letter of each word)
console.log("String function 4")
var capitalizationChange = function(string) 
	{var break1 = string.split(" ");
	var caps = "";
	for (var i = 0, j = break1.length; i < j; i++) 
	{var break2 = break1[i].replace(break1[i].charAt(0),(break1[i].charAt(0)).toUpperCase());
	caps = caps.concat(break2 + " ");}
	return caps;};

	var testString = capitalizationChange("rocket racoon");
console.log(testString);
