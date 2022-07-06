let fetchAPI = () => 
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            if (2 > 3 /* 6 > 3 => (true) */)
                resolve('DONE');
            else
                reject("Error")
        }, 1000);
    })
}

fetchAPI().then((reply) =>
{
    console.log("Reply => ",reply);
    return reply
})
.then((reply) =>
{
    console.log("Reply2 =>",reply);
})
.catch((err) =>
{
    console.log("Error => ",err)
})
.finally(() => 
{
    console.log("Continue .......")
})