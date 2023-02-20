 // Check if any field is empty
 function validatecheck(){
    
    if ( !validateemail() && !validatepassword()) {
           
        $(document).ready(function () {
    
            $("#loginbtn").click(function () {
               
                swal({
                    title: "Missing fields",
                    text: "Please enter all details",
                    icon: "warning",
                    button: "Ok"
                });
            });
        });

        
    } else {        
            
    }
}

function validateemail() {
    let setemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById("email").value;
    let msgemail = document.getElementById("invalid_email");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "*Please enter @ and .com";
        msgemail.style.color = "red";
        document.getElementById("invalid_email").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_email").style.display = "none";
        return true;
    }
}
function validatepassword() {
    let setpass =/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
    let pass = document.getElementById("password").value;
    let msgpass = document.getElementById("invalid_password");
    if (!setpass.test(pass)) {
        msgpass.innerHTML = "*Please enter correct password";
        msgpass.style.color = "red";
        document.getElementById("invalid_password").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_password").style.display = "none";
        return true;
    }
}



// var email = document.getElementById("email");
// var password = document.getElementById("password");