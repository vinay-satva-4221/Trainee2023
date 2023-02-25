$(document).ready(function () {

    var loggedData = localStorage.getItem('LoggedInUser');
    var myarray = JSON.parse(loggedData);
    var displayName = myarray.find(
        x => x.UserName);
    $('#diplayName').text(displayName.UserName);

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
