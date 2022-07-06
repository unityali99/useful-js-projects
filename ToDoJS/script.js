function setOrGetHTML()
{
    if (localStorage.getItem("html") == undefined)
        return;

    else 
    {
        document.getElementById('myUL').innerHTML = localStorage.getItem('html');
        activateClickClose();
    }
}

const saveChanges = (html) =>
{
    localStorage.setItem('html',html);
}

const createClose = (element) => 
{
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    element.appendChild(span);
}

const activateClickClose = () =>
{
    let close = document.getElementsByClassName('close');
    let i;
    for (i = 0; i < close.length; i++)
    {
        close[i].onclick = function() 
        {
            let item = this.parentElement;
            item.style.display = "none";
            saveChanges(document.getElementById("myUL").innerHTML)
        }
    }
}

var theNodeItems = document.getElementsByTagName("LI");
var i;
for (i = 0; i < theNodeItems.length; i++)
{
    createClose(theNodeItems[i]);
}

    activateClickClose();

var list = document.querySelector("ul");

list.addEventListener('click',function(ev)
{
    if (ev.target.tagName === "LI")
        ev.target.classList.toggle("checked")
        saveChanges(document.getElementById("myUL").innerHTML)
},false)

function createNewElement()
{
    let li = document.createElement('li');
    let inputText = document.getElementById('myInput').value;
    let textNode = document.createTextNode(inputText);
    li.appendChild(textNode);
    if (inputText === '')
        alert("Please fill out the input.");
    else
        document.getElementById("myUL").appendChild(li);

    debugger;
    
    document.getElementById("myInput").value = "";

    createClose(li);

    activateClickClose();

    saveChanges(document.getElementById("myUL").innerHTML)
}

