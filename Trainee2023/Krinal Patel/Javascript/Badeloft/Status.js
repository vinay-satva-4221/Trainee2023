window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Badeloft.html");
    }
    else{
      var par = JSON.parse(localStorage.getItem('LoginDetails'));
      var u = par[0].username;
      var uname = document.getElementById("username");
      uname.innerHTML = u;
    }
};

// Data table status
/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return (
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      '<tr>' +
      '<th>#</th>' +
      '<th>Part Number</th>' +
      '<th>Stock Location</th>' +
      '<th>Action</th>' +
      '</tr>' +
      '<td>1</td>' +
      '<td>BW-01-S-M</td>' +
      '<td>Warehouse</td>' +
      '<td>Close</td>' +
      '</tr>' +
      '<td>2</td>' +
      '<td>AT-01-BLK</td>' +
      '<td>C-101</td>' +
      '<td>Close</td>' +
      '</tr>' +
      '<td>3</td>' +
      '<td>BW-03-XL-G</td>' +
      '<td>E-501</td>' +
      '<td>Close</td>' +
      '</tr>' +

      '</table>'
  );
}

$(document).ready(function () {
  var table = $('#status').DataTable({
      data:dataSet,
      
      columns: [
          {
              className: 'dt-control',
              orderable: false,
              data: null,
              defaultContent: '',
          },

          { title: 'QB Invoice#' },
          { title: 'Name' },
          { title: 'QB Ship date' },
          { title: 'QB Payment status' },
          { title: 'QB Status' },
          { title: 'QB Delivery Phone' },
          { title: 'Called' },
          { title: 'QB Tracking' },


      ],
      order: [[1, 'asc']],
  });

  // Add event listener for opening and closing details
  $('#status tbody').on('click', 'td.dt-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row(tr);

      if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      } else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
      }
  });
});
var dataSet = [
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"],
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"],
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"],
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"]
];