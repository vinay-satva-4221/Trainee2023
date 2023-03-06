var partDetails = []; //global variables
var tableData;
var stockList = [];
var todayDate;
var datatableIndex;
$(function () {
  $("#navbar").load("navbardata.html");
});

function format(d) {
  console.log(d);
  // `d` is the original data object for the row
 


  var stocks = JSON.parse(localStorage.getItem("stockList"));
  var currentPartDeatils = stocks.find((x) => x.sname == d.sname).partDetails;


  let childrow = "";

  childrow += '<table cellpadding="2" cellspacing="0" class="table border rounded">';
  childrow += '<thead><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead>';
  childrow += '<tbody>';
  currentPartDeatils.forEach((e, index) => {

    let ind = (index + 1);

    childrow += '<tr><td>' + ind + '</td><td>' + e.partno + '</td><td>' + e.ordered + '</td><td>' + Math.floor(Math.random() * 10) + '</td><td>'+"<button type='button' class='btn-close delete' aria-label='Close' ></button>"+'</td>'+'</tr>';
  });
  childrow += '</tbody></table>';
  
  return childrow;
}


$(document).ready(function () {

  $('#addpartdatais').click(function () {
    $('#partform').valid() == true
  })
  //part data popup validation
  $("#partform").validate({
    rules: {
      partname: {
        required: true,
        validpartname: true
      },
      orderd: {
        required: true,
        validorderd: true
      },
    },
    messages: {
      partname: {
        required: "Enter partnumber",
        // validpartname:""
      },
      orderd: {
        required: "Enter orderd",
        // validorderd: ""
      },
    },
  });

  $("#Addstockmodel").click(function(){
    document.getElementById("stockform").reset();

  });

  todayDate = new Date(Date.now()).toLocaleString().split(',')[0];
  stockList = JSON.parse(localStorage.getItem('stockList') || '[]');
  console.log(stockList)

  if (stockList == null) {
    stockList = []
    localStorage.setItem('stockList', stockList)
  }
  console.log(stockList);

  // datatable code
  var modal = document.getElementById('Addstockmodel');
 
  tableData = $('#stock').DataTable({
   

    language: {

      info: "Items _START_ to _END_ of _TOTAL_ total",
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
    info:true,
    
    columns: [
      {
        className: ' toHide',
        orderable: false,
        data: null,
        defaultContent: '',
      },



      { title: 'Stock Name', orderable: false, className: "text-left dt-control colSpan", data: "sname" },
      { title: 'ETA Date', orderable: false, className: "text-center  ", data: "etadate" },
      { title: 'Stock Location', orderable: false, className: "text-center", data: "stkstatus" },
      { title: 'Created By', orderable: false, className: "text-center", data: "createdby" },
      { title: 'Created Date', orderable: false, className: "text-center", data: "createdDate" },
      // { title: 'Notes', orderable: false, className: "text-center", data: "notes" },
      { title: 'Action', orderable: false, className: "text-center", 
      data: null,
      className: "dt-center editor-edit  history",
      defaultContent: '<i class="fa fa-pencil"/> <i class="fa fa-history"/>',
      orderable: false
    },
  
    ],

    order: [[1, 'asc']],
    data: stockList
  });

  $('th.toHide').hide();
  $('th.colSpan').attr("colspan", 2);


  //Edit record
  $('#stock tbody').on('click', '.editor-edit', function (e) {
    e.preventDefault();
   partDetails=[];
    
    // var indexvalue = $(this).closest('tr').index();
    datatableIndex = tableData.row($(this).parents('tr')).index()
    console.log(datatableIndex)
    var indexvalue = datatableIndex;

    $("#addstockdatais").hide();
    $("#updatestockdetails").show();
  
    $("#stockmodelid").modal("show");
    $("#titleofmodel").html("Edit Stock");

    
    console.log(stockList[datatableIndex]);
    // indexvalue = stockList[datatableIndex].index;
  

    document.getElementById("stockname").value = stockList[datatableIndex].sname;
    document.getElementById("etadate").value = stockList[datatableIndex].etadate;
    
    partDetails = stockList[datatableIndex].stockList;
  
    var html = "";
  
    stockList[indexvalue].partDetails.forEach(function (element, index) {
      let ind = index + 1;
      
      html += "<tr>";
      html += "<td>" + element.partno + "</td>";
      html += "<td>" + ind + "</td>"; 
  
      html += "<td>" + element.ordered + "</td>";
      html += "<td>" + element.notes + "</td>";
      html += "<td>" + '<i class="fa-solid fa-xmark delete"></i>' + "</td>";
  
      html += "</tr>";
  
  
      document.getElementById("tdata").innerHTML = html;
  
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
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });

  //delete parttable row in array
 
  $("#tdata").on('click','.delete',function(){
    var i = $(this).closest('tr').index();
    console.log(i)
    partDetails.splice(i,1); 
    console.log(partDetails)
    
    $(this).closest('tr').remove();
  });


});


  function updatestockdata(){                                                                                       // update stock
    
      //Getting all stock details and part details
      var stockname = $("#stockname").val();
      var etadate = $("#etadate").val();
     
    
     //Getting username for created by
      var par = JSON.parse(localStorage.getItem('loggedUser'));
      var createdby = par.name;
      console.log('createdby');
    
      //Getting current date
      var createdDate = new Date(Date.now()).toLocaleString().split(',')[0];
    
      // var notes = partDetails[0].notes;
    
      //Getting Stock status
      // var production = document.getElementById("onproduction");
      // var water = document.getElementById("onwater");
      // var warehouse = document.getElementById("onwarehouse");
    
      // var stkstatus = "";
    
      // if (production == true) {
      //   stkstatus = "On Production";
      // } else if (water == true) {
      //   stkstatus = "On Water";
      // } else if (warehouse == true) {
      //   stkstatus = "In Warehouse";
      // }

      var stkstatus = document.getElementById('stvalue').getAttribute("value");
      console.log(stkstatus);
      //part details
      // var partno = document.getElementById("partno").value
      // var ordered = document.getElementById("ordered").value
      // var notes = document.getElementById("notes").value
    
    
  
     var updateddata ={
      index: datatableIndex,
      sname: stockname,
      etadate: etadate,
      stkstatus: stkstatus,
      createdby: createdby,
      createdDate: createdDate,
  
      partDetails: partDetails
    }
    stockList[datatableIndex] = updateddata
    
      localStorage.setItem("stockList", JSON.stringify(stockList));
    
   
      delete updateddata['index'];
  delete updateddata['partDetails'];
      tableData.row(datatableIndex).data(updateddata).draw();
      // tableData.row.add(updateddata).draw();
    
    
    }



function addpartData() {

  




  // var partDetails = [];
  console.log(partDetails);
  // var partDetails = localStorage.getItem("partDetails");
 


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

    
    // id='row" + id + "
    html += "<tr>";
    html += "<td>" + element.partno + "</td>";
    html += "<td>" + ind + "</td>";
   
    html += "<td>" + element.ordered + "</td>";
    html += "<td>" + element.notes + "</td>";
    html += "<td>" + '<i class="fa fa-times delete aria-hidden="true"></i>'+ "</td>";
    // html += "<td>" + '<button onclick="deleteRecord(" + id + ")">Remove</button> '+ "</td>";
    
    html += "</tr>";

    document.getElementById("tdata").innerHTML = html;
    
  });

}


function addstockdata() {

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
}
//array data delete code
// function deleteRecord(id) {
//   document.querySelector('#row' + id).remove();
//   const updatedArray = users.filter((user) => Number(user[0]) !== id);
//   console.log(updatedArray);
// }


