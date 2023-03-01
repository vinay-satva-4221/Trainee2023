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
    var table = $('#statustable').DataTable({
        "dom": '<"toolbar">frtip',
        bFilter: true, bInfo: true,
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>Status</h4>');
           
         },

        data:datalist,
        language: {

            info: "items _PAGE_ to _PAGES_ of _PAGES_ total ",
            paginate:{
                next:'&#62',
                previous:'&#60'
            },
            searchPlaceholder: " Search here...",
            search: '<i class="fa fa-search"></i> ',
            
        },
        columns: [
            {
                
                className: 'dt-control toHide',

                orderable: false,
                data: null,
                defaultContent: '',
                
            },

           {title: 'QB Invoive#',className: "colSpan"},
           { title: "Name" },
      { title: "QB Ship date" },
      { title: "QB Payment Status", orderable: false, },
      { title: "QB Status", orderable: false, },
      { title: "QB Delivery Phone", orderable: false, },
      { title: "Called", orderable: false,className:'text-center' },
      { title: "QB Tracking", orderable: false, },

        ],
        select:{
            style:'os',
            selector:'td:first-child'
        },
        order: [[1, 'asc']],


        

    });

    $('th.toHide').hide();
    $('th.colSpan').attr("colspan", 2);

    // Add event listener for opening and closing details
    $('#statustable tbody').on('click', 'td.dt-control', function () {
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
var datalist = [
    // {
    //   QB  : "150000",
    //   Name : 'Keneth Woodard',
    //   QB_Ship_date : '12/08/2021',
    // }
    ["","150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-primary px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-128"],
    ["","150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],
    ["","150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],
    ["","150003", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-danger px-1 p-0 m-0'><i class='bi bi-x'>Unpaid</i></button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-122"],
    ["","150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],

    ["","150000", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-primary px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-128"],
    ["","150001", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-123"],
    ["","150002", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-129"],
    ["","150003", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-danger px-1 p-0 m-0'><i class='bi bi-x'>Unpaid</i></button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-122"],
    ["","150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],
    ["","150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],
    ["","150001", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-123"],
    ["","150002", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-success px-1 p-0 m-0'><i class='bi bi-check'>Paid</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-129"],
    ["","150003", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-danger px-1 p-0 m-0'><i class='bi bi-x'>Unpaid</i></button>", "STD", "617-235-7647", "<input type=checkbox>", "WBC-122"],
    ["","150004", "Keneth Woodard", "12/08/2021", "<button type='button' class='alert alert-warning px-1 p-0 m-0'><i class='bi bi-info-circle-fill'>Pendding Approval</i></button>", "Shipped", "617-235-7647", "<input type=checkbox checked>", "WBC-126"],
  
  
  ];

$('#statustable tbody').on('change', 'input[type="checkbox"]', function(){
    // If checkbox is not checked
    if(!this.checked){
       var el = $('#statustable-select-all').get(0);
       // If "Select all" control is checked and has 'indeterminate' property
       if(el && el.checked && ('indeterminate' in el)){
          // Set visual state of "Select all" control
          // as 'indeterminate'
          el.indeterminate = true;
       }
    }
 });
//  table.$('input[type="checkbox"]').each(function(){
$('input[type="checkbox"]').each(function(){
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