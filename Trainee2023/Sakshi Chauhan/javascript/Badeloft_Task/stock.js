var SecondPartDetail = []; 
var tableData;
var StockDetails = [];
var todayDate;
var datatableIndex;

function format(d) {
  console.log(d);
 
  var stocks = JSON.parse(localStorage.getItem("StockDetails"));
  var currentPartDeatils = stocks.find((x) => x.sname == d.sname).SecondPartDetail;
  let childrow = "";

  childrow += '<table cellpadding="2" cellspacing="0" id="ChildTableStock" class="table border">';
  childrow += '<thead><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead>';
  childrow += '<tbody>';
  currentPartDeatils.forEach((e, index) => {

    let ind = (index + 1);

    childrow += '<tr><td>' + ind + '</td><td>' + e.partno + '</td><td>' + e.ordered + '</td><td>' + Math.floor(Math.random() * 10) + '</td><td>'+"<button type='button' class='btn-close delete' aria-label='Close' ></button>"+'</td>'+'</tr>';
  });
  childrow += '</tbody></table>';
  
  return childrow;
}
window.onload = (event) => {
  if (localStorage.getItem("Badeloft-Details") == null) {
    window.location.replace("login.html");
  }
  else {
    var par = JSON.parse(localStorage.getItem('Badeloft-Details'));
    var u = par[0].username;
    var uname = document.getElementById("username");
    uname.innerHTML = u;
  }
};

function logout() {
  window.location.replace("login.html")
  localStorage.clear();
}

