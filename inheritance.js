class Animal 
{
    constructor(name)
    {
        this._animalName = name;
    }

    get animalName()
    {
        return this._animalName
    }

    set animalName(value)
    {
        this._animalName = value
    }

    present()
    {
        console.log('I am a ' + this._animalName);
    }
}


class Lion extends Animal
{
    constructor(gender)
    {
        super('Lion')
        this._gender = gender
    }

    get gender()
    {
        return this._gender;
    }

    set gender(value)
    {
        this._gender = value
    }

    get animalName()
    {
        return this._animalName
    }

    set animalName(value)
    {
        this._animalName = value
    }

    sound()
    {
        console.log('I am so loud if I shout and my sex is ' + this.gender);
    }
}

let myLion = new Lion('male');

myLion.sound()
myLion.present()