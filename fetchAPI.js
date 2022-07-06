// let fetchAPI = () =>
// {
//     return new Promise((resolve, reject) => 
//     {
//         setTimeout(() => {
//             resolve("Done.");
//         }, 1000);
//     })
// }

// console.log("Synced")//delay test (setTimeOut)

// fetchAPI()
// .then((response) =>
// {
//     console.log("Response => ",response);
// })
// .catch((error) => 
// {
//     console.log("Error => ",error);
// })

let fetchAPI = () =>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            resolve("Done.");
        }, 1000);
    })
}

let fetchAPI2 = () =>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            resolve("Done.");
        }, 1000);
    })
}

let fetchAPI3 = () =>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            resolve("Done.");
        }, 1000);
    })
}

let fetchAPI4 = () =>
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            reject("NOT Done.");
        }, 1000);
    })
}

Promise.all([
    fetchAPI(),
    fetchAPI2(),
    fetchAPI3(),
    fetchAPI4()
])
.then(([rep1,rep2,rep3,rep4]) =>
{
    console.log("rep1",rep1);
    console.log("rep2",rep2);
    console.log("rep3",rep3);
    console.log("rep4",rep4);
})
.catch((error) => 
{
    console.log("error",error);
})

// If one fetchAPI occurs error , all of the process will be cancelled and cause error.