$(document).ready(function () {
  $.validator.addMethod('ValidStockName',
  function (value) {
    return /^[a-zA-Z]\-\d{3}$/.test(value)
  },
);

$('#AddStockForm').validate({
  rules: {
    StockName: {
      required: true,
      ValidStockName: true,
    },
    ETADate: {
      required: true
    },
  },
  messages: {
    StockName: {
      required: "Enter Stock Name",
      ValidStockName: "Please Enter Valid Stock Name",
    },
    ETADate: {
      required: "Select ETADate"
    },
  },
});
$('#PartNumberForm').validate({
  rules: {
    partNo: {
      required: true
    },
    order: {
      required: true
    },
    notes: {
      required: true
    },
  },
  messages: {
    partNo: {
      required: "Enter Part Number"
    },
    order: {
      required: "Enter Ordered number"
    },
    notes: {
      required: "Enter Any Notes"
    },
  }
})
  $("#AddStock").click(function(){
    document.getElementById("AddStockForm").reset();

  });

  todayDate = new Date(Date.now()).toLocaleString().split(',')[0];
  StockDetails = JSON.parse(localStorage.getItem('StockDetails') || '[]');
  console.log(StockDetails)

  if (StockDetails == null) {
    StockDetails = []
    localStorage.setItem('StockDetails', StockDetails)
  }
  console.log(StockDetails);

  // datatable code
  var modal = document.getElementById("AddStock");
 
  tableData = $('#Stock_Table').DataTable({
   

    language: {

      info: "Items _START_ to _END_ of _TOTAL_ total",
      paginate: {
        next: '&#62',
        previous: '&#60',
        info: true
    
      },
      search: "_INPUT_",
      searchPlaceholder: 'Search...',
   
   
    },

    "dom": '<"toolbar">frtip',
    bFilter: true, bInfo: true,
    fnInitComplete: function () {
      $('div.toolbar').html(' <h4>Stock</h4>');
      $('#Stock_Table_filter').prepend(modal);
    },

    lengthChange: false,
    info:true,
    
    columns: [
      {
        className: 'toHide',
        orderable: false,

        defaultContent: '',
      },



      { title: 'Stock Name', orderable: false, className: "text-start dt-control colSpan", data: "sname" },
      { title: 'ETA Date', orderable: false, className: "text-center  ", data: "etadate" },
      { title: 'Stock Location', orderable: false, className: "text-center", data: "SelectedRadio" },
      {title: 'Created By', orderable: false, className: "text-center", data: "createdby"},
      { title: 'Created Date', orderable: false, className: "text-center", data: "createdDate" },
      // { title: 'Notes', orderable: false, className: "text-center", data: "notes" },
      { title: 'Action', orderable: false, className: "text-center", 
      data: null,
      className: "dt-center editor-edit  history",
      defaultContent: '<i class="fa fa-pen"/> <i class="fa fa-history"/>',
      orderable: false
    },
  
    ],

    order: [[1, 'asc']],
    data: StockDetails
  });
  //delete part table data
  $("#ModalData").on('click','.delete',function(){
    var i = $(this).closest('tr').index();
    console.log(i)
    SecondPartDetail.splice(i,1); 
    console.log(SecondPartDetail)
    
    $(this).closest('tr').remove();
  });
  $('th.toHide').hide();
  $('th.colSpan').attr("colspan", 2);


  //Edit record
  $('#Stock_Table tr').on('click', '.editor-edit', function (e) {
    debugger
    e.preventDefault();
    SecondPartDetail=[];
    
    // var indexvalue = $(this).closest('tr').index();
    datatableIndex = tableData.row($(this).parents('tr')).index()
    console.log(datatableIndex)
    var indexvalue = datatableIndex;

    // $("#addstockdatais").hide();
    // $("#AddNewStock").show();
  
    $("#AddNewStock").modal("show");
    // $("#titleofmodel").html("Edit Stock");

    
    console.log(StockDetails[datatableIndex]);
    // indexvalue = StockDetails[datatableIndex].index;
  

    document.getElementById("StockName").value = StockDetails[datatableIndex].sname;
    document.getElementById("ETADate").value = StockDetails[datatableIndex].etadate;
    
    SecondPartDetail = StockDetails[datatableIndex].StockDetails;
  
    var html = "";
  
    StockDetails[indexvalue].SecondPartDetail.forEach(function (element, index) {
      let ind = index + 1;
      
      html += "<tr>";
      html += "<td>" + element.partno + "</td>";
      html += "<td>" + ind + "</td>"; 
  
      html += "<td>" + element.ordered + "</td>";
      html += "<td>" + element.notes + "</td>";
      html += "<td>" + '<i class="fa-solid fa-xmark delete"></i>' + "</td>";
  
      html += "</tr>";
  
  
      document.getElementById("stockbody").innerHTML = html;
  
    });

    
        
        
  });



  // Add event listener for opening and closing details
  $('#Stock_Table tbody').on('click', 'td.dt-control', function () {
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

  $('#AddPartNumber').click(function () {
    $("#partNo").val("");
    $("#order").val("");
    $("#notes").val("");
    $('#addpartModal').modal('show');
  });


  $('#AddStock').click(function () {
    $("#StockName").val("");
    $("#ETADate").val("");
    $('#AddNewStock').modal('show');
  });

});


  function updatestockdata(){                                                                                       // update stock
    
      //Getting all stock details and part details
      var stockname = $("#StockName").val();
      var etadate = $("#ETADate").val();
     
    
     //Getting username for created by
     var GetName = JSON.parse(localStorage.getItem('Badeloft-Details'));
     var createdby  = GetName[0].username;
     console.log(createdby);
    
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

    
  var SelectedRadio = document.forms.AddStockForm.StockStatus.value;
  console.log(SelectedRadio);
      // var partno = document.getElementById("partno").value
      // var ordered = document.getElementById("ordered").value
      // var notes = document.getElementById("notes").value
    
    
  
     var updateddata ={
      index: datatableIndex,
      sname: stockname,
      etadate: etadate,
      SelectedRadio: SelectedRadio,
      createdby: createdby,
      createdDate: createdDate,
  
      SecondPartDetail: SecondPartDetail
    }
    StockDetails[datatableIndex] = updateddata
    
      localStorage.setItem("StockDetails", JSON.stringify(StockDetails));
    
   
      delete updateddata['index'];
  delete updateddata['SecondPartDetail'];
      tableData.row(datatableIndex).data(updateddata).draw();
      // tableData.row.add(updateddata).draw();
    
    
    }





  


    $('#savePart').click(function () {

      if ($('#PartNumberForm').valid() == true) {

  // var partDetails = [];
  console.log(SecondPartDetail);
  // var partDetails = localStorage.getItem("partDetails");
 


  var partno = document.getElementById('partNo').value;
  var ordered = document.getElementById('order').value;
  var notes = document.getElementById('notes').value;

  // var partDetails= JSON.parse(partDetails);
  if (SecondPartDetail == null) {

    SecondPartDetail = [];

  }
  SecondPartDetail.push({
    partno: partno,
    ordered: ordered,
    notes: notes,
  });
  // localStorage.setItem("partDetails", JSON.stringify(partDetails));

  var html = "";


  SecondPartDetail.forEach(function (element, index) {
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

    document.getElementById("ModalData").innerHTML = html;
    $('#addpartModal').modal('hide');

  });

}
    });

$('#saveStock').click(function () {

  if ($('#AddStockForm').valid() == true) {

  console.log("SecondPartDetail in stock function:", SecondPartDetail);

  var GetName = JSON.parse(localStorage.getItem('Badeloft-Details'));
  var createdby = GetName[0].username;
  console.log(createdby);
  var sname = document.getElementById('StockName').value;
  var etadate = document.getElementById('ETADate').value;
  var SelectedRadio = document.forms.AddStockForm.StockStatus.value;
  console.log(SelectedRadio);
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
  console.log(StockDetails)
  StockDetails.push({
    "sname": sname,
    "etadate": etadate,
    "SelectedRadio": SelectedRadio,
    "createdby": createdby,
    "createdDate": todayDate,
    "notes": notes,
    "SecondPartDetail": SecondPartDetail

  });
  console.log(StockDetails)
  tableData.row.add(
    {
      "sname": sname,
      "etadate": etadate,
      "SelectedRadio": SelectedRadio,
      "createdby":createdby,
      "createdDate": todayDate,
      "notes": notes,
    }
  ).draw();
  // tableData.row.add(['', sname, etadate, stkstatus, createdby, '', notes, '']).draw();
  $('#AddNewStock').modal('hide');
  console.log("StockDetails", StockDetails)

  localStorage.setItem("StockDetails", JSON.stringify(StockDetails));
}
});
//array data delete code
// function deleteRecord(id) {
//   document.querySelector('#row' + id).remove();
//   const updatedArray = users.filter((user) => Number(user[0]) !== id);
//   console.log(updatedArray);
// }

