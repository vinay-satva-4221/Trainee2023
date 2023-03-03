// Form Validation
function validateForm() {
  if (!nameV() && !lnameV() && !zipV()) {
    valid = false;
    sweetA = false;
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
function lnameV() {
  let regName = /^[A-Za-z]+$/;
  let name = document.getElementById("lname").value;
  let vname = document.getElementById("navalid1");
  if (!regName.test(name)) {
    vname.innerHTML = "**Please enter Alphabets only**";
    document.getElementById("navalid1").style.display = "unset";
    document.getElementById("lname").focus();
    return false;
  } else {
    document.getElementById("navalid1").style.display = "none";
    return true;
  }
}

function zipV() {
  let regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
  let z1 = document.getElementById("fzip").value;
  let z2 = document.getElementById("vzip");
  if (!regName.test(z1)) {
    z2.innerHTML = "**Invalid zip code";
    document.getElementById("vzip").style.display = "unset";
    document.getElementById("vzip").focus();
    return false;
  } else {
    document.getElementById("vzip").style.display = "none";
    return true;
  }
}

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

// Js

function showData() {
  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr class=text-center>";
    html += "<td>" + (index + 1) + "</td>";
    html += "<td>" + element.firstName + "</td>";
    html += "<td>" + element.lastName + "</td>";
    html += "<td>" + element.state + "</td>";
    html += "<td>" + element.city + "</td>";
    html += "<td>" + element.zip + "</td>";
    html +=
      '<td><button onclick="deleteData( ' +
      index +
      ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
      index +
      ')" class= "btn btn-warning m-2">Edit</button></td>';

    html += "</tr>";

    document.getElementById("root").innerHTML = html;
  });
}

// to load data when the page refreshes
document.onload = showData();

// Add data to local storage
function addData() {
  // i can put here the validations
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var state = document.getElementById("State").value;
  var city = document.getElementById("City").value;
  var zip = document.getElementById("fzip").value;

  var peopleList;

  // Lifo function is called
  var lifo = document.getElementById("flifo").checked;
  var fifo = document.getElementById("ffifo").checked;
  console.log(fifo, "fifo");

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));

    if (peopleList.length < 5 && lifo == true) {
      if (peopleList.length < 5) {
        peopleList.push({
          firstName: firstName,
          lastName: lastName,
          state: state,
          city: city,
          zip: zip,
        });
      }
    } else if (peopleList.length >= 5 && lifo == true) {
      peopleList.pop();
      peopleList.push({
        firstName: firstName,
        lastName: lastName,
        state: state,
        city: city,
        zip: zip,
      });
    }

    if (peopleList.length < 5 && fifo == true) {
      if (peopleList.length < 5) {
        peopleList.push({
          firstName: firstName,
          lastName: lastName,
          state: state,
          city: city,
          zip: zip,
        });
      }
    } else if (peopleList.length >= 5 && fifo == true) {
      peopleList.pop();
      peopleList.unshift({
        firstName: firstName,
        lastName: lastName,
        state: state,
        city: city,
        zip: zip,
      });
    }
  }

  // peopleList.push({
  //     firstName: firstName,
  //     lastName: lastName,
  //     state: state,
  //     city: city,
  //     zip: zip,
  // });

  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("State").value = "";
  document.getElementById("City").value = "";
  document.getElementById("fzip").value = "";
}

// Delete Data

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

function lifo() {
  var lifo = document.getElementById("flifo").checked;
  console.log(lifo, "lifo");
}
