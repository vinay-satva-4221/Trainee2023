var dataSet = [
  ["<div class='sorting_disabled'>Stock Location</div>", "<div class='sorting_disabled'></div>", "<div class='sorting_disabled'></div>", "<div class='sorting_disabled'>On Water</div>", "<div class='sorting_disabled'>On Water</div>", "<div class='sorting_disabled'>In production</div>"],
  ["<div class=sorting_disabled'>Eta Date</div>", "<div class='sorting_disabled'></div>", "<div class='sorting_disabled'></div>", "<div class='sorting_disabled'>10/08/2021</div>", "<div class='sorting_disabled'>10/08/2021</div>", "<div class='sorting_disabled'>10/08/2021</div>"],
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
  var table = $("#example").DataTable({
    data: dataSet,
    "order": [],
    "dom": 'rtip',
    language: {
      paginate: {
        next: '&#62',
        previous: '&#60'
      }
    },

    columnDefs: [
      { orderable: true, targets: 0 },
      { orderable: false, targets: '_all' },

    ],
    aocolumnDefs: [{
      bSortable: false,
      aTargets: ["sorting_disabled"]
    }],
    columns: [
      { title: "Part Number" },
      { title: "In Warehouse" },
      { title: "Available" },
      { title: "C100" },
      { title: "C101" },
      { title: "C102" },
    ],
  });
  $('#myCustomSearchBox').keyup(function () {
    table.search($(this).val()).draw();   // this  is for customized searchbox with datatable search feature.
  })

})
