var loginUser = JSON.parse(localStorage.getItem('loginuser'));
var username = loginUser.name;
document.getElementById("user").innerHTML = "Welcome" + "<br>" + "<b>" + username + "</b>";
// document.getElementById("user").innerHTML = username;


var stockName = document.getElementById("location").value;
var etaDate = document.getElementById("etadate").value;
var partno = document.getElementById("npart_no").value;
var order = document.getElementById("nporder_no").value;
var notes = document.getElementById("nnotes_no").value;

function logout() {
  localStorage.removeItem("loginuser");
  location.replace("badeloft.html");
}


function format(d) {
  debugger
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
        return '<button type="button" class="fa fa-pencil edit"  style="border: none;"></button>' +
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
// $("#example tbody").on("click", "td.dt-control", function () {
//   var tr = $(this).closest("tr");
//   var row = table.row(tr);

//   if (row.child.isShown()) {
//     // This row is already open - close it
//     row.child.hide();
//     tr.removeClass("shown");
//   } else {
//     // Open this row
//     row.child(format(row.data())).show();
//     tr.addClass("shown");
//   }
// });
// var table2 = $("#example").DataTable();

$("#search").on("keyup", function () {
  table.search(this.value).draw();
});

// $('.date').datepicker({  
//   format: 'mm-dd-yyyy'  
// });  



function addStock() {
  // debugger
  let stockName = document.getElementById("stock_name").value;
  let eta = document.getElementById("etadate").value;
  var status = document.querySelector('input[name="status"]:checked').value;

  var stockDetails = {
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


$("#example tbody").on("click", ".edit", function () {
  // debugger
  console.log(table.row(this).data());
  var data = table.row($(this).parents("tr")).data();
  var index = table.row($(this).parents("tr")).index();
  $("#stock_name").val(data.stockName);
  $("#etadate").val(data.etaDate);
  $('input[name="status"][value="' + data.status + '"]').prop("checked", true);
  if (data.itemDetails && data.itemDetails.length > 0) {

    let dTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th><th></th></thead><tbody>";
    data.itemDetails.forEach(function (PartData) {
      dTR +=
        "<tr>" +
        "<td>" +
        PartData.partno +
        "</td>" +
        "<td>" +
        "<td>" +
        PartData.order +
        "</td>" +
        "<td>" +
        PartData.notes +
        "</td>" +
        "<td class='text-end'><button type='button' class='btn-close btn-delete' aria-label='Close'></button></td></tr>";
    });
    dTR += "</tbody>";
    console.log("row" + dTR);
    $("#parttable").html(dTR);
  }
  itemDetails = data.itemDetails;
  $('.modal-header').data("Edit Stock");
  $("#myModal").modal("show");
  console.log(itemDetails);
  $("#savestock")
    .unbind()
    .click(function () {
      var StockName = $("#stock_name").val();
      var ETADate = $("#etadate").val();
      var status = $('input[name="status"]:checked').val();
      var createddate = "08/25/2000";

      var stockDetails = {
        stockName: StockName,
        etaDate: ETADate,
        status: status,
        createdBy: username,
        createdDate: createddate,
        // notes: "Static notes",
        Action: "",
        itemDetails: itemDetails,
      };
      var StockData = JSON.parse(localStorage.getItem("stockDetail")) || [];
      StockData[index] = stockDetails;
      localStorage.setItem("stockDetail", JSON.stringify(StockData));
      $("#savestock").modal("hide");
      location.reload(true);
    });


  $("#parttable").on("click", ".btn-delete", function () {
    if (itemDetails.length == 1) {
      // swal("Error!", "Can't delete last partNumber", "error");
      alert("You cant delete the last one");
    } else {
      $(this).closest("tr").remove();
      itemDetails.splice(this, 1);
    }
  });
});

//history modal
// $(".fa-history").on("click", function () {
//   $("#historyModal").modal("toggle");
// });

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
// });
//     localStorage.setItem('stockDetail', JSON.stringify(stockDetailsArray));

//     // Redraw the DataTables table with the updated data
//     table.clear().rows.add(stockDetailsArray).draw();

//     // Close the modal
//     $("#myModal").modal("hide");
//   });
// }