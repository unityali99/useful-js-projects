const numbers = "";

const elementCounter = (array, targetElement) => {
  if (!Array.isArray(array))
    throw new Error("The input is not an array; Please provide an array.");
  return array.reduce((counter, currentValue) => {
    if (currentValue === targetElement) counter++;
    return counter;
  }, 0);
};

try {
  console.log(elementCounter(numbers, 3));
} catch (err) {
  console.log("Error:", err.message);
}
