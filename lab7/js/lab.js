/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variable

function sortUserName () {
   var userName = window.prompt ("Hi, Please tell me your name so i can fix it.");
   console.log("userName =", userName);
   //split string to Arrays
   var nameArray = userName.split(' ');
   console.log("nameArray =", nameArray);
//sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join(' ');
  console.log("nameSorted = ", nameSorted);
// userName.toLower().split("").join("")
return nameSorted;
}


// output
document.writeln("I've fixed your name: ",
  sortUserName(), "</br>");
