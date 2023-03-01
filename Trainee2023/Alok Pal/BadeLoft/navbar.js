$(document).ready(function () {
   

    // Addding name of user
    var user = JSON.parse(localStorage.getItem("user"));
    var jName = user[0].Admin;
    console.log(jName);
    $(".dynamicN").html(jName);

    // Dynamic adding image
    var jImg = user[0].Image;
    console.log(jImg);
    $(".adminImg").attr("src", user[0].Image);


   var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $('.nav-item a').each(function(){
        if ($(this).attr('href') == pathname){
        $(this).addClass('active');
        }
    });
});