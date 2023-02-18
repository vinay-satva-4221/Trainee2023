var id = 0;
var studentsArray = [];

// Check if any field is empty
function validatecheck() {
  if (
    !validatename() 
    // !validatemobile() &&
    // !validateemail() &&
    // !validatezip() &&
    // !validatecgpa() &&
    // !validatecname() &&
    // !validatebname() &&
    // !validatestate()
  ) {
    $(document).ready(function () {
      $("#btn1").click(function () {
        swal({
          title: "Missing fields",
          text: "Please enter all details",
          icon: "warning",
          button: "Ok",
        });
      });
    });
  } else {
    return validateallow(), hide();
  }
}

function hide() {
  var h = document.getElementById("mytable");
  h.classList.remove("hide");
}
// function hide1(){
//     var h = document.getElementById("hide1");
//     h.classList.remove("hide");
// }
// function hideexp(){
//     var h = document.getElementById("hide1");
//     h.classList.remove("hide");
// }

// function init() {
//   if (studentsArray.length > 0) {
//     studentsArray = JSON.parse(localStorage.StudentDetails);
//     console.log(studentsArray);
//     for (var i = 0; i < studentsArray.length; i++) {
//       console.log(i);

//       prepareTableCell(
//         i,
//         stuObj.name,
//         stuObj.mobile,
//         stuObj.email,
//         stuObj.cname,
//         stuObj.cgpa,
//         stuObj.bname,
//         stuObj.state,
//         stuObj.city,
//         stuObj.zip,
//         stuObj.studied,
//         stuObj.color
//       );
//     }
//   }
// }



function validateallow() {

  var test;
  //localStorage.setItem("StudentDetails", JSON.parse(studentsArray));

  // var i = studentsArray[i];
  var name = $("#name").val();
  var mobile = $("#mobile").val();
  var email = $("#email").val();
  var cname = $("#cname").val();
  var cgpa = $("#cgpa").val();
  var bname = $("#bname").val();
  var state = $("#state").val();
  var city = $("#city").val();
  var zip = $("#zip").val();
  var studied = $("#studied").val();
  var color = $("#color").val();

  id++;
  var stuObj = {
    id: id,
    name: name,
    mobile: mobile,
    email: email,
    cname: cname,
    cgpa: cgpa,
    bname: bname,
    state: state,
    city: city,
    zip: zip,
    studied: studied,
    color: color,
  };

  studentsArray.push(stuObj);

  //set cookie
  document.cookie = "color" + "=" + $("#color").val() + ";"


  localStorage.setItem("StudentDetails", JSON.stringify(studentsArray));



  // init() ;
  prepareTableCell(
    id,
    stuObj.name,
    stuObj.mobile,
    stuObj.email,
    stuObj.cname,
    stuObj.cgpa,
    stuObj.bname,
    stuObj.state,
    stuObj.city,
    stuObj.zip,
    stuObj.studied,
    stuObj.color
  );

  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cname").value = "";
  document.getElementById("cgpa").value = "";
  document.getElementById("bname").value = "";
  document.getElementById("state").value = "";
  document.getElementById("city").value = "";
  document.getElementById("zip").value = "";
  document.getElementById("studied").value = "";
  document.getElementById("color").value = "";
}

//Table insert data

