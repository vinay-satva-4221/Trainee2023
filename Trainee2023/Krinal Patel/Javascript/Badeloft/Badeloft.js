var user = [];

function validatecheck() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    var emailC1 = "krinalpatel@gmail.com";
    var emailC2 = "k@gmail.com";
    var emailC3 = "np@gmail.com";
    var emailC4 = "kp@gmail.com";

    var passwordC1 ="Krinal@123";
    var passwordC2 ="Krinal@123";
    var passwordC3 ="Krinal@123";
    var passwordC4 ="Krinal@123";
debugger;
    if(email == emailC1 && password== passwordC1 || email == emailC2 && password== passwordC2||email == emailC3 && password== passwordC3 || email == emailC4 && password== passwordC4){
        console.log("Log in");
        window.location.replace("Dashboard.html")
        var userObj = {email:email,password: password}
        user.push(userObj);
            
        localStorage.setItem( 'LoginDetails', JSON.stringify(user));
    }
    else{
        if(email=="" && password==""){
            document.getElementById("invalid_email").innerHTML = "This Field is required*"
            document.getElementById("invalid_password").innerHTML = "This Field is required*"
        }
        else if(email != emailC1 && password!= passwordC1 || email != emailC2 && password!= passwordC2||email != emailC3 && password!= passwordC3 || email != emailC4 && password!= passwordC4){
            document.getElementById("invalid_email").innerHTML = "Email id is wrong*"
            document.getElementById("invalid_password").innerHTML = "Password is wrong*"
        }

    }
  
  }

// function validateemail() {
//     let setemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     let email = document.getElementById("email").value;
//     let msgemail = document.getElementById("invalid_email");
//     if (!setemail.test(email)) {
//         msgemail.innerHTML = "*Please enter @ and .com";
//         msgemail.style.color = "red";
//         document.getElementById("invalid_email").style.display = "unset";

//         return false;
//     } else {
//         document.getElementById("invalid_email").style.display = "none";
//         return true;
//     }
// }
// function validatepassword() {
//     let setpass =/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
//     let pass = document.getElementById("password").value;
//     let msgpass = document.getElementById("invalid_password");
//     if (!setpass.test(pass)) {
//         msgpass.innerHTML = "*Please enter correct password";
//         msgpass.style.color = "red";
//         document.getElementById("invalid_password").style.display = "unset";

//         return false;
//     } else {
//         document.getElementById("invalid_password").style.display = "none";
//         return true;
//     }
// }
$.validator.addMethod("Emailcheck", function (value) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  });
  $.validator.addMethod("password", function (value) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
  });

$("form[name='login_form']").validate({
    rules: {
      email: {
        required: true,
        Emailcheck: true,
      },
      password: {
        required: true,
        password: true,
      },
    },
    messages: {
      email: {
        required: "Enter your Email",
        email: true,
        Emailcheck: "Please Enter Email correctly",
      },
      password: {
        required: "Enter your Password",
        password: "Please Enter Password correctly",
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

