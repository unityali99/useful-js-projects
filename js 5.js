class SamsungPhone
{
    constructor(model = 'S20', ram, camera)
    {
        this._model = model;
        this._ram = ram; 
        this._camera = camera;
        this._company = "Samsung" 
    }

    get company()
    {
        return this._company;
    }

    get model()
    {
        return this._model;
    }

    set model(stringValue)
    {
        this._model = stringValue; 
    }

    get ram()
    {
        return this._ram;
    }

    set ram(intValue)
    {
        this._ram = intValue; 
    }

    get camera()
    {
        return this._camera;
    }

    set camera(intValue)
    {
        this._camera = intValue; 
    }

    printPhoneInfo()
    {
        console.log(this.company," Phone => Model : ",this.model," Ram : ",this.ram," Camera : ",this.camera)
    }

    evaluate()
    {
        if(this.ram > 4 && this.camera > 32)
            console.log("Your phone costs more than 150 dollars.");

        else
            console.log("Your phone costs about 150 dollars or less.");
    }
}


const myPhone = new SamsungPhone("A10",2,32);

myPhone.printPhoneInfo();

myPhone.evaluate();