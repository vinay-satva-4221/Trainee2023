



data =[
['','','','','','',''],

]
var table1 =jexcel(document.getElementById('myTable'), {
    data:data,
    columns: [
        { title:'Project \n Name*', width:150, type:'dropdown',source:['New','Used'] },
        { title:'TimeLog \n Date*', width:100,  type:'calendar', options: { format:'DD/MM/YYYY' }  },
        { title:'Phase*', width:170, type:'dropdown', source:['Analysis','Bug Fixing','Communiction','Devlopment','Design','Estimation','Prototype']},
        { title:'Status*', width:120,type:'dropdown', source:['Completed','Pending','Solved','Working'] },
        { title:'Logged \n Hours*', width:100, type:'text',mask:'00:00' },
        { title:'Billable \n hours*', width:100, type:'text',mask:'00:00' },
        { title:'Notes*', width:180, type:'text' },
        { title:'Out\n of \nStock', width:80, type:'checkbox' },
        { title:'BC \nlink', width:100, type:'text' },
        { title:'BC \n Description', width:100, type:'text' },


    ]
});

function addrow(){
 var r = parseInt ( document.getElementById("num").value)
 
 for(let i =0 ; i < r; i++ ){
    table1.insertRow();
 }
 
 document.getElementById("num").value = ""
 
}

function delRow(){
    table1.deleteRow();
}

function addData (){

    var r = myTable.getRowData()
    console.log(r)
}