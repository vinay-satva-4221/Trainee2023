var dataSet = [
    ["Stock Location", "", "", "On Water", "On Water", "In production"],
    ['Eta Date','','','10/08/2021','10/08/2021','10/08/2021'],
    ['BW-01-S-M','1','0','3','0','0'],
    ['BW-03-XL-G','1','1','2','2','1'],
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
        "order": [],
        "dom": 'rtip',
       
        columnDefs: [
            { orderable: true, targets: 0 },
            { orderable: false, targets: '_all' }
        ],
       
        columns: [
          { title: "Part Number"},
          { title: "In Warehouse" },
          { title: "Available" },
          { title: "C100" },
          { title: "C101" },
          { title: "C102" },
        ],
        rowCallback: function(row, data, index){
          if (data[3] < 10) {
            $(row).find('td:eq(3)').css('color', 'blue');
          }
          
        }
        
      });
      $('#example').removeClass('display');
})
