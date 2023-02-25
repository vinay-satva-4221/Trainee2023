$(document).ready(function(){
    $.validator.addMethod('validPassword',
    function(value){
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)
    }, 
    );
    $.validator.addMethod('validEmail',
    function(value){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    }, 
    );
    $("#Login").validate({
        rules:{
            Email:{
                required: true,
                validEmail: true
            },
            Password:{
                required : true,
                validPassword: true
            },
        },
        messages:{
            Email:{
                required: "Enter Your Email",
                validEmail : "Enter Valid Email"
            },
            Password: {
                required: "Enter Password",
                validPassword: "Minimum 8 Chracter"
            },
        },
    });
    $('#login').click(function(){
        $('#Login').valid()==true
    })
    window.history.forward();
    if(window.history.forward(1) != null)
      window.history.forward(1);
});

// function checkEmailPass()
// {
//     var email = document.getElementById('Email').value;
//     var password = document.getElementById('Password').value;
//     localStorage.setItem("Email", email);
//     localStorage.setItem("Password",password);

//     if(((Login.Email.value == "sakshi@gmail.com" || Login.Email.value == "SAKSHI@gmail.com") && Login.Password.value =="12345678") || ((Login.Email.value == "p@gmail.com" || Login.Email.value == "P@gmail.com") && Login.Password.value =="12345678") || ((Login.Email.value == "k@gmail.com" || Login.Email.value == "k@gmail.com") && Login.Password.value =="12345678") || ((Login.Email.value == "a@gmail.com" || Login.Email.value == "A@gmail.com") && Login.Password.value =="12345678"))
//     {
//         window.location.href = "Dashboard.html";
//     }
//     else
//     {
//         swal("Email or Password Is Incorrect");
//     }
// }
var user = [];
function checkEmailPass() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
 
    var User1 = "Sakshi@gmail.com";
    var User2 = "Priyesh@gmail.com";
    var User3 = "Anjali@gmail.com";
    var User4 = "Krupali@gmail.com";

    var User1Pass ="Sakshi@123";
    var User2Pass ="Priyesh@123";
    var UserPass3 ="Anjali@123";
    var UserPass4 ="Krupali@123";


    if(email == User1 && password== User1Pass){
        var userObj = {
          email:email,
          password: password,
          username: "Sakshi"
        }
        user.push(userObj); 
        localStorage.setItem('Badeloft-Details', JSON.stringify(user));
        window.location.replace("Dashboard.html")
    }
    else if( email == User2 && password== User2Pass){
      window.location.replace("Dashboard.html")
      var userObj = {
        email:email,
        password: password,
        username: "Priyesh"
      }
      user.push(userObj);
      localStorage.setItem('Badeloft-Details', JSON.stringify(user));
    }
    else if( email == User3 && password== UserPass3 ){
      window.location.replace("Dashboard.html")
      var userObj = {
        email:email,
        password: password,
        username: "Anjali"
      }
      user.push(userObj);   
      localStorage.setItem('Badeloft-Details', JSON.stringify(user));
    }
    else if( email == User4 && password== UserPass4){
      window.location.replace("Dashboard.html")
      var userObj = {
        email:email,
        password: password,
        username: "Krupali"
      }
      user.push(userObj); 
      localStorage.setItem('Badeloft-Details', JSON.stringify(user));
    }
    else{
      swal({
        title: "Invalid or missing",
        text: "Please enter all the details apropriately",
        icon: "warning",
        button: "Ok"
    });
    }
  }



   