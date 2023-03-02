$(document).ready(function () {
  // adding navbar
  $("#navbarDynamic").load("navbar.html");

  // Addding name of user
  var user = JSON.parse(localStorage.getItem("user"));
  var jName = user[0].Admin;
  console.log(jName);
  $(".dynamicN").html(jName);

  // Dynamic adding image
  var jImg = user[0].Image;
  console.log(jImg);
  $(".adminImg").attr("src", user[0].Image);
});

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    //change
    window.location.replace("./Login.html");
  }
};

//Logout
function logout() {
  localStorage.removeItem("user");
  window.location.replace("Login.html");
}

// Table Populating
var dataSet = [
  ["Stock Location", "", "", "On Water", "On Water", "In production"],
  ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
  ["BW-01-S-M", "1", "0", "<button class='dataColor border-0 bg-light' data-bs-toggle='popover' id='popover'>3</button>", "0", "0"],
  [
    "BW-03-XL-G",
    "1",
    "1",
    // '<button type="button" class="" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">2</button>',
    '<div class= "dataColor ">3 </div>',
    "2",
    "1",
  ],
  // ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"], ["BW-01-Q-M", "", "0", '<div class= "dataColor">3 </div>', "0", "1"],
];


$(document).ready(function () {

  var StockLocation = $.fn.dataTable.absoluteOrder(
    [{value: 'Stock Location', position: 'top' },
    {value: 'Eta Date', position: 'top' }]
  );

  $("#dashboard_table").DataTable({
    data: dataSet,

    " bLengthChange": false,
    "bFilter": true,
    " bAutoWidth": false,

    order: [],
    dom: "rtip",
    language: {
      info: "Items _START_ to _END_ of _TOTAL_ total",
      paginate: {
        next: "&#62",
        previous: "&#60",
      },
    },

    columnDefs: [
      { orderable: true, targets: 0 },
      { orderable: false, targets: "_all" },
      { targets: 0, type: StockLocation },
    ],

    columns: [
      { title: "Part Number" },
      { title: "In Warehouse", class: "text-center" },
      { title: "Available", class: "text-center" },
      { title: "C100", class: "text-center" },
      { title: "C101", class: "text-center" },
      { title: "C102", class: "text-center" },
    ],
  });

 
  var table = $("#dashboard_table").DataTable();

  // #myInput is a <input type="text"> element
  $("#dashboard_search").on("keyup", function () {
    table.search(this.value).draw();
  });


  //pop over
  $('[data-bs-toggle="popover"]').popover({
    container: "body",
    placement: "right",
    html: true,
    content: function () {
      return $("#Popover").html();
    },
  });
});

