/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variable

//function
// Return Gryffindor, Ravenclaw, Slytherin, and/or Hufflepuff
function sortingHat (str) {
  len = str.length;
  mod = len %  4;
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
}
//housesArray
// Seperate house.
housesArray = [
{
house: "Gryffindor",
text: "Gryffindors are known for daring, nerve and chivalry."
},

{
house: "Ravenclaw",
text: " Members of this house are characterised by their wit, intelligence, creativity and wisdom."
},

{
house: "Slytherin",
text: " Slytherin possess the traits of cunning, resourcefulness and ambition."

},

{
house:"Hufflepuff",
text: " Hufflepuff is the most inclusive of the four houses, valuing hard work, patience, loyalty and fair play rather than a particular aptitude in its members."
},
{
title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
text: " AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
},
]

// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatFinal(str) {
    len = str.length;
mod = len % housesArray.length;
  return housesArray[mod];
}

var myButton = document.getElementById ("button");
myButton.addEventListener ("click", function () {
    var name = document.getElementById("input").value;
    var house = sortingHatFinal(name);

    newText = "<b><p> The Sorting Hat has sorted you into " + house.house +".</p></b>" +
     "<p>" + house.text + "</p>";

    document.getElementById("output").innerHTML = newText;
})
