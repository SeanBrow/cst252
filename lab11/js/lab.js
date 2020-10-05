/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variable

//function
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
housesArray = [
{
title: "Gryffindor",
text: " hello"
},

{
title: "Ravenclaw",
text: " hello"
},

{
title: "Slytherin",
text: " hello"

},

{
title: "Hufflepuff",
text: " hello"
},

]


function sortingHatFinal(str) {
  mod = Math.abs(4) % housesArray.length;
  return housesArray[mod];
}

var myButton = document.getElementById ("button");
myButton.addEventListener ("click", function () {
    var name = document.getElementById("input").value;
    var house = sortingHatFinal(name);

    newText = "<b><p> The Sorting Hat has sorted you into " + house.title +".</p></b>" +
     "<p>" + house.text + "</p>";

    document.getElementById("output").innerHTML = newText;
})
