$(document).ready(function () {
    var Mytable = jspreadsheet(document.getElementById('spreadsheet'), {
        data: [[]],
        columns:
            [
                { type: 'dropdown', title: 'Project Name', width: 200, source: ['ABC', 'XYZ', 'PQR'], },
                { type: 'calendar', title: 'Timelog Date', width: 100, },
                { type: 'dropdown', title: 'Phase', width: 100, source: [{ id: 1, name: 'Analysis' }, { id: 2, name: 'Design' }, { id: 3, name: 'Development' }, { id: 2, name: 'Bug' }], },
                { type: 'dropdown', title: 'Status', width: 100, source: [{ id: 1, name: 'Working' }, { id: 2, name: 'Completed' }], },
                { type: 'text', title: 'Logged Hours', width: 50, mask: 'h:mm' },
                { type: 'text', title: 'Bilable Hours', width: 50, mask: 'h:mm' },
                { type: 'text', title: 'Notes', width: 100 },
                { type: 'checkbox', title: 'Out Of Stock', width: 50 },
                { type: 'text', title: 'BC link', width: 100 },
                { type: 'text', title: 'Bs Description', width: 150 },

            ],
        // updateTable: function (instance, cell, col, row, val, label, cellName) {

        //     if (col == 5) {
        //         // Get text

        //         txt = cell.innerText;
        //         // Format text
        //         col=6
        //         col.innerHTML = txt;
        //     }
        // }



    });

    // $('#DeleteRow').click(function () {
    //     for(let i=0;i<Mytable.row.length;i++){
    //         var r = Mytable.getRowData([i]);
    //         for(let j=0;j<=9;j++){
    //             var o=true
    //             if(j==7)
    //             {
    //                 if(r[i][j]==false){
    //                     o=false
    //                     break

    //                 }

    //             }
    //             if(r[i][j]=="" && o==false){

    //                 Mytable.deleteRow(i)

    //             }
    //         }
    //         console.log(r)
    //     }

    // })
    $('#addrow').click(function () {
        var row = parseInt($('#rownumber').val());
        Mytable.insertRow(row);

        var r1 = Mytable.getRowData([0]);
        console.log(r1)
    
        for (let i = 1; i <= Mytable; i++) {
    
            html += "<tr class=text-center>";
            html += "<td>" + (i + 1) + "</td>";
            html += "<td>" + Mytable[i].cell[0] + "</td>";
            // html += "<td>" + element.mobile + "</td>";
            // html += "<td>" + element.email + "</td>";
            // html += "<td>" + element.collage + "</td>";
            // html += "<td>" + element.cgpa + "</td>";
            // html += "<td>" + element.branch + "</td>";
            // html += "<td>" + element.state + "</td>";
            // html += "<td>" + element.city + "</td>";
            // html += "<td>" + element.zip + "</td>";
            // html += "<td>" + element.date + "</td>";
            // html += "<td>" + color + "</td>";
            html += "</tr>";
    
            
        }
        document.getElementById("root").innerHTML = html;
    


    })
    $('#DeleteRow').click(function () {
        Mytable.deleteRow();
    })


  

})


// if (row == 0) {
//     if (col == 1 || col == 2 || col == 3 || col == 4 || col == 5 || col == 6) {
//         r = cell.innerHTML
//         console.log(r)

//         for (let i = 0; i < Mytable; i++) {
//             if (col == 1 || col == 2 || col == 3 || col == 4 || col == 5 || col == 6) {
//                 if (r == '') {
//                     Mytable.deleteRow(i);
//                 }
//             }
//         }
//     }

//     // cell.style.backgroundColor = '#f46e42';
//     // cell.style.color = '#ffffff';
// }