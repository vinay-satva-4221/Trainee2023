function format(d) {
  // `d` is the original data object for the row
  return (
    '<div class="px-3"><div class="table-responsive border rounded"><table class="table rounded p-0 m-0 w-100 h-100" id="statusChildData">' +
    '<thead>' +
    '<tr>' +
    '<th >#</th>' +
    '<th>Part Number</th>' +
    '<th scope="col">Stock Location</th>' +
    '<th scope="col">Action</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' +
    '<td >1</td>' +
    '<td>WB-01-S-M</td>' +
    '<td>warehouse</td>' +
    '<td><button type="button" class="btn-close" aria-label="Close"></button></td>' +
    '</tr>' +
    '<tr>' +
    '<td scope="row">2</td>' +
    '<td>Jacob</td>' +
    '<td>Thornton</td>' +
    '<td><button type="button" class="btn-close" aria-label="Close"></button></td>' +
    '</tr>' +
    '<tr>' +
    '<td scope="row">3</td>' +
    '<td >Larry the Bird</td>' +
    '<td>Thornton</td>' +
    '<td><button type="button" class="btn-close" aria-label="Close"></button></td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' + '</div>' + '</div>'
  );
}

var dataSet = [
  // {
  //   QB  : "150000",
  //   Name : 'Keneth Woodard',
  //   QB_Ship_date : '12/08/2021',
  // }
  ["150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-primary px-1 p-0 m-0'><i class='bi bi-check'></i>Paid</button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-128"],
  ["150001", "James Fenske", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'></i>Paid</button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-123"],
  ["150002", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'></i>Paid</button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-129"],
  ["150003", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-danger px-1 p-0 m-0'><i class='bi bi-x'></i>Unpaid</button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-122"],
  ["150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'></i>Pendding Approval</button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],

];

$(document).ready(function () {
  $("#AddNavbar").load("./navbar.html");

  var loggedData = localStorage.getItem('LoggedInUser');
  if (loggedData) {
    //window.location.replace("dashboard.html");
  }
  else {
    window.location.replace("./login.html");
  }

  var table = $("#statusTable").DataTable({
    data: dataSet,

    "bLengthChange": false,
    "bFilter": true,
    "dom": 'rtip',
    "bAutoWidth": false,
    language: {
      "info": "Items _START_ to _END_ of _TOTAL_ total",
      paginate: {
        next: '&#62',
        previous: '&#60'
      }
    },
    

    columns: [
      {
        className: "dt-control",

        title: "QB Invoice#",

      },
      { title: "Name", },
      { title: "QB Ship date", },
      { title: "QB Payment Status", orderable: false, },
      { title: "QB Status", orderable: false, },
      { title: "QB Delivery Phone", orderable: false, },
      { title: "Called", orderable: false, className: 'text-center' },
      { title: "QB Tracking", orderable: false, },


    ],

    order: [[1, "asc"]],

  });
  $('#txtSearch').keyup(function () {
    table.search($(this).val()).draw();   // this  is for customized searchbox with datatable search feature.
  })

  // Add event listener for opening and closing details
  $("#statusTable tbody").on("click", "td", function () {
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