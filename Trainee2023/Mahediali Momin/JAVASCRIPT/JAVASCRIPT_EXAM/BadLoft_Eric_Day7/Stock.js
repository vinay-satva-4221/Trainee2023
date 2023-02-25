window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}

//inner modal

$(document).ready(function () {
    
    $('#save_inner').on('click', function () {
        var partnum = $('#part_num').val();
        var ordered = $('#ordered').val();
        var note = $('#note').val();
        if (partnum != "" && ordered != "" && note != "") {
            $('#innermodal tbody').append('<tr class="child"><td>' + partnum + '</td><td>' + '</td><td>' + ordered + '</td><td>' + note + '</td></tr>');
        }
    });

    //outer modal and 
    $("#save_outer").on("click", function () {
        var stockname = $("#stock_name").val();
        var etaDate = $("#eta_date").val();
        var partnum = $("#part_num").val();
        var ordered = $("#ordered").val();
        var note = $("#note").val();

        var newStock = {
            stockname: stockname,
            etaDate: etaDate,
            partnum: partnum,
            ordered: ordered,
            note: note,
        };

        var existingStocks = JSON.parse(localStorage.getItem("stock")) || [];
        existingStocks.push(newStock);
      
        localStorage.setItem("stock", JSON.stringify(existingStocks));

        var data1 = [
            {
                QBInvoice: existingStocks.stockname,
                Name: existingStocks.etaDate,
                QBShipdate: '12/08/2021',
                QBPaymentStatus: '3',
                QBStatus: 'Shipped',
                QBDeliveryPhone: '617-235-7647',
                QBTracking: 'WBC-123',
            }
        ];
        var table = $('#example').DataTable({
            data: data1,
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
        return (
            '<table cellpadding="2" cellspacing="0" class="table border rounded">' +
            '<thead  style="background-color: rgb(233, 233, 233);">' +
            '<tr>' +
            '<th>#</th>' +
            '<th>Part Number</th>' +
            '<th>Ordered</th>' +
            '<th>Assigned</th>' +
            '<th>Action</th>' +
            '</tr>' +
            '<tr>' +
            '<td>1</td>' +
            '<td>BW-01-S-M</td>' +
            '<td>5</td>' +
            '<td>5</td>' +
            '<td>Close</td>' +
            '</tr>' +
            '<tr>' +
            '<td>2</td>' +
            '<td>AT-01-BLK</td>' +
            '<td>4</td>' +
            '<td>4</td>' +
            '<td>Close</td>' +
            '</tr>' +
            '</thead>' +
            '</table>'
        );
    }


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