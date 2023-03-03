var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

function logout() {
   localStorage.removeItem("loginUser");
   location.replace("login.html");
}

$(document).ready(function () {
   function format(d) {
      return (
         '<table class="table">' +
         "<thead>" +
         "<tr>" +
         "<th >#</th>" +
         " <th>Part Number</th>" +
         "<th>Stock Location</th>" +
         "<th >Action</th>" +
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
         "<td >2</td>" +
         "<td>Jacob</td>" +
         "<td>Thornton</td>" +
         '<td><i class="bi bi-x"></i></td>' +
         "</tr>" +
         "<tr>" +
         "<td >3</td>" +
         "<td >Larry the Bird</td>" +
         "<td>Thornton</td>" +
         '<td><i class="bi bi-x"></i></td>' +
         "</tr>" +
         "</tbody>" +
         "</table>"
      );
   }

   var data = [
      {
         qb_invoice: "150000",
         name: "Kenneth Woodward",
         qb_shipdate: "09/08/2001",
         qb_pay_status: '<button class="btn-sm alert alert-primary p-1" id="changeAlert" style=""><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "Shipped",
         qb_delievery_phone: "asasxc",
         called: '<input type="checkbox" style="text-align: center;"></input>',
         qb_tracking: "WBC-123",
      },
      {
         qb_invoice: "150001",
         name: "James Fenske",
         qb_shipdate: "09/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-success p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "Shipped",
         qb_delievery_phone: "618-234-6400",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-124",
      },
      {
         qb_invoice: "150002",
         name: "Kelly McCrory",
         qb_shipdate: "02/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-success p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "STD",
         qb_delievery_phone: "630-367-8448",
         called: '<input type="checkbox"></input>',
         qb_tracking: "",
      },
      {
         qb_invoice: "150003",
         name: "Linda Englund",
         qb_shipdate: "03/08/2001",
         qb_pay_status: '<button class="btn-sm alert alert-danger p-1"><i class="fa fa-close"></i>&nbsp;Unpaid</button>',
         status: "Shipped",
         qb_delievery_phone: "203-963-9428",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-125",
      },
      {
         qb_invoice: "150004",
         name: "Frances Badger",
         qb_shipdate: "04/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-success p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "STD",
         qb_delievery_phone: "508-206-0722",
         called: '<input type="checkbox"></input>',
         qb_tracking: "",
      },
      {
         qb_invoice: "150005",
         name: "Tasha Tapia",
         qb_shipdate: "05/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-warning p-1"><i class="fa fa-exclamation-circle"></i>&nbsp;Pending Approval</button>',
         status: "Shipped",
         qb_delievery_phone: "201-905-4664",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-127",
      },
      {
         qb_invoice: "150006",
         name: "Samantha Southard",
         qb_shipdate: "06/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-success p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "Shipped",
         qb_delievery_phone: "707-271-9412",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-128",
      },
      {
         qb_invoice: "150007",
         name: "James Fenske",
         qb_shipdate: "07/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-success p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "Shipped",
         qb_delievery_phone: "618-234-6400",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-124",
      },
      {
         qb_invoice: "150008",
         name: "Kelly McCrory",
         qb_shipdate: "08/08/2001",
         qb_pay_status: '<button class="btn-sm alert alert-success p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "STD",
         qb_delievery_phone: "630-367-8448",
         called: '<input type="checkbox"></input>',
         qb_tracking: "",
      },
      {
         qb_invoice: "150009",
         name: "Linda Englund",
         qb_shipdate: "09/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-danger p-1"><i class="fa fa-close"></i>&nbsp;Unpaid</button>',
         status: "Shipped",
         qb_delievery_phone: "203-963-9428",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-125",
      },
      {
         qb_invoice: "150010",
         name: "Frances Badger",
         qb_shipdate: "10/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-primary p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "Shipped",
         qb_delievery_phone: "508-206-0722",
         called: '<input type="checkbox"></input>',
         qb_tracking: "",
      },
      {
         qb_invoice: "150011",
         name: "Tasha Tapia",
         qb_shipdate: "11/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-warning p-1"><i class="fa fa-exclamation-circle"></i>&nbsp;Pending Approval</button>',
         status: "STD",
         qb_delievery_phone: "201-905-4664",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-127",
      },
      {
         qb_invoice: "150012",
         name: "Samantha Southard",
         qb_shipdate: "12/08/2001",
         qb_pay_status: '<button  class="btn-sm alert alert-primary p-1"><i class="fa fa-check"></i>&nbsp;Paid</button>',
         status: "Shipped",
         qb_delievery_phone: "707-271-9412",
         called: '<input type="checkbox"></input>',
         qb_tracking: "WBC-128",
      },
   ];

   var table = $("#example").DataTable({
      paging: true,
      dom: '<"toolbar">frtip',
      bFilter: false,
      bInfo: true,
      fnInitComplete: function () {
         $("div.toolbar").html("<h2></h2>");
      },
      language: {
        "info": "Items _START_ to _END_ of _TOTAL_ entries",
         search: "_INPUT_",
         searchPlaceholder: "Search here...",
         paginate: {
            previous: "<",
            next: ">",
         },
      },
      data: data,
      columns: [
         {
            className: "dt-control",
            orderable: false,
            data: null,
            defaultContent: "",
         },
         { data: "qb_invoice", orderable: true },
         { data: "name", orderable: true },
         { data: "qb_shipdate", orderable: true },
         { data: "qb_pay_status", orderable: true },
         { data: "status", orderable: true },
         { data: "qb_delievery_phone", orderable: true },
         { data: "called", orderable: true },
         { data: "qb_tracking", orderable: true },
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

   //click anywhere in the row
   var table = $('#example').DataTable();

   $('#example tbody').on('click', 'tr', function() {
     var data = table.row(this).data();
     if (table.row(this).child.isShown()) {
       table.row(this).child.hide();
       var alertElement = $('#changeAlert');
       alertElement.removeClass('alert-success');
       alertElement.addClass('alert-primary');
     } else {
       table.row(this).child(format()).show();
       var alertElement = $('#changeAlert');
       alertElement.removeClass('alert-primary');
       alertElement.addClass('alert-success');
     }
   });
});

// Add event listener for opening and closing details
$("#statusTable tbody").on("click", "td.dt-control", function () {
   var tr = $(this).closest("tr");
   var row = table.row(tr);
   if (row.child.isShown()) {
      row.child.hide();
      tr.removeClass("shown");
   } else {
      row.child(format(row.data())).show();
      tr.addClass("shown");
   }
});

  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#example tbody tr").filter(function () {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
 });
