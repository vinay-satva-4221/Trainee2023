

$(document).ready(function () {
  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 1,
        maxlenght: 0,
        digits:false
      },
      number: {
        required: true,
        minlength: 0,
        maxlenght: 10
      },
      income: {
        required: true,
        minlength: 2,
        maxlenght: 10

      },
      loan: {
        required: true,
        minlength: 2,
        maxlenght: 10
      },
      investment: {
        required: true,
        minlength: 2,
        maxlenght: 10
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
        minlength: "complete your name",
        maxlenght: "",
        digits:"invaild Name"
      },
      number: {
        required: "Enter your Mobile number",
        minlength: "complete your number",
        maxlenght: "invalid number",
      },
      income: {
        required: "Enter your income",
        minlength: "complete your number",
        maxlenght: "invalid number",
      },
      loan: {
        required: "Enter your loan",
        minlength: "complete your number",
        maxlenght: "invalid number",
      },
      investment: {
        required: "Enter your investment",
        minlength: "complete your number",
        maxlenght: "",
      },
      gender: {
        required: "Please Select Your Gender",
      },
      birthday: {
        required: "Please Select Your Birthday",
      },
      
    }
  });

  $('#submit').click(function(){
    console.log(document.getElementById("income").value)
    console.log(taxable_amount)
    var name  = $('#name').val();
    $('#mname').html(name);
    $('#taxamount').html(loan);
    $('#payabletax').html();
    $("h6").add("p").css("background", "lightBlue");
  })


  $(function() {
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');

      if (years <= 18) {
        alert("You are not eligibal to Pay tax , You are"+years+ "years old!");
      }
      
    });
  });  








});