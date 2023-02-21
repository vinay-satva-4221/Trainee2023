$( document ).ready(function() {
   
    // Dynamic adding of name 
    var user = JSON.parse(localStorage.getItem("user"));
    var jName = user[0].Admin;
    console.log(jName)
    $(".dynamicN").html(jName);

    // Dynamic adding image
    var jImg = user[0].Image;
    console.log(jImg);
    $(".adminImg").attr("src",user[0].Image)
});

function logout(){
  
    window.location.replace("Login.html");
}