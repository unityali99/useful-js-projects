const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.4 },
  { title: "e", year: 2017, rating: 4.5 },
  { title: "g", year: 2017, rating: 4.7 },
  { title: "f", year: 2017, rating: 4.6 },
];

const arr = movies
  .filter((obj) => obj.year === 2017 && obj.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .reverse()
  .sort((a, b) => (a.title > b.title ? 1 : -1))
  .map((obj) => obj.title)
  .join(",");

console.log(arr);
