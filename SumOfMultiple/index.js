function sumOfMultiples(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  console.log("Some of multiples of 3 and 5 is", sum);
}

sumOfMultiples(10);
