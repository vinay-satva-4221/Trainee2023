if (localStorage.getItem('LogedinUser') !== null) {
    var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
    $("#username").html(logedinUser[0].Name);

    function format(d) {
        // `d` is the original data object for the row
        return (
            '<table class="table table-display table-sm  bg-light ">' +
            '<thead class="bg-light childtable rounded">' +
            '<tr>' +
            '<th >#</th>' +
            ' <th>Part Number</th>' +
            '<th scope="col">Stock Location</th>' +
            '<th  class="rightalign">Action</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody class="table-group-divider">' +
            '<tr>' +
            '<td >1</td>' +
            '<td>WB-01-S-M</td>' +
            '<td>warehouse</td>' +
            '<td class="rightalign"><i class="bi bi-x actiontd"></i></td>' +
            '</tr>' +
            '<tr>' +
            '<td scope="row">2</td>' +
            '<td>Jacob</td>' +
            '<td>Thornton</td>' +
            '<td class="rightalign"><i class="bi bi-x actiontd "></i></td>' +
            '</tr>' +
            '<tr>' +
            '<td scope="row">3</td>' +
            '<td >Larry the Bird</td>' +
            '<td>Thornton</td>' +
            '<td class="rightalign"><i class="bi bi-x actiontd"></i></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>'
        );
    }

    datasets = [
        ['150001', 'James', '10/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-124'],
        ['150000', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>&nbsp;Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', 'WBC-123'],
        ['150002', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', ''],
        ['150003', 'Kenneth', '12/08/2021', '<span class="alert alert-danger"><i class="bi bi-x" ></i>Unpaid</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', 'WBC-123'],
        ['150006', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '201-905-4664', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-126'],
        ['150004', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', 'WBC-125'],
        ['150005', 'Kenneth', '12/08/2021', '<span class="alert warningalert alert-warning"><i class="bi bi-exclamation-circle"  ></i> Pending Approval</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', ''],
        ['150006', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '201-905-4664', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-126'],
        ['150001', 'James', '10/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-124'],
        ['150005', 'Kenneth', '12/08/2021', '<span class="alert warningalert alert-warning"><i class="bi bi-exclamation-circle"></i> Pending Approval</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', ''],
        ['150001', 'James', '10/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-124'],
        ['150003', 'Kenneth', '12/08/2021', '<span class="alert alert-danger"><i class="bi bi-x"></i>Unpaid</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', 'WBC-123'],
    ]

    $(document).ready(function () {
        var table = $('#table_div1').DataTable({
            data: datasets,
            info: "Items _START_ to _END_ of _TOTAL_ total",
            language: {
                info: "Items _START_ to _END_ of _TOTAL_ total",
                paginate: {
                    next: '&#62',
                    previous: '&#60'
                }
            },
            columnDefs: [
                { orderable: true, className: "reorder", targets: 0 },
                { orderable: false, targets: "_all" },
                {
                    className: "dt-left",
                    targets: [0],
                },
                { width: "14%", targets: [0] },
            ],
            columns: [
                { title: ' QB Invoice#', className: 'dt-control', orderable: true, },
                { title: 'Name', orderable: false, className: 'TextCenter', },
                { title: 'QB Ship date', orderable: false, className: 'TextCenter' },
                { title: 'QB Payment Status', orderable: false, className: 'TextCenter' },
                { title: 'QB status', orderable: false, className: 'TextCenter' },
                { title: 'QB Delivery Phone', orderable: false, className: 'TextCenter' },
                { title: 'Called', orderable: false, className: 'TextCenter' },
                { title: 'Tracking', orderable: false, className: 'TextCenter' },
            ],
            order: [[1, 'asc']],
        });

        var table = $("#table_div1").DataTable();
        $("#datatablesearch").on("keyup", function () {
            table.search(this.value).draw();
        });

        // Add event listener for opening and closing details
        $('#table_div1 tbody').on('click', 'td', function () {
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

        $("#logout").click(function () {
            localStorage.removeItem("LogedinUser");
            window.location.replace("logic.html");
        });
    });
}
else {
    window.location.href = "logic.html"
}  