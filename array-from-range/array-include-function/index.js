const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 32];

const includes = (array, targetNum) => {
  for (const item of array) if (item === targetNum) return true;
  return false;
};

console.log(includes(arrayOfNumbers, 9));
