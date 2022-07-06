const OddOrEven = (limit) => {
  if (!(typeof limit === "number")) return console.log("Please Enter");

  for (let i = 0; i <= limit; i++) {
    i % 2 === 0 ? console.log(i, "Even") : console.log(i, "Odd");
  }
};

OddOrEven(20);
