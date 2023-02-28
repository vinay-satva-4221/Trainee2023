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
        '<thead  style="background-color: rgb(238, 234, 238);">' +
        '<tr>' +
        '<th>#</th>' +
        '<th>Part Number</th>' +
        '<th>Stock Location</th>' +
        '<th>Action</th>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>BW-01-S-M</td>' +
        '<td>Warehouse</td>' +
        '<td>Close</td>' +
        '</tr>' +
        '<tr>' +
        '<td>2</td>' +
        '<td>AT-01-BLK</td>' +
        '<td>C-101</td>' +
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
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(230, 241, 232); border-color:rgb(230, 241, 232); color:green"><i class="fa fa-check"></i>Paid</span>',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '617-235-7647',
        QBTracking: 'WBC-123'
    },
    {
        QBInvoice: '150001',
        Name: 'James Fenske',
        QBShipdate: '10/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(230, 241, 232); border-color:rgb(230, 241, 232); color:green"><i class="fa fa-check"></i>Paid</span>',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '618-234-6400',
        QBTracking: 'WBC-124'
    },
    {
        QBInvoice: '150002',
        Name: 'kelly McCrory',
        QBShipdate: '08/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(230, 241, 232); border-color:rgb(230, 241, 232); color:green"><i class="fa fa-check"></i>Paid</span>',
        QBStatus: 'STD',
        QBDeliveryPhone: '630-367-8448',
        QBTracking: ''
    },
    {
        QBInvoice: '150003',
        Name: 'Linda Englund',
        QBShipdate: '05/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(245, 227, 227); border-color:rgb(245, 227, 227); color:red"><i class="fa-solid fa-xmark"></i>Unpaid</span>',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '203-963-9428',
        QBTracking: 'WBC-125'
    },
    {
        QBInvoice: '150004',
        Name: 'Frances Badger',
        QBShipdate: '03/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(230, 241, 232); border-color:rgb(230, 241, 232); color:green"><i class="fa fa-check"></i>Paid</span>',
        QBStatus: 'STD',
        QBDeliveryPhone: '508-206-0722',
        QBTracking: ''
    },
    {
        QBInvoice: '150005',
        Name: 'Tasha Tapia',
        QBShipdate: '02/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(219, 241, 223); border-color:rgb(219, 241, 223); color:rgb(233, 185, 54);"><i class="fa fa-circle-exclamation"></i>Pending Approval</span>',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '201-905-4664',
        QBTracking: 'WBC-127'
    },
    {
        QBInvoice: '150006',
        Name: 'Samantha Southard',
        QBShipdate: '01/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(230, 241, 232); border-color:rgb(230, 241, 232); color:green"><i class="fa fa-check"></i>Paid</span>',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '707-271-9412',
        QBTracking: 'WBC-128'
    },
    {
        QBInvoice: '150007',
        Name: 'James Fenske',
        QBShipdate: '10/08/2021',
        QBPaymentStatus: '<span class="alert alert-primary px-2 p-1" style="background-color:rgb(230, 241, 232); border-color:rgb(230, 241, 232); color:green"><i class="fa fa-check"></i>Paid</span>',
        QBStatus: 'Shipped',
        QBDeliveryPhone: '618-234-6400',
        QBTracking: 'WBC-124'
    },
];

$(document).ready(function () {
    var table = $('#Statustable').DataTable({
        "fnInitComplete": function () {
            $('#Statustable_length').html('<h5>Status</h5>');
        },
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
            { data: 'Name', "sortable": true },
            { data: 'QBShipdate', "sortable": true },
            {
                data: 'QBPaymentStatus', "sortable": false, 
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
                // targets: [1,2,3,4,5,6,7,8],
                // className: 'text-left', 
            }
          ],
          language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here...',
            paginate: {
                previous: "<",
                next: ">"
            },
        },
        'order': [[1, 'asc']]
    });
    $('#myCustomSearchBox').keyup(function() {
        table.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    })


    // Add event listener for opening and closing details
    $('#Statustable tbody').on('click', 'td.dt-control', function () {
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
