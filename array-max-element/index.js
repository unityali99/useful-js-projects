const numbers = [1, 4, 6, 1, 6.00000000001, 2, 3];

const getMax = (array) => {
  //#region
  //   let max = 0;
  //   array.forEach((value) => {
  //     if (value > max) max = value;
  //   });
  //   return max;
  //#endregion
  if (array.length === 0 && typeof array === "object") return undefined;
  return array.reduce((previous, current) =>
    current > previous ? current : previous
  );
};

console.log(getMax(numbers));
