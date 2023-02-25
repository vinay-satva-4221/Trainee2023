$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {

        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);

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
            ['', '150000', 'Kenneth', '12/08/2021', '<span class="alert alert-primary"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', 'WBC-123'],
            ['', '150001', 'James', '10/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-124'],
            ['', '150002', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', ''],
            ['', '150003', 'Kenneth', '12/08/2021', '<span class="alert alert-danger"><i class="bi bi-x"></i>unPaid</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', 'WBC-123'],
            ['', '150004', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>', 'WBC-125'],
            ['', '150005', 'Kenneth', '12/08/2021', '<span class="alert alert-warning"><i class="bi bi-exclamation-circle"></i>Paiding Approval</span>', 'STD', '617-235-7627', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >', ''],
            ['', '150006', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '201-905-4664', '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">', 'WBC-126'],
        ]

        $(document).ready(function () {
            var table = $('#table_div1').DataTable({
                data: datasets,
                columns: [
                    {
                        className: 'dt-control',
                        orderable: false,
                        data: null,
                        defaultContent: '',
                    },
                    { title: ' QB Invoice' },
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

            // Add event listener for opening and closing details
            $('#table_div1 tbody').on('click', 'td.dt-control', function () {
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

        $("#logout").click(function () {
            localStorage.removeItem("LogedinUser");
            window.location.replace("log.html");
        });

        $('.sorting').removeClass('sorting')

        $('[data-toggle="popover"]').popover()

    }
    else {
        window.location.href = "log.html"
    }
})  