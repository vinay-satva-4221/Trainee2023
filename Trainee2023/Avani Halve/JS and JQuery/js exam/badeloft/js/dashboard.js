var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

function logout() {
   localStorage.removeItem("loginUser");
   location.replace("login.html");
}
// function format(d) {
//    // `d` is the original data object for the row
//    return (
//       '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//       "<tr>" +
//       "<td>Full name:</td>" +
//       "<td>" +
//       d.name +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>Extension number:</td>" +
//       "<td>" +
//       d.extn +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>Extra info:</td>" +
//       "<td>And any further details here (images etc)...</td>" +
//       "</tr>" +
//       "</table>"
//    );
// }

// var data = [
//    {
//       name: "John Doe",
//       position: "Software Engineer",
//       office: "New York",
//       salary: "$120,000",
//    },
//    {
//       name: "Jane Smith",
//       position: "Product Manager",
//       office: "San Francisco",
//       salary: "$150,000",
//    },
//    // Add more data objects here...
// ];

// $(document).ready(function () {
//    var table = $("#dashboardTable").DataTable({
      
//       columns: [
//          {
//             className: "dt-control",
//             orderable: false,
//             data: null,
//             defaultContent: "",
//          },
//          { data: "name" },
//          { data: "position" },
//          { data: "office" },
//          { data: "salary" },
//       ],
//       order: [[1, "asc"]],
//    });

//    // Add event listener for opening and closing details
//    $("#dashboardTable tbody").on("click", "td.dt-control", function () {
//       var tr = $(this).closest("tr");
//       var row = table.row(tr);

//       if (row.child.isShown()) {
//          // This row is already open - close it
//          row.child.hide();
//          tr.removeClass("shown");
//       } else {
//          // Open this row
//          row.child(format(row.data())).show();
//          tr.addClass("shown");
//       }
//    });

//    $('[data-toggle="popover"]').popover({
//       html: true,
//       content: function () {
//          return $("#popover-content").html();
//       },
//    });
// });
