$(function(){
    $("#navbar").load("navbardata.html");
});




// });


/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +

        '<th>#</th>' +
        '<th>Part Number</th>' +
        // '<th>' +
        // d.name +
        // '</th>' +

        '<th>Stock Location</th>' +

        '<th></th>' +
        '<th></th>' +
        '<th></th>' +
        '<th></th>' +
        '<th></th>' +
        '<th>Action</th>' +
        '</tr>' +

        '<tr>'+

        '<td> 1</td>'+
        '<td> BW-01-S-M</td>'+
        '<td> Warehouse</td>'+
        '<td> x</td>'+
        '</tr>'+

        '<tr>'+

        '<td> 2</td>'+
        '<td> AT-01-BLK</td>'+
        '<td> C-101</td>'+
        '<td> x</td>'+
        '</tr>'+

        '<tr>'+

        '<td> 3</td>'+
        '<td> BW-03-XL-G</td>'+
        '<td> E-501</td>'+
        '<td> x</td>'+
        '</tr>'+

        

      

        '</table>'
    );
}

$(document).ready(function () {
    var table = $('#example').DataTable({
        "dom": '<"toolbar">frtip',
        bFilter: true, bInfo: true,
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>Status</h4>');
         },

        data:datalist,
        columns: [
            {
                
                className: 'dt-control',

                orderable: false,
                data: null,
                defaultContent: '',
                
            },

           {title: 'QB Invoive#'},
           {title: 'Name'},
           {title: 'QB Ship date'},
        //    {title: 'QB Payment status',orderable:false },
           {title: 'QB Payment status' ,orderable:false ,render:function(){
            return '<div class="alert alert-primary styl m-0 p-0" role="alert">Paid</div>';
        } },
        //    render: function (){'<div class="alert alert-primary" role="alert"> 1</div>'}},
           {title: 'QB Status',orderable:false},
           {title: 'QB Delivery Phone',orderable:false},
           {title: 'QB Called',orderable:false,render: function (){
            return '<input type="checkbox">' }},
           {title: 'QB Tracking',orderable:false},

        ],
        select:{
            style:'os',
            selector:'td:first-child'
        },
        order: [[1, 'asc']],


           

    });

    // Add event listener for opening and closing details
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
var datalist=[
    ["","150000","Priyesh Poptani","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"],
    ["","150001","Romil Shah","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"],
    ["","150002","Hardik Rajput","12/08/2021","Paid","STD","321-258-2365","",""],
    ["","150003","Jems Patel","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"],

    ["","150004","Priyesh Poptani","12/08/2021","Paid","Shipped","321-258-2365","",""],
    ["","150005","Romil Shahi","12/08/2021","Paid","STD","321-258-2365","","WBC-123"],
    ["","150006","Hardik Rajput","12/08/2021","Paid","STD","321-258-2365","","WBC-123"],
    ["","150007","Priyesh Poptani","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"],

    ["","150008","Priyesh Poptani","12/08/2021","Paid","STD","321-258-2365","","WBC-123"],
    ["","150009","Romil Shah","12/08/2021","Paid","Shipped","321-258-2365","",""],
    ["","1500010","Priyesh Poptani","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"],
    ["","1500011","Hardik Rajput","12/08/2021","Paid","STD","321-258-2365","","WBC-123"],

    ["","150007","Jems Patel","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"],
    ["","150008","Hardik Rajput","12/08/2021","Paid","STD","321-258-2365","","WBC-123"],
    ["","150006","Hardik Rajput","12/08/2021","Paid","Shipped","321-258-2365","",""],
    ["","150001","Priyesh Poptani","12/08/2021","Paid","Shipped","321-258-2365","","WBC-123"]
];

$('#example tbody').on('change', 'input[type="checkbox"]', function(){
    // If checkbox is not checked
    if(!this.checked){
       var el = $('#example-select-all').get(0);
       // If "Select all" control is checked and has 'indeterminate' property
       if(el && el.checked && ('indeterminate' in el)){
          // Set visual state of "Select all" control
          // as 'indeterminate'
          el.indeterminate = true;
       }
    }
 });
 table.$('input[type="checkbox"]').each(function(){
    // If checkbox doesn't exist in DOM
    if(!$.contains(document, this)){
       // If checkbox is checked
       if(this.checked){
          // Create a hidden element
          $(form).append(
             $('<input>')
                .attr('type', 'hidden')
                .attr('name', this.name)
                .val(this.value)
          );
       }
    }
 });