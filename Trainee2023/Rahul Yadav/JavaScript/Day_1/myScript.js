

$(document).ready(function () {


  $.validator.addMethod('validname', function (value) {
    return (/^[a-zA-Z\s]+$/).test(value)
  });

  $("#form").validate({

    rules: {
      name: {
        required: true,

      },
      mobile: {
        required: true,
        
      },
      email: {
        required: true,
        min: 0,

      },
      college: {
        required: true,
        min: 0,
  
      },
      cgpa: {
        required: true,

      },
      branchname: {
        required: true,
      },
      state: {
        required: true,
      },
      city: {
        required: true,
      },
      zip: {
        required: true,
        max:6,
      },
      daterange: {
        required:true,
      }
    },

    messages: {
      name: {
        required: "Enter your name",
      },
      mobile: {
        required: "Enter your Mobile number",
        
      },
      email: {
        required: "Enter your email",
        min: "invalid income value "
      },
      college: {
        required: "Enter your College Name",
        min: "You have entered invalid loan value",
        max: "hello"
      },
      cgpa: {
        required: "Enter your cgpa",
        min: "you have entered invalid investment value",
        max: "hello",
      },
      branchname: {
        required: "Please Select Your branch",
      },
      state: {
        required: "Please Select Your state",
      },
      city: {
        required: "Please Select Your city",
      },
      zip: {
        required: "Please Select Your zip",
        max:"you can only enter up to 6 digit"
      },
      daterange:{
        required:"please enter",
      }

    }
  });

  $("#flip").click(function(){
    $("#carouselExampleControls").slideToggle("slow");
  });


  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      alert("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  



  
  

  







});
