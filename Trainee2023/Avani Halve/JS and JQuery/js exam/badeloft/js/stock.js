var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

var stockname = document.getElementById("stockname").value;
var eta = document.getElementById("etadate").value;
var partno = document.getElementById("partNumber").value;
var order = document.getElementById("orderNumber").value;
var notes = document.getElementById("notes").value;

function logout() {
   localStorage.removeItem("loginUser");
   location.replace("login.html");
}

function format(d) {
   let childRowHTML = "";
   if (d.itemDetails && d.itemDetails.length > 0) {
      childRowHTML += '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">';
      childRowHTML += "<thead><tr><th>Part No</th><th>Order No</th><th>Notes</th><th>Action</th></tr></thead>";
      childRowHTML += "<tbody>";
      d.itemDetails.forEach((itemDetail) => {
         childRowHTML +=
            "<tr><td>" +
            itemDetail.partno +
            "</td><td>" +
            itemDetail.order +
            "</td><td>" +
            itemDetail.notes +
            '</td><td><button type="button" class="btn btn-sm btn-delete" id="deletePart">&#x2715;</button></td></tr>';
      });
      childRowHTML += "</tbody></table>";
   }
   return childRowHTML;
}

var stockDetails = JSON.parse(localStorage.getItem("stockDetail"));

