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

  })
  // Customers Dropdown
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userSelect = document.getElementById("user-select");
  userData.forEach(user => {
    const option = document.createElement("option");
    option.value = user.username;
    option.textContent = user.username;
    userSelect.appendChild(option);
  });
  // ---------------------------Cascading Dropdown--------------------------------------------------------------------
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
  });
  // ----------------------------------------------------------------------------------------------------------
  var stockassign = [];
  function checkInvoiceExists(invoice) {
    var stockassignment = JSON.parse(localStorage.getItem("stockassigned"));
    if (stockassignment != null){ 
      for (var i = 0; i < stockassignment.length; i++) {
        if (stockassignment[i].invoice == invoice) {
          return true;
        }
      }
      return false;
    }
  }
  $("#addassign").click(function () {
    var customer = $("#user-select").val();
    var invoice = $("#invoice_num").val();
    var stock_name = $("#stock-select").val();
    var part_name = $("#part-select").val();
   part_name = part_name.toString().replaceAll(",", " | ");
    // Check if invoice number already exists
    if (checkInvoiceExists(invoice)) {
      alert("Invoice number already exists!");
      return;
    }
    // Create object with properties and add to array
    var obj = {
      customer: customer,
      invoice: invoice,
      stock_part: [stock_name, part_name],
      created_by: activeuser.username,
      created_date: new Date().toLocaleDateString()
    };
    stockassign.push(obj);
    // Append row to table with index
    var index = stockassign.length;
    $("#AssignmentInnerTable").append("<tr><td class='text-center'>" + index + "</td><td class='text-center'>"
      + stock_name + "</td><td class='text-center'>"
      + part_name + "</td><td class='text-center'><button type='button' class='btn btn-sm btn-danger delete-row class='text-center''>Delete</button></td></tr>");
    // Delete Function
    $(document).on("click", ".delete-row", function () {
      var index = $(this).closest("tr").index();
      stockassign.splice(index - 1, 1);
      $(this).closest("tr").remove();
      // Update table indices
      $("#AssignmentInnerTable tr:gt(0)").each(function (i) {
        $(this).find("td:first").text(i + 1);
      });
    });
  });
  
  $("#save").click(function () {
    // Get existing data from localStorage
    var stockassigned = JSON.parse(localStorage.getItem("stockassigned")) || [];
    // Add data from AssignmentInnerTable to the stockassigned array
    var stock_parts = [];
    $('#AssignmentInnerTable tbody tr').each(function (row, tr) {
      var stock_name = $(tr).find("td:eq(1)").text();
      var part_name = $(tr).find("td:eq(2)").text();
      // Check if stock_name already exists in the stock_parts array
      var existing_stock = stock_parts.find(function (item) {
        return item.stock_name === stock_name;
      });
      if (existing_stock) {
        // Add part_name to the existing stock
        existing_stock.part_names.push(part_name);
      } else {
        // Create a new stock object and add it to the stock_parts array
        var new_stock = {
          stock_name: stock_name,
          part_names: [part_name]
        };
        stock_parts.push(new_stock);
      }
    });
    var customer = $("#user-select").val();
    var invoice = $("#invoice_num").val();
    var created_by = activeuser.username;
    var created_date = new Date().toLocaleDateString();
    var obj = {
      customer: customer,
      invoice: invoice,
      stock_parts: stock_parts,
      created_by: created_by,
      created_date: created_date
    };
    // Check if invoice number already exists
    if (checkInvoiceExists(invoice)) {
      alert("Invoice number already exists!");
      return;
    }
    stockassigned.push(obj);
    // Save the updated array back to localStorage
    localStorage.setItem("stockassigned", JSON.stringify(stockassigned));
    // Hide the modal
    $('#assignmodal').modal('hide');
  }); 
  var stockassignment = JSON.parse(localStorage.getItem("stockassigned"));
  var table =  $('#example').DataTable({
    data: stockassignment,
    columns: [
      { data: 'invoice', className: 'text-start dt-control' },
      { data: 'customer' },
      { data: 'created_by' },
      { data: 'created_date' },
      {
        data: null,
        render: function (data, type, row) {
          return '<button type="button" class="btn btn-sm edit"><i class="fa fa-pencil"></i></button>';
        }
      }
    ],
    "paging": true,
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
    fnInitComplete: function () {
      $('div.toolbar').html('<h2>Assignment</h2>');
      $('#example_filter label').prepend(newassign);
    }
  });
  function format(d) {
    let childRowHTML = '';
    childRowHTML += '<table class="text-center" id="childtable" style="width:100%;">';
    childRowHTML += '<thead  style="background-color: aquamarine;"><tr><th class="text-center">#</th><th class="text-center">Stock</th><th class="text-center">Parts</th><th class="text-center">Action</th></tr></thead>';
    childRowHTML += '<tbody>';
    // Loop through the array of stock parts and add a single row to the table for each stock part
    for (let i = 0; i < d.stock_parts.length; i++) {
      const stock = d.stock_parts[i];
      // Loop through the part_names array of each stock and add a row for each part
      for (let j = 0; j < stock.part_names.length; j++) {
        childRowHTML += '<tr><td>' + (i + 1) + '</td><td>' + stock.stock_name + '</td><td>' + stock.part_names[j] + '</td><td> <button type="button" class="btn-close cancelpart" aria-label="Close"></button></td></tr>';
      }
    }
    childRowHTML += '</tbody>';
    childRowHTML += '</table>';
    return childRowHTML;
  }
  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.dt-control', function () {
    debugger
    var tr = $(this).closest('tr');
    var row = table.row(tr);
    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });

  // Edit Function
