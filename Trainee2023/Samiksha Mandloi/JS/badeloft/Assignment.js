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
var select = document.getElementById("stock");

for (i = 0; i < restock.length; i++) {
    var stockName = restock[i].stockName;
    var option = document.createElement("option");
    option.value = stockName;
    option.textContent = stockName;
    select.appendChild(option);
}


$(document).ready(function () {
    $('#select-box').select2();
    $('#addparts').on('click', function () {
        // debugger;
        var checkboxes = $('#checkboxes input[type=checkbox]:checked');
        checkboxes.each(function (index, checkbox) {
            $('#select-box').append($('<option>', {
                value: $(checkbox).val(),
                text: $(checkbox).parent().text()
            }));
        });
        $('#select-box').trigger('change.select2');
    });
});
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
        '<td>' + d.invoice + '</td>' +
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
                return '<button type="button" class="fa fa-pencil" onclick="editRow()" style="border: none;"></button>' +
                  '<button type="button" class="fa fa-trash" style="border: none;"></button>';
              }
        }
    ],
    order: [[1, "asc"]],
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
    debugger
    var customer = document.getElementById("customer").value;
    var invoice = document.getElementById("Invoice").value;
    var stock = document.getElementById("stock").value;

    var currentDate = new Date().toLocaleString();

    var assignDetails = {
        customer: customer,
        invoice: invoice,
        stock: stock,
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
}



