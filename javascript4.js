let add = (x,y,...rest) =>
{
    console.log(x+y,"the rest => ",rest[0]);
}

add(5,5,3,1,1,1,1,1);


let CONFIG = 
{
    width: 100,
    hight: 100
}

let CONFIG_EDIT = 
{
    font: 24,
    length: 15,
    ...CONFIG 
}

console.log(CONFIG_EDIT)

let newOptions = 
{
    first: 1,
    second: 2,
    [`second-half`]: 2.5
}

console.log(newOptions)

let felan =  
[
    1,2,3
]

let a,b,c;

[a,b,c] = felan

console.log(a,b,c)

