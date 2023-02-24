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
    });


    
    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = 'BadeloftLoginPage.html';
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

        // Append the new row to the table body
        $('#stock-table tbody').append(newRow);
        $("#exampleModal1").modal("hide");
    });

    // Attach event listener to the Save Changes button
    $('#savechanges').click(function () {
        debugger;
        // Get the values of the input fields
        var name = $('#name').val();
        var etaDate = $('#etaDate').val();
        var stocklocation =  $('input[name="btnradio"]:checked').next('label').text();
        var ordered = $('#order').val();
        var notes = $('#notes').val();
        
        var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
        var username=activeuser;
        var currentDate = new Date();
        // Create a new object to store the data
        var stock = {
            name: name,
            etaDate: etaDate,
            stocklocation: stocklocation,
            createdby : username.name,
            currentDate:currentDate,
            notes: notes,
        };

        // Create a new row


        localStorage.setItem('stockData', JSON.stringify(stock));
        var existingData = JSON.parse(localStorage.getItem('stockData'));



        var data = [
            {
                name: existingData.name,
                position: existingData.etaDate,
                office: existingData.stocklocation,
                salary: existingData.createdby,
                date:currentDate,
                status: existingData.notes,
                
            },

            // Add more data objects here...
        ];
        var table = $('#example').DataTable({

            data: data,
            columns: [
                {
                    className: 'dt-control',
                    orderable: false,
                    data: null,
                    defaultContent: '',
                },
                { data:'name' },
                { data: 'position' },
                { data: 'office' },
                { data: 'salary' },
                { data: 'date' },
                { data: 'status' },
                
            ],
            order: [[1, 'asc']],
        });
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



        $("#exampleModal").modal("hide");
    });














    /* Formatting function for row details - modify as you need */
    function format(d) {
        // `d` is the original data object for the row
        return (
            '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr class="text-center">' +
            '<td>Full name:</td>' +
            '<td>' +
            d.name +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extension number:</td>' +
            '<td>' +
            d.position +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extra info:</td>' +
            '<td>And any further details here (images etc)...</td>' +
            '</tr>' +
            '</table>'
        );
    }








    // Add event listener for opening and closing details

});