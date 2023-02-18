var data1 = [
    ['', '', '', '', '', '', ''],
]
var table = jspreadsheet(document.getElementById('demo'), {
    data:data1,
    minDimensions: [],
    columns: [
        {
            type: 'dropdown',
            title: 'Project Name*',
            width: 170,
            source: [
                "Javascript Project",
                "Jquery Project"
            ]
        },
        {
            type: 'calendar',
            title: 'TimeLogDate*',
            width: 120,
        },
        {
            type: 'dropdown',
            title: 'Phase*',
            width: 150,
            source: [
                "Communication",
                "Design",
                "Development"
            ]
        },
        {
            type: 'dropdown',
            title: 'Status*',
            width: 100,
            source: [
                "Pending",
                "Completed",
                "Working"
            ]
        },
        {
            type: 'numeric',
            title: 'LoggedHours*',
            width: 120,
            mask:'00:00'
        },
        {
            type: 'numeric',
            title: 'BillableHours*',
            width: 120,
            mask:'00:00'
        },
        {
            type: 'text',
            title: 'Notes*',
            width: 170,
        },
        {
            type: 'checkbox',
            title: 'OutOfStock*',
            width: 110,
        },
        {
            type: 'text',
            title: 'BC Link*',
            width: 70,
        },
        {
            type: 'text',
            title: 'BC Description*',
            width: 120,
        },  
        
    ]
    
});
console.log(data1);


function addRow(){

    var row = document.getElementById("number").value;
    for(let i=0; i<row; i++)
    {
        table.insertRow();
    }
}