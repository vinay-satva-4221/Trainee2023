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
            mask:'00:00'

        },
        {
            type:'numeric',
            title:'Billable Hours*',
            width:120,
            mask:'00:00'

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