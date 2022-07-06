function myObj(street, plaque, zipCode) {
  return {
    street,
    plaque,
    zipCode,
  };
}

console.log(myObj("17 shahrivar", "29", "1545"));

function myObj2(street, plaque, zipCode) {
  this.street = street;
  this.plaque = plaque;
  this.zipCode = zipCode;
}

const instanceObj = new myObj2("17 shahrivar", "29", "1545");

console.log(instanceObj);
