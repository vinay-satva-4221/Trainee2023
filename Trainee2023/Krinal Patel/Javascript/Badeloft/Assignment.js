window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Badeloft.html");
    }
    else{
      var par = JSON.parse(localStorage.getItem('LoginDetails'));
      var u = par[0].username;
      var uname = document.getElementById("username");
      uname.innerHTML = u;
    }
};

function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }
  //Row 1 cascading
const QuickbookInvoices = '{"Invoices":['+
'{"InvoiceId":"1","Id":"1","InvoiceNo:"150001"},' +
'{"InvoiceId":"1","Id":"2","InvoiceNo:"150002"},' +
'{"InvoiceId":"1","Id":"3","InvoiceNo:"150003"},' +
'{"InvoiceId":"1","Id":"4","InvoiceNo:"150004"},' +
'{"InvoiceId":"1","Id":"5","InvoiceNo:"150005"},' +
'{"InvoiceId":"2","Id":"6","InvoiceNo:"150006"},' +
'{"InvoiceId":"2","Id":"7","InvoiceNo:"150007"},' +
'{"InvoiceId":"2","Id":"8","InvoiceNo:"150008"},' +
'{"InvoiceId":"2","Id":"9","InvoiceNo:"150009"},' +
'{"InvoiceId":"2","Id":"10","InvoiceNo":"150010"},' +
'{"InvoiceId":"3","Id":"11","InvoiceNo":"150011"},' +
'{"InvoiceId":"3","Id":"12","InvoiceNo":"150012"},' +
'{"InvoiceId":"3","Id":"13","InvoiceNo":"150013"},' +
'{"InvoiceId":"3","Id":"14","InvoiceNo":"150014"},' +
'{"InvoiceId":"3","Id":"15","InvoiceNo":"150015"},' +
'{"InvoiceId":"4","Id":"16","InvoiceNo":"150016"},' +
'{"InvoiceId":"4","Id":"17","InvoiceNo":"150017"},' +
'{"InvoiceId":"4","Id":"18","InvoiceNo":"150018"},' +
'{"InvoiceId":"4","Id":"19","InvoiceNo":"150019"},' +
'{"InvoiceId":"4","Id":"20","InvoiceNo":"150020"},' +
'{"InvoiceId":"5","Id":"21","InvoiceNo":"150021"},' +
'{"InvoiceId":"5","Id":"22","InvoiceNo":"150022"},' +
'{"InvoiceId":"5","Id":"23","InvoiceNo":"150023"},' +
'{"InvoiceId":"5","Id":"24","InvoiceNo":"150024"},' +
'{"InvoiceId":"5","Id":"25","InvoiceNo":"150025"}]}';


const customers = '{"Customer":['+
'{"Id":"1","CustomerName":"Eric Jensen"},' +
'{"Id":"2","CustomerName":"Kenneth Woodard"},' +
'{"Id":"3","CustomerName":"Kelly McCrory"},' +    
'{"Id":"4","CustomerName":"frances Badger"},' +                    
'{"Id":"5","CustomerName":"John Doe"}]}';

$(document).ready(function(){

    var customersJSONdata = JSON.parse(customers);
    $.each(customersJSONdata.Customer,function(i,option){
        $("#customer").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#customer").change(function(){
        var QuickbookInvoicesJSONdata = JSON.parse(QuickbookInvoices);
        $("#invoices").html('');
        $.each(QuickbookInvoicesJSONdata.Invoices,function(i,option){
            if($("#customer").val() == option.StateId){
                $("#invoices").append($('<option></option>').val(option.Id).html(option.Name));
            }
    })

    });

    //   $(".js-example-placeholder-multiple").select2({
    //     placeholder: "Select a state"
    // });
});

//Row 2 Cascading

// const parts = '{"Part":['+
// '{"PartId":"1","Id":"1","PartName":"BW-01-S-M"},' +
// '{"PartId":"1","Id":"2","PartName":"AT-01-BLK"},' +

// '{"PartId":"2","Id":"3","PartName":"BW-03-XL-G"},' +
// '{"PartId":"2","Id":"4","PartName":"BW-02-L-M"},' +

// '{"PartId":"3","Id":"5","PartName":"WB-05-M-G"},' +
// '{"PartId":"3","Id":"6","PartName":"ZK-08-X2P"},' +

// '{"PartId":"4","Id":"7","PartName":"BY-09-L-X"},' +
// '{"PartId":"4","Id":"8","PartName":"XP-01-D-T"},' +

// '{"PartId":"5","Id":"9","PartName":"PP-03-A-B"},' +
// '{"PartId":"5","Id":"10","PartName":"PD-05-D-H"}]}';


// const stocks = '{"Stock":['+
// '{"Id":"1","StockName":"C100"},' +
// '{"Id":"2","StockName":"BW521"},' +
// '{"Id":"3","StockName":"D4010"},' +    
// '{"Id":"4","StockName":"PJ250"},' +                    
// '{"Id":"5","StockName":"AK302"}]}';

// $(document).ready(function(){

//     var StockJSONdata = JSON.parse(stocks);
//     $.each(StockJSONdata.Stock,function(i,option){
//         $("#stock").append($('<option></option>').val(option.Id).html(option.Name));
//     })

//     $("#stock").change(function(){
//         var PartsJSONdata = JSON.parse(parts);
//         $("#part").html('');
//         $.each(PartsJSONdata.Part,function(i,option){
//             if($("#stock").val() == option.StateId){
//                 $("#part").append($('<option></option>').val(option.Id).html(option.Name));
//             }
//     })

//     });
// });


$(document).ready(function () {


  var modal = document.getElementById("addassignment");


  tableData = $('#assignment').DataTable({
    orderable:false,
    
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
        data:"index",
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
        data:"sname",
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
});
