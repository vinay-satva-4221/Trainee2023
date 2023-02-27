$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {


        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);

        function format(d) {
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

        datasets = [
            ['', 'C100', '12/08/2021', 'WareHouse', 'Kenneth', '12/08/2021'],
            ['', 'C1111', '12/08/2021', 'WareHouse', 'Kenneth', '12/08/2021'],
        ]

        $(document).ready(function () {
            var table = $('#table_div').DataTable({
                data: datasets,
                columns: [
                    {
                        className: 'dt-control',
                        orderable: false,
                        data: null,
                        defaultContent: '',
                    },
                    { title: ' QB Invoice#' },
                    { title: 'Name', orderable: false, className: 'TextCenter' },
                    { title: 'Created By', orderable: false, className: 'TextCenter' },
                    { title: 'Created Date', orderable: false, className: 'TextCenter' },
                    { title: 'Action', orderable: false, className: 'TextCenter' },
                ],
                order: [[1, 'asc']],
            });

            // Add event listener for opening and closing details
            $('#table_div tbody').on('click', 'td.dt-control', function () {
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



    } else {
        window.location.href = "log.html"
    }
});  