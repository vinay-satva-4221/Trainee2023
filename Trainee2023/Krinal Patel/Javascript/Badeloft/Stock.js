//global variables
var partDetails = []; 
var stockDetails = []; 
var tableData; 

window.onload = (event) => {
  debugger;
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
  debugger;
  // `d` is the original data object for the row
  // var p = partDetails;
  // console.log(p)
  let p = JSON.parse(localStorage.getItem("Part"));

  let childrow = "";
  // if (d.p.length > 0) {
  // console.log(partDetails)
  // if(d.p && d.p.length>0){
  childrow += '<table cellpadding="2" cellspacing="0" class="table border rounded">';
  childrow += '<thead><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead>';
  childrow += '<tbody>';
  p.forEach((e, index) => {

    let ind = (index + 1);

    childrow += '<tr><td>' + ind + '</td><td>' + e.partno + '</td><td>' + e.ordered + '</td></tr>';
  });
  childrow += '</tbody></table>';
  // }
  return childrow;
}

$(document).ready(function () {

  $("#addpartno").click(function () {
    $("#innermodal").modal("show");
  });


  tableData = $('#stock').DataTable({
    data: stockDetails,
    lengthChange: false,
    info: false,
    paging: false,
    columns: [{
        className: 'dt-control',
        orderable: false,
        data: null,
        defaultContent: '',

      },
      {
        title: 'Stock Name',
        orderable: false,
        className: "text-center"
      },
      {
        title: 'ETA Date',
        orderable: false,
        className: "text-center"
      },
      {
        title: 'Stock Location',
        orderable: false,
        className: "text-center"
      },
      {
        title: 'Created By',
        orderable: false,
        className: "text-center"
      },
      {
        title: 'Created Date',
        orderable: false,
        className: "text-center"
      },
      {
        title: 'Notes',
        orderable: false,
        className: "text-center"
      },
      {
        title: 'Action',
        orderable: false,
        className: "text-center"
      }
    ],
    order: [
      [1, 'asc']
    ],
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
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });
});

function addpartData() {

  var partno = document.getElementById("partno").value
  var ordered = document.getElementById("ordered").value
  var notes = document.getElementById("notes").value

  if (partDetails == null) {

    partDetails = [];

  }
  partDetails.push({
    partno: partno,
    ordered: ordered,
    notes: notes,
  });

  localStorage.setItem("Part", JSON.stringify(partDetails));

  var html = "";

  partDetails.forEach(function (element, index) {
    let ind = index + 1;
    html += "<tr>";
    html += "<td>" + element.partno + "</td>";
    html += "<td>" + ind + "</td>"; //Date.now() 
    html += "<td>" + element.ordered + "</td>";
    html += "<td>" + element.notes + "</td>";
    html += "</tr>";


    document.getElementById("tdata").innerHTML = html;
  });

  document.getElementById("partno").value = "";
  document.getElementById("ordered").value = "";
  document.getElementById("notes").value = "";

}

function addstockdata() {
  debugger;

  console.log("Partdetails in stock function:", partDetails);

  //Todo
  // 1.Get data from Form
  // 2. Create Stock Object as per json format
  // 3. add list data into stock object
  // 4. Append stock object in to stock list local storage

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
    sname: sname,
    etadate: etadate,
    stkstatus: stkstatus,
    createdby: createdby,
    cdate: cdate,
    part: partDetails

  });

  tableData.row.add(['', sname, etadate, stkstatus, createdby, cdate, notes, '']).draw();

  // var stockList = [
  //   {
  //     "sname" : sname,
  //     "etadate" : etadate,
  //     "stkstatus" : stkstatus,
  //     "createdby" : cdate,
  //     "notes":notes,
  //     // "partlist" :[{
  //     //   partDetails
  //     // }],
  //     // "stocklist" : stockDetails,
  //     "partlist" : partDetails,

  //   }
  // ]

  localStorage.setItem("stockList", JSON.stringify(stockDetails));

  document.getElementById("sname").value = "";
  document.getElementById("etadate").value = "";
  document.getElementById("stkstatus").value = "";
  document.getElementById("partno").value = "";
  document.getElementById("ordered").value = "";
  document.getElementById("notes").value = "";
}