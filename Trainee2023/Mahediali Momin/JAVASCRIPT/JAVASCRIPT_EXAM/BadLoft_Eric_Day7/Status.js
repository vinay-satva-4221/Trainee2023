window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {
        
      window.location.replace("LoginPage.html");
    }
  }

/* Formatting function for row details - modify as you need */
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

var data1 = [
    {
        QBInvoice: '150000',
        Name: 'kenneth Woodard',
        QBShipdate: '12/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '617-235-7647',
        QBTracking: 'WBC-123'
    },
    {
        QBInvoice: '150001',
        Name: 'James Fenske',
        QBShipdate: '10/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '618-234-6400',
        QBTracking: 'WBC-124'
    },
    {
        QBInvoice: '150002',
        Name: 'kelly McCrory',
        QBShipdate: '08/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'STD',
        QBDeliveryPhone: '630-367-8448',
        QBTracking: ''
    },
    {
        QBInvoice: '150003',
        Name: 'Linda Englund',
        QBShipdate: '05/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '203-963-9428',
        QBTracking: 'WBC-125'
    },
    {
        QBInvoice: '150004',
        Name: 'Frances Badger',
        QBShipdate: '03/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'STD',
        QBDeliveryPhone: '508-206-0722',
        QBTracking: ''
    },
    {
        QBInvoice: '150005',
        Name: 'Tasha Tapia',
        QBShipdate: '02/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '201-905-4664',
        QBTracking: 'WBC-127'
    },
    {
        QBInvoice: '150006',
        Name: 'Samantha Southard',
        QBShipdate: '01/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '707-271-9412',
        QBTracking: 'WBC-128'
    },
    {
        QBInvoice: '150007',
        Name: 'James Fenske',
        QBShipdate: '10/08/2021',
        QBPaymentStatus: '3',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '618-234-6400',
        QBTracking: 'WBC-124'
    },
];

$(document).ready(function () {
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
                targets: [1,2,3,4,5,6,7,8],
                className: 'text-center'
            }
          ],
        'order': [[1, 'asc']]

    });


    // Add event listener for opening and closing details
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

$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);
})
function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}
