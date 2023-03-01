var partDetails = []; //global variables
var tableData;
var stockList = [];
var todayDate;
$(function () {
  $("#navbar").load("navbardata.html");
});

function format(d) {
  console.log(d);
  // `d` is the original data object for the row
  // var p = partDetails;
  // console.log(p)
  let p = d.partDetails;
  console.log(p);

  let childrow = "";
  // if (d.p.length > 0) {
  // console.log(partDetails)
  // if(d.p && d.p.length>0){
  childrow += '<table cellpadding="2" cellspacing="0" class="table border rounded">';
  childrow += '<thead><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead>';
  childrow += '<tbody>';
  p.forEach((e, index) => {

    let ind = (index + 1);

    childrow += '<tr><td>' + ind + '</td><td>' + e.partno + '</td><td>' + e.ordered + '</td><td>' + Math.floor(Math.random() * 10) + '</td><td><h5>x</h5></td></tr>';
  });
  childrow += '</tbody></table>';
  // }
  return childrow;
}


$(document).ready(function () {
  todayDate = new Date(Date.now()).toLocaleString().split(',')[0];
  stockList = JSON.parse(localStorage.getItem('stockList') || '[]');
  console.log(stockList)

  if (stockList == null) {
    stockList = []
    localStorage.setItem('stockList', stockList)
  }
  console.log(stockList)

  // toolbar name


  //  daterange
  $(function () {
    $('input[name="etadatename"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
      var years = moment().diff(start, 'years');

    });
  });



  // datatable code
  var modal = document.getElementById('Addstockmodel');
 
  tableData = $('#stock').DataTable({
    

    language: {

      "info": "items _PAGE_ to _PAGES_ of _PAGES_ total ",
      paginate: {
        next: '&#62',
        previous: '&#60',
        info: true
    
      },
      searchPlaceholder: " Search here...",
      search: '<i class="fa fa-search"></i> ',
   
    },

    "dom": '<"toolbar">frtip',
    bFilter: true, bInfo: true,
    fnInitComplete: function () {
      $('div.toolbar').html(' <h4>Stock</h4>');
      $('#stock_filter').prepend(modal);
    },

    lengthChange: false,
    info: false,
    columns: [
      {
        className: 'dt-control toHide',
        orderable: false,
        data: null,
        defaultContent: '',
      },



      { title: 'Stock Name', orderable: false, className: "text-left colSpan", data: "sname" },
      { title: 'ETA Date', orderable: false, className: "text-center", data: "etadate" },
      { title: 'Stock Location', orderable: false, className: "text-center", data: "stkstatus" },
      { title: 'Created By', orderable: false, className: "text-center", data: "createdby" },
      { title: 'Created Date', orderable: false, className: "text-center", data: "createdDate" },
      { title: 'Notes', orderable: false, className: "text-center", data: "notes" },
      { title: 'Action', orderable: false, className: "text-center", 
      data: null,
      className: "dt-center editor-edit dt-center editor-delete",
      defaultContent: '<i class="fa fa-pencil"/> <i class="fa fa-history"/>',
      orderable: false
    },
  
    ],

    order: [[1, 'asc']],
    data: stockList
  });

  $('th.toHide').hide();
  $('th.colSpan').attr("colspan", 2);

  // Edit record
  // $('#stock').on('click', 'td.editor-edit', function (e) {
  //   e.preventDefault();

  //   editor.edit($(this).closest('tr'), {
  //     title: 'Edit record',
  //     buttons: 'Update'
  //   });
  // });

  // Delete a record
  // $('#stock').on('click', 'td.editor-delete', function (e) {
  //   e.preventDefault();

  //   editor.remove($(this).closest('tr'), {
  //     title: 'Delete record',
  //     message: 'Are you sure you wish to remove this record?',
  //     buttons: 'Delete'
  //   });
  // });

  // Add event listener for opening and closing details
  $('#stock tbody').on('click', 'td.dt-control', function () {
    var tr = $(this).closest('tr');
    var row = tableData.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });
});


function addpartData() {
  debugger;
  // var partDetails = [];
  console.log(partDetails);
  // var partDetails = localStorage.getItem("partDetails");
  debugger


  var partno = document.getElementById('partname').value;
  var ordered = document.getElementById('orderd').value;
  var notes = document.getElementById('notes').value;

  // var partDetails= JSON.parse(partDetails);
  if (partDetails == null) {

    partDetails = [];

  }
  partDetails.push({
    partno: partno,
    ordered: ordered,
    notes: notes,
  });
  // localStorage.setItem("partDetails", JSON.stringify(partDetails));

  var html = "";


  partDetails.forEach(function (element, index) {
    let ind = index + 1;
    html += "<tr>";
    html += "<td>" + element.partno + "</td>";
    html += "<td>" + ind + "</td>";
    html += "<td>" + element.ordered + "</td>";
    html += "<td>" + element.notes + "</td>";
    html += "</tr>";


    document.getElementById("tdata").innerHTML = html;
  });


  // document.getElementById ("#partname").value="";
  // document.getElementById ("#orderd").value="";
  // document.getElementById ("#notes").value="";

}


function addstockdata() {
  debugger;
  // var stockDetails = [];
  console.log("Partdetails in stock function:", partDetails);

  var loginusername = JSON.parse(localStorage.getItem('loggedUser'));

  var createdby = loginusername.name;
  console.log(createdby);
  var sname = document.getElementById('stockname').value;
  var etadate = document.getElementById('etadate').value;
  var stkstatus = document.getElementById('stvalue').getAttribute("value");
  var createdby = createdby;
  var notes = document.getElementById('notes').value;
  console.log(notes);


  // stockDetails.push({
  //   sname: sname,
  //   etadate: etadate,
  //   stkstatus: stkstatus,
  //   createdby: createdby,
  //   notes: notes,
  // });
  console.log(stockList)
  stockList.push({
    "sname": sname,
    "etadate": etadate,
    "stkstatus": stkstatus,
    "createdby": createdby,
    "createdDate": todayDate,
    "notes": notes,
    "partDetails": partDetails

  });
  console.log(stockList)
  tableData.row.add(
    {
      "sname": sname,
      "etadate": etadate,
      "stkstatus": stkstatus,
      "createdby": createdby,
      "createdDate": todayDate,
      "notes": notes,
    }
  ).draw();
  // tableData.row.add(['', sname, etadate, stkstatus, createdby, '', notes, '']).draw();

  console.log("stockList", stockList)

  localStorage.setItem("stockList", JSON.stringify(stockList));

  // var stockList = JSON.parse(localStorage.getItem("stockList"));

  // var html = "";



  // $('#maintdata').html('')
  // console.log(stockList);
  // stockList.forEach(function (element, index) {
  //   html += "<tr>";
  //   html += "<td>" + "" + "</td>";
  //   html += "<td>" + element.sname + "</td>";
  //   html += "<td>" + element.etadate + "</td>";
  //   html += "<td>" + element.stkstatus + "</td>";
  //   html += "<td>" + element.createdby + "</td>";
  //   html += "<td>" + element.createdDate + "</td>";
  //   // html += "<td>" + element.ordered + "</td>";
  //   html += "<td>" + element.notes + "</td>";
  //   html += "</tr>";


  //   document.getElementById("maintdata").innerHTML = document.getElementById("maintdata").innerHTML + html;
  // });


  // document.getElementById("sname").value="";
  // document.getElementById("etadate").value="";
  // document.getElementById("stkstatus").value="";
  // document.getElementById("partname").value="";
  // document.getElementById("orderd").value="";
  // document.getElementById("notes").value="";



}