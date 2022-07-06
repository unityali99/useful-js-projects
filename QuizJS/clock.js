var interval;
var date = new Date();
var countDown;

function setClock()
{
    date.setMinutes(1)
    date.setSeconds(0)
    countDown = date.toString().slice(19,24);
    document.getElementById('count').innerHTML = countDown
}

function doCountDown()
{
    var currentSec = date.getSeconds();
        date.setSeconds(currentSec - 1);
        countDown = date.toString().slice(19,24);
        document.getElementById('count').innerHTML = countDown
}

function startClock()
{
    setClock();
    interval = setInterval( () =>
    {
        if(countDown == '00:00')
            {
                alert("Time is up !");
                nextQuestion();
                return;
            }
        doCountDown();
    },1000)
}