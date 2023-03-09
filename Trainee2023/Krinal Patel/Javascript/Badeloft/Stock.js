//global variables
var partDetails = [];
var stockDetails = [];
var index = 1;
var tableData;
var currentStockId;
var currentStockIndex;

window.onload = (event) => {
  if (localStorage.getItem("LoginDetails") == null) {
    window.location.replace("Login.html");
  } else {
    var par = JSON.parse(localStorage.getItem('LoginDetails'));
    var u = par[0].username;
    var uname = document.getElementById("username");
    uname.innerHTML = u;
  }
};

function logout() {
  window.location.replace("Login.html")
  localStorage.clear();
}




// Data table stock
/* Formatting function for row details - modify as you need */
function format(d) {
  //debugger;
  console.log(partDetails);
  console.log(d)
  console.log(d.partDetails);
  var tr = $(this).parents('tr');
  var row = tableData.row(tr);

  row.child(
   
    partDetails
  )

  var p = partDetails;
  console.log(p)

  if (d.stockpart == null) {
    d.stockpart = partDetails;
  }
  var q = d.stockpart;

  console.log("parts", q)
  let childrow = "";


  // var currentIndex = $(this).closest('tr').index();

  childrow += '<table cellpadding="2" cellspacing="0" class="table border rounded" id="childtablepart">';
  childrow += '<thead class="colorthead"><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead>';
  childrow += '<tbody>';
  var id = 1;
  q.forEach((e) => {

    childrow += '<tr data-stockid='+d.index+' data-partid='+e.index+'><td>' + id++ + '</td><td>' + e.partno + '</td><td>' + e.ordered + '</td><td>' + e.index + '</td><td>' + '<i class="fa-solid fa-xmark deletechild"></i>' + '</td</tr>';
  });
  childrow += '</tbody></table>';
  
  return childrow;

 
  // $(".deletechild").click(function(){
    
  // });
}

$(document).on("click",".deletechild",function()
 {
  var tr = $(this).closest("tr");
  console.log(tr.data("stockid"));
  console.log(tr.data("partid"));  
  var details = stockDetails[parseInt(tr.data("stockid"))-1];
  var i = $(this).closest('tr').index();
  details.stockpart = details.stockpart.splice(i,1);  
  stockDetails[parseInt(tr.data("stockid"))-1] = details;
  localStorage.setItem("stockList", JSON.stringify(stockDetails));
  $(this).closest('tr').remove();
  //localStorage.setItem() stockDetails
  //details.partlist
  //todo:
  // Get stocl details from local storage
  // Remmove part using partid
  // upldate local storage
  // alert(tr.data("stockid") + tr.data("partid"));

  // var par = JSON.parse(localStorage.getItem('stockList'));
  // var par = JSON.parse(localStorage.getItem('stockList'));

  // // alert(tr)
  // console.log(par);


  
  // var i = $(this).closest('tr').index();
  // console.log(i)
  // partDetails.splice(i,1); 
  // console.log(partDetails)
  
  // $(this).closest('tr').remove();
  
});



