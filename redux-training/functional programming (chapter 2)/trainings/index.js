// Function as first class citizen
// const sayhello = () => {
//   return function () {
//     return "Hello";
//   };
// };

// const myFunc = sayhello();

// myFunc();

//---------------------------------------------------

//Higher order functions

// const sayhello = () => {
//   return function () {
//     return "Hello";
//   };
// };

// const myFunc = sayhello();

// const myFunc2 = (argFunc) => {
//   console.log(argFunc());
// };

// myFunc2(myFunc);

//---------------------------------------------------

//Function composition

// let myVar = "   javascript   ";

// const trim = (str) => str.trim();

// const wrapInDiv = (str) => `<div>${str}</div>`;

// const convertToUpperCase = (str) => str.toUpperCase();

// const allInOneFunction = convertToUpperCase(wrapInDiv(trim(myVar)));

// console.log(allInOneFunction);

//---------------------------------------------------

//Composing and piping + Currying

// const fp = require("lodash/fp");

// let myVar = "   javascript   ";

// const trim = (str) => str.trim();

// const convertToUpperCase = (str) => str.toUpperCase();

// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// const allInOneFunction = fp.pipe(trim, convertToUpperCase, wrap("div"));

// or const allInOneFunction = fp.compose(wrap("div"), convertToUpperCase, trim);

// console.log(allInOneFunction(myVar));

//---------------------------------------------------

// Immutability:

// Updating Objects

// const person = {
//   name: "Ali",
//   address: {
//     country: "Iran",
//     city: "Tehran",
//     hood: "Lavizan",
//   },
// };

// const person2 = {
//   ...person,
//   lastname: "Ahmadi",
//   address: {
//     ...address,
//     city: "Karaj",
//     hood: "Shahin Villa",
//   },
// };

// Updating Arrays

// const myArray = [1, 2, 3, 5];

// const index = myArray.indexOf(5);

// const addedArray = [...myArray.slice(0, index), 4, ...myArray.slice(index)];

// console.log(addedArray);

// Working with immutable.js

// import { Map } from "immutable";

// const myObj = Map({ name: "Ali", lastname: "Ahmadi" });

// console.log(myObj.get("name"));

// const myNewObj = myObj.set("name", "Hossein");

// console.log(myNewObj);

// console.log(myNewObj.toJS()); // ==> { name: 'Hossein', lastname: 'Ahmadi' }

// Working with Immer.js

// import { produce } from "immer";

// const myObj = { name: "Ali", lastname: "Ahmadi" };

// function copyObjectAndAdd(obj) {
//   return produce(obj, (draftObj) => {
//     draftObj.dead = false;
//     draftObj.martyr = true;
//   });
// }

// console.log(copyObject(myObj));

//---------------------------------------------------
