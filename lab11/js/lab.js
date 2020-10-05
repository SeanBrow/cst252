/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variable

//function
function sortingHat (str) {

  len = str.length;
  mod = len % 4;
  if (mod ==0) {
    return "Gryffindor"

  }
  else if (mod ==1) {
    return "Ravenclaw"
  }
  else if (mod ==2) {
    return "Slytherin"
  }
  else if (mod ==3) {
    return "Hufflepuff"
  }
  //housesArray


}
var myButton = document.getElementById ("button");
myButton.addEventListener ("click", function () {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<b><p> The Sorting Hat has sorted you into " + house +".</p></b>";
    document.getElementById("output").innerHTML = newText;
})
