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

      orderable:true,
      data:dataSet,
      lengthChange: false,  
      binfo: true,
      bFilter:true,
 
    columnDefs: [
      { targets: 0, type: StockLocation },
      { orderable: true, targets: 0 },
      { orderable: false, targets: "_all" },
      // { targets: [1, 2], className: "text-right" },
    ],
      dom: '<"toolbar">frtip',
      fnInitComplete: function () {
        $('div.toolbar').html('<b><h3>&nbsp;Stock</h3></b>');},

        language: {
          info: "Items _START_ to _END_ of _TOTAL_ total",
          paginate:{
            previous:"<",
            next:">",
          },

          search: "_INPUT_",
          searchPlaceholder: "Search here..."

        },
        // pagingType: "full_numbers",
        // dataTables_paginate paging_simple_numbers
      columns: [
       
          { title: 'Part Number', width: '40%'},
          { title: 'In Warehouse' ,orderable:false,className: "dt-center" },
          { title: 'Available' ,orderable:false ,className:"text-center"},
          { title: 'C100',orderable:false,className: "text-center"},
          { title: 'C101' ,orderable:false,className: "text-center"},
          { title: 'C102',orderable:false,className: "text-center" },

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
  $('[data-bs-toggle="popover"]').popover({

    container: 'body',
    placement: 'right',
    html: true, 
    content: function() {
          return $('#popover-form').html();
    }
  });
});
var dataSet = [
  ["Stock Location","", "", "On Water", "On Water", "In Production"],
  ["ETA Date","", "", "10/08/2021", "10/08/2021", "10/08/2021"],
  ["BW-01-S-M","1", "0", "<button class='text-primary  border-0 bg-light' data-bs-toggle='popover' id='popover'>3</button>", "0", "0"],
  ["BW-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BW-01-Q-M","", "0", "3", "<button class='text-primary border-0 bg-light'>2</button>", "1"],
  ["BW-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BR-08-X2P","1", "0", "<button class='text-primary border-0 bg-light'>2</button>", "0", "1"],
  ["BK-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BA-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BB-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BC-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BD-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BE-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BF-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BF-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BZ-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BK-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BL-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  ["BM-03-XL-G","1", "1", "<button class='text-primary border-0 bg-light'>2</button>", "2", "1"],
  

  
];

var StockLocation = $.fn.dataTable.absoluteOrder( 
  [{ value: 'Stock Location', position: 'top' },
  { value: 'ETA Date', position: 'top' } ]);
   