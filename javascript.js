//JavaScript Basics
console.log("Hello World !");
var a = "ali"
var b = "mmd";
var c = null
var d;
console.log(a + ' ' + b);
var obj = 
{
    Name: "Ali",
    LastName: "Ahmadi",
    SchoolName: "Sanat"
}

console.log(obj.Name + " " + obj.LastName + " => " + obj.SchoolName)

console.log(typeof(obj))
console.log(typeof(a))
console.log(typeof(c))
console.log(typeof (d))

var originalArray = [5, 4, 6, 1, 3, 2]

for (var i = 0; i < originalArray.length; i++) {
    for (var j = 0; j < originalArray.length; j++) {
        if (originalArray[i] < originalArray[j]) {
            var temp = originalArray[j]
            originalArray[j] = originalArray[i]
            originalArray[i] = temp
        }
    }
}

console.log(originalArray)