$(document).ready(function () {

 
  $("#addpartno").click(function () {
    
    $("#innermodal").modal("show");
    document.getElementById("AddPartForm").reset();

    
  });


  $("#addstock").click(function () {

    document.getElementById("AddStockForm").reset();
    $("#tdata tr").remove();
    $("#editstockbtn").hide();
    $("#addstockbtn").show();
    $("#addstocktitle").html("Add New Stock");

    // $("#myModal").modal("show");
  });

  
  $("#cancelpart").click(function () {
    document.getElementById("AddPartForm").reset();
  });



  var modal = document.getElementById("addstock");
  stockDetails = JSON.parse(localStorage.getItem("stockList"));

  tableData = $('#stock').DataTable({

    orderable: false,
    data: stockDetails,
    lengthChange: false,
    bFilter: true,
    bInfo: false,
    info: true,
    paging: true,
    ordering: false,

    dom: '<"toolbar">frtip',
    fnInitComplete: function () {
      $('div.toolbar').html('<b><h3>&nbsp;Stock</h3></b>');
      $('#stock_filter').prepend(modal);
    },
    language: {
      info: "Items _START_ to _END_ of _TOTAL_ total",
      paginate: {
        previous: "<",
        next: ">",
      },
      search: "",
      searchPlaceholder: "Search here..."
    },


    columns: [{
        data: null,
        className: 'dt-control',
        orderable: false,
        defaultContent: '',
        width:"1%",
      },
      {
        data: "sname",
        title: 'Stock Name',
        orderable: false,
        render: function (data, type, row) {
          if (type == 'display') {
            return '<span style="color: #1188FF;">' + data + '</span>';
          } else {
            return data;
          }
        }
      },
      {
        data: "etadate",
        title: 'ETA Date',
        orderable: false,
        // className: "text-center"
      },
      {
        data: "stkstatus",
        title: 'Stock Location',
        orderable: false,
        // className: "text-center"
      },
      {
        data: "createdby",
        title: 'Created By',
        orderable: false,
        // className: "text-center"
      },
      {
        data: "cdate",
        title: 'Created Date',
        orderable: false,
        // className: "text-center"
      },
      {
        data: "notes",
        title: 'Notes',
        orderable: false,
        // className: "text-center"
      },
      {
        data: null,
        title: 'Action',
        orderable: false,
        defaultContent: '<div class="action-buttons">' +
          '<span id="editstock" class="edit edit-stock" data-id="' + index + '"><i  class="fas fa-pen"></i></span> ' +
          '<span class="history">&nbsp;&nbsp;<i class="fas fa-history"></i></span> ' +
          '</div>',
        className: 'row-edit',
      }
    ]

  });

//EDIT STOCK 


$("#stock tbody").on('click', '.fa-pen', function () {
  partDetails = [];
  // var i = $(this).closest('tr').index();

  var datatableIndex = tableData.row($(this).parents('tr')).index()
  console.log(datatableIndex,"datatableIndex")

  currentStockIndex = datatableIndex; 
  $("#addstockbtn").hide();
  $("#editstockbtn").show();

  $("#myModal").modal("show"); 
  $("#addstocktitle").html("Edit Stock");

  console.log(currentStockIndex, stockDetails[currentStockIndex])

  //EDIT STOCK  
  console.log(stockDetails[datatableIndex])
  // console.log(stockDetails[i].stockpart[0].partno)
  currentStockId = stockDetails[datatableIndex].index;

  //findIndex of currentStock

  // var index = stockDetails.findIndex(x => x.index == currentStockId)

  document.getElementById("sname").value = stockDetails[datatableIndex].sname;
  document.getElementById("etadate").value = stockDetails[datatableIndex].etadate;

  partDetails = stockDetails[datatableIndex].stockpart

  var html = "";

  stockDetails[datatableIndex].stockpart.forEach(function (element, index) {
    let ind = index + 1;
    html += "<tr>";
    html += "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + element.partno + "</td>";
    html += "<td>" + ind + "</td>"; //Date.now() 
    html += "<td>" + element.ordered + "</td>";
    html += "<td>" + element.notes + "</td>";
    html += "<td>" + '<i class="fa-solid fa-xmark delete"></i>' + "</td>";

    html += "</tr>";
    document.getElementById("tdata").innerHTML = html;

  });

   
  $(".delete").click(function () {

    var i = $(this).closest('tr').index();
    console.log(i)
    partDetails.splice(i,1); 
    console.log(partDetails)

    
    $(this).closest('tr').remove();

  });

});


});

// Add event listener for opening and closing details
$('#stock tbody').on('click', 'td.dt-control', function () {
  var tr = $(this).closest('tr');
  var row = tableData.row(tr);

  if (row.child.isShown()) {
    // This row is already open - close it
    row.child.hide();
    tr.removeClass('shown');
  } else {
    console.log(partDetails)
    // Open this row
    row.child(format(row.data())).show();
    tr.addClass('shown');
  }
});



// $("#childtablepart").on('click', '.deletechild', function () {
//   $(this).closest('tr').remove();
// });
  
