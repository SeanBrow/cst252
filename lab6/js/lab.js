/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Variable
// Define Variables
myTransport = [ "Subaru Outback", "bike", "bus", "ride from relatives"];

myMainRide = {
  make: "Subaru",
 model : "Outback",
 color : "Blueish Grey",
 year : 2005,
 age : function() {
  return 2020 - age;
  }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
