//A random array for test. User can create his own array !
var myArray = [76, 4, 55, 2, 7, 8];

function push(theArray,value)
{
    var newArray = theArray;
    newArray.splice(0, 0, value)
    return newArray;
}

function pull(theArray)
{
    var newArray = theArray;
    console.log(newArray[newArray.length - 1],"has been pulled from the array.")
    newArray.splice(newArray.length - 1, 1)
    return newArray;
}

var myNewArray = pull(myArray);

console.log("The Array which is pulled => ",myNewArray)

var myNewArray = push(myArray,33);

console.log("The Array which is pushed => ",myNewArray);

