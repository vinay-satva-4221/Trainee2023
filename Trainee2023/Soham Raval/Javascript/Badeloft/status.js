function format(d) {
    return (
        '<table cellpadding="2" cellspacing="0" border="0" style="padding-left:50px;" class="w-100">' +
        '<tr>' +
        '<td>#</td>' +
        '<td>' +
        "Part Number" +
        '</td>' +
        '<td>' +
        "Stock Location" +
        '</td>' +
       
      
        '<td>' +
        "Action" +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>' +
        "BW-01-S-M" +
        '</td>' +
        '<td>' +
        "Warehouse" +
        '</td>' +
        '<td>' +
        '<i class="fa fa-times"></i>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>2</td>' +
        '<td>' +
        "AT-01-BLK" +
        '</td>' +
        '<td>' +
        "C-101" +
        '</td>' +
        '<td>' +
        '<i class="fa fa-times"></i>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>3</td>' +
        '<td>' +
        "BW-03-XL-G" +
        '</td>' +
        '<td>' +
        "E-501" +
        '</td>' +
        '<td>' +
        '<i class="fa fa-times"></i>' +
        '</td>' +
        '</tr>' +
        '</table>'
    );
}
var data1=[
    {
        QBInvoice:'15000',
        name:'Kenneth Woodard',
        QBShipdate:'12/08/2021',
        QBShipaymentstatus:'<span class="alert alert-primary p-0"><i class="bi bi-check"></i>Paid</span>',
        QBStatus:'shipped',
        QBDeliveryPhone:'617-235-7647',
         called:'yes',
         QBTracking:'WBC-123',
    },
    {
        QBInvoice:'15001',
        name:'James Fenske',
        QBShipdate:'10/08/2021',
        QBShipaymentstatus:'<span class="alert alert-success p-0"><i class="bi bi-check"></i>Paid</span>',
        QBStatus:'shipped',
         QBDeliveryPhone:'618-234-6400',
         called:'yes',
         QBTracking:'WBC-124',
    },
    {
        QBInvoice:'15002',
        name:'James Fenske',
        QBShipdate:'10/08/2021',
        QBShipaymentstatus:'<span class="alert alert-primary p-0"><i class="bi bi-check"></i>Paid</span>',
        QBStatus:'shipped',
         QBDeliveryPhone:'618-234-6400',
         called:'yes',
         QBTracking:'WBC-124',
    },
]
$(document).ready(function () {
    var table = $('#status_table').DataTable({
        data:data1,
        fnInitComplete: function () {
            $('#status_table_length').html('<b><h3>&nbsp;Status</h3></b>');},
        columns: [
            {
                className: 'dt-control',
                orderable: false,
              
                data: null,
                defaultContent: '',
            },
           
            { data: 'QBInvoice',render:function(data,type,row){
                if(type=='display'){
                    return '<span style="color: blue;">' + data + '</span>';
                }
                else {
                    return data;
                }
            }  },
            { data: 'name'  },
            { data: 'QBShipdate' },
            {data:'QBShipaymentstatus',"sortable":false},
            { data: 'QBStatus' ,"sortable": false },
            { data: 'QBDeliveryPhone',"sortable": false},
            { data: 'called',render:function(){
                return '<input type="checkbox">';
            },"sortable": false  },
             { data: 'QBTracking' ,"sortable": false },
        ],
        columnDefs: [
            {
                targets: [1,2,3,4,5],
                className: 'text-center'
            }
          ],
        //   language:{
        //     search: "_INPUT_",
        //     searchPlaceholder: 'Search here',
        //     paginate:{
        //         first: 'First',
        //         last: 'Last',
        //         previous:"<",
        //         next:">",
        //         info: 'items _START_ to _END_ of _TOTAL_ items',
        //     },
        //   },
        language: {
           
            info: "items _START_ to _END_ of _TOTAL_ items",
                paginate:{
          
                previous:"<",
                next:">",
            },
         
        },
      
        order: [[1, 'asc']],
    })
    $('#CustomSearchBox').keyup(function() {
        table.search($(this).val()).draw(); 
    });

    $('#status_table tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
 
        if (row.child.isShown()) {
           
            row.child.hide();
            tr.removeClass('shown');
        } else {
        
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

});
let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 

$("#Uname").html(a[0].Name);
function logout() {
    window.location="Login.html"
    localStorage.clear();
}
