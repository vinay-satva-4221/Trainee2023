// Jquery
$(document).ready(function () {
  // Dynamic adding of name
  var user = JSON.parse(localStorage.getItem("user"));
  var jName = user[0].Admin;
  console.log(jName);
  $(".dynamicN").html(jName);

  // Dynamic adding image
  var jImg = user[0].Image;
  console.log(jImg);
  $(".adminImg").attr("src", user[0].Image);

  // Class removal
  $(".sorting").removeClass(".sorting");
});

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    window.location.replace("Login.html");
  }
};

var $navItems = $(".navbar-collapse li").removeClass("active");

$navItems
  .filter(function () {
    return $(this).find("a").prop("href") === location.href;
  })
  .addClass("active");

//Logout
function logout() {
  localStorage.removeItem("user");
  window.location.replace("Login.html");
}

// second modal number validation
// document.getElementById("pNum").addEventListener("keypress", function (evt) {
//   if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
//   {
//       evt.preventDefault();
//   }
// });
// test
var r = JSON.parse(localStorage.getItem("newStock"));
console.log(r);

// console.log(r[0].Part[0].PartN)
// var v = r[0].Part[0].PartN;
// console.log(v);
// table
// function format(d) {
//   // `d` is the original data object for the row
//   return (
//     '<table cellpadding="5" class="table text-center border " cellspacing="0" border="0" style="padding-left:50px;width:95%; margin-left:4%">' +
//     "<tr style='background-color:#ebebeb'>" +
//     '<th style="color:black"><b> # </b></th>' +
//     '<th style="color:black"><b> Part Number </b></th>' +
//     '<th style="color:black"><b> Ordered </b></th>' +
//     '<th style="color:black"><b> Assigned </b></th>' +
//     "</tr>" +
//     "</tr>" +
//     "<td>" +
//     1 +
//     "</td>" +
//     "<td>" +
//     v +
//     "</td>" +
//     "<td>" +
//     d.name +
//     "</td>" +
//     "<td>" +
//     d.name +
//     "</td>" +
//     "</tr>" +
//     "</table>"
//   );
// }
function format(d) {
  let dynamicChildRow = "";
  if (d.Part && d.Part.length > 0) {
    dynamicChildRow +=
      '<table cellpadding="5" class="table  border " cellspacing="0" border="0" style="padding-left:50px;width:95%; margin-left:4%">';
    dynamicChildRow +=
      '<thead class ="table text-center"><tr style= "background-color:#ebebeb" ><th style="color:black"><b> # </b></th><th style="color:black"><b>Part Number</b></th><th style="color:black"><b> Ordered </b></th><th style="color:black"><b>Assigned</b></th></tr></thead>';
    dynamicChildRow += "<tbody  class ='table '  >";
    d.Part.forEach((e, index) => {
      let indx = (index + 1);
      dynamicChildRow +=
        "<tr><td>" +
        indx +
        "</td><td>" +
        e.PartN +
        "</td><td>" +
        e.Order +
        "</td><td>" +
        e.Comments +
        "</td></tr>";
    });
    dynamicChildRow += "</tbody></table>";
  }
  return dynamicChildRow;
}

// var dataSet = [
//   ["Stock Location", "-", "-", "On Water", "On Water", "In production", ""],
//   ["Eta Date", "-", "-", "10/08/2021", "10/08/2021", "10/08/2021", ""],
//   ["BW-01-S-M", "1", "0", "3", "0", "0", ""],
// ];

$(document).ready(function () {
  var datin = JSON.parse(localStorage.getItem("newStock"));
  console.log(datin);
  var table = $("#example").DataTable({
    data: datin,
    columns: [
      {
        // pagingType: 'full_numbers',
        orderable: false,
        className: "dt-control",
        paging: true,
      },


      { data: "stock", title: "Stock Name" },
      {
        data: "date",
        title: "ETA Date",
        orderable: false,
        class: "text-center",
      },
      {
        data: "stock_S",
        title: "Stock Location",
        orderable: false,
        class: "text-center",
      },
      {
        data: "user[0].Admin",
        title: "Created By",
        orderable: false,
        class: "text-center",
      },
      {
        data: "date",
        title: "Created Date",
        orderable: false,
        class: "text-center",
      },
      {
        data: "Part[0].Comments",
        title: "Notes",
        orderable: false,
        class: "text-center",
      },
      { data: "date", title: "Action", orderable: false, class: "text-center" },

      // { title: "In Warehouse" },
      // { title: "Available" },
      // { title: "C100" },
      // { title: "C101" },
      // { title: "C102" },
    ],
    order: [[1, "asc"]],
  });

  // Add event listener for opening and closing details
  $("#example tbody").on("click", "td.dt-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });
});

var parts = [];

function getM() {
  var partN = document.getElementById("pNum").value;
  var order = document.getElementById("order").value;
  var comments = document.getElementById("floatingTextarea").value;

  parts.push({
    PartN: partN,
    Order: order,
    Comments: comments,
  });
}

// add
function getData() {
  //login user
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  // parts
  var stockN = document.getElementById("stock").value;
  var dateM = document.getElementById("date").value;

  var r1 = document.getElementById("btnradio1").checked;
  var r2 = document.getElementById("btnradio1").checked;
  var r3 = document.getElementById("btnradio1").checked;

  var r1V = "";

  if (r1 == true) {
    r1V = "Production";
  } else if (r2 == true) {
    r1V = "On Water";
  } else if (r3 == true) {
    r1V = "In Warehouse";
  }

  var newStock;
  console.log(parts);

  // if (parts.length === 0) {
  //   console.log(" empty");
  // }
  if (stockN == "" && parts.length == 0) {
    Swal.fire({
      title: "Error!",
      text: "Add Stock Name",
      icon: "error",
      // confirmButtonText: 'Cool'
    });
  } else {
    if (localStorage.getItem("newStock") == null) {
      newStock = [];
      newStock.push({
        stock: stockN,
        date: dateM,
        stock_S: r1V,
        Part: parts,
        user: user,
      });
    } else {
      newStock = JSON.parse(localStorage.getItem("newStock"));
      newStock.push({
        stock: stockN,
        date: dateM,
        stock_S: r1V,
        Part: parts,
        user: user,
      });
    }

    localStorage.setItem("newStock", JSON.stringify(newStock));
    // $("#myMod").modal("toggle");
  }
  // resetSVal();
}

// loading the documnet to show data in table
document.onload = showMt2();


// show data
function showMt2() {
  var html = "";
  parts.forEach(function (element, index) {
    html += "<tr class=text-center  >";
    html += "<td>" + parts[index].PartN + "</td>";
    html += "<td>" + Date.now() + "</td>";
    html += "<td>" + parts[index].Order + "</td>";
    html +=
      "<td>" +
      parts[index].Comments +
      "  " +
      "<i class= 'fa-solid fa-x' onclick='deleteData( " +
      index +
      " )'></i></td>";

    html += "</tr>";

    document.getElementById("root").innerHTML = html;
  });
  resetSVal();
}

//reset
function resetSVal() {
  // document.getElementById("stock").value = "";
  document.getElementById("pNum").value = "";
  document.getElementById("order").value = "";
  document.getElementById("floatingTextarea").value = "";
}

// test
var r = JSON.parse(localStorage.getItem("newStock"));
console.log(r);

console.log(r[0].Part[0].PartN);
var v = r[0].Part[0].PartN;
console.log(v);

var user = JSON.parse(localStorage.getItem("user"));
console.log(user);
