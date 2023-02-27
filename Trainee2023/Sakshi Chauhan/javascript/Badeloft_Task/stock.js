function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="2" cellspacing="0" class="table border rounded">' +
    '<tr>' +
    '<th>#</th>' +
    '<th>Part Number</th>' +
    '<th>Ordered</th>' +
    '<th>Assigned</th>' +
    '<th>Action</th>' +
    '</tr>' +
    '<tr>' +
    '<td>1</td>' +
    '<td>BW-01-S-M</td>' +
    '<td>5</td>' +
    '<td>5</td>' +
    '<td>Close</td>' +
    '</tr>' +
    '</table>'
  );
}

$(document).ready(function() {
  var modal = document.getElementById("FirstModal");
  var table = $('#stock').DataTable({
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
    responsive: true, // enable child rows
    fnInitComplete: function() {
      $('div.toolbar').html('<h2>Stock</h2>');
      $('#stock_filter').prepend(modal);
    },
    data: dataSet,
    columns: [{
        className: 'dt-control',
        orderable: false,
        data: null,
        defaultContent: '',
      },
      { title: 'Stock Name',orderable: false,className: "text-center"},
      { title: 'ETA Date', orderable: false,className: "text-center" },
      { title: 'Stock Location',  orderable: false, className: "text-center" },
      { title: 'Created By', orderable: false, className: "text-center" },
      { title: 'Created Date', orderable: false, className: "text-center" },
      { title: 'Notes', orderable: false, className: "text-center"},
      { title: 'Action', orderable: false, className: "text-center" }
    ],
    order: [
      [1, 'asc']
    ],
  });

  $('#SecondModal').click(function() {
    $('#modalTwo').modal('show');
  });

  $('#FirstModal').click(function() {
    $('#myModal').modal('show');
  });

  $('#stock tbody').on('click', 'td.dt-control', function() {
    var tr = $(this).closest('tr');
    var row = table.row(tr);

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

var dataSet = [
  ["", "C100", "12/08/2021", "Warehouse", "Kenneth Woodard", "12/08/2021", "Lorem lpsum is simply dummy text", ""],
];

$(function() {
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    });
  });

  function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }

  
window.onload = (event) => {
  if (localStorage.getItem("Badeloft-Details") == null) {
    window.location.replace("Badeloft.html");
  }
  else{
    var par = JSON.parse(localStorage.getItem('Badeloft-Details'));
    var u = par[0].username;
    var uname = document.getElementById("username");
    uname.innerHTML = u;
  }
};

function SecondPartDetails()
{
    var SecondModalDetails = localStorage.getItem("SecondPartDetail");
    var Partnumber = document.getElementById('partNo').value;
    var Ordered = document.getElementById('order').value;
    var Notes = document.getElementById('notes').value;

    var SecondPartDetail = JSON.parse(SecondModalDetails);
    if(SecondPartDetail==null)
    {
      SecondPartDetail=[];
      SecondPartDetail.push({
        Partnumber:Partnumber,
        Ordered:Ordered,
        Notes:Notes
      });
      localStorage.setItem("SecondPartDetail", JSON.stringify(SecondPartDetail));
    }
    var html = "";
    SecondPartDetail.forEach(function (element,index) {
      html += "<td>" + element.Partnumber + "</td>";
      // html += "<td>" + Date.now() + "</td>";
      html += "<td>" + element.Ordered + "</td>";
      html += "<td>" + element.Notes + "</td>";
      document.getElementById("ModalTable").innerHTML =document.getElementById("ModalTable").innerHTML+ html;
  });
    document.getElementById("partNo").value="";
    document.getElementById("order").value="";
    document.getElementById("notes").value="";
  }