function format(d) {
  // `d` is the original data object for the row
  return (
      '<table class="table table-responsive" id="statusChildData">' +
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
      '<td><i class="bi bi-x"></i></td>' +
      '</tr>' +
      '<tr>' +
      '<td scope="row">2</td>' +
      '<td>Jacob</td>' +
      '<td>Thornton</td>' +
      '<td><i class="bi bi-x"></i></td>' +
      '</tr>' +
      '<tr>' +
      '<td scope="row">3</td>' +
      '<td >Larry the Bird</td>' +
      '<td>Thornton</td>' +
      '<td><i class="bi bi-x"></i></td>' +
      '</tr>' +
      '</tbody>' +
      '</table>'
  );
}

var dataSet = [
  // {
  //   QB  : "150000",
  //   Name : 'Keneth Woodard',
  //   QB_Ship_date : '12/08/2021',
  // }
  ["150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-primary px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-123"],
  ["150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox>", "WBC-123"],
  ["150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-123"],
  ["150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-danger px-1 p-0 m-0'><i class='bi bi-x'>Unpaid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox>", "WBC-123"],
  ["150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-123"],

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

  var table = $("#example").DataTable({
    data: dataSet,

    "bLengthChange": false,
    "bFilter": true,
    "dom": 'rtip',
    "bAutoWidth": false,
    language: {
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
      { title: "Name" },
      { title: "QB Ship date" },
      { title: "QB Payment Status", orderable: false, },
      { title: "QB Status", orderable: false, },
      { title: "QB Delivery Phone", orderable: false, },
      { title: "Called", orderable: false },
      { title: "QB Tracking", orderable: false, },


    ],
    
    order: [[1, "asc"]],

  });
  $('#myCustomSearchBox').keyup(function () {
    table.search($(this).val()).draw();   // this  is for customized searchbox with datatable search feature.
  })

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