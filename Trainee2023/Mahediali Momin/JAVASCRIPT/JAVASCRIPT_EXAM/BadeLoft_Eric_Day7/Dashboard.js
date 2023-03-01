// $(document).ready(function () {
//     var name = localStorage.getItem("details");
//     console.log(name)

//     var det = name.uname;
//     console.log(det)
// })


window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}

var data1 = [
    ["Stock Location", "", "", "On water", "On water", "In Production"],
    ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
    ["BW-01-S-M", "1", "0", "3", "0", "0"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["ZK-08-X2P", "1", "0", "3", "0", "1"],
]

$(document).ready(function () {
    var StockLocation = $.fn.dataTable.absoluteOrder(
        [{ value: 'Stock Location', position: 'top' },
        { value: 'ETA Date', position: 'top' }]);

    table = $('#dashboardtable').DataTable({
        "fnInitComplete": function () {
            $('#dashboardtable_length').html('<h5><strong>Dashboard</strong></h5>');
        },
        data: data1,
        columns: [
            { title: 'Part Number', "sortable": true, },
            { title: 'In Warehouse', "sortable": false },
            { title: 'Available', "sortable": false },
            {
                // title: 'C100', "sortable": false, fnDrawCallback: function () {
                //     $('[data-toggle="popover"]').popover();
                // }
                // title: 'C100',
                // "sortable": false,
                // "render": function (data, type, row) {
                //     var popover_content = "This is a popover for C100 column.";
                //     return "<a href='#' data-toggle='popover' title='C100' data-content='" + popover_content + "'>" + data + "</a>";
                // }
                title: 'C100',
                "sortable": false,
                "render": function (data, type, row, meta) {
                    if (meta.row >= 2 && meta.row <= 15 && meta.col == 3) {
                        var popover_content = "This is a popover for C100 column.";
                        return "<a href='#' data-toggle='popover' title='C100' data-content='" + popover_content + "'>" + data + "</a>";
                    } else {
                        return data;
                    }
                }

            },
            { title: 'C101', "sortable": false },
            { title: 'C102', "sortable": false },
        ],
        lengthMenu: [
            [5]
            [5]
        ],

        columnDefs: [
            {
                targets: [1, 2, 3, 4, 5],
                className: 'text-center'
            },
            {
                "width": "30%", "targets": 0
            },
            { targets: 0, type: StockLocation },

        ],
        language: {
            search: "_INPUT_",
            searchPlaceholder: 'Search here...',
            paginate: {
                previous: "<",
                next: ">"
            },
            info: "Items 1 to 15 of 30 total",
            paginate: {
              next: "&#62",
              previous: "&#60",
            },
        },
      

    });
    $('[data-toggle="popover"]').popover();

    $('.sorting').removeClass('sorting');

    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);

});

function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}
