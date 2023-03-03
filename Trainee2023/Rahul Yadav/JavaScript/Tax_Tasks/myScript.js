

$(document).ready(function () {
  $.validator.addMethod("validname", function (value) {
    return /^[a-zA-Z\s]+$/.test(value);
  });
  $("#form").validate({

    rules: {
      name: {
        required: true,
        Text: true,
        digits: false,
        validname:true
      },
      number: {
        required: true,
        minlength: 10,
        maxlenght: 10
      },
      income: {
        required: true,
        min: 0,

      },
      loan: {
        required: true,
        min: 0,
        max: income

      },
      investment: {
        required: true,
        min: 0,
        max: loan

      },
      gender: {
        required: true,
      },
      birthday: {
        required: true,
      }
    },

    messages: {
      name: {
        required: "Enter your name",
        Text: "hello",
        minlength: "complete your name",
        maxlenght: "",
        digits: "invaild Name",
        validname:"invalid name"
      },
      number: {
        required: "Enter your Mobile number",
        minlength: "complete your number",
        maxlenght: "invalid number",
      },
      income: {
        required: "Enter your income",
        min: "How is this possible?"
      },
      loan: {
        required: "Enter your loan",
        min: "How is this possible?",
        max: "hello"
      },
      investment: {
        required: "Enter your investment",
        min: "How is this possible?",
        max: "hello",
      },
      gender: {
        required: "Please Select Your Gender",
      },
      birthday: {
        required: "Please Select Your Birthday",
      },

    }
  });


  function percentCalculation(amount, percent) {
    var c = (parseFloat(amount) * parseFloat(percent)) / 100;
    return parseFloat(c);
  }

  var taxable_amount = 0;
  var years = 0
  $('#submit').click(function () {
    var income = parseFloat($("#income").val());
    var loan = parseFloat($("#loan").val());
    var investment = parseFloat($("#investment").val());
    var genderv = $("#inputState").val()
    var percent_income = 20;
    var income_result = percentCalculation(income, percent_income);

    var percent_loan = 80;
    var loan_result = percentCalculation(loan, percent_loan);

    var color = "blue"

    if (investment >= 100000) {
      investment = 100000;
    } else {
      investment = investment;
    }

    console.log(income_result, loan_result);
    console.log(income_result > loan_result);
    console.log(income - (loan_result + investment));
    if (income_result > loan_result) {
      taxable_amount = income - (loan_result + investment);
    } else {
      taxable_amount = income - (income_result + investment);
    }

    var payabletax;
    if (years >= 60) {
      if (income < 300000) {
        payabletax = "No Tax"
        color = "green"

      } else if (income >= 300000 && income <= 700000) {
        payabletax = percentCalculation(taxable_amount, 10)

      } else {
        payabletax = percentCalculation(taxable_amount, 20)

      }

    } else {
      if (genderv == 1) {                  //male//
        if (income < 240000) {
          payabletax = "No Tax"
          color = "green"

        } else if (income >= 240000 && income <= 600000) {
          payabletax = percentCalculation(taxable_amount, 10)

        } else {
          payabletax = percentCalculation(taxable_amount, 20)

        }

      } else if (genderv == 2) {             //female//
        if (income < 260000) {
          payabletax = "No Tax"
          color = "green"


        } else if (income >= 260000 && income <= 700000) {
          payabletax = percentCalculation(taxable_amount, 10)

        } else {
          payabletax = percentCalculation(taxable_amount, 20)

        }

      }
    }




    console.log("income ", $("#income").val())
    console.log("tax", taxable_amount)
    console.log("paytax", payabletax);
    var name = $('#name').val();
    $('#mname').html(name);
    $('#taxamount').html(taxable_amount);
    $('#payabletax').html(payabletax);
    $("h6").add("p").css("background", color);
  })


  $(function () {
    console.log("cccgfcgcfcch")
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
      console.log("7t6t6tuffyfdutft")

      years = moment().diff(start, 'years');

      if (years <= 18) {
        alert("You are not eligible to Pay tax , You are" + years + "years old!");
      }

    });
  });
});