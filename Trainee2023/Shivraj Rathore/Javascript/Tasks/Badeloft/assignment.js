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

  var stockassigned = [];

  $("#addassign").click(function () {
    var customer = $("#user-select").val();
    var invoice = $("#invoice_num").val();
    var stock_name = $("#stock-select").val();
    var part_name = $("#part-select").val();

    part_name = part_name.toString().replaceAll(","," | ");

    // Create object with properties and add to array
    var obj = {
      customer: customer,
      invoice: invoice,
      stock_name: stock_name,
      part_name: part_name
    };
    stockassigned.push(obj);

    
  
    // Append row to table with index
    var index = stockassigned.length;
    $("#AssignmentInnerTable").append("<tr><td class='text-center'>" + index + "</td><td class='text-center'>"
      + stock_name + "</td><td class='text-center'>"
       + part_name
        + "</td><td class='text-center'><button type='button' class='btn btn-sm btn-danger delete-row class='text-center'' >Delete</button></td></tr>");
  
    // Delete Function
    $(document).on("click", ".delete-row", function () {
      var index = $(this).closest("tr").index();
      stockassigned.splice(index - 1, 1);
      $(this).closest("tr").remove();

      
  
      // Update table indices
      $("#AssignmentInnerTable tr:gt(0)").each(function (i) {
        $(this).find("td:first").text(i + 1);
      });
    });
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
  stockSelect.append($('<option>', { value: '', text: 'Choose Stock Name' }));
  $.each(StockData, function (i, stock) {
    stockSelect.append($('<option>', { value: stock.stockName, text: stock.stockName }));
  });

  $('.js-example-basic-multiple').select2();

  // Handle change event on stock name dropdown
  stockSelect.change(function () {
    var selectedStock = $(this).val();
    var partSelect = $('#part-select');
    partSelect.empty();
    partSelect.append($('<option>', { value: '', text: 'Choose Part Number' }));
    if (selectedStock) {
      var selectedStockData = StockData.find(function (stock) {
        return stock.stockName === selectedStock;
      });
      $.each(selectedStockData.partData, function (i, part) {
        partSelect.append($('<option>', { value: part.part_num, text: part.part_num }));
      });
      partSelect.prop('disabled', false);
    } else {
      partSelect.prop('disabled', true);
    }




    // Add selected data to an array and store it in local storage
    // var selectedData = JSON.parse(localStorage.getItem("selectedData")) || [];
    // var selectedCustomer = userSelect.value;
    // var selectedParts = Array.from(partSelect.selectedOptions).map(option => option.value);
    // if (selectedStock && selectedCustomer && selectedParts.length > 0) {
    //   selectedData.push({
    //     stockName: selectedStock,
    //     customer: selectedCustomer,
    //     parts: selectedParts
    //   });
    //   localStorage.setItem("selectedData", JSON.stringify(selectedData));
    // }
  });


  $("#logout").click(function () {
    localStorage.removeItem("loggedInUser");
    location.replace("login.html");
  });
});
