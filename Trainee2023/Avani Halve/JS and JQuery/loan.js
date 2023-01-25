var years;
var paybalamt;
var taxamount;
var income;
var loan;
var invest;
var gender;
$(document).ready(function () {
   $(function () {
      $('input[name="birthdate"]').daterangepicker(
         {
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format("YYYY"), 10),
         },
         function (start, end, label) {
            years = moment().diff(start, "years");
            console.log(years);
            if (years < 18) {
               $("#dateerror").html("Enter Valid Age only 18+ are valid");
            } else {
               if (years > 60) {
                  seniorcitizen();
               } else {
                  checkgender();
               }
            }
         }
      );
   });
});

function checknameerror() {
   let name = document.getElementById("name").value;
   let regex = /^[a-zA-Z]*$/;
   if (name == "" || !regex.test(name)) {
      document.getElementById("nameerror").innerHTML = "Enter valid value";
      document.getElementById("nameerror").style.display = "unset";
      document.getElementById("name").focus();
      return false;
   } else {
      document.getElementById("nameerror").style.display = "none";
      return true;
   }
}
function checkmobileerror() {
   let mob = document.getElementById("mob").value;
   let regex = /^[0-9]{10}$/;
   if (mob == "" || !regex.test(mob)) {
      document.getElementById("mobileerror").innerHTML = "Enter valid Phone Number";
      document.getElementById("mobileerror").style.display = "unset";
      document.getElementById("mob").focus();
      return false;
   } else {
      document.getElementById("mobileerror").style.display = "none";
      return true;
   }
}

function checkgendererror() {
   let gender = document.getElementById("gender").value;
   if (gender == "") {
      document.getElementById("gendererror").innerHTML = "Select Gender";
      document.getElementById("gendererror").style.display = "unset";
      document.getElementById("gender").focus();
      return false;
   } else {
      document.getElementById("gendererror").style.display = "none";
      return true;
   }
}

function checkincomeerror() {
   let income = document.getElementById("income").value;
   let regex = /^[0-9]$/;
   if (income == "") {
      document.getElementById("incomeerror").innerHTML = "Enter valid amount of Income";
      document.getElementById("incomeerror").style.display = "unset";
      document.getElementById("income").focus();
      return false;
   } else {
      document.getElementById("incomeerror").style.display = "none";
      return true;
   }
}

function checkloanerror() {
   let loan = document.getElementById("loan").value;
   let regex = /^[0-9]$/;
   if (loan == "") {
      document.getElementById("loanerror").innerHTML = "Enter valid amount of Loan";
      document.getElementById("loanerror").style.display = "unset";
      document.getElementById("loan").focus();
      return false;
   } else {
      document.getElementById("loanerror").style.display = "none";
      return true;
   }
}

function checkinvesterror() {
   let invest = document.getElementById("invest").value;
   let regex = /^[0-9]$/;
   if (invest == "") {
      document.getElementById("investerror").innerHTML = "Enter valid amount of investment";
      document.getElementById("investerror").style.display = "unset";
      document.getElementById("invest").focus();
      return false;
   } else {
      document.getElementById("investerror").style.display = "none";
      return true;
   }
}

function seniorcitizen() {
   income = parseInt(document.getElementById("income").value);
   loan = parseInt(document.getElementById("loan").value);
   invest = parseInt(document.getElementById("invest").value);

   var incomepercent = (income * 20) / 100;
   var loanpercent = (loan * 80) / 100;

   if (incomepercent < loanpercent) {
      if (invest < 100000) {
         var amt = incomepercent + invest;
         taxamount = income - amt;
      } else {
         var amt = incomepercent + 100000;
         taxamount = income - amt;
      }
   } else {
      if (invest < 100000) {
         var amt = loanpercent + invest;
         taxamount = income - amt;
      } else {
         var amt = loanpercent + 100000;
         taxamount = income - amt;
      }
   }
   if (taxamount < 300000) {
      console.log("don't have to pay tax");
   } else {
      var nonpayamt = taxamount - 400000;
      if (nonpayamt > 400000) {
         var tax3 = nonpayamt - 400000;
         var tax2 = (400000 * 10) / 100;
         var taax2 = tax2;
      } else {
         tax2 = (nonpayamt * 10) / 100;
         taax2 = tax2;
      }
      if (tax3 <= 0) {
         paybalamt = tax3;
         console.log("Pay amount", paybalamt);
      } else {
         var taax3 = (tax3 * 20) / 100;
         paybalamt = taax3 + taax2;
         console.log("pay amount", paybalamt);
      }
   }
}

function checkgender() {
   income = parseInt(document.getElementById("income").value);
   loan = parseInt(document.getElementById("loan").value);
   invest = parseInt(document.getElementById("invest").value);
   
   var incomepercent = (income * 20) / 100;
   var loanpercent = (loan * 80) / 100;

   if (incomepercent < loanpercent) {
      if (invest < 100000) {
         var amt = incomepercent + invest;
         taxamount = income - amt;
      } else {
         var amt = incomepercent + 100000;
         taxamount = income - amt;
      }
   } else {
      if (invest < 100000) {
         var amt = loanpercent + invest;
         taxamount = income - amt;
      } else {
         var amt = loanpercent + 100000;
         taxamount = income - amt;
      }
   }

   gender = document.getElementById("gender").value;
   if (gender == "male")
    {
      if (taxamount < 240000) {
         console.log("don't have to pay tax");
      } 
      else {
         var nonpayamt = taxamount - 240000;
         if (nonpayamt > 360000) {
            var tax3 = nonpayamt - 360000;
            var tax2 = (360000 * 10) / 100;
            var taax2 = tax2;
         } else {
            tax2 = (nonpayamt * 10) / 100;
            taax2 = tax2;
         }
         if (tax3 <= 0) {
            paybalamt = tax3;
            console.log("Pay amount", paybalamt);
         } else {
            var taax3 = (tax3 * 20) / 100;
            paybalamt = taax3 + taax2;
            console.log("pay amount", paybalamt);
         }
      }
   } else {
      if (taxamount < 260000) {
         console.log("don't have to pay tax");
      } else {
         var nonpayamt = taxamount - 260000;
         if (nonpayamt > 440000) {
            var tax3 = nonpayamt - 440000;
            var tax2 = (440000 * 10) / 100;
            var taax2 = tax2;
         } else {
            tax2 = (nonpayamt * 10) / 100;
            taax2 = tax2;
         }
         if (tax3 <= 0) {
            paybalamt = tax3;
            console.log("Pay amount", paybalamt);
         } else {
            var taax3 = (tax3 * 20) / 100;
            paybalamt = taax3 + taax2;
            console.log("pay amount2", paybalamt);
         }
      }
   }
}

function checkvalidation() {
   if (income < loan || income < invest) {
      alert("Income should be greater");
   } 
   else {
      if (!checknameerror()) {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("hide");
         });
      } else if (!checkmobileerror()) {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("hide");
         });
      } else if (!checkgendererror()) {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("hide");
         });
      } else if (!checkincomeerror()) {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("hide");
         });
      } else if (!checkloanerror()) {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("hide");
         });
      } else if (!checkinvesterror()) {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("hide");
         });
      } else {
         $(document).ready(function () {
            $("#exampleModalToggle").modal("show");
         });
         document.getElementById("stepname").innerHTML = document.getElementById("name").value;
         document.getElementById("stepamt").innerHTML = taxamount;
         document.getElementById("steptax").innerHTML = paybalamt;          
      }
   }
}
