var data1 = [
    // ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
    // ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
    []
];

var alldata=jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [],
    data:data1,
    columns: [
        {
            type: 'dropdown',
            title:'Project Name*',
            width:120,
            id:"projectname",
            source:[
                "Javascript Project",
                "React Project",
                "Node Project",
                "Angular Project",
            
                // (...)
              ]
        },
     
        {
            type: 'calendar',
            title:'Timelog Date*',
            width:120
        },
        {
            type: 'dropdown',
            title:'Phase*',
            width:120,
            source:[
                "Communication",
                "Learning",
                "Listening",
               
                // (...)
              ]
        },
        {
            type: 'dropdown',
            title:'Status*',
            width:120,
            source:[
                "Pending",
                "Working",
                "Completed",
               
                // (...)
              ]
        },
        {
            type:'numeric',
            title:'Logged Hours*',
            width:120,
            mask:'00:00',
            class:'logged'

        },
        {
            type:'numeric',
            title:'Billable Hours*',
            width:120,
            mask:'00:00',
            id:'billable'

        },
      

        {
            type:'text',
            title:'Notes*',
            width:120,

        },
      
        
        {
            type: 'checkbox',
            title:'Out of Stock',
            width:80
        },
        {
            type:'text',
            title:'BC Link',
            width:120,

        },    {
            type:'text',
            title:'BC Description',
            width:120

        },
   
        
    //  updateTable:function( cell, col) {
    //     // Number formating
    //     if (col == 5) {
    //         // Get text
    //         txt = cell.innerText;
    //         console.log("bill",txt);
    //         alert(txt);
    //         // Format text
    //         // txt = numeric(txt).format("00:00");
    //         // // Update cell value
    //         // cell.innerHTML = '$ ' + JSON.stringify(txt);
            
    //     }
    // }
    
       
     ],
    //  function(cell,col) {
    //     if (col == 5) {
    //         txt = cell.innerText;
    //       console.log("bill",txt);
    //     }
    // }

 
});

// var txt=cell(4).innerText;
// console.log("bill",txt);
console.log(data1);
// console.log(alldata.getValue(["react"]));

function addrow()
{
    var number=document.getElementById("num").value

    for(let i=0;i<number;i++)
    {
        alldata.insertRow();
    }
    document.getElementById("num").value=""
}
function adddata(){
    var g = alldata.getData();
    t1.setData(g);
    console.log(t,g)
    t=g;
}

var t1 = jspreadsheet(document.getElementById('myTable'), {
    data:data1,
    columns:[
        // { title:'Model', width:300 },
        // { title:'Price', width:80 },
        // { title:'Model', width:100 }
        { title:'Project Name', width:200 },
        { title:'Timelog Date', width:200 },
        { title:'Phase', width:100 },
        { title:'Status', width:100 },
        { title:'Logged Hours', width:150},
        { title:'Billable Hours', width:150},
        { title:'Notes', width:200 },
        { title:'Out of Scope', width:120, },
        { title:'BC Link', width:100},
        { title:'BC Description', width:200 },
        
    ]
});


// var update=function(val,cel)
// {
//     var table=document.getElementById("spreadsheet");
//     var cell5=table.cells[5];
//     var cell6=cell5.innerText;
//     cell5.innerText=cell6;
// }
// // Get the table and the rows
// var table = document.getElementById("myTable");
// var row1 = table.rows[0];
// var row2 = table.rows[1];

// // Get the cell in the first row
// var cell1 = row1.cells[0];

// // Get the value in the cell
// var value = cell1.innerText;

// // Set the value in the cell in the second row
// var cell2 = row2.cells[0];
// cell2.innerText = value;



// $(document).ready(function() {
//     $('#spreadsheet').jspreadsheet({
//         data:data1,
//         onchange:update,
//     });
// });
$('#billable').on('change',function(event) {
    // var total_amount = $('.logged').val();
    // var delivery_charge = $(this).val();
    // var grand_total_amount = total_amount + delivery_charge;
    // $('.logged').val(grand_total_amount);
    var table=document.getElementById("spreadsheet");
    var cell5=table.cells[5];
    var cell6=cell5.innerText;
    cell5.innerText=cell6;
});