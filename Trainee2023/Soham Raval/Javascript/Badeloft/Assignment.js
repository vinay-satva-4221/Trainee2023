
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
var editstockdetails = false;
const customerList = [
  { Customer: "Raval", Invoice: "150001" },
  { Customer: "Raval", Invoice: "150002" },
  { Customer: "Raval", Invoice: "150003" },
  { Customer: "Soham", Invoice: "160001" },
  { Customer: "Soham", Invoice: "160002" },
  { Customer: "Soham", Invoice: "160003" },
  { Customer: "Soham", Invoice: "160004" },
  { Customer: "abc", Invoice: "170001" },
  { Customer: "abc", Invoice: "170002" },
  { Customer: "abc", Invoice: "170003" },
  { Customer: "xyz", Invoice: "180001" },
  { Customer: "xyz", Invoice: "180002" },
  { Customer: "xyz", Invoice: "180003" },
  { Customer: "xyz", Invoice: "180004" },
];
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
            // { data: function(row,type,set,meta){
            //     var qbinvoiceNumber = meta.row + 15000;
            //     return qbinvoiceNumber;
            // }, title: 'QB Invoice#', orderable: false, className: "text-center" },
            {data:"select_qbinvoice",title:'QB Invoice#',ordeeable:false,className:"text-center"},
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
    // const InvoiceSelect = document.getElementById("select_Invoice");
    // stockdata.forEach(user => {
    //   const option = document.createElement("option");
    //   option.value = user.invoicenumber;
    //   option.textContent = user.invoicenumber;
    //   InvoiceSelect.appendChild(option);
    // });
    
    // for dependent dropdown
    const qbinvoiceSelect = document.getElementById("select_Invoice");
userSelect.addEventListener("change", function() {
  const selectedusername = userSelect.value;
  const selecteduser = customerList.filter(item => item.Customer === selectedusername);

  qbinvoiceSelect.innerHTML = ""; // clear existing options
  selecteduser.forEach(item => {
    const option = document.createElement("option");
    option.value = item.Invoice;
    option.textContent = item.Invoice;
    qbinvoiceSelect.appendChild(option);
  });
  });
//   qbinvoiceSelect.addEventListener("change", function() {
//     const selectedPartnumber = qbinvoiceSelect.value;
//     qbinvoiceSelect.value = selectedPartnumber;
// });
    // for dependent dropdown


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
    $("#select_Invoice").val(data.select_qbinvoice);
    $("#select_Invoice option[value='" + data.select_qbinvoice + "']").prop("selected", true);
    // $("#select_stockname").val(data.select_stockname);
    // console.log("qbb",data.select_qbinvoice)
    $("#select_stockname option[value='" + data.select_stockname + "']").prop("selected", true);
    // console.log("Option values: ", $("#select_stockname option").map(function() { return $(this).val(); }).get());
    // console.log("Selected value: ", data.select_stockname);
    // $("#select_parts").val(data.select_parts);
    $("#select_parts option[value='" + data.select_parts + "']").prop("selected", true);

    $('#AssignmentModal').modal('show');

    partDetails  = JSON.parse(localStorage.getItem("stockList"));
    console.log("partDetails ",partDetails);
    if(data.partlist && data.partlist.length>0){
        data.partlist.forEach(function (partlist) {
            $("#Assignment_table_data").append("<tr><td>" + partlist.invoicenumber + "</td><td>" + partlist.stock + "</td><td>"
              + partlist.parts + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>");
          });
    }
    partDetails = data.partlist;
    $("#save_btn").click(function () {
        if (editstockdetails) {
          var nameget = Usernameget[0].Name;
          var select_customer = $('#select_customer').val();
          var select_qbinvoice=$('#select_Invoice').val();
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
              "partDetails":partDetails,
              "select_customer":select_customer,
              "select_qbinvoice":select_qbinvoice
          });
          console.log(partDetails)
          var stock = {
          
              "nameget": nameget,
              "getcurrentdate": getcurrentdate,
              "partlist":partDetails,
              "select_customer":select_customer,
              "select_qbinvoice":select_qbinvoice
          };
          assignmentList[index] = stock;
            debugger
            localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
            location.reload(true)
        }
    });
});
$('.js-example-basic-multiple').select2();

