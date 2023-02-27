$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {


        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);

        function format(d) {
            let dynamicChildRow = '';
            if (d.partiteam && d.partiteam.length > 0) {
                dynamicChildRow += '<table class:"table table-display childtable bg-light  table-sm border border-dark rounded" style="width:100%">';
                dynamicChildRow += '<thead><tr><th>#</th><th>Part Number</th><thOrdered</th><th>Assigned</th><th>Notes</th></tr></thead>';
                dynamicChildRow += '<tbody>';
                d.partiteam.forEach((partiteam, index) => {
                    dynamicChildRow += '<tr><td>' + (1 + index) + '</td><td>' + partiteam.partno + '</td><td>' + partiteam.order + '</td><td>' + partiteam.notes + '</td></tr>';
                });
                dynamicChildRow += '</tbody></table>';
            }
            return dynamicChildRow;
        }


        $(document).ready(function () {
            var a = JSON.parse(localStorage.getItem("stockdata"));
            console.log(a);
            var table = $('#table_div1').DataTable({
                data: a,
                columns: [
                    {
                        className: 'dt-control',
                        orderable: false,
                        data: null,
                        defaultContent: '',
                    },
                    { data: 'stockname', title: ' Stock Name' },
                    { data: 'date', title: 'ETA Date', orderable: false, className: 'TextCenter' },
                    { data: 'stockstatus', title: 'Stock Location', orderable: false, className: 'TextCenter' },
                    { data: 'username', title: 'Created By', orderable: false, className: 'TextCenter' },
                    { data: 'createddate', title: 'Created Date', orderable: false, className: 'TextCenter' },
                    { data: 'partiteam[0].notes', title: 'Notes', orderable: false, className: 'TextCenter' },
                    // { data: '', title: 'Action', orderable: false, className: 'TextCenter' },
                ],
                order: [[1, 'asc']],
            });

            var table = $("#table_div1").DataTable();
            $("#datatablesearch").on("keyup", function () {
                table.search(this.value).draw();
            });

            // Add event listener for opening and closing details
            $('#table_div1 tbody').on('click', 'td.dt-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row(tr);
                console.log(row);

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
                    // html += "<td>" + '<i class="bi bi-x"></i>' + "</td>";
                    html += "</tr>"
                });
                document.getElementById("root").innerHTML = html;
                document.getElementById("partform").reset();
                $('#partModal').modal('hide');
            }
        };

        document.getElementById("savestock").onclick = function () {
            var stockname = document.getElementById("stockname").value;
            var etadate = document.getElementById("date").value;
            var stockstatus = document.querySelector('input[name="btnradio"]:checked').value;
            var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
            var useridname = logedinUser[0].Name;
            var date = new Date().toLocaleDateString();
            console.log(useridname);
            var obj1 = {
                stockname: stockname,
                date: etadate,
                stockstatus: stockstatus,
                username: useridname,
                createddate: date,
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

            $('#stockModal').modal('hide');

        };

        $(function () {
            $('input[name="etadate"]').daterangepicker({
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