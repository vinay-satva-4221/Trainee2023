$(document).ready(function () {
    
  //Display name in Navbar
  var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
  $("#loginUseName").html(logedinUser[0].Name);
  $("#PrifleImage").attr("src", logedinUser[0].Picture);
  
  //Table Data
  var data=[
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    }
]

  $('#table_div').DataTable( {
    data: data,
    columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'office' }
    ]
} );
  //DateRange Picker
  $('#birthday').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    var years = moment().diff(start, 'years');
    alert("You are " + years + " years old!");
  });
  //Logout
  $("#logout").click(function () {
    debugger;
    localStorage.clear("LogedinUser");
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
});
