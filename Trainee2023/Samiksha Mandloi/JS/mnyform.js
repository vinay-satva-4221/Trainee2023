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
  if (currentTab == 4) {
    var fname = document.getElementById("fname").value;
    document.getElementById("fnme").innerHTML = fname;
    var lname = document.getElementById("lname").value;
    document.getElementById("lnme").innerHTML = lname;
    var sel1 = document.getElementById("sel1").value;
    document.getElementById("select").innerHTML = sel1;
    var zipcode = document.getElementById("zipcode").value;
    document.getElementById("zcode").innerHTML = zipcode;
    var email = document.getElementById("email").value;
    document.getElementById("mail").innerHTML = email;
    var usrname = document.getElementById("usrname").value;
    document.getElementById("unme").innerHTML = usrname;
    var paswd = document.getElementById("paswd").value;
    document.getElementById("pwd").innerHTML = paswd;
    var cnpas = document.getElementById("cnpas").value;
    document.getElementById("cpwd").innerHTML = cnpas;
    var banksel = document.getElementById("banksel").value;
    document.getElementById("cbnk").innerHTML = banksel;
    var branch = document.getElementById("branch").value;
    document.getElementById("cbrnch").innerHTML = branch;
    var account = document.getElementById("account").value;
    document.getElementById("cac").innerHTML = account;
    var acno = document.getElementById("acno").value;
    document.getElementById("cano").innerHTML = acno;
    var mastercard = document.getElementById("mastercard").value;
    document.getElementById("mcard").innerHTML = mastercard;
    var holder = document.getElementById("holder").value;
    document.getElementById("holname").innerHTML = holder;
    var cardno = document.getElementById("cardno").value;
    document.getElementById("crdno").innerHTML = cardno;
    var cvv = document.getElementById("cvv").value;
    document.getElementById("cvno").innerHTML = cvv;
    var month = document.getElementById("month").value;
    document.getElementById("exdate").innerHTML = month;
  }
  //... and run a function that will display the correct step indicator:
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
    valid = true;

  }
  // Personal detail
  if (!fnamevalidate()) {
    valid = false;
  }

  if (!lnamevalidate()) {
    valid = false;
  }

  if (!genderValidate()) {
    valid = false;
  }


  if (!validateInput()) {
    valid = false;
  }

  //  profile Information
  if (currentTab == 1) {
    if (!emailValidate()) {
      valid = false;
    }
    if (!userValidate()) {
      valid = false;
    }

    if (!passValidate()) {
      valid = false;
    }
  }
  // Bank information
  if (currentTab == 2) {
    if (!bankValidate()) {
      valid = false;
    }

    if (!branchValidate()) {
      valid = false;
    }

    if (!selectacValidate()) {
      valid = false;
    }

    if (!acnoValidate()) {
      valid = false;
    }

  }

  // Payment information
  if (currentTab == 3) {
    if (!mcardValidate()) {
      valid = false;
    }

    if (!holderValidate()) {
      valid = false;
    }

    if (!cardnoValidate()) {
      valid = false;
    }

    if (!cVVNumber()) {
      valid = false;
    }

    if (!checkMonth()) {
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
// Personal information
function fnamevalidate() {
  var valid = true;
  var regName = (/^[a-zA-Z]+$/);
  var firstname = document.getElementById('fname').value;

  var message = "";
  if (!regName.test(firstname)) {
    message = 'Please enter valid Name.';
    valid = false;
  } else {
    message = 'Great';
    valid = true;
  }
  document.getElementById("name").innerHTML = message;
  return valid;
}


function lnamevalidate() {
  var valid = true;
  var regName = (/^[a-zA-Z]+$/);
  var lastname = document.getElementById('lname').value;
  var message = "";
  if (!regName.test(lastname)) {
    message = 'Please enter valid Name.';
    valid = false;
  } else {
    message = 'Great';
    valid = true;
  }
  document.getElementById("name2").innerHTML = message;
  return valid;
}

function genderValidate() {
  var valid = true;
  var e = document.getElementById("sel1");
  debugger;
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  var message = "";
  if (strUser == 0) {
    message = "Please select a gender";
    valid = false;
  }
  document.getElementById("sname").innerHTML = message;
  return valid;
}

function isZipCode(str) {
  return (/(^\d{6}$)$/).test(str);
}
function validateInput() {
  var valid = true;
  console.log("validateInput");
  let zipcode = document.getElementById("zipcode").value;
  console.log(zipcode);
  let message = "";
  if (isZipCode(zipcode)) {
    message = "Valid Zip Code";
    console.log(message);
  } else {
    message = "Invalid Zip Code";
    valid = false;
  }
  document.getElementById("msg").innerHTML = message;
  return valid;
}
// Profile Information
function emailValidate() {
  var valid = true;
  var re = (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  var email = document.getElementById("email").value;
  var message = " ";
  if (re.test(email) == true) {
    message = "good";
  }
  else {
    message = "Please enter valid email with @";
    valid = false;
  }
  document.getElementById("mailname").innerHTML = message;
  console.log("email validatioin : " + valid);
  return valid;
}

function userValidate() {
  var valid = true;
  var regName = (/^[a-zA-Z\-]+$/);
  var username = document.getElementById('usrname').value;

  var message = "";
  if (!regName.test(username)) {
    message = 'Please enter valid User Name.';
    valid = false;
  } else {
    message = 'Great';
    valid = true;
  }
  document.getElementById("usname").innerHTML = message;
  return valid;
}




function checkPassword(str) {
  return (/^[A-Za-z0-9]\w{8,14}$/).test(str);
}
function validatePassword() {
  console.log("checkPassword");
  var paswd = document.getElementById("paswd").value;
  var message = "";
  if (checkPassword(paswd)) {
    message = 'Correct';
  }
  else {
    message = 'Wrong...!';
  }
  document.getElementById('pwdmsg').innerHTML = message;
}

function passValidate() {
  var valid = true;
  var password = document.getElementById("paswd").value;
  var confirmPassword = document.getElementById("cnpas").value;
  var message = "";
  if (password != confirmPassword) {
    message = "Passwords do not match.";
    valid = false;
  } else {
    message = "Password matched";
    // valid = true;

  }
  document.getElementById("cpmsg").innerHTML = message;
  return valid;
}
//  Bank Information
function bankValidate() {
  var valid = true;
  var e = document.getElementById("banksel");
  debugger;
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  var message = "";
  if (strUser == 0) {
    message = "Please select a Bank";
    valid = false;
  }
  document.getElementById("bname").innerHTML = message;
  return valid;
}

function branchValidate() {
  var valid = true;
  var e = document.getElementById("branch");
  debugger;
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  var message = "";
  if (strUser == 0) {
    message = "Please select a Branch";
    valid = false;
  }
  document.getElementById("brnchname").innerHTML = message;
  return valid;
}

function selectacValidate() {
  var valid = true;
  var e = document.getElementById("account");
  debugger;
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  var message = "";
  if (strUser == 0) {
    message = "Please select an Account";
    valid = false;
  }
  document.getElementById("sacname").innerHTML = message;
  return valid;
}

function acnoValidate() {
  var valid = true;
  var re = (/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/);
  var acno = document.getElementById("acno").value;
  var message = " ";
  if (re.test(acno) == true) {
    message = "good";

  }
  else {
    message = "Invalid Account Number";
    valid = false;
  }
  document.getElementById("cpacno").innerHTML = message;
  return valid;
}

// Payment information
function mcardValidate() {
  var valid = true;
  var e = document.getElementById("mastercard");
  debugger;
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  var message = "";
  if (strUser == 0) {
    message = "Please select a Mastercard";
    valid = false;
  }
  document.getElementById("mcrdname").innerHTML = message;
  return valid;
}

function holderValidate() {
  var valid = true;
  var regName = (/^[a-zA-Z\-]+$/);
  var username = document.getElementById('holder').value;

  var message = "";
  if (!regName.test(username)) {
    message = 'Please enter valid Holder Name.';
    valid = false;
  } else {
    message = 'Great';
    valid = true;
  }
  document.getElementById("hname").innerHTML = message;
  return valid;
}

function cardnoValidate() {
  var valid = true;
  // var regName = (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))+$/);
  var username = document.getElementById('cardno').value;

  var message = "";
  if (username == "") {
    message = 'Please enter valid Card number.';
    valid = false;
  } else {
    message = 'Great';
    valid = true;


  }
  document.getElementById("crdname").innerHTML = message;
  return valid;
}

function cVVNumber() {
  var valid = true;
  var regex = (/^[0-9]{3,4}$/);
  var cvv = document.getElementById("cvv").value;
  var message = " ";
  if (regex.test(cvv) == true) {
    message = "good";
    valid = true;
  }
  else {
    message = "Invalid CVV Number";
    valid = false;
  }
  document.getElementById("valcvv").innerHTML = message;
  return valid;
}
function checkMonth(){
  var valid = true;
  var expiry = document.getElementById("month").value;
  var message = " ";
  if(expiry == ""){
    message = "select month";
    valid = false;
  }
  else{
    message = "great work";
    valid = true;
  }
  document.getElementById("monthname").innerHTML = message;
  return valid;

}






