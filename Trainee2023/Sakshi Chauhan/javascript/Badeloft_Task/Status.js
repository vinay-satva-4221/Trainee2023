function format(d) {
    // `d` is the original data object for the row
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<thead>'+
        '<tr>' +
            '<th>'+
            '#'+
            '</th>'+
            '<th>'+
            'Part Number'+
            '</th>'+
            '<th>'+
            'Stock Location'+
            '</th>'+
        '</tr>' +
        '<thead>'+
        '<tbody>'+
        '<tr>' +
            '<td>'+
            '1'+
            '</td>'+
            '<td>'+
            'BW-01-S-M'+
            '</td>'+
            '<td>'+
            'Warehouse'+
            '</td>'+
        '</tr>' +
        '<tr>' +
            '<td>'+
            '2'+
            '</td>'+
            '<td>'+
            'AT-01-BLK'+
            '</td>'+
            '<td>'+
            'C-101'+
            '</td>'+
        '</tr>' +
        '<tr>' +
            '<td>'+
            '3'+
            '</td>'+
            '<td>'+
            'BW-03-XL-G'+
            '</td>'+
            '<td>'+
            'E-S01'+
            '</td>'+
    '</tr>' +
        '</tbody>'+
        '</table>'
    );
}
 
$(document).ready(function () {
    var table = $('#StatusTable').DataTable({
      "ordering": true,
      "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function(){
                $('div.toolbar').html('<h2>Status</h2>');
              },
        data:details,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            {title: 'QB Invoice#'},
            {title: 'Name'},
            {title: 'QB Ship Date'},
            {title: 'QB Payment Status',oradable:false},
            {title: 'QB Status',oradable:false},
            {title: 'QB Delivery Phone',oradable:false},
            {title: 'Called',oradable:false, render: function(){
                return '<input type = "checkbox">'
            }},
            {title: 'QB Tracking',oradable:false},
        ],
        select:{
            style: 'os',
            selector: 'td:first-child'
        },
      
        
        order: [[1, 'asc']],
    });
 
    // Add event listener for opening and closing details
    $('#StatusTable tbody').on('click', 'td.dt-control', function () {
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
var details = [
    ["","150000","Kenneth Woondard","12/08/2021","Paid","Shipped","617-235-7647","","WBC-123"],
    ["","150001","James Fenske","10/08/2021","Paid","Shipped","618-234-6400","","WBC-124"],
    ["","150002","Kelly McCrory","08/08/2021","Paid","STD","630-367-8448","",""],
    ["","150003","Linda Englund","05/08/2021","Unpaid","Shipped","203-963-9428","","WBC-125"],
    ["","150004","Frances Badger","03/08/2021","Paid","STD","508-206-0722","",""],
    ["","150005","Tasha Tapia","02/08/2021","Pending Approval","Shipped","201-905-4664","","WBC-127"],
    ["","150006","Samantha Southard","01/08/2021","Paid","Shipped","707-271-9412","","WBC-128"],
    ["","150007","James Fenske","10/08/2021","Paid","Shipped","618-234-6400","","WBC-124"],
    ["","150008","Kelly McCrory","08/08/2021","Paid","STD","630-367-8448","",""],
    ["","150009","Linda Englund","05/08/2021","Unpaid","Shipped","203-963-9428","","WBC-125"],
    ["","150010","Frances Badger","03/08/2021","Paid","STD","508-206-0722","",""],
    ["","150011","Tasha Tapia","02/08/2021","Pending Approval","Shipped","201-905-4664","","WBC-127"],
    ["","150012","Samantha Southard","01/08/2021","Paid","Shipped","707-271-9412","","WBC-128"],


];
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