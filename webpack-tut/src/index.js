import Stack from "./Stack";

const myStack = new Stack(["A", "B", "C"]);

myStack.push("D");

console.log(myStack.peek());

console.log(myStack.pop());

console.log(
  "Count of the stack => ",
  myStack.count,
  "\n Item to pop (peek) ==> ",
  myStack.peek()
);
