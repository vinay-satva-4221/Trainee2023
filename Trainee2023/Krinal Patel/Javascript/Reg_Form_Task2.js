var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Finish";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:

    if (currentTab == 4) {
        document.getElementById("namef").innerHTML =
            document.getElementById("fname").value;
        document.getElementById("lname1").innerHTML =
            document.getElementById("lname").value;
        document.getElementById("gender1").innerHTML =
            document.getElementById("gen").value;
        document.getElementById("zip1").innerHTML =
            document.getElementById("zip").value;
        document.getElementById("email1").innerHTML =
            document.getElementById("email").value;
        document.getElementById("username1").innerHTML =
            document.getElementById("usr").value;
        document.getElementById("pass1").innerHTML =
            document.getElementById("pass").value;
        document.getElementById("bank1").innerHTML =
            document.getElementById("bank").value;
        document.getElementById("branch1").innerHTML =
            document.getElementById("branch").value;
        document.getElementById("acc1").innerHTML =
            document.getElementById("account").value;
        document.getElementById("accn1").innerHTML =
            document.getElementById("accn").value;
        document.getElementById("pay1").innerHTML =
            document.getElementById("card").value;
        document.getElementById("hname1").innerHTML =
            document.getElementById("hname").value;
        document.getElementById("cnum1").innerHTML =
            document.getElementById("cnum").value;
        document.getElementById("cvv1").innerHTML =
            document.getElementById("cvv").value;
        document.getElementById("date1").innerHTML =
            document.getElementById("date").value;
    }
    fixStepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x,
        y,
        i,
        valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }

        if (!validatefname()) {
            valid = false;
        }

        if (!validatelname()) {
            valid = false;
        }
        if (!validategender()) {
            valid = false;
        }
        if (!validatezip()) {
            valid = false;
        }



    }

    if (currentTab == 1) {
        if (!validateemail()) {
            valid = false;
        }
        if (!validateusername()) {
            valid = false;
        }

        if (!checkPassword()) {
            valid = false;
        }
        if (!verifyPassword()) {
            valid = false;
        }

    }

    if (currentTab == 2) {

        if (!validatebank()) {
            valid = false;
        }
        if (!validatebranch()) {
            valid = false;
        }
        if (!validatetype()) {
            valid = false;
        }

        if (!validate_acct_no()) {
            valid = false;
        }


    }


    if (currentTab == 3) {

        if(!validate_card()){
            valid = false;

        }
        
        if (!validate_acc_holder()) {
            valid = false;

        }
        if (!validate_card_no()) {
            valid = false;
        }
        if (!validate_CVV()) {
            valid = false;
        }
        if (!validate_Exp()) {
            valid = false;
        }
      

    }





    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
        x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

//check if validation applied

//validations
function validatefname() {
    let setfname = /^[a-zA-Z]+$/;
    let fname = document.getElementById("fname").value;
    let msgfname = document.getElementById("invalid_msg");
    if (!setfname.test(fname)) {
        msgfname.innerHTML = "*Only alphabets are allowed in First name";
        msgfname.style.color = "red";
        document.getElementById("invalid_msg").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg").style.display = "none";
        return true;
    }
}

function validatelname() {
    let setlname = /^[a-zA-Z]+$/;
    let lname = document.getElementById("lname").value;
    let msglname = document.getElementById("invalid_msg1");
    if (!setlname.test(lname)) {
        msglname.innerHTML = "*Only alphabets are allowed in Last name";
        msglname.style.color = "red";
        document.getElementById("invalid_msg1").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg1").style.display = "none";
        return true;
    }
}

function validategender() {

    let gen1 = document.getElementById("gen");

    if (gen1.value == "") {
        document.getElementById("genmsg").innerHTML = "Please select an option";
        document.getElementById("genmsg").style.display = "unset";
        return false;
    } else {
        document.getElementById("genmsg").style.display = "none";
        return true;
    }
}

function validatezip() {
    let setzip = /^\d{6}$/;
    let zip = document.getElementById("zip").value;
    let msgzip = document.getElementById("invalid_msg2");
    if (!setzip.test(zip)) {
        msgzip.innerHTML = "*Only 6 digits are allowed";
        msgzip.style.color = "red";
        document.getElementById("invalid_msg2").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg2").style.display = "none";
        return true;
    }
}

function validateemail() {
    let setemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value;
    let msgemail = document.getElementById("invalid_msg3");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "*Should include @";
        msgemail.style.color = "red";
        document.getElementById("invalid_msg3").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg3").style.display = "none";
        return true;
    }
}

function validateusername() {
    let setuser = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    let uname = document.getElementById("usr").value;
    let msguser = document.getElementById("invalid_msg4");
    if (!setuser.test(uname)) {
        msguser.innerHTML =
            "*First character must be a Alphabet and atleast 8 characters required and no special characters";
        msguser.style.color = "red";
        document.getElementById("invalid_msg4").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg4").style.display = "none";
        return true;
    }
}

