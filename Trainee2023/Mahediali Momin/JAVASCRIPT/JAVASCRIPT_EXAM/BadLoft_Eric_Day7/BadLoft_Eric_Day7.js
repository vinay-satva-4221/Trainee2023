
function validatecheck() {

    if (!validateEmail() && !validatePassword()) {
        $(document).ready(function () {
            $("#btn").click(function () {
                swal({
                    title: "Missing fields",
                    text: "Please enter all details",
                    icon: "warning",
                    button: "Ok"
                });
            });
        });
    } else {
        return validateallow(), hide();
    }
}



function validateEmail() {
    let setemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById("email").value;
    let msgemail = document.getElementById("EMAIL");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "*Please enter correct email";
        msgemail.style.color = "red";
        document.getElementById("EMAIL").style.display = "unset";

        return false;
    } else {
        document.getElementById("EMAIL").style.display = "none";
        return true;
    }
}

function validatePassword() {
    let setemail = /^[A-Za-z]\w{7,14}$/;
    let email = document.getElementById("password").value;
    let msgemail = document.getElementById("PASSWORD");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "*Please enter correct password";
        msgemail.style.color = "red";
        document.getElementById("PASSWORD").style.display = "unset";

        return false;
    } else {
        document.getElementById("PASSWORD").style.display = "none";
        return true;
    }
}