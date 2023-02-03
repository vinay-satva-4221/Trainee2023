//   Birthdate
var years = "";
var taxamount;
var amt;
var tax3;
var tax2;
var taax2;
var taax3;
var paybalamt;
var nonpayamt;
var loan = document.getElementById("loan").value;
var income = document.getElementById("income").value;
var investment = document.getElementById("investment").value;
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
        var gender = document.getElementById("gen").value;
        if(gender == " "){
            document.getElementById("sname").innerHTML = "Enter valid amount of Income";
        document.getElementById("sname").style.display = "unset";
        document.getElementById("gen").focus();
        return false;
    }
    else {
        document.getElementById("sname").style.display = "none";
        return true;
    }
    
}

// Income
function checkincomeerror() {
     income = document.getElementById("income").value;
    let regex = /^[0-9]$/;

    if (income == "") {
        document.getElementById("incm").innerHTML = "Enter valid amount of Income";
        document.getElementById("incm").style.display = "unset";
        document.getElementById("income").focus();
        return false;
    }
    else {
        document.getElementById("incm").style.display = "none";
        return true;
    }
}

//   loan
function checkloanerror() {
     loan = document.getElementById("loan").value;
    let regex = /^[0-9]$/;
    if (loan == "") {
        document.getElementById("lon").innerHTML = "Enter valid amount of loan";
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
     investment = document.getElementById("investment").value;
    let regex = /^[0-9]$/;
    if (income == "") {
        document.getElementById("invst").innerHTML = "Enter valid amount of Investment";
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
    var valid = false;
    if (years >= 60) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}

// check validations
function checkvalidation() {
    if (income < loan && income < investment) {
        alert("Income should be greater");
    } else {
        if (!nameValidate()) {
            $(document).ready(function () {
                $("#exampleModalToggle").modal("hide");
            });
        } else if (!mobValidate()) {
            $(document).ready(function () {
                $("#exampleModalToggle").modal("hide");
            });
        } else if (!validAge(years)) {
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
        } else if (!checkinvestmenterror()) {
            $(document).ready(function () {
                $("#exampleModalToggle").modal("hide");
            });
        } else {
            $(document).ready(function () {
                $("#exampleModalToggle").modal("show");
            });  
            calculatetax();
            
        }
    }

}

function calculatetax() {
    var loan = parseInt(document.getElementById("loan").value);
    var income = parseInt(document.getElementById("income").value);
    var Investment = parseInt(document.getElementById("investment").value);
    var gender = document.getElementById("gen").value;
    var incomepercent = (income * 20) / 100;
    var loanpercent = (loan * 80) / 100;
    if (incomepercent < loanpercent) {
        if (Investment < 100000) {
             amt = incomepercent + Investment;
             taxamount = income - amt;
        } else {
             amt = incomepercent + 100000;
            taxamount = income - amt;
        }
    } else {
        if (Investment < 100000) {
             amt = loanpercent + Investment;
            taxamount = income - amt;
        } else {
             amt = loanpercent + 100000;
            taxamount = income - amt;
            return taxamount;
        }
    }


    if (seniorCitizen(years)) {
        if (taxamount < 300000) {
            paybalamt = "don't have to pay tax";
        } else {
             nonpayamt = taxamount - 300000;
            if (nonpayamt > 400000) {
                 tax3 = nonpayamt - 400000;
                 tax2 = (400000 * 10) / 100;
                 taax2 = tax2;
            } else {
                tax2 = (nonpayamt * 10) / 100;
                taax2 = tax2;
            }
            if (tax3 <= 0) {
                paybalamt = tax3;
               
            } else {
                 taax3 = (tax3 * 20) / 100;
                paybalamt = taax3 + taax2;
               
            }
        }
    }

    // if
    //     // for male
    //     var gender = document.getElementById("gen").value;
    if (gender == "male") {

        if (taxamount < 240000) {
            paybalamt= "don't have to pay tax";
        } else {
             nonpayamt = taxamount - 240000;
            if (nonpayamt > 360000) {
                 tax3 = nonpayamt - 360000;
                 tax2 = (360000 * 10) / 100;
                 taax2 = tax2;
            } else {
                tax2 = (nonpayamt * 10) / 100;
                paybalamt = tax2;
            }
            if (tax3 <= 0) {
                paybalamt = tax3;
            } else {
                 taax3 = (tax3 * 20) / 100;
                paybalamt = taax3 + taax2;

            }
        }
    } else {

        //    for female

        if (taxamount < 260000) {
            paybalamt = "don't have to pay tax";
        } else {
             nonpayamt = taxamount - 260000;
            if (nonpayamt > 440000) {
                 tax3 = nonpayamt - 440000;
                 tax2 = (440000 * 10) / 100;
                 taax2 = tax2;
            } else {
                tax2 = (nonpayamt * 10) / 100;
                taax2 = tax2;
            }
            if (tax3 <= 0) {
                paybalamt = tax3;
                console.log("Pay amount", paybalamt);
            } else {
                 taax3 = (tax3 * 20) / 100;
                paybalamt = taax3 + taax2;
                console.log("pay amount", paybalamt);
            }
        }

    }
    if(paybalamt == "don't have to pay tax"){
            document.getElementById("stpname").innerHTML = document.getElementById("name").value;
            document.getElementById("stepamt").innerHTML = taxamount;
            document.getElementById("modalamt").style.backgroundColor = "green";
            document.getElementById("modaltax").style.backgroundColor = "green";
            document.getElementById("steptax").innerHTML = paybalamt;    
}  else {
    document.getElementById("stpname").innerHTML = document.getElementById("name").value;
    document.getElementById("stepamt").innerHTML = taxamount;
    document.getElementById("modalamt").style.backgroundColor = "red";
    document.getElementById("modaltax").style.backgroundColor = "red";
    document.getElementById("steptax").innerHTML = paybalamt;
}
}





