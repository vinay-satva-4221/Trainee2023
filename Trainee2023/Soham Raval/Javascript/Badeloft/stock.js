// function format(d) {
//     // `d` is the original data object for the row
//     return (
//         '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//         '<tr>' +
//         '<td>#</td>' +
//         '<td>' +
//         "Part Number" +
//         '</td>' +
//         '<td>' +
//         "Stock Location" +
//         '</td>' +
//         '</tr>' +

//         '<tr>' +
//         '<td>1</td>' +
//         '<td>' +
//         "BW-01-S-M" +
//         '</td>' +
//         '<td>' +
//         "Warehouse" +
//         '</td>' +
//         '</tr>' +

//         '<tr>' +
//         '<td>2</td>' +
//         '<td>' +
//         "AT-01-BLK" +
//         '</td>' +
//         '<td>' +
//         "C-101" +
//         '</td>' +
//         '</tr>' +

//         '<tr>' +
//         '<td>3</td>' +
//         '<td>' +
//         "BW-03-XL-G" +
//         '</td>' +
//         '<td>' +
//         "E-501" +
//         '</td>' +
//         '</tr>' +


//         '</table>'
//     );
// }
// var data1 = [
//     ["15000","Kenneth Woodard","Stock Location", "", "", "On water", "On water", "In Production"],
//     ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
//     ["BW-01-S-M", "1", "0", "3", "0", "0"],
//     ["BW-03-XL-G", "1", "1", "2", "2", "1"],
//     ["BW-01-Q-M", "", "0", "3", "0", "1"],
// ]

// var data1=[
//     {
//         QBInvoice:'15000',
//         name:'Kenneth Woodard',
//         QBShipdate:'12/08/2021',
//         QBShipaymentstatus:'paid',
//         QBStatus:'shipped',
//         QBDeliveryPhone:'617-235-7647',
//          called:'yes',
//          QBTracking:'WBC-123',
//     },
//     {
//         QBInvoice:'15000',
//         name:'James Fenske',
//         QBShipdate:'10/08/2021',
//         QBShipaymentstatus:'paid',
//         QBStatus:'shipped',
//          QBDeliveryPhone:'618-234-6400',
//          called:'yes',
//          QBTracking:'WBC-124',

       
//     }
// ]
// $(document).ready(function () {
//     var table = $('#example').DataTable({
//         data:data1,
//         columns: [
//             {
//                 className: 'dt-control',
//                 orderable: false,
              
//                 data: null,
//                 defaultContent: '',
//             },
           
//             { data: 'QBInvoice' },
//             { data: 'name' },
//             { data: 'QBShipdate' },
//             { data: 'QBShipaymentstatus' },
//             { data: 'QBStatus' },
//              { data: 'QBDeliveryPhone' },
//             { data: 'called',render:function(){
//                 return '<input type="checkbox">';
//             } },
//              { data: 'QBTracking' },
//         ],
      
//         order: [[1, 'asc']],
//     })
// $('#example tbody').on('click', 'td.dt-control', function () {
//     var tr = $(this).closest('tr');
//     var row = table.row(tr);

//     if (row.child.isShown()) {
//         // This row is already open - close it
//         row.child.hide();
//         tr.removeClass('shown');
//     } else {
//         // Open this row
//         row.child(format(row.data())).show();
//         tr.addClass('shown');
//     }
// });
// });
let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 
$("#Uname").html(a[0].Name);
function logout() {
    window.location="Badeloft.html"
    localStorage.clear();
}
// function inner_model()
// {
//     var partnumber=document.getElementById("partnumber").value;
//     var ordered=document.getElementById("order").value;
//     var notes=document.getElementById("notes").value;

//     let table = document.getElementById("example");
    
// }
// $(document).ready(function(){
//     $("button").click(function(){
//     var name = $("#name").val();
//     var cl = $("#class").val();
//     var row = "<tr><td>" + name + "</td><td>" + cl + "</td></tr>";
//     $("table tbody").append(row);
//     });
//   });
$(document).ready(function(){
    $("#inner_model").click(function(){
        var partnumber = $("#partnumber").val();
        var order = $("#order").val();
        var notes=$("#notes").val();
        var addedtable = "<tr><td>" + partnumber + "</td><td>" + order + "</td><td>" + notes + "</td></tr>";
        $("table tbody").append(addedtable);
    });
});
function stockdatastore() {
    debugger
      console.log(stock_status);
      var stockname=$('#stockname').val();
      var eta_date=$('#date').val();
      var stock_status=$('input[name=btnradio]').val();
      var partnumber=$('#partnumber').val();
      var order=$('#order').val();
      var notes=$('#notes').val();

    //   var JSONObj = { "stockname ":stockname, "eta_date":eta_date, "stock_status":stock_status};

    //   var modelobj={"partnumber":partnumber,"order":order,"notes":notes}
    let part = [
        {
          "partnumber": partnumber,
          "order": order,
          "notes": notes,
        },
    
      ]
      const Main = [

        {"stockname ":stockname, "eta_date":eta_date,"stock_status":stock_status,part:part},
        //  part=[
        //     {"partnumber":partnumber,"order":order,"notes":notes}
        // ]
    ];
    localStorage.setItem("stockdetails", JSON.stringify(Main));
    //   localStorage.setItem('myPreferences', { JSONObj: [], modelobj: [] })

    //   var stockdetails;
//       if (localStorage.getItem("stockdetails") == null) {
//         stockdetails = [];
//         debugger
//       }
//       else {

//         stockdetails = JSON.parse(localStorage.getItem("stockdetails"));
//         // stockdetails.push({
//         //     stockname: stockname,
//         //     eta_date:eta_date,
//         //     stock_status:stock_status,
//         //     partnumber:partnumber,
//         //     order:order,
//         //     notes:notes
//         //   });
//       }
//       localStorage.setItem("stockdetails", JSON.stringify(stockdetails));
//   }
}
$(document).ready(function () {
    debugger
    let stockdetailsstore=JSON.parse(localStorage.getItem("stockdetails"));
    var data1=[
        {
            stockname:'15000',
    
        }
    ]
    var table = $('#example').DataTable({
        data:data1,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
              
                data: null,
                defaultContent: '',
            },
           
            { data: 'stockname' },
            // { data:eta_date,"sortable": false  },
            // { data: stock_status ,"sortable": false },
            // { data: partnumber ,"sortable": false },
            // { data: order ,"sortable": false },
            // { data: notes,"sortable": false},
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


