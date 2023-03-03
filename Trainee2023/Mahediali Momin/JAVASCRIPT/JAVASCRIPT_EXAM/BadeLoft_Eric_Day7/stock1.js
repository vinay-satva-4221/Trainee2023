
var counter = 150001;


window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}



$(document).ready(function () {
    $("newButton").click(function () {
        document.getElementById("addstockform").reset();
        $('#AddNewStockModal').html('Add New Stock');
        $('#save_outer').text('Save');
    });

    var stockdata = JSON.parse(localStorage.getItem('stock'));
    // console.log(stockdata);
    var button = document.getElementById("newButton");

    var table = $('#StockTable ').DataTable({
        "fnInitComplete": function () {
            $('#StockTable_length').html('<h4><strong>Stock</strong></h4>');
            $('#StockTable_filter').prepend(button)

        },
        data: stockdata,
        columns: [

            {
                data: 'name', title: 'Stock Name', 'sortable': false, className: 'dt-control',
                orderable: false,
            },
            { data: 'etaDate', title: 'ETA Date', 'sortable': false },
            { data: 'stocklocation', title: 'Stock Location', 'sortable': false },
            { data: 'createdby', title: 'Created By', 'sortable': false },
            { data: 'createdDate', title: 'Created Date', 'sortable': false },
            { data: 'note', title: 'Notes', 'sortable': false },
            {
                
                data: 'Action',
                title: 'Action',
                className: 'text-end',
                render: function (data, type, row) {
                    return (
                        '<i class="fa fa-pencil edit-row mx-2 p-0"></i>' +
                        '<i class="fa fa-history mx-3 p-0"></i>'
                    );
                },
            }
        ],
        columnDefs: [
            {
                // targets: [1,2,3,4,5,6,7,8],
                // className: 'text-left', 
                "defaultContent": "-",
                "targets": "_all"
            },
        ],
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here...',
            paginate: {
                previous: "<",
                next: ">"
            },
        },

        order: [[1, 'asc']],
    });
    var activeuser = JSON.parse(localStorage.getItem("loggUser"));

    $("#Uname").html(activeuser.name);

    // $('[data-toggle="popover"]').popover();


    $('#save_inner').on('click', function () {
        
        var partnum = $('#part_num').val();
        var invoice = counter++;
        var ordered = $('#ordered').val();
        var note = $('#note').val();

        var newRow = $('<tr>');
        newRow.append('<td>' + partnum + '</td>');
        newRow.append('<td>' + invoice + '</td>');
        newRow.append('<td>' + ordered + '</td>');
        newRow.append('<td>' + note + '</td>');
        newRow.append('<td><button class="btn delete-row"><i class="fa-solid fa-xmark"></i></button></td>');
        // if (partnum != "" && ordered != "" && note != "") {
        //     $('#inner_table tbody').append('<tr class="child"><td>' + partnum + '</td><td>' + '</td><td>' + ordered + '</td><td>' + note + '</td></tr>');
        // }
        var stock = JSON.parse(localStorage.getItem('stock')) || [];
        console.log(stock);
        var rowData = {
            partnum: partnum,
            invoice: invoice,
            ordered: ordered,
            note: note
        };
        stock.push(rowData);

        $('#inner_table tbody').append(newRow);

        // $("#StockTable Modal1").modal("hide");
        // $('#part_num').val('');
        // $('#ordered').val('');
        // $('#note').val('');

    });


    var names = []; // array to hold names
    $('#save_outer').on('click', function () {

        // document.getElementById("addstockform").reset();
        

        var name = $('#stock_name').val();
        var etaDate = $('#eta_date').val();
        var stocklocation = $('input[name="btnradio"]:checked').next('label').text();
        var note = $('#note').val();

        // Perform validation checks here
        var isValid = true;
        if (name.trim() === '') {
            $('#stock_name').addClass('is-invalid');
            swal("Error", "Enter Correct name", "error");
            isValid = false;
        }
        else if ($.inArray(name, names) !== -1) { // check if name already exists in array
            $('#stock_name').addClass('is-invalid');
            swal("Error",'Stock name already exists, please enter a different name', "error");
            return;
        }
        else {
            $('#stock_name').removeClass('is-invalid');
        }

        if (!isValid) {
            return false;
        }

        var name = $('#stock_name').val(); // get input value
        if (name.trim() === '') { // validate if name is empty
            alert('Please enter a name');
            return;
        }
        if ($.inArray(name, names) !== -1) { // check if name already exists in array
            alert('Name already exists, please enter a different name');
            return;
        }
        
        names.push(name); // add name to array

        // reset the form and close the modal
        $('#addstockform')[0].reset();

        // display name in list
        $('#nameList').append('<li>' + name + '</li>');

        // Add the new name to the list of names
        names.push(name);

        var activeuser = JSON.parse(localStorage.getItem("loggUser"));
        console.log(activeuser)
        var username = activeuser;

        var currentDate = new Date();
        var options = {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        };
        var formattedDate = currentDate.toLocaleDateString('en-US', options).replace(/\D/g, '/');

        var finaldata = {
            name: name,
            etaDate: etaDate,
            stocklocation: stocklocation,
            note: note,
            createdby: username[0].name,
            createdDate: formattedDate, //set current date
            //     // currentDate:currentDate,
            nestedData: [],
        };
        $('#inner_table tbody tr').each(function () {

            var partnum = $(this).find('td:eq(0)').text();
            var ordered = $(this).find('td:eq(2)').text();
            var note = $(this).find('td:eq(3)').text();


            if (partnum !== '' && ordered !== '' && note !== '') {
                var rowData = {
                    partnum: partnum,
                    ordered: ordered,
                    note: note,
                };
                finaldata.nestedData.push(rowData);
            }
        });

        var stockData = JSON.parse(localStorage.getItem('stock')) || [];

        if (isEditMode) {
            // If in edit mode, find and replace the existing row with the new data
            var index = table.row('.selected').index();
            stockData[index] = finaldata;
        } else {
            // If in add mode, append the new data to the end of the array
            stockData.push(finaldata)
        }

        // stockData.push(finaldata);
        localStorage.setItem('stock', JSON.stringify(stockData));

        table.clear().rows.add(stockData).draw();

        // $('#stock_name').val('');
        // $('#eta_date').val('');
        // $('#note').val('');
        // $('#inner-table tbody').empty();
        // $('input[name="btnradio"]').prop('checked', false);

        $('#stock_name').val('');
        $('#eta_date').val('');
        $('input[name="btnradio"]').prop('checked', false);
        $('#note').val('');
        $('#inner_table tbody').empty();


        // Hide the modal
        $('#outerModal').modal('hide');

        //$("#StockTable Modal").modal("hide")    
    });

    $('#save_outer').on('click', function () {
        $("#inner_table tbody").empty();
    });


    var isEditMode = false; // flag to indicate edit mode
    $('#StockTable tbody').on('click', '.edit-row', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
        var data = row.data(); // Get the data from the row

        // Populate the edit form with the data
        $('#stock_name').val(data.name);
        $('#note').val(data.etaDate);
        // $('input[name="btnradio"][value="' + data.stocklocation + '"]').prop('checked', true);
        data.stocklocation = $('input[name="btnradio"]:checked').data('stock-location');

        // Show the edit modal
        $('#outerModal').modal('show');

        $('#AddNewStockModal').html('Edit New Stock');
        $('#save_outer').text('Update');

        // $('#AddNewStockModal').html('Edit New Stock');
        $('#save_outer').on('click', function () {

            // Update the data of the selected row with the new values 
            data.name = $('#stock_name').val();
            data.etaDate = $('#note').val();
            data.stocklocation = $('input[name="btnradio"]:checked').val();

            // Update the existing row's data
            row.data(data);

            table.draw();

            // Hide the edit modal
            $('#outerModal').modal('hide');

            var rowData = table.rows().data().toArray();
            localStorage.setItem('stock', JSON.stringify(rowData));

            isEditMode = false; // reset edit mode flag
        });
        isEditMode = true; // set edit mode flag
    });


    $('#StockTable  tbody').on('click', 'td.dt-control', function () {
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
        debugger;
        var table = '<table cellpadding="2" cellspacing="0" class="table border rounded">';
        table += '<thead style="background-color:lightgrey;"><tr><th>#</th><th>Part Number</th><th>Ordered</th><th>Assigned</th><th>Action</th></tr></thead> ';
        table += '<tbody>';
        for (var i = 0; i < d.nestedData.length; i++) {
            table += '<tr>';
            table += '<td>' + '</td>';
            table += '<td>' + d.nestedData[i].partnum + '</td>';
            // table += '<td>' + d.nestedData[i].invoice + '</td>';
            table += '<td>' + d.nestedData[i].ordered + '</td>';
            table += '<td>' + d.nestedData[i].note + '</td>';
            table += '<td><button class="btn delete-row"><i class="fa-solid fa-xmark"></i></button></td>';
            table += '</tr>';
        }

        table += '</tbody></table>';

        return table;

    }
    $(function () {
        $('input[name="date"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
        });
    });
})

//delete row in outer_modal table
$('#inner_table tbody').on('click', '.delete-row', function () {
    $(this).closest('tr').remove();
});

$("#AddPart").click(function () {
    // Clear previous form data
    $("#part_num").val("");
    $("#ordered").val("");
    $("#note").val("");
    // Show AddPartModal
    // $("#AddPartModal").modal("show");
});

$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);
})
function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}