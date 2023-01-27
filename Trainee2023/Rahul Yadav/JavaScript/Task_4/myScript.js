

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
      clgname: {
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
        max: 6,
      },
      daterange: {
        required: true,
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
      clgname: {
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
        max: "you can only enter up to 6 digit"
      },
      daterange: {
        required: "please enter",
      }

    }
  });

  $("#flip").click(function () {
    $("#carouselExampleControls").slideToggle("slow");
  });


  $(function () {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function (start, end, label) {
      alert("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });


  const CityData = '{"Citys":[' +
    '{"StateId":"Madhya Pradesh","Id":"Indore","Name":"Indore"},' +
    '{"StateId":"Madhya Pradesh","Id":"Bhopal","Name":"Bhopal"},' +
    '{"StateId":"Rajasthan","Id":"Sirohi","Name":"Sirohi"},' +
    '{"StateId":"Rajasthan","Id":"Udaipur","Name":"Udaipur"},' +
    '{"StateId":"Rajasthan","Id":"Jaisalmer","Name":"Jaisalmer"},' +
    '{"StateId":"Gujarat","Id":"Ahmedabad","Name":"Ahmedabad"},' +
    '{"StateId":"Gujarat","Id":"Vadodara","Name":"Vadodara"},' +
    '{"StateId":"Gujarat","Id":"Surat","Name":"Surat"},' +
    '{"StateId":"Punjab","Id":"Ludhiana","Name":"Ludhiana"},' +
    '{"StateId":"Punjab","Id":"Amritsar","Name":"Amritsar"},' +
    '{"StateId":"Punjab","Id":"Patiala","Name":"Patiala"}]}';

  const StateData = '{"States":[' +
    '{"Id":"Madhya Pradesh","Name":"Madhya Pradesh"},' +
    '{"Id":"Rajasthan","Name":"Rajasthan"},' +
    '{"Id":"Gujarat","Name":"Gujarat"},' +
    '{"Id":"Punjab","Name":"Punjab"}]}';



  var StateJsonData = JSON.parse(StateData);
  $.each(StateJsonData.States, function (i, option) {
    $("#State").append($('<option></option>').val(option.Id).html(option.Name));
  })

  $("#State").change(function () {
    var CityJsonData = JSON.parse(CityData);
    $("#City").html('');
    $.each(CityJsonData.Citys, function (i, option) {
      if ($("#State").val() == option.StateId) {
        $("#City").append($('<option></option>').val(option.Id).html(option.Name));
      }
    })



  });



  $("#addrow").on("click", function () {
    debugger
    var name = $("#name").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var clgname = $("#clgname").val();
    var cgpa = $("#cgpa").val();
    var brnchname = $("#brnchname").val();
    var State = $("#State").val();
    var City = $("#City").val();
    var zipcode = $("#zipcode").val();
    var daterange = $("#daterange").val();
    // var count = $("#table tr").length;
    if (name != "" && mobile != "" && email != "" && clgname != "" && cgpa != "" && brnchname != "" && State != "" && City != "" && zipcode != "" && daterange != "") {
      $("#table ").append(
        '<tr class="child"><td>' +
        //  count +
        // "</td><td>" +
        name +
        "</td><td>" +
        mobile +
        "</td><td>" +
        email +
        "</td><td>" +
        clgname +
        "</td><td>" +
        cgpa +
        "</td><td>" +
        brnchname +
        "</td><td>" +
        State +
        "</td><td>" +
        City +
        "</td><td>" +
        zipcode +
        "</td><td>" +
        daterange +
        '</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>'
      )
    }
    var studentData = localStorage.getItem("studentData");
    //var studentData = sessionStorage.getItem("studentData");
    if (studentData != null) {
      var studentJsonData = JSON.parse(studentData);
      studentJsonData.students.push(StudentDetails);
      localStorage.setItem("studentData", JSON.stringify(studentJsonData));
      //sessionStorage.setItem("studentData", JSON.stringify(studentData));
    }
    else {
      var studentData = JSON.parse('{"students": []}');
      studentData.students.push(StudentDetails);
      localStorage.setItem("studentData", JSON.stringify(studentData));
      //sessionStorage.setItem("studentData", JSON.stringify(studentData));
    }
  });





















});
