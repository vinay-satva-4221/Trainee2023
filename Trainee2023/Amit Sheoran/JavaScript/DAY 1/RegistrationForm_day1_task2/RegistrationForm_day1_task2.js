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
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:

    if (currentTab == 4) {
        document.getElementById("namef").innerHTML = document.getElementById("fname").value;
        document.getElementById("namel").innerHTML = document.getElementById("lname").value;
        document.getElementById("gen1").innerHTML = document.getElementById("gen").value;
        document.getElementById("codez").innerHTML = document.getElementById("zcode").value;
        document.getElementById("Eemail").innerHTML = document.getElementById("email1").value;
        document.getElementById("Uusername").innerHTML = document.getElementById("username1").value;
        document.getElementById("Ppassword").innerHTML = document.getElementById("password1").value;
        document.getElementById("Cconfirmpassword").innerHTML = document.getElementById("confirmpassord1").value;
    }
    fixStepIndicator(n)
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
    var x, y, i, valid = true;
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
        if (!validate()) {
            valid = false;
        }
        if (!genderV()) {
            valid = false;
        }
        if (!validateL()) {
            valid = false;
        }
        if (!validatezip()) {
            valid = false;
        }
        
    }
    
    if(currentTab==1){
        if (!emailvalidate()) {
            valid = false;
        }
        if (!usernamevalidate()) {
            valid = false;
        }
        if (!passwordvalidate()) {
            valid = false;
        }
        if (!confirmpasswordvalidate()) {
            valid = false;
        }

    }
    if(currentTab==2){
        if (!ChooseBANK()) {
            valid = false;
        }
        if (!ChooseBRANCH()) {
            valid = false;
        }
        if (!Chooseaccount()) {
            valid = false;
        }
        if (!chooseaccountnumber()) {
            valid = false;
        }
    }
    if(currentTab==3){
        if (!Choosecard()) {
            valid = false;
        }
        if (!personname()) {
            valid = false;
        }
        if (!cardnumber()) {
            valid = false;
        }
        if (!cvvvv()) {
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
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}




function validate() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById('fname').value;
    let vname = document.getElementById("navalid");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter Alphabets only**");
        document.getElementById("navalid").style.display = "unset";
        document.getElementById('fname').focus();
        return false;
    }
    else {
        document.getElementById("navalid").style.display = "none";
        return true;
    }

}



function validateL() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById('lname').value;
    let vname = document.getElementById("navalidL");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter Alphabets only**");
        document.getElementById("navalidL").style.display = "unset";
        document.getElementById('lname').focus();
        return false;
    }
    else {
        document.getElementById("navalidL").style.display = "none";
        return true;
    }

}

function genderV() {
    var genderoption = document.getElementById("gen");
    if (genderoption.value == "") {
        document.getElementById("vgen1").innerHTML = ("Please select an option!");
        document.getElementById('vgen1').style.display = "unset";
        document.getElementById('vgen1').focus();
        return false;
    }
    else {
        document.getElementById("vgen1").style.display = "none";
        return true;
    }


}
function validatezip() {
    let regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
    let name = document.getElementById('zcode').value;
    let vname = document.getElementById("navalidz");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter Alphabets only**");
        document.getElementById("navalidz").style.display = "unset";
        document.getElementById('zcode').focus();
        return false;
    }
    else {
        document.getElementById("navalidz").style.display = "none";
        return true;
    }

}

function emailvalidate() {
    let regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let name = document.getElementById('Eemail').value;
    let vname = document.getElementById("navalide");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter according to format only**");
        document.getElementById("navalide").style.display = "unset";
        document.getElementById('Eemail').focus();
        return false;
    }
    else {
        document.getElementById("navalide").style.display = "none";
        return true;
    }

}
function usernamevalidate(){
    let regName =/^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    let name = document.getElementById('Uusername').value;
    let vname = document.getElementById("navalidu");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter according to format only**");
        document.getElementById("navalidu").style.display = "unset";
        document.getElementById('Uusername').focus();
        return false;
    }
    else {
        document.getElementById("navalidu").style.display = "none";
        return true;
    }
}

