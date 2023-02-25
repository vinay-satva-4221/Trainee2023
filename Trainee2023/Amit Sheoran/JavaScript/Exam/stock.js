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
        // Get the values of the input fields
        var partnumber = $('#partnumber').val();
        var ordered = $('#order').val();
        var notes = $('#notes').val();

        // Create a new row
        var newRow = $('<tr>');
        newRow.append('<td>' + partnumber + '</td>');
        newRow.append('<td>' + ordered + '</td>');
        newRow.append('<td>' + notes + '</td>');

        // Get the existing data from local storage
        var stockData = JSON.parse(localStorage.getItem('stockData')) || [];

        // Add the new data to the array
        var rowData = {
            partnumber: partnumber,
            ordered: ordered,
            notes: notes
        };
        stockData.push(rowData);

        // Append the new row to the table body
        $('#stock-table tbody').append(newRow);


        // Hide the modal
        $("#exampleModal1").modal("hide");
        $('#partnumber').val('');
        $('#order').val('');
        $('#notes').val('');

    });

    // Attach event listener to the Save Changes button
    $('#savechanges').click(function () {
        debugger;
        // Get the values of the input fields
        var name = $('#name').val();
        var etaDate = $('#etaDate').val();
        var stocklocation = $('input[name="btnradio"]:checked').next('label').text();
        var notes = $('#notes').val();

        var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
        var username = activeuser;
        var currentDate = new Date();

        // Create an object to store the data
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

            // Check if the values are not empty
            if (partnumber !== '' && ordered !== '' && notes !== '') {
                var rowData = {
                    partnumber: partnumber,
                    ordered: ordered,
                    notes: notes
                };
                finaldata.nestedData.push(rowData);
            }
        });

        // Store the data object in local storage
        var stockData = JSON.parse(localStorage.getItem('stockData')) || [];

        stockData.push(finaldata);
        localStorage.setItem('stockData', JSON.stringify(stockData));

        // Update the data in the DataTable
        table.clear().rows.add(stockData).draw();

        // Clear the input fields
        $('#name').val('');
        $('#etaDate').val('');
        $('#notes').val('');
        $('#stock-table tbody').empty();
        $('input[name="btnradio"]').prop('checked', false);

        // Hide the modal
        $("#exampleModal").modal("hide");

    });

    // Add event listener for opening and closing details
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
        };
    })

    // Function to format the nested table
    function format(d) {
        // d is the original data object for the row
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
