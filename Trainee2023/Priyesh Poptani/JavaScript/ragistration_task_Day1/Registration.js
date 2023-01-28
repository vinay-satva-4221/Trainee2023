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
  if(currentTab==4)
  {
    document.getElementById('namef').innerHTML=document.getElementById('fname').value;
    document.getElementById('namel').innerHTML=document.getElementById('lname').value;
    document.getElementById('genderf').innerHTML=document.getElementById('gender').value;
    document.getElementById('zipcodef').innerHTML=document.getElementById('zipcode').value;
    document.getElementById('emailf').innerHTML=document.getElementById('email').value;
    document.getElementById('usernamef').innerHTML=document.getElementById('uname').value;
    document.getElementById('passwordf').innerHTML=document.getElementById('password').value;
    document.getElementById('banknamef').innerHTML=document.getElementById('bank').value;
    document.getElementById('branchnamef').innerHTML=document.getElementById('branch').value;
    // document.getElementById('accountnamef').innerHTML=document.getElementById('account').value;
    document.getElementById('accountnumberf').innerHTML=document.getElementById('accountnumber').value;
    document.getElementById('card1').innerHTML=document.getElementById('card').value;
    document.getElementById('holdernamef').innerHTML=document.getElementById('holdername').value;
    document.getElementById('cardnumberf').innerHTML=document.getElementById('password').value;
    document.getElementById('cvvf').innerHTML=document.getElementById('cvv').value;
    // document.getElementById('holdernamef').innerHTML=document.getElementById('holdername').value;
    document.getElementById('expirydatef').innerHTML=document.getElementById('exdate').value;
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

    if(!validate())
    {
      valid=false;
    }
    
      if(!genderfor())
      {
          valid=false;
      }
    
      if(!validatelastname())
      {
          valid=false;
      }
      if(!zipcode1())
      {
        valid=false;
      }

  }

    if(currentTab==1)
    {
        if(!emailvalidate())
        {
            valid=false;
        }

        if(!useernamevalidate())
        {
            valid=false;
        }
        if(!passwordvalidate())
        {
            valid=false;
        }
        if(!confirmpasswordvalidate())
        {
            valid=false;
        }
        

    }

    if(currentTab==2)
    {
        if(!bankvalidate())
        {
            valid=false;
        }
        
        if(!branchvalidate())
        {
            valid=false;
        }
        if(!accountdetail())
        {
            valid=false;
        }
        if(!accountnumberdetail())
        {
            valid=false;
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


function validate(){
    
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('fname').value;
    var vname = document.getElementById('errorname')
    if(!regName.test(name)){
        vname.innerHTML=('Please enter your full name (first & last name).');
        document.getElementById('errorname').style.display="unset";
        document.getElementById('fname').focus();
        
        return false    ;
    }else{
        document.getElementById('errorname').style.display="none";
        return true;

    }
}
function validatelastname()
{
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('lname').value;
    var vname = document.getElementById('errorlastname')
    if(!regName.test(name)){
        vname.innerHTML=('Please enter your full name (first & last name).');
        document.getElementById('errorlastname').style.display="unset";
        document.getElementById('lname').focus();
        
        return false    ;
    }else{
        document.getElementById('errorlastname').style.display="none";
        return true;

    }

}
function genderfor()
{
    var gender=document.getElementById("gender");
    if(gender.value=="")
    {
        document.getElementById("gen1").innerHTML="please select gender field";
        document.getElementById("gen1").style.display="unset";
        document.getElementById("gen1").focus();
        return false;


    }
    document.getElementById("gen1").style.display="none";
    return true;
}

function zipcode1()
{
    // var regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
    var regName = /(^\d{6}(,\d{6})*)/;
    
    var zipcode = document.getElementById('zipcode').value;
    var zipcodeerror = document.getElementById('errorzipcode')
    if(!regName.test(zipcode)){
        zipcodeerror.innerHTML=('Please enter zip code.');
        document.getElementById('errorzipcode').style.display="unset";
        return false    ;
    }else{
        document.getElementById('errorzipcode').style.display="none";
        return true;
    }

}


function emailvalidate()
{
    // var regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    
    var email1 = document.getElementById('email').value;
    var emailerror = document.getElementById('erroremail');
    document.getElementById('email').focus();

    if(!regName.test(email1)){
        emailerror.innerHTML=('Please enter valid email.');
        document.getElementById('erroremail').style.display="unset";
    
        return false    ;
    }else{
        document.getElementById('erroremail').style.display="none";
        return true;
    }

}

function useernamevalidate()
{
    var regName =  /^[A-Za-z][A-Za-z0-9]{7,29}$/;
    var username=document.getElementById('uname').value;
    var usernameerror=document.getElementById('errorusername')  ;
    document.getElementById('uname').focus();
    if(!regName.test(username)){
        usernameerror.innerHTML=('Please enter correct username.');
        document.getElementById('errorusername').style.display="unset";
    
        return false    ;
    }
    else{

        document.getElementById('errorusername').style.display="none";
        return true;
    }

}

function passwordvalidate()
{

    var regName =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var password=document.getElementById('password').value;
    var passworderror=document.getElementById('errorpassword')  ;
    document.getElementById('password').focus();
    if(!regName.test(password)){
        passworderror.innerHTML=('Please enter valid password.');
        document.getElementById('errorpassword').style.display="unset";
    
        return false    ;
    }

    else{

        document.getElementById('errorpassword').style.display="none";
        return true;
    }

}


function confirmpasswordvalidate()
{

    var regName =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var name=document.getElementById('password').value;

    var password=document.getElementById('confirmpassword').value;
    var passworderror=document.getElementById('errorconfirmpasword') ;


    if(name!=password)
    {
        passworderror.innerHTML=('Please match password.');
        document.getElementById('errorconfirmpasword').style.display="unset";
        document.getElementById('confirmpassword').focus();
        return true;
    }
   
    

    else{

        document.getElementById('errorconfirmpasword').style.display="none";
        return true;
    }
   

}

function bankvalidate()
{
    var bank1=document.getElementById("bank");
    if(bank1.value=="")
    {
        document.getElementById("bankerror").innerHTML="please select bank field";
        document.getElementById("bankerror").style.display="unset";
        document.getElementById("bankerror").focus();
        return false;


    }
    else{
    document.getElementById("bankerror").style.display="none";
    return true;
    }
}


function branchvalidate()
{
    var branch1=document.getElementById("branch");
    if(branch1.value=="")
    {
        document.getElementById("brancherror").innerHTML="please select branch field";
        document.getElementById("brancherror").style.display="unset";
        document.getElementById("brancherror").focus();
        return false;


    }
    else{
    document.getElementById("brancherror").style.display="none";
    return true;
    }
    
}


function accountdetail()
{

    var accountname=document.getElementById("account");
    if(accountname.value=="")
    {
        document.getElementById("accounterror").innerHTML="please select Account";
        document.getElementById("accounterror").style.display="unset";
        document.getElementById("accounterror").focus();
        return false;


    }
    else{
    document.getElementById("accounterror").style.display="none";
    return true;
    }

}

function accountnumberdetail()
{

    var regName =/^\d{14}$/;
    var account=document.getElementById('accountnumber').value;
    var accounterror=document.getElementById('accountnumbererror')  ;
    document.getElementById('account').focus();
    if(!regName.test(account)){
        accounterror.innerHTML=('Please enter 14 digit account number.');
        document.getElementById('accountnumbererror').style.display="unset";
    
        return false    ;
    }

    else{

        document.getElementById('accountnumbererror').style.display="none";
        return true;
    }


}
function paymentdetail()
{

    var paymentname=document.getElementById("card");
    if(paymentname.value=="")
    {
        document.getElementById("paymenterror").innerHTML="please select master card";
        document.getElementById("paymenterror").style.display="unset";
        document.getElementById("paymenterror").focus();
        return false;


    }
    else{
    document.getElementById("paymenterror").style.display="none";
    return true;
    }

}
function holdernamecheck(){
    
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('holdername').value;
    var vname = document.getElementById('holdernameerror')
    if(!regName.test(name)){
        vname.innerHTML=('Please enter holder name.');
        document.getElementById('errorname').style.display="unset";
        document.getElementById('name').focus();
        
        return false    ;
    }else{
        document.getElementById('holdernameerror').style.display="none";
        return true;

    }
}

function cardnumberdetail()
{

    var regName =/^\d{14}$/;
    var card=document.getElementById('cardnumber').value;
    var carderror=document.getElementById('cardnumbererror')  ;
    document.getElementById('card').focus();
    if(!regName.test(card)){
        carderror.innerHTML=('Please enter card number.');
        document.getElementById('cardnumbererror').style.display="unset";
    
        return false    ;
    }

    else{

        document.getElementById('cardnumbererror').style.display="none";
        return true;
    }


}

function cvvnumber()
{

    var regName = /^\d{3,5}$/;
    var cvv=document.getElementById('cvv').value;
    var cvvnumbererror=document.getElementById('cvvnumbererror')  ;
    document.getElementById('cvv').focus();
    if(!regName.test(cvv)){
        cvvnumbererror.innerHTML=('Please enter cvv.');
        document.getElementById('cvvnumbererror').style.display="unset";
    
        return false    ;
    }

    else{

        document.getElementById('cvvnumbererror').style.display="none";
        return true;
    }


}



