$(document).ready(function () {

    var loggedData = localStorage.getItem('LoggedInUser');
    var myarray = JSON.parse(loggedData);
    var displayName = myarray.find(
        x => x.UserName && x.UserImage);
    $('#diplayName').text(displayName.UserName);
    $('#loginuserImage').attr("src",displayName.UserImage);
   
    $("#deleteLoggedUser").click(function () {
        
        window.location.replace("./login.html");
        localStorage.removeItem('LoggedInUser');
        
    })

    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $('.nav-item a').each(function(){
        if ($(this).attr('href') == pathname){
        $(this).addClass('active');
        }
    });
});
