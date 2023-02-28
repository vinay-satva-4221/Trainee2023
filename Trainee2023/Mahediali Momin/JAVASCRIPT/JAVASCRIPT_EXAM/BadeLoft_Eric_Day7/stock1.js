window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}



$(document).ready(function () {
    var stockdata = JSON.parse(localStorage.getItem('stock'));

    var table = $('#example').DataTable({
        data:stockdata,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'name',title: 'Stock Name', 'sortable': false},
            { data: 'etaDate',title: 'ETA Date', 'sortable': false },
            { data: 'stocklocation',title: 'Stock Location', 'sortable': false },
            { data: 'createdby',title: 'Created By', 'sortable': false },
            { data: 'createdDate',title: 'Created Date', 'sortable': false },
            { data: 'note',title: 'Notes', 'sortable': false },
            { data: 'Action',title: 'Action' , 'sortable': false}
        ],
        
        order: [[1, 'asc']],
    });
    var activeuser = JSON.parse(localStorage.getItem("loggUser"));

    $("#Uname").html(activeuser.name);

    // $('[data-toggle="popover"]').popover();


    $('#save_inner').on('click', function () {
        var partnum = $('#part_num').val();
        var ordered = $('#ordered').val();
        var note = $('#note').val();
        var newRow = $('<tr>');
        newRow.append('<td>' + partnum + '</td>');
        newRow.append('<td>' + ordered + '</td>');
        newRow.append('<td>' + note + '</td>');
        // if (partnum != "" && ordered != "" && note != "") {
        //     $('#inner_table tbody').append('<tr class="child"><td>' + partnum + '</td><td>' + '</td><td>' + ordered + '</td><td>' + note + '</td></tr>');
        // }
        var stock = JSON.parse(localStorage.getItem('stock')) || [];
        console.log(stock);
        var rowData = {
            partnum: partnum,
            ordered: ordered,
            note: note
        };
        stock.push(rowData);

        $('#inner_table tbody').append(newRow);

        // $("#exampleModal1").modal("hide");
        $('#part_num').val('');
        $('#ordered').val('');
        $('#note').val('');

    });


    $('#save_outer').on('click', function () {
debugger
        var name = $('#stock_name').val();
        var etaDate = $('#eta_date').val();
        var stocklocation = $('input[name="btnradio"]:checked').next('label').text();
        var notes = $('#note').val();

        var activeuser = JSON.parse(localStorage.getItem("loggUser"));
        console.log(activeuser)
        var username = activeuser;
        var currentDate = new Date();

        var finaldata = {
            name: name,
            etaDate: etaDate,
            stocklocation: stocklocation,
            notes: notes,
            createdby: username[0].name,
            //     // currentDate:currentDate,
            nestedData: []
        };
        $('#inner_table tbody tr').each(function () {
            debugger
            var partnumber =  $(this).find('td:eq(0)').text();
            var ordered = $(this).find('td:eq(1)').text();
            var notes = $(this).find('td:eq(2)').text();

            
            if (partnumber !== '' && ordered !== '' && notes !== '') {
                var rowData = {
                    partnumber: partnumber,
                    ordered: ordered,
                    notes: notes
                };
                finaldata.nestedData.push(rowData);
            }
        });

        var stockData = JSON.parse(localStorage.getItem('stock')) || [];

        stockData.push(finaldata);
        localStorage.setItem('stock', JSON.stringify(stockData));

        table.clear().rows.add(stockData).draw();

        $('#stock_name').val('');
        $('#eta_date').val('');
        $('#note').val('');
        $('#inner-table tbody').empty();
        $('input[name="btnradio"]').prop('checked', false);


        //$("#exampleModal").modal("hide")
    });

    $('#example tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {

            row.child.hide();
            tr.removeClass('shown');
        } else {

            row.child(format(row.data())).show();
            tr.addClass('shown');
        };
    })

    function format(d) {

        var table = '<table cellpadding="2" cellspacing="0" class="table border rounded">';
        table += '<thead style="background-color:lightgrey;"><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead> ';
        table += '<tbody>';
        for (var i = 0; i < d.nestedData.length; i++) {
            table += '<tr>';
            table += '<td>' + d.nestedData[i].partnumber + '</td>';
            table += '<td>' + d.nestedData[i].ordered + '</td>';
            table += '<td>' + d.nestedData[i].notes + '</td>';
            table += '</tr>';
        }

        table += '</tbody></table>';

        return table;

    }
})
$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);
})
function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}