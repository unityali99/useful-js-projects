const arr = [2, 2, 6, 3, 9, 5, 6, 7];

const exclude = (array, excluded) => {
  newArray = [];
  for (const item of array) {
    if (!excluded.includes(item)) newArray.push(item);
  }
  return newArray;
};

console.log(exclude(arr, [2, 6]));
