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

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    window.location.replace("Login.html");
  }
};

//Logout
function logout() {
  localStorage.removeItem("user");
  window.location.replace("Login.html");
}

function format(d) {
  // `d` is the original data object for the row
  return (
    '<table class="table table-border border" >' +
    "<thead>" +
    "<tr >" +
    "<th style='color: black' >#</th>" +
    " <th style='color: black'>Part Number</th>" +
    '<th scope="col" style="color: black">Stock Location</th>' +
    '<th scope="col"style="color: black">Action</th>' +
    "</tr>" +
    "</thead>" +
    '<tbody class="table-group-divider">' +
    "<tr>" +
    "<td >1</td>" +
    "<td>WB-01-S-M</td>" +
    "<td>warehouse</td>" +
    '<td><i class="bi bi-x"></i></td>' +
    "</tr>" +
    "<tr>" +
    '<td scope="row">2</td>' +
    "<td>Jacob</td>" +
    "<td>Thornton</td>" +
    '<td><i class="bi bi-x"></i></td>' +
    "</tr>" +
    "<tr>" +
    '<td scope="row">3</td>' +
    "<td >Larry the Bird</td>" +
    "<td>Thornton</td>" +
    '<td><i class="bi bi-x"></i></td>' +
    "</tr>" +
    "</tbody>" +
    "</table>"
  );
}

datasets = [
  [
    "150000",
    "Kenneth",
    "12/08/2021",
    '<span class="alert alert-primary"><i class="bi bi-check"></i>Paid</span>',
    "Shipped",
    "617-235-7627",
    "<input type=checkbox checked>",
    "WBC-123",
  ],
  [
    "150001",
    "James",
    "10/08/2021",
    '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>',
    "Shipped",
    "617-235-7627",
    '<input type=checkbox checked>',
    "WBC-124",
  ],
  [
    "150002",
    "Kenneth",
    "12/08/2021",
    '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>',
    "Shipped",
    "617-235-7627",
    '<input type=checkbox checked>',
    "",
  ],
  [
    "150003",
    "Kenneth",
    "12/08/2021",
    '<span class="alert alert-danger"><i class="bi bi-x"></i>unPaid</span>',
    "STD",
    "617-235-7627",
    '<input type=checkbox checked>',
    "WBC-123",
  ],
  [
    "150004",
    "Kenneth",
    "12/08/2021",
    '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>',
    "Shipped",
    "617-235-7627",
    '<input type=checkbox checked>',
    "WBC-125",
  ],
  [
    "150005",
    "Kenneth",
    "12/08/2021",
    '<span class="alert alert-warning text-center"><i class="bi bi-exclamation-circle"></i>Pending Approval</span>',
    "STD",
    "617-235-7627",
    '<input type=checkbox checked>',
    "",
  ],
  [
    "150006",
    "Kenneth",
    "12/08/2021",
    '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>',
    "Shipped",
    "201-905-4664",
    '<input type=checkbox checked>',
    "WBC-126",
  ],
];

// Global variable
var table;

$(document).ready(function () {
 table = $("#status_tab").DataTable({
    data: datasets,
    dom: "rtip",
    language: {
        info: "Items _START_ to _END_ of _TOTAL_ total",
        paginate: {
          next: "&#62",
          previous: "&#60",
        },
      },
    columns: [
      {
        className: "dt-control",
        title: "QB Invoice &nbsp #",
      },

      { title: "Name", },
      { title: "QB Ship date",  },
      { title: "QB Payment Status", },
      { title: "QB status", orderable: false },
      { title: "QB Delivery Phone", orderable: false },
      { title: "Called", orderable: false },
      { title: "QB Tracking", orderable: false },
    ],
    order: [[1, "asc"]],
  });

  // Add event listener for opening and closing details
  $("#status_tab tbody").on("click", "td.dt-control", function () {
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


// for search bar
$("#status_search").on("keyup", function () {
    table.search(this.value).draw();
  });
  

  //active
  var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
   
    $('.nav-item a').each(function(){
        if ($(this).attr('href') == pathname){
        $(this).addClass('active');
        }
    });