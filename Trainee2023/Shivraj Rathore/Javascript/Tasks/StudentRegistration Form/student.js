$(document).ready(function () {
    $("#divsubmit").hide();
    var Data = [];
    LocalData = JSON.parse(localStorage.getItem("studentData"));
    if (LocalData != null) {
      Data = LocalData;
    }
    Data.forEach((data) => {
      $("#tabledata").append(
        '<tr><td class="index">' +
          data.Id +
          '</td><td class="sname">' +
          data.Name +
          '</td><td class="smobile">' +
          data.Mobile +
          '</td><td class="semail">' +
          data.Email +
          '</td><td class="sstate">' +
          data.State +
          '</td><td class="scity">' +
          data.City +
          '</td><td class="scollege">' +
          data.College +
          '</td><td class="sbranch">' +
          data.Branch +
          '</td><td class="scgpa">' +
          data.CGPA +
          '</td><td class="speriod">' +
          data.FromToWhenYouStudied +
          '</td><td class="szip">' +
          data.Zip +
          '</td><td><input type="button" value="Delete" class="btn btn-outline-danger btnDelete"  /></td><td><input type="button" value="Edit" class="btn btn-outline-info btn-update" /></td></tr>'
      );
    });
    $.validator.addMethod("validname", function (value) {
      return /^[a-zA-Z\s]+$/.test(value);
    });
    $("#mobile").keypress(function (e) {
      var keyCode = e.which;
  
      if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
        return false;
      }
    });
    $("#zip").keypress(function (e) {
      var keyCode = e.which;
  
      if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
        return false;
      }
    });
    $("#myform").validate({
      rules: {
        name: {
          validname: true,
          minlength: 3,
        },
        mobile: {
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
        college: {
          required: true,
          validname: true,
        },
        cgpa: {
          required: true,
          digits: true,
        },
  
        branch: {
          required: true,
        },
        state: {
          required: true,
        },
        city: {
          // required: true,
        },
        zip: {
          required: true,
          minlength: 6,
          maxlength: 6,
        },
        daterange: {
          required: true,
        },
      },
      messages: {
        name: {
          validname: "Please enter valid name",
          minlength: "Enter Full Name",
        },
        mobile: {
          digits: "Enter Numeric value",
          minlength: "Check for 10 digits",
          maxlength: "Number exceed mobile limit",
        },
        email: {
          required: "Please enter email",
          email: "Enter Valid Email",
        },
        name: {
          validname: "Please enter valid college name",
          required: "Enter college name",
        },
        cgpa: {
          digits: "Enter Numeric CGPA",
        },
        branch: {
          required: "Enter branch",
        },
        state: {
          required: "Enter state",
        },
        city: {
          // required: "Enter city",
        },
        zip: {
          minlength: "Enter 6 digit Zip",
          maxlength: "Zip Code Consist digits",
        },
        daterange: {
          required: "Select Course Duration",
        },
      },
    });
    const CityData =
      '{"Citys":[' +
      '{"StateId":"1","Id":"1","Name":"Indore"},' +
      '{"StateId":"1","Id":"2","Name":"Bhopal"},' +
      '{"StateId":"2","Id":"3","Name":"Sirohi"},' +
      '{"StateId":"2","Id":"4","Name":"Udaipur"},' +
      '{"StateId":"2","Id":"5","Name":"Jaisalmer"},' +
      '{"StateId":"3","Id":"6","Name":"Ahmedabad"},' +
      '{"StateId":"3","Id":"7","Name":"Vadodara"},' +
      '{"StateId":"3","Id":"8","Name":"Surat"},' +
      '{"StateId":"4","Id":"9","Name":"Ludhiana"},' +
      '{"StateId":"4","Id":"10","Name":"Amritsar"},' +
      '{"StateId":"4","Id":"11","Name":"Patiala"}]}';
  
    const StateData =
      '{"States":[' +
      '{"Id":"1","Name":"Madhya Pradesh"},' +
      '{"Id":"2","Name":"Rajasthan"},' +
      '{"Id":"3","Name":"Gujarat"},' +
      '{"Id":"4","Name":"Punjab"}]}';
  
    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States, function (i, option) {
      $("#state").append($("<option></option>").val(option.Id).html(option.Name));
    });
  
    $("#state").change(function () {
      var CityJsonData = JSON.parse(CityData);
      $("#city").html("");
      $.each(CityJsonData.Citys, function (i, option) {
        if ($("#state").val() == option.StateId) {
          $("#city").append(
            $("<option></option>").val(option.Id).html(option.Name)
          );
        }
      });
    });
  
    $(function () {
      $('input[name="daterange"]').daterangepicker(
        {
          opens: "left",
        },
        function (start, end, label) {
          console.log(
            "A new date selection was made: " +
              start.format("YYYY-MM-DD") +
              " to " +
              end.format("YYYY-MM-DD")
          );
        }
      );
    });
  
    $("#pictures").click(function () {
      $("#showpictures").slideToggle("slow");
    });
  
    $("#addrow").click(function () {
      if ($("#myform").valid() == true) {
        swal("Good job!", "Row Added Successfully", "success", {
          button: "Ok",
        });
  
        let Id = $("#tabledata").length;
        let Name = $("#name").val();
        let Mobile = $("#mobile").val();
        let Email = $("#email").val();
        let State = $("#state").val();
        let City = $("#city").val();
        let College = $("#college").val();
        let Branch = $("#branch").val();
        let CGPA = $("#cgpa").val();
        let FromToWhenYouStudied = $("#daterange").val();
        let Zip = $("#zip").val();
  
        var StudentDetails = {
          Id: Id,
          Name: Name,
          Mobile: Mobile,
          Email: Email,
          State: State,
          City: City,
          College: College,
          Branch: Branch,
          CGPA: CGPA,
          FromToWhenYouStudied: FromToWhenYouStudied,
          Zip: Zip,
        };
        debugger;
        var studentData = [];
        studentData = JSON.parse(localStorage.getItem("studentData"));
        if (studentData != null) {
          studentData.push(StudentDetails);
          localStorage.setItem("studentData", JSON.stringify(studentData));
        } else {
          studentData = [];
          studentData.push(StudentDetails);
          localStorage.setItem("studentData", JSON.stringify(studentData));
        }
        $("#tabledata").append(
          "<tr><td>" +
            StudentDetails.Id +
            "</td><td>" +
            StudentDetails.Name +
            "</td><td>" +
            StudentDetails.Mobile +
            "</td><td>" +
            StudentDetails.Email +
            "</td><td>" +
            StudentDetails.State +
            "</td><td>" +
            StudentDetails.City +
            "</td><td>" +
            StudentDetails.College +
            "</td><td>" +
            StudentDetails.Branch +
            "</td><td>" +
            StudentDetails.CGPA +
            "</td><td>" +
            StudentDetails.FromToWhenYouStudied +
            "</td><td>" +
            StudentDetails.Zip +
            '</td><td><input type="button" value="Delete" class="btn btn-outline-danger btnDelete"  /></td><td><input type="button" value="Edit" class="btn btn-outline-info btn-update" /></td></tr>'
        );
      }
    });
    $(document).on("click", ".btnDelete", function () {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this row",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          var getData = JSON.parse(localStorage.getItem("studentData"));
  
          var row_index = $(this).closest("tr").index();
          var req_index = row_index - 1;
          console.log(row_index);
          console.log(req_index);
  
          var getData = JSON.parse(localStorage.getItem("studentData"));
          $(this).closest("tr").remove();
          getDataSplice = getData.splice(req_index, 1);
          localStorage.setItem("studentData", JSON.stringify(getData));
  
          swal("Row Deleted Successfully", {
            icon: "success",
          });
        } else {
          swal("Your Row is not deleted!");
        }
      });
    });
  
    $(document).on("click", ".btn-update", function () {
  
      
      debugger;
      var getData = JSON.parse(localStorage.getItem("studentData"));
  
      var row_index = $(this).closest("tr").index();
      var req_index = row_index - 1;
  
      document.getElementById("name").value = getData[req_index].Name;
      document.getElementById("mobile").value = getData[req_index].Mobile;
      document.getElementById("email").value = getData[req_index].Email;
      document.getElementById("college").value = getData[req_index].College;
      document.getElementById("cgpa").value = getData[req_index].CGPA;
      document.getElementById("branch").value = getData[req_index].Branch;
      document.getElementById("state").value = getData[req_index].State;
      document.getElementById("city").value = getData[req_index].City;
      document.getElementById("zip").value = getData[req_index].Zip;
      document.getElementById("daterange").value = getData[req_index].FromToWhenYouStudied;
    








    });
  });
  
  
  