// $("#editstock").on('click','.edit',function(){
//   var i = $(this).closest('tr').findIndex();
//   console.log('closest index',i)
// });


function updatestockdata(){                                                                                       // update stock

  console.log(currentStockIndex)

// debugger;
  //Getting all stock details and part details
  var sname = $("#sname").val();
  var etadate = $("#etadate").val();
  // var notes = $("#notes").val();

 //Getting username for created by
  var par = JSON.parse(localStorage.getItem('LoginDetails'));
  var createdby = par[0].username;

  //Getting current date
  var cdate = new Date(Date.now()).toLocaleString().split(',')[0];
  console.log(partDetails)
  var notes = partDetails[0].notes;

  //Getting Stock status
  var production = document.getElementById("production").checked;
  var water = document.getElementById("Water").checked;
  var warehouse = document.getElementById("Warehouse").checked;

  var stkstatus = "";

  if (production == true) {
    stkstatus = "On Production";
  } else if (water == true) {
    stkstatus = "On Water";
  } else if (warehouse == true) {
    stkstatus = "In Warehouse";
  }
  //part details
  // var partno = document.getElementById("partno").value
  // var ordered = document.getElementById("ordered").value
  // var notes = document.getElementById("notes").value

 var updateddata ={
  index: currentStockId,
  sname: sname,
  etadate: etadate,
  stkstatus: stkstatus,
  createdby: createdby,
  cdate: cdate,
  notes: notes,
  stockpart: partDetails
}
  stockDetails[currentStockIndex] = updateddata

  localStorage.setItem("stockList", JSON.stringify(stockDetails));

  delete updateddata['index'];
  delete updateddata['partDetails'];

  tableData.row(currentStockIndex).data(updateddata).draw();


}
function addpartData() {                                                                            //Add part data
  var partno = document.getElementById("partno").value
  var ordered = document.getElementById("ordered").value
  var notes = document.getElementById("notes").value

  if (partDetails == null) {
    partDetails = [];
  }

  if (stockDetails == null) {
    stockDetails = [];
    index = 0;
  }
  index = stockDetails.length;
  index++;

  partDetails.push({
    index: index,
    partno: partno,
    ordered: ordered,
    notes: notes,
  });

  var html = "";

  partDetails.forEach(function (element, index) {
    let ind = index + 1;
    html += "<tr>";
    html += "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + element.partno + "</td>";
    html += "<td>" + ind + "</td>"; //Date.now() 
    html += "<td>" + element.ordered + "</td>";
    html += "<td>" + element.notes + "</td>";
    html += "<td>" + '<i class="fa-solid fa-xmark delete"></i>' + "</td>";

    html += "</tr>";


    document.getElementById("tdata").innerHTML = html;


  });

  document.getElementById("partno").value = "";
  document.getElementById("ordered").value = "";
  document.getElementById("notes").value = "";

  
  $(".delete").click(function () {

    var i = $(this).closest('tr').index();
    console.log(i)
    partDetails.splice(i,1); 
    console.log(partDetails)
    
    $(this).closest('tr').remove();

  });
 
}


function addstockdata() {                                                                            // add stock data
  //debugger;                         

  var sname = $("#sname").val();
  var etadate = $("#etadate").val();
  var notes = $("#notes").val();

  //Getting username for created by
  var par = JSON.parse(localStorage.getItem('LoginDetails'));
  var createdby = par[0].username;

  //Getting current date
  var cdate = new Date(Date.now()).toLocaleString().split(',')[0];
  console.log(partDetails)
  var notes = partDetails[0].notes;

  //Getting Stock status
  var production = document.getElementById("production").checked;
  var water = document.getElementById("Water").checked;
  var warehouse = document.getElementById("Warehouse").checked;

  var stkstatus = "";

  if (production == true) {
    stkstatus = "On Production";
  } else if (water == true) {
    stkstatus = "On Water";
  } else if (warehouse == true) {
    stkstatus = "In Warehouse";
  }

 
  
  // $("#addstockbtn").click(function () {

  // if ($("#AddStockForm").valid() == true) {

  if (stockDetails == null) {

    stockDetails = [];

  }
  stockDetails.push({

    index: index,
    sname: sname,
    etadate: etadate,
    stkstatus: stkstatus,
    createdby: createdby,
    cdate: cdate,
    notes: notes,
    stockpart: partDetails,
  });

  index++;

  // $('.edit').setAttribute('data-id',index)



  tableData.row.add({
    "": "",
    "sname": sname,
    "etadate": etadate,
    "stkstatus": stkstatus,
    "createdby": createdby,
    "cdate": cdate,
    "notes": notes
  }).draw();


  document.getElementById("sname").value = "";
  document.getElementById("etadate").value = "";
  document.getElementById("stkstatus").value = "";
  document.getElementById("partno").value = "";
  document.getElementById("ordered").value = "";
  document.getElementById("notes").value = "";
  localStorage.setItem("stockList", JSON.stringify(stockDetails));

  }
