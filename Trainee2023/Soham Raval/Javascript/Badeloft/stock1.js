var partDetails = []; 
let a = JSON.parse(localStorage.getItem("details"));
console.log("a", a);
$("#Uname").html(a[0].Name);
function logout() {
    window.location = "Badeloft.html"
    localStorage.clear();
}
$(document).ready(function () {
    $("#inner_model").click(function () {
        var partnumber = $("#partnumber").val();
        var order = $("#order").val();
        var notes = $("#notes").val();
        // 
        if (partDetails == null) {
            partDetails = [];
        }
        partDetails.push({
            partnumber: partnumber,
            order: order,
            notes: notes,
        });
        var addedtable = "<tr><td>" + partnumber + "</td><td>" + order + "</td><td>" + notes + "</td></tr>";
        $("#innermodel_table tbody").append(addedtable);
    });
    var nameget=a[0].Name;
    console.log(nameget)
    let b = JSON.parse(localStorage.getItem("stockList"));
    console.log("b", b);
    var stockname = b[0].stockname;
    var eta_date=b[0].eta_date;
    var  stock_status=b[0].stock_status;
    var nameget=nameget;
    var table = $('#example').DataTable({
        data: [{ stockname: stockname,
                eta_date:eta_date,stock_status:stock_status,nameget:nameget}
        ],
        columns: [
            {
                className: 'dt-control',
                orderable: false,
              
                data: null,
                defaultContent: '',
            },
           
            { data: 'stockname'},
            { data: 'eta_date'},
            {data:'stock_status'},
            {data:'nameget'}
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
            row.child.hide();
            tr.removeClass('shown');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});
function stockdatastore() {
    var stockDetails = [];
console.log(partDetails)
    var stockname = $('#stockname').val();
    var eta_date = $('#date').val();
    var stock_status = $('input[name="btnradio"]:checked').next('label').text();
    var partDetails = [];
    // stockDetails.push({
    //     stockname: stockname,
    //     eta_date: eta_date,
    //     stock_status: stock_status,
    // });
    var stockList = [
        {
            "stockname": stockname,
            "eta_date": eta_date,
            "stock_status": stock_status,
            "partlist": partDetails
        }
    ]
    console.log("StockList", stockList)
    // let stockList = JSON.parse(localStorage.getItem("stockList")) || [];

    // stockList.push({
    //     stockname: stockname,
    //     eta_date: eta_date,
    //     stock_status: stock_status,
    //     partlist: partDetails
    // });
    localStorage.setItem("stockList", JSON.stringify(stockList));
}
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
        "ordered" +
        '</td>' +
        '<td>' +
        "Assigned" +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>1</td>' +
        '<td>' +
        "" +
        '</td>' +
        '<td>' +
        "" +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>2</td>' +
        '<td>' +
        "" +
        '</td>' +
        '<td>' +
        "" +
        '</td>' +
        '</tr>' +
        '</table>'
    );
}

