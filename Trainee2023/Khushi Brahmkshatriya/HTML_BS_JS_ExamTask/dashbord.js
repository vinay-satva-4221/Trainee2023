var dataSet = [
    ["Stock Location", "", "", "On Water", "On Water", "In production"],
    ['Eta Date','','','10/08/2021','10/08/2021','10/08/2021'],
    ['BW-01-S-M','1','0','3','0','0'],['BW-03-XL-G','1','1','2','2','1'],
    ['BW-01-Q-M','','0','3','0','1']
  ];
  
$(document).ready(function(){
    $("#AddNavbar").load("./navbar.html");

    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        //window.location.replace("dashboard.html");
    }
    else{
        window.location.replace("./login.html");
    }
    $("#example").DataTable({
        data: dataSet,
        "dom": 'rtip',
        rowReorder: true,
        columnDefs: [
            { orderable: true, className: 'reorder', targets: 0 },
            { orderable: false, targets: '_all' }
        ],
       
        columns: [
          { title: "Part Number","sortable": true },
          { title: "In Warehouse" },
          { title: "Available" },
          { title: "C100" },
          { title: "C101" },
          { title: "C102" },
        ],
      });
      $('#example').removeClass('display');
})
