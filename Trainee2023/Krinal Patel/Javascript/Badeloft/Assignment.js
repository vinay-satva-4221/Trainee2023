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
  function format(d) {
    console.log("D=",d)
    let HTML = '';
    // if (d.partlist && d.partlist.length > 0) {
      HTML += '<table class="text-center" style="width:100%;">';
      HTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Stock</th><th class="text-center">Part</th><th class="text-center">Action</th></tr></thead>';
      HTML += '<tbody>';
      d.partlist.forEach((partlist, index) => {
          const rowadd = index + 1;
          HTML += '<tr><td>' + rowadd + '</td><td>' + partlist.stock + '</td><td>' + partlist.parts + '</td><td><button ><i class="fa fa-close deletechildrow"></i></button></td></tr>';
      });
      HTML += '</tbody>';
      HTML += '</table>';
    // }
    return HTML;
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
     columns: [{
      data: null,
      className: 'dt-control',
      orderable: false,
      defaultContent: '',
      width:"1%",
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
          data:"customersname",
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
  $(".js-example-placeholder-multiple").select2({
    dropdownParent: $('#myModal'),
    placeholder: "Choose Part",
    width: 'resolve' // need to override the changed default


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


function addassignment() {
  console.log(partDetails)
  //Getting all stock details and part details
  var sname = $("#sname").val();
  var etadate = $("#etadate").val();
  // var notes = $("#notes").val();

 //Getting username for created by
  var par = JSON.parse(localStorage.getItem('LoginDetails'));
  var createdby = par[0].username;

  //Getting current date
  var cdate = new Date(Date.now()).toLocaleString().split(',')[0];
var customersname = document.getElementById("Customer").value;
  let assignmentList = JSON.parse(localStorage.getItem("Assignment")) || [];
  if (assignmentDetails == null) {
      assignmentDetails = [];
  }
  assignmentDetails.push({
  
      "createdby": createdby,
      "cdate": cdate,
      "partlist":partDetails,
      "QBInvoice_number":QBInvoice_number,
      "customersname":customersname
    
  });
  console.log(partDetails)
  var stock = {
  
    "createdby": createdby,
    "cdate": cdate,
    "partlist":partDetails,
    "QBInvoice_number":QBInvoice_number,
    "customersname":customersname
  };

assignmentList.push(stock);
  tableData.row.add(['',QBInvoice_number,customersname,createdby, cdate, '']).draw();
  

  localStorage.setItem("Assignment", JSON.stringify(assignmentList));
  location.reload(true)
}






//   // Row 1 cascading
const QuickbookInvoices = '{"Invoices":['+
'{"InvoiceId":"Eric Jension","Id":"1","Name":"150001"},' +
'{"InvoiceId":"Eric Jension","Id":"2","Name":"150002"},' +
'{"InvoiceId":"Eric Jension","Id":"3","Name":"150003"},' +
'{"InvoiceId":"Eric Jension","Id":"4","Name":"150004"},' +
'{"InvoiceId":"Eric Jension","Id":"5","Name":"150005"},' +
'{"InvoiceId":"Kenneth Woodard","Id":"6","Name":"150006"},' +
'{"InvoiceId":"Kenneth Woodard","Id":"7","Name":"150007"},' +
'{"InvoiceId":"Kenneth Woodard","Id":"8","Name":"150008"},' +
'{"InvoiceId":"Kenneth Woodard","Id":"9","Name":"150009"},' +
'{"InvoiceId":"Kenneth Woodard","Id":"10","Name":"150010"},' +
'{"InvoiceId":"Kelly Mccrocy","Id":"11","Name":"150011"},' +
'{"InvoiceId":"Kelly Mccrocy","Id":"12","Name":"150012"},' +
'{"InvoiceId":"Kelly Mccrocy","Id":"13","Name":"150013"},' +
'{"InvoiceId":"Kelly Mccrocy","Id":"14","Name":"150014"},' +
'{"InvoiceId":"Kelly Mccrocy","Id":"15","Name":"150015"},' +
'{"InvoiceId":"Frances Badger","Id":"16","Name":"150016"},' +
'{"InvoiceId":"Frances Badger","Id":"17","Name":"150017"},' +
'{"InvoiceId":"Frances Badger","Id":"18","Name":"150018"},' +
'{"InvoiceId":"Frances Badger","Id":"19","Name":"150019"},' +
'{"InvoiceId":"Frances Badger","Id":"20","Name":"150020"},' +
'{"InvoiceId":"John Doe","Id":"21","Name":"150021"},' +
'{"InvoiceId":"John Doe","Id":"22","Name":"150022"},' +
'{"InvoiceId":"John Doe","Id":"23","Name":"150023"},' +
'{"InvoiceId":"John Doe","Id":"24","Name":"150024"},' +
'{"InvoiceId":"John Doe","Id":"25","Name":"150025"}]}';



const customers = '{"Customer":['+
'{"Id":"Eric Jension","Name":"Eric Jensen"},' +
'{"Id":"Kenneth Woodard","Name":"Kenneth Woodard"},' +
'{"Id":"Kelly Mccrocy","Name":"Kelly Mccrocy"},' +
'{"Id":"Frances Badger","Name":"frances Badger"},' +                    
'{"Id":"John Doe","Name":"John Doe"}]}';

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