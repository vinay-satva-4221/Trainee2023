//global variables

var partDetails = [];
var assignmentDetails = [];
var tableData;
var QBInvoice_number = 15000;
window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Login.html");
    }
    else{
      var par = JSON.parse(localStorage.getItem('LoginDetails'));
      var u = par[0].username;
      var uname = document.getElementById("username");
      uname.innerHTML = u;
    }
};

function logout(){
    window.location.replace("Login.html")
    localStorage.clear();
  }

  $(document).ready(function () {


    var modal = document.getElementById("addassignment");
  
    assignmentDetails = JSON.parse(localStorage.getItem("Assignment"));

  
    tableData = $('#assignment').DataTable({
      orderable:false,
      data: assignmentDetails,
      lengthChange: false,
      bFilter:true,
      bInfo:false,
      
      dom: '<"toolbar">frtip',
      fnInitComplete: function () {
        $('div.toolbar').html('<b><h3>&nbsp;Assignments</h3></b>');
        $('#assignment_filter').prepend(modal);
          },  
      
          language: {
            info: "Items _START_ to _END_ of _TOTAL_ total",
            paginate:{
              previous:"<",
              next:">",
            },
            search: "",
  
            searchPlaceholder: "Search here..."
          },  
      info: true,
      paging: true,
     ordering:false,
      columns: [
        {
          
          data: null,
          className: 'dt-control',
          orderable: false,
          defaultContent: '',
  
        },
        {
          data:"QBInvoice_number",
          title: 'QB Invoice #',
          orderable: false,
          render:function(data,type,row){
            if(type=='display'){
                return '<span style="color: #1188FF;">' + data + '</span>';
            }
            else {
                return data;
            }
        }
        },
        {
          data:"createdby",
          title: 'Name',
          orderable: false,
          className: "text-center"
        },
        {
          data:"createdby",
          title: 'Created By',
          orderable: false,
          className: "text-center"
        },
        {
          data:"cdate",
          title: 'Created Date',
          orderable: false,
          className: "text-center"
        },
  
        {
          data:null,
          title: 'Action',
          orderable: false,
          defaultContent: '<div class="action-buttons">' +
                      '<span class="edit"><i class="fa fa-pencil"></i></span> ' +
                      '<span class="remove"><i class="fa fa-trash"></i></span> ' +
                      '<span class="cancel"></span>' +
                      '</div>',
          className: 'row-edit dt-center',
        }
      ]
    
    });
  
    // Add event listener for opening and closing details
    $('#stock tbody').on('click', 'td.dt-control', function () {
      var tr = $(this).closest('tr');
      var row = tableData.row(tr);
  
      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
      } else {console.log(partDetails)
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass('shown');
      }
    });

    const userdata = JSON.parse(localStorage.getItem("staticdata"));
    const userSelect = document.getElementById("select_customer");
  // Select 2 library
$(document).ready(function () {
  $(".multipleSelect").select2();
});
const stockdata = JSON.parse(localStorage.getItem("stockList"));
var stocknameSelect = document.getElementById("select_stockname");
stockdata.forEach(user => {
  const option = document.createElement("option");
  option.value = user.sname;
  option.textContent = user.sname;
  stocknameSelect.appendChild(option);
});
 



  const partnumberSelect = document.getElementById("select_parts");

// Add an event listener to the stockname dropdown
stocknameSelect.addEventListener("change", function() {
  // Get the selected stockname value
  const selectedStockname = stocknameSelect.value;

  // Filter the stock data to get the selected stock object
  const selectedStock = stockdata.find(stock => stock.sname === selectedStockname);

  // Populate the partnumber dropdown with options based on the selected stock object
  partnumberSelect.innerHTML = ""; // clear existing options
  selectedStock.stockpart.forEach(part => {
    const option = document.createElement("option");
    option.value = part.partno;
    option.textContent = part.partno;
    partnumberSelect.appendChild(option);
  });


  });
  partnumberSelect.addEventListener("change", function() {
    // Get the selected partnumber value
    const selectedPartnumber = partnumberSelect.value;
    
    // Update the partnumberSelect field with the selected partnumber
    partnumberSelect.value = selectedPartnumber;
});




});

