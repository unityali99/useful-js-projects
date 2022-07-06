const person = 
{
    name: "Ali",
    lastname: "Ahmadi",
    Age: 29,
    subject: "Software Engineering",
}

Object.values(person).map((item) => 
{
    console.log("Item => ",item);
})

Object.entries(person).map(([key, value]) => 
{
    console.log("Key => ",key," ","Value => ",value);
})

for (const key in person) {
    console.log(person[key], " is the value and the key is",key)
}

