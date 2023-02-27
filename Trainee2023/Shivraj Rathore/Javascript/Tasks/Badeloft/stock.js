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
  var myButton = document.getElementById("myButton");

  // Showing Modals
  $('#myButton').click(function () {
    $('#myModal').modal('show');
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
  var savedData = [];

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
    $("#table2body").append("<tr><td>" + part_num + "</td><td>" + invoice_num + "</td><td>" + ordered + "</td><td>" + notes + "</td><td><button type='button' class='btn btn-sm btn-danger delete-row'>Delete</button></td></tr>");
    // Hide AddPartModal
    $("#AddPartModal").modal("hide");

    // Log the updated array
    console.log(partdata);
  });

  $("#save_changes").click(function () {
    // Get form data
    var stockName = $("#StockName").val();
    var etaDate = $("#ETAdate").val();
    var selectedValue = $('input[name="btnradio"]:checked').val();
    var createdby = "Kenneth";
    var createddate = "10/08/2000";
    var action = "Delete";

    // Create object to store data
    var savedObject = {
      stockName: stockName,
      etaDate: etaDate,
      selectedValue: selectedValue,
      partData: partdata,
      createdby: createdby,
      createddate: createddate,
      action: action
    };

    // Retrieve existing data from local storage
    var savedData = JSON.parse(localStorage.getItem("savedData")) || [];

    // Append new data to existing array
    savedData.push(savedObject);

    // Store updated array in local storage
    localStorage.setItem("savedData", JSON.stringify(savedData));

    $('#myModal').modal('hide');

    location.reload(true);
  });

  var stockData = JSON.parse(localStorage.getItem("savedData"));



  function format(d) {
      function removeItem(index) {
    // Remove the item at the specified index from the array
    d.partData.splice(index, 1);
    // Refresh the table to show the updated data
    refreshTable();
  }

    let childRowHTML = '';
    if (d.partData && d.partData.length > 0) {
      childRowHTML += '<table class="text-center" style="width:100%;">';
      childRowHTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Part No</th><th class="text-center">Order No</th><th class="text-center">Notes</th><th class="text-center">Action</th></tr></thead>';
      childRowHTML += '<tbody>';
      d.partData.forEach((partData, index) => {
        const rowNumber = index + 1;
        childRowHTML += '<tr><td>' + rowNumber + '</td><td>' + partData.part_num + '</td><td>' + partData.ordered + '</td><td>' + partData.notes + '</td><td><button onclick="removeItem(' + index + ')"><i class="fa fa-close"></i></button></td></tr>';
      });
      childRowHTML += '</tbody>';
      childRowHTML += '</table>';
    }

    return childRowHTML;

  

  }

  var table = $('#example').DataTable({
    "paging": true,
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
    fnInitComplete: function () {
      $('div.toolbar').html('<h2>Stock</h2>');
      $('#example_filter label').prepend(myButton);
    },

    data: stockData,
    columns: [
      {
        className: 'dt-control',
        orderable: false,
        data: null,
        defaultContent: '',
      },
      { data: 'stockName' },
      { data: 'etaDate' },
      { data: 'selectedValue' },
      { data: 'createdby' },
      { data: 'createddate' },
      { data: 'action' },
    ],
    order: [[1, 'asc']],
  });

  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.dt-control', function () {
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

  // Handle click on Delete button
  $("#table2body").on("click", ".delete-row", function () {
    $(this).closest("tr").remove();
  });

  $("#logout").click(function () {
    localStorage.removeItem("loggedInUser");
    location.replace("login.html");
  });

});

