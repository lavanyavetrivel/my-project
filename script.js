function myfunction(){
    var un = document.forms["myform"]["uname"].value;
    var pw = document.forms["myform"]["pass"].value;
    if(un=="student" && pw=="1234")
    {
        window.location.href="open.html";
    }
}
