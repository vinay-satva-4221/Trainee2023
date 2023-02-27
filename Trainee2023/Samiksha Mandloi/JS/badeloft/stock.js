var loginUser = JSON.parse(localStorage.getItem('loginuser'));
var username = loginUser.name;
document.getElementById("user").innerHTML = username;


var stockname = document.getElementById("stock_name").value;
var eta = document.getElementById("eta_date").value;
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
    childRowHTML += '<thead><tr><th>#</th><th>Part No</th><th>Order No</th><th>Notes</th></tr></thead>';
    childRowHTML += '<tbody>';
    d.itemDetails.forEach((itemDetail) => {
      childRowHTML += '<tr><td>' + itemDetail.partno + '</td><td>' + itemDetail.order + '</td><td>' + itemDetail.notes + '</td></tr>';
    });
    childRowHTML += '</tbody></table>';
  }
  return childRowHTML;
}
// get data from localStorage
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
    { data: null,
      render: function (data, type, row) {
          // Return HTML for two buttons
          return '<button class="btn btn-primary btn-sm">Edit<i class="fa-sharp fa-solid fa-pen"></i></button>' +
              '<button class="btn btn-danger btn-sm">Delete</button>'; }
      }
  ],
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

// Function to add stock to localStorage and DataTable
function addStock() {
  debugger
  let stockName = document.getElementById("stock_name").value;
  let eta = document.getElementById("eta_date").value;
  let status = document.querySelector('input[name="stock_status"]:checked').value;

  let stockDetails = {
    stockName: stockName,
    etaDate: eta,
    status: status,
    createdBy: username,
    createdDate: eta,
    notes: "Hello EveryOne",
    Action:  "",
    itemDetails: stockItemDetails
  };

  
  var stockDetailsArray = JSON.parse(localStorage.getItem('stockDetail'));
  if(!stockDetailsArray){
     stockDetailsArray = [];
  }
  stockDetailsArray.push(stockDetails);
  localStorage.setItem('stockDetail', JSON.stringify(stockDetailsArray));

  // Add new row to DataTable
  table.row.add(stockDetails).draw(); 
  document.getElementById("stock_name").value = "";
  document.getElementById("eta_date").value = "";
  stockItemDetails = [];
}
var stockItemDetails = [];

function addItemDetails() {
  // debugger;
  let partNo = document.getElementById("npart_no").value;
  let order = document.getElementById("nporder_no").value;
  let notes = document.getElementById("nnotes_no").value;
  let invoice  = 15001;

  let stockDetail11 = {
    partno: partNo,
    order: order,
    notes: notes
  };

  stockItemDetails.push(stockDetail11);

  let dtr = "<tr>";
  dtr = dtr + "<td class='txtpartno' data-id= " + stockDetail11.partno + " >" + stockDetail11.partno + "</td>";
  dtr = dtr + "<td class='txtinvoice' >" + (invoice++) +  "</td>";
  dtr = dtr + "<td class='txtorder' >" + stockDetail11.order +  "</td>";
  dtr = dtr + "<td class='txtnotes' >" + stockDetail11.notes +  "</td>";
  dtr = dtr + "<td class='tdAction'><button type='button' class'=btn btn-sm btn-dark btn-delete'>&#x2715;</button></td>";
  dtr = dtr + "</tr>";
  $("#parttable tbody").append(dtr);
  // invoice++;
}
$("#parttable tbody").on("click", ".btn-delete", function () {
  $(this).closest("tr").remove(); 
});
