/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variables
var str = "";
  var i=0;

  //For function
for (i =1; i <= 200; i++) {
  //print out the number, the basic part of the list.
  str+= i +". - ";
if(i%35==0) {
str +=   " BuzzBoom!<br>";
console.log ("FizzBoom");
}
    //adds Fizz,Buzz, Boom, Etc...
    else if (i%21==0) {
    str +=   " FizzBoom!<br>";
  console.log ("FizzBoom");
}
 else  if (i%15 == 0)
  { str +=  " FizzBuzz! <br>";
  console.log ("FizzBuzz");
  }
  else if (i %3 ==0) {
  str +=   " Fizz!<br>";
    console.log ("Fizz");
  }
  else if (i %5 ==0) {
  str +=   " Buzz!<br>";
    console.log("Buzz");
  }
  else if (i%7 ==0) {
  str +=   " Boom!<br>";
    console.log("Boom");
  }
// if there is no assigned number, it will just fill in via the assigned number with a break.
  else {
  str+= i + "</br>";
        console.log(i);
  }
}


//BONUS



//output
 document.getElementById("output").innerHTML = str;
