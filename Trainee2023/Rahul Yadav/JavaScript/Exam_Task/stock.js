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
            ['', 'C100', '12/08/2021', 'WareHouse', 'Kenneth', '12/08/2021', 'lorem hello', ''],
            ['', 'C1111', '12/08/2021', 'WareHouse', 'Kenneth', '12/08/2021', 'lorem hello', ''],

        ]
        $(document).ready(function () {
            var table = $('#table_div1').DataTable({
                data: partiteam,
                columns: [
                    {
                        className: 'dt-control',
                        orderable: false,
                        data: null,
                        defaultContent: '',
                    },
                    { title: ' Stock Name' },
                    { title: 'ETA Date', orderable: false, className: 'TextCenter' },
                    { title: 'Stock Location', orderable: false, className: 'TextCenter' },
                    { title: 'Created By', orderable: false, className: 'TextCenter' },
                    { title: 'Created Date', orderable: false, className: 'TextCenter' },
                    { title: 'Notes', orderable: false, className: 'TextCenter' },
                    { title: 'Action', orderable: false, className: 'TextCenter' },
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

        $("#partform").validate({
            rules: {
                partnumber: {
                    required: true,
                },
                ordered: {
                    required: true,
                },
            },
            messages: {
                partnumber: {
                    required: "Enter your PartNumber",
                },
                ordered: {
                    required: "Enter your Ordered",
                },
            },
            submitHandler: function (partform) {
                partform.submit();
            },
        });
        var form = $("#partform");
        form.validate();
        var partiteam = new Array;
        document.getElementById("savepart").onclick = function () {
            var result = form.valid();
            if (result == true) {
                var partno = document.getElementById("partno").value;
                var order = document.getElementById("order").value;
                var notes = document.getElementById("notes").value;

                var obj = {
                    partno: partno,
                    order: order,
                    notes: notes
                }
                partiteam.push(obj)

                var html = "";
                partiteam.forEach(function (element) {
                    html += "<tr>";
                    html += "<td>" + element.partno + "</td>";
                    html += "<td>" + element.order + "</td>";
                    html += "<td>" + element.notes + "</td>";
                    html += "<td>" + '<i class="bi bi-x"></i>' + "</td>";
                    html += "</tr>"
                });
                document.getElementById("root").innerHTML = html;
                document.getElementById("partform").reset();
                $('#Modal2').modal('hide');
            }


        };

        document.getElementById("save").onclick = function () {
            var stockname = document.getElementById("stockname").value;
            var date = document.getElementById("date").value;
            var stockstatus = document.querySelector('input[name="btnradio"]:checked').value;
            var obj1 = {
                stockname: stockname,
                date: date,
                stockstatus: stockstatus,
                partiteam: partiteam
            }
            var stockdata = new Array;
            if (localStorage.getItem("stockdata") == null) {
                stockdata = [];
            } else {
                stockdata = JSON.parse(localStorage.getItem("stockdata"));
            }
            stockdata.push(obj1);
            localStorage.setItem("stockdata", JSON.stringify(stockdata));
            document.getElementById("stockform").reset();
            $('#exampleModal').modal('hide');

        };



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