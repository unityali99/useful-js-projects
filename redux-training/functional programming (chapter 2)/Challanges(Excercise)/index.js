// const fp = require("lodash/fp");

// const myVar = "JAVASCRIPT";
// const convertToLowerCase = (str) => str.toLowerCase();
// const wrap = (wrapItem) => (str) => `${wrapItem} ${str} ${wrapItem} `;
// const convertMyString = fp.pipe(convertToLowerCase, wrap("<div>"));

// console.log(convertMyString(myVar));

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

const updated = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"],
};

// console.log(updated);

const edited = {
  ...updated,
  ingredients: [
    ...updated.ingredients.map((item) => (item === "egg" ? "egg white" : item)),
  ],
};

// console.log(edited);

const deleted = {
  ...edited,
  ingredients: [...edited.ingredients.filter((item) => item !== "egg white")],
};

console.log(deleted);
