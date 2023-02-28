
let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 
$("#Uname").html(a[0].Name);
function logout() {
    window.location="Badeloft.html"
    localStorage.clear();
}

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


