
$(document).ready(function () {

  const hello = JSON.parse(localStorage.getItem("loggedInUser"));
        if (hello == null) {
            location.replace("./login.html");
        }


var DashboardData = [
['Stock Location', '', '', 'On Water', 'On Water', 'In Production'],
['ETA Date', '', '', '10/08/2021', '10/08/2021', '10/08/2021'],
['BW-01-S-M', '1', '0', '3', '0', '0'],
['BW-03-XL-G', '1', '1', '2', '2', '1'],
['BW-01-Q-M', '', '0', '3', '0', '1'],
['BW-03-XL-G', '1', '1', '2', '2', '1'],
['ZK-08-X2P', '1', '0', '3', '0', '1'],
['AP-03-XL-G', '1', '1', '2', '2', '1'],
['WB-05-M-G', '', '0', '3', '0', '1'],
['ZK-08-X2P', '1', '1', '2', '2', '1'],
['WB-05-M-G', '', '0', '3', '0', '1'],
['ZK-08-X2P', '1', '1', '2', '2', '1'],
['WB-05-M-G', '', '', '', '', ''],
];

// Add button to left of search bar



$('#example').DataTable({
  "data": DashboardData,
  "paging": true,
  "dom": '<"toolbar">frtip',
  "bFilter": true,
  "bInfo": true,
  "columnDefs": [
    { "orderable": true, "targets": 0 },
    { "orderable": false, "targets": "_all" }
  ],
  "fnInitComplete": function () {
    $('div.toolbar').html('<h2>Dashboard</h2>');
  }
});

var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
$("#activeuser").html(activeuser.username);

$("#logout").click(function () {
localStorage.removeItem("loggedInUser");
location.replace("login.html");
});
});

