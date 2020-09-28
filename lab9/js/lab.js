/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Functions
var outputEl = document.getElementById("output");

document.getElementById("output").style.color = "lightblue";


var new1El = document.createElement("p")
 new1El.innerHTML = "This is harder than you think.";

var new2El = document.createElement("p")
new2El.innerHTML = "But it will take a while."

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
