$(document).ready(function () {
    $("#AddNavbar").load("./navbar.html");
    var loggedData = localStorage.getItem('LoggedInUser');
    let loginData = JSON.parse(loggedData);
    var createdBy = loginData.find(
        x => x.UserName);
    var partsAssignedToStock = [];
    if (loggedData) {
        createAssignmentTable();
        //window.location.replace("dashboard.html");
    }
    else {
        window.location.replace("./login.html");
    }
    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        var customerInvoice = [
            { customer: 'Keneth Woodard', invoiceNum: '15000' },
            { customer: 'Keneth Woodard', invoiceNum: '15001' },
            { customer: 'Keneth Woodard', invoiceNum: '15005' },
            { customer: 'Keneth Woodard', invoiceNum: '15008' },
            { customer: 'John', invoiceNum: '16001' },
            { customer: 'John', invoiceNum: '16005' },
            { customer: 'John', invoiceNum: '16002' },
            { customer: 'Kelly', invoiceNum: '180018' },
            { customer: 'Kelly', invoiceNum: '180018' },

        ];
        $("#customer").change(function () {

            $("#quickbookInvoice").html("<option selected disabled>Choose invoice</option>");
            const invoice = customerInvoice.filter(m => m.customer == $("#customer").val());
            invoice.forEach(element => {
                const option = "<option val='" + element.invoiceNum + "'>" + element.invoiceNum + "</option>";
                $("#quickbookInvoice").append(option);
            });

        });

        var stockData = JSON.parse(localStorage.getItem('stockandparts'));

        var selectOptions = '';
        for (i = 0; i < stockData.length; i++) {

            selectOptions += '<option value="' + stockData[i].StockName + '">' + stockData[i].StockName + '</option>';
        }
        $("#stockname").append(selectOptions).on('change', function () {

            var selected = $(this).find('option:selected').val();

            //$("#parts").html("<option selected disabled>Choose parts</option>");
            const parts = stockData.find(m => m.StockName == selected).PartData;
            console.log(parts)
            $("#parts").html("");
            parts.forEach(element => {

                const option = "<option val='" + element.partnumber + "'>" + element.partnumber + "</option>";
                $("#parts").append(option);
            });


        });

        $('.partnumbers').select2();
    }
    else {
        window.location.replace("./login.html");
    }

    $('#addPartsToStock').click(function () {

        console.log($(".partnumbers").val());
        var allparts = ($(".partnumbers").val());
        var partnum = allparts.toString().replaceAll(',','|');
        partsAssignedToStock.push({
            StockName: $('#stockname').val(),
            PartNumbers: partnum,
            //PartNumbers: ($(".partnumbers").val()),

        })
        console.log(partsAssignedToStock);


        let dynamicTR = "<thead><th>#</th><th>Stock</th><th>Parts</th><th class='text-end'>Action</th></thead><tbody>";
        for (let i = 0; i < partsAssignedToStock.length; i++) {
            dynamicTR += "<tr>" + "<td>" + i + "</td>" + "<td>" + partsAssignedToStock[i].StockName + "</td>" + "<td>" + partsAssignedToStock[i].PartNumbers
                + "</td>" +
                "<td class='text-end'><button type='button' class='btn-close DeleteParts' aria-label='Close' ></button></td></tr>"
        }
        dynamicTR += "</tbody>";
        console.log(dynamicTR)
        $('#partTable').html(dynamicTR);

    })
    function AddassignmentdataToLocal() {

        let localData = localStorage.getItem('Assignment');
        var currentdate = new Date();
        var CreatedDate = (currentdate.getMonth()+1)+"/"+currentdate.getDate()+"/"+currentdate.getFullYear();
        //var CreatedDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
        if (localData) {
            let localArray = JSON.parse(localData);
            // let myId = localArray.length - 1;
            // myId = localArray.map(x => x.id)[myId];
            const obj = {
                CreatedBy: createdBy.UserName,
                Name: $('#customer').val(),
                CreatedDate: CreatedDate,
                QBInvoice: $('#quickbookInvoice').val(),
                PartData: partsAssignedToStock,
            };

            localArray.push(obj);
            localStorage.setItem('Assignment', JSON.stringify(localArray));

            table.row.add(obj).draw();
        }
        else {
            const arryObj = [];
            const obj = {

                CreatedBy: createdBy.UserName,
                Name: $('#customer').val(),
                CreatedDate:  new Date(),
                QBInvoice:  $('#quickbookInvoice').val(),
                PartData: partsAssignedToStock,
            };
            arryObj.push(obj);
            maxId = localStorage.setItem('Assignment', JSON.stringify(arryObj));
            table.row.add(obj).draw();
        }
    }
    function createAssignmentTable() {
        let localData = localStorage.getItem('Assignment');
        let localArray = JSON.parse(localData);
        console.log(localArray);
        //var dataSet = localArray.push(...loggedData)
        console.log(localArray)

        table = $("#assignedparttable").DataTable({

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
            { "orderable": false, "targets": [0, 1, 2, 3, 4] }],
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
                        data: "QBInvoice", title: "QB Invoice#", className: "dt-control",
                        orderable: false, 'max-width': '197px'
                    },
                    { data: "Name", title: "Name", orderable: false, 'max-width': "181px", className: "rowclickable" },
                    { data: "CreatedBy", title: "Created By", orderable: false, 'max-width': "181px", className: "rowclickable" },
                    {
                        data: "CreatedDate",
                        keyInput: false, title: "Created Date", orderable: false, 'max-width': "212px", className: "rowclickable"
                    },
                    {
                        data: "null", title: "Action", className: "dt-center ",
                        defaultContent: '<i class="bi bi-pencil-fill text-secondary fw-bolder edit stockeditbtn fs-6"/> <i class="bi bi-trash3-fill text-secondary fw-bolder fs-6"/>',
                    },
                ],

        });
    }
    function format(d) {
        
        int_rownumber = 1;
        let dynamicChildRow = '';
        if (d.PartData && d.PartData.length > 0) {
            dynamicChildRow += '<div class="px-3"><div class="table-responsive border rounded"><table class="table rounded p-0 m-0 w-100 h-100" id="childpartTable">';
            dynamicChildRow += '<thead class=" fw-normal"><tr><th>#</th><th>Stock</th><th>Parts</th><th class="text-end">Action</th></tr></thead>';
            dynamicChildRow += '<tbody>';

            d.PartData.forEach((partdetail, index) => {
                let i = index + 1;
                dynamicChildRow += '<tr><td>' + i + '</td><td>' + partdetail.StockName + '</td><td>' + partdetail.PartNumbers + '</td>'+
                    '<td>' + `<button type="button" class="btn-close float-end" aria-label="Close"></button>` + '</td>'
                '</tr>';
            });

            dynamicChildRow += '</tbody></table></div></div>';
        }
        return dynamicChildRow;
    }
    $("#assignedparttable tbody").on("click", "td.dt-control", function () {
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
    $('#txtSearch').keyup(function () {
        table.search($(this).val()).draw();
        // this  is for customized searchbox with datatable search feature.
      })
    const input = document.querySelector('input[type="search"]');
    input.addEventListener("search", () => {
        table.search(input.value).draw();
        // console.log(`The term searched for was ${}`);
    });
    $('#saveAssignments').click(function () {


        

        $('#assignmentModal').modal("hide");
        // $('#stockModal').on('hidden.bs.modal', function () {
        //     $('.modal-backdrop').remove();
        // })


        AddassignmentdataToLocal();
        //resetForm();



    })
    $('#newAssignment').click(function(){
        resetFormDate();
    })
    function resetFormDate(){
        $('#customer').val('');
        $('#quickbookInvoice').val('');
        $('#stockname').val('');
        $('#parts').val('');
      
        $('#partTable').html('');


    }
});  