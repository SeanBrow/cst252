/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Function
function Vehicle(make, model, date, color, extras) {
this.brand = make;
this.name = model;
this.date = date;
this.color = color;
this.extras= extras;
this.info= function () {
    return(this.brand + ", " +this.name+ ", " +this.date+ ", " +this.color+ ", "+ this.extras + ".");
};
};

//Variables
bikeArray = [];
bikeArray.push ( new Vehicle("Schwinn", "LeToure", 1974, "Gold", "Brooks saddle"));
bikeArray.push ( new Vehicle("Suzuki", "Hayabusa", 2000, "Blue", "Electric Starter"));
bikeArray.push ( new Vehicle("Harley Davidson", "Freerider", 2019, "Cherry", "Extra Storage"));
bikeArray.push ( new Vehicle("Yamaha", "XTZ 750 Super", 1995, "Gray", "Steel Frame"));

//output
for (i=0; i<bikeArray.length; i++){
  var info = bikeArray[i].info();
  console.log(info);
document.getElementById("output").innerHTML += "<p>" + info + "</p>";
};
