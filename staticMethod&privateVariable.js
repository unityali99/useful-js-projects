class Subject
{
    #score = 19.5;
    constructor(score)
    {
        this.#score = score
    }

    metod = () => 
    {
        console.log("Your Score =>",this.#score)
    }
}

let myScore = new Subject(18);

myScore.metod();

class MyStaticClass
{
    _variable = 1;
    _variable2 = 2;
    constructor(x,y)
    {
        this._variable = x;
        this._variable2 = y
    }

    static print = (name) => 
    {
        console.log('Hello',name)
    }
}

MyStaticClass.print('Ali');  

let myClass = new MyStaticClass(1,2);

console.log(myClass._variable)
console.log(myClass._variable2)