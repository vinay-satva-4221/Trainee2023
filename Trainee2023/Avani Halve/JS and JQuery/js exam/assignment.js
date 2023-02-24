var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

var data = {
   "Kenneth Wooded": ["15001"],
   "James Fenske": ["15002"],
   "Kelly McCrony": ["15003"],
   "Jack Mark": ["15004"],
   "Alex John": ["15005"],
};

// Populate the category drop down
var categorySelect = document.getElementById("category");
for (var category in data) {
   var option = document.createElement("option");
   option.value = category;
   option.text = category;
   categorySelect.add(option);
}

// Populate the subcategory drop down based on category selection
var subcategorySelect = document.getElementById("subcategory");
categorySelect.addEventListener("change", function () {
   subcategorySelect.innerHTML = "";
   var selectedCategory = this.value;
   if (selectedCategory != "") {
      var subcategories = data[selectedCategory];
      for (var i = 0; i < subcategories.length; i++) {
         var option = document.createElement("option");
         option.value = subcategories[i];
         option.text = subcategories[i];
         subcategorySelect.add(option);
      }
   }
});

   var aa = JSON.parse(localStorage.getItem("stockDetail"));
   var select = document.getElementById("stock");

   for (i = 0; i < aa.length; i++) {
      var stockName = aa[i].stockName;
      var option = document.createElement("option");
      option.value = stockName;
      option.textContent = stockName;
      select.appendChild(option);
}
// multiselect box

    // $(document).ready(function() {
    //     $('.js-example-basic-multiple').select2();
    // });

var customer = document.getElementById("category").value;
var invoice = document.getElementById("subcategory").value;
var stock = document.getElementById("stock").value;

function format(d) {

  let childRowHTML = '';
  if (d.assignementDetails && d.assignementDetails.length > 0) {
    childRowHTML += '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    childRowHTML += '<thead><tr><th>Part No</th><th>Order No</th><th>Notes</th></tr></thead>';
    childRowHTML += '<tbody>';
    d.assignementDetails.forEach((assignementDetails) => {
      childRowHTML += '<tr><td>' + assignementDetails.stock +'</td></tr>';
    });
    childRowHTML += '</tbody></table>';
  }
  return childRowHTML;
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
    { data: "category" },
    { data: "subcategory" },
    { data: "createdBy" },
    { data: "createdDate" },
    { data: "action" }
  ],
  order: [[1, "asc"]],
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
  let category = document.getElementById("category").value;
  let subcategory = document.getElementById("subcategory").value;
  let stock = document.getElementById("stock").value;

  let assignementDetails = {
    category: category,
    subcategory: subcategory,
    stock: stock,
    createdBy: username,
    createdDate: '12/08/2022',
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
  document.getElementById("subcategory").value = "";
  document.getElementById("stock").value = "";

}