function prepareTableCell(
  index,
  name,
  mobile,
  email,
  cname,
  cgpa,
  bname,
  state,
  city,
  zip,
  studied,
  color
) {
  debugger;
  var index = index;
  console.log("index", index);
  var table = document.getElementById("mytable");
  var row = table.insertRow();
  var currentIndex = studentsArray.findIndex((x) => x.id == index);

  var srCell = row.insertCell(0);
  var nameCell = row.insertCell(1);
  var mobileCell = row.insertCell(2);
  var emailCell = row.insertCell(3);
  var cnameCell = row.insertCell(4);
  var cgpaCell = row.insertCell(5);
  var bnameCell = row.insertCell(6);
  var stateCell = row.insertCell(7);
  var cityCell = row.insertCell(8);
  var zipCell = row.insertCell(9);
  var studiedCell = row.insertCell(10);
  var colorCell = row.insertCell(11);
  var editCell = row.insertCell(12);
  var deleteCell = row.insertCell(13);

  srCell.innerHTML = currentIndex + 1;
  nameCell.innerHTML = name;
  mobileCell.innerHTML = mobile;
  emailCell.innerHTML = email;
  cnameCell.innerHTML = cname;
  cgpaCell.innerHTML = cgpa;
  bnameCell.innerHTML = bname;
  stateCell.innerHTML = state;
  cityCell.innerHTML = city;
  zipCell.innerHTML = zip;
  studiedCell.innerHTML = studied;
  colorCell.innerHTML = color;
  editCell.innerHTML =
    '<button class="btn btn-primary" onclick="editTableRow(this)">Edit</button>';
  deleteCell.innerHTML =
    '<button class="btn btn-danger" onclick="deleteTableRow(' +
    index +
    ')">Delete</button>';

  

  //get cookie  
  let x = document.cookie;
  let part = x.slice(6);
  console.log(part);

  var selectElement = document.querySelector("#color");
  var output = selectElement.value;
  console.log(output);


  if (part == "skyblue" && output == "skyblue") {
    row.style.backgroundColor = 'skyblue';
    document.getElementById("mainCon1").style.backgroundColor = "skyblue";
  }
  else if (part == "lightgreen" && output == "lightgreen") {
    row.style.backgroundColor = "lightgreen";
    document.getElementById("mainCon1").style.backgroundColor = "lightgreen";

  }
  else if (part == "lightpink" && output == "lightpink") {
    row.style.backgroundColor = "lightpink";
    document.getElementById("mainCon1").style.backgroundColor = "lightpink";

  }
  else if (part == "lightyellow" && output == "lightyellow") {
    row.style.backgroundColor = "lightyellow";
    document.getElementById("mainCon1").style.backgroundColor = "lightyellow";

  }
  else {
    alert("please select any color..");
  }


  $(document).ready(function () {
    $("#btn1").click(function () {
      swal({
        title: "Record Added!",
        text: "You entered a record!",
        icon: "success",
        button: "Done...",
      });
    });
  });
}

// window.onload = function () {
//   prepareTableCell();
// }
//document.onload =  prepareTableCell();

//Delete Row
function deleteTableRow(index) {
  debugger;
  var table = document.getElementById("mytable");
  console.log(index, studentsArray);
  var currentIndex = studentsArray.findIndex((x) => x.id == index);
  console.log("currentIndex", currentIndex);
  table.deleteRow(currentIndex + 1);
  studentsArray.splice(currentIndex, 1);

  localStorage.setItem("StudentDetails", JSON.stringify(studentsArray));


  // document.getElementById("").value = SelectedRow.cells[1].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[2].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[3].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[4].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[5].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[6].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[7].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[8].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[9].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[10].innerHTML;
  // document.getElementById("").value = SelectedRow.cells[11].innerHTML;

  // document.SelectedRow.cookie = "color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  if (currentIndex == 0) {
    document.getElementById("btn2").style.display = 'none';

  }
  else {
    document.getElementById("btn2").style.display = 'inline';
  }

  var xt = document.getElementById("mytable").rows.length; //1

  if (xt == 1) {
    document.getElementById("mainCon1").style.backgroundColor = 'unset';

    // document.getElementById("tabCont").style.visibility = "hidden";

  }

  var alast = $("#mytable").find("tr").last().find("td:nth-child(12)").text();
  console.log(alast)


  if (alast == "skyblue") {
    document.getElementById("mainCon1").style.backgroundColor = 'skyblue';
  }
  else if (alast == "lightgreen") {
    document.getElementById("mainCon1").style.backgroundColor = 'lightgreen';
  }
  else if (alast == "lightpink") {
    document.getElementById("mainCon1").style.backgroundColor = 'lightpink';
  }
  else if (alast == "lightyellow") {
    document.getElementById("mainCon1").style.backgroundColor = 'lightyellow';
  }
  else {
    document.getElementById("mainCon1").style.backgroundColor = 'unset';
  }

  swal({
    title: "Record deleted",
    text: "Student Detail Deleted successfully",
    icon: "success",
    button: "Ok",
  });
}

