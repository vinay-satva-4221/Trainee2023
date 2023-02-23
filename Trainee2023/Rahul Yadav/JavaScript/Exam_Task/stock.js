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
            ['', 'C100', '12/08/2021', 'WareHouse', 'Kenneth', '12/08/2021', 'lorem hello', ''],
            ['scajb', 'cjbsaj']
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
                    { title: ' Stock Name' },
                    { title: 'ETA Date' },
                    { title: 'Stock Location' },
                    { title: 'Created By' },
                    { title: 'Created Date' },
                    { title: 'Notes' },
                    { title: 'Action' },
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



        //Dashboard
        var dataSet = [
            ['ZK-08-X2P', '15000', '0', '0'],
            ['BW-01-Q-M', '', '0', '1'],
            ['BW-01-XL-G', "3", '2', '1'],
            ['BW-01-S-M', "<button class='popoverButton' data-toggle='popover'>1</button>", '0', '0'],
        ];
        //PopOver
        $("#table_div_part").DataTable({
            data: dataSet,
            drawCallback: function () {
                $('.popoverButton').popover({
                    "html": true,
                    trigger: 'manual',
                    placement: 'left',
                    "content": function () {
                        return "<div><input type='text'></div>";
                    }
                })
            },
            columns: [
                { title: 'Part Number' },
                { title: 'InVoice#' },
                { title: 'Ordered' },
                { title: 'Notes' },
                { title: '' },
            ],
        });






        // function showdata() {
        //     var list;
        //     if (localStorage.getItem("partlist") == null) {
        //         list = [];
        //     } else {
        //         list = JSON.parse(localStorage.getItem("partlist"));
        //     }
        //     var html = "";
        //     // list.forEach(function (element, index) {
        //     //     html += "<tr>";
        //     //     html += "<td>" + (index + 1) + "</td>";
        //     //     html += "<td>" + element.name + "</td>";
        //     //     html += "<td>" + element.mobile + "</td>";
        //     //     html += "<td>" + colors + "</td>";
        //     //     html +=
        //     //         '<td><button onclick="deleteData( ' +
        //     //         index +
        //     //         ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
        //     //         index +
        //     //         ')" class= "btn btn-warning m-2">Edit</button></td>';

        //     //     html += "</tr>";
        //     // });
        //     // document.getElementById("root").innerHTML = html;

        // }


        
        $(function () {
            $('input[name="birthday"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');

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