var dataSet = [
  ["Stock Location", "", "", "On Water", "On Water", "In production"],
  ["Eta Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
  ['BW-01-S-M', '1', '0', "<div class='AddColor'>3 </div>", '0', '0'],
  ['BW-03-XL-G', '1', '1', "<div class='AddColor'>2</div>", '2', '1'],
  ['BW-01-Q-M', '', '0', "<div class='AddColor'>3 </div>", '0', '1'],

];

$(document).ready(function () {
  $("#AddNavbar").load("./navbar.html");

  var loggedData = localStorage.getItem('LoggedInUser');
  if (loggedData) {
    //window.location.replace("dashboard.html");
  }
  else {
    window.location.replace("./login.html");
  }
  var StockLocation = $.fn.dataTable.absoluteOrder(
    [{ value: 'Stock Location', position: 'top' },
    { value: 'Eta Date', position: 'top' }]);
    
  var table = $("#dashboardTable").DataTable({
    data: dataSet,
    "order": [],
    "dom": 'rtip',
  
    language: {
      "info": "Items _START_ to _END_ of _TOTAL_ total",
      paginate: {
        next: '&#62',
        previous: '&#60'
      }
    },

    columnDefs: [
      { targets: 0, type: StockLocation },
      { orderable: true, targets: 0 },
      { orderable: false, targets: '_all' },
     
    ],
   
    columns: [
      { title: "Part Number" },
      { title: "In Warehouse",className:'text-center' },
      { title: "Available",className:'text-center' },
      { title: "C100",className:'text-center' },
      { title: "C101",className:'text-center' },
      { title: "C102",className:'text-center' },
    ],
  });
  $('#txtSearch').keyup(function () {
    table.search($(this).val()).draw(); 
      // this  is for customized searchbox with datatable search feature.
  })
  
})
