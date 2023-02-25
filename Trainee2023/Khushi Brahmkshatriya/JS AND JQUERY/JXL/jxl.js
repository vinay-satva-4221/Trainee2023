
data = [
    ['', '', '', '', '', '', ''],

]

    var Mytable = jexcel(document.getElementById('spreadsheet'), {
   
        data: data,
        columns: [
            { title: 'Project \n Name*', width: 150, type: 'dropdown', source: ['ABC', 'XYZ','PQR'] },
            { title: 'TimeLog \n Date*', width: 100, type: 'calendar', options: { format: 'DD/MM/YYYY' } },
            { title: 'Phase*', width: 100, type: 'dropdown', source: ['Analysis', 'Bug Fixing', 'Communiction', 'Devlopment', 'Design', 'Estimation', 'Prototype'] },
            { title: 'Status*', width: 100, type: 'dropdown', source: ['Completed', 'Pending', 'Solved', 'Working'] },
            { title: 'Logged \n Hours*', width: 80, type: 'text', mask: 'h:mm' },
            { title: 'Billable \n hours*', width: 80, type: 'text', mask: 'h:mm' },
            { title: 'Notes*', width: 180, type: 'text' },
            { title: 'Out\n of \nStock', width: 100 , type: 'checkbox' },
            { title: 'BC \nlink', width: 100, type: 'text' },
            { title: 'BC \n Description', width: 100, type: 'text' },


        ],
        updateTable: function (instance, cell, col, row, val, label, cellName) {
            var r = cellName
            console.log(r)
    
            var html = "";
    
            data.forEach(function (value, index) {
                var a = index + 1;
                if(col==5){
                    debugger
                    if(value[5]>value[4]){
                        value[5]=value[4]
                      
                        Mytable.updateCell(x=5,y=index,value=value[5],mask= 'h:mm')
                    }
                }
                if (col == 6 && cell.innerText != '') {
                    console.log("col value", col);
                   
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
     
function addrow() {
    var r = parseInt(document.getElementById("num").value)

    for (let i = 0; i < r; i++) {
        Mytable.insertRow();
    }

    document.getElementById("num").value = ""

}

function delRow() {
    Mytable.deleteRow();
}

function addData() {

    var r = spreadsheet.getRowData()
    console.log(r)
}

