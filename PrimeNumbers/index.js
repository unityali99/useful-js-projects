const showPrimes = (limit) => {
  for (let i = 2; i <= limit; i++) {
    let flag = true;
    for (let j = i; j > 1; j--) {
      if (!(j === i || j === 1)) if (i % j === 0) flag = false;
    }
    if (flag) console.log(i);
  }
};

showPrimes(19);