function passwordvalidate(){
    let regName =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let name = document.getElementById('Ppassword').value;
    let vname = document.getElementById("navalidp");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter according to format only**");
        document.getElementById("navalidp").style.display = "unset";
        document.getElementById('Ppassword').focus();
        return false;
    }
    else {
        document.getElementById("navalidp").style.display = "none";
        return true;
    }
}

function confirmpasswordvalidate(){
    
    let name = document.getElementById('Ppassword').value;
    let pass = document.getElementById("Cconfirmpassword").value;
    let vname = document.getElementById("navalidcp");
    if (name!=pass) {
        vname.innerHTML = ("** password not Matched**");
        document.getElementById("navalidcp").style.display = "unset";
        document.getElementById('Cconfirmpassword').focus();
        return false;
    }
    else {
        document.getElementById("navalidcp").style.display = "none";
        return true;
    }
}

function ChooseBANK() {
    var genderoption = document.getElementById("choosebank");
    if (genderoption.value == "") {
        document.getElementById("bank").innerHTML = ("Please select an option!");
        document.getElementById('bank').style.display = "unset";
        document.getElementById('bank').focus();
        return false;
    }
    else {
        document.getElementById("bank").style.display = "none";
        return true;
    }
}

function ChooseBRANCH() {
    var genderoption = document.getElementById("choosebranchA");
    if (genderoption.value == "") {
        document.getElementById("branch").innerHTML = ("Please select an option!");
        document.getElementById('branch').style.display = "unset";
        document.getElementById('branch').focus();
        return false;
    }
    else {
        document.getElementById("branch").style.display = "none";
        return true;
    }


}

function Chooseaccount() {
    var genderoption = document.getElementById("chooseaccountA");
    if (genderoption.value == "") {
        document.getElementById("account").innerHTML = ("Please select an option!");
        document.getElementById('account').style.display = "unset";
        document.getElementById('account').focus();
        return false;
    }
    else {
        document.getElementById("account").style.display = "none";
        return true;
    }


}

function chooseaccountnumber(){
    let regName =/^\d{9,18}$/;
    let name = document.getElementById('accno').value;
    let vname = document.getElementById("navalidacc");
    if (!regName.test(name)) {
        vname.innerHTML = ("**no alphabets allowed**");
        document.getElementById("navalidacc").style.display = "unset";
        document.getElementById('accno').focus();
        return false;
    }
    else {
        document.getElementById("navalidacc").style.display = "none";
        return true;
    }
}

function Choosecard() {
    var genderoption = document.getElementById("card");
    if (genderoption.value == "") {
        document.getElementById("CARDS").innerHTML = ("Please select an option!");
        document.getElementById('CARDS').style.display = "unset";
        document.getElementById('CARDS').focus();
        return false;
    }
    else {
        document.getElementById("CARDS").style.display = "none";
        return true;
    }


}
function personname() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById('pname').value;
    let vname = document.getElementById("navalidapa");
    if (!regName.test(name)) {
        vname.innerHTML = ("**Please enter Alphabets only**");
        document.getElementById("navalidapa").style.display = "unset";
        document.getElementById('pname').focus();
        return false;
    }
    else {
        document.getElementById("navalidapa").style.display = "none";
        return true;
    }

}
function cardnumber(){
    let regName =/^\d{9,18}$/;
    let name = document.getElementById('cnumber').value;
    let vname = document.getElementById("navalidacn");
    if (!regName.test(name)) {
        vname.innerHTML = ("**no alphabets allowed**");
        document.getElementById("navalidacn").style.display = "unset";
        document.getElementById('cnumber').focus();
        return false;
    }
    else {
        document.getElementById("navalidacn").style.display = "none";
        return true;
    }
}

function cvvvv(){
    let regName =/^\d{4}$/;
    let name = document.getElementById('cvv').value;
    let vname = document.getElementById("navalidacncvv");
    if (!regName.test(name)) {
        vname.innerHTML = ("**no alphabets allowed**");
        document.getElementById("navalidacncvv").style.display = "unset";
        document.getElementById('cvv').focus();
        return false;
    }
    else {
        document.getElementById("navalidacncvv").style.display = "none";
        return true;
    }
}