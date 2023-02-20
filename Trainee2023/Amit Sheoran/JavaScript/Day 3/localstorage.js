$(document).ready(function () {

  $.validator.addMethod('validname', function (value) {
    return /^[a-zA-Z]+$/.test(value)
  });
  $.validator.addMethod('greaterThanZero', function (value, element) {
    return this.optional(element) || (parseFloat(value) > 0);
  });
  $.validator.addMethod("minAge", function (value, element, min) {
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();

    if (age > min + 1) {
      return true;
    }
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= min;
  });

  $('#form').validate({
    rules: {
      name: {
        required: true,
        validname: true,
        minlength: 3
      },
      mobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10
      },
      college: {
        required: true,
        validname: true,

      },

      email: {
        required: true,

      },
      cgpa: {
        required: true,
        digits: true,
        maxlength: 1,

      },

      branch: {
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
        minlength:6,
        maxlength: 6,
      },
      date: {
        required: true,
        
      },

    },
    messages: {
      name: {
        required: "Please enter your Name",
        validname: "only alphabets allowed",
        minlength: "minimum 3 alphabets required",
      },
      mobile: {
        required: "Please enter your Mobile No.",
        digits: "enter only digits",
        minlength: "minimum 10 digits required",
        maxlength: "number should be of 10 digits only"
      },
      college: {
        required: "Please provide college name",
        validname: "only alphabets allowed",

      },
      cgpa: {
        required: "please fill cgpa",
        maxlength: "you can only choose between 1-10",
        digits: "only digits allowed"
      },
      email: {
        required: "please fill your email",

      },
      branch: {
        required: "please choose branch name",
      },
      state: {
        required: "please choose your State",
      },
      city: {
        required: "please choose your city",
      },
      zip: {
        required: "please enter zip code",
        maxlength:"zip code should be of 6 digits",
        minlength:"minimum 6 digits required"
      },
      date: {
        required: "please Select date ",
      },
    }
  });


  $('input[name="date"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  $('input[name="date"]').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="date"]').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });
  $('input[name="date"]').keydown(false);


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
    $("#state").append($('<option></option>').val(option.Id).html(option.Name));
  })

  $("#state").change(function () {
    var CityJsonData = JSON.parse(CityData);
    $("#city").html('');
    $.each(CityJsonData.Citys, function (i, option) {
      if ($("#state").val() == option.StateId) {
        $("#city").append($('<option></option>').val(option.Id).html(option.Name));
      }
    })

  });
});


$("#table").hide();
$("#carouselExampleControls").hide();
$("#picslider").click(function () {
  $("#carouselExampleControls").toggle("show");
});


$("#saveBtn").click(function () {
  $("#table").show();
});

function saveData() {
 

  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var college = document.getElementById("college").value;
  var cgpa = document.getElementById("cgpa").value;
  var branch = document.getElementById("branch").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  var zip = document.getElementById("zip").value;
  var date = document.getElementById("date").value;
  var data = JSON.parse(localStorage.getItem("data")) || [];
  var saveBtn = document.getElementById("saveBtn");
  if (saveBtn.innerHTML === "save") {
    data.push({ name: name, mobile: mobile, email: email, college: college, cgpa: cgpa, branch: branch, state: state, city: city, zip: zip, date: date });
  } else {
    var index = saveBtn.getAttribute("data-index");
    data[index] = { name: name, mobile: mobile, email: email, college: college, cgpa: cgpa, branch: branch, state: state, city: city, zip: zip, date: date };
  }
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
  clearForm();
}

function clearForm() {
  document.getElementById('form').reset();
}
// Display data in HTML table
function displayData() {
  var data = JSON.parse(localStorage.getItem("data"));
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  if (data) {
    data.forEach(function (item, index) {
      var row = tableBody.insertRow();
      var nameCell = row.insertCell(0);
      var mobileCell = row.insertCell(1);
      var emailCell = row.insertCell(2);
      var collegeCell = row.insertCell(3);
      var cgpaCell = row.insertCell(4);
      var branchCell = row.insertCell(5);
      var stateCell = row.insertCell(6);
      var cityCell = row.insertCell(7);
      var zipCell = row.insertCell(8);
      var dateCell = row.insertCell(9);
      var actionsCell = row.insertCell(10);
      nameCell.innerHTML = item.name;
      mobileCell.innerHTML = item.mobile;
      emailCell.innerHTML = item.email;
      collegeCell.innerHTML = item.college;
      cgpaCell.innerHTML = item.cgpa;
      branchCell.innerHTML = item.branch;
      stateCell.innerHTML = item.state;
      cityCell.innerHTML = item.city;
      zipCell.innerHTML = item.zip;
      dateCell.innerHTML = item.date;
      actionsCell.innerHTML =
        '<button onclick="editData(' + index + ')">Edit</button>' +
        '<button onclick="deleteData(' + index + ')">Delete</button>';
    });
  }
}

function editData(index) {
  var data = JSON.parse(localStorage.getItem("data"));
  document.getElementById("name").value = data[index].name;
  document.getElementById("mobile").value = data[index].mobile;
  document.getElementById("email").value = data[index].email;
  document.getElementById("college").value = data[index].college;
  document.getElementById("cgpa").value = data[index].cgpa;
  document.getElementById("branch").value = data[index].branch;
  document.getElementById("state").value = data[index].state;
  document.getElementById("city").value = data[index].city;
  document.getElementById("zip").value = data[index].zip;
  document.getElementById("date").value = data[index].date;
  var saveBtn = document.getElementById("saveBtn");
  saveBtn.innerHTML = "Update";
  saveBtn.setAttribute("data-index", index);
  displayData();
}

// Delete data from local storage
function deleteData(index) {
  var data = JSON.parse(localStorage.getItem("data"));
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
  clearForm();

}

// Call displayData function when the page loads
window.onload = function () {
  displayData();
};