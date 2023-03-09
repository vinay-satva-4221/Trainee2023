var SecondPartDetail = [];

function logout() {
  window.location.replace("login.html")
  localStorage.clear();
}
//Row 1 cascading
var partsAssignedToStock = [];
var isEdit = false;


$(document).ready(function () {
    createAssignmentTable();
    var GetName = JSON.parse(localStorage.getItem('Badeloft-Details'));
     var createdby  = GetName[0].username;
     console.log(createdby);
    var createdDate = new Date(Date.now()).toLocaleString().split(',')[0];
    //  datatable pagination and prepend modal and heading
   

    //cascading dropdown
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


    var stockData = JSON.parse(localStorage.getItem('StockDetails'));
    console.log(stockData)
    var selectOptions = '';
    for (i = 0; i < stockData.length; i++) {

        selectOptions += '<option value="' + stockData[i].sname + '">' + stockData[i].sname + '</option>';
    }
    $("#stockname").append(selectOptions).on('change', function () {

        var selected = $(this).find('option:selected').val();

        //$("#parts").html("<option selected disabled>Choose parts</option>");
        const parts = stockData.find(m => m.sname == selected).SecondPartDetail;
        console.log(parts);

        $("#parts").html("");

        parts.forEach(element => {

            const option = "<option val='" + element.partno + "'>" + element.partno + "</option>";
            console.log(option);
            $("#parts").append(option);
        });


    });

    $('.partnumbers').select2({
        placeholder: "Select a Part",
    });


    $('#addPartsToStock').click(function () {

        if ($(".partnumbers").val() == null || $(".partnumbers").val() == "") {
            alert('Please select parts')
        }
        else {
            debugger

            console.log($(".partnumbers").val());
            var allparts = ($(".partnumbers").val());
            var partnum = allparts.toString().replaceAll(',', '|');
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
                    "<td class='text-end'><button type='button' class='btn-close DeletePartsTable'  aria-label='Close' ></button></td></tr>"
            }
            dynamicTR += "</tbody>";
            console.log(dynamicTR)
            $('#partTable').html(dynamicTR);

        }
    })

    function AddassignmentdataToLocal() {

        let localData = localStorage.getItem('Assignment');


        if (localData) {
            let localArray = JSON.parse(localData);
            // let myId = localArray.length - 1;
            // myId = localArray.map(x => x.id)[myId];
            const obj = {
                CreatedBy: createdby,
                Name: $('#customer').val(),
                CreatedDate: createdDate,
                QBInvoice: $('#quickbookInvoice').val(),
                PartData: partsAssignedToStock,
            };

            localArray.push(obj);
            localStorage.setItem('Assignment', JSON.stringify(localArray));

            //table.row.add(obj).draw();
        }
        else {
            const arryObj = [];
            const obj = {

                CreatedBy: createdby,
                Name: $('#customer').val(),
                CreatedDate: createdDate,
                QBInvoice: $('#quickbookInvoice').val(),
                PartData: partsAssignedToStock,
            };
            arryObj.push(obj);
            maxId = localStorage.setItem('Assignment', JSON.stringify(arryObj));
            //table.row.add(obj).draw();
        }
    }

    function createAssignmentTable() {
        let localData = localStorage.getItem('Assignment');
        let localArray = JSON.parse(localData);
        console.log(localArray);
        //var dataSet = localArray.push(...loggedData)
        console.log(localArray)
        var modal = document.getElementById("modalpopup");

        table = $("#assignedparttable").DataTable({

            "order": [],

            columnDefs: [{
                "defaultContent": "-",
                "targets": "_all",

            },
            { 'max-width': '394px', 'targets': 0 },
            { 'max-width': '181px', 'targets': 1 },
            { 'max-width': '235px', 'targets': 2 },
            { 'max-width': '181px', 'targets': 3 },
            { 'max-width': '212px', 'targets': 4 },
            { "orderable": false, "targets": [0, 1, 2, 3, 4] }],
            language: {

                info: "items _PAGE_ to _PAGES_ of _PAGES_ total ",
                paginate: {
                    next: '&#62',
                    previous: '&#60',
                    bInfo:true,
                },
                search: "_INPUT_",
                searchPlaceholder: 'Search...',
            },
            "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function () {
                $('div.toolbar').html('<h4>Assignment</h4>');
                $('#assignedparttable_filter').prepend(modal);
            },

            data: localArray,
            bInfo: true,
            columns:
                [
                    { data: "QBInvoice", title: "QB Invoice#", className: "dt-control text-start" , orderable: false, "max-width": "394px"},
                    { data: "Name", title: "Name", orderable: false,  className: "rowclickable text-start" },
                    { data: "CreatedBy", title: "Created By", orderable: false, className: "rowclickable text-start" },
                    {data: "CreatedDate", keyInput: false, title: "Created Date", orderable: false, className: "rowclickable text-start" },
                    {
                        title: 'Action', orderable: false, className: "text-center",
                        data: null,
                        className: "dt-center",
                        defaultContent: '<i class="fa fa-pencil edit"/> <i class="fa fa-trash delete"/>',
                        orderable: false
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

            d.PartData.forEach((SecondPartDetail, index) => {
                let i = index + 1;
                dynamicChildRow += '<tr><td>' + i + '</td><td>' + SecondPartDetail.StockName + '</td><td>' + SecondPartDetail.PartNumbers + '</td>' +
                    '<td>' + `<button type='button' class='btn-close' aria-label='Close' id='childTabledeleteBtn' data-assignment-id='${d.QBInvoice}' onclick='deleteMainTableRow(this)'  data-part-index='${index}' ></button>` + '</td>'
                '</tr>';
            });

            dynamicChildRow += '</tbody></table></div></div>';
        }
        return dynamicChildRow;
    }

    
    //delete data of partTable
    $("#partTable").on("click", ".DeletePartsTable", function () {
        if(partsAssignedToStock.length==1)
        {
            alert("You can't delete last data")
        }
        else
        {
            console.log($(this).closest("tr").remove());
            partsAssignedToStock.splice(this, 1)
        }
       
    });

      //delete maintable row
      $('.delete').click(function () {
        var AssignedData = JSON.parse(localStorage.getItem("Assignment"));
        let Index = table.row($(this).parents('tr')).index();
        table.row(Index).remove().draw()
        AssignedData.splice(Index, 1)
        localStorage.setItem("Assignment", JSON.stringify(AssignedData));

    });


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

     //editing Assignment data 
     $('#assignedparttable tbody').on('click', '.edit', function () {
        isEdit = true;
        console.log((table.row(this).data()));
        var data = table.row($(this).parents('tr')).data();
        var index = table.row($(this).parents('tr')).index();
        var cust = $("#customer").val(data.Name);
       
        // Populate assignmentmodal with data
        cust.change();
        $("#quickbookInvoice").val(data.QBInvoice);
        // $("#stockname").val(data.StockName).change();
        // $("#parts").val(data.PartNumbers);

        if (data.PartData && data.PartData.length > 0) {

            let dynamicTR = "<thead><th>#</th><th>Stock</th><th>Part</th><th class='text-end'>Action</th></thead><tbody>";
            data.PartData.forEach(function (part, index) {
                var i = index + 1;
                dynamicTR += ("<tr>" + "<td>" + i + "</td>" + "<td>" + part.StockName + "</td>" + "<td>" + part.PartNumbers + "</td>" +
                    "<td class='text-end'><button type='button' class='btn-close DeletePartsTable' aria-label='Close'></button></td></tr>");
            });
            dynamicTR += "</tbody>";
            console.log(dynamicTR)
            $('#partTable').html(dynamicTR);

        }


        partsAssignedToStock = data.PartData;
        console.log(partsAssignedToStock)
        $('#assigntitle').html("Edit Assignment");
        // Show AddStockModal
        $('#AssignmentModal').modal('show');
        //Handle click on Save Changes button
        $("#saveAssignments").click(function () {

            var updatedCustomer = $("#customer").val();
            var updatedInvoice = $("#quickbookInvoice").val();

            var assignDataObject = {
                CreatedBy: createdby,
                Name: updatedCustomer,
                CreatedDate: createdDate,
                QBInvoice: updatedInvoice,
                PartData: partsAssignedToStock,
            };
            var assignData = JSON.parse(localStorage.getItem("Assignment")) || [];
            assignData[index] = assignDataObject;
            console.log(JSON.parse(localStorage.getItem("Assignment")));
            localStorage.setItem("Assignment", JSON.stringify(assignData));
            $("#assignmentModal").modal("hide");

        });

    });

    $('#saveAssignments').click(function () {
        if(!isEdit){
            $('#assignmentModal').modal("hide");
            AddassignmentdataToLocal();
        }
    });
});