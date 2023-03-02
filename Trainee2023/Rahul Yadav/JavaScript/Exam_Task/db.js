$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {

        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);

        var dataSet = [
            ['Stock Location', '', '', "On Water", 'On Water', 'In Production'],
            ['ETA Date', '', '', "10/08/2021", '10/08/2021', '10/08/2021'],
            ['ZK-08-X2P', '1', '0', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>3</a>", '0', '0'],
            ['BW-01-Q-M', '', '0', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>2</a>", '0', '1'],
            ['BW-01-XL-G', '2', '1', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>3</a>", '2', '1'],
            ['BW-01-S-M', '1', '0', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>1</a>", '0', '0'],
            ['ZK-08-X2P', '3', '1', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>3</a>", '0', '0'],
            ['ZK-08-X2P', '1', '0', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>2</a>", '0', '0'],
            ['ZK-08-X2P', '2', '3', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>3</a>", '0', '0'],
            ['ZK-08-X2P', '1', '0', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>3</a>", '0', '0'],
            ['ZK-08-X2P', '2', '2', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>1</a>", '0', '0'],
            ['ZK-08-X2P', '1', '0', "<a href='#' data-toggle='popover' title='Assigned to' data-content='Some content inside the popover' style='text-decoration: none;'>3</a>", '0', '0'],
        ];

        var StockLocation = $.fn.dataTable.absoluteOrder(
            [{ value: 'Stock Location', position: 'top' },
            { value: 'ETA Date', position: 'top' }]);



        $("#table_div").DataTable({
            data: dataSet,
            language: {

                paginate: {
                    next: '&#62',
                    previous: '&#60'
                }
            },
            columnDefs: [


                { targets: 0, type: StockLocation },
                { orderable: true, targets: 0 },
                { orderable: false, targets: "_all" },


                { orderable: true, className: "reorder", targets: 0 },
                { orderable: false, targets: "_all" },
                {
                    className: "dt-center",
                    targets: [1, 2, 3, 4, 5],
                },
                {
                    className: "dt-left",
                    targets: [0],
                },
                {
                    width: "30%",
                    targets: [0],
                },
            ],
            columns: [
                { title: 'Part Number' },
                { title: 'In Warehouse', orderable: false, className: 'TextCenter' },
                { title: 'Available', orderable: false, className: 'TextCenter' },
                { title: 'C100', orderable: false, className: 'TextCenter' },
                { title: 'C101', orderable: false, className: 'TextCenter' },
                { title: 'C102', orderable: false, className: 'TextCenter' },
            ],
        });

        var table = $("#table_div").DataTable();

        $("#datatablesearch").on("keyup", function () {
            table.search(this.value).draw();
        });

        $('[data-toggle="popover"]').popover({
            html: true,
            content: function () {
                return $("#popover-content").html();
            },
        });


        $("#logout").click(function () {
            localStorage.removeItem("LogedinUser");
            window.location.replace("log.html");
        });



        $('[data-toggle="popover"]').popover()

    }
    else {
        window.location.href = "index.html"
    }
})  