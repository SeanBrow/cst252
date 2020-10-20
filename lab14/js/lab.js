/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Function
function Vehicle(brand, name, date, color, extras) {
this.brand = brand;
this.name = name;
this.date = date;
this.color = color;
this.extras= extras;
this.info= function () {
    return(this.brand +", "+this.name+", "+this.date+ ", "+this.color+", "+this.extras+ ".");
};
};

//Variables
var bike = new Vehicle("Schwinn", "LeToure", 1974, "gold", "Brooks saddle");



//output
document.getElementById("output").innerHTML += "<p>" + bike.info() + "</p>";
