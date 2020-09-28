/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Functions
window.onload = function ( ) {

outputEl = document.getElementById('output');

function firsTthing (test) {
  console.log(test + ": This is the first thing.<br>");
  outputEl.innerHTML += test + ": This is the first thing.<br>";
}

function secondThing (test) {
  console.log(test + ": This is the second thing.<br>");
 outputEl.innerHTML  += test + ": This is the second thing.<br>";
}

function thirdThing (test) {
  console.log(test + ": This is the third thing.<br>");
  outputEl.innerHTML  += test + ": This is the third thing.<br>";
}

//Test 1
firstthing("TEST 1");
secondthing("TEST 1");
thirdthing("TEST 1");
//Test 2
setTimeout(function() {
firstthing("TEST 2");
}, 0);
setTimeout(function() {
secondthing("TEST 2");
}, 0);
setTimeout(function() {
thirdthing("TEST 2");
},0);

//Test 3
setTimeout (function() {
  firstthing("TEST 3");
},3000);
setTimeout (function() {
secondthing("TEST 3");
},1000);
setTimeout (function() {
thirdthing("TEST 3");
},4000);
}
