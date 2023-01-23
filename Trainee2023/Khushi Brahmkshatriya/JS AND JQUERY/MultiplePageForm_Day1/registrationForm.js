var currentTab = 0;
showTab(currentTab);

function showTab(n) {

  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

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

  fixStepIndicator(n)
}

function nextPrev(n) {

  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= x.length) {

    document.getElementById("regForm").submit();
    return false;
  }
  
  showTab(currentTab);
}

function validateForm() {

  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  console.log(x);
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {

      y[i].className += " invalid";

      valid = false;
    }
    console.log(y[i]);
  }
  console.log([currentTab][0]);
  debugger
  switch([currentTab][0]){

    case 0:
      if (!allLetter()) {
        valid = false;
      }
      if (!validZipCode()) {

        valid = false;
      }
      
      
      break;

    case 1:
      if (!(checkPassword())) {

        valid = false;
      }
      if(!validateEmail())
      {
        valid=false;
      }
      if (!usernameLetter()) {
        valid = false;
      }
      break;
    case 2:
      if(!validAccountNumber()){
        valid = false;
      }  
      
      break;
    case 3:
      if(!validcvv()){
        valid= false;
      }
      if(!validcardNum()){
        valid= false;
      }
      if(!validHolderName()){
        valid= false;
      }
      break;
    case 4:
         
    
          var text = document.getElementById('tdfname').innerHTML = document.getElementById('fname').value;
          console.log("table data"+text);
          document.getElementById('tdlname').innerHTML = document.getElementById('lname').value;
          document.getElementById('tdgender').innerHTML = document.getElementById('gender').value;
          document.getElementById('tdzipcode').innerHTML = document.getElementById('zipCode').value;
          document.getElementById('tdemail').innerHTML = document.getElementById('email').value;
          document.getElementById('tduname').innerHTML = document.getElementById('uname').value;
          document.getElementById('tdpassword').innerHTML = document.getElementById('password').value;
          document.getElementById('tdbname').innerHTML = document.getElementById('bank').value;
          document.getElementById('tdbranch').innerHTML = document.getElementById('branch').value;
          document.getElementById('tdacname').innerHTML = document.getElementById('acname').value;
          document.getElementById('tdacnumber').innerHTML = document.getElementById('acnumber').value;
          document.getElementById('tdptype').innerHTML = document.getElementById('ptype').value;
          document.getElementById('tdcardnum').innerHTML = document.getElementById('cardnum').value;
          document.getElementById('tdcvv').innerHTML = document.getElementById('cvv').value;
          document.getElementById('tdedate').innerHTML = document.getElementById('date').value;

          break;
 
  }
  
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
function isUSAZipCode(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validZipCode() {
  var valid = true;
  let zipCode = document.getElementById("zipCode").value;
  let message = "";
  if (isUSAZipCode(zipCode)) {
    message = "Valid Zip Code";

  } else {
    message = "Invalid Zip Code";
    valid = false;
  }
  document.getElementById("msg").innerHTML = message;


  return valid;
}

function checkPassword() {
  var valid = true;
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('pmsg').style.color = 'green';
    document.getElementById('pmsg').innerHTML = 'matching';

  }
  else {
    document.getElementById('pmsg').style.color = 'red';
    document.getElementById('pmsg').innerHTML = 'not matching';
    valid = false;
  }
  console.log("pass : "+ valid);
  return valid;
}


function allLetter() {
  var valid = true;
  var letters = /^[A-Za-z]+$/;
  let message = "";
  var inputtxt = document.getElementById('fname').value;
  console.log(inputtxt);
  if (inputtxt.match(letters)) {

    message = "Valid";
    console.log(message);
  }
  else {
    message = "Enter Characters Only";
    console.log(message);
    valid = false;
  }

  document.getElementById("invalidnames").innerHTML = message;
  return valid;

}

function validateEmail() {
  var valid = true;
  var validRegex = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/;
  var email = document.getElementById('email').value;

  if (email.match(validRegex)) {

    document.getElementById('mailmsg').innerHTML = "valid";

  } else {

    document.getElementById('mailmsg').innerHTML = "Enter valid email";

    valid = false;

  }
  console.log("valid email :"+valid);
  return valid;

}

function usernameLetter() {
  var valid = true;
  var letters = /^[A-Za-z]+$/;
  let message = "";
  var inputtxt = document.getElementById('uname').value;
  console.log(inputtxt);
  if (inputtxt.match(letters)) {

    message = "Valid";
    console.log(message);
  }
  else {
    message = "Enter Characters Only";
    console.log(message);
    valid = false;
  }

  document.getElementById("validuname").innerHTML = message;
  return valid;

}

function SelectValidation()
{
  
  var valid = true;
  var slectedOption = document.getElementsByClassName('selectOption').value;
  console.log(slectedOption);
  if (slectedOption == '') {
    document.getElementsByClassName('validoption').innerHTML = "Select Option Please";
    valid = false;
    console.log(valid);
  }
 return valid;
}

function validAccountNumber() {
  var valid = true;
  var validRegex = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
  var acnumber = document.getElementById('acnumber').value;

  if (acnumber.match(validRegex)) {

    document.getElementById('validacnum').innerHTML = "valid";

  } else {

    document.getElementById('validacnum').innerHTML = "Enter valid account number";

    valid = false;

  }
  console.log("valid email :"+valid);
  return valid;

}
function validcvv() {
  var valid = true;
  var validRegex =/^\d{3}$/;
  var cvv = document.getElementById('cvv').value;

  if (cvv.match(validRegex)) {

    document.getElementById('validcvv').innerHTML = "valid";

  } else {

    document.getElementById('validcvv').innerHTML = "Enter valid CVV number";

    valid = false;

  }
  
  return valid;

}

function validcardNum() {
  var valid = true;
  var validRegex =/^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
  var cvv = document.getElementById('cardnum').value;

  if (cvv.match(validRegex)) {

    document.getElementById('validcardnum').innerHTML = "valid";

  } else {

    document.getElementById('validcardnum').innerHTML = "Enter valid card number";

    valid = false;
  }
  return valid;
}


function validHolderName() {
  var valid = true;
  var validRegex =/^[a-zA-Z]+$/;
  var hname = document.getElementById('hname').value;

  if (hname.match(validRegex)) {

    document.getElementById('validHname').innerHTML = "valid";

  } else {

    document.getElementById('validHname').innerHTML = "Enter valid Holder name";

    valid = false;
  }
  return valid;
}
