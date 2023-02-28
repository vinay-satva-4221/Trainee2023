var loginUser = JSON.parse(localStorage.getItem('loginUser'));
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
      [
         "",
         "<span style='color: #0086e5'>150000</span>",
         "Kenneth",
         "12/08/2021",
         '<span class="alert alert-primary" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>',
         "Shipped",
         "617-235-7627",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >',
         "WBC-123",
      ],
      [
         "",
         "<span style='color: #0086e5'>150001</span>",
         "James Fenske",
         "10/08/2021",
         '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>',
         "Shipped",
         "618-234-6400",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >',
         "WBC-124",
      ],
      [
         "",
         "<span style='color: #0086e5'>150002</span>",
         "Kelly McCrory",
         "08/08/2021",
         '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>',
         "STD",
         "630-367-8448",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >',
         "",
      ],
      [
         "",
         "<span style='color: #0086e5'>150003</span>",
         "Alex John",
         "05/08/2021",
         '<span class="alert alert-danger" style="padding:5px;"><i class=" fa fa-times" aria-hidden="true""></i>UnPaid</span>',
         "Shipped",
         "203-963-9428",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >',
         "WBC-125",
      ],
      [
         "",
         "<span style='color: #0086e5'>150004</span>",
         "Johnson Zender",
         "03/08/2021",
         '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>',
         "STD",
         "508-206-0722",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >',
         "",
      ],
      [
         "",
         "<span style='color: #0086e5'>150005</span>",
         "Aisha Lii",
         "02/08/2021",
         '<span class="alert alert-warning" style="padding:5px;"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>Pending Approval</span>',
         "Shipped",
         "201-905-4664",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked">',
         "WBC-127",
      ],
      [
         "",
         "<span style='color: #0086e5'>150006</span>",
         "Samantha Southard",
         "01/08/2021",
         '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>',
         "Shipped",
         "707-271-9421",
         '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked">',
         "WBC-128",
      ],
   ];

   var table = $("#statusTable").DataTable({
      data: data,
      dom: '<"toolbar">frtip',
      "bLengthChange": false,
      "bInfo" : false,
      columns: [
         {
            className: "dt-control",
            orderable: false,
            data: null,
            defaultContent: "",
         },
         { title: "QB_Invoice" },
         { title: "Name"},
         { title: "QB Ship date"},
         { title: "QB Payment Status", orderable: false, className: "TextCenter" },
         { title: "QB Status", orderable: false, className: "TextCenter" },
         { title: "QB Delivery Phone", orderable: false, className: "TextCenter" },
         { title: "Called", orderable: false, className: "TextCenter" },
         { title: "QB_InvTrackingoice", orderable: false, className: "TextCenter" },
      ],
      fnInitComplete: function () {
         $("div.toolbar").html("<h2>Status</h2>");
      },
      order: [[1, "asc"]],
      language: {
         search: "_INPUT_",
         searchPlaceholder: "Search here...",
         paginate:{
            previous:"<",
            next:">"
         },
      },

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
});
