//global variables
var partDetails = [];
var stockDetails = [];
var index = 1;
var tableData;

window.onload = (event) => {
  //debugger;
  if (localStorage.getItem("LoginDetails") == null) {
    window.location.replace("Badeloft.html");
  } else {
    var par = JSON.parse(localStorage.getItem('LoginDetails'));
    var u = par[0].username;
    var uname = document.getElementById("username");
    uname.innerHTML = u;
  }
};

function logout() {
  window.location.replace("Badeloft.html")
  localStorage.clear();
}



// Data table stock
/* Formatting function for row details - modify as you need */
function format(d) {
  //debugger;
  console.log(partDetails);
  console.log(d)
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
  childrow += '<thead><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead>';
  childrow += '<tbody>';

  q.forEach((e) => {

    childrow += '<tr><td>' + e.index + '</td><td>' + e.partno + '</td><td>' + e.ordered + '</td><td>' + e.index + '</td><td>' + '<i class="fa-solid fa-xmark deletechild"></i>' + '</td</tr>';
  });
  childrow += '</tbody></table>';
  return childrow;
}

$(document).ready(function () {

  $("#addpartno").click(function () {
    $("#innermodal").modal("show");
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
        className: "text-center"
      },
      {
        data: "stkstatus",
        title: 'Stock Location',
        orderable: false,
        className: "text-center"
      },
      {
        data: "createdby",
        title: 'Created By',
        orderable: false,
        className: "text-center"
      },
      {
        data: "cdate",
        title: 'Created Date',
        orderable: false,
        className: "text-center"
      },
      {
        data: "notes",
        title: 'Notes',
        orderable: false,
        className: "text-center"
      },
      {
        data: null,
        title: 'Action',
        orderable: false,
        defaultContent: '<div class="action-buttons">' +
          '<span id="editstock" class="edit edit-stock" data-id="' + index + '"><i class="fas fa-pen"></i></span> ' +
          '<span class="history">&nbsp;&nbsp;<i class="fas fa-history"></i></span> ' +
          '</div>',
        className: 'row-edit dt-center',
      }
    ]

  });

//opening modal while clicking on the edit button
$(".edit-stock").on('click', function () {
  var i = $(this).closest('tr').index();
  $("#myModal").modal("show");
  console.log(stockDetails[i])
  console.log(stockDetails[i].stockpart[0].partno)

  document.getElementById("sname").value = stockDetails[i].sname;
  document.getElementById("etadate").value = stockDetails[i].etadate;


  var html = "";

  stockDetails[i].stockpart.forEach(function (element, index) {
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


$("#tdata").on('click', '.delete', function () {
  $(this).closest('tr').remove();
});
$("#childtablepart").on('click', '.deletechild', function () {
  $(this).closest('tr').remove();
});



// $("#editstock").on('click','.edit',function(){
//   var i = $(this).closest('tr').findIndex();
//   console.log('closest index',i)
// });


function addpartData() {
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

}


function addstockdata() {
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
      required: "Enter Part number"
    },
    etadate: {
      required: "Enter ETA date"
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

//Date Picker
$(function () {
  $('input[name="etadate"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    maxYear: parseInt(moment().format('YYYY'), 10)
  });
});