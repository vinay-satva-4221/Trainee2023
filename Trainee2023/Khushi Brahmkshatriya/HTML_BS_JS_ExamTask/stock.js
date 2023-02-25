$(document).ready(function () {

    $("#AddNavbar").load("./navbar.html");
    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        createStackTable();
        //window.location.replace("dashboard.html");
    }
    else {
        window.location.replace("./login.html");
    }
    // $('.callPopover').click(function () {
    //     $(this).popover({
    //             html: true,
    //             html: true,
    //         placement: 'right',
    //         sanitize: false,
    //         content() {
    //                 var $buttons = $('#PopoverContent').html();
    //                 return $buttons;
    //             }
    //      }).popover('toggle');
    //      $('.click_me').off('click').on('click', function() {
    //          alert('it works!');
    //      });
    // });



    let PartData = [];

    function createStackTable()
    {
        let localData = localStorage.getItem('NewPartNumber');
        let localArray = JSON.parse(localData);
        console.log(localArray);
        loggedData = JSON.parse(loggedData);
        console.log(loggedData);
        //var dataSet = localArray.push(...loggedData)
        console.log(localArray)
    
        var table = $("#example").DataTable({
    
            "order": [],
            "dom": 'rtip',
        
            data: localArray,
            bInfo: true,
            columns:
    
                [
                    {
                        className: "dt-control",
                        orderable: false,
                        data: null,
                        defaultContent: "",
                    },
                    { data: "StockName", title: "Stock Name" },
                    { data: "ETADate", title: "ETA Date" },
                    { data: "StockLocation", title: "Stock Location" },
                    { data: "UserName", title: "Created By" },
                    {
                        data: DataTable.render.datetime('MM/DD/YYYY'),
                        keyInput: false, title: "Created Date"
                    },
                    { data: "Action", title: "Action" },
    
                ],
    
    
        });
       
    }
    
    $('#AddNewSNum').on("click", function () {

       
        // $('#partnumber').val();
        // $('#ordred').val();
        // $('#notes').val();
        if ($('#partnumber').val() == '' || $('#ordred').val() == '' || $('#notes').val() == '') {
            swal("Error!", "Please enter all the details", "error");
        }
        else {
            var invoice = Math.floor(100000 + Math.random() * 900000);
            PartData.push({
                partnumber: $('#partnumber').val(),
                ordred: $('#ordred').val(),
                notes: $('#notes').val(),
                invoice: invoice,
            })
            console.log(PartData);
            //$('#AddNewSNum').model('hide');
            debugger
            let dynamicTR = "<thead><th>Part Number</th><th>Invoice#</th><th>Ordered</th><th>Notes</th></thead><tbody>";
            for (let i = 0; i < PartData.length; i++) {
                dynamicTR += "<tr>" + "<td>" + PartData[i].partnumber + "</td>" + "<td>" + PartData[i].invoice + "</td>" + "<td>" + PartData[i].ordred + "</td>" + "<td>" + PartData[i].notes + "</td></tr>"
            }
            dynamicTR += "</tbody>";
            console.log(dynamicTR)
            $('#partTable').html(dynamicTR);

        }

    });
    $("#ordred").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    $('input[name="etaDate"]').daterangepicker({
        singleDatePicker: true,
        
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        },
        maxYear: parseInt(moment().format('YYYY'),10)
      
      });
    
    $("#etaDate").keypress(function(event) {
        return ( ( event.keyCode || event.which ) === 9 ? true : false );
    });
    $('input[name="etaDate"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        $("#date-error").hide();
        $(".error").removeClass("error");
    });

    $('input[name="etaDate"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

    $("#stockForm").validate({
        // in 'rules' user have to specify all the constraints for respective fields

        rules: {

            stockName: {
                required: true,
            },
            etaDate: {
                required: true,
                date: true
            },
            btnradio: {
                required: true,
            },


        },
        messages: {
            stockName: {
                required: "Please enter stock name",
            },
            etaDate: {
                required: "Please enter ETA Date",
                date: "Please enter valid date"
            },
            btnradio: {
                required: "Please select stock status",
            }
        }
    });
    var form = $("#stockForm");
    form.validate();
    $('#saveStock').click(function () {
        var result = form.valid();
        console.log(result);

        if (result == false || PartData.length == 0) {

            swal("Error!", "Please enter all the details", "error");
            if (result == true && PartData.length == 0) {
                swal("Error!", "Please enter part details", "error");
            }
        }
        else {
            addDataToLocal();
        }
    })
    function addDataToLocal() {

        debugger
        let localData = localStorage.getItem('NewPartNumber');

        if (localData) {
            let localArray = JSON.parse(localData);
            let myId = localArray.length - 1;
            myId = localArray.map(x => x.id)[myId];
            const obj = {
                id: myId + 1,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: $("input[name='btnradio']:checked").val(),
                Parts: PartData,
            };

            localArray.push(obj);
            localStorage.setItem('NewPartNumber', JSON.stringify(localArray));
            // loadDataFromLocal();
        }
        else {
            const arryObj = [];
            const obj = {
                id: 1,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: $('#StockStatus').val(),
                Parts: PartData,
            };
            arryObj.push(obj);
            maxId = localStorage.setItem('NewPartNumber', JSON.stringify(arryObj));
        }

    }

})
