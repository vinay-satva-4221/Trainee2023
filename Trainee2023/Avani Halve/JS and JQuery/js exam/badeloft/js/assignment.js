var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

function logout() {
  localStorage.removeItem("loginUser");
  location.replace("login.html");
}

var data = {
   "Kenneth Wooded": ["15001"],
   "James Fenske": ["15002"],
   "Kelly McCrony": ["15003"],
   "Jack Mark": ["15004"],
   "Alex John": ["15005"],
};

var categorySelect = document.getElementById("category");
for (var category in data) {
   var option = document.createElement("option");
   option.value = category;
   option.text = category;
   categorySelect.add(option);
}


var invoiceSelectt = document.getElementById("invoice");
categorySelect.addEventListener("change", function () {
   invoiceSelectt.innerHTML = "";
   var selectedCategory = this.value;
   if (selectedCategory != "") {
      var subcategories = data[selectedCategory];
      for (var i = 0; i < subcategories.length; i++) {
         var option = document.createElement("option");
         option.value = subcategories[i];
         option.text = subcategories[i];
         invoiceSelectt.add(option);
      }
   }
});

   var StockDetails = JSON.parse(localStorage.getItem("stockDetail"));
   var select = document.getElementById("stock");

   for (i = 0; i < StockDetails.length; i++) {
      var stockName = StockDetails[i].stockName;
      var option = document.createElement("option");
      option.value = stockName;
      option.textContent = stockName;
      select.appendChild(option);
}

var customer = document.getElementById("category").value;
var invoice = document.getElementById("invoice").value;
var stock = document.getElementById("stock").value;

function format(d) {
 
  return (
    '<table class="table">' +
    '<thead>' +
    '<tr>' +
    '<th >#</th>' +
    '<th>Stock</th>' +
    '<th>Parts</th>' +
    '<th >Action</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody class="table-group-divider">' +
    '<tr>' +
    '<td></td>' +
    '<td>'+ d.stock +'</td>' +
    '<td>'+ d.invoice +'</td>' +
    '<td><button type="button" class="btn btn-sm btn-delete" >&#x2715;</button></td>' +
    '</tr>' +
    '</tbody>' +
    '</table>'
);
}

var assignementDetails = JSON.parse(localStorage.getItem('assignmentDetail'));

var table = $("#example").DataTable({
  data: assignementDetails,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: null,
      defaultContent: "",
    },
    { data: "invoice" },
    { data: "category" },
    { data: "createdBy" },
    { data: "createdDate" },
    { data: "null",
    render: function (data, type, row) {
      return '<button type="button" class="fa fa-pencil" style="border: none;"></button>' +
          '<button type="button" class="fa fa-trash" style="border: none;"></button>'; }
  }
  ],
  order: [[1, "asc"]],
});

$('#example tbody').on('click', '.fa-trash', function () {
  var row = table.row($(this).parents('tr'));
  var data = row.data();
  var index = assignementDetails.findIndex(function(item) {
      return item.stockName === data.stockName;
  });
  if (index !== -1) {
    assignementDetails.splice(index, 1);
      localStorage.setItem('assignmentDetail', JSON.stringify(assignementDetails));
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
  let currentDate = new Date().toLocaleString();
  let category = document.getElementById("category").value;
  let invoice = document.getElementById("invoice").value;
  let stock = document.getElementById("stock").value;

  let assignementDetails = {
    category: category,
    invoice: invoice,
    stock: stock,
    createdBy: username,
    createdDate: currentDate,
  };
  
  var assignementDetailsArray = JSON.parse(localStorage.getItem('assignmentDetail'));
  if(!assignementDetailsArray){
     assignementDetailsArray = [];
  }
  assignementDetailsArray.push(assignementDetails);
  localStorage.setItem('assignmentDetail', JSON.stringify(assignementDetailsArray));

  // Add new row to DataTable
  table.row.add(assignementDetails).draw(); 
  document.getElementById("category").value = "";
  document.getElementById("invoice").value = "";
  document.getElementById("stock").value = "";
}