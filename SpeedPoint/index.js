function speedToPoints(speed) {
  let speedLimit = 70;
  let speedPerPoint = 5;

  if (speed <= speedLimit) return "OK";

  const points = Math.floor((speed - speedLimit) / speedPerPoint);

  if (points >= 12)
    return `License Suspended. ==> ${points} negative points. Your speed ==> ${speed}`;

  return `${points} negative points. Your speed ==> ${speed}`;
}

console.log(speedToPoints(90));