var invoice_number = 1;
$("#saveparts").click(function () {
    // check if all conditions are true
    // if ($("#Add_part_number").valid() == true && partnumber != '' && order != '' && notes != '') {
        var invoicenumber = invoice_number++;
        var stock = $("#select_stockname").val();
        var parts = $("#select_parts option").toArray().map(option => option.text).join("|");
console.log(stock)
console.log(parts )
        if (partDetails == null) {
            partDetails = [];
        }
        partDetails.push({
            invoicenumber: invoicenumber,
            stock: stock,
            parts: parts,
        });
        var html = "";

        //  html = "<thead><th>#</th><th>Stock</th><th>Parts</th><th class='text-end'>Action</th></thead><tbody>";
        for (let i = 0; i < partDetails.length; i++) {
          
          html += "<tr>" + "<td>" + i + "</td>" + "<td>" + partDetails[i].stock + "</td>" + "<td>" + partDetails[i].parts
                + "</td>" +
                "<td class='text-end'><button type='button' class='btn-close DeletePartsTable'  aria-label='Close' ></button></td></tr>"
        }
        // html += "</tbody>";
        console.log(html)
        $('#Assignment_table_data').html(html);
});

//   // Row 1 cascading
const QuickbookInvoices = '{"Invoices":['+
'{"InvoiceId":"1","Id":"1","Name":"150001"},' +
'{"InvoiceId":"1","Id":"2","Name":"150002"},' +
'{"InvoiceId":"1","Id":"3","Name":"150003"},' +
'{"InvoiceId":"1","Id":"4","Name":"150004"},' +
'{"InvoiceId":"1","Id":"5","Name":"150005"},' +
'{"InvoiceId":"2","Id":"6","Name":"150006"},' +
'{"InvoiceId":"2","Id":"7","Name":"150007"},' +
'{"InvoiceId":"2","Id":"8","Name":"150008"},' +
'{"InvoiceId":"2","Id":"9","Name":"150009"},' +
'{"InvoiceId":"2","Id":"10","Name":"150010"},' +
'{"InvoiceId":"3","Id":"11","Name":"150011"},' +
'{"InvoiceId":"3","Id":"12","Name":"150012"},' +
'{"InvoiceId":"3","Id":"13","Name":"150013"},' +
'{"InvoiceId":"3","Id":"14","Name":"150014"},' +
'{"InvoiceId":"3","Id":"15","Name":"150015"},' +
'{"InvoiceId":"4","Id":"16","Name":"150016"},' +
'{"InvoiceId":"4","Id":"17","Name":"150017"},' +
'{"InvoiceId":"4","Id":"18","Name":"150018"},' +
'{"InvoiceId":"4","Id":"19","Name":"150019"},' +
'{"InvoiceId":"4","Id":"20","Name":"150020"},' +
'{"InvoiceId":"5","Id":"21","Name":"150021"},' +
'{"InvoiceId":"5","Id":"22","Name":"150022"},' +
'{"InvoiceId":"5","Id":"23","Name":"150023"},' +
'{"InvoiceId":"5","Id":"24","Name":"150024"},' +
'{"InvoiceId":"5","Id":"25","Name":"150025"}]}';



const customers = '{"Customer":['+
'{"Id":"1","Name":"Eric Jensen"},' +
'{"Id":"2","Name":"Kenneth Woodard"},' +
'{"Id":"3","Name":"Kelly McCrory"},' +    
'{"Id":"4","Name":"frances Badger"},' +                    
'{"Id":"5","Name":"John Doe"}]}';

$(document).ready(function(){

    var customersJSONdata = JSON.parse(customers);
    $.each(customersJSONdata.Customer,function(i,option){
        $("#Customer").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#Customer").change(function(){
        var QuickbookInvoicesJSONdata = JSON.parse(QuickbookInvoices);
        $("#Invoice").html('');
        $.each(QuickbookInvoicesJSONdata.Invoices,function(i,option){
            if($("#Customer").val() == option.InvoiceId){
                $("#Invoice").append($('<option></option>').val(option.Id).html(option.Name));
            }
    })

    });

});


