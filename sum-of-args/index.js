const sumOfArgs = (...args) => {
  if (Array.isArray(args)) return args.reduce((a, b) => a + b);
};

console.log(sumOfArgs(3, 5, 2, 9, 4));
