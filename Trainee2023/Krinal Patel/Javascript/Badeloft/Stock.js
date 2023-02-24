window.onload = (event) => {debugger;
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
  function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }
// Data table stock
/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return (
        '<table cellpadding="2" cellspacing="0" class="table border rounded"' +
        '<tr>' +
        '<th>#</th>' +
        '<th>Part Number</th>' +
        '<th>Ordered</th>' +
        '<th>Assigned</th>' +
        '<th>Action</th>'+
        '</tr>' +
        '<td>1</td>' +
        '<td>BW-01-S-M</td>' +
        '<td>5</td>' +
        '<td>5</td>' +
        '<td>Close</td>' +
      
        '</table>'
    );
  }
  
  $(document).ready(function () {
    var table = $('#stock').DataTable({
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
  
            { title: 'Stock Name' ,orderable:false,className: "text-center"},
            { title: 'ETA Date' ,orderable:false,className: "text-center"},
            { title: 'Stock Location',orderable:false,className: "text-center" },
            { title: 'Created By' ,orderable:false,className: "text-center"},
            { title: 'Created Date' ,orderable:false,className: "text-center"},
            { title: 'Notes',orderable:false,className: "text-center" },
            { title: 'Action' ,orderable:false,className: "text-center"}  
  
        ],
        order: [[1, 'asc']],
    });
  
    // Add event listener for opening and closing details
    $('#stock tbody').on('click', 'td.dt-control', function () {
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
    ["","C100", "12/08/2021", "Warehouse", "Kenneth Woodard", "12/08/2021", "Lorem lpsum is simply dummy text",""],
   
  ];
 