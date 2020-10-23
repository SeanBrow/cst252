/*
* Author: Sean Brown, Ryen Rahbar
* Created: September 14th, 2020
* Public Domain
*/
//Function
class Bike {
  constructor(brand, model, year, color, extra) {
    this.bikename = brand;
    this.bikemodel = model;
    this.bikeyear = year;
    this.bikecolor = color;
    this.bikeextra = extra;
  }
  info() {
    return "I have a " + this.bikename + " " + this.bikemodel + " " + this.bikeyear + " " + this.bikecolor + " with a " + this.bikeextra + ".";
  }
}

bikeArray = [];
bikeArray.push ( new Bike("Schwinn", "LeToure", 1974, "Gold", "Brooks saddle"));
bikeArray.push ( new Bike("Suzuki", "Hayabusa", 2000, "Blue", "Electric Starter"));
bikeArray.push ( new Bike("Harley Davidson", "Freerider", 2019, "Cherry", "Extra Storage"));
bikeArray.push ( new Bike("Yamaha", "XTZ 750 Super", 1995, "Gray", "Steel Frame"));

//output
for (i=0; i<bikeArray.length; i++){
  var info = bikeArray[i].info();
  console.log(info);
document.getElementById("output").innerHTML += "<p>" + info + "</p>";
};