$(document).on("click", ".edit", function () {

  var rowData = table.row($(this).parents('tr')).data();
  var index = table.row($(this).parents('tr')).index();
  // Populate data in modal
  $("#user-select").val(rowData.customer);
  $("#invoice_num").val(rowData.invoice);
  $('#invoice_num').prop('disabled', true);
  $('#user-select').prop('disabled', true);
  $("#AssignmentInnerTable").empty();

  
  $.each(rowData.stock_parts, function (index, value) {
    var stock_name = value.stock_name;
    var part_name = value.part_names.join(" | ");
    $("#AssignmentInnerTable").append("<tr><td class='text-center'>" + (index + 1) + "</td><td class='text-center'>"
      + stock_name + "</td><td class='text-center'>"
      + part_name + "</td><td class='text-center'><button type='button' class='btn btn-sm btn-danger delete-row class='text-center''>Delete</button></td></tr>");
  });
 
  
  // Show the modal
  $('#assignmodal').modal('show');
  // Add an event listener to the save button in the modal to save the edited data

  // $("#addassign").off("click").on("click", function (){
  //   var stockassigned = JSON.parse(localStorage.getItem("stockassigned")) || [];
    


  // })




  $("#save").off("click").on("click", function () {
    // Get existing data from localStorage
    var stockassigned = JSON.parse(localStorage.getItem("stockassigned")) || [];
    // Find the index of the row to be edited
   
    // Create object with properties and replace at the specified index
    var obj = {
      customer: $("#user-select").val(),
      invoice: $("#invoice_num").val(),
      stock_parts: stock_parts,
      created_by: activeuser.username,
      created_date: new Date().toLocaleDateString()
    };
    stockassigned[index] = obj;
    // Save the updated array back to localStorage
    localStorage.setItem("stockassigned", JSON.stringify(stockassigned));
    // Hide the modal
    $('#assignmodal').modal('hide');
    // Reload the table
    table.clear().rows.add(stockassigned).draw();
  });

});

 // Delete Function
 $(document).on("click", ".delete-row", function () {
  var partindex = $(this).closest("tr").index();
  stock_parts.splice(partindex, 1);
  $(this).closest("tr").remove();
});


});