function checkPassword() {
    let setpass = /^[A-Za-z]\w{7,14}$/;
    let pass = document.getElementById("pass").value;
    let msgpass = document.getElementById("invalid_msg5");
    if (!setpass.test(pass)) {
        msgpass.innerHTML =
            "*First character must be a letter and atleast 8 characters required, numbers and underscore are allowed";
        msgpass.style.color = "red";
        document.getElementById("invalid_msg5").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg5").style.display = "none";
        return true;
    }
}

function verifyPassword() {
    let pw1 = document.getElementById("pass").value;
    let pw2 = document.getElementById("cpass").value;
    let msgcpass = document.getElementById("invalid_msg6");

    if (pw1 != pw2) {
        msgcpass.innerHTML = "*Password did not matched";
        msgcpass.style.color = "red";
        document.getElementById("invalid_msg6").style.display = "unset";
        return false;
    } else {
        msgcpass.innerHTML = "*Password Matched Success";
        msgcpass.style.color = "green";
        return true;
    }
}

function validate_acct_no() {
    let setaccn = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
    let accn = document.getElementById("accn").value;
    let msgaccn = document.getElementById("invalid_msg7");
    if (!setaccn.test(accn)) {
        msgaccn.innerHTML = "*Enter valid Account Number ie. 16 Digits";
        msgaccn.style.color = "red";
        document.getElementById("invalid_msg7").style.display = "unset";
        return false;

    } else {
        document.getElementById("invalid_msg7").style.display = "none";
        return true;

    }
}

function validate_acc_holder() {
    let sethname = /^[a-zA-Z]+$/;
    let hname = document.getElementById("hname").value;

    let msghname = document.getElementById("invalid_msg8");
    if (!sethname.test(hname)) {
        msghname.innerHTML = "*Only alphabets are allowed";
        msghname.style.color = "red";
        document.getElementById("invalid_msg8").style.display = "unset";
        return false;

    } else {
        document.getElementById("invalid_msg8").style.display = "none";
        return true;

    }
}

function validate_card_no() {
    let setcnum = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
    let cnum = document.getElementById("cnum").value;
    let msgcnum = document.getElementById("invalid_msg9");
    if (!setcnum.test(cnum)) {
        msgcnum.innerHTML = "*Enter valid Card Number ie. 16 Digits";
        msgcnum.style.color = "red";
        document.getElementById("invalid_msg9").style.display = "unset";
        return false;

    } else {
        document.getElementById("invalid_msg9").style.display = "none";
        return true;

    }
}

function validate_CVV() {
    let setcvv = /^\d{3}$/;
    let cvv = document.getElementById("cvv").value;
    let msgcvv = document.getElementById("invalid_msg10");
    if (!setcvv.test(cvv)) {
        msgcvv.innerHTML = "*Enter valid CVV ie. 3 Digits";
        msgcvv.style.color = "red";
        document.getElementById("invalid_msg10").style.display = "unset";
        return false;

    } else {
        document.getElementById("invalid_msg10").style.display = "none";
        return true;

    }
}

function validatebank() {

    let b1 = document.getElementById("bank");

    if (b1.value == "") {
        document.getElementById("bankmsg").innerHTML = "Please select an option";
        document.getElementById("bankmsg").style.display = "unset";
        return false;
    } else {
        document.getElementById("bankmsg").style.display = "none";
        return true;
    }
}

function validatebranch() {

    let branch1 = document.getElementById("branch");

    if (branch1.value == "") {
        document.getElementById("branchmsg").innerHTML = "Please select an option";
        document.getElementById("branchmsg").style.display = "unset";
        return false;
    } else {
        document.getElementById("branchmsg").style.display = "none";
        return true;
    }


}

function validatetype() {

    let type1 = document.getElementById("account");

    if (type1.value == "") {
        document.getElementById("typemsg").innerHTML = "Please select an option";
        document.getElementById("typemsg").style.display = "unset";
        return false;
    } else {
        document.getElementById("typemsg").style.display = "none";
        return true;
    }


}

function validate_Exp() {

    let exp = document.getElementById("date");

    if (exp.value == "") {
        document.getElementById("msgexp").innerHTML = "Please select an option";
        document.getElementById("msgexp").style.display = "unset";
        return false;
    } else {
        document.getElementById("msgexp").style.display = "none";
        return true;
    }


}

function validate_card() {

    let card = document.getElementById("card");

    if (card.value == "") {
        document.getElementById("cardmsg").innerHTML = "Please select an option";
        document.getElementById("cardmsg").style.display = "unset";
        return false;
    } else {
        document.getElementById("cardmsg").style.display = "none";
        return true;
    }


}


