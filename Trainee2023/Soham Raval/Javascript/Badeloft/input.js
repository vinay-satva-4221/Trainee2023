

var partDetails = [];
var stockDetails = [];
var tableData;
let a = JSON.parse(localStorage.getItem("details"));
console.log("a", a);
$("#Uname").html(a[0].Name);
function logout() {
    window.location = "Login.html"
    localStorage.clear();
}
$(document).ready(function () {
    $("#inner_model").click(function () {
        var partnumber = $("#partnumber").val();
        var order = $("#order").val();
        var notes = $("#notes").val();
        console.log("note",notes)
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
    var nameget = a[0].Name;
    console.log(nameget)
    let b = JSON.parse(localStorage.getItem("stockList"));
    console.log("b", b);
    tableData = $('#example').DataTable({
        data: b,    
        lengthChange: false,
        info: false,
        paging: false,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: "stockname", title: 'Stock Name', orderable: false, className: "text-center" },
            { data: "eta_date", title: 'ETA Date', orderable: false, className: "text-center" },
            { data: "stock_status", title: 'Stock Location', orderable: false, className: "text-center" },
            { data: "nameget", title: 'Created By', orderable: false, className: "text-center" },
            { data: "getdate", title: 'Created Date', orderable: false, className: "text-center" },
            { data: "notes", title: 'Notes', orderable: false, className: "text-center" }
        ],
        order: [[1, 'asc']],
    })
    $('#SearchBox').keyup(function () {
        table.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    });
    $('#example tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = tableData.row(tr);
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
    
    console.log(partDetails)
    var stockname = $('#stockname').val();
    var eta_date = $('#date').val();
    var stock_status = $('input[name="btnradio"]:checked').next('label').text();
    var nameget = a[0].Name;
   

  //Getting current date
  var getdate = new Date(Date.now()).toLocaleString().split(',')[0];
  console.log(getdate)
  var notes = $("#notes").val();
  let stockList = JSON.parse(localStorage.getItem("stockList")) || [];
    if (stockDetails == null) {
        stockDetails = [];
    }
    stockDetails.push({
        stockname: stockname,
        eta_date: eta_date,
        stock_status: stock_status,
        nameget:nameget,
        getdate:getdate,
        // notes:notes,
        // createdby: createdby,  
        // cdate: cdate,    
        partDetails: partDetails,
        notes: notes 

    });
    tableData.row.add(['', stockname, eta_date, stock_status, nameget,getdate,notes]).draw();
    console.log(partDetails)
    var stock = {
        
        "stockname": stockname,
        "eta_date": eta_date,
        "stock_status": stock_status,
        "nameget":nameget,
        "getdate":getdate,
        "partlist": partDetails,
        "notes": notes 
    };
    stockList.push(stock);
    console.log("StockList", stockList)
    localStorage.setItem("stockList", JSON.stringify(stockList));
    console.log("part",partDetails)

}

// function format(partlist) {
//     console.log(partDetails)

//     var table = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//         '<tr>' +
//         '<td>#</td>' +
//         '<td>' +
//         "Part Number" +
//         '</td>' +
//         '<td>' +
//         "ordered" +
//         '</td>' +
//         '<td>' +
//         "Assigned" +
//         '</td>' +
//         '</tr>';
//     for (var i = 0; i < partlist.length; i++) {
//         table += '<tr>' +
//             '<td>' + (i + 1) + '</td>' +
//             '<td>' + partlist[i].partnumber + '</td>' +
//             '<td>' + partlist[i].order + '</td>' +
//             '<td></td>' +
//             '</tr>';
//     }
//     table += '</table>';
//     return table;
// }
function format(d) {
  let HTML = '';
  if (d.partlist && d.partlist.length > 0) {
    HTML += '<table class="text-center" style="width:100%;">';
    HTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Part No</th><th class="text-center">Order No</th><th class="text-center">Notes</th><th class="text-center">Action</th></tr></thead>';
    HTML += '<tbody>';
    d.partlist.forEach((partlist, index) => {
      const rowadd = index + 1;
      HTML += '<tr><td>' + rowadd + '</td><td>' + partlist.partnumber + '</td><td>' + partlist.order+ '</td><td>' + partlist.notes + '</td><td><button onclick="removeItem(' + index + ')"><i class="fa fa-close"></i></button></td></tr>';
    });
    HTML += '</tbody>';
    HTML += '</table>';
  }
  return HTML;
}

