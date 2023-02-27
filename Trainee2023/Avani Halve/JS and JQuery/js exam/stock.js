var loginUser = JSON.parse(localStorage.getItem('loginUser'));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;


var stockname = document.getElementById("stock_name").value;
var eta = document.getElementById("eta_date").value;
var partno = document.getElementById("npart_no").value;
var order = document.getElementById("nporder_no").value;
var notes = document.getElementById("nnotes_no").value;

function logout() {
  localStorage.removeItem("loginUser");
  location.replace("login.html");
}

function format(d) {
  let childRowHTML = '';
  if (d.itemDetails && d.itemDetails.length > 0) {
    childRowHTML += '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">';
    childRowHTML += '<thead><tr><th>Part No</th><th>Order No</th><th>Notes</th><th>Action</th></tr></thead>';
    childRowHTML += '<tbody>';
    d.itemDetails.forEach((itemDetail) => {
      childRowHTML += '<tr><td>' + itemDetail.partno + '</td><td>' + itemDetail.order + '</td><td>' + itemDetail.notes + '</td><td><button type="button" class="fa fa-trash"></button></td></tr>';
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
    { data: "null",
      render: function (data, type, row) {
      return '<button type="button" class="fa fa-pencil" style="border: none;"></button>' +
          '<button type="button" class="fa fa-trash" style="border: none;"></button>'; }
  } 
  ],
  order: [[1, "asc"]],
});

//delete the row
$('#example tbody').on('click', '.fa-trash', function () {
  var row = table.row($(this).parents('tr'));
  var data = row.data();
  var index = stockDetails.findIndex(function(item) {
      return item.stockName === data.stockName;
  });
  if (index !== -1) {
      stockDetails.splice(index, 1);
      localStorage.setItem('stockDetail', JSON.stringify(stockDetails));
  }
  row.remove().draw();
});


$("#example tbody").on("click", "td.dt-control", function () {
  var tr = $(this).closest("tr");
  var row = table.row(tr);
  if (row.child.isShown()) {
    row.child.hide();
    tr.removeClass("shown");
  } else {
    row.child(format(row.data())).show();
    tr.addClass("shown");
  }
});

function addStock() {
  debugger
  let stockName = document.getElementById("stock_name").value;
  let eta = document.getElementById("eta_date").value;
  let status = document.querySelector('input[name="stock_status"]:checked').value;
  //let notes = document.getElementById("nnotes_no").value;

  let stockDetails = {
    stockName: stockName,
    etaDate: eta,
    status: status,
    createdBy: username,
    createdDate: eta,
    notes: "Static notes",
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
  dtr = dtr + "<td class='txtpartno' data-id='" + stockDetail11.partno + "' >" + stockDetail11.partno + "</td>";
  dtr = dtr + "<td class='txtinvoice' >" + (invoice++) + "</td>";
  dtr = dtr + "<td class='txtorder' >" + stockDetail11.order + "</td>";
  dtr = dtr + "<td class='txtnotes' >" + stockDetail11.notes + "</td>";
  dtr = dtr + "<td class='tdAction'><button type='button' class='btn btn-sm btn-delete'>&#x2715;</button></td>";
  dtr = dtr + "</tr>";
  $("#parttable tbody").append(dtr);
}

$("#parttable tbody").on("click", ".btn-delete", function () {
  $(this).closest("tr").remove();
});
