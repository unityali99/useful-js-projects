const arrayFromRange = (min, max) => {
  const myArr = [];
  for (let i = min; i <= max; i++) myArr.push(i);
  return myArr;
};

const numbers = arrayFromRange(-10, -4);

console.log(numbers);
