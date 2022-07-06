const stringIdentifier = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "string")
      console.log(key, obj[key], "String property found.");
  }
};

const myObj = {
  name: "Ali",
  lastName: "Ahmadi",
  age: 15,
  city: "tehran",
};

stringIdentifier(myObj);
