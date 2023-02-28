window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}

//inner modal

$(document).ready(function () {

    // $('#save_inner').on('click', function () {
    //     var partnum = $('#part_num').val();
    //     var ordered = $('#ordered').val();
    //     var note = $('#note').val();
    //     if (partnum != "" && ordered != "" && note != "") {
    //         $('#innermodal tbody').append('<tr class="child"><td>' + partnum + '</td><td>' + '</td><td>' + ordered + '</td><td>' + note + '</td></tr>');
    //     }
    // });

    //outer modal and 



    // var data1 = [
    //     {
    //         QBInvoice: existingStocks.stockname,
    //         Name: existingStocks.etaDate,
    //         QBShipdate: '12/08/2021',
    //         QBPaymentStatus: '3',
    //         QBStatus: 'Shipped',
    //         QBDeliveryPhone: '617-235-7647',
    //         QBTracking: 'WBC-123',
    //     }
    // ];
    var table = $('#example').DataTable({
      
        //ajax: '../ajax/data/objects.txt',
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'QBInvoice', "sortable": true },
            { data: 'Name', "sortable": false },
            { data: 'QBShipdate', "sortable": false },
            {
                data: 'QBPaymentStatus', "sortable": false, render: function () {
                    return '<div class="alert alert-primary styl" role="alert">Paid</div>';
                }
            },
            { data: 'QBStatus', "sortable": false },
            { data: 'QBDeliveryPhone', "sortable": false },
            {
                data: 'Called', "sortable": false, render: function () {
                    return '<input type="checkbox">';
                }
            },
            { data: 'QBTracking', "sortable": false }
        ],
        columnDefs: [
            {
                targets: [1, 2, 3, 4, 5, 6, 7, 8],
                className: 'text-center'
            }
        ],
        'order': [[1, 'asc']]

    });
    var activeuser = JSON.parse(localStorage.getItem("loggUser"));

    $("#active").html(activeuser.name);

    $('#save_inner').on('click', function () {
        var partnum = $('#part_num').val();
        var ordered = $('#ordered').val();
        var note = $('#note').val();
        if (partnum != "" && ordered != "" && note != "") {
            $('#innermodal tbody').append('<tr class="child"><td>' + partnum + '</td><td>' + '</td><td>' + ordered + '</td><td>' + note + '</td></tr>');
        }

        var stockData = JSON.parse(localStorage.getItem('stock')) || [];

        var rowData = {
            partnumber: partnumber,
            ordered: ordered,
            notes: notes
        };
        stockData.push(rowData);


        $('#stock-table tbody').append(newRow);

        $("#exampleModal1").modal("hide");
        $('#partnumber').val('');
        $('#order').val('');
        $('#notes').val('');

    });
    $("#save_outer").on("click", function () {
        var stockname = $("#stock_name").val();
        var etaDate = $("#eta_date").val();
        var stocklocation = $('input[name="btnradio"]:checked').next('label').text();

        var notes = $("#note").val();

        var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
        var username = activeuser;
        var currentDate = new Date();

        var newStock = {
            stockname: stockname,
            etaDate: etaDate,

            stocklocation: stocklocation,
            createdby: username.name,
            //     // currentDate:currentDate,
            nestedData: []
        };
        $('#stock-table tbody tr').each(function () {
            var partnumber = $(this).find('td:eq(0)').text();
            var ordered = $(this).find('td:eq(1)').text();
            var notes = $(this).find('td:eq(2)').text();


            if (partnumber !== '' && ordered !== '' && notes !== '') {
                var rowData = {
                    partnumber: partnumber,
                    ordered: ordered,
                    notes: notes
                };
                newStock.nestedData.push(rowData);
            }
        });

        var existingStocks = JSON.parse(localStorage.getItem("stock")) || [];
        existingStocks.push(newStock);

        localStorage.setItem("stock", JSON.stringify(existingStocks));

        table.clear().rows.add(existingStocks).draw();
        $('#name').val('');
        $('#etaDate').val('');
        $('#notes').val('');
        $('#stock-table tbody').empty();
        $('input[name="btnradio"]').prop('checked', false);


        $("#exampleModal").modal("hide");
    });

    $('#myCustomSearchBox').keyup(function () {
        table.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    });

    $('#example tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});
function format(d) {
    // `d` is the original data object for the row
    var table = '<table class="table table-bordered w-100">';
    table += '<thead><tr><th>Part Number</th><th>Ordered</th><th>Notes</th></tr></thead>';
    table += '<tbody>';
    for (var i = 0; i < d.nestedData.length; i++) {
        table += '<tr>';
        table += '<td>' + d.nestedData[i].partnumber + '</td>';
        table += '<td>' + d.nestedData[i].ordered + '</td>';
        table += '<td>' + d.nestedData[i].notes + '</td>';
        table += '</tr>';
    }

    table += '</tbody></table>';

    return table;
}



$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);
})
function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}