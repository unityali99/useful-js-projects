let fetchAPI = async () =>
{
    try
    {
        const response = await fetch('https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/');
        const result = await response.json()
        return result;
    }
    catch(err)
    {
        console.log("Error => ",err)
    }
}

fetchAPI().then((res) => {
    console.log("Response => ",res)
});
