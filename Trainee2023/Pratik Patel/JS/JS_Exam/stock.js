$(document).ready(function()
{ 
    //Display name in Navbar
    var logedinUser=JSON.parse(localStorage.getItem("LogedinUser"))
    $("#loginUseName").html(logedinUser[0].Name)
    $("#PrifleImage").attr("src",logedinUser[0].Picture)

    //Logout
    $("#logout").click(function(){
        debugger
        // localStorage.clear("LogedinUser")
       
        // $(location).attr('href',url);
        // window.location.href = "index.html";

        window.location.replace("index.html");
        // window.location.replace("url"); 
    })
})