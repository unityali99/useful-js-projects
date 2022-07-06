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

function searchMovie() 
{
    clearChildOfParent();
    let myApiKey = '3d5bcf3';
    let url = 'http://www.omdbapi.com/?apikey='+myApiKey;
    let searchUrl = url+'&t='+document.getElementById('movienameinput').value;
    fetchAPI(searchUrl).then((res) => {
        let newElement = document.createElement('div');
        newElement.className = 'container text-center mt-5';
        let newElement2 = document.createElement('div')
        newElement2.className = 'card w-50 mx-auto';
        let newElement3 = document.createElement('img')
        newElement3.className = 'card-img-top w-75 mx-auto';
        newElement3.src = res.Poster
        newElement3.alt = 'Poster Image';
        let newElement4 = document.createElement('div');
        newElement4.className = 'card-body';
        let newElement5 = document.createElement('h4');
        newElement5.className = 'card-title';
        newElement5.innerHTML = 'Name: '+res.Title+', Year: '+res.Year;
        let newElement6 = document.createElement('p');
        newElement6.className = 'card-text';
        newElement6.innerHTML = res.Plot;
        let newElement7 = document.createElement('a');
        newElement7.href = res.Poster;
        newElement7.target = '_blank'
        newElement7.className = 'btn btn-success btn-outline-danger text-light stretched-link';
        newElement7.innerHTML = 'See Poster';
        newElement4.appendChild(newElement5);
        newElement4.appendChild(newElement6);
        newElement4.appendChild(newElement7);
        newElement2.appendChild(newElement3);
        newElement2.appendChild(newElement4);
        newElement.appendChild(newElement2);;
        document.getElementById('main').appendChild(newElement)
    })
    .catch(err => console.log("Error => ",err));    
}

function clearChildOfParent()
{
    let current = document.getElementById('main');
    current.removeChild(current.lastChild);
}

