$(document).ready(function () {

  const checkuser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (checkuser == null) {
    location.replace("./login.html");
  }

  var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
  $("#activeuser").html(activeuser.username);

  var newassign = document.getElementById("newassign");

  $('#newassign').click(function () {
    $('#assignmodal').modal('show');
  });


  $('#example').DataTable({
    "paging": true,
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
    fnInitComplete: function () {
      $('div.toolbar').html('<h2>Assignment</h2>');
      $('#example_filter label').prepend(newassign);
    }
  });

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userSelect = document.getElementById("user-select");
  userData.forEach(user => {
    const option = document.createElement("option");
    option.value = user.username;
    option.textContent = user.username;
    userSelect.appendChild(option);
  });

    // Retrieve existing data from local storage
  var StockData = JSON.parse(localStorage.getItem("StockData")) || [];

  // Populate stock name dropdown
  var stockSelect = $('#stock-select');
  stockSelect.empty();
  stockSelect.append($('<option>', {value: '', text: 'Choose Stock Name'}));
  $.each(StockData, function(i, stock) {
    stockSelect.append($('<option>', {value: stock.stockName, text: stock.stockName}));
  });

  // Handle change event on stock name dropdown
  stockSelect.change(function() {
    var selectedStock = $(this).val();
    var partSelect = $('#part-select');
    partSelect.empty();
    partSelect.append($('<option>', {value: '', text: 'Choose Part Number'}));
    if (selectedStock) {
      var selectedStockData = StockData.find(function(stock) {
        return stock.stockName === selectedStock;
      });
      $.each(selectedStockData.partData, function(i, part) {
        partSelect.append($('<option>', {value: part.part_num, text: part.part_num}));
      });
      partSelect.prop('disabled', false);
    } else {
      partSelect.prop('disabled', true);
    }
  });


  $("#logout").click(function () {
    localStorage.removeItem("loggedInUser");
    location.replace("login.html");
  });
});
