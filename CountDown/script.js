var interval;
var date = new Date();
var countDown;

function cookieUndefined()
{
    date.setMinutes(2)
    date.setSeconds(0)
    Cookies.set('time',date)
    countDown = date.toString().slice(19,24);
    document.getElementsByClassName('count')[0].innerHTML = countDown
}

function cookieDefined()
{
    date = new Date(Cookies.get('time').toString().replace("%20"," "));
    countDown = date.toString().slice(19,24);
    document.getElementsByClassName('count')[0].innerHTML = countDown;
}

function pageLoad()
{
    if(Cookies.get('time') == undefined)
    {
        cookieUndefined();
    }
    else
    {
        cookieDefined();
    }
}

function doCountDown()
{
    var currentSec = date.getSeconds();
        date.setSeconds(currentSec - 1);
        countDown = date.toString().slice(19,24);
        Cookies.set('time',date)
        document.getElementsByClassName("count")[0].innerHTML = countDown;
}

function start()
{
    interval = setInterval( () =>
    {
        if(countDown == '00:00')
            {
                alert("Time is up !");
                pause();
                return;
            }
        doCountDown();
    },1000)
    document.getElementsByClassName("btnstart")[0].disabled = true;
    document.getElementsByClassName("btnpause")[0].disabled = false;
    document.getElementsByClassName("btnreset")[0].disabled = false;
}

function pause()
{
    clearInterval(interval);
    document.getElementsByClassName("btnpause")[0].disabled = true;
    document.getElementsByClassName("btnstart")[0].disabled = false;
    document.getElementsByClassName("btnreset")[0].disabled = false;
}

function reset()
{
    clearInterval(interval)
    cookieUndefined();
    document.getElementsByClassName("btnreset")[0].disabled = true;
    document.getElementsByClassName("btnpause")[0].disabled = true;
    document.getElementsByClassName("btnstart")[0].disabled = false;
}






