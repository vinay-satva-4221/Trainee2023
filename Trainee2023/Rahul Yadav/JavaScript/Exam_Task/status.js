$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {


        //Display name in Navbar
        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);



        function format(d) {
            // `d` is the original data object for the row
            return (
                '<table class ="border" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                '<tr>' +
                '<td>Full name:</td>' +
                '<td>' +
                d.name +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extension number:</td>' +
                '<td>' +
                d.extn +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extra info:</td>' +
                '<td>And any further details here (images etc)...</td>' +
                '</tr>' +
                '</table>'
            );
        }

        datasets = [
            ['', '150000', 'Kenneth', '12/08/2021', '<span class="alert alert-primary"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>','WBC-123'],
            ['', '150001', 'James', '10/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">','WBC-124'],
            ['', '150002', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>',''],
            ['', '150003', 'Kenneth', '12/08/2021', '<span class="alert alert-danger"><i class="bi bi-x"></i>unPaid</span>', 'STD', '617-235-7627','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >','WBC-123'],
            ['', '150004', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '617-235-7627','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>','WBC-125'],
            ['', '150005', 'Kenneth', '12/08/2021', '<span class="alert alert-warning"><i class="bi bi-exclamation-circle"></i>Paiding Approval</span>', 'STD', '617-235-7627','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >',''],
            ['', '150006', 'Kenneth', '12/08/2021', '<span class="alert alert-success"><i class="bi bi-check"></i>Paid</span>', 'Shipped', '201-905-4664','<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">','WBC-126'],
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
                    { title: 'Name' },
                    { title: 'QB Ship date' },
                    { title: 'QB Payment Status' },
                    { title: 'QB status' },
                    { title: 'QB Delivery Phone' },
                    { title: 'Called' },
                    { title: 'Tracking' },
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