// $("#assignment_table tbody").on('click', '.deletechildrow', function () {
//   let assignmentList = JSON.parse(localStorage.getItem('assignmentList'));
//   console.log("assignmentList",assignmentList)
//   let assignmentIndex = $(this).closest('tr').index(); 
//   console.log('assignmentIndex:', assignmentIndex);
//   let partIndex = $(this).closest('td').index(); 
  
//   if (assignmentList[assignmentIndex].partlist) { 
//       console.log('Before:', assignmentList);
//     assignmentList[assignmentIndex].partlist.splice(partIndex, 1);
//     console.log('After:', assignmentList);

//     localStorage.setItem('assignmentList', JSON.stringify(assignmentList));
//   }
//   $(this).closest('tr').remove();
// });

 });
 function Assignmentdatastore() {
  if (!editstockdetails) {
        console.log(partDetails)
        var nameget = Usernameget[0].Name;
        var select_customer = $('#select_customer').val();
        var select_qbinvoice=$('#select_Invoice').val();
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
            "partDetails":partDetails,
            "select_customer":select_customer,
            "select_qbinvoice":select_qbinvoice
        });
        console.log(partDetails)
        var stock = {
            "nameget": nameget,
            "getcurrentdate": getcurrentdate,
            "partlist":partDetails,
            "select_customer":select_customer,
            "select_qbinvoice":select_qbinvoice
        };
        console.log("nameget:", nameget);
console.log("getcurrentdate:", getcurrentdate);
assignmentList.push(stock);
        console.log("assignmentList", assignmentList)
        tableData.row.add([qbinvoicenumber,nameget, nameget, getcurrentdate]).draw();
        localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
        location.reload(true)
 }
}
function format(d) {
    let HTML = '';
    if (d.partlist && d.partlist.length > 0) {
        HTML += '<table class="text-center" style="width:100%;">';
        HTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Stock</th><th class="text-center">Part</th><th class="text-center">Action</th></tr></thead>';
        HTML += '<tbody>';
        d.partlist.forEach((partlist, index) => {
            const rowadd = index + 1;
            HTML += '<tr><td>' + rowadd + '</td><td>' + partlist.stock + '</td><td>' + partlist.parts + '</td><td><button class="deletechildrow" data-assignment="${d.select_qbinvoice}"><i class="fa fa-close "></i></button></td></tr>';
        });
        HTML += '</tbody>';
        HTML += '</table>';
    }

    return HTML;
}

$("#assignment_table tbody").on('click', '.deletechildrow', function () {
    debugger
    var assignmentList = JSON.parse(localStorage.getItem("assignmentList"));
    var stockidattribute=$(this).attr('data-assignment');
    console.log(stockidattribute);
    var index;
    var assignmentindexfind=assignmentList.findIndex(list=>list.select_qbinvoice==stockidattribute);
    assignmentList[assignmentindexfind].partlist.splice(index,1);
      localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
      $(this).closest('tr').remove();
      location.reload(true)
});

// $("#stock_table tbody").on('click', '.deletechildrow', function () {
//     debugger
//     var stockList = JSON.parse(localStorage.getItem("stockList"));
//     var stockidattribute=$(this).attr('data-stock');
//     var index;

//     var stockindexfind=stockList.findIndex(list=>list.stockname==stockidattribute);
//     stockList[stockindexfind].partlist.splice(index,1);

//       localStorage.setItem("stockList", JSON.stringify(stockList));
//       $(this).closest('tr').remove();
//       location.reload(true)

// });