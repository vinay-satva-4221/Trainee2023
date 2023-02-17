

$(document).ready(function () {

  $.validator.addMethod("validname", function (value) {
    return /^[a-zA-Z\s]+$/.test(value);
  });
  $("#addrow").click(function () {
    $("#basic_form").valid();
  });
  $("#basic_form").validate({
    rules: {
      name: {
        required: true,
        validname: true,
      },
      mobile: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      clgname: {
        required: true,
        validname: true,
      },
      cgpa: {
        required: true,
      },
      zipcode: {
        required: true,
      },
    },

    messages: {
      name: {
        required: "Enter your Name",
        validname: "please enter only characters",
      },
      mobile: {
        required: "Enter your mobile number",
      },
      email: {
        required: "Enter your email",
        email: "Please enter valid email with @",
      },
      clgname: {
        required: "Enter your collage Name",
        validname: "please enter text",
      },
      cgpa: {
        required: "Enter your cgpa",
      },
      brnchname: {
        required: "Enter your branch name ",
      },
    },
  });


  //DateRange Picker 📅
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
});

// DropDown Data

const cityList = [
  { State: "MadhyaPradesh", CityName: "Indore" },
  { State: "MadhyaPradesh", CityName: "Bhopal" },
  { State: "MadhyaPradesh", CityName: "Ratlam" },
  { State: "Gujrat", CityName: "Ahmedabad" },
  { State: "Gujrat", CityName: "Vadodara" },
  { State: "Gujrat", CityName: "Surat" },
  { State: "Punjab", CityName: "Udaipur" },
  { State: "Punjab", CityName: "Sirohi" },
  { State: "Punjab", CityName: "Jaisalmer" },
  { State: "Rajasthan", CityName: "Ludhiana" },
  { State: "Rajasthan", CityName: "Amritsar" },
  { State: "Rajasthan", CityName: "Patiala" },
];

// jquery started
$(document).ready(function () {
  $("#State").change(function () {
    $("#City").html("<option selected disabled value=''>Choose...</option>");
    let citys = cityList.filter((e) => e.State == $("#State").val());

    citys.forEach((e) => {
      const option =
        "<option val='" + e.CityName + "'> " + e.CityName + "</option>";
      $("#City").append(option);
    });
  });
});

//showdata

function showData() {
  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    var color = getCookie(peopleList[index].firstName);

    html += "<tr class=text-center>";
    html += "<td>" + (index + 1) + "</td>";
    html += "<td>" + element.firstName + "</td>";
    html += "<td>" + element.mobile + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.collage + "</td>";
    html += "<td>" + element.cgpa + "</td>";
    html += "<td>" + element.branch + "</td>";
    html += "<td>" + element.state + "</td>";
    html += "<td>" + element.city + "</td>";
    html += "<td>" + element.zip + "</td>";
    html += "<td>" + element.date + "</td>";
    html += "<td>" + color + "</td>";
    html +=
      '<td><button onclick="deleteData( ' +
      index +
      ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
      index +
      ')" class= "btn btn-warning m-2">Edit</button></td>';

    html += "</tr>";

    document.getElementById("root").innerHTML = html;
    backgroundColor();
    tableRowColor();
  });
}

// to load data when the page refreshes
document.onload = showData();

// Add data to local storage
function addData() {
  // i can put here the validations
  var firstName = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var collage = document.getElementById("collage").value;
  var cgpa = document.getElementById("cgpa").value;
  var branch = document.getElementById("branch").value;
  var state = document.getElementById("State").value;
  var city = document.getElementById("City").value;
  var zip = document.getElementById("zip").value;
  var date = document.getElementById("date").value;

  var peopleList;

  // if (validate() == true) {
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));

    peopleList.push({
      firstName: firstName,
      mobile: mobile,
      email: email,
      collage: collage,
      cgpa: cgpa,
      state: state,
      branch: branch,
      city: city,
      zip: zip,
      date: date,
    });
  }

  document.cookie = firstName + "=" + $("#color").val() + ";";

  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";
  document.getElementById("collage").value = "";
  document.getElementById("cgpa").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("State").value = "";
  document.getElementById("City").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("date").value = "";
}
// }

//Delete
function deleteData(index) {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}



function updateData(index) {
  document.getElementById("addrow").style.display = "none";
  document.getElementById("save").style.display = "block";
  document.getElementById("save").style.marginBottom = "10px";

  let indexEdit = (index + 1)
  let CookieName = $("#Table tr:eq(" + indexEdit + ") td:nth-child(2)").text();
  //   alert(CookieName)
  document.cookie = CookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  document.getElementById("name").value = peopleList[index].firstName;
  document.getElementById("mobile").value = peopleList[index].mobile;
  document.getElementById("email").value = peopleList[index].email;
  document.getElementById("collage").value = peopleList[index].collage;
  document.getElementById("cgpa").value = peopleList[index].cgpa;
  document.getElementById("branch").value = peopleList[index].state;
  document.getElementById("State").value = peopleList[index].branch;
  document.getElementById("City").value = peopleList[index].city;
  document.getElementById("zip").value = peopleList[index].zip;
  document.getElementById("date").value = peopleList[index].date;

  document.getElementById("save").onclick = function () {
    peopleList[index].firstName = document.getElementById("name").value;
    peopleList[index].mobile = document.getElementById("mobile").value;
    peopleList[index].email = document.getElementById("email").value;
    peopleList[index].collage = document.getElementById("collage").value;
    peopleList[index].cgpa = document.getElementById("cgpa").value;
    peopleList[index].state = document.getElementById("branch").value;
    peopleList[index].branch = document.getElementById("State").value;
    peopleList[index].city = document.getElementById("City").value;
    peopleList[index].zip = document.getElementById("zip").value;
    peopleList[index].date = document.getElementById("date").value;

    document.cookie = peopleList[index].firstName + "=" + $("#color").val() + ";"

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();


    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("collage").value = "";
    document.getElementById("cgpa").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("State").value = "";
    document.getElementById("City").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("date").value = "";
    document.getElementById("color").value = "";
  };
}

function getCookie(uname) {
  let nameq = uname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nameq) == 0) {
      return c.substring(nameq.length, c.length);
    }
  }
  return "";
}

function backgroundColor() {
  let bgcolor = $("#Table tr:last td:nth-child(12)").text();
  console.log(bgcolor);
  // $("bodycolor").css("background-color", bgcolor);
  document.getElementById("bodycolor").style.backgroundColor = bgcolor;
}

function tableRowColor() {
  debugger;
  var rowCount = $("#Table tr").length;
  for (let i = 1; i < rowCount; i++) {
    let trcolor = $("#Table tr:eq(" + i + ") td:nth-child(12)").text();
    //alert($(this).text())
    $("#Table tr:eq(" + i + ")").css("background-color", trcolor);
    // $('#Table tr:eq(' + i + ')').css("background-color", trcolor);
  }
}

$("#remove").click(function () {
  debugger;
  var rowCount = $("#Table tr").length;
  for (let i = 1; i < rowCount; i++) {
    let Trname = $("#Table tr:eq(" + i + ") td:nth-child(2)").text();
    //alert($(this).text())
    document.cookie = Trname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }
  showData();
});

$("#export").on("click", function () {
  window.open('data:application/vnd.ms-excel,' + $('.table-responsive').html());
  swal("Downloaded!", "Your Imaginary file has been Downloaded", "success");
});
