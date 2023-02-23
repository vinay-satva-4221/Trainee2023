//Window Onload

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

//Logout function
  
  function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }
  
  
// Data table Dashboard

$(document).ready(function () {
  var table = $('#Dashboard').DataTable({
      data:dataSet,
      lengthChange: false,  
      info: false,
      columns: [
          // {
          //     orderable: false,
          //     data: null,
          //     defaultContent: '',
              


          // },

          { title: 'Part Number' },
          { title: 'In Warehouse' ,orderable:false},
          { title: 'Available' ,orderable:false },
          { title: 'C100',orderable:false },
          { title: 'C101' ,orderable:false},
          { title: 'C102',orderable:false },

      ],
  });

  // Add event listener for opening and closing details
  $('#Dashboard tbody').on('click', 'td.dt-control', function () {
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
  ["Stock Location","", "", "On Water", "On Water", "In Production"],
  ["ETA Date","", "", "10/08/2021", "10/08/2021", "10/08/2021"],
  ["BW-01-S-M","1", "0", "3", "0", "0"],
  ["BW-03-XL-G","1", "1", "2", "2", "1"],
  ["BW-01-Q-M","", "0", "3", "0", "1"],
  ["BW-03-XL-G","1", "1", "2", "2", "1"],
  ["ZK-08-X2P","1", "0", "3", "0", "1"],
  ["BW-03-XL-G","1", "1", "2", "2", "1"],
  
  
  
  
];