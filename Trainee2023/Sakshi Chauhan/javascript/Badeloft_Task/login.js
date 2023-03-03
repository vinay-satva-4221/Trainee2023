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

var user = [];
function checkEmailPass() {
    var email = document.getElementById("Email").value;
    var lemail = email.toLowerCase();
    var password = document.getElementById("Password").value;
 
    var User1 = "sakshi@gmail.com";
    var User2 = "priyesh@gmail.com";
    var User3 = "anjali@gmail.com";
    var User4 = "krupali@gmail.com";

    var User1Pass ="Sakshi@123";
    var User2Pass ="Priyesh@123";
    var UserPass3 ="Anjali@123";
    var UserPass4 ="Krupali@123";


    if(lemail == User1 && password== User1Pass){
        var userObj = {
          lemail:lemail,
          password: password,
          username: "Sakshi"
        }
        user.push(userObj); 
        localStorage.setItem('Badeloft-Details', JSON.stringify(user));
        window.location.replace("Dashboard.html")
    }
    else if( lemail == User2 && password== User2Pass){
      window.location.replace("Dashboard.html")
      var userObj = {
        lemail:lemail,
        password: password,
        username: "Priyesh"
      }
      user.push(userObj);
      localStorage.setItem('Badeloft-Details', JSON.stringify(user));
    }
    else if( lemail == User3 && password== UserPass3 ){
      window.location.replace("Dashboard.html")
      var userObj = {
        lemail:lemail,
        password: password,
        username: "Anjali"
      }
      user.push(userObj);   
      localStorage.setItem('Badeloft-Details', JSON.stringify(user));
    }
    else if( lemail == User4 && password== UserPass4){
      window.location.replace("Dashboard.html")
      var userObj = {
        lemail:lemail,
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



   