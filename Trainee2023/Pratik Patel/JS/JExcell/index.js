



 var data = [
    ['', '', '', '', '', '', ''],

]
var table1 = jexcel(document.getElementById('myTable'), {
    data: data,
    columns: [
        { title: 'Project \n Name*', width: 150, type: 'dropdown', source: ['Trannong', 'Used'] },
        { title: 'TimeLog \n Date*', width: 100, type: 'calendar', options: { format: 'DD/MM/YYYY' } },
        { title: 'Phase*', width: 170, type: 'dropdown', source: ['Analysis', 'Bug Fixing', 'Communiction', 'Devlopment', 'Design', 'Estimation', 'Prototype'] },
        { title: 'Status*', width: 120, type: 'dropdown', source: ['Completed', 'Working'] },
        { title: 'Logged \n Hours*', width: 100, type: 'text',mask: 'h:mm' },
        { title: 'Billable \n hours*', width: 100, type: 'text',mask: 'h:mm' },
        { title: 'Notes*', width: 180, type: 'text' },
        { title: 'Out\n of \nStock', width: 80, type: 'checkbox' },
        { title: 'BC \nlink', width: 100, type: 'text' },
        { title: 'BC \n Description', width: 100, type: 'text' },

        // mask: 'h:mm'
    ],
    updateTable: function (instance, cell, col, row, val, label, cellName) {
        // console.log('instance',instance)
        // console.log('cell', cell)
        // console.log('col', col)
        // console.log('row', row)
        // console.log('val', val)
        // console.log('label', label)
        // console.log('cellName', cellName)
        // alert(data)
        // console.log(data)
        var r = cellName
        console.log(r)

        var html = "";






        data.forEach(function (value, index) {
            var a = index + 1;
            if(col==5){
                debugger
                if(value[5]>value[4]){
                    value[5]=value[4]
                    alert(value[5])
                    table1.updateCell(x=5,y=index,value=value[5],mask= 'h:mm')
                }
            }
            if (col == 6 && cell.innerText != '') {
                console.log("col value", col);
                
                if(value[5]>value[4]){
                    value[5]=value[4]
                }
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

    
        table1.insertRow(r);
    

    document.getElementById("num").value = ""

}

function delRow() {
    debugger
    alert(data)
    console.log(data)
    // alert (data.length)
    let i=data.length
    // alert(data[1][0])
    for (i;i>=0;i--){
        debugger
        var s=true
        for (let j=0;j<=9;j++){
            
            if(j==7){
                continue
            }
            else{
            const found = data.find(e1 => e1[i][j] === '');

            if (found){
                break
            }
            if(!found){
                s=false
            }
        }
        
        }
        if(s==false)
           {  table1.deleteRow();
           }
    }
   
}

// function addData() {

//     var r = myTable.getRowData()
//     console.log(r)
// }