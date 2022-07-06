const gradeCalculator = (grades) => {
  const grade = averageCalculator(grades);

  if (grade < 60) return console.log("Grade F.");
  if (grade < 70) return console.log("Grade D.");
  if (grade < 80) return console.log("Grade C.");
  if (grade < 90) return console.log("Grade B.");
  return console.log("Grade A.");
};

const averageCalculator = (grades) => {
  let sum = 0;
  for (const iterator of grades) sum += iterator;
  return sum / grades.length;
};

gradeCalculator([80, 77, 90, 83]);
