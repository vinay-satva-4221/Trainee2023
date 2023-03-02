$(document).ready(function () {

    $("#AddNavbar").load("./navbar.html");
    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        createStockTable();
        //window.location.replace("dashboard.html");
    }
    else {
        window.location.replace("./login.html");
    }
    var table;

    let PartData = [];
    function createStockTable() {
        function format(d) {
            int_rownumber = 1;
            let dynamicChildRow = '';
            if (d.Parts && d.Parts.length > 0) {
                dynamicChildRow += '<table class="table table-responsive p-5" id="partTable">';
                dynamicChildRow += '<thead class=" fw-normal"><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Notes</th><th>Action</th></tr></thead>';
                dynamicChildRow += '<tbody>';
                d.Parts.forEach((partdetail, index) => {
                    dynamicChildRow += '<tr><td>' + index + '</td><td>' + partdetail.partnumber + '</td><td>' + partdetail.ordred + '</td><td>' + partdetail.ordred + '</td>' +
                        '<td>' + partdetail.notes + '</td>' +
                        '<td>' + '<button type="button" class="btn-close" aria-label="Close"></button>' + '</td>'
                    '</tr>';
                });

                dynamicChildRow += '</tbody></table>';
            }
            return dynamicChildRow;
        }
        let localData = localStorage.getItem('stockandparts');
        let localArray = JSON.parse(localData);
        console.log(localArray);
        //var dataSet = localArray.push(...loggedData)
        console.log(localArray)

        table = $("#stocktable").DataTable({

            "order": [],
            "dom": 'rtip',
            columnDefs: [{
                "defaultContent": "-",
                "targets": "_all",

            },

            { "orderable": false, "targets": [3, 4, 5] },
            { "orderable": true, "targets": [0, 1, 2] }],
            language: {
                "info": "Items _START_ to _END_ of _TOTAL_ total",
                paginate: {
                    next: '&#62',
                    previous: '&#60'
                }
            },
            data: localArray,
            bInfo: true,
            columns:

                [
                    {
                        data: "StockName", title: "Stock Name", className: "dt-control",
                        orderable: false
                    },
                    { data: "ETADate", title: "ETA Date", orderable: false },
                    { data: "StockStatus", title: "Stock Location", orderable: false },
                    { data: "CreatedBy", title: "Created By", orderable: false },
                    {
                        data: DataTable.render.datetime('MM/DD/YYYY'),
                        keyInput: false, title: "Created Date", orderable: false
                    },
                    {
                        data: "null", title: "Action", className: "dt-center editor-edit",
                        defaultContent: '<i class="bi bi-pencil-fill text-secondary fw-bolder stockeditbtn fs-6"/> <i class="bi bi-clock-history text-secondary fw-bolder fs-6"/>',
                    },
                ],

        });
        $('#txtSearch').keyup(function () {
            table.search($(this).val()).draw();   // this  is for customized searchbox with datatable search feature.
        })
        $("#stocktable tbody").on("click", "td.dt-control", function () {
            var tr = $(this).closest("tr");
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass("shown");
            } else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass("shown");
            }
        });
        $('#stocktable tbody').on('click', 'td.editor-edit', function () {

           
            console.log((table.row(this).data()));
            var data = table.row($(this).parents('tr')).data();
            var index = table.row($(this).parents('tr')).index();

            // Populate AddStockModal with data
            $("#stockName").val(data.StockName);
            $("#etaDate").val(data.ETADate);

            $('input[name="btnradio"][value="' + data.StockStatus + '"]').prop('checked', true);


            if (data.Parts && data.Parts.length > 0) {


                let dynamicTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th><th></th></thead><tbody>";
                data.Parts.forEach(function (PartData) {
                    dynamicTR += ("<tr>" + "<td>" + PartData.partnumber + "</td>" + "<td>" + PartData.invoice + "</td>" + "<td>" + PartData.ordred + "</td>" + "<td>" + PartData.notes + "</td>" +
                        "<td class='text-end'><button type='button' class='btn-close' aria-label='Close'></button></td></tr>");
                });
                dynamicTR += "</tbody>";
                console.log(dynamicTR)
                $('#partTable').html(dynamicTR);

            }

            Parts = data.Parts;
            // Show AddStockModal
            $('#stockModal').modal('show');

            // Handle click on Save Changes button
            $("#saveStock").unbind('click').click(function () {
                // Get form data
                var StockName = $("#stockName").val();
                var ETADate = $("#etaDate").val();
                var StockStatus = $('input[name="btnradio"]:checked').val();
                var CreatedBy = "02/22/2001";
                //   var createddate = "08/25/2000";
                //   var action = "";

                var StockDataObject = {
                    CreatedBy: CreatedBy,
                    StockName: StockName,
                    ETADate: ETADate,
                    StockStatus: StockStatus,
                    Parts: PartData,

                };
                var StockData = JSON.parse(localStorage.getItem("stockandparts")) || [];
                StockData[index] = StockDataObject;
                localStorage.setItem("stockandparts", JSON.stringify(StockData));
                $('#saveStock').modal('hide');
                location.reload(true);
            });

        });


    }

    $('#AddNewSNum').on("click", function () {


        // $('#partnumber').val();
        // $('#ordred').val();
        // $('#notes').val();
        if ($('#partnumber').val() == '' || $('#ordred').val() == '' || $('#notes').val() == '') {
            swal("Error!", "Please enter all the details", "error");
        }
        else {
            $("#PartModal").hide();
            var invoice = Math.floor(100000 + Math.random() * 900000);
            PartData.push({
                partnumber: $('#partnumber').val(),
                ordred: $('#ordred').val(),
                notes: $('#notes').val(),
                invoice: invoice,
            })
            console.log(PartData);
            //$('#AddNewSNum').model('hide');

            let dynamicTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th><th></th></thead><tbody>";
            for (let i = 0; i < PartData.length; i++) {
                dynamicTR += "<tr>" + "<td>" + PartData[i].partnumber + "</td>" + "<td>" + PartData[i].invoice + "</td>" + "<td>" + PartData[i].ordred + "</td>" + "<td>" + PartData[i].notes + "</td>" +
                    "<td class='text-end'><button type='button' class='btn-close' aria-label='Close'></button></td></tr>"
            }
            dynamicTR += "</tbody>";
            console.log(dynamicTR)
            $('#partTable').html(dynamicTR);

        }

    });

    $("#ordred").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $("#stockForm").validate({
        // in 'rules' user have to specify all the constraints for respective fields

        rules: {

            stockName: {
                required: true,
            },
            etaDate: {
                required: true,
                date: true
            },
            btnradio: {
                required: true,
            },


        },
        messages: {
            stockName: {
                required: "Please enter stock name",
            },
            etaDate: {
                required: "Please enter ETA Date",
                date: "Please enter valid date"
            },
            btnradio: {
                required: "Please select stock status",
            }
        }
    });
    var form = $("#stockForm");
    form.validate();
    $('#saveStock').click(function () {
        var result = form.valid();
        console.log(result);

        if (result == false || PartData.length == 0) {

            swal("Error!", "Please enter all the details", "error");
            if (result == true && PartData.length == 0) {
                swal("Error!", "Please enter part details", "error");
            }
        }
        else {

            addDataToLocal();

        }
    })
    $('input[name="etaDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }

    });
    $('input[name="etaDate"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY'));
    });
    $('input[name="etaDate"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
    //$('#etaDate').val('');
    $('#etaDate').click(function () {


        //datevalidation
        $("#etaDate").on("keydown blur", function (e) {
            IsNumeric(this, e.keyCode);
        });

        var isShift = false;
        var seperator = "/";
        function IsNumeric(input, keyCode) {

            if ($("#etaDate").val() == "") {
                //$(".dateError").html("Please Enter Date(MM/DD/YYYY)")
                $('.error').val('');
            }

            if (keyCode == 16) {
                isShift = true;
            }
            //Allow only Numeric Keys.
            if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
                if ((input.value.length == 2 || input.value.length == 5) && keyCode != 8) {
                    input.value += seperator;
                }

                return true;
            }
            else {

                $('#etaDate').val('');
                return false;

            }
        };

    })

    function addDataToLocal() {

        let loginData = JSON.parse(localStorage.getItem('LoggedInUser'));
        var createdBy = loginData.find(
            x => x.UserName);

        let localData = localStorage.getItem('stockandparts');
        console.log($("input[name='btnradio']:checked").val());
        if (localData) {
            let localArray = JSON.parse(localData);
            let myId = localArray.length - 1;
            myId = localArray.map(x => x.id)[myId];
            const obj = {
                id: myId + 1,
                CreatedBy: createdBy.UserName,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: ($("input[name='btnradio']:checked").val()),
                Parts: PartData,
            };

            localArray.push(obj);
            localStorage.setItem('stockandparts', JSON.stringify(localArray));
            // loadDataFromLocal();
            table.row.add(obj).draw();
        }
        else {
            const arryObj = [];
            const obj = {
                id: 1,
                CreatedBy: createdBy.UserName,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: ($("input[name='btnradio']:checked").val()),
                Parts: PartData,
            };
            arryObj.push(obj);
            maxId = localStorage.setItem('stockandparts', JSON.stringify(arryObj));
            table.row.add(obj).draw();
        }
    }

})
