var loginUser = JSON.parse(localStorage.getItem('loginuser'));
var username = loginUser.name;
document.getElementById("user").innerHTML ="Welcome"+ "<br>"+"<b>"+ username+ "</b>";


function logout() {
    localStorage.removeItem("loginuser");
    location.replace("badeloft.html");
}

var user = {
    "Kenneth Wooded": ["15001"],
    "James Fenske": ["15002"],
    "Kelly McCrony": ["15003"],
    "Jack Mark": ["15004"],
    "Alex John": ["15005"],
};
var customerSelect = document.getElementById("customer");
for (var category in user) {
    var option = document.createElement("option");
    option.value = category;
    option.text = category;
    customerSelect.add(option);
}

var invoiceSelect = document.getElementById("Invoice");
customerSelect.addEventListener("change", function () {
    invoiceSelect.innerHTML = "";
    var selectedCategory = this.value;
    if (selectedCategory != "") {
        var subcategories = user[selectedCategory];
        for (var i = 0; i < subcategories.length; i++) {
            var option = document.createElement("option");
            option.value = subcategories[i];
            option.text = subcategories[i];
            invoiceSelect.add(option);
        }
    }
});

var restock = JSON.parse(localStorage.getItem("stockDetail"));
if(!restock) { restock = [] }
var select = document.getElementById("stock");

for (i = 0; i < restock.length; i++) {
    var stockName = restock[i].stockName;
    var option = document.createElement("option");
    option.value = stockName;
    option.textContent = stockName;
    select.appendChild(option);
}

$(document).ready(function() {
    $('#asignparts').select2();
});


// $(document).ready(function () {
//     $('#select-box').select2();
//     $('#addparts').on('click', function () {
//         // debugger;
//         var checkboxes = $('#checkboxes input[type=checkbox]:checked');
//         checkboxes.each(function (index, checkbox) {
//             $('#select-box').append($('<option>', {
//                 value: $(checkbox).val(),
//                 text: $(checkbox).parent().text()
//             }));
//         });
//         $('#select-box').trigger('change.select2');
//     });
// });
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
        '<td>' + d.stock + '</td>' +
        '<td>' + d.part + '</td>' +
        '<td><button type="button" class="btn btn-sm btn-delete" >&#x2715;</button></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>'
    );
}

var AssignmentDetail = JSON.parse(localStorage.getItem('assignmentDetail'));
var table = $("#example").DataTable({
    data: AssignmentDetail,
    columns: [
        {
            className: "dt-control",
            orderable: false,
            data: null,
            defaultContent: "",
        },
        { data: "invoice" },
        { data: "customer" },
        { data: "createdBy" },
        { data: "createdDate" },
        

        {
            data: null,
            render: function (data, type, row) {
                return '<button type="button" class="fa fa-pencil edit"  style="border: none;"></button>' +
                  '<button type="button" class="fa fa-trash" style="border: none;"></button>';
              }
        }
    ],
    order: [[1, "asc"]],
});

$('#example tbody').on('click', '.fa-trash', function () {
   
    var row = table.row($(this).parents('tr'));
    var data = row.data();
    var index = AssignmentDetail.findIndex(function (item) {
      return item.stockName === data.stockName;
    });
    if (index !== -1) {
        AssignmentDetail.splice(index, 1);
      localStorage.setItem('assignmentDetail', JSON.stringify(AssignmentDetail));
    }
    row.remove().draw();
  });
// Add event listener for opening and closing details
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

var AssignmentDetail = JSON.parse(localStorage.getItem('assignmentDetail'));


function addAssignment() {
    // debugger
    var customer = document.getElementById("customer").value;
    var invoice = document.getElementById("Invoice").value;
    var stock = document.getElementById("stock").value;
    var part = document.getElementById("asignparts").value

    var currentDate = new Date().toLocaleString();

    var assignDetails = {
        customer: customer,
        invoice: invoice,
        stock: stock,
        part: part,
        createdBy: username,
        createdDate: currentDate,
        //   notes: "Hello EveryOne",
        //   Action:  "",
        //   itemDetails: stockItemDetails
    };

    var AssignmentDetail = JSON.parse(localStorage.getItem('assignmentDetail'));
    if (!AssignmentDetail) {
        AssignmentDetail = [];
    }
    AssignmentDetail.push(assignDetails);
    localStorage.setItem('assignmentDetail', JSON.stringify(AssignmentDetail));



    table.row.add(assignDetails).draw();
    document.getElementById("customer").value = "";
    document.getElementById("Invoice").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("asignparts").value = "";
}


$('#example tbody').on('click', '.edit', function () {
    // debugger
    console.log(table.row(this).data());
    var data = table.row($(this).parents("tr")).data();
    var index = table.row($(this).parents("tr")).index();
    $("#customer").val(data.customer);
  $("#Invoice").val(data.invoice);
  $("#stock").val(data.stock);
  $("#asignparts").val(data.part);
  $(this).parents('tr').addClass('editing');
  $('#myModal').modal('show');
});

$('#save').on('click', function() {
    debugger
    var $row = table.row('.editing');
    var $childRow = $row.child();
    var data = $row.data();
    data.customer = $('#customer').val();
    data.invoice = $('#invoice').val();
    data.stock = $('#stock').val();
    data.part = $('#asignparts').val();
    if ($childRow) {
        $childRow.find('.stock').text(data.stock);
        $childRow.find('.part').text(data.part);
    }
    $row.data(data).draw(false);
    $('#myModal').modal('hide');
});
$('#myModal').on('hidden.bs.modal', function () {
    table.$('tr.editing').removeClass('editing');
});


// const multiSelect = document.getElementById("asignparts");
// const selectedPartsTable = document.getElementById("selectedPartsTable");

// multiSelect.addEventListener("change", function() {
//   const selectedOptions = Array.from(this.selectedOptions).map(option => option.value);
  
//   // Clear the table body
//   selectedPartsTable.tBodies[0].innerHTML = "";
  
//   // Add a row for each selected option
//   selectedOptions.forEach(stockName => {
//     const row = selectedPartsTable.tBodies[0].insertRow();
//     const cell = row.insertCell();
//     cell.appendChild(document.createTextNode(stockName));
//   });
// });







