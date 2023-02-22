window.onload = () => {
    if (localStorage.getItem("details") == null) {
        
      window.location.replace("LoginPage.html");
    }
  }

/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Full name:</td>' +
        '<td>' +
        d.name +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Extension number:</td>' +
        '<td>' +
        d.extn +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Extra info:</td>' +
        '<td>And any further details here (images etc)...</td>' +
        '</tr>' +
        '</table>'
    );
}

// var data1 = [
//     ["Stock Location", "", "", "On water", "On water", "In Production"],
//     ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
//     ["BW-01-S-M", "1", "0", "3", "0", "0"],
//     ["BW-03-XL-G", "1", "1", "2", "2", "1"],
//     ["BW-01-Q-M", "", "0", "3", "0", "1"],
//     ["BW-03-XL-G", "1", "1", "2", "2", "1"],
//     ["ZK-08-X2P", "1", "0", "3", "0", "1"]
// ]

var data1 = [
    {
        PartNumber: 'Stock Location',
        InWarehouse: '1',
        Available: '0',
        C100: '3',
        C101: '0',
        C102: '0'
    },
    {
        PartNumber: 'Stock Location',
        InWarehouse: '1',
        Available: '0',
        C100: '3',
        C101: '0',
        C102: '0'
    },
];
 
$(document).ready(function () {
    var table = $('#example').DataTable({
        data: data1,
        //ajax: '../ajax/data/objects.txt',
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'PartNumber' },
            { data: 'InWarehouse' },
            { data: 'Available' },
            { data: 'C100' },
            { data: 'C101' },
            { data: 'C102' },
        ],
        order: [[1, 'asc']],
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
        }
    });
});


// var data = [
//     {
//         name: 'John Doe',
//         position: 'Software Engineer',
//         office: 'New York',
//         salary: '$120,000'
//     },
//     {
//         name: 'Jane Smith',
//         position: 'Product Manager',
//         office: 'San Francisco',
//         salary: '$150,000'
//     },
//     // Add more data objects here...
// ];
function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}
