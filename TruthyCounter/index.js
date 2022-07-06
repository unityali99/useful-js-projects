const truthyCounter = (arr) => {
  let i = 0;
  for (const item of arr) if (item) i++;

  console.log("The number of truthy objects in this array is", i);
};

const myArray = [0, 9, 3, 5, 6, 7, "", NaN, undefined];

truthyCounter(myArray);
