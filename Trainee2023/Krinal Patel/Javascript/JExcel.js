var data = [
    ['', '', '', '', '', '', 'HTML Task',true,'www.bc.com','Todays JS'],
];
debugger;
var j1 = jspreadsheet(document.getElementById('spreadsheet'), {
    
    data:data,
    columns: [
        { type: 'dropdown', source:['Satva Training Batch 2023','STV Internal'], title:'Project Name', width:200}, 
        { type: 'calendar', title:'Timelog Date', width:200 },
        { type: 'dropdown', source:['Analysis','Bug Fixing','Communication','Deployment','Design','Development','Pending','Completed','Estimation','QA/Testing','UAT'], title:'Phase', width:100 },
        { type: 'dropdown', source:['Pending','Completed','Working','Solved'],title:'Status', width:100 },
        { type: 'numeric', title:'Logged Hours', width:150 , mask:'hh:mm'},
        { type: 'numeric', title:'Billable Hours', width:150, mask:'hh:mm' },
        { type: 'text', title:'Notes', width:200 },
        { type: 'checkbox', title:'Out of Scope', width:120, },
        { type: 'text', title:'BC Link', width:100},
        { type: 'text', title:'BC Description', width:200 },
        
     ],
    
    // onblur:function(instance, rowNumber, numOfRows, rowRecords, insertBefore){
    //     var g = j1.getData();
    //     t1.setData(g);
    //     console.log(t,g)
    //     t=g;
    // }
    onselection:function(instance, x1, y1, x2, y2, origin){
        var g = j1.getData();
            t1.setData(g);
            console.log(t,g)
            t=g;
        }
        
        
        
});

// $('#spreadsheet').jspreadsheet({
//     data:data,
//     onchange:update,
  
// });
var t1 = jspreadsheet(document.getElementById('tb'), {
    data:data,
    columns: [
      
        { title:'Project Name', width:200,readOnly:true },
        { title:'Timelog Date', width:200 ,readOnly:true },
        { title:'Phase', width:100 ,readOnly:true },
        { title:'Status', width:100 ,readOnly:true },
        { title:'Logged Hours', width:150,readOnly:true },
        { title:'Billable Hours', width:150,readOnly:true },
        { title:'Notes', width:200 ,readOnly:true },
        { title:'Out of Scope', width:120,readOnly:true },
        { title:'BC Link', width:100,readOnly:true },
        { title:'BC Description', width:200 ,readOnly:true },
        
        
    ]
});
function add(){   

    var row = document.getElementById("no").value;
    for(let i=0; i<row; i++)
    {
        j1.insertRow();
    }
}
// var updates = function (){

//     var g = j1.getData();
//     t1.setData(g);
//     console.log(t,g)
//     t=g;
// }

