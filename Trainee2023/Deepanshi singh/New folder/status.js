

/* Formatting function for row details - modify as you need */

// datatable


function format(d) {
    // `d` is the original data object for the row
    // return (
    //     '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    //     '<tr class="text-center">' +
    //     '<td>Full name:</td>' +
    //     '<td>' +
    //     d.name +
    //     '</td>' +
    //     '</tr>' +
    //     '<tr>' +
    //     '<td>Extension number:</td>' +
    //     '<td>' +
    //     d.position +
    //     '</td>' +
    //     '</tr>' +
    //     '<tr>' +
    //     '<td>Extra info:</td>' +
    //     '<td>And any further details here (images etc)...</td>' +
    //     '</tr>' +
    //     '</table>'
    // );
    var html = " ";
    html += '<table cellpadding="2" cellspacing="0" border="0" style="padding-left:100px" class=w-100> ';
    html += '<tr style="border-collapse:collapse;border-radius:10px;overf;low:hidden"><th>#</th><th>partnumber</th><th>Stock Location</th><th>action</th></tr>';
    html+='<tr><td>1</td><td>BW-XS-05</td><td>Warehouse</td><td><i class="fa-solid fa-xmark"></i></td></tr>'
    html+='<tr><td>2</td><td>AT-01-BLK</td><td>In Water</td><td><i class="fa-solid fa-xmark"></i></td></tr>'
    html+='<tr><td>3</td><td>BW-03-XLG</td><td>On production</td><td><i class="fa-solid fa-xmark"></i></td></tr>'
    return html;


}



var data = [
    {
        name: '15000',
        position: 'Kenneth Woodard',
        office: '12/08/2021',
        salary: '<span> <button type="button" class="alert alert-success p-1"><i class="fa fa-check"></i>Paid</button></span>',
        status:'shipped',
        deliveryphone:'123-123-1234',
        called:'',
        tracking:'WBC-123'
    },
    {
        name: '15001',
        position: 'James',
        office: '12/08/2021',
        salary: '<span style="background-color:green"> <button type="button" class="alert alert-primary p-1"><i class="fa fa-check"></i>Paid</button></span>',
        status:'XTD',
        deliveryphone:'123-123-1200',
        called:'',
        tracking:'WBC-121'
    },
    {
        name: '15002',
        position: 'Richard',
        office: '12/08/2021',
        salary: '<span style="background-color:green"><button type="button" class="alert alert-danger p-1"><i class="fa fa-close"></i>UnPaid</button></span>',
        status:'shipped',
        deliveryphone:'123-123-1111',
        called:'',
        tracking:'WBC-124'
    },
    {
        name: '15003',
        position: 'Tasha Tapia',
        office: '12/08/2021',
        salary: '<span> <button type="button" class="alert alert-warning p-1"><i class="fa fa-clock"></i> Pending Approval</button></span>',
        status:'STD',
        deliveryphone:'123-123-1333',
        called:'',
        tracking:'WBM-126'
    },
    {
        name: '15004',
        position: 'Kelly',
        office: '12/08/2021',
        salary:'<span> <button type="button" class="alert alert-success p-1"><i class="fa fa-check"></i>Paid</button></span>' ,
        status:'shipped',
        deliveryphone:'123-123-1221',
        called:'',
        tracking:'WBC-125'
    },
    {
        name: '15005',
        position: 'Samantha',
        office: '12/08/2021',
        salary: '<span style="background-color:green"> <button type="button" class="alert alert-danger p-1"><i class="fa fa-close"></i>UnPaid</button></span>',
        status:'STD',
        deliveryphone:'123-123-1255',
        called:'',
        tracking:'WBC-126'
    },
    // Add more data objects here...
];


var table = $('#status').DataTable({
    data: data,
    // dom: '<"toolbar">frtip',
    // fnInitComplete: function () {
    //   $('div.toolbar').html('<b><h3>&nbsp;status</h3></b>');},
    columns: [
        {
            className: 'dt-control',
            orderable: false,
            data: null,
            defaultContent: '',
        },
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        
        { data: 'salary'
//     render: function(data, type, row, meta) {
//   return data + ' <button type="button" class="alert alert-primary p-1"><i class="fa fa-check">Paid</i></button>';

},
{ data: 'status' },
{ data: 'deliveryphone' },
{ data: 'called',render: function(data,  row, meta) {
  return '<input type="checkbox" style="text-size:10">';
} },
{ data: 'tracking' },
    ],

    language:{
        info: "Items 1 to 15 of 30 total",
        paginate:{
          previous:"<",
          next:">",
        }
  },
    order: [[1, 'asc']],
});


// Add event listener for opening and closing details
$('#status tbody').on('click', 'td.dt-control', function () {
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


var d1=JSON.parse(localStorage.getItem("user1"));
$("#p1").html(d1.name1);
console.log(d1.name1);


function logout(){
    window.location.replace("livetask.html");
}

