var data = [
    ['', '', '', ''],
];
var table = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'dropdown', width: '100', title: 'Project Name', source: ['Cookies', 'Mapping', 'Local storage'] },
        { type: 'calendar', width: '120', title: 'TimeLog Date' },
        { type: 'dropdown', width: '100', title: 'Phase', source: ['Initial Phase', 'Final Phase'] },
        { type: 'dropdown', width: '100', title: 'Status', source: ['pending', 'Completed'] },
        { type: 'number', width: '120', title: 'Logged Hours', mask: 'hh:mm' },
        { type: 'integer', width: '120', title: 'Billable Hours', mask: 'hh:mm' },
        { type: 'text', width: '200', title: 'Notes' },
        { type: 'checkbox', width: '100', title: 'Out of stock' },
        { type: 'url', width: '100', title: 'BC Link' },
        { type: 'text', width: '200', title: 'BC Description' }
    ],

    updateTable: function (instance, cell, col, row, val, label, cellName) {
        // console.log('instance',instance)
        // console.log('cell', cell)
        // console.log('col', col)
        console.log('row', row)
        // console.log('val', val)
        // console.log('label', label)
        // console.log('cellName', cellName)

        var r = cellName
        console.log(r)

        var html = "";






        data.forEach(function (value, index) {
            if (col == 6 && cell.innerText != '') {
                console.log("col value",col);
                var a =index + 1;
                html += "<tr class=text-center>";
                html += "<td>" + a + "</td>";
                html += "<td>" + (value)[0] + "</td>";
                html += "<td>" + (value)[1] + "</td>";
                html += "<td>" + (value)[2] + "</td>";
                html += "<td>" + (value)[3] + "</td>";
                html += "<td>" + (value)[4] + "</td>";
                html += "<td>" + (value)[5] + "</td>";
                html += "<td>" + (value)[6] + "</td>";
                html += "<td>" + (value)[7] + "</td>";
                html += "<td>" + (value)[8] + "</td>";
                html += "<td>" + (value)[9] + "</td>";
                html += "</tr>";


                document.getElementById("root").innerHTML = html;
            }
        });


    }
    

});
console.log(data);
var x=table.getColumnData([3]);
console.log("Hello",Number(x))
document.getElementById("addrow").onclick = function () {
    var int = document.getElementById('input').value;
    if ((Number(int)) > 0) {
        table.insertRow(Number(int));
        document.getElementById("input").value = "";
    }

    log1()
}

document.getElementById("deleterow").onclick = function () {
    table.deleteRow();

}


function log1(col) {


    

    var v1 = data[5]
    console.log('v1', v1)

    var e = data
    console.log(e)
}

        // }
