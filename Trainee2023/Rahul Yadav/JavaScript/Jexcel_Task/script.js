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
        { type: 'number', width: '120', title: 'Billable Hours', mask: 'hh:mm' },
        { type: 'text', width: '200', title: 'Notes' },
        { type: 'checkbox', width: '100', title: 'Out of stock' },
        { type: 'url', width: '100', title: 'BC Link' },
        { type: 'text', width: '200', title: 'BC Description' }
    ],

    updateTable: function (instance, cell, col, row, val, label, cellName) {

        var html = "";
        if(data[0] != ''){
            
                data.forEach(function (value, index) {
                    var a = index + 1;
                    html += "<tr class=text-center>";
                    html += "<td>" + a + "</td>";
                    html += "<td>" + (value)[0] + "</td>";
                    html += "<td>" + (value)[1] + "</td>";
                    html += "<td>" + (value)[2] + "</td>";
                    html += "<td>" +  (value)[3]+ "</td>";
                    html += "<td>" + (value)[4] + "</td>";
                    html += "<td>" +(value)[5]  + "</td>";
                    html += "<td>" + (value)[6] + "</td>";
                    html += "<td>" + (value)[7] + "</td>";
                    html += "<td>" +(value)[8] + "</td>";
                    html += "<td>" + (value)[9]+ "</td>";
                    
    
    
                    html += "</tr>";
    
                    document.getElementById("root").innerHTML = html;
                });
        }
        
    }

});
console.log(data);
// document.getElementById("table").onclick = function () {
//     var html = "";

//     data.forEach(function (value, index) {
//         var a = index + 1;
//         html += "<tr class=text-center>";
//         html += "<td>" + a + "</td>";
//         html += "<td>" + (value)[0] + "</td>";
//         html += "<td>" + (value)[1] + "</td>";
//         html += "<td>" + index[2] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";
//         html += "<td>" + data[index] + "</td>";


//         html += "</tr>";

//         document.getElementById("root").innerHTML = html;
//     });
// }

// $(document).ready(function () {
//     $("#table").click(function(){
//         var data;
//         var html = "<table border='1|1'>";
//     for (var i = 0; i < 5; i++) {
//         html+="<tr>";
//         html+="<td>"+data[i]+"</td>";
//         html+="<td>"+data[i]+"</td>";
//         html+="<td>"+data[i]+"</td>";

//         html+="</tr>";

//     }
//     html+="</table>";
//     $("root").html(html);
//       });


// });

document.getElementById("addrow").onclick = function () {
    var int = document.getElementById('input').value;
    if ((Number(int)) > 0) {
        table.insertRow(Number(int));
        document.getElementById("input").value = "";
    }
}

document.getElementById("deleterow").onclick = function () {
    table.deleteRow();

}


// $(document).ready(function () {
//     $('#example').DataTable({
//         data: data,
//         columns: [
//             { title: 'Project Name' },
//             { title: 'TimeLog Date' },
//             { title: 'Phase' },
//             { title: 'Status' },
//             { title: 'Logged Hours' },
//             { title: 'Billable Hours' },
//             { title: 'Notes' },
//             { title: 'Out of stock' },
//             { title: 'BC Link' },
//             { title: 'BC Description' },
//         ],
//     });
// });

