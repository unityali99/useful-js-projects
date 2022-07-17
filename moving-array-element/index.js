const arr = [1, 2, 3, 4, 5];

const move = (array, index, offset) => {
  const position = offset + index;
  if (position >= array.length || position < 0)
    return console.error("Bad Offset.");

  const element = array.splice(index, 1)[0];
  array.splice(position, 0, element);
  return array;
};

console.log(move(arr, 4, -4));
