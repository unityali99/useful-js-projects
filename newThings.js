class Car{
    constructor(size)
    {
        this.size = size
    }
    width = 100
}

var myCar = new Car("medium");


let cardNum = '504706275689974';

let maskedNum = cardNum.slice(-4).padStart(cardNum.length, '*')

console.log(maskedNum)
