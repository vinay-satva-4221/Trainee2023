function format(d) {
    // `d` is the original data object for the row
    return (
      '<table class="table border" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      "<tr>" +
      "<td>Full name:</td>" +
      "<td>" +
      d.Name +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Extension number:</td>" +
      "<td>" +
      d.extn +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Extra info:</td>" +
      "<td>And any further details here (images etc)...</td>" +
      "</tr>" +
      "</table>"
  
  
    
    );
  }
  var dataSet = [
    // {
    //   QB  : "150000",
    //   Name : 'Keneth Woodard',
    //   QB_Ship_date : '12/08/2021',
    // }
    ["150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","","WBC-123"],
    ["150001","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","","WBC-123"],
    ["150002","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","","WBC-123"],
    ["150003","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","","WBC-123"],
    ["150004","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","","WBC-123"],
    
  ];
  
  $(document).ready(function () {
    $("#AddNavbar").load("./navbar.html");

    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        //window.location.replace("dashboard.html");
    }
    else{
        window.location.replace("./login.html");
    }

    var table = $("#example").DataTable({
      data: dataSet,
      
      "bLengthChange": false,
      "bFilter": true,
      
      "bAutoWidth": false,
      columnDefs: [
        {

          targets: 6,
          
          render: function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' 
               + $('<div/>').text(data).html() + '">';
        }
        }
     ],
      columns: [
        {
          className: "dt-control", 
          
          title:"QB Invoice#",

        },
        { title: "Name"},
        { title: "QB Ship date" },
        { title: "QB Payment Status",orderable: false, },
        { title: "QB Status",orderable: false, },
        { title: "QB Delivery Phone",orderable: false, },
        { title: "Called",orderable: false},
        { title: "QB Tracking",orderable: false, }, 
    
  
      ],
      select: {
        style: 'multi',
       
    },
      order: [[1, "asc"]],
      
    });
    $('#example tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
         var el = $('#example-select-all').get(0);
         // If "Select all" control is checked and has 'indeterminate' property
         if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control 
            // as 'indeterminate'
            el.indeterminate = true;
         }
      }
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
   
  });