
//DOM basics
var onSubmitForm = function(event)
        {
        //     event.preventDefault();
        //     var form = new FormData(event.target);
        //     var user = form.get("user");
        //     var pass = form.get("pass");
        //     console.log("user pass",user,pass);
        // 
            event.preventDefault();
            var user = document.getElementsByName("user")[0].value;
            var pass = document.getElementsByName("pass")[0].value;
            document.getElementsByName("user")[0].style.backgroundColor = "green";
            document.getElementsByName("pass")[0].style.backgroundColor = "green";
            console.log("user pass", user, pass);
        }




//Working With window.location
var onPageLoad = function()
{
    document.getElementById("host").innerHTML = location.host
}

var onClickGoogle = function()
{
    location.href = "https://www.google.com/"
}