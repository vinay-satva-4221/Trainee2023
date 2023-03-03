
var counter = 150001;


window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}



$(document).ready(function () {
    var stockdata = JSON.parse(localStorage.getItem('stock'));
    // console.log(stockdata);
    var button = document.getElementById("newButton");
    var table = $('#StockTable ').DataTable({
        "fnInitComplete": function () {
            $('#StockTable_length').html('<h4><strong>Stock</strong></h4>');
            $('#StockTable_filter').prepend(button)

        },
        data: stockdata,
        columns: [

            {
                data: 'name', title: 'Stock Name', 'sortable': false, className: 'dt-control',
                orderable: false,
            },
            { data: 'etaDate', title: 'ETA Date', 'sortable': false },
            { data: 'stocklocation', title: 'Stock Location', 'sortable': false },
            { data: 'createdby', title: 'Created By', 'sortable': false },
            { data: 'createdDate', title: 'Created Date', 'sortable': false },
            { data: 'note', title: 'Notes', 'sortable': false },
            {
                data: 'Action', title: 'Action', 'sortable': false, className: "dt-center editor-edit",
                defaultContent: '<button class="btn edit-row"><i class="bi bi-pencil-fill text-secondary fw-bolder"/></button>'
            }
        ],
        columnDefs: [
            {
                // targets: [1,2,3,4,5,6,7,8],
                // className: 'text-left', 
                "defaultContent": "-",
                "targets": "_all"
            },
        ],
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here...',
            paginate: {
                previous: "<",
                next: ">"
            },
        },

        order: [[1, 'asc']],
    });
    var activeuser = JSON.parse(localStorage.getItem("loggUser"));

    $("#Uname").html(activeuser.name);

    // $('[data-toggle="popover"]').popover();


    $('#save_inner').on('click', function () {
        var partnum = $('#part_num').val();
        var invoice = counter++;
        var ordered = $('#ordered').val();
        var note = $('#note').val();

        var newRow = $('<tr>');
        newRow.append('<td>' + partnum + '</td>');
        newRow.append('<td>' + invoice + '</td>');
        newRow.append('<td>' + ordered + '</td>');
        newRow.append('<td>' + note + '</td>');
        newRow.append('<td><button class="btn delete-row"><i class="fa-solid fa-xmark"></i></button></td>');
        // if (partnum != "" && ordered != "" && note != "") {
        //     $('#inner_table tbody').append('<tr class="child"><td>' + partnum + '</td><td>' + '</td><td>' + ordered + '</td><td>' + note + '</td></tr>');
        // }
        var stock = JSON.parse(localStorage.getItem('stock')) || [];
        console.log(stock);
        var rowData = {
            partnum: partnum,
            invoice: invoice,
            ordered: ordered,
            note: note
        };
        stock.push(rowData);

        $('#inner_table tbody').append(newRow);

        // $("#StockTable Modal1").modal("hide");
        // $('#part_num').val('');
        // $('#ordered').val('');
        // $('#note').val('');

    });


    $('#save_outer').on('click', function () {

        var name = $('#stock_name').val();
        var etaDate = $('#eta_date').val();
        var stocklocation = $('input[name="btnradio"]:checked').next('label').text();
        var note = $('#note').val();
        console.log(note);

        var activeuser = JSON.parse(localStorage.getItem("loggUser"));
        console.log(activeuser)
        var username = activeuser;

        var currentDate = new Date();
        var options = {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        };
        var formattedDate = currentDate.toLocaleDateString('en-US', options).replace(/\D/g, '/');

        var finaldata = {
            name: name,
            etaDate: etaDate,
            stocklocation: stocklocation,
            note: note,
            createdby: username[0].name,
            createdDate: formattedDate, //set current date
            //     // currentDate:currentDate,
            nestedData: [],
        };
        $('#inner_table tbody tr').each(function () {

            var partnum = $(this).find('td:eq(0)').text();
            var ordered = $(this).find('td:eq(2)').text();
            var note = $(this).find('td:eq(3)').text();


            if (partnum !== '' && ordered !== '' && note !== '') {
                var rowData = {
                    partnum: partnum,
                    ordered: ordered,
                    note: note,
                };
                finaldata.nestedData.push(rowData);
            }
        });

        var stockData = JSON.parse(localStorage.getItem('stock')) || [];

        stockData.push(finaldata);
        localStorage.setItem('stock', JSON.stringify(stockData));

        table.clear().rows.add(stockData).draw();

        $('#stock_name').val('');
        $('#eta_date').val('');
        $('#note').val('');
        $('#inner-table tbody').empty();
        $('input[name="btnradio"]').prop('checked', false);


        //$("#StockTable Modal").modal("hide")
    });
    $('#save_outer').on('click', function () {
        $("#inner_table tbody").empty();
    });


$('#StockTable tbody').on('click', '.edit-row', function () {
    var tr = $(this).closest('tr');
    var row = table.row(tr);
    var data = row.data(); // Get the data from the row

    // Populate the edit form with the data
    $('#stock_name').val(data.name);
    $('#note').val(data.etaDate);
    $('input[name="btnradio"][value="' + data.stocklocation + '"]').prop('checked', true);

    // Show the edit modal
    $('#outerModal').modal('show');

    $('#save_outer').off('click').on('click', function () {
        // Update the data of the selected row with the new values 
        data.name = $('#stock_name').val();
        data.etaDate = $('#note').val();
        data.stocklocation = $('input[name="btnradio"]:checked').val();

        // Update the existing row's data
        row.data(data);
        
        table.draw();

        // Hide the edit modal
        $('#outerModal').modal('hide');

        var rowData = table.rows().data().toArray();
        localStorage.setItem('stock', JSON.stringify(rowData));
    });
});


    



    $('#StockTable  tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {

            row.child.hide();
            tr.removeClass('shown');
        } else {

            row.child(format(row.data())).show();
            tr.addClass('shown');
        };
    })

    function format(d) {
        debugger;
        var table = '<table cellpadding="2" cellspacing="0" class="table border rounded">';
        table += '<thead style="background-color:lightgrey;"><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead> ';
        table += '<tbody>';
        for (var i = 0; i < d.nestedData.length; i++) {
            table += '<tr>';
            table += '<td>' + '</td>';
            table += '<td>' + d.nestedData[i].partnum + '</td>';
            // table += '<td>' + d.nestedData[i].invoice + '</td>';
            table += '<td>' + d.nestedData[i].ordered + '</td>';
            table += '<td>' + d.nestedData[i].note + '</td>';
            table += '<td><button class="btn delete-row"><i class="fa-solid fa-xmark"></i></button></td>';
            table += '</tr>';
        }

        table += '</tbody></table>';

        return table;

    }
    $(function () {
        $('input[name="date"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
        });
    });
})

//delete row in outer_modal table
$('#inner_table tbody').on('click', '.delete-row', function () {
    $(this).closest('tr').remove();
});

$("#AddPart").click(function () {
    // Clear previous form data
    $("#part_num").val("");
    $("#ordered").val("");
    $("#note").val("");
    // Show AddPartModal
    // $("#AddPartModal").modal("show");
});

$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);
})
function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}