
$(document).ready(function () {

    $("#AddNavbar").load("./navbar.html");
    //getting loggedin username
    var loggedData = localStorage.getItem('LoggedInUser');
    let loginData = JSON.parse(loggedData);
    var createdBy = loginData.find(
        x => x.UserName);

    if (loggedData) {
        createStockTable();
        //window.location.replace("dashboard.html");
    }
    else {
        window.location.replace("./login.html");
    }
    var isEdit = false;

    var table;
    var Parts = [];
    //adding data to localstorage
    function addDataToLocal() {

        let localData = localStorage.getItem('stockandparts');
        console.log($("input[name='btnradio']:checked").val());
        if (localData) {
            let localArray = JSON.parse(localData);
            // let myId = localArray.length - 1;
            // myId = localArray.map(x => x.id)[myId];
            const obj = {

                CreatedBy: createdBy.UserName,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: ($("input[name='btnradio']:checked").val()),
                PartData: Parts,
            };

            localArray.push(obj);
            localStorage.setItem('stockandparts', JSON.stringify(localArray));

            table.row.add(obj).draw();
        }
        else {
            const arryObj = [];
            const obj = {

                CreatedBy: createdBy.UserName,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: ($("input[name='btnradio']:checked").val()),
                PartData: Parts,
            };
            arryObj.push(obj);
            maxId = localStorage.setItem('stockandparts', JSON.stringify(arryObj));
            table.row.add(obj).draw();
        }
    }
    //child row data
    function format(d) {
        int_rownumber = 1;
        let dynamicChildRow = '';
        if (d.PartData && d.PartData.length > 0) {
            dynamicChildRow += '<div class="px-3"><div class="table-responsive border rounded"><table class="table rounded p-0 m-0 w-100 h-100" id="childpartTable">';
            dynamicChildRow += '<thead class=" fw-normal"><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Notes</th><th>Action</th></tr></thead>';
            dynamicChildRow += '<tbody>';

            d.PartData.forEach((partdetail, index) => {
                let i = index + 1;
                dynamicChildRow += '<tr><td>' + i + '</td><td>' + partdetail.partnumber + '</td><td>' + partdetail.ordred + '</td><td>' + partdetail.ordred + '</td>' +
                    '<td>' + partdetail.notes + '</td>' +
                    '<td>' + `<button type='button' class='btn-close' aria-label='Close' id='childTabledeleteBtn' data-stock-id='${d.StockName}' onclick='deleteMainTableRow(this)'  data-part-index='${index}' ></button>` + '</td>'
                '</tr>';
            });

            dynamicChildRow += '</tbody></table></div></div>';
        }
        return dynamicChildRow;
    }

    //creating stockdata table
    function createStockTable() {
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
            { 'max-width': '197px', 'targets': 0 },
            { 'max-width': '181px', 'targets': 1 },
            { 'max-width': '235px', 'targets': 2 },
            { 'max-width': '181px', 'targets': 3 },
            { 'max-width': '212px', 'targets': 4 },
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
                        orderable: false, 'max-width': '197px'
                    },
                    { data: "ETADate", title: "ETA Date", orderable: false, 'max-width': "181px", className: "rowclickable" },
                    { data: "StockStatus", title: "Stock Location", orderable: false, 'max-width': "235px", className: "rowclickable" },
                    { data: "CreatedBy", title: "Created By", orderable: false, 'max-width': "181px", className: "rowclickable" },
                    {
                        data: DataTable.render.datetime('MM/DD/YYYY'),
                        keyInput: false, title: "Created Date", orderable: false, 'max-width': "212px", className: "rowclickable"
                    },
                    
                    {
                        data: "null", title: "Action", className: "dt-center ",
                        render: function (data, type, row) {
                            return (
                               '<button type="button" class="bi bi-pencil-fill text-secondary fw-bolder edit stockeditbtn fs-6 border-0 bg-light"></button>' +
                               '<button type="button" class="bi bi-clock-history text-secondary fw-bolder fs-6 border-0 bg-light"></button>'
                            );
                         },
                        //defaultContent: '<i class="bi bi-pencil-fill text-secondary fw-bolder edit stockeditbtn fs-6"/> <i class="bi bi-clock-history text-secondary fw-bolder fs-6"/>',
                    },
                ],

        });
    }
    //searching in table
    $('#txtSearch').keyup(function () {
        table.search($(this).val()).draw();   // this  is for customized searchbox with datatable search feature.
    })
    //childrow open close
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
   
    $(".bi-clock-history").on("click", function () {
        $("#historyModal").modal("toggle");
     });
  
    //editing stockdata 
    $('#stocktable tbody').on('click', '.edit', function () {
        isEdit = true;
        console.log((table.row(this).data()));
        var data = table.row($(this).parents('tr')).data();
        var index = table.row($(this).parents('tr')).index();
       
        // Populate AddStockModal with data
        $("#stockName").val(data.StockName);
        $("#etaDate").val(data.ETADate);

        $('input[name="btnradio"][value="' + data.StockStatus + '"]').prop('checked', true);

        if (data.PartData && data.PartData.length > 0) {

            let dynamicTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th><th></th></thead><tbody>";
            data.PartData.forEach(function (part) {
                dynamicTR += ("<tr>" + "<td>" + part.partnumber + "</td>" + "<td>" + part.invoice + "</td>" + "<td>" + part.ordred + "</td>" + "<td>" + part.notes + "</td>" +
                    "<td class='text-end'><button type='button' class='btn-close DeleteParts' aria-label='Close'></button></td></tr>");
            });
            dynamicTR += "</tbody>";
            console.log(dynamicTR)
            $('#partTable').html(dynamicTR);

        }


        Parts = data.PartData;
        console.log(Parts)
        $(' #stocktitle').html("Edit Stock");
        // Show AddStockModal
        $('#stockModal').modal('show');
        // Handle click on Save Changes button
        $("#saveStock").click(function () {

            var updatedStockName = $("#stockName").val();
            var updatedETADate = $("#etaDate").val();
            var updatedStockStatus = $('input[name="btnradio"]:checked').val();
            //var updatedcreateddate = Date.now();


            var StockDataObject = {
                StockName: updatedStockName,
                ETADate: updatedETADate,
                StockStatus: updatedStockStatus,
                CreatedBy: createdBy.UserName,
                PartData: Parts,
            };
            var StockData = JSON.parse(localStorage.getItem("stockandparts")) || [];
            StockData[index] = StockDataObject;
            console.log(JSON.parse(localStorage.getItem("stockandparts")));
            localStorage.setItem("stockandparts", JSON.stringify(StockData));
            $("#stockModal").modal("hide");

        });


    });

    //adding new parts
    $('#AddNewSNum').on("click", function () {

        if ($('#partnumber').val() == '' || $('#ordred').val() == '' || $('#notes').val() == '') {
            swal("Error!", "Please enter all the details", "error");
        }
        else {
            $("#PartModal").hide();
            var invoice = Math.floor(100000 + Math.random() * 900000);
            Parts.push({
                partnumber: $('#partnumber').val(),
                ordred: $('#ordred').val(),
                notes: $('#notes').val(),
                invoice: invoice,
            })
            console.log(Parts);
            //$('#AddNewSNum').model('hide');

            let dynamicTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th><th></th></thead><tbody>";
            for (let i = 0; i < Parts.length; i++) {
                dynamicTR += "<tr>" + "<td>" + Parts[i].partnumber + "</td>" + "<td>" + Parts[i].invoice + "</td>" + "<td>" + Parts[i].ordred + "</td>" + "<td>" + Parts[i].notes + "</td>" +
                    "<td class='text-end'><button type='button' class='btn-close DeleteParts' aria-label='Close' ></button></td></tr>"
            }
            dynamicTR += "</tbody>";
            console.log(dynamicTR)
            $('#partTable').html(dynamicTR);

        }

    });
    //only numbers are allowed
    $("#ordred").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    $("#stockName").on("blur change", function () {

        var stocknamevalue = $(this).val();
        let localData = localStorage.getItem('stockandparts');
        let stockname = JSON.parse(localData);
        var uniqueStockName = stockname.find(
            x => x.StockName === stocknamevalue);
        if (uniqueStockName == undefined) {
            $('.errorforduplicate').html('');
            return true;

        }
        else {
            $('.errorforduplicate').html('Please enter unique stock name');
            return false;
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
                unique: "Please enter unique stock name",
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

    // $(document).on("click", ".cancelbtn", function () {
    //     $("#table2body").html("");
    //     $("#ETAdate").val("");
    //     $("#StockName").val("");
    // })
    $('#saveStock').click(function () {

        if (!isEdit) {
            var result = form.valid();
            console.log(result);

            if (Parts.length <= 0 || result == false) {

                swal("Error!", "Please enter all the details", "error");
                // if (result == false && Parts.length == 0) {
                //     swal("Error!", "Please enter part details", "error");
                // }
            }
            else {


                $('#stockModal').modal("hide");
                $('#stockModal').on('hidden.bs.modal', function () {
                    $('.modal-backdrop').remove();
                })


                addDataToLocal();
                //resetForm();
            }
        }

    })

    $('#txtSearch').trigger('search', function () {
        console.log($(this).val())
    })
    // reset all value in modal
    function resetForm() {
        $('#partnumber').val('');
        $('#ordred').val('');
        $('#notes').val('');

        $('#stockName').val('');
        $('#etaDate').val('');
        $("input[name='btnradio']:checked").val('');
        $('#partTable').html(null);
    }
    //deleting parts data from parttable 
    $("#partTable").on("click", ".DeleteParts", function () {
        if(Parts.length==1)
        {
            alert("Please have atleast one part")
        }
        else{
            
            console.log($(this).closest("tr").remove());
            Parts.splice(this, 1)
        }
       
    });
    //empty part data in modal
    $('#partnum').click(function () {
        $('#partnumber').val('');
        $('#ordred').val('');
        $('#notes').val('');
    })
    $('#newstock').click(function () {
        resetForm();
    })
    //search cross or clear button event
    const input = document.querySelector('input[type="search"]');
    input.addEventListener("search", () => {
        table.search(input.value).draw();
        // console.log(`The term searched for was ${}`);
    });


})

 // delete partdata from child row
 function deleteMainTableRow(element) {
    debugger
    var newStockModal = JSON.parse(localStorage.getItem("stockandparts"));
    
    
    var stockID = $(element).attr('data-stock-id');
    var StockIndex = newStockModal.findIndex(x => x.StockName == stockID);
    var PartIndex = $(element).attr('data-part-index');
    console.log("Part index", PartIndex);
    console.log(newStockModal[PartIndex].PartData)
    console.log("Stock index", StockIndex);
    
    newStockModal[StockIndex].PartData.splice(PartIndex, 1);
  
    console.log(newStockModal);
  
    localStorage.setItem("stockandparts", JSON.stringify(newStockModal));
  
    var tr = $(element).closest("tr")
    tr.remove()
   
  }

