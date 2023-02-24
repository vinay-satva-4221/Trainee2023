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

//Logout
function logout() {
  window.location.replace("Login.html");
  localStorage.clear("user");
}

function format(d) {
  // `d` is the original data object for the row
  return (
    '<table class="table border" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>Full name:</td>" +
    "<td>" +
    d.Name +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extension number:</td>" +
    "<td>" +
    d.extn +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extra info:</td>" +
    "<td>And any further details here (images etc)...</td>" +
    "</tr>" +
    "</table>"



  );
}
var dataSet = [

  ["150000", "Keneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647", "chk", "WBC-123", "-"],
  ["150000", "Keneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647", "chk", "WBC-123", "-"],
  ["150000", "Keneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647", "chk", "WBC-123", "-"],
  ["150000", "Keneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647", "chk", "WBC-123", "-"],
  ["150000", "Keneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647", "chk", "WBC-123", "-"],

];

$(document).ready(function () {
  var table = $("#example").DataTable({
    data: dataSet,
    dom: "rtip",
    columns: [
      {
        className: "dt-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      { title: "QB Invoice#" },
      { title: "Name" },
      { title: "QB Ship date" },
      { title: "QB Payment Status" },
      { title: "QB Status" },
      { title: "QB Delivery Phone" },
      { title: "Called" },
      { title: "QB Tracking" },


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




  $(function () {
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
      var years = moment().diff(start, 'years');
      // alert("You are " + years + " years old!");
    });
  });



  $('#stable').DataTable({

    dom: "rtip",
    columns: [
      {
        className: "dt-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      { title: "Part Number" },
      { title: "Invoice#" },
      { title: "Odered" },
      { title: "Notes" },



    ],
    order: [[1, "asc"]],
  });
});


// second modal number validation
// document.querySelector(".numV").addEventListener("keypress", function (evt) {
//   if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
//   {
//       evt.preventDefault();
//   }
// });

// var t = document.querySelector(".numV").value

var parts =[];

function getM(){
  var partN = document.getElementById("pNum").value
  var order = document.getElementById("order").value
  var comments = document.getElementById("floatingTextarea").value



  parts.push({
    PartN :partN,
    Order :order,
    Comments :comments
  })
}

function getData() {
  // parts




  var stockN = document.getElementById("stock").value
  var dateM = document.getElementById("date").value

  var r1 = document.getElementById('btnradio1').checked
  var r2 = document.getElementById('btnradio1').checked
  var r3 = document.getElementById('btnradio1').checked



  var r1V = '';

  if (r1 == true) {
    r1V = "Production"
  }
  else if (r2 == true) {
    r1V = "Production"
  }
  else if (r3 == true) {
    r1V = "Production"
  }

  var newStock;

  if (localStorage.getItem("newStock") == null) {
    newStock = [];
  } else {
    newStock = JSON.parse(localStorage.getItem("newStock"));
    newStock.push({
      stock: stockN,
      date: dateM,
      stock_S: r1V,
      Part:parts
    })
  }


  localStorage.setItem("newStock", JSON.stringify(newStock));
}

