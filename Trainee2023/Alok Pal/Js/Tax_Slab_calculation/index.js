// validations
function validateForm() {

  if (!nameV() && !mobileV() && !genderV() && !incomeV() && !loanV() && !investV()) {
    valid = false;
  }
}

function nameV() {
  let regName = /^[A-Za-z]+$/;
  let name = document.getElementById("fname").value;
  if (!regName.test(name)) {
    document.getElementById("vname").innerHTML = "**Please Enter Valid Name!";
    document.getElementById("vname").style.display = "unset";
    document.getElementById("vname").focus();
    return false;
  } else {
    document.getElementById("vname").style.display = "none";
    return true;
  }
}

function mobileV() {
  let regName = /^([+]\d{2}[ ])?\d{10}$/;
  let mobile = document.getElementById("fmobile").value;
  if (!regName.test(mobile)) {
    document.getElementById("vmobile").innerHTML =
      "**Please Enter Valid Mobile no.!";
    document.getElementById("vmobile").style.display = "unset";
    document.getElementById("vmobile").focus();
    return false;
  } else {
    document.getElementById("vmobile").style.display = "none";
    return true;
  }
}

function genderV() {
  let gender = document.getElementById("gender").value;
  if (gender == "") {
    document.getElementById("vgender").innerHTML =
      "**Please Select Valid Option!";
    document.getElementById("vgender").style.display = "unset";
    document.getElementById("vgender").focus();
    return false;
  } else {
    document.getElementById("vgender").style.display = "none";
    return true;
  }
}

function incomeV() {
  let regname = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
  let income = document.getElementById("fincome").value;
  if (!regname.test(income)) {
    document.getElementById("vincome").innerHTML =
      "**Income should be in positive numbers!";
    document.getElementById("vincome").style.display = "unset";
    document.getElementById("vincome").focus();
    return false;
  }
  else {
    document.getElementById("vincome").style.display = "none";
    return true;
  }
}
function loanV() {
  let regname = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
  let loan = document.getElementById("floan").value;
  if (!regname.test(loan)) {
    document.getElementById("vloan").innerHTML =
      "**loan amount should be in positive numbers!";
    document.getElementById("vloan").style.display = "unset";
    document.getElementById("vloan").focus();
    return false;
  }
  else {
    document.getElementById("vloan").style.display = "none";
    return true;
  }
}
function investV() {
  let regname = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
  let invest = document.getElementById("finvestment").value;
  if (!regname.test(invest)) {
    document.getElementById("vinvest").innerHTML =
      "**Investment should be in positive numbers!";
    document.getElementById("vinvest").style.display = "unset";
    document.getElementById("vinvest").focus();
    return false;
  }
  else {
    document.getElementById("vinvest").style.display = "none";
    return true;
  }
}
 function checkD (){
  let years = document.getElementById("fbirthdate").value;
  if (years < 18) {
    document.getElementById("vdate").innerHTML =
      "**Age Should be minimum 18 years!";
    document.getElementById("vdate").style.display = "unset";
    document.getElementById("vdate").focus();
  } else {
    document.getElementById("vdate").style.display = "none";
  }
 }





//DATE RANGE PICKER

$(document).ready(function () {
  $('input[name="birthday"]').daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format("YYYY"), 10),
    },
    function (start, end, label) {
      var years = moment().diff(start, "years");
      console.log("You are " + years + " years old!");

      if (years < 18) {
        document.getElementById("vdate").innerHTML =
          "**Age Should be minimum 18 years!";
        document.getElementById("vdate").style.display = "unset";
        document.getElementById("vdate").focus();
      } else {
        document.getElementById("vdate").style.display = "none";
      }
    }
  );
 
});
