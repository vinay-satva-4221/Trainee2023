var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

function logout() {
   localStorage.removeItem("loginUser");
   location.replace("login.html");
}

var data = {
   "Kenneth Wooded": ["15001", "15000", "15003"],
   "James Fenske": ["15002", "15005"],
   "Kelly McCrony": ["15007", "150012", "150011"],
   "Jack Mark": ["15004", "150010"],
   "Alex John": ["15008", "15009", "15006"],
};

var customerSelect = document.getElementById("customer");
for (var customer in data) {
   var option = document.createElement("option");
   option.value = customer;
   option.text = customer;
   customerSelect.add(option);
}

var invoiceSelectt = document.getElementById("invoice");
customerSelect.addEventListener("change", function () {
   invoiceSelectt.innerHTML = "";
   var selectedCustomer = this.value;
   if (selectedCustomer != "") {
      var subcustomer = data[selectedCustomer];
      for (var i = 0; i < subcustomer.length; i++) {
         var option = document.createElement("option");
         option.value = subcustomer[i];
         option.text = subcustomer[i];
         invoiceSelectt.add(option);
      }
   }
});

//StockName selectBox
var StockDetails = JSON.parse(localStorage.getItem("stockDetail"));
var select = document.getElementById("stock");

for (i = 0; i < StockDetails.length; i++) {
   var stockName = StockDetails[i].stockName;
   var option = document.createElement("option");
   option.value = stockName;
   option.textContent = stockName;
   select.appendChild(option);
}

var customer = document.getElementById("customer").value;
var invoice = document.getElementById("invoice").value;
var stock = document.getElementById("stock").value;

$(document).ready(function () {
   function format(d) {
      return (
         '<table class="table">' +
         "<thead>" +
         "<tr>" +
         "<th >#</th>" +
         "<th>Stock</th>" +
         "<th>Parts</th>" +
         "<th >Action</th>" +
         "</tr>" +
         "</thead>" +
         '<tbody class="table-group-divider">' +
         "<tr>" +
         "<td></td>" +
         "<td>" +
         d.stock +
         "</td>" +
         "<td>" +
         d.parts +
         "</td>" +
         '<td><button type="button" class="btn btn-sm btn-delete" >&#x2715;</button></td>' +
         "</tr>" +
         "</tbody>" +
         "</table>"
      );
   }

   var assignementDetails = JSON.parse(localStorage.getItem("assignmentDetail"));
   var table = $("#example").DataTable({
      data: assignementDetails,
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
         { data: "invoice", className: "text-start dt-control", orderable: false },
         { data: "customer", orderable: false },
         { data: "createdBy", orderable: false },
         { data: "createdDate", orderable: false },
         {
            data: "null",
            orderable: false,
            render: function (data, type, row) {
               return (
                  '<button type="button" class="fa fa-pencil" style="border: none;"></button>' +
                  '<button type="button" class="fa fa-trash" style="border: none;"></button>'
               );
            },
         },
      ],
      order: [[1, "asc"]],
   });

   $("#example tbody").on("click", ".fa-trash", function () {
      var row = table.row($(this).parents("tr"));
      var data = row.data();
      var index = assignementDetails.findIndex(function (item) {
         return item.stockName === data.stockName;
      });
      if (index !== -1) {
         assignementDetails.splice(index, 1);
         localStorage.setItem("assignmentDetail", JSON.stringify(assignementDetails));
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

   //edit
   $("#example tbody").on("click", ".fa-pencil", function () {
      console.log(table.row(this).data());
      var data = table.row($(this).parents("tr")).data();
      var index = table.row($(this).parents("tr")).index();
      $("#customer").val(data.customer);
      $("#invoice").val(data.invoice);
      $("#stock").val(data.stock);

      itemDetails = data.itemDetails;
      $("#addAssignment").modal("show");
      console.log(itemDetails);
      $("#save")
         .unbind()
         .click(function () {
            var customer = $("#customer").val();
            var invoice = $("#invoice").val();
            var stock = $("#stock").val();
            let currentDate = new Date().toLocaleString();
            var selectedValues = $(".select2").val();
            var checked = selectedValues.join("|");

            let assignementDetailobject = {
               customer: customer,
               invoice: invoice,
               stock: stock,
               parts: checked,
               createdBy: username,
               createdDate: currentDate,
            };
            var assignmentData = JSON.parse(localStorage.getItem("assignmentDetail")) || [];
            assignmentData[index] = assignementDetailobject;
            localStorage.setItem("assignmentDetail", JSON.stringify(assignmentData));
            $("#save").modal("hide");
            location.reload(true);
         });
   });

   //search
   $("#search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#example tbody tr").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });

   //multi-select-box
   $(".js-select2").select2({
      closeOnSelect: false,
      placeholder: "Placeholder",
      allowHtml: true,
      allowClear: true,
      tags: true,
   });

   $(".icons_select2").select2({
      width: "100%",
      templateSelection: iformat,
      templateResult: iformat,
      allowHtml: true,
      placeholder: "Placeholder",
      dropdownParent: $(".select-icon"),
      allowClear: true,
      multiple: true,
   });

   function iformat(icon, badge) {
      var originalOption = icon.element;
      var originalOptionBadge = $(originalOption).data("badge");

      return $(
         '<span><i class="fa ' +
            $(originalOption).data("icon") +
            '"></i> ' +
            icon.text +
            '<span class="badge">' +
            originalOptionBadge +
            "</span></span>"
      );
   }

   $("#assignmentForm").validate({
      rules: {
         customer: {
            required: true,
         },
         invoice: {
            required: true,
         },
         stock: {
            required: true,
         },
         parts: {
            required: true,
         },
      },
      messages: {
         customer: {
            required: "Select Customer",
         },
         invoice: {
            required: "Select Invoice",
         },
         stock: {
            required: "Select Stock",
         },
         parts: {
            required: "Select Parts",
         },
      },
   });
});

function addAssignment() {
   if ($("#assignmentForm").valid() == true) {
      let currentDate = new Date().toLocaleString();
      let customer = document.getElementById("customer").value;
      let invoice = document.getElementById("invoice").value;
      let stock = document.getElementById("stock").value;
      var selectedValues = $(".select2").val();
      var checked = selectedValues.join("|");

      let assignementDetails = {
         customer: customer,
         invoice: invoice,
         stock: stock,
         parts: checked,
         createdBy: username,
         createdDate: currentDate,
      };

      var assignementDetailsArray = JSON.parse(localStorage.getItem("assignmentDetail"));
      if (!assignementDetailsArray) {
         assignementDetailsArray = [];
      }
      assignementDetailsArray.push(assignementDetails);
      localStorage.setItem("assignmentDetail", JSON.stringify(assignementDetailsArray));

      table.row.add(assignementDetails).draw();

      document.getElementById("customer").value = "";
      document.getElementById("invoice").value = "";
      document.getElementById("stock").value = "";
   }
}
