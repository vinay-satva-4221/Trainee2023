//   Birthdate
var years = "";
$(document).ready(function () {
    $(function () {
        $('input[name="birthday"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
            years = moment().diff(start, 'years');
            console.log("You are " + years + " years old!");
            return validAge(years);
        });
    });
});
//    Valid for only 18+
function validAge(years) {

    let valid = false;
    message = " ";
    if (years >= 18) {
        message = "You are eligible";
        valid = true;

    } else {
        message = "You are not eligible";

    }
    document.getElementById("birth").innerHTML = message;
    return valid;
}

// Name
function nameValidate() {
    let valid = true;
    let regName = (/^[a-zA-Z]+$/);
    let firstname = document.getElementById('name').value;

    let message = "";
    if (!regName.test(firstname)) {
        message = 'Please enter valid Name.';
        valid = false;
    } else {
        message = 'Great';
        valid = true;
    }
    document.getElementById("fname").innerHTML = message;
    return valid;
}

//   Mobile Number
function mobValidate() {
    let valid = true;
    let re = (/^([0-9]{10})$/);
    let acno = document.getElementById("mobile").value;
    let message = " ";
    if (re.test(acno) == true) {
        message = "good";

    }
    else {
        message = "Please type valid numbers";
        valid = false;
    }
    document.getElementById("vmob").innerHTML = message;
    return valid;
}



// checkgender
function checkgendererror() {
    var valid = true;
    var e = document.getElementById("gen");
    
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

// Income
function checkincomeerror() {
    let income = document.getElementById("income").value;
    let regex = /^[0-9]$/;
    var message = ""
    if (income == "") {
        document.getElementById("incm").innerHTML = "Enter valid amount of Income";
        document.getElementById("incm").style.display = "unset";
        document.getElementById("income").focus();
        valid = false;
    }
    else {
        document.getElementById("incm").style.display = "none";
        valid = true;
    }
}

//   loan
function checkloanerror() {
    let loan = document.getElementById("loan").value;
    let regex = /^[0-9]$/;
    if (loan == "") {
        document.getElementById("lon").innerHTML = "Enter valid amount of Income";
        document.getElementById("lon").style.display = "unset";
        document.getElementById("loan").focus();
        return false;
    }
    else {
        document.getElementById("lon").style.display = "none";
        return true;
    }
}
//   investment
function checkinvestmenterror() {
    let income = document.getElementById("investment").value;
    let regex = /^[0-9]$/;
    if (income == "") {
        document.getElementById("invst").innerHTML = "Enter valid amount of Income";
        document.getElementById("invst").style.display = "unset";
        document.getElementById("investment").focus();
        return false;
    }
    else {
        document.getElementById("invst").style.display = "none";
        return true;
    }
}


// for Senior citizen
function seniorCitizen(years) {
    let valid = false;
    if (years >= 60) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}

// check validations
function checkvalidation() {
    
    if (!nameValidate()) {
        document.getElementById("error").innerHTML = "please enter Name ";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else if (!mobValidate()) {
        document.getElementById("error").innerHTML = "please enter Mobile numbers";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else if (!validAge(years)) {
        document.getElementById("error").innerHTML = "please enter valid age";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else if (!checkgendererror()) {
        document.getElementById("error").innerHTML = "please select gender";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else if (!checkincomeerror()) {
        document.getElementById("error").innerHTML = "please enter income";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else if (!checkloanerror()) {
        document.getElementById("error").innerHTML = "please fill valid loan";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else if (!checkinvestmenterror()) {
        document.getElementById("error").innerHTML = "please fill valid investment";
        document.getElementById("modalname").style.display = "none";
        document.getElementById("modalamt").style.display = "none";
        document.getElementById("modaltax").style.display = "none";
    } else {
        //  document.getElementById("stpname") = document.getElementById("name").value;
          return calculatetax();
    }
    if (nameValidate() && mobValidate() && validAge(years) && checkgendererror() && checkincomeerror() && checkloanerror() && checkinvestmenterror()) {
       return calculatetax();
    }

}

// for get the value 
var Name = document.getElementById("name").value;
var Birth = parseInt(document.getElementById("dob").value);
var IIncome =document.getElementById("income").value;
var Loan = document.getElementById("loan").value;
var Investment = document.getElementById("investment").value;
var non_payable = loanable();




function payable() {
    let loan = parseInt(document.getElementById("loan").value);
    let income = parseInt(document.getElementById("income").value);
    let incomeper = (income * 20) / 100;
    let loanper = (loan * 80) / 100;
    var amt= (Math.min(incomeper, loanper)); 
    if (parseInt(incomeper) > parseInt(loanper)) {
        var amt = income - loanper;
    } else {
        var amt = income - incomeper ;
    }
    return amt;
}
function loanable() {
    let investment = parseInt(document.getElementById("investment").value);
    if (investment >= 100000) {
        var txtamt = 100000;
    }
    else {
        var txtamt = investment;
    }
    return txtamt;
}

//  calculate 
function calculatetax() {
    var taxamount = IIncome + (parseInt(payable()) + parseInt(loanable()));
    console.log(taxamount);
    var senior = seniorCitizen(years);
    // var man = gender;
    // var women = gender;
    
    // for senior citizen
    if (seniorCitizen(years)) {
        if (taxamount < 300000) {
            console.log("don't have to pay tax");
        } else {
            var nonpayamt = taxamount - 300000;
            if (nonpayamt > 400000) {
                var tax3 = nonpayamt - 400000;
                var tax2 = (400000 * 10) / 100;
                var taax2 = tax2;
            } else {
                tax2 = (nonpayamt * 10) / 100;
                taax2 = tax2;
            }
            if (tax3 <= 0) {
                var paybalamt = tax3;
                console.log("Pay amount", paybalamt);
            } else {
                var taax3 = (tax3 * 20) / 100;
                paybalamt = taax3 + taax2;
                console.log("pay amount", paybalamt);
            }
        }
    }
    // for male
    var gender = document.getElementById("gen").value;
    if (gender == "male") {
        debugger
        if (taxamount < 240000) {
            console.log("don't have to pay tax");
        } else {
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

    //    for female
   
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
                console.log("pay amount", paybalamt);
            }
        }
    }
debugger
     document.getElementById("stpname").innerHTML= document.getElementById("name").value;
     document.getElementById("stepamt").innerHTML= taxamount;
     document.getElementById("steptax").innerHTML= paybalamt;
}





