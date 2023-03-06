window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Login.html");
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
      '<td><i class="fa-solid fa-xmark delete"></i></td>' +
      '</tr>' +
      '<td>2</td>' +
      '<td>AT-01-BLK</td>' +
      '<td>C-101</td>' +
      '<td><i class="fa-solid fa-xmark delete"></i></td>' +
      '</tr>' +
      '<td>3</td>' +
      '<td>BW-03-XL-G</td>' +
      '<td>E-501</td>' +
      '<td><i class="fa-solid fa-xmark delete"></i></td>' +
      '</tr>' +

      '</table>'
  );


}

$(document).ready(function () {
  var table = $('#status').DataTable({
      data:dataSet,
      lengthChange: false, 
      ordering:true, 
      info: true,
      dom: '<"toolbar">frtip',
    fnInitComplete: function () {
      $('div.toolbar').html('<b><h3>&nbsp;Status</h3></b>');
        },  
    
        language: {
          info: "Items _START_ to _END_ of _TOTAL_ total",
          paginate:{
            previous:"<",
            next:">",
          },
          search: "",

          searchPlaceholder: "Search here..."
        },  
      columns: [
          {
              className: 'dt-control',
              orderable: false,
              data: null,
              defaultContent: '',
              width: "1%",
             
             
          },

          { title: 'QB Invoice#', width:"12%",render:function(data,type,row){
            if(type=='display'){
                return '<span style="color: #1188FF;">' + data + '</span>';
            }
            else {
                return data;
            }
        } },
          { title: 'Name',width:"15%" },
          { title: 'QB Ship date',width:"12%"},
          { title: 'QB Payment status' ,orderable:false,width:"17%"},
          { title: 'QB Status' ,orderable:false, className: "text-center",width:"9%"},
          { title: 'QB Delivery Phone' ,orderable:false,className: "text-center",width:"17%"},
          { title: 'Called' ,orderable:false,width:"5%",render:function(){return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" class="form-check-input">'},className: "text-center" },
          { title: 'QB Tracking' ,orderable:false,width:"25%",className: "text-center"},



      ],
      

      select: {
        style:    'os',
        selector: 'td:first-child'
    },
      order: [[3, 'asc']],


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
  ["","150000", "Kenneth Woodard", "12/08/2021", '<span class="alert alert-primary px-2 p-1" style="background-color:#2871CC opacity:25%; border-color:rgb(219, 241, 223); color:#2871CC"><i class="fa fa-check"></i>Paid</span>', "Shipped", "617-235-7647","","WBC-123"],
  ["","150001", "James Fenske", "10/08/2021", '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(219, 241, 223); border-color:rgb(219, 241, 223); color:green"><i class="fa fa-check"></i>Paid</span>', "Shipped", "618-234-6400","","WBC-123"],
  ["","150002", "Kelly McCrory", "08/08/2021", '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(219, 241, 223); border-color:rgb(219, 241, 223); color:green"><i class="fa fa-check"></i>Paid</span>', "Shipped", "630-367-8448","","WBC-123"],
  ["","150003", "Linda Englund", "05/08/2021", '<span class="alert alert-warning px-2 p-1" style="background-color:#F19100 opacity:25%; border-color:rgb(219, 241, 223); color:#F19100"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;Pending Approval</span>', "Shipped", "203-963-9428","","WBC-123"],
  ["","150004", "Frances Badger", "03/08/2021", '<span class="alert alert-danger px-2 p-1" style="background-color:#DD4B39 opacity:25%; border-color:rgb(219, 241, 223); color:#DD4B39"><i class="fa-solid fa-xmark"></i>&nbsp;Unpaid</span>', "Shipped", "203-963-9428","","WBC-123"],
  ["","150005", "James Fenske", "10/08/2021", '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(219, 241, 223); border-color:rgb(219, 241, 223); color:green"><i class="fa fa-check"></i>Paid</span>', "Shipped", "618-234-6400","","WBC-123"],
  ["","150006", "Kelly McCrory", "08/08/2021", '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(219, 241, 223); border-color:rgb(219, 241, 223); color:green"><i class="fa fa-check"></i>Paid</span>', "Shipped", "630-367-8448","","WBC-123"]
];



function logout(){
  window.location.replace("Login.html")
  localStorage.clear();
}


