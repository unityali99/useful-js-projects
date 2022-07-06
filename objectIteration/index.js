const myCuteObject = {
  street: "17 Shahrivar",
  plaque: "29",
  zipCode: "1545",
};

const showAddress = (obj) => {
  for (const key in obj) {
    console.log(obj[key]);
  }
};

showAddress(myCuteObject);
