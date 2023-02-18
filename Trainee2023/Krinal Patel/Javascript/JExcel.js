var data = [
    ['', '', '2018-07-11', '', '', '', 'HTML Task',true,'www.bc.com','Todays JS'],
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
     ]
});

// $('#spreadsheet').jspreadsheet({
//     data:data,
//     onchange:update,
  
// });
var t1 = jspreadsheet(document.getElementById('table'), {
    data:data,
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
function add(){   

    var row = document.getElementById("no").value;
    for(let i=0; i<row; i++)
    {
        j1.insertRow();
    }
}
function adddata(){
    var g = j1.getData();
    t1.setData(g);
    console.log(t,g)
    t=g;
}

