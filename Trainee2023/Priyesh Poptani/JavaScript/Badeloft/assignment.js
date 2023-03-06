var partDetails = []; 

$(function(){
    $("#navbar").load("navbardata.html");
});

function logout(){
    window.location.replace("badeloft.html")
    localStorage.clear();
  }
  //Row 1 cascading

$(document).ready(function(){
    //  datatable pagination and prepend modal and heading
    var modal=document.getElementById('modalpopup');
    var table = $('#example').DataTable({

        language: {

            info: "items _PAGE_ to _PAGES_ of _PAGES_ total ",
            paginate:{
                next:'&#62',
                previous:'&#60'
            },
            searchPlaceholder: "Search here..."
            
        },
        
        "dom": '<"toolbar">frtip',
        bFilter: true, bInfo: true,
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>Assignment</h4>');
           $('#example_filter').prepend(modal);
         },

         });
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

    
    var stockData = JSON.parse(localStorage.getItem('stockList'));
    console.log(stockData)
    var selectOptions = '';
    for (i = 0; i < stockData.length; i++) {

        selectOptions += '<option value="' + stockData[i].sname + '">' + stockData[i].sname + '</option>';
    }
    $("#stockname").append(selectOptions).on('change', function () {

        var selected = $(this).find('option:selected').val();

        //$("#parts").html("<option selected disabled>Choose parts</option>");
        const parts = stockData.find(m => m.sname == selected).partDetails;
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


            console.log($(".partnumbers").val());
            var allparts = ($(".partnumbers").val());
            var partnum = allparts.toString().replaceAll(',', '|');
            partsAssignedToStock.push({
                StockName: $('#sname').val(),
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

    // function AddassignmentdataToLocal() {

    //     let localData = localStorage.getItem('Assignment');


    //     if (localData) {
    //         let localArray = JSON.parse(localData);
    //         // let myId = localArray.length - 1;
    //         // myId = localArray.map(x => x.id)[myId];
    //         const obj = {
    //             CreatedBy: createdBy.UserName,
    //             Name: $('#customer').val(),
    //             CreatedDate: CreatedDate,
    //             QBInvoice: $('#quickbookInvoice').val(),
    //             PartData: partsAssignedToStock,
    //         };

    //         localArray.push(obj);
    //         localStorage.setItem('Assignment', JSON.stringify(localArray));

    //         table.row.add(obj).draw();
    //     }
    //     else {
    //         const arryObj = [];
    //         const obj = {

    //             CreatedBy: createdBy.UserName,
    //             Name: $('#customer').val(),
    //             CreatedDate: CreatedDate,
    //             QBInvoice: $('#quickbookInvoice').val(),
    //             PartData: partsAssignedToStock,
    //         };
    //         arryObj.push(obj);
    //         maxId = localStorage.setItem('Assignment', JSON.stringify(arryObj));
    //         table.row.add(obj).draw();
    //     }
    // }

    
});