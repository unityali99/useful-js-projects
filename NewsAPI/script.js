let myURL = 'https://newsapi.org/v2/everything?q=Apple&from=2021-08-23&sortBy=popularity&apiKey=2f7c83c82a03499a873c4edfed109f85';

let fetchAPI = async (url) =>
{
    try
    {
        const response = await fetch(url);
        const result = await response.json()
        return result;
    }
    catch(err)
    {
        console.log("Error => ",err)
    }
}

fetchAPI(myURL).then((res) => 
    {
        // console.log(res)
        let length = res.articles.length;
        appendNews(res,length);
    })
    .catch(err => 
        {
            document.getElementById('news').innerHTML = `Error Happened => ${err}`
        });

function appendNews(result,length)
{
    let i;
    for (i = 0; i < length; i++)
    {
        let newElement = document.createElement('div');
        newElement.className = 'mt-5';
        let newElement2 = document.createElement('div')
        newElement2.className = 'card w-100 mx-auto';
        let newElementSpan = document.createElement('span');
        newElementSpan.className = 'badge badge-pill badge-success'
        newElementSpan.innerHTML = result.articles[i].source.name;
        let newElement3 = document.createElement('img')
        newElement3.className = 'card-img-top w-75 mx-auto';
        newElement3.src = result.articles[i].urlToImage;
        newElement3.alt = 'News Image';
        let newElement4 = document.createElement('div');
        newElement4.className = 'card-body';
        let newElement5 = document.createElement('h4');
        newElement5.className = 'card-title';
        newElement5.innerHTML = 'Name: '+result.articles[i].title+',<br/>Date Published: '+result.articles[i].publishedAt;
        let newElement6 = document.createElement('p');
        newElement6.className = 'card-text';
        newElement6.innerHTML = result.articles[i].content;
        let newElement7 = document.createElement('a');
        newElement7.href = result.articles[i].url;
        newElement7.target = '_blank'
        newElement7.className = 'btn btn-success btn-outline-danger text-light stretched-link';
        newElement7.innerHTML = `See Post`;
        newElement4.appendChild(newElement5);
        newElement4.appendChild(newElement6);
        newElement4.appendChild(newElement7);
        newElement2.appendChild(newElement3);
        newElement2.appendChild(newElement4);
        newElement.appendChild(newElementSpan)
        newElement.appendChild(newElement2);;
        document.getElementById('news').appendChild(newElement)
    }
}


        