//Edit Row
function editTableRow(td) {
  SelectedRow = td.parentElement.parentElement;

  document.getElementById("name").value = SelectedRow.cells[1].innerHTML;
  document.getElementById("mobile").value = SelectedRow.cells[2].innerHTML;
  document.getElementById("email").value = SelectedRow.cells[3].innerHTML;
  document.getElementById("cname").value = SelectedRow.cells[4].innerHTML;
  document.getElementById("cgpa").value = SelectedRow.cells[5].innerHTML;
  document.getElementById("bname").value = SelectedRow.cells[6].innerHTML;
  document.getElementById("state").value = SelectedRow.cells[7].innerHTML;
  document.getElementById("city").value = SelectedRow.cells[8].innerHTML;
  document.getElementById("zip").value = SelectedRow.cells[9].innerHTML;
  document.getElementById("studied").value = SelectedRow.cells[10].innerHTML;
  document.getElementById("color").value = SelectedRow.cells[11].innerHTML;
  document.getElementById("btn2").innerHTML = "Update Row";

  localStorage.setItem("StudentDetails", JSON.stringify(studentsArray));

}


//Update Row
function updateTableRow() {
  debugger;
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["mobile"] = document.getElementById("mobile").value;
  formData["email"] = document.getElementById("email").value;
  formData["cname"] = document.getElementById("cname").value;
  formData["cgpa"] = document.getElementById("cgpa").value;
  formData["bname"] = document.getElementById("bname").value;
  formData["state"] = document.getElementById("state").value;
  formData["city"] = document.getElementById("city").value;
  formData["zip"] = document.getElementById("zip").value;
  formData["studied"] = document.getElementById("studied").value;
  formData["color"] = document.getElementById("color").value;

  SelectedRow.cells[1].innerHTML = formData.name;
  SelectedRow.cells[2].innerHTML = formData.mobile;
  SelectedRow.cells[3].innerHTML = formData.email;
  SelectedRow.cells[4].innerHTML = formData.cname;
  SelectedRow.cells[5].innerHTML = formData.cgpa;
  SelectedRow.cells[6].innerHTML = formData.bname;
  SelectedRow.cells[7].innerHTML = formData.state;
  SelectedRow.cells[8].innerHTML = formData.city;
  SelectedRow.cells[9].innerHTML = formData.zip;
  SelectedRow.cells[10].innerHTML = formData.studied;
  SelectedRow.cells[11].innerHTML = formData.color;
  // document.getElementById("btn2").innerHTML = "Export";

  //set
  document.cookie = "color" + "=" + $("#color").val() + ";"

  //get
  let x = document.cookie;
  let part = x.slice(6);
  console.log(part);

  var selectElement = document.querySelector("#color");
  var output = selectElement.value;
  console.log(output);

  if (part == "skyblue" && output == "skyblue") {
    SelectedRow.style.backgroundColor = 'skyblue';
    document.getElementById("mainCon1").style.backgroundColor = "skyblue";
  }
  else if (part == "lightgreen" && output == "lightgreen") {
    SelectedRow.style.backgroundColor = "lightgreen";
    document.getElementById("mainCon1").style.backgroundColor = "lightgreen";

  }
  else if (part == "lightpink" && output == "lightpink") {
    SelectedRow.style.backgroundColor = "lightpink";
    document.getElementById("mainCon1").style.backgroundColor = "lightpink";

  }
  else if (part == "lightyellow" && output == "lightyellow") {
    SelectedRow.style.backgroundColor = "lightyellow";
    document.getElementById("mainCon1").style.backgroundColor = "lightyellow";

  }
  else {
    alert("please select any color..");
  }
}



deleteAllCookies = () => {
  let c = document.cookie.split(';')
  for (const k of c) {
    let s = k.split('=')
    document.cookie = s[0].trim() + '=;expires=Fri, 20 Aug 2021 00:00:00 UTC'
  }
}

//Date Picker
$(function () {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#studied").html(
      start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
    );
  }

  $("#studied").daterangepicker(
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    },
    cb
  );

  cb(start, end);
});

//set cookie

