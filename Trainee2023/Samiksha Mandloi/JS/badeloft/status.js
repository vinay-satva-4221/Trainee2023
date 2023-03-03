var loginUser = JSON.parse(localStorage.getItem('loginuser'));
var username = loginUser.name;
document.getElementById("user").innerHTML ="Welcome"+ "<br>"+"<b>"+ username+ "</b>";
function logout() {
    localStorage.removeItem("loginuser");
    location.replace("badeloft.html");
}
//    $("#example").DataTable();

function format(d) {
    // `d` is the original data object for the row
    return (
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th >#</th>' +
        ' <th>Part Number</th>' +
        '<th >Stock Location</th>' +
        '<th >Action</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody class="table-group-divider">' +
        '<tr>' +
        '<td >1</td>' +
        '<td>WB-01-S-M</td>' +
        '<td>warehouse</td>' +
        '<td><i class="bi bi-x"></i></td>' +
        '</tr>' +
        '<tr>' +
        '<td >2</td>' +
        '<td>Jacob</td>' +
        '<td>Thornton</td>' +
        '<td><i class="bi bi-x"></i></td>' +
        '</tr>' +
        '<tr>' +
        '<td >3</td>' +
        '<td >Larry the Bird</td>' +
        '<td>Thornton</td>' +
        '<td><i class="bi bi-x"></i></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>'
    );
}

$(document).ready(function () {
    var data = [
        ['', '150000', 'Kenneth', '12/08/2021', '<span class="alert alert-primary" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" checked>', 'WBC-123'],
        ['', '150001', 'James Fenske', '10/08/2021', '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>', 'Shipped', '618-234-6400', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >', 'WBC-124'],
        ['', '150002', 'Kelly McCrory', '08/08/2021', '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>', 'STD', '630-367-8448', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" checked>', ''],
        ['', '150003', 'Linda Englund', '05/08/2021', '<span class="alert alert-danger" style="padding:5px;"><i class=" fa fa-times" aria-hidden="true""></i>UnPaid</span>', 'Shipped', '203-963-9428', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" >', 'WBC-125'],
        ['', '150004', 'Frances Badger', '03/08/2021', '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>', 'STD', '508-206-0722', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" checked >', ''],
        ['', '150005', 'Tasha Tapia', '02/08/2021', '<span class="alert alert-warning" style="padding:5px;"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>Pending Approval</span>', 'Shipped', '201-905-4664', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" checked>', 'WBC-127'],
        ['', '150006', 'Samantha Southard', '01/08/2021', '<span class="alert alert-success" style="padding:5px;"><i class="fa fa-check"></i>Paid</span>', 'Shipped', '707-271-9421', '<input class="form-check-input" type="checkbox" value = "" id="flexCheckchecked" checked>', 'WBC-128'],
    ];


    var table = $('#example').DataTable({

        data: data,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { title: 'QB_Invoice' },
            { title: 'Name', orderable: false, className: 'TextCenter' },
            { title: 'QB Ship date', orderable: false, className: 'TextCenter' },
            { title: 'QB Payment Status', orderable: false, className: 'TextCenter' },
            { title: 'QB Status', orderable: false, className: 'TextCenter' },
            { title: 'QB Delivery Phone', orderable: false, className: 'TextCenter' },
            { title: 'Called', orderable: false, className: 'TextCenter' },
            { title: 'QB Tracking', orderable: false, className: 'TextCenter' },



        ],
        order: [[1, 'asc']],
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here...'
        },

        "fnInitComplete": function () {
            $('div.dataTables_length').html('<h2>Status</h2>');
        },

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
    //   });
});
