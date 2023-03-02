$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {


        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);

        function format(d) {
            let dynamicChildRow = '';
            if (d.partiteam && d.partiteam.length > 0) {
                dynamicChildRow += '<table class:"table table-display childtable bg-light  table-sm " style="width:100%">';
                dynamicChildRow += '<thead><tr><th>#</th><th>Part Number</th><thOrdered</th><th>Assigned</th><th>Notes</th></tr></thead>';
                dynamicChildRow += '<tbody>';
                d.partiteam.forEach((partiteam, index) => {
                    dynamicChildRow += '<tr><td>' + (1 + index) + '</td><td>' + partiteam.partno + '</td><td>' + partiteam.order + '</td><td>' + partiteam.notes + '</td>td' + "<td class='tdAction'><button type='button' class='btn btn-sm btn-delete'>&#x2715;</button></td></tr>";
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
                language: {

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
                    { width: "15%", targets: [0] },
                    { width: "25%", targets: [5] },
                ],
                columns: [
                    { data: 'stockname', title: ' Stock Name', className: 'dt-left dt-control', orderable: false, },
                    { data: 'date', title: 'ETA Date', orderable: false, className: 'TextCenter' },
                    { data: 'stockstatus', title: 'Stock Location', orderable: false, className: 'TextCenter' },
                    { data: 'username', title: 'Created By', orderable: false, className: 'TextCenter' },
                    { data: 'createddate', title: 'Created Date', orderable: false, className: 'TextCenter' },
                    { data: 'partiteam[0].notes', title: 'Notes', orderable: false, className: 'TextCenter' },
                    { data: null, title: 'Action', orderable: false, className: 'editmodel', defaultContent: '<i class="bi bi-pencil-fill"  style="font-size: 1rem; color: gray;"></i> &nbsp; <i class="bi bi-clock-history" style="font-size: 1rem; color: gray;"></i>' },
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


            $('#table_div1 tbody').on('click', 'td.editmodel', function () {
                let tablerowdata = table.row(this).data();
                console.log('row data', tablerowdata);

                $('#stockname').val(tablerowdata.stockname);
                $('#etadate').val(tablerowdata.date);
                // $('#stockstatus').val(tablerowdata.stockstatus);
                // editpartsdetail=tablerowdata.partiteam;

                if (tablerowdata.partiteam && tablerowdata.partiteam.length > 0) {
                    tablerowdata.partiteam.forEach(function (partiteam, index) {
                        $('#root').append('<tr><td>' + (1 + index) + '</td><td>' + partiteam.partno + '</td><td>' + partiteam.order + '</td><td>' + partiteam.notes + '</td></tr>');
                    })
                }
                partiteam = tablerowdata.partiteam;

                $('#stockModal').modal('show');

                $("#save_changes").unbind('click').click(function () {
                    // Get form data
                    var stockName = $("#StockName").val();
                    var etaDate = $("#ETAdate").val();
                    var selectedValue = $('input[name="btnradio"]:checked').val();
                    var createdby = "Kenneth";
                    var createddate = "08/25/2000";
                    var action = "";
                    // Update object at the specified index in the array
                    var StockDataObject = {
                        stockName: stockName,
                        etaDate: etaDate,
                        selectedValue: selectedValue,
                        partData: partdata,
                        createdby: createdby,
                        createddate: createddate,
                        action: action
                    };
                    var StockData = JSON.parse(localStorage.getItem("StockData")) || [];
                    StockData[index] = StockDataObject;
                    localStorage.setItem("StockData", JSON.stringify(StockData));
                    $('#AddStockModal').modal('hide');
                    location.reload(true);
                });


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
                    html += "<td class='tdAction'><button type='button' class='btn btn-sm btn-delete'>&#x2715;</button></td>";
                    html += "</tr>"
                });
                document.getElementById("root").innerHTML = html;
                document.getElementById("partform").reset();
                $('#partModal').modal('hide');
            }
        };

        $("#root").on("click", ".btn-delete", function () {
            $(this).closest("tr").remove();
        });


        // document.getElementById("delete").onclick=function(){
        //     $(this).closest("tr").remove();
        // };

        // $("#stockform").validate({
        //     rules: {
        //         stockname: {
        //             required: true,
        //         },
        //         etadate: {
        //             required: true,
        //         },
        //     },
        //     messages: {
        //         stockname: {
        //             required: "Enter the stockname",
        //         },
        //         etadate: {
        //             required: "Enter the etadate",
        //         },
        //     },
        //     submitHandler: function (stockform) {
        //         stockform.submit();
        //     },
        // });
        // var form = $("#stockform");
        // form.validate();
        document.getElementById("savestock").onclick = function () {
            var result = form.valid();
            if (result == true) {
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
            }

        };

        $(function () {
            $('input[name="etadate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                maxYear: 3030
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