// function setCookie(name,value,exp_days) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exp_days*24*60*60*1000));
//   var expires = "expires=" + d.toGMTString();
//   document.cookie = name + "=" + value + ";" + expires + ";path=/";

//   document.cookie = "color=" + cookievalue;
//   document.write ("Setting Cookies : " + "color=" + cookievalue );

// }

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

function validateemail() {
  let setemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let email = document.getElementById("email").value;
  let msgemail = document.getElementById("invalid_email");
  if (!setemail.test(email)) {
    msgemail.innerHTML = "*Please enter @ and .com";
    msgemail.style.color = "red";
    document.getElementById("invalid_email").style.display = "unset";

    return false;
  } else {
    document.getElementById("invalid_email").style.display = "none";
    return true;
  }
}

function validatezip() {
  let setzip = /^(\d)(?!\1{5})\d{5}$/;

  let zip = document.getElementById("zip").value;
  let msgzip = document.getElementById("invalid_msg2");
  if (!setzip.test(zip)) {
    msgzip.innerHTML =
      "*Only 6 digits are allowed and repeated number is not valid";
    msgzip.style.color = "red";
    document.getElementById("invalid_msg2").style.display = "unset";
    return false;
  } else {
    document.getElementById("invalid_msg2").style.display = "none";
    return true;
  }
}

function validatecgpa() {
  let setcgpa = /^(10|\d)(\.\d{1,2})?$/;
  let cgpa = document.getElementById("cgpa").value;
  let msgcgpa = document.getElementById("invalid_cgpa");
  if (!setcgpa.test(cgpa)) {
    msgcgpa.innerHTML = "*Only 1 to 10 are allowed with decimal";
    msgcgpa.style.color = "red";
    document.getElementById("invalid_cgpa").style.display = "unset";
    return false;
  } else {
    document.getElementById("invalid_cgpa").style.display = "none";
    return true;
  }
}

function validatecname() {
  let setcname = /^[a-zA-Z]+$/;
  let cname = document.getElementById("cname").value;
  let msgcname = document.getElementById("invalid_cname");
  if (!setcname.test(cname)) {
    msgcname.innerHTML = "*Please enter a characters only..";
    msgcname.style.color = "red";
    document.getElementById("invalid_cname").style.display = "unset";

    return false;
  } else {
    document.getElementById("invalid_cname").style.display = "none";
    return true;
  }
}

function validatebname() {
  let bname = document.getElementById("bname");
  let msg = document.getElementById("invalid_bname");

  if (bname.value == "") {
    document.getElementById("invalid_bname").innerHTML =
      "*Please select any Branch..";
    msg.style.color = "red";
    document.getElementById("invalid_bname").style.display = "unset";

    return false;
  } else {
    document.getElementById("invalid_bname").style.display = "none";
    return true;
  }
}

function validatestate() {
  debugger;
  let state = document.getElementById("state");
  let msg = document.getElementById("invalid_state");

  if (state.value == "") {
    document.getElementById("invalid_state").innerHTML =
      "*Please select any State..";
    msg.style.color = "red";
    document.getElementById("invalid_state").style.display = "unset";

    return false;
  } else {
    document.getElementById("invalid_state").style.display = "none";
    return true;
  }
}

const CityData =
  '{"Cities":[' +
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

$(document).ready(function () {
  var StateJsonData = JSON.parse(StateData);
  $.each(StateJsonData.States, function (i, option) {
    $("#state").append($("<option></option>").val(option.Id).html(option.Name));
  });

  $("#state").change(function () {
    var CityJsonData = JSON.parse(CityData);
    $("#city").html("");
    $.each(CityJsonData.Cities, function (i, option) {
      if ($("#state").val() == option.StateId) {
        $("#city").append(
          $("<option></option>").val(option.Id).html(option.Name)
        );
      }
    });
  });
});

$("#table").hide();
$("#carouselExampleControls").hide();
$("#slider").click(function () {
  $("#carouselExampleControls").toggle("show");
});

// function Export(){
//     debugger;
//     TableToExcel.convert(document.getElementById("mytable"));
// }

function Export(type, fn, dl) {
  var elt = document.getElementById("mytable");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || "MySheetName." + (type || "xlsx"));
}
