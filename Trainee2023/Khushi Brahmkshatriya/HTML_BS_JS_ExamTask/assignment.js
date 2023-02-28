$(document).ready(function () {
    $("#AddNavbar").load("./navbar.html");

    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        var customerInvoice = [
            { customer: 'Keneth Woodard', invoiceNum: '15000' },
            { customer: 'Keneth Woodard', invoiceNum: '15001' },
            { customer: 'Keneth Woodard', invoiceNum: '15005' },
            { customer: 'Keneth Woodard', invoiceNum: '15008' },
            { customer: 'John', invoiceNum: '16001' },
            { customer: 'John', invoiceNum: '16005' },
            { customer: 'John', invoiceNum: '16002' },
            { customer: 'Kelly', invoiceNum: '180018' },
            { customer: 'Kelly', invoiceNum: '180018' },

        ];
        $("#customer").change(function () {

            $("#quickbookInvoice").html("<option selected disabled>Choose invoice</option>");
            const invoice = customerInvoice.filter(m => m.customer == $("#customer").val());
            invoice.forEach(element => {
                const option = "<option val='" + element.invoiceNum + "'>" + element.invoiceNum + "</option>";
                $("#quickbookInvoice").append(option);
            });

        });

        var stockData = JSON.parse(localStorage.getItem('stockandparts'));
        var options = unique(stockData, "StockName");
        var selectOptions = '';
        for (i = 0; i < options.length; i++) {

            selectOptions += '<option value="' + options[i] + '">' + options[i] + '</option>';
        }

        $('#stockname').append(selectOptions).on('change', function () {
            var selected = $(this).find('option:selected').val();
            $('#parts').empty();
            $.each(stockData, function (i, v) {
    
                if (v.StockName == selected) {
                    $('#parts').append('<option value="' + v.Parts[0].partnumber + '">' +'<input type="checkbox">'+ v.Parts[0].partnumber + '</option>');
                    
                }
            });
        });

        function unique(list, attr) {
            
            var result = [];
            $.each(list, function (i, e) {
                if ($.inArray(e[attr], result) == -1) result.push(e[attr]);
            });
            return result;
        }
    }
    else {
        window.location.replace("./login.html");
    }

});  