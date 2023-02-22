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


    // '<table class="table border"  style="padding-left:50px;">'+
    // "<tr>" +
    // "<th>#</th>"+
    // "<th>#</th>"+
    // "<th>#</th>"+
    // "<tr>"
  );
}
var dataSet = [
  // {
  //   QB  : "150000",
  //   Name : 'Keneth Woodard',
  //   QB_Ship_date : '12/08/2021',
  // }
  [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
  [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
  [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
  [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
  [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
  
];

$(document).ready(function () {
  var table = $("#example").DataTable({
    data: dataSet,
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
});
