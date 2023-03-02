$(document).ready(function () {

    $("#addbutton").click(function () {
        $("#exampleModal").modal("show");
    });

    $("#parentclosebutton").click(function () {
        $("#exampleModal").modal("hide");
        $('#stock-table tbody').empty();
    });


    $("#nestedadd").click(function () {
        $("#exampleModal1").modal("show");
    });

    $("#nestedclosebutton").click(function () {
        $("#exampleModal1").modal("hide");
    });

    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = 'BadeloftLoginPage.html';
    });

    var button = document.getElementById('addbutton');
    var stockData = JSON.parse(localStorage.getItem('stockData')) || [];

    // Populate the DataTable with the retrieved stock data
    var table = $('#example').DataTable({

        "fnInitComplete": function () {
            $('#example_length').html('<h2>Stock</h2>');
            $('#example_filter').prepend(button);

        },
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search...'
        },
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
        data: stockData // Set the DataTable's data to the retrieved stock data
    });

    var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));

    $("#active").html(activeuser.name);

    $('#nestedsave').click(function () {
        var partnumber = $('#partnumber').val();
        var ordered = $('#order').val();
        var notes = $('#notes').val();

        var newRow = $('<tr>');
        newRow.append('<td>' + partnumber + '</td>');
        newRow.append('<td>' + ordered + '</td>');
        newRow.append('<td>' + notes + '</td>');
        newRow.append('<td>' + '<i class="fa fa-times id="closebuttoninnestedpopup"></i>' + '</td>');

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
        table += '<thead "><tr><th style="color:white;">Part Number</th><th style="color:white;">Ordered</th><th style="color:white;">Notes</th><th style="color:white;">Action</th></tr></thead>';
        table += '<tbody>';
        for (var i = 0; i < d.nestedData.length; i++) {
          table += '<tr>';
          table += '<td>' + d.nestedData[i].partnumber + '</td>';
          table += '<td>' + d.nestedData[i].ordered + '</td>';
          table += '<td>' + d.nestedData[i].notes + '</td>';
          table += '<td><button class="btn btn-danger btn-sm delete-button" data-partnumber="' + d.nestedData[i].partnumber + '">Delete</button></td>';
          table += '</tr>';
        }
        table += '</tbody></table>';
        return table;
      }
      
});
var etaDateInput = document.getElementById("etaDate");
etaDateInput.addEventListener("click", function () {
    this.focus();
});