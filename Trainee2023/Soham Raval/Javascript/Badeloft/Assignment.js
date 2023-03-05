
var partDetails = [];
var assignmentDetails = [];
var tableData;
let Usernameget = JSON.parse(localStorage.getItem("details"));
console.log("Usernameget", Usernameget);
$("#Username").html(Usernameget[0].Name);
function logout() {
    window.location = "Login.html"
    localStorage.clear();
}
var QBInvoice_number = 15000;
var editit = false;
$(document).ready(function () {
    debugger
    var nameget = Usernameget[0].Name;
    console.log(nameget)
    assignmentDetails = JSON.parse(localStorage.getItem("assignmentList"));
    console.log("b", assignmentDetails);
    var button = document.getElementById("newitemadded");
    tableData = $('#assignment_table').DataTable({
        data: assignmentDetails,
        fnInitComplete: function () {
            $('#assignment_table_length').html('<b><h3>&nbsp;Assignment</h3></b>');
            $('#assignment_table_filter').prepend(button);
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
            { data: function(row,type,set,meta){
                var qbinvoiceNumber = meta.row + 15000;
                return qbinvoiceNumber;
            }, title: 'QB Invoice#', orderable: false, className: "text-center" },
            { data: "nameget", title: 'Name', orderable: false, className: "text-center" },
            { data: "nameget", title: 'Created By', orderable: false, className: "text-center" },
            { data: "getcurrentdate", title: 'Created Date', orderable: false, className: "text-center" },
            {
                orderable: false,
                data: null,
                defaultContent: '<i id="em" class="edit  fa-solid fa-pen "></i>'+'<i class="history    fa fa-trash"></i>',
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

    const userdata = JSON.parse(localStorage.getItem("staticdata"));
    const userSelect = document.getElementById("select_customer");
    userdata.forEach(user => {
      const option = document.createElement("option");
      option.value = user.name;
      option.textContent = user.name;
      userSelect.appendChild(option);
    });

//for select stocknames
    const stockdata = JSON.parse(localStorage.getItem("stockList"));
    const stocknameSelect = document.getElementById("select_stockname");
    stockdata.forEach(user => {
      const option = document.createElement("option");
      option.value = user.stockname;
      option.textContent = user.stockname;
      stocknameSelect.appendChild(option);
    });

    //for select invoice
    const InvoiceSelect = document.getElementById("select_Invoice");
    stockdata.forEach(user => {
      const option = document.createElement("option");
      option.value = user.invoicenumber;
      option.textContent = user.invoicenumber;
      InvoiceSelect.appendChild(option);
    });

    // event change on stock change
//     stocknameSelect.change(function () {
//         debugger
//         var selectedStock = $(this).val();
//         var partSelect = $('#partnumber');
//         partSelect.empty();
//         partSelect.append($('<option>', { value: '', text: 'Choose Part Number' }));
//         if (selectedStock) {
//           var selectedStockData = StockList.find(function (user) {
//             return user.stockname === selectedStock;
//           });
//           $.each(selectedStockData[0].partnumber, function (i, part) {
//             partSelect.append($('<option>', { value: part.partnumber, text: part.partnumber }));
//           });
//           partSelect.prop('disabled', false);
//         } else {
//           partSelect.prop('disabled', true);
//         }
//    });
// const stocknameSelect = document.getElementById("select_stockname");
const partnumberSelect = document.getElementById("select_parts");

// Add an event listener to the stockname dropdown
stocknameSelect.addEventListener("change", function() {
  // Get the selected stockname value
  const selectedStockname = stocknameSelect.value;

  // Filter the stock data to get the selected stock object
  const selectedStock = stockdata.find(stock => stock.stockname === selectedStockname);

  // Populate the partnumber dropdown with options based on the selected stock object
  partnumberSelect.innerHTML = ""; // clear existing options
  selectedStock.partlist.forEach(part => {
    const option = document.createElement("option");
    option.value = part.partnumber;
    option.textContent = part.partnumber;
    partnumberSelect.appendChild(option);
  });


  });
  partnumberSelect.addEventListener("change", function() {
    // Get the selected partnumber value
    const selectedPartnumber = partnumberSelect.value;
    
    // Update the partnumberSelect field with the selected partnumber
    partnumberSelect.value = selectedPartnumber;
});

// var invoice_number = 1;
// $("#Assignment_btn").click(function () {
//     // check if all conditions are true
//     // if ($("#Add_part_number").valid() == true && partnumber != '' && order != '' && notes != '') {
//         var invoicenumber = invoice_number++;
//         var stock = $("#select_stockname").val();
//         var parts = $("#select_parts option:selected").toArray().map(option => option.text).join(", ");    
//         var addedtable = "<tr><td>" + invoicenumber + "</td><td>" + stock + "</td><td>" + parts + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>";
//         $("#Assignment_table tbody").append(addedtable);
//         console.log(invoicenumber)
//     // }
// });
var invoice_number = 1;
$("#Assignment_btn").click(function () {
    // check if all conditions are true
    // if ($("#Add_part_number").valid() == true && partnumber != '' && order != '' && notes != '') {
        var invoicenumber = invoice_number++;
        var stock = $("#select_stockname").val();
        var parts = $("#select_parts option").toArray().map(option => option.text).join("|");

        if (partDetails == null) {
            partDetails = [];
        }
        partDetails.push({
            invoicenumber: invoicenumber,
            stock: stock,
            parts: parts,
        });

        var addedtable = "<tr><td>" + invoicenumber + "</td><td>" + stock + "</td><td>" + parts + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>";
        $("#Assignment_table tbody").append(addedtable);
        console.log(invoicenumber)
    // }
});

$('#assignment_table tbody').on('click', 'td.dt-control', function () {
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

$("#Assignment_table_data").on('click', '.delete', function () {
    $(this).closest('tr').remove();
});

$('#assignment_table tbody').on('click', '.edit', function () {
    debugger
    editstockdetails = true;
    var data = tableData.row($(this).parents('tr')).data();
    console.log(data);
    var index = tableData.row($(this).parents('tr')).index();
    console.log(index);
    $("#select_customer").val(data.select_customer);
    $("#select_customer option[value='" + data.select_customer + "']").prop("selected", true);
    // $("#select_stockname").val(data.select_stockname);
    $("#select_stockname option[value='" + data.select_stockname + "']").prop("selected", true);
    // console.log("Option values: ", $("#select_stockname option").map(function() { return $(this).val(); }).get());
    // console.log("Selected value: ", data.select_stockname);
    
    // $("#select_parts").val(data.select_parts);
    $("#select_parts option[value='" + data.select_parts + "']").prop("selected", true);

    $('#AssignmentModal').modal('show');

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
    

        data.partlist.forEach(function (partlist) {
            $("#Assignment_table_data").append("<tr><td>" + partlist.invoicenumber + "</td><td>" + partlist.stock + "</td><td>"
              + partlist.parts + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>");
          });
    }
    partDetails = data.partlist;

    
    // $("#savechange").click(function () {
    //     if (editstockdetails) {
    //         console.log(partDetails)
    //         var stockname = $('#stockname').val();
    //         var eta_date = $('#date').val();
    //         var stock_status = $('input[name="btnradio"]:checked').next('label').text();
    //         // var stock_status=$('input[name="btnradio"]:checked').val();
    //         var usernameget = Usernameget[0].Name;
    //         //Getting current date
    //         var getcurrentdate = new Date(Date.now()).toLocaleString().split(',')[0];
    //         console.log(getcurrentdate)
    //         var notes = $("#notes").val();
    //         stockList = JSON.parse(localStorage.getItem("stockList")) || [];
        
    //         if (stockDetails == null) {
    //             stockDetails = [];
    //         }
    //         stockDetails.push({
    //             stockname: stockname,
    //             eta_date: eta_date,
    //             stock_status: stock_status,
    //             usernameget: usernameget,
    //             getcurrentdate: getcurrentdate,
    //             partDetails: partDetails,
    //             notes: notes
    //         });
    //         console.log(partDetails)
    //         var stock = {
    //             "stockname": stockname,
    //             "eta_date": eta_date,
    //             "stock_status": stock_status,
    //             "usernameget": usernameget,
    //             "getcurrentdate": getcurrentdate,
    //             "partlist": partDetails,
    //             "notes": notes
    //         };
    //         stockList[index] = stock;
    //         console.log("StockList", stockList);
    //         debugger
    //         localStorage.setItem("stockList", JSON.stringify(stockList));
    //         location.reload(true)
    //     }
    // });
});

 });
 function Assignmentdatastore() {
        console.log(partDetails)
        var nameget = Usernameget[0].Name;
        var qbinvoicenumber = QBInvoice_number++;

        //Getting current date
        var getcurrentdate = new Date(Date.now()).toLocaleString().split(',')[0];
        console.log(getcurrentdate)
        let assignmentList = JSON.parse(localStorage.getItem("assignmentList")) || [];
        if (assignmentDetails == null) {
            assignmentDetails = [];
        }
        assignmentDetails.push({
        
            "nameget": nameget,
            "getcurrentdate": getcurrentdate,
            "partDetails":partDetails
            
          
        });
        console.log(partDetails)
        var stock = {
        
            "nameget": nameget,
            "getcurrentdate": getcurrentdate,
            "partlist":partDetails
        };
        console.log("nameget:", nameget);
console.log("getcurrentdate:", getcurrentdate);
assignmentList.push(stock);
        console.log("assignmentList", assignmentList)
        tableData.row.add([qbinvoicenumber,nameget, nameget, getcurrentdate]).draw();
        localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
        location.reload(true)
}
function format(d) {
    let HTML = '';
    if (d.partlist && d.partlist.length > 0) {
        HTML += '<table class="text-center" style="width:100%;">';
        HTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Stock</th><th class="text-center">Part</th><th class="text-center">Action</th></tr></thead>';
        HTML += '<tbody>';
        d.partlist.forEach((partlist, index) => {
            const rowadd = index + 1;
            HTML += '<tr><td>' + rowadd + '</td><td>' + partlist.stock + '</td><td>' + partlist.parts + '</td><td><button ><i class="fa fa-close deletechildrow"></i></button></td></tr>';
        });
        HTML += '</tbody>';
        HTML += '</table>';
    }
    return HTML;
}