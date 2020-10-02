/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variable
var button = document.getElementById('my-button');
var button2 =document.getElementById('my-button2')
var button3 = document.getElementById('my-button3');
var button4=document.getElementById('my-button4');
var change = document.getElementById("change");
var change2=document.getElementById("change2");
var i=0;
//functions

//For Name
function sayMyName(){
//get the value
inputValue = document.getElementById('user-name').value;
//run through
console.log("You input:", inputValue);

//Replace and output
change.innerText = "Hello,  " + inputValue + ".";

}

//For Color
function favoritecolor(){
inputColor = document.getElementById('user-name2').value;

 console.log("You input:",inputColor);
  output.style.backgroundColor = inputColor;
  output.style.fontsize = "smaller";
  change2.innerText = "Your favorite color is " +inputColor + ".";
}

//For 'glitch'
function glitchy () {

    setTimeout(function() {
  output.style.backgroundColor= "cyan";
  output.style.marginTop = "30px";
  output.style.fontsSize= "30px";
  output.style.fontFamily= "Proxima Nova";
}, 200);
    setTimeout(function() {
  output.style.backgroundColor= "magenta";
  output.style.marginTop = "20px";
  output.style.fontFamily= "Arial";
}, 300);

setTimeout(function () {
output.style.backgroundColor= "yellow";
output.style.marginTop = "50px";
output.style.fontFamily= "Impact";
output.style.padding= "40px";
}, 400);

setTimeout(function () {
output.style.backgroundColor= "red";
output.style.marginTop = "80px";
output.style.fontFamily= "Verdana";
output.style.padding= "80px";
}, 500);


}

function reset() {
  output.style.backgroundColor= "green";
  output.style.marginTop = "10px";
  output.style.fontFamily= "Time New Roman";
  output.style.padding= "10px";
}
//button action
button.onclick = sayMyName;
button2.onclick =  favoritecolor;
button3.onclick = glitchy;
button4.onclick = reset;
