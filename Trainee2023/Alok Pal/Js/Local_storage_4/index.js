// VAlidations
function validateForm() {
  if (
    !nameV() &&
    !mobileV() &&
    !emailV() &&
    !collageV() &&
    !cgpaV() &&
    !BranchV() &&
    !zipV() &&
    !swal()
  ) {
    valid = false;
  } else {
    return true;
  }
}

function nameV() {
  let regName = /^[A-Za-z]+$/;
  let name = document.getElementById("fname").value;
  let vname = document.getElementById("navalid");
  if (!regName.test(name)) {
    vname.innerHTML = "**Please enter Alphabets only**";
    document.getElementById("navalid").style.display = "unset";
    document.getElementById("fname").focus();
    return false;
  } else {
    document.getElementById("navalid").style.display = "none";
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

function emailV() {
  let setemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("femail").value;
  let msgemail = document.getElementById("vemail");
  if (!setemail.test(email)) {
    msgemail.innerHTML = "**Please enter correct email address";
    msgemail.style.color = "red";
    document.getElementById("vemail").style.display = "unset";
    return false;
  } else {
    document.getElementById("vemail").style.display = "none";
    return true;
  }
}

function collageV() {
  let regName = /^[A-Za-z]+$/;
  let name = document.getElementById("fcollage").value;
  let vname = document.getElementById("vcollage");
  if (!regName.test(name)) {
    vname.innerHTML = "**Please enter Alphabets only**";
    document.getElementById("vcollage").style.display = "unset";
    // document.getElementById("fcollage").focus();
    return false;
  } else {
    document.getElementById("vcollage").style.display = "none";
    return true;
  }
}

function cgpaV() {
  let regName = /^(?:[1-9]|0[1-9]|10)$/;
  let cgpa = document.getElementById("fcgpa").value;
  let vcgpa = document.getElementById("vcgpa");
  if (!regName.test(cgpa)) {
    vcgpa.innerHTML = "**CGPA should be put between 1-10";
    document.getElementById("vcgpa").style.display = "unset";
    // document.getElementById("fcgpa").focus();
    return false;
  } else {
    document.getElementById("vcgpa").style.display = "none";
    return true;
  }
}

function BranchV() {
  let branch = document.getElementById("fbranch").value;
  if (branch == "") {
    document.getElementById("vbranch").innerHTML =
      "**Please Select Valid Option!";
    document.getElementById("vbranch").style.display = "unset";
    // document.getElementById("fbranch").focus();
    return false;
  } else {
    document.getElementById("vbranch").style.display = "none";
    return true;
  }
}

function zipV() {
  let regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
  let z1 = document.getElementById("zip").value;
  let z2 = document.getElementById("vzip1");
  if (!regName.test(z1)) {
    z2.innerHTML = "**Invalid zip code";
    document.getElementById("vzip1").style.display = "unset";
    document.getElementById("vzip1").focus();
    return false;
  } else {
    document.getElementById("vzip1").style.display = "none";
    return true;
  }
}

// DATERANGPICKER

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

//JSON
const CityData =
  '{"Citys":[' +
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

const StateData =
  '{"States":[' +
  '{"Id":"Madhya Pradesh","Name":"Madhya Pradesh"},' +
  '{"Id":"Rajasthan","Name":"Rajasthan"},' +
  '{"Id":"Gujarat","Name":"Gujarat"},' +
  '{"Id":"Punjab","Name":"Punjab"}]}';

// Jquery
$(document).ready(function () {
  //slider
  $(".mover").click(function () {
    $("#carouselExampleIndicators").slideToggle(200);
  });

  //Dropdown
  var StateJsonData = JSON.parse(StateData);
  $.each(StateJsonData.States, function (i, option) {
    $("#State").append($("<option></option>").val(option.Id).html(option.Name));
  });
  $("#State").change(function () {
    var CityJsonData = JSON.parse(CityData);
    $("#City").html("");
    $.each(CityJsonData.Citys, function (i, option) {
      if ($("#State").val() == option.StateId) {
        $("#City").append(
          $("<option></option>").val(option.Id).html(option.Name)
        );
      }
    });
  });

  //Table
  // $("#save").on("click", function () {
  //   var name = $("#fname").val();
  //   var mob = $("#fmobile").val();
  //   var email = $("#femail").val();
  //   var clgname = $("#fcollage").val();
  //   var cgpa = $("#fcgpa").val();
  //   var branch = $("#fbranch").val();
  //   var selectS = $("#State").val();
  //   var selectC = $("#City").val();
  //   var zip = $("#zip").val();
  //   var date = $("#fdate").val();
  //   var count = $("#myTable tr").length;
  //   if (name != "" && mob != "" && email != "" && clgname != "" && cgpa != "" && branch != "" && selectS != "" && selectC != "" && zip != "" && date != "") {
  //     $("#myTable tbody").append(
  //       '<tr class="child"><td>' +
  //       count +
  //       "</td><td>" +
  //       name +
  //       "</td><td>" +
  //       mob +
  //       "</td><td>" +
  //       email +
  //       "</td><td>" +
  //       clgname +
  //       "</td><td>" +
  //       cgpa +
  //       "</td><td>" +
  //       branch +
  //       "</td><td>" +
  //       selectS +
  //       "</td><td>" +
  //       selectC +
  //       "</td><td>" +
  //       zip +
  //       "</td><td>" +
  //       date +
  //       '</td><td><a href="javascript:void(0);" class="remCF1 btn  btn-danger">Remove</a></td></tr>'
  //     );
  //   }
  // });

  // $(document).on("click", ".remCF1", function () {
  //   $(this).parent().parent().remove();
  //   $("#myTable tbody tr").each(function (i) {
  //     $($(this).find("td")[0]).html(i + 1);
  //   });
  // });
});
$("#save").click(function () {
  let Name = $("#fname").val();
  let Mobile = $("#fmobile").val();
  let Email = $("#femail").val();
  let State = $("#State").val();
  let City = $("#City").val();
  let Collage = $("#fcollage").val();
  let Branch = $("#fbranch").val();
  let CGPA = $("#fcgpa").val();
  let FromToWhenYouStudied = $("#fdate").val();
  let Zip = $("#zip").val();

  var StudentDetails = {
    // id: studentData.length +1 ,
    id : 1,
    Name: $("#fname").val(),
    Mobile: $("#fmobile").val(),
    Email: $("#femail").val(),
    State: $("#State").val(),
    Collage: $("#fcollage").val(),
    City: $("#City").val(),
    Branch: $("#fbranch").val(),
    CGPA: $("#fcgpa").val(),
    FromToWhenYouStudied: $("#fdate").val(),
    Zip: $("#zip").val(),
  };

  var studentData = (localStorage.getItem("studentData"));
  if (studentData != null) {
    var studentJsonData = JSON.parse(studentData);
    studentJsonData.students.push(StudentDetails);
    localStorage.setItem("studentData", JSON.stringify(studentJsonData));
  } else {
    var studentData = JSON.parse('{"students": []}');
    studentData.students.push(StudentDetails);
    localStorage.setItem("studentData", JSON.stringify(studentData));
  }

  // swal({
  //   title: "Student",
  //   text: "Student Detail Added successfully",S
  //   icon: "success",
  //   button: "Ok",
  // });
  // swal("Here's the title!", "...and here's the text!");
});

function selectData() {
  var datal = JSON.parse(localStorage.getItem("studentData"));
  if (datal != null) {
    let html = "";

    for (let i = 0; i < datal.students.length; i++) {
      html =
        html +
        `<tr>
        <td>${i+ 1}</td>
        <td>${datal.students[i].Name}</td>
        <td>${datal.students[i].Mobile}</td>
        <td>${datal.students[i].Email}</td>
        <td>${datal.students[i].Collage}</td>
        <td>${datal.students[i].CGPA}</td>
        <td>${datal.students[i].Branch}</td>
        <td>${datal.students[i].State}</td>
        <td>${datal.students[i].City}</td>
        <td>${datal.students[i].Zip}</td>
        <td>${datal.students[i].FromToWhenYouStudied}</td>
        <td><a href="javascript:void(0);"  onclick="deleteData(${i})" class="remCF1 btn btn-danger">Delete</a></td>
        <tr>`;
    }
    document.getElementById("root").innerHTML = html;
    $(document).on("click", ".remCF1", function () {

      let del = localStorage.key(this);
      localStorage.removeItem(del);
      $(this).parent().parent().remove();
      // $(this).localStorage.removeItems();
      $("#myTable tbody tr").each(function (i) {
        $($(this).find("td")[0]).html(i + 1);
      });
    });



    function deleteData(rid){
      var datal = JSON.parse(localStorage.getItem("studentData"))
      datal.removeItems(rid);
      localStorage.setItem("studentData", JSON.stringify(studentData));
      selectData();
    }


    function deleteF(){

    }

  }
}
