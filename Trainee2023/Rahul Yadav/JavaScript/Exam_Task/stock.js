if (localStorage.getItem('LogedinUser') !== null) {
    var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
    $("#username").html(logedinUser[0].Name);

    function format(d) {
        let dynamicChildRow = '';
        if (d.partiteam && d.partiteam.length > 0) {
            dynamicChildRow += '<table class:"table rounded p-0 m-0 w-100 h-100" id="childpartTable " style="width:100%">';
            dynamicChildRow += '<thead class=" fw-normal"><tr><th>#</th><th>Part Number</th><thOrdered</th><th>Assigned</th><th>Notes</th><th>Action</th></tr></thead>';
            dynamicChildRow += '<tbody>';
            d.partiteam.forEach((partiteam, index) => {
                dynamicChildRow += '<tr><td>' + (1 + index) + '</td><td>' + partiteam.partno + '</td><td>' + partiteam.order + '</td><td>' + partiteam.notes + '</td><td>' + '<button type="button" class="btn-close" aria-label="Close"></button>' + '</td></tr>';
            });
            dynamicChildRow += '</tbody></table>';
        }
        return dynamicChildRow;
    }


    $("#childpartTable").on("click", ".btn-close", function () {
        $(this).closest("tr").remove();
        partiteam.splice(this, 1)
    });

    var isEdit = false;
    $(document).ready(function () {
        var a = JSON.parse(localStorage.getItem("stockdata"));
        console.log(a);
        var table = $('#table_div1').DataTable({
            data: a,
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

        $('#table_div1 tbody').on('click', 'td', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);
            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('shown');
            } else {
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });

        $('#table_div1 tbody').on('click', '.editmodel', function () {
            isEdit = true;
            var rowdata = table.row($(this).parents('tr')).data();
            var index = table.row($(this).parents('tr')).index();
            $("#stockname").val(rowdata.stockname);
            $("#date").val(rowdata.date);
            $('input[name="btnradio"][value="' + rowdata.stockstatus + '"]').prop('checked', true);
            if (rowdata.partiteam && rowdata.partiteam.length > 0) {
                rowdata.partiteam.forEach(function (partiteam, index) {
                    $("#root").append('<tr><td>' + (1 + index) + '</td><td>' + partiteam.partno + '</td><td>' + partiteam.order + '</td><td>' + partiteam.notes + '</td></tr>');
                });
            }
            partiteam = rowdata.partiteam;
            $('#stockModal').modal('show');
            $("#savestock").click(function () {
                var stockname = document.getElementById("stockname").value;
                var etadate = document.getElementById("date").value;
                var stockstatus = document.querySelector('input[name="btnradio"]:checked').value;
                var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
                var useridname = logedinUser[0].Name;
                var date = new Date().toLocaleDateString();
                console.log(useridname);
                var objnew = {
                    stockname: stockname,
                    date: etadate,
                    stockstatus: stockstatus,
                    username: useridname,
                    createddate: date,
                    partiteam: partiteam
                }
                console.log(objnew);
                console.log(index);
                var stockdData = JSON.parse(localStorage.getItem("stockdata"));
                stockdData[index] = objnew;
                localStorage.setItem("stockdata", JSON.stringify(stockdData));
                $('#stockModal').modal('hide');
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
                    required: "This field is required",
                },
                ordered: {
                    required: "This field is required",
                },
            },
            submitHandler: function (partform) {
                partform.submit();
            },
        });
        var partform = $("#partform");
        partform.validate();
        var partiteam = new Array;
        document.getElementById("savepart").onclick = function () {
            var result = partform.valid();
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
            partiteam.splice(this, 1)
        });



        $("#stockform").validate({
            rules: {
                stockname: {
                    required: true,
                },
                etadate: {
                    required: true,
                },
            },
            messages: {
                stockname: {
                    required: "This field is required",
                },
                etadate: {
                    required: "This field is required",
                },
            },
            submitHandler: function (stockform) {
                stockform.submit();
            },
        });
        var stockform = $("#stockform");
        stockform.validate();
        var stockdata = new Array;
        document.getElementById("savestock").onclick = function () {
            if (!isEdit) {
                var result = stockform.valid();
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
            $('input[name="etadate"]').val('');
            $('input[name="etadate"]').attr("placeholder", "MM/DD/YYYY");
        });

        $("#logout").click(function () {
            localStorage.removeItem("LogedinUser");
            window.location.replace("log.html");
        });

        $('.sorting').removeClass('sorting')

    });
} else {
    window.location.href = "log.html"
}
