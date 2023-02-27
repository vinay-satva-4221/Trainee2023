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

    function createStackTable() {
        function format(d) {

            let dynamicChildRow = '';
            if (d.Parts && d.Parts.length > 0) {
              dynamicChildRow += '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
              dynamicChildRow += '<thead><tr><th>#</th><th>Part Number</th><thOrdered</th><th>Assigned</th><th>Notes</th></tr></thead>';
              dynamicChildRow += '<tbody>';
              d.Parts.forEach((partdetail) => {
                dynamicChildRow += '<tr><td>' + partdetail.index + '</td><td>' + partdetail.partnumber + '</td><td>' + partdetail.ordred + '</td><td>' + partdetail.notes + '</td></tr>';
              });
              dynamicChildRow += '</tbody></table>';
            }
            return dynamicChildRow;
          }
        // function format(d) {
        //     // `d` is the original data object for the row
        //     return (
        //         '<table class="table border"style="padding-left:50px;">' +
        //         "<thead>" +
        //         "<th>#</th>"+
        //         "<th>Part Number</th>"+
        //         "<th>Ordered</th>"+
        //         "<th>Assigned</th>"+
        //         "<th>Notes</th>"+
        //         "</thead>"+
        //         "<tdbody>"+
        //         "<tr>"+
        //         "<td>"+d.Parts.partnumber +"</td>"+
        //         "<td>"+d.Parts.ordred +"</td>"+
        //         "<td>"+d.Parts.partnumber +"</td>"+
        //         "<td>"+d.Parts.notes +"</td>"+
        //         "</tr>"+
        //         "</tbody>"+
        //         "</table>"

        //     );
        // }

        let localData = localStorage.getItem('NewPartNumber');
        let localArray = JSON.parse(localData);
        console.log(localArray);
        //var dataSet = localArray.push(...loggedData)
        console.log(localArray)

        var table = $("#example").DataTable({

            "order": [],
            "dom": 'rtip',
            columnDefs: [{
                "defaultContent": "-",
                "targets": "_all"
              }],
            data: localArray,
            bInfo: true,
            columns:

                [
                    
                    { data: "StockName", title: "Stock Name" ,className: "dt-control", 
                    orderable: false},
                    { data: "ETADate", title: "ETA Date" },
                    { data: "StockLocation", title: "Stock Location" },
                    { data: "CreatedBy", title: "Created By" },
                    {
                        data: DataTable.render.datetime('MM/DD/YYYY'),
                        keyInput: false, title: "Created Date"
                    },
                    { data: "Action", title: "Action" },

                ],


        });
        $("#example tbody").on("click", "td.dt-control", function () {
            var tr = $(this).closest("tr");
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass("shown");
            } else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass("shown");
            }
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
            $("#exampleModal2").hide();
            var invoice = Math.floor(100000 + Math.random() * 900000);
            PartData.push({
                partnumber: $('#partnumber').val(),
                ordred: $('#ordred').val(),
                notes: $('#notes').val(),
                invoice: invoice,
            })
            console.log(PartData);
            //$('#AddNewSNum').model('hide');
            
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
            $("#exampleModal").hide();
            addDataToLocal();
            
        }
    })
    function addDataToLocal() {

        let loginData = JSON.parse(localStorage.getItem('LoggedInUser'));
        var createdBy = loginData.find(
            x => x.UserName);

        let localData = localStorage.getItem('NewPartNumber');

        if (localData) {
            let localArray = JSON.parse(localData);
            let myId = localArray.length - 1;
            myId = localArray.map(x => x.id)[myId];
            const obj = {
                id: myId + 1,
                CreatedBy: createdBy.UserName,
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
                CreatedBy: createdBy.UserName,
                StockName: $('#stockName').val(),
                ETADate: $('#etaDate').val(),
                StockStatus: $('#StockStatus').val(),
                Parts: PartData,
            };
            arryObj.push(obj);
            maxId = localStorage.setItem('NewPartNumber', JSON.stringify(arryObj));
        }
        createStackTable();
    }

})
