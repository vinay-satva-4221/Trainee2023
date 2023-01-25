// Check if any field is empty
function validatecheck() {

    if (!validategender() && !validatename() && !validatemobile() && !validateincome() && !validateloan() && !validateinvestment()) {
        return false;
    } else {
        return true
    }
}



function reset() {
    document.getElementById("taxform").reset();
}



//Date picker and age validation 

$(function () {
    $('input[name="birthday"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        var msgage = document.getElementById("invalid_bday");
        if (years < 18) {

            msgage.innerHTML = "*Age below 18 is not eligible..";
            msgage.style.color = "red";
            document.getElementById("invalid_bday").style.display = "unset";
            return false;
        } else {
            document.getElementById("invalid_bday").style.display = "none";
            return true;
        }

    });
});




//Javascript Validations
function validatename() {
    let setname = /^[a-zA-Z]+$/;
    let name = document.getElementById("name").value;
    let msgname = document.getElementById("invalid_msg");
    if (!setname.test(name)) {
        msgname.innerHTML = "*Please enter a characters only..";
        msgname.style.color = "red";
        document.getElementById("invalid_msg").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg").style.display = "none";
        return true;
    }
}

function validatemobile() {
    let setmobile = /^[0-9]{10}$/;
    let mobile = document.getElementById("mobile").value;
    let msgmobile = document.getElementById("invalid_msg1");
    if (!setmobile.test(mobile)) {
        msgmobile.innerHTML = "*Please enter 10 digits..";
        msgmobile.style.color = "red";
        document.getElementById("invalid_msg1").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg1").style.display = "none";
        return true;
    }
}

function validategender() {

    let gen1 = document.getElementById("gen");
    // let msg=document.getElementById("genmsg");

    if (gen1.value == "") {
        document.getElementById("genmsg").innerHTML = "*Please select an option..";

        document.getElementById("genmsg").style.display = "unset";

        return false;
    } else {
        document.getElementById("genmsg").style.display = "none";
        return true;
    }
}



function validateincome() {
    let setincome = /^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/;

    let income = document.getElementById("income").value;
    let msgincome = document.getElementById("invalid_income");
    if (!setincome.test(income)) {
        msgincome.innerHTML = "Please enter a valid Income!";
        msgincome.style.color = "red";
        document.getElementById("invalid_income").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_income").style.display = "none";
        return true;
    }
}

function validateloan() {
    let setloan = /^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/;
    let loan = document.getElementById("loan").value;
    let msgloan = document.getElementById("invalid_loan");
    if (!setloan.test(loan)) {
        msgloan.innerHTML = "Please enter a valid Loan Amount!";
        msgloan.style.color = "red";
        document.getElementById("invalid_loan").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_loan").style.display = "none";
        return true;
    }
}

function validateinvestment() {
    let setinvest = /^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/;
    let invest = document.getElementById("investment").value;
    let msginvest = document.getElementById("invalid_investment");
    if (!setinvest.test(invest)) {
        msginvest.innerHTML = "Please enter a valid Investment amount!";
        msginvest.style.color = "red";
        document.getElementById("invalid_investment").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_investment").style.display = "none";
        return true;
    }
}
// ,setinvestment(),taxableamount()
// validatecheck(),
//Tax Calculations
function getdata() {


    var isValid = validatecheck()

    if (isValid) {
        $('#myModal').modal('show')

    }
    else{
        $('#myModal').modal('hide')
    }
    console.log(isValid)

    //Getting name and setting into modal

    let name = document.getElementById("name").value;
    document.getElementById("msgsetname").innerHTML = name;

    //Getting income and setting into modal
    let loan = document.getElementById("loan").value;
    document.getElementById("msgsetloan").innerHTML = loan * 80 / 100;

    taxableamount();

    // var loan = document.getElementById("#loan").value;
    // var investment = document.getElementById("#investment").value;

    

}


function setinvestment() {

    var percent1 = document.getElementById("investment").value;

    if (percent1 < 100000) {
        document.getElementById("value3").innerHTML = percent1;
        return percent1;
    } else {
        document.getElementById("value3").innerHTML = 100000;
        return 100000;
    }

}

function setincome(){
    
    //Getting income and setting into modal
    let income20 = document.getElementById("income").value;
    income20 = income20 * 20 / 100;
    document.getElementById("income").innerHTML= income20;

    return income20;

}

function setloan(){
    
    //Getting income and setting into modal
    let loan80 = document.getElementById("loan").value;
    loan80 = loan80 * 80 / 100;
    document.getElementById("loan").innerHTML = loan80;

    return loan80;


}

function taxableamount()
{
    let incomemain = document.getElementById("income").value;
    var total= incomemain -(Math.min(setincome(),setloan())+setinvestment())
    document.getElementById("t_amt").innerHTML=total;

}

