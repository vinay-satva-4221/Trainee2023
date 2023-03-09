
var partDetails = [];
var stockDetails = [];
var tableData;
let Usernameget = JSON.parse(localStorage.getItem("details"));
console.log("Usernameget", Usernameget);
$("#Username").html(Usernameget[0].Name);
function logout() {
    window.location = "Login.html"
    localStorage.clear();
}

var editstockdetails = false;

$(document).ready(function () {
    debugger


    // $.validator.addMethod("uniqueStockName", function(value, element) {

    // }, "This stockname is already taken.");


    $("#stockform").validate({
        errorClass: 'msg',
        rules: {
            stockname: {
                required: true,
                // uniqueStockName: true
                
            },
        },
        messages: {
            stockname: {
                required: "Please provide a stockname",
            },
        },
    })
    $("#Add_part_number").validate({
        errorClass: 'msg',
        rules: {
            partnumber: {
                required: true,
                
            },
            order:{
                required: true,
            },
            notes:{
                required:true,
            }
        },
        messages: {
            partnumber: {
                required: "Please provide a partnumber",
            },
            order:{
                required: "Please provide a order",
            },
            notes:{
                required: "Please provide a notes",
            },
        },
        submitHandler: function (form) {
            form.submit();
          }
    })

    $("#newitemadded").click(function () {
        document.getElementById("stockform").reset();
    });
    var invoice_number = 1;
    debugger;
    
    $("#inner_model").click(function () {
        // check if all conditions are true
        if ($("#Add_part_number").valid() == true && partnumber != '' && order != '' && notes != '') {
            var partnumber = $("#partnumber").val();
            var invoicenumber = invoice_number++;
            var order = $("#order").val();
            var notes = $("#notes").val();
            
            console.log("note", notes)
            if (partDetails == null) {
                partDetails = [];
            }
            partDetails.push({
                partnumber: partnumber,
                invoicenumber: invoicenumber,
                order: order,
                notes: notes,
            });
            var addedtable = "<tr><td>" + partnumber + "</td><td>" + invoicenumber + "</td><td>" + order + "</td><td>" + notes + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>";
            $("#innermodel_table tbody").append(addedtable);
            $('#popupModal').modal('hide');
            console.log(invoicenumber)
        }
    });
    
    var usernameget = Usernameget[0].Name;
    console.log(usernameget)
    stockDetails = JSON.parse(localStorage.getItem("stockList"));

    console.log("stockDetails", stockDetails);
    var button = document.getElementById("newitemadded");

    tableData = $('#stock_table').DataTable({
        data: stockDetails,
        fnInitComplete: function () {
            $('#stock_table_length').html('<b><h3>&nbsp;Stock</h3></b>');
            $('#stock_table_filter').prepend(button);
        },
        paging: true,
        binfo: true,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: "stockname", title: 'Stock Name', orderable: false, className: "text-center" },
            { data: "eta_date", title: 'ETA Date', orderable: false, className: "text-center" },
            { data: "stock_status", title: 'Stock Location', orderable: false, className: "text-center" },
            { data: "usernameget", title: 'Created By', orderable: false, className: "text-center" },
            { data: "getcurrentdate", title: 'Created Date', orderable: false, className: "text-center" },
            { data: "notes", title: 'Notes', orderable: false, className: "text-center" },
            {
                orderable: false,
                data: null,
                defaultContent: '<i id="em" class="edit fa-solid fa-pen "></i>'+'<i class="history   fa fa-history"></i>',
                title: "Action"
            }
        ],
        columnDefs: [
            {
                "defaultContent": "-",
                "targets": "_all"
            },
        ],
        order: [[1, 'asc']],
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here',
            info: "items _START_ to _END_ of _TOTAL_ items",
            paginate: {

                previous: "<",
                next: ">",
            },
        },
    })
    $('#SearchBox').keyup(function () {
        table.search($(this).val()).draw(); 
    });
    $('#stock_table tbody').on('click', 'td.dt-control', function () {
        debugger
        var tr = $(this).closest('tr');
        var row = tableData.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
    $("#innermodel_table_data").on('click', '.delete', function () {
        $(this).closest('tr').remove();
    });
    $('#stock_table tbody').on('click', '.history', function () {
        $('#historyModal').modal('show');

      })

    // $("#stock_table tbody").on('click', '.deletechildrow', function () {
    //     let stockList = JSON.parse(localStorage.getItem('stockList'));
    //     let index = 1;
    //     stockList[0].partlist.splice(index, 1);
    //     localStorage.setItem('stockList', JSON.stringify(stockList));
        
    //     $(this).closest('tr').remove();
    // });

    // $("#stock_table tbody").on('click', '.deletechildrow', function () {
    //     let stockList = JSON.parse(localStorage.getItem('stockList'));
    //     let stockIndex = $(this).closest('tr').index()-1; // Get the index of the parent row
    //     let partIndex = $(this).closest('td').index()-1; // Get the index of the child cell
        
    //     stockList[stockIndex].partlist.splice(partIndex, 1); // Remove the selected index from partlist
    //     // if (stockList[stockIndex].partlist.length === 0) {
    //     //   stockList.splice(stockIndex, 1); // Remove the parent row if partlist is empty
    //     // }
        
    //     localStorage.setItem('stockList', JSON.stringify(stockList));
    //     $(this).closest('tr').remove();
    //   });
    $("#stock_table tbody").on('click', '.deletechildrow', function () {
        debugger
        let stockList = JSON.parse(localStorage.getItem('stockList'));
        console.log("partlist",stockList)
        let stockIndex = $(this).closest('tr').index(); 
        let partIndex = $(this).closest('td').index(); 
        if (stockList[stockIndex].partlist) 
        { 
          stockList[stockIndex].partlist.splice(partIndex, 1);
          localStorage.setItem('stockList', JSON.stringify(stockList));
        }
        $(this).closest('tr').remove();
      });
    // $("#stock_table tbody").on('click', '.deletechildrow', function (element) {
    //     debugger
    //     var stockList = JSON.parse(localStorage.getItem("stockList"));
        
        
    //     var stockID = $(element).attr('data-stock-id');
    //     var StockIndex = stockList.findIndex(x => x.stockname == stockID);
    //     var PartIndex = $(element).attr('data-part-index');
    //     console.log("Part index", PartIndex);
    //     console.log(stockList[PartIndex].Partlist)
    //     console.log("Stock index", StockIndex);
        
    //     stockList[StockIndex].Partlist.splice(PartIndex, 1);
      
    //     console.log(stockList);
      
    //     localStorage.setItem("stockList", JSON.stringify(stockList));
      
    //     var tr = $(element).closest("tr")
    //     tr.remove()
    // });



    $("#add_part").click(function () {
        $("#partnumber").val("");
        $("#order").val("");
        $("#notes").val("");
    })
    $("#em").click(() => {
        debugger
    });
    $('#stock_table tbody').on('click', '.edit', function () {
        debugger
        editstockdetails = true;
        var data = tableData.row($(this).parents('tr')).data();
        console.log(data);
        var index = tableData.row($(this).parents('tr')).index();
        console.log(index);
        $("#stockname").val(data.stockname);
        console.log("s", data.stockname);
        $("#date").val(data.eta_date);
        $('input[name="btnradio"][value="' + data.stock_status + '"]').prop('checked', true);
        console.log("status",data.stock_status);
        console.log("invoice",data.invoicenumber);
        $('#stockModal').modal('show');

        partDetails  = JSON.parse(localStorage.getItem("stockList"));
        console.log("partDetails ",partDetails);

    
        // for (var i = 0; i < partDetails.length; i++) {
        //     for (var j = 0; j < partDetails[i].partlist.length; j++) {
        //         var partnumber = partDetails[i].partlist[j].partnumber;
        //         // var invoice = partDetails[i].partlist[j].invoice;
        //         var order =  partDetails[i].partlist[j].order;
        //         var notes = partDetails[i].partlist[j].notes;
        //         var addedtable = "<tr><td>" + partnumber + "</td><td>" + order + "</td><td>" + notes + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>";
        //         $("#innermodel_table tbody").append(addedtable);
        //     }
        // }
        if(data.partlist && data.partlist.length>0){
            // data.partlist.forEach(function(partlist){
            //     $("#innermodel_table_data").append
                
            // })

            data.partlist.forEach(function (partlist) {
                $("#innermodel_table_data").append("<tr><td>" + partlist.partnumber + "</td><td>" + partlist.invoicenumber + "</td><td>" + partlist.order + "</td><td>"
                  + partlist.notes + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>");
              });
        }
        partDetails = data.partlist;

        
        $("#savechange").click(function () {
            if (editstockdetails) {
                console.log(partDetails)
                var stockname = $('#stockname').val();
                var eta_date = $('#date').val();
                var stock_status = $('input[name="btnradio"]:checked').next('label').text();
                // var stock_status=$('input[name="btnradio"]:checked').val();
                var usernameget = Usernameget[0].Name;
                //Getting current date
                var getcurrentdate = new Date(Date.now()).toLocaleString().split(',')[0];
                console.log(getcurrentdate)
                var notes = $("#notes").val();
                stockList = JSON.parse(localStorage.getItem("stockList")) || [];
            
                if (stockDetails == null) {
                    stockDetails = [];
                }
                stockDetails.push({
                    stockname: stockname,
                    eta_date: eta_date,
                    stock_status: stock_status,
                    usernameget: usernameget,
                    getcurrentdate: getcurrentdate,
                    partDetails: partDetails,
                    notes: notes
                });
                console.log(partDetails)
                var stock = {
                    "stockname": stockname,
                    "eta_date": eta_date,
                    "stock_status": stock_status,
                    "usernameget": usernameget,
                    "getcurrentdate": getcurrentdate,
                    "partlist": partDetails,
                    "notes": notes
                };
                stockList[index] = stock;
                console.log("StockList", stockList);
                debugger
                localStorage.setItem("stockList", JSON.stringify(stockList));
                location.reload(true)
            }
        });
    });

    // var editIndex = null;


    // $('#example tbody').on('click', '#em', function () {
    //     var $row = $(this).closest('tr');
    //     var data = tableData.row($row).data();
    //     console.log(data);
    //     var index = tableData.row($row).index();
    //     console.log(index);
    //     $("#stockname").val(data.stockname);
    //     $("#date").val(data.eta_date);
    //     console.log(data.stock_status)
    //     $('#stockModal').modal('show');
    //     $("#savechange").click(function () {
    //         debugger
    //         data.stockname = $("#stockname").val();
    //         tableData.row($row).data(data).draw();
    //     });
    // });
    // document.getElementById("date").addEventListener("mousedown", function() {
    //     this.value = "";
    //     this.type = "date";
    //   });

    $(function() {
        $('input[name="date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxYear: parseInt(moment().format('YYYY'),10)
        }, function(start, end, label) {
          var years = moment().diff(start, 'years');
        });
      });

      $(".btn-close").click(function(){
        location.reload(true);
    });
});
function stockdatastore() {
  
    if (!editstockdetails) {
        debugger
        
        console.log(partDetails)
        if($("#stockform").valid()==true)
        {
        var stockname = $('#stockname').val();
        var eta_date = $('#date').val();
        var stock_status = $('input[name="btnradio"]:checked').next('label').text();
        var usernameget = Usernameget[0].Name;
        //Getting current date
        var getcurrentdate = new Date(Date.now()).toLocaleString().split(',')[0];
        console.log(getcurrentdate)
        var notes = $("#notes").val();
        let stockList = JSON.parse(localStorage.getItem("stockList")) || [];
        if (stockDetails == null) {
            stockDetails = [];
        }
        stockDetails.push({
            stockname: stockname,
            eta_date: eta_date,
            stock_status: stock_status,
            usernameget: usernameget,
            getcurrentdate: getcurrentdate,
            partDetails: partDetails,
            notes: notes
        });
        console.log(partDetails)
        var stock = {
            "stockname": stockname,
            "eta_date": eta_date,
            "stock_status": stock_status,
            "usernameget": usernameget,
            "getcurrentdate": getcurrentdate,
            "partlist": partDetails,
            "notes": notes
        };
        stockList.push(stock);
        console.log("StockList", stockList)
        tableData.row.add(['', stockname, eta_date, stock_status, usernameget, getcurrentdate, notes]).draw();
        localStorage.setItem("stockList", JSON.stringify(stockList));
        console.log("part", partDetails)
        location.reload(true)
    }
 }
}
function format(d) {
    let HTML = '';
    if (d.partlist && d.partlist.length > 0) {
        HTML += '<table class="text-center" style="width:100%;">';
        HTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Part No</th><th class="text-center">Order No</th><th class="text-center">Notes</th><th class="text-center">Action</th></tr></thead>';
        HTML += '<tbody>';
        d.partlist.forEach((partlist, index) => {
            const rowadd = index + 1;
            HTML += '<tr><td>' + rowadd + '</td><td>' + partlist.partnumber + '</td><td>' + partlist.order + '</td><td>' + partlist.notes + '</td><td><button ><i class="fa fa-close deletechildrow"></i></button></td></tr>';
        });
        HTML += '</tbody>';
        HTML += '</table>';
    }
    return HTML;
}

