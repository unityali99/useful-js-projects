function sayHi()
{console.log("Hello")}

setTimeout(() => 
{
    sayHi()
}, 2000);

var myInterval = setInterval(() => {
   sayHi() 
}, 1500);

