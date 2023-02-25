function format(d) {
    // `d` is the original data object for the row
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>#</td>' +
        '<td>' +
        "Part Number" +
        '</td>' +
        '<td>' +
        "Stock Location" +
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
        '</tr>' +

        '<tr>' +
        '<td>2</td>' +
        '<td>' +
        "AT-01-BLK" +
        '</td>' +
        '<td>' +
        "C-101" +
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
        '</tr>' +


        '</table>'
    );
}


var data1=[
    {
        QBInvoice:'15000',
        name:'Kenneth Woodard',
        QBShipdate:'12/08/2021',
        QBShipaymentstatus:'paid',
        QBStatus:'shipped',
        QBDeliveryPhone:'617-235-7647',
         called:'yes',
         QBTracking:'WBC-123',
    },
    {
        QBInvoice:'15000',
        name:'James Fenske',
        QBShipdate:'10/08/2021',
        QBShipaymentstatus:'paid',
        QBStatus:'shipped',
         QBDeliveryPhone:'618-234-6400',
         called:'yes',
         QBTracking:'WBC-124',

       
    },
    {
        QBInvoice:'15000',
        name:'James Fenske',
        QBShipdate:'10/08/2021',
        QBShipaymentstatus:'paid',
        QBStatus:'shipped',
         QBDeliveryPhone:'618-234-6400',
         called:'yes',
         QBTracking:'WBC-124',

       
    },
]
$(document).ready(function () {
    var table = $('#example').DataTable({
        data:data1,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
              
                data: null,
                defaultContent: '',
            },
           
            { data: 'QBInvoice' },
            { data: 'name'  },
            { data: 'QBShipdate' ,"sortable": false },
            { data: 'QBShipaymentstatus' ,"sortable": false },
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
      
        order: [[1, 'asc']],
    })

    $('#example tbody').on('click', 'td.dt-control', function () {
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
let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 

$("#Uname").html(a[0].Name);
function logout() {
    window.location="Badeloft.html"
    localStorage.clear();
}
