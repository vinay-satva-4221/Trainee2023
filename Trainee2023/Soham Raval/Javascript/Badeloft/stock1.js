

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
    
    debugger;
    $("#inner_model").click(function () {
        var partnumber = $("#partnumber").val();
        var order = $("#order").val();
        var notes = $("#notes").val();
        console.log("note", notes)
        if (partDetails == null) {
            partDetails = [];
        }
        partDetails.push({
            partnumber: partnumber,
            order: order,
            notes: notes,
        });
        var addedtable = "<tr><td>" + partnumber + "</td><td>" + order + "</td><td>" + notes + "</td><td>" + '<i class="fa fa-times"></i>' + "</td></tr>";
        $("#innermodel_table tbody").append(addedtable);
    });
   
    var nameget = a[0].Name;
    console.log(nameget)
    stockDetails = JSON.parse(localStorage.getItem("stockList"));

    console.log("b", stockDetails);
    // var Action=<i class="fa-solid fa-pen"></i>;
    var button = document.getElementById("newitemadded");

    tableData = $('#example').DataTable({
        data: stockDetails,
        fnInitComplete: function () {
            $('#example_length').html('<b><h3>&nbsp;Stock</h3></b>');
            $('#example_filter').prepend(button);
        },
        // bInfo: true, 
        paging: true,
        binfo: true,
        // lengthChange: false,
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
            { data: "notes", title: 'Notes', orderable: false, className: "text-center" },
            {
                // data:"Action",title:'Action',orderable:false,className:"text-center"
            id:"editModal",
            orderable: false,
            data: null,
            defaultContent: '<i class="edit fa-solid fa-pen"></i>',
            title:"Action"
        }
        ],
        columnDefs: [
            {
                "defaultContent": "-",
            "targets": "_all"
            },
          ],
        order: [[1, 'asc']],
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here',
            info: "items _START_ to _END_ of _TOTAL_ items",
            paginate: {

                previous: "<",
                next: ">",
            },

        },
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
    $("#close_part").click (function () {
        $(this).closest('tr').remove();
    });
});

function stockdatastore() {
debugger
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
        nameget: nameget,
        getdate: getdate,
        // notes:notes,
        // createdby: createdby,  
        // cdate: cdate,    
        partDetails: partDetails,
        notes: notes

    });
    console.log(partDetails)
    var stock = {
        
        "stockname": stockname,
        "eta_date": eta_date,
        "stock_status": stock_status,
        "nameget": nameget,
        "getdate": getdate,
        "partlist": partDetails,
        "notes": notes
    };
    stockList.push(stock);
    console.log("StockList", stockList)
    tableData.row.add(['', stockname, eta_date, stock_status, nameget, getdate, notes]).draw();
    localStorage.setItem("stockList", JSON.stringify(stockList));
    console.log("part", partDetails)
    location.reload(true)
}
function format(d) {
    let HTML = '';
    if (d.partlist && d.partlist.length > 0) {
        HTML += '<table class="text-center" style="width:100%;">';
        HTML += '<thead><tr><th class="text-center">#</th><th class="text-center">Part No</th><th class="text-center">Order No</th><th class="text-center">Notes</th><th class="text-center">Action</th></tr></thead>';
        HTML += '<tbody>';
        d.partlist.forEach((partlist, index) => {
            const rowadd = index + 1;
            HTML += '<tr><td>' + rowadd + '</td><td>' + partlist.partnumber + '</td><td>' + partlist.order + '</td><td>' + partlist.notes + '</td><td><button onclick="removeItem(' + index + ')"><i class="fa fa-close"></i></button></td></tr>';
        });
        HTML += '</tbody>';
        HTML += '</table>';
    }
    return HTML;
}

