// Jquery
$(document).ready(function () {
    // Dynamic adding of name
    var user = JSON.parse(localStorage.getItem("user"));
    var jName = user[0].Admin;
    console.log(jName);
    $(".dynamicN").html(jName);

    // Dynamic adding image
    var jImg = user[0].Image;
    console.log(jImg);
    $(".adminImg").attr("src", user[0].Image);


});

// window.load(onD());
window.onload = (event) => {
    if (localStorage.getItem("user") == null) {
        window.location.replace("Login.html");
    }
};

//Logout
function logout() {
    localStorage.removeItem('user')
    window.location.replace("Login.html");
}


function format(d) {
    // `d` is the original data object for the row
    return (
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th >#</th>' +
        ' <th>Part Number</th>' +
        '<th scope="col">Stock Location</th>' +
        '<th scope="col">Action</th>' +
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
        '<td scope="row">2</td>' +
        '<td>Jacob</td>' +
        '<td>Thornton</td>' +
        '<td><i class="bi bi-x"></i></td>' +
        '</tr>' +
        '<tr>' +
        '<td scope="row">3</td>' +
        '<td >Larry the Bird</td>' +
        '<td>Thornton</td>' +
        '<td><i class="bi bi-x"></i></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>'
    );
}

datasets = [
    [ '150000', 'Kenneth', '12/08/2021', '<span class="alert alert-primary"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', 'WBC-123'],
    [ '150001', 'James', '10/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-124'],
    [ '150002', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', ''],
    [ '150003', 'Kenneth', '12/08/2021', '<span class="alert alert-danger"><i class="bi bi-x"></i>unPaid</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', 'WBC-123'],
    [ '150004', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', 'WBC-125'],
    [ '150005', 'Kenneth', '12/08/2021', '<span class="alert alert-warning"><i class="bi bi-exclamation-circle"></i>Pending Approval</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', ''],
    [ '150006', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '201-905-4664', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-126'],
]
$(document).ready(function () {
    var table = $('#tab').DataTable({
        data: datasets,
        columns: [
            {
                className:'dt-control',
                 title: 'QB Invoice' ,
            },
            
            { title: 'Name', orderable: false},
            { title: 'QB Ship date', orderable: false },
            { title: 'QB Payment Status', orderable: false },
            { title: 'QB status', orderable: false },
            { title: 'QB Delivery Phone', orderable: false },
            { title: 'Called', orderable: false },
            { title: 'Tracking', orderable: false },
        ],
        order: [[1, 'asc']],
    });

    // Add event listener for opening and closing details
    $('#tab tbody').on('click', 'td.dt-control', function () {
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