// });
// }



$("#AddStockForm").validate({


  errorClass: 'msgerror',
  rules: {
    sname: {
      required: true,

    },
    etadate: {
      required: true,
    },
    partno: {
      required: true,
    }
   
  },
  messages: {
    sname: {
      required: "Enter Stock name",
    },
    partno: {
      required: "Enter Part number",
    },
    etadate: {
      required: "Enter ETA date",
    },
  },
  submitHandler: function (form) {
    form.submit();
  }
});

$("#AddPartForm").validate({

  errorClass: 'msgerror',
  rules: {

    partno: {
      required: true,

    },
    ordered: {
      required: true,
    },
    notes: {
      required: true,
    }
  },
  messages: {

    partno: {
      required: "Enter Part number",
      
    },
    ordered: {
      required: "Enter number of ordered parts",
    },
    notes: {
      required: "Enter notes",
    }
  },
  submitHandler: function (form) {
    form.submit();
  }
 
})
a=$("#AddPartForm").validate();
$("AddStockForm").validate();

$("#addpartdetails").click(function () {
  debugger;
  var form = $("#AddPartForm");
  form.validate();

  var partno = document.getElementById("partno").value
  var ordered = document.getElementById("ordered").value
  var notes = document.getElementById("notes").value

  if(partno==""||ordered==""||notes==""||!form.valid ){
                    swal("Error!", "Missing or improper input", "error");
    }
else{
  swal("Part Added!", "Part Details Added successfully", "success");

  $('#stockModal').modal("hide");
  $('#stockModal').on('hidden.bs.modal', function () {
      $('.modal-backdrop').remove();
  })

  return addpartData()
}

});


$("#addstockbtn").click(function () {
  debugger;
  var form = $("#AddStockForm");
  form.validate();

  var sname = document.getElementById("sname").value
  var etadate = document.getElementById("etadate").value 

  if(sname==""||etadate==""||!form.valid|| partDetails.length<1){
                    if(partDetails.length<1){
                      swal("Minimum 1 part Required!", "Atleast 1 part details required to add Stock", "warning");  
                      $("#myModal").show();

                    }
                    else{
                    swal("Error!", "Missing or improper input", "error");
                    $("#myModal").show();
                  }
    }
else{
  swal("Stock Added!", "Stock Details Added successfully", "success");
  $("#myModal").hide();

  return addstockdata();

}

});


$("#editstockbtn").click(function () {
  debugger;
  var form = $("#AddStockForm");
  form.validate();

  var sname = document.getElementById("sname").value
  var etadate = document.getElementById("etadate").value 

  if(sname==""||etadate==""||!form.valid|| partDetails.length<1){
                    if(partDetails.length<1){
                      swal("Minimum 1 part Required!", "Atleast 1 part details required to update Stock", "warning");  
                      $("#myModal").show();

                    }
                    else{
                    swal("Error!", "Missing or improper input", "error");
                    $("#myModal").show();
                  }
    }
else{
  swal("Stock Updated!", "Stock Details Updated successfully", "success");
  $("#myModal").hide();

  return updatestockdata();

}

});






//Date Picker
$(function () {
  $('input[name="etadate"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    maxYear: parseInt(moment().format('YYYY'), 10),
    placeholder: 'Date Picker'  
  });
});
