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
      '<table  cellpadding="2" cellspacing="0" class="table border rounded">' +
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
      lengthChange: false,  
      info: false,
      columns: [
          {
              className: 'dt-control',
              orderable: false,
              data: null,
              defaultContent: '',
             
             
          },

          { title: 'QB Invoice#'},
          { title: 'Name',className: "text-center" },
          { title: 'QB Ship date' ,className: "text-center"},
          { title: 'QB Payment status',orderable:false ,className: "text-center",render: function(){return '<button class="alert alert-success status" role="alert"><i class="fa-solid fa-check"></i> &nbsp;Paid</button>'}},
          { title: 'QB Status' ,orderable:false, className: "text-center"},
          { title: 'QB Delivery Phone' ,orderable:false,className: "text-center"},
          { title: 'Called' ,orderable:false,render:function(){return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" class="form-check-input">'},className: "text-center" },
          { title: 'QB Tracking' ,orderable:false,className: "text-center"},



      ],
      

      select: {
        style:    'os',
        selector: 'td:first-child'
    },
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
  ["","150000", "Kenneth Woodard", "12/08/2021", "", "Shipped", "617-235-7647","","WBC-123"],
  ["","150001", "James Fenske", "10/08/2021", "", "Shipped", "618-234-6400","","WBC-123"],
  ["","150002", "Kelly McCrory", "08/08/2021", "", "Shipped", "630-367-8448","","WBC-123"],
  ["","150003", "Linda Englund", "05/08/2021", "", "Shipped", "203-963-9428","","WBC-123"]
];



function logout(){
  window.location.replace("Badeloft.html")
  localStorage.clear();
}