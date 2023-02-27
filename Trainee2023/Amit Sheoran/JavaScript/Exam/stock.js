$(document).ready(function () {

    $("#addbutton").click(function () {
        $("#exampleModal").modal("show");
    });

    $("#nestedclosebutton").click(function () {
        $("#exampleModal1").modal("hide");
    });

    $("#nestedadd").click(function () {
        $("#exampleModal1").modal("show");
    });

    $("#parentclosebutton").click(function () {
        $("#exampleModal").modal("hide");
        $('#stock-table tbody').empty();
    });

    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = 'BadeloftLoginPage.html';
    });



    var table = $('#example').DataTable({
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'name' },
            { data: 'etaDate' },
            { data: 'stocklocation' },
            { data: 'createdby' },
            { data: 'createdby' },
            { data: 'createdby' },
            { data: 'createdby' }
        ],
        order: [[1, 'asc']],
    });
    var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));

    $("#active").html(activeuser.name);

    $('[data-toggle="popover"]').popover();

    $('#nestedsave').click(function () {
      
        var partnumber = $('#partnumber').val();
        var ordered = $('#order').val();
        var notes = $('#notes').val();

      
        var newRow = $('<tr>');
        newRow.append('<td>' + partnumber + '</td>');
        newRow.append('<td>' + ordered + '</td>');
        newRow.append('<td>' + notes + '</td>');

        var stockData = JSON.parse(localStorage.getItem('stockData')) || [];

   
        var rowData = {
            partnumber: partnumber,
            ordered: ordered,
            notes: notes
        };
        stockData.push(rowData);

       
        $('#stock-table tbody').append(newRow);


       
        $("#exampleModal1").modal("hide");
        $('#partnumber').val('');
        $('#order').val('');
        $('#notes').val('');

    });

    $('#savechanges').click(function () {
        debugger;
       
        var name = $('#name').val();
        var etaDate = $('#etaDate').val();
        var stocklocation = $('input[name="btnradio"]:checked').next('label').text();
        var notes = $('#notes').val();

        var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
        var username = activeuser;
        var currentDate = new Date();

        var finaldata = {
            name: name,
            etaDate: etaDate,
            stocklocation: stocklocation,
            createdby: username.name,
            //     // currentDate:currentDate,
            nestedData: []
        };

        $('#stock-table tbody tr').each(function () {
            var partnumber = $(this).find('td:eq(0)').text();
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

        var stockData = JSON.parse(localStorage.getItem('stockData')) || [];

        stockData.push(finaldata);
        localStorage.setItem('stockData', JSON.stringify(stockData));

     
        table.clear().rows.add(stockData).draw();

     
        $('#name').val('');
        $('#etaDate').val('');
        $('#notes').val('');
        $('#stock-table tbody').empty();
        $('input[name="btnradio"]').prop('checked', false);

     
        $("#exampleModal").modal("hide");

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
       
        var table = '<table class="table table-bordered w-100">';
        table += '<thead><tr><th>Part Number</th><th>Ordered</th><th>Notes</th></tr></thead>';
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
});
