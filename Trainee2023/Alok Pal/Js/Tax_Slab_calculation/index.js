// Global
var payableT;

// validations

function validateForm() {
  if (
    !nameV() &&
    !mobileV() &&
    !genderV() &&
    !incomeV() &&
    !loanV() &&
    !investV()
  ) {
    valid = false;
  } else {
    return true;
  }
}
var form = $("#form");

function getValid() {
  var isvalid = validateForm();
  if (isvalid) {
    $("#exampleModal").modal("show");
  } else {
    $("#exampleModal").modal("hide");
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
  } else {
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
  } else {
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
  } else {
    document.getElementById("vinvest").style.display = "none";
    return true;
  }
}

function resetFunc() {
  var element = document.getElementById("form");
  element.reset();
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
      console.log("You are " + years + " years old!"); //date of birth

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

  // $("#mod1").click(function (){
  //   $("#exampleModal").modal();
  // })
});

// tax calculations

// to set name in modal;
function updatemodal() {
  var name = document.getElementById("fname").value;
  document.getElementById("mname").innerHTML = name;
}

function percentage_1() {
  var income = parseInt(document.getElementById("fincome").value);
  var loan = parseInt(document.getElementById("floan").value);
  var investment = parseInt(document.getElementById("finvestment").value);
  // condition
  if (investment > 100000) {
    document.getElementById("vinvest").value = 100000;
  } else if (investment <= 100000) {
    document.getElementById("vinvest").value =
      document.getElementById("finvestment").value;
  }

  var incomePercent = 0.2 * income;
  var loanPercent = 0.8 * loan;

  var investPercent = parseInt(document.getElementById("vinvest").value);

  console.log("invest", document.getElementById("vinvest").value);

  console.log(Math.min(incomePercent, loanPercent));

  document.getElementById("taxam").innerHTML =
    income - (Math.min(incomePercent, loanPercent) + investPercent);

  // taxable value
  var valueTax =
    income - (Math.min(incomePercent, loanPercent) + investPercent);
}

function payableTaX() {
  var income = parseInt(document.getElementById("fincome").value);
  var loan = parseInt(document.getElementById("floan").value);
  var investment = parseInt(document.getElementById("finvestment").value);
  // condition
  if (investment > 100000) {
    document.getElementById("vinvest").value = 100000;
  } else if (investment <= 100000) {
    document.getElementById("vinvest").value =
      document.getElementById("finvestment").value;
  }

  var incomePercent = 0.2 * income;
  var loanPercent = 0.8 * loan;

  var investPercent = parseInt(document.getElementById("vinvest").value);

  console.log("invest", document.getElementById("vinvest").value);

  console.log(Math.min(incomePercent, loanPercent));

  document.getElementById("taxam").innerHTML =
    income - (Math.min(incomePercent, loanPercent) + investPercent);

  // taxable value
  var valueTax =
    income - (Math.min(incomePercent, loanPercent) + investPercent);

  //
  console.log(valueTax);

  let gender = document.getElementById("gender").value;

  // console.log(document.getElementById("taxam").value);

  // if (gender == "Male" && valueTax < 240000){
  //   (document.getElementById("payt").innerHTML= ("No need to pay tax"));
  // }

  if (gender == "Male") {
    if (valueTax < 240000) {
      console.log(
        (document.getElementById("payt").innerHTML = "No need to pay tax")
      );
    } else {
      var tax1 = valueTax - 240000;
      if (tax1 > 360000) {
        var tax2 = 36000;
        var tax3 = tax1 - 360000;
      } else {
        tax2 = 0.1 * tax1;
        document.getElementById("payt").innerHTML = tax2;
      }
      if (tax3 <= 0) {
        document.getElementById("payt").innerHTML = tax3;
      } else {
        let tax4 = 0.2 * tax3;
        document.getElementById("payt").innerHTML = parseInt(tax4 + tax2);
      }
    }
  }
  else if (gender == "Female") {
    if (valueTax < 260000) {
      console.log(
        (document.getElementById("payt").innerHTML = "No need to pay tax")
      );
    } else {
      var tax1 = valueTax - 260000;
      if (tax1 > 440000) {
        var tax2 = 44000;
        var tax3 = tax1 - 440000;
      } else {
        tax2 = 0.1 * tax1;
        document.getElementById("payt").innerHTML = tax2;
      }
      if (tax3 <= 0) {
        document.getElementById("payt").innerHTML = tax3;
      } else {
        let tax4 = 0.2 * tax3;
        document.getElementById("payt").innerHTML = parseInt(tax4 + tax2);
      }
    }
  }

  //   if (valueTax < 240000 && gender == "Male") {
  //     document.getElementById("payt").innerHTML = "No need to pay tax";
  //   } else if (valueTax > 240000) {
  //     let valueTax1 = valueTax - 240000;

  //     if (valueTax1 > 360000) {
  //       var valuetax3 = 36000; // 10% of 3.6
  //       var valueTax4 = valueTax1 - 360000; // ValueTax1 - 3.6
  //     } else {
  //       var valuetax2 = valueTax1 * 0.1;
  //       payableT = valuetax2;
  //     }
  //     document.getElementById("payt").value = valueTax;
  //   }
  //   if (valueTax4 > 0) {
  //     var valueTax5 = valueTax4 * 0.2;
  //     payableT = valueTax5 + valuetax3;
  //   }
  //   document.getElementById("payt").innerHTML = payableT;
}
