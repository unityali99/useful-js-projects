const obj1 = { street: "a", plaque: "b", zipCode: "c" };

const obj2 = { street: "a", plaque: "b", zipCode: "c" };

const obj3 = obj1;

function areEqual(object1, object2) {
  return (
    object1.street === object2.street &&
    object1.plaque === object2.plaque &&
    object1.zipCode === object2.zipCode
  );
}

function areSame(object1, object2) {
  return object1 === object2;
}

console.log(areEqual(obj1, obj2)); // true

console.log(areSame(obj1, obj2)); // false

console.log(areSame(obj1, obj3)); // true
