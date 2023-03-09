window.onload = () => {
    if (localStorage.getItem("loggUser") == null) {

        window.location.replace("LoginPage.html");
    }
}

var data1 = [
    ["Stock Location", "", "", "On water", "On water", "In Production"],
    ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
    ["BW-01-S-M", "1", "0", "<button class='text-primary  border-0 bg-light' data-bs-toggle='popover' id='popover'>3</button>", "0", "0"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["ZK-08-X2P", "1", "0", "3", "0", "1"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["ZK-08-X2P", "1", "0", "3", "0", "1"],
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
                title: 'C100', "sortable": false,

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


    $('[data-bs-toggle="popover"]').popover({

        container: 'body',
        placement: 'right',
        html: true,
        content: function () {
            return $('#popover-form').html();
        }
    });


    // $(document).on('click', '.close-popover', function () {
    //     debugger
    //     $(this).closest('.popover').popover('hide');
    // });
    $(document).on('click', '.closepopover', function() {
        $('[data-bs-toggle="popover"]').popover('hide');
      });

    $('.sorting').removeClass('sorting');

    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user", user);
    $("#Uname").html(user[0].name);

});

function logout() {
    window.location.replace("LoginPage.html");
    localStorage.removeItem('loggUser');
}
