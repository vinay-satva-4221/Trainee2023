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
    document.getElementById("nextBtn").innerHTML = "Submit";
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
    if (!validate()) {
      valid = false;
    }
    if (!genderV()) {
      valid = false;
    }
    if (!validateL()) {
      valid = false;
    }

    if (!zipV()) {
      valid = false;
    }
  }

  if (currentTab == 1) {
    if (!validateEmail()) {
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

    if (currentTab == 2) {
      if (!bankv()) {
        valid = false;
      }
      if (!branchv()) {
        valid = false;
      }

      if (!accountv()) {
        valid = false;
      }
      if (!validateAcctNo()) {
        valid = false;
      }
    }
    if (currentTab == 3) {
      if (!cardV()) {
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

//validations

function validate() {
  let regName = /^[A-Za-z]+$/;
  let name = document.getElementById("fname").value;
  let vname = document.getElementById("navalid");
  if (!regName.test(name)) {
    vname.innerHTML = "**Please enter Alphabets only**";
    document.getElementById("navalid").style.display = "unset";
    document.getElementById("fname").focus();
    return false;
  } else {
    document.getElementById("navalid").style.display = "none";
    return true;
  }
}

function validateL() {
  let regName = /^[A-Za-z]+$/;
  let name = document.getElementById("lname").value;
  let vname = document.getElementById("navalid1");
  if (!regName.test(name)) {
    vname.innerHTML = "**Please enter Alphabets only**";
    document.getElementById("navalid1").style.display = "unset";
    document.getElementById("lname").focus();
    return false;
  } else {
    document.getElementById("navalid1").style.display = "none";
    return true;
  }
}

function genderV() {
  let genderoption = document.getElementById("gen");
  if (genderoption.value == "") {
    document.getElementById("gen1").innerHTML = "Please select an option!";
    document.getElementById("gen1").style.display = "unset";
    document.getElementById("gen1").focus();
    return false;
  } else {
    document.getElementById("gen1").style.display = "none";
    return true;
  }
}

function zipV() {
  let regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
  let z1 = document.getElementById("zip").value;
  let z2 = document.getElementById("vzip1");
  if (!regName.test(z1)) {
    z2.innerHTML = "**Invalid zip code";
    document.getElementById("vzip1").style.display = "unset";
    document.getElementById("vzip1").focus();
    return false;
  } else {
    document.getElementById("vzip1").style.display = "none";
    return true;
  }
}

function validateEmail() {
  let setemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("email").value;
  let msgemail = document.getElementById("vemail");
  if (!setemail.test(email)) {
    msgemail.innerHTML = "**Please enter correct email address";
    msgemail.style.color = "red";
    document.getElementById("vemail").style.display = "unset";
    return false;
  } else {
    document.getElementById("vemail").style.display = "none";
    return true;
  }
}

function validateusername() {
  let setuser = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  let uname = document.getElementById("usr").value;
  let msguser = document.getElementById("vusr");
  if (!setuser.test(uname)) {
    msguser.innerHTML =
      "*First character must be a Alphabet and atleast 8 characters required and no special characters";
    msguser.style.color = "red";
    document.getElementById("vusr").style.display = "unset";
    return false;
  } else {
    document.getElementById("vusr").style.display = "none";
    return true;
  }
}

function checkPassword() {
  let setpass = /^[A-Za-z]\w{7,14}$/;
  let pass = document.getElementById("pass").value;
  let msgpass = document.getElementById("vpass");
  if (!setpass.test(pass)) {
    msgpass.innerHTML =
      "*First character must be a letter and atleast 8 characters required, numbers and underscore are allowed";
    msgpass.style.color = "red";
    document.getElementById("vpass").style.display = "unset";
    return false;
  } else {
    document.getElementById("vpass").style.display = "none";
    return true;
  }
}

function verifyPassword() {
  let pw1 = document.getElementById("pass").value;
  let pw2 = document.getElementById("cpass").value;
  let msgcpass = document.getElementById("vcpass");

  if (pw1 != pw2) {
    msgcpass.innerHTML = "*Password did not matched";
    msgcpass.style.color = "red";
    document.getElementById("vcpass").style.display = "unset";
    return false;
  } else {
    msgcpass.innerHTML = "*Password Matched Success";
    msgcpass.style.color = "green";
    return true;
  }
}

function bankv() {
  var bankoption = document.getElementById("bank");
  if (bankoption.value == "") {
    document.getElementById("vbb").innerHTML = "Please select an option!";
    document.getElementById("vbb").style.display = "unset";
    document.getElementById("vbb").focus();
    return false;
  } else {
    document.getElementById("vbb").style.display = "none";
    return true;
  }
}
function branchv() {
  var bankoption = document.getElementById("branch");
  if (bankoption.value == "") {
    document.getElementById("vbranch").innerHTML = "Please select an option!";
    document.getElementById("vbranch").style.display = "unset";
    document.getElementById("vbranch").focus();
    return false;
  } else {
    document.getElementById("vbranch").style.display = "none";
    return true;
  }
}
function accountv() {
  var accoption = document.getElementById("account");
  if (accoption.value == "") {
    document.getElementById("vacc").innerHTML = "Please select an option!";
    document.getElementById("vacc").style.display = "unset";
    document.getElementById("vacc").focus();
    return false;
  } else {
    document.getElementById("vacc").style.display = "none";
    return true;
  }
}
// function accv() {
//   var bankoption = document.getElementById("bank");
//   if (bankoption.value == "") {
//       document.getElementById('vbb').innerHTML = ("Please select an option!");
//       document.getElementById('vbb').style.display = "unset";
//       document.getElementById('vbb').focus();
//       return false;
//   }
//   else {
//       document.getElementById('vbb').style.display = "none";
//       return true;
//   }
// }

function validateAcctNo() {
  let setaccn = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
  let accn = document.getElementById("accn").value;
  let msgaccn = document.getElementById("vaccno");
  if (!setaccn.test(accn)) {
    msgaccn.innerHTML = "*Enter valid Account Number ie. 16 Digits";
    msgaccn.style.color = "red";
    document.getElementById("vaccno").style.display = "unset";
    return false;
  } else {
    document.getElementById("vaccno").style.display = "none";
    return true;
  }
}

function cardV() {
  let genderoption = document.getElementById("card");
  if (genderoption.value == "") {
    document.getElementById("vcard").innerHTML = "Please select an option!";
    document.getElementById("vcard").style.display = "unset";
    document.getElementById("vcard").focus();
    return false;
  } else {
    document.getElementById("vcard").style.display = "none";
    return true;
  }
}

function validate_acc_holder() {
  let sethname = /^[a-zA-Z]+$/;
  let hname = document.getElementById("hname").value;

  let msghname = document.getElementById("vhname");
  if (!sethname.test(hname)) {
    msghname.innerHTML = "*Only alphabets are allowed";
    msghname.style.color = "red";
    document.getElementById("vhname").style.display = "unset";
    return false;
  } else {
    document.getElementById("vhname").style.display = "none";
    return true;
  }
}

function validate_card_no() {
  let setcnum = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
  let cnum = document.getElementById("cnum").value;
  let msgcnum = document.getElementById("vcnum");
  if (!setcnum.test(cnum)) {
    msgcnum.innerHTML = "*Enter valid Card Number ie. 16 Digits";
    msgcnum.style.color = "red";
    document.getElementById("vcnum").style.display = "unset";
    return false;
  } else {
    document.getElementById("vcnum").style.display = "none";
    return true;
  }
}

function validate_CVV() {
  let setcvv = /^[0-9]{3,4}$/;
  let cvv = document.getElementById("cvv").value;
  let msgcvv = document.getElementById("vcvv");
  if (!setcvv.test(cvv)) {
    msgcvv.innerHTML = "*Enter valid CVV ie. 3 Digits";
    msgcvv.style.color = "red";
    document.getElementById("vcvv").style.display = "unset";
    return false;
  } else {
    document.getElementById("vcvv").style.display = "none";
    return true;
  }
}
