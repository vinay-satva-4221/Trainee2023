
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

    $("#newitemadded").click(function () {
        document.getElementById("stockform").reset();
    });
    $(function () {
        $("form[name='Add_part_number']").validate({
            errorClass: 'msg',
            rules: {
                partnumber: {
                    required: true,
                },
                order: {
                    required: true,
                },
                notes: {
                    required: true,
                }
            },
            messages: {
                partnumber: {
                    required: "Please provide a partnumber",
                },
                order: {
                    required: "Please provide a order",
                },
                notes: {
                    required: "Please provide a notes",
                },

            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });

    var invoice_number = 1;
    debugger;
    $("#inner_model").click(function () {
        var partnumber = $("#partnumber").val();
        var invoice = invoice_number++;
        var order = $("#order").val();
        var notes = $("#notes").val();
        console.log("note", notes)
        if (partDetails == null) {
            partDetails = [];
        }
        partDetails.push({
            partnumber: partnumber,
            invoice: invoice,
            order: order,
            notes: notes,
        });
        var addedtable = "<tr><td>" + partnumber + "</td><td>" + invoice + "</td><td>" + order + "</td><td>" + notes + "</td><td>" + '<i class="fa fa-times delete"></i>' + "</td></tr>";
        $("#innermodel_table tbody").append(addedtable);
    });

    var nameget = a[0].Name;
    console.log(nameget)
    stockDetails = JSON.parse(localStorage.getItem("stockList"));

    console.log("b", stockDetails);
    // var Action=<i class="fa-solid fa-pen"></i>;
    var button = document.getElementById("newitemadded");

    tableData = $('#stock_table').DataTable({
        data: stockDetails,
        fnInitComplete: function () {
            $('#stock_table_length').html('<b><h3>&nbsp;Stock</h3></b>');
            $('#stock_table_filter').prepend(button);
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
                orderable: false,
                data: null,
                defaultContent: '<i id="em" class="edit fa-solid fa-pen"  ></i>',
                title: "Action"
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
    $('#stock_table tbody').on('click', 'td.dt-control', function () {
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
    $("#innermodel_table_data").on('click', '.delete', function () {
        $(this).closest('tr').remove();
    });
    // $(".edit").on('click', function () {
    //     $("#stockModal").modal("show");


    //     var id = $(this).data("id");
    //     console.log(id)
    //     stockDetailsedit = JSON.parse(localStorage.getItem("stockList"));
    //     var record = stockDetailsedit.find(function (item) {
    //         return item.id == id;
    //     });
    //     $("#stockModal #stockname").val(record.stockname);


    // });

    $("#add_part").click(function () {
        $("#partnumber").val("");
        $("#order").val("");
        $("#notes").val("");
    })
    $('#stock_table tbody').on('click', '.edit', function () {

        editit=true;
        var data = tableData.row($(this).parents('tr')).data();
        console.log(data);
        var index = tableData.row($(this).parents('tr')).index();
        console.log(index);
        $("#stockname").val(data.stockname);
        console.log("s",data.stockname);
        $("#date").val(data.eta_date);
        console.log(data.stock_status)
        $('#stockModal').modal('show');
            $( "#savechange" ).click(function() {
                var stockname = $(data.stockname).val();
                var stock = {
                    "stockname": stockname,
                };
                var stockList = JSON.parse(localStorage.getItem("stockList")) || [];
                stockList[index] = stock;
                    localStorage.setItem("stockList", JSON.stringify(stockList));
              });
    });
    // $('#example tbody').on('click', '#em', function () {
    //     var $row = $(this).closest('tr');
    //     var data = tableData.row($row).data();
    //     console.log(data);
    //     var index = tableData.row($row).index();
    //     console.log(index);
    //     $("#stockname").val(data.stockname);
    //     $("#date").val(data.eta_date);
    //     console.log(data.stock_status)
    //     $('#stockModal').modal('show');
    //     $("#savechange").click(function () {
    //         debugger
    //         data.stockname = $("#stockname").val();
    //         tableData.row($row).data(data).draw();
    //     });
    // });
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

