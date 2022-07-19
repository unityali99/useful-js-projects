const numbers = [0, 6, 1, 6, 1, 1, 1, 1, 6, 1];

const elementCounter = (array, targetElement) => {
  return array.reduce((counter, current) => {
    if (current === targetElement) counter++;
    return counter;
  }, 0);
};
console.log(elementCounter(numbers, 1));
