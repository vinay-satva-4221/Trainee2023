$(document).ready(function () {

  if (localStorage.getItem('LogedinUser') !== null) {
    

     //Display name in Navbar
  var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
  $("#loginUseName").html(logedinUser[0].Name);
  $("#PrifleImage").attr("src", logedinUser[0].Picture);
    
  debugger
       
 
  //Table Data
  var data = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$3,120",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421",
    },
    {
      name: "Garrett Winters",
      position: "Director",
      salary: "$5,300",
      start_date: "2011/07/25",
      office: "Edinburgh",
      extn: "8422",
    },
  ];

  $("#table_div1").DataTable({
    data: data,
    columns: [
      { data: "name" },
      { data: "position" },
      { data: "salary" },
      { data: "office" },
    ],
  });

  


  //DateRange Picker
  $("#birthday").daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format("YYYY"), 10),
    },
    function (start, end, label) {
      var years = moment().diff(start, "years");
      alert("You are " + years + " years old!");
    }
  );
  //Logout
  $("#logout").click(function () {
    debugger;
    localStorage.removeItem("LogedinUser");
    window.location.replace("index.html");
  });
  $("#addStock").click(function () {
    debugger;
    $("#addStockModal").modal("show");
  });
  $("#closemodal").click(function () {
    debugger;
    $("#addStockModal").modal("hide");
  });


  //Dashboard

  var dataSet = [
    ['ZK-08-X2P', '1', '0', "<button class='popoverButton' data-toggle='popover'>1</button>", '0', '0'],
    ['BW-01-Q-M', '', '0', "<button class='popoverButton' data-toggle='popover'>2</button>", '0', '1'],
    ['BW-01-XL-G', '1', '1', "<button class='popoverButton' data-toggle='popover'>3</button>", '2', '1'],
    ['BW-01-S-M', '1', '0', "<button class='popoverButton' data-toggle='popover'>1</button>", '0', '0'],
  ];
    //PopOver
  $("#table_div").DataTable({
    data: dataSet,
    columns: [
        { title: 'PartNumber' },
        { title: 'In Warehouse' },
        { title: 'Available' },
        { title: 'C100' },
        { title: 'C101' },
        { title: 'C102' },
    ],
  });
  
  
  
  $('.sorting').removeClass('sorting')
  
  $('[data-toggle="popover"]').popover()


} else {
window.location.href="index.html"
}
 
});
