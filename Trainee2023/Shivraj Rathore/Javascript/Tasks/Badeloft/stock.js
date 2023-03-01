$(document).ready(function () {

  // checking user
  const checkuser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (checkuser == null) {
    location.replace("./login.html");
  }

  //setting username 
  var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
  $("#activeuser").html(activeuser.username);

  // New Button
  var AddNewStock = document.getElementById("AddNewStock");
  // Showing Modals

  $('#AddNewStock').click(function () {
    $('#AddStockModal').modal('show');
  });

  $('#AddPart').click(function () {
    $('#AddPartModal').modal('show');
  });

  // Initialize variables
  var part_num = "";
  var invoice_num = "";
  var ordered = "";
  var notes = "";

  // Initialize array to hold saved data
  var StockData = [];
  // Handle click on Add Part Number button
  $("#AddPart").click(function () {
    // Clear previous form data
    $("#part_num").val("");
    $("#ordered").val("");
    $("#notes").val("");
    // Show AddPartModal
    $("#AddPartModal").modal("show");
  });
  var partdata = [];
  // Handle click on Save Part Number button
  $("#save_part").click(function () {
    // Get form data
    part_num = $("#part_num").val();
    invoice_num = 123456;
    ordered = $("#ordered").val();
    notes = $("#notes").val();
    var obj = {
      part_num: part_num,
      ordered: ordered,
      notes: notes
    };
    // Push object into array
    partdata.push(obj);
    // Append data to table
    $("#table2body").append("<tr><td>" + part_num + "</td><td>" 
    + invoice_num + "</td><td>" + ordered + "</td><td>" 
    + notes  + "</td><td><button type='button' class='btn btn-sm btn-danger delete-row'>Delete</button></td></tr>");
    // Hide AddPartModal
    $("#AddPartModal").modal("hide");
  });

  // Modify the save_changes event listener to set the action based on button click
  $("#save_changes").click(function () {
    // Get form data
    var stockName = $("#StockName").val();
    var etaDate = $("#ETAdate").val();
    var selectedValue = $('input[name="btnradio"]:checked').val();
    var createdby = "Kenneth";
    var createddate = "10/08/2000";
    var action = "";

    // Create object to store data
    var StockDataObject = {
      stockName: stockName,
      etaDate: etaDate,
      selectedValue: selectedValue,
      partData: partdata,
      createdby: createdby,
      createddate: createddate,
      action: action
    };

    // Retrieve existing data from local storage
    var StockData = JSON.parse(localStorage.getItem("StockData")) || [];

    // Append new data to existing array
    StockData.push(StockDataObject);

    // Store updated array in local storage
    localStorage.setItem("StockData", JSON.stringify(StockData));
    $('#AddStockModal').modal('hide');
    location.reload(true);
  })

  var stockData = JSON.parse(localStorage.getItem("StockData"));

  function format(d) {
    function removeItem(index) {
      // Remove the item at the specified index from the array
      d.partData.splice(index, 1);
      // Refresh the table to show the updated data
      refreshTable();
    }
    let childRowHTML = '';
    if (d.partData && d.partData.length > 0) {
      childRowHTML += '<table class="text-center" id="childtable" style="width:100%;">';
      childRowHTML += '<thead  style="background-color: aquamarine;"><tr><th class="text-center">#</th><th class="text-center">Part No</th><th class="text-center">Order No</th><th class="text-center">Notes</th><th class="text-center">Action</th></tr></thead>';
      childRowHTML += '<tbody>';
      d.partData.forEach((partData, index) => {
        const rowNumber = index + 1;
        debugger
        childRowHTML += '<tr><td>' + rowNumber + '</td><td>' + partData.part_num + '</td><td>' + partData.ordered + '</td><td>' 
        + partData.notes+ '</td><td> <button type="button" class="btn-close" aria-label="Close"></button></td></tr>';
      });
      childRowHTML += '</tbody>';
      childRowHTML += '</table>';
    }
    return childRowHTML;
  }
  
  // Define the DataTable
  var table = $('#Stockable').DataTable({
    "paging": true,
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
    fnInitComplete: function () {
      $('div.toolbar').html('<h2>Stock</h2>');
      $('#Stockable_filter').prepend(AddNewStock);
    },
   language: {
    search: "_INPUT_",
        searchPlaceholder: 'Search...',
        paginate: {
          next: '&#62',
          previous: '&#60' 
        }
  },
    data: stockData,
    columns: [
      {
        className: 'dt-control',
        orderable: false,
        data: null,
        defaultContent: '',
      },
      { data: 'stockName', className: 'text-center', orderable: false },
      { data: 'etaDate', className: 'text-center', orderable: false },
      { data: 'selectedValue', className: 'text-center', orderable: false },
      { data: 'createdby', className: 'text-center', orderable: false },
      { data: 'createddate', className: 'text-center', orderable: false },
      {
        data: null,
        render: function (data, type, row) {
          return (
            '<button type="button" class="btn btn-sm edit"><i class="fa fa-pencil"></i></button>'
          );
        },
      },
    ],
    order: [],
  });

  $('#Stockable tbody').on('click', '.edit', function () {
    var data = table.row($(this).parents('tr')).data();
    var index = table.row($(this).parents('tr')).index();
    
    // Populate AddStockModal with data
    $("#StockName").val(data.stockName);
    $("#ETAdate").val(data.etaDate);
    $('input[name="btnradio"][value="' + data.selectedValue + '"]').prop('checked', true);
    // Populate part table with data


    if (data.partData && data.partData.length > 0) {
      data.partData.forEach(function(partData) {
        $("#table2body").append("<tr><td>" + partData.part_num + "</td><td>" 
        + partData.invoice_num + "</td><td>" + partData.ordered + "</td><td>" 
        + partData.notes  + "</td><td><button type='button' class='btn btn-sm btn-danger delete-row'>Delete</button></td></tr>");
      });
    }

    partdata=data.partData;
    // Show AddStockModal
    $('#AddStockModal').modal('show');

    // Handle click on Save Changes button
    $("#save_changes").unbind('click').click(function () {
      // Get form data
      var stockName = $("#StockName").val();
      var etaDate = $("#ETAdate").val();
      var selectedValue = $('input[name="btnradio"]:checked').val();
      var createdby = "Kenneth";
      var createddate = "08/25/2000";
      var action = "";
      // Update object at the specified index in the array
      var StockDataObject = {
        stockName: stockName,
        etaDate: etaDate,
        selectedValue: selectedValue,
        partData: partdata,
        createdby: createdby,
        createddate: createddate,
        action: action
      };
      var StockData = JSON.parse(localStorage.getItem("StockData")) || [];
      StockData[index] = StockDataObject;
      localStorage.setItem("StockData", JSON.stringify(StockData));
      $('#AddStockModal').modal('hide');
      location.reload(true);
    });
  });


  
  // Add event listener for opening and closing details
  $('#Stockable tbody').on('click', 'td.dt-control', function () {
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
  // Part table Each Row Delete Button
  $("#table2body").on("click", ".delete-row", function () {
    $(this).closest("tr").remove();
  });


  $("#logout").click(function () {
    localStorage.removeItem("loggedInUser");
    location.replace("login.html");
  });
});

