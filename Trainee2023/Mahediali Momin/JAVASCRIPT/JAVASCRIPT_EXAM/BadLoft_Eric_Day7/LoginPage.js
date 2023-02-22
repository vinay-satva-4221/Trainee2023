$(document).ready(function () {
    $('#myfrm').validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: "Please enter your email"
            },
            password: {
                required: "Please enter your password",
                minlength: "minimum 5 alphabet required"
            }
        },
        // submitHandler: function (form) {
        //     form.submit();
        // }
    });
});


window.history.forward();
function noBack() {
    window.history.forward();
}

function addData() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var email1 = "admin@gmail.com";
    var email2 = "user@gmail.com";
    var email3 = "momin12@gmail.com";

    var password1 = "admin1";
    var password2 = "user12";
    var password3 = "momin1";

    var details;
    if (localStorage.getItem("details") == null) {
        details = [];
    }
    else {
        details = JSON.parse(localStorage.getItem("details"));

        if (email == email1 && password == password1 || email == email2 && password == password2 || email == email3 && password == password3) {
            details.push({
                email: email,
                password: password,
                uname: "Mahediali",
                picture: ""
            });
            window.location.href = ("Dashboard.html");
        }
        else {
            if (email == "" && password == "") {
                document.getElementById("EMAIL").innerHTML = "This Field is required*"
                document.getElementById("PASSWORD").innerHTML = "This Field is required*"
            }
            else if (email != email1 && password != password1 || email != email2 && password != password2 || email != email3 && password != password3) {
                document.getElementById("EMAIL").innerHTML = "Email id is wrong*"
                document.getElementById("PASSWORD").innerHTML = "Password is wrong*"
            }
        }

    }

    localStorage.setItem("details", JSON.stringify(details));

}