function MaxOfTwoNumbers(firstNum, secondNum) {
  if (firstNum > secondNum) console.log(firstNum, "is the max.");
  else if (secondNum > firstNum) console.log(secondNum, "is the max.");
  else console.log(`${firstNum} and ${secondNum} are equal.`);
}

MaxOfTwoNumbers(4, 7);
