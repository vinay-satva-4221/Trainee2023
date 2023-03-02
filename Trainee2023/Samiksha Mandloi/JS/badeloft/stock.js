var loginUser = JSON.parse(localStorage.getItem('loginuser'));
var username = loginUser.name;
document.getElementById("user").innerHTML = "Welcome" + "<br>" + "<b>" + username + "</b>";
// document.getElementById("user").innerHTML = username;


var stockname = document.getElementById("location").value;
var eta = document.getElementById("etadate").value;
var partno = document.getElementById("npart_no").value;
var order = document.getElementById("nporder_no").value;
var notes = document.getElementById("nnotes_no").value;

function logout() {
  localStorage.removeItem("loginuser");
  location.replace("badeloft.html");
}


function format(d) {

  let childRowHTML = '';
  if (d.itemDetails && d.itemDetails.length > 0) {
    childRowHTML += '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    childRowHTML += '<thead><tr><th>Part No</th><th>Order No</th><th>Notes</th></tr></thead>';
    childRowHTML += '<tbody>';
    d.itemDetails.forEach((itemDetail) => {
      childRowHTML += '<tr><td>' + itemDetail.partno + '</td><td>' + itemDetail.order + '</td><td>' + itemDetail.notes + '</td></tr>';
    });
    childRowHTML += '</tbody></table>';
  }
  return childRowHTML;
}

var stockDetails = JSON.parse(localStorage.getItem('stockDetail'));


var table = $("#example").DataTable({
  data: stockDetails,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: null,
      defaultContent: "",
    },


    { data: "stockName" },
    { data: "etaDate" },
    { data: "status" },
    { data: "createdBy" },
    { data: "createdDate" },
    { data: "notes" },
    {
      data: null,
      render: function (data, type, row) {
        return '<button type="button" class="fa fa-pencil" onclick="editRow()" style="border: none;"></button>' +
          '<button type="button" class="fa fa-history" style="border: none;"></button>';
      }
    }
  ],
  language: {
    "info": "Items _START_ to _END_ of _TOTAL_ total",
    paginate: {
      next: '&#62',
      previous: '&#60'
    },
    search: "_INPUT_",
    searchPlaceholder: 'Search here...'
  },
  "fnInitComplete": function () {
    $('div.dataTables_length').html('<h2>Stock</h2>');

  },
  order: [[1, "asc"]],
});

// Add event listener for opening and closing details
$("#example tbody").on("click", "td.dt-control", function () {
  var tr = $(this).closest("tr");
  var row = table.row(tr);

  if (row.child.isShown()) {
    // This row is already open - close it
    row.child.hide();
    tr.removeClass("shown");
  } else {
    // Open this row
    row.child(format(row.data())).show();
    tr.addClass("shown");
  }
});
// var table2 = $("#example").DataTable();

$("#search").on("keyup", function () {
  table.search(this.value).draw();
});

// $('.date').datepicker({  
//   format: 'mm-dd-yyyy'  
// });  



function addStock() {
  debugger
  let stockName = document.getElementById("stock_name").value;
  let eta = document.getElementById("etadate").value;
  let status = document.querySelector('input[name="status"]:checked').value;

  let stockDetails = {
    stockName: stockName,
    etaDate: eta,
    status: status,
    createdBy: username,
    createdDate: eta,
    notes: "Hello EveryOne",
    Action: "",
    itemDetails: stockItemDetails
  };


  var stockDetailsArray = JSON.parse(localStorage.getItem('stockDetail'));
  if (!stockDetailsArray) {
    stockDetailsArray = [];
  }
  stockDetailsArray.push(stockDetails);
  localStorage.setItem('stockDetail', JSON.stringify(stockDetailsArray));


  table.row.add(stockDetails).draw();
  document.getElementById("stock_name").value = "";
  document.getElementById("etadate").value = "";
  stockItemDetails = [];
}
var stockItemDetails = [];

function addItemDetails() {
  // debugger;
  let partNo = document.getElementById("npart_no").value;
  let order = document.getElementById("nporder_no").value;
  let notes = document.getElementById("nnotes_no").value;
  let invoice = 15001;

  let stockDetail11 = {
    partno: partNo,
    order: order,
    notes: notes
  };

  stockItemDetails.push(stockDetail11);

  let dtr = "<tr>";
  dtr = dtr + "<td class='txtpartno' data-id= " + stockDetail11.partno + " >" + stockDetail11.partno + "</td>";
  dtr = dtr + "<td class='txtinvoice' >" + (invoice++) + "</td>";
  dtr = dtr + "<td class='txtorder' >" + stockDetail11.order + "</td>";
  dtr = dtr + "<td class='txtnotes' >" + stockDetail11.notes + "</td>";
  dtr = dtr + "<td class='tdAction'><button type='button' class='btn btn-sm btn-delete'>&#x2715;</button></td>";
  dtr = dtr + "</tr>";
  $("#parttable tbody").append(dtr);
  // invoice++;
}
$("#parttable tbody").on("click", ".btn-delete", function () {
  $(this).closest("tr").remove();
});

function editRow(rowData) {
  debugger;
  // Populate the form fields with the selected row data
  document.getElementById("stock_name").value = rowData.stockName;
  document.getElementById("etadate").value = rowData.etaDate;
  // ...

  // Add an event listener for the save button click
  document.getElementById("savestock").addEventListener("click", function () {
    // Update the selected row data
    rowData.stockName = document.getElementById("stock_name").value;
    rowData.etaDate = document.getElementById("etadate").value;
    // ...

    // Get the stock details array from localStorage and update the selected row data
    var stockDetailsArray = JSON.parse(localStorage.getItem('stockDetail'));
    for (var i = 0; i < stockDetailsArray.length; i++) {
      if (stockDetailsArray[i].stockName === rowData.stockName) {
        stockDetailsArray[i] = rowData;
        break;
      }
    }
    localStorage.setItem('stockDetail', JSON.stringify(stockDetailsArray));

    // Redraw the DataTables table with the updated data
    table.clear().rows.add(stockDetailsArray).draw();

    // Close the modal
    $("#myModal").modal("hide");
  });
}