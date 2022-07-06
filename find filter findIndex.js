const objects = 
[
    {id:1, name:"Ali", lname:"Ahmadi"},
    {id:2, name:"Hossein", lname:"Bashiri"}
];

const numArray = [1, 2, 3, 4, 5];

console.log(objects.find(p => p.name === "Ali")/*.lname*/)

console.log(objects.findIndex(p => p.name === "Hossein"))

console.log(objects.filter(p => p.id === 1))

console.log(numArray.filter(p => p > 2))