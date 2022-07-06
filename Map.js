const m = new Map()
const s = new Set()

s.add("Tehran");
m.set("fname","Ali");
m.set("lname","Ahmadi");
m.set(s,"capital");

s.forEach(name => {console.log("Name => ",name)})
m.forEach(item => {console.log("items => ",item)})

console.log(m.get("fname"))
console.log(m.keys())

//m.values().next()
//m.keys().next()


