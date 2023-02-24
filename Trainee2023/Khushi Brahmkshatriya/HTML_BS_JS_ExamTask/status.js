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
    [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
    [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
    [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
    [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
    [ "150000","Keneth Woodard", "12/08/2021","Paid","Shipped", "617-235-7647","chk","WBC-123","-"],
    
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
      columns: [
        {
          className: "dt-control",
          orderable: false,
          data: null,
          defaultContent: "",
        },
        { title: "QB Invoice#" },
        { title: "Name" },
        { title: "QB Ship date" },
        { title: "QB Payment Status",orderable: false, },
        { title: "QB Status",orderable: false, },
        { title: "QB Delivery Phone",orderable: false, },
        { title: "Called",orderable: false, },
        { title: "QB Tracking",orderable: false, },
    
  
      ],
      order: [[1, "asc"]],
      
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