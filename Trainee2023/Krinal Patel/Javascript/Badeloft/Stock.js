var partDetails=[]; //global variables
var stockDetails =[];
var tableData;
window.onload = (event) => {debugger;
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
// Data table stock
/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return (
        '<table cellpadding="2" cellspacing="0" class="table border rounded"' +
        '<tr>' +
        '<th>#</th>' +
        '<th>Part Number</th>' +
        '<th>Ordered</th>' +
        '<th>Assigned</th>' +
        '<th>Action</th>'+
        '</tr>' +
        '<td>1</td>' +
        '<td>BW-01-S-M</td>' +
        '<td>5</td>' +
        '<td>5</td>' +
        '<td>Close</td>' +
      
        '</table>'
    );
  }
  
  $(document).ready(function () {
    
    $("#addpartno").click(function () {
      $("#innermodal").modal("show");
    });

    // let s = JSON.parse(localStorage.getItem("sto"));
    
    // console.log("stockDetails",s);

    tableData = $('#stock').DataTable({
        data:stockDetails,
        lengthChange: false,  
        info: false,
        paging:false,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
                
            },
  
            { title: 'Stock Name' ,orderable:false,className: "text-center"},
            { title: 'ETA Date' ,orderable:false,className: "text-center"},
            { title: 'Stock Location',orderable:false,className: "text-center" },
            { title: 'Created By' ,orderable:false,className: "text-center"},
            { title: 'Created Date' ,orderable:false,className: "text-center"},
            { title: 'Notes',orderable:false,className: "text-center" },
            { title: 'Action' ,orderable:false,className: "text-center"}  
  
        ],
        order: [[1, 'asc']],
    });

    // tableData.row.add([1,1,1,1,1,1,1,1]).draw();
  //   tableData.row.add([{"sname":       "Tiger Nixon",
  //   "etadate":   "System Architect",
  //   "stockLocation":   "System Architect",
  //   "stkstatus":     "$3,120",
  //   "createdby": "2011/04/25",
  //   "cdate":     "Edinburgh",
  // "action": "t43"}]).draw();
  
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
  // var dataSet = [
  //   // ["","C100", "12/08/2021", "Warehouse", "Kenneth Woodard", "12/08/2021", "Lorem lpsum is simply dummy text",""],
  // ];
 

// function showpartData() {debugger;
//   var partDetails;
//   // partDetails = JSON.parse(localStorage.getItem("partDetails"));
// }

function addpartData() {
debugger;
// var partDetails = [];
console.log(partDetails);
// var partDetails = localStorage.getItem("partDetails");
debugger

  var partno = document.getElementById("partno").value
  var ordered = document.getElementById("ordered").value
  var notes = document.getElementById("notes").value

  // var partDetails= JSON.parse(partDetails);
if(partDetails==null){

    partDetails=[];
  
}
partDetails.push({
  partno: partno,
  ordered: ordered,
  notes: notes,   
});
// localStorage.setItem("partDetails", JSON.stringify(partDetails));

  var html = "";


  //document.getElementById("tdata").innerHTML =document.getElementById("tdata").innerHTML+ html;

  partDetails.forEach(function (element, index) {
      html += "<tr>";
      html += "<td>" + element.partno + "</td>";
      html += "<td>" + Date.now() + "</td>";
      html += "<td>" + element.ordered + "</td>";
      html += "<td>" + element.notes + "</td>";
      html += "</tr>";


  document.getElementById("tdata").innerHTML = html;
  });

  document.getElementById("partno").value="";
  document.getElementById("ordered").value="";
  document.getElementById("notes").value="";

}


function addstockdata(){
  debugger;
  // var stockDetails =[];
console.log("Partdetails in stock function:",partDetails);

  //Todo
  // 1.Get data from Form
  // 2. Create Stock Object as per json format
  // 3. add list data into stock object
  // 4. Append stock object in to stock list local storage



  // var sname = document.getElementById("sname").value
  // var etadate = document.getElementById("etadate").value
  // var stkstatus = document.getElementById("stkstatus").value
  // var partno = document.getElementById("partno").value
  // var ordered = document.getElementById("ordered").value
  // var notes = document.getElementById("notes").value
  // stockDetails = JSON.parse(localStorage.getItem("partDetails"));
  // console.log(partDetails)

  var sname = $("#sname").val();
  var etadate = $("#etadate").val();
  var stkstatus = $("#stkstatus").val();
  // var partno = $("#partno").val();
  // var ordered = $("#ordered").val();
  // var notes = $("#notes").val();
  //Getting username for created by
  var par = JSON.parse(localStorage.getItem('LoginDetails'));
  var createdby = par[0].username;
  
  //Getting current date
  var cdate = new Date(Date.now()).toLocaleString().split(',')[0] ;
console.log(partDetails)
  var notes = partDetails[0].notes;


  stockDetails.push({
                sname: sname,
                etadate: etadate,
                stkstatus: stkstatus,   
                createdby: createdby,  
                cdate: cdate,    
                notes:notes,       
  });

  // tableData.row.add({
  //   sname: sname,
  //   etadate: etadate,
  //   stkstatus: stkstatus,   
  //   createdby: createdby,  
  //   cdate: cdate,    
  //   notes:notes}).draw();
  tableData.row.add( ['',sname,etadate,stkstatus,createdby,cdate,notes,''] ).draw();
  var stockList = [
    {
      "sname" : sname,
      "etadate" : etadate,
      "stkstatus" : stkstatus,
      "createdby" : cdate,
      "notes":notes,
      // "partlist" :[{
      //   partDetails
      // }],
      // "stocklist" : stockDetails,
      "partlist" : partDetails,

    }
  ]
  console.log("stock array",stockDetails)

 console.log("SList",stockList)

  localStorage.setItem("stockList", JSON.stringify(stockList));
  
  var stockList = JSON.parse(localStorage.getItem("stockList"));

// var html = "";

// stockDetails.forEach(function (element, index) {
//       html += "<tr>";
//       html += "<td>" + "" + "</td>";
//       html += "<td>" + element.sname + "</td>";
//       html += "<td>" + element.etadate + "</td>";
//       html += "<td>" + element.stkstatus + "</td>";
//       html += "<td>" + element.createdby + "</td>";
//       html += "<td>" + element.cdate + "</td>";
//       html += "<td>" + element.notes + "</td>";
//       html += "</tr>";
   
//       document.getElementById("maintdata").innerHTML = html;

  // document.getElementById("maintdata").innerHTML =document.getElementById("maintdata").innerHTML+ html;
  // });

  
  document.getElementById("sname").value="";
  document.getElementById("etadate").value="";
  document.getElementById("stkstatus").value="";
  document.getElementById("partno").value="";
  document.getElementById("ordered").value="";
  document.getElementById("notes").value="";



}