$(document).ready(function () {
   var table = $("#stockTable").DataTable({
      data: stockDetails,
      bFilter: false,
      bInfo: true,
      bLengthChange: false,

      language: {
         info: "Items _START_ to _END_ of _TOTAL_ entries",
         search: "_INPUT_",
         searchPlaceholder: "Search here...",
         paginate: {
            previous: "<",
            next: ">",
         },
      },
      columns: [
         { data: "stockName", className: "text-start dt-control", orderable: false },
         { data: "etaDate", orderable: false },
         {
            data: "status",
            className: "text-center",
            orderable: false,
            render: function (data, type, row) {
               var select =
                  '<select style="border: 2px solid #326C96;  border-radius: 5px; width: 75px; font-size: 14px;" class="statusdropdown"><option value="Change" disable>Change </option><option value="In Warehouse">In Warehouse</option><option value="On Water">On Water</option><option value="On Production">On Production</option></select>';
               return select + data;
            },
         },
         { data: "createdBy", orderable: false },
         { data: "createdDate", orderable: false },
         // { data: "notes" },
         {
            data: "null",
            orderable: false,
            render: function (data, type, row) {
               return (
                  '<button type="button" class="fa fa-pencil edit" style="border: none; color:grey;"></button>' +
                  '<button type="button" class="fa fa-history" style="border: none; color:grey;"></button>'
               );
            },
         },
      ],
      order: [[1, "asc"]],
   });

   //status select box
   $("#stockTable tbody").on("change", "select", function () {
      var rowData = table.row($(this).closest("tr")).data();
      var newValue = $(this).val();
      rowData.status = newValue;
      table.row($(this).closest("tr")).data(rowData);

      var data = JSON.parse(localStorage.getItem("stockDetail"));
      var index = data.findIndex(function (item) {
         return item.stockName === rowData.stockName;
      });
      if (index !== -1) {
         data[index].status = newValue;
         localStorage.setItem("stockDetail", JSON.stringify(data));
      }
      location.reload(true);
   });

   // Validations
   $("#stockForm").validate({
      rules: {
         stockname: {
            required: true,
         },
         stock_status: {
            required: true,
         },
         etadate: {
            required: true,
         },
      },
      messages: {
         stockname: {
            required: "Please Provide Stock Name",
         },
         stock_status: {
            required: "Please select an option",
         },
         etadate: {
            required: "Choose Date",
         },
      },
   });

   $("#partForm").validate({
      rules: {
         partNumber: {
            required: true,
         },
         orderNumber: {
            required: true,
            number: true,
         },
      },
      messages: {
         stockname: {
            required: "Enter Part Number",
         },
         stock_status: {
            required: "Enter Order Qunatity",
            number: "Only Enter Number",
         },
      },
   });

   //edit
   $("#stockTable tbody").on("click", ".edit", function () {
      console.log(table.row(this).data());
      var data = table.row($(this).parents("tr")).data();
      var index = table.row($(this).parents("tr")).index();
      $("#stockname").val(data.stockName);
      $("#etadate").val(data.etaDate);
      $('input[name="stock_status"][value="' + data.status + '"]').prop("checked", true);
      if (data.itemDetails && data.itemDetails.length > 0) {
         let dynamicTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th><th></th></thead><tbody>";
         data.itemDetails.forEach(function (PartData) {
            dynamicTR +=
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
         dynamicTR += "</tbody>";
         console.log("row" + dynamicTR);
         $("#parttable").html(dynamicTR);
      }
      itemDetails = data.itemDetails;
      $(".modal-header").data("Edit Stock");
      $("#AddStock").modal("show");
      console.log(itemDetails);
      $("#save")
         .unbind()
         .click(function () {
            var StockName = $("#stockname").val();
            var ETADate = $("#etadate").val();
            var StockStatus = $('input[name="stock_status"]:checked').val();
            var createddate = "08/25/2000";

            var StockDataObject = {
               stockName: StockName,
               etaDate: ETADate,
               status: StockStatus,
               createdBy: username,
               createdDate: createddate,
               // notes: "Static notes",
               Action: "",
               itemDetails: itemDetails,
            };
            var StockData = JSON.parse(localStorage.getItem("stockDetail")) || [];
            StockData[index] = StockDataObject;
            localStorage.setItem("stockDetail", JSON.stringify(StockData));
            $("#save").modal("hide");
            location.reload(true);
         });

      //delete part from edit
      $("#parttable").on("click", ".btn-delete", function () {
         if (itemDetails.length == 1) {
            swal("Error!", "Can't delete last partNumber", "error");
         } else {
            $(this).closest("tr").remove();
            itemDetails.splice(this, 1);
         }
      });
   });

   //history modal
   $(".fa-history").on("click", function () {
      $("#historyModal").modal("toggle");
   });

   $("#stockTable tbody").on("click", "td.dt-control", function () {
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
});

$("#save").click(function () {
   if ($("#stockForm").valid() == true) {
      let stockName = $("#stockname").val();
      let eta = $("#etadate").val();
      let status = $('input[name="stock_status"]:checked').val();

      // Check if the stock name already exists
      var StockData = JSON.parse(localStorage.getItem("stockDetail")) || [];
      debugger;
      for (var i = 0; i < StockData.length; i++) {
         if (StockData[i].stockName.toLowerCase() === stockName.toLowerCase()) {
            swal("Error!", "Stock Name cannot be same", "error");
            return;
         }
      }
      // Check if at least one part is present
      if (stockItemDetails.length === 0) {
         swal("Error!", "Add Part Number", "error");
         return;
      }

      let stockDetails = {
         stockName: stockName,
         etaDate: eta,
         status: status,
         createdBy: username,
         createdDate: eta,
         //  notes: "Static notes",
         Action: "",
         itemDetails: stockItemDetails,
      };

      var stockDetailsArray = JSON.parse(localStorage.getItem("stockDetail"));
      if (!stockDetailsArray) {
         stockDetailsArray = [];
      }
      stockDetailsArray.push(stockDetails);
      localStorage.setItem("stockDetail", JSON.stringify(stockDetailsArray));

      $("#stockname").val("");
      $("#etadate").val("");
      stockItemDetails = [];
      table.row.add(stockDetails).draw();
   }
});

$("#newBtn").click(function () {
   $("#stockname").val("");
   $("#etadate").val("");
});

$("#addpart").click(function () {
   $("#partNumber").val("");
   $("#orderNumber").val("");
   $("#notes").val("");
});

var stockItemDetails = [];
function addItemDetails() {
   let partNo = document.getElementById("partNumber").value;
   let order = document.getElementById("orderNumber").value;
   let notes = document.getElementById("notes").value;
   let invoice = 15001;

   if ($("#partForm").valid() == true) {
      let stockDetail11 = {
         partno: partNo,
         order: order,
         notes: notes,
      };

      stockItemDetails.push(stockDetail11);

      let dtr = "<tr>";
      dtr = dtr + "<td class='txtpartno' data-id='" + stockDetail11.partno + "' >" + stockDetail11.partno + "</td>";
      dtr = dtr + "<td class='txtinvoice' >" + invoice++ + "</td>";
      dtr = dtr + "<td class='txtorder' >" + stockDetail11.order + "</td>";
      dtr = dtr + "<td class='txtnotes' >" + stockDetail11.notes + "</td>";
      dtr = dtr + "<td class='tdAction'><button type='button' class='btn btn-sm btn-delete'>&#x2715;</button></td>";
      dtr = dtr + "</tr>";
      $("#parttable tbody").append(dtr);
   }

   $("#parttable").on("click", ".btn-delete", function () {
      debugger;
      if (stockItemDetails.length == 1) {
         swal("Error!", "Atleast have 1 PartNumber", "error");
      } else {
         $(this).closest("tr").remove();
         stockItemDetails.splice(this, 1);
      }
   });
}

//delete part from outside
$("#parttable").on("click", "#deletePart", function () {
   debugger;
   if (itemDetails.length == 1) {
      swal("Error!", "Atleast have 1 PartNumber", "error");
   } else {
      $(this).closest("tr").remove();
      itemDetails.splice(this, 1);
   }
});

//search
$("#search").on("keyup", function () {
   var value = $(this).val().toLowerCase();
   $("#stockTable tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
   });
});
