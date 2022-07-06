var count = 0;
var interval;

function start()
{
    interval = setInterval( () =>
    {
        count++;
        document.getElementsByClassName("count")[0].innerHTML = count;
    },1000)
    document.getElementsByClassName("btnstart")[0].disabled = true;
    document.getElementsByClassName("btnpause")[0].disabled = false;
}

function pause()
{
    clearInterval(interval);
    document.getElementsByClassName("btnpause")[0].disabled = true;
    document.getElementsByClassName("btnstart")[0].disabled = false;
}