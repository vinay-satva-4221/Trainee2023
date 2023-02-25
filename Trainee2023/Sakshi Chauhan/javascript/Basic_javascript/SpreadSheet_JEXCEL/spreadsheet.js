var data = [
    [],
];

var table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'dropdown', title:'Project Name', width:150, source:[ "W9", "W-8BEN", "W-8BEN-E" ]},
        { type: 'calendar', title:'TimeLog Date', width:150},
        { type: 'dropdown', title:'Phase', width:150, source:[ "Analysis", "Bug Fixing", "Communication", "Deployment", "Design", "Development", "Estimation", "Miscellaneous Activity", "Prototype", "Testing/QA" ]},
        { type: 'dropdown', title:'Status', width:150, source:[ "Completed", "Pending", "Solved", "Working" ]},
        { type: 'text', title:'Logged Hours', width:100 },
        { type: 'text', title:'Billable Hours', width:100 },
        { type: 'text', title:'Notes', width:120 },
        { type: 'checkbox', title:'Out Of Stock', width:100 },
        { type: 'link', title:'BC Link', width:100},    
        { type: 'text', title:'BC Description', width: 120}
     ]
   
});

console.log(data);
function addRow()
{
    var value = document.getElementById('user_Id').value;
    for(var s=0; s<value; s++)
    {
        table.insertRow();
    }
  

    for (let i = 1; i <= data; i++) {

        html += "<tr class=text-center>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + data[i].cell[0] + "</td>";
        html += "</tr>";

        
    }
    document.getElementById("root").innerHTML = html;

}


$(document).ready(function(){ 
    $('#delete').click(function(){
        table.deleteRow(); 
    });
  });

//   function doShowAll() {
//     var Wrorksheet = data;
//     var list = "<tr><th>SR.No</th><th>Project Name</th><th>Time Log Date</th><th>Phase</th><th>Status</th><th>Looged Hours</th><th>Billable Hours</th><th>Notes</th><th>Out Of Stock</th><th>BC Link</th><th>BC Descripton</th></tr>\n";
//     // var i = 0;
//     if (Wrorksheet) {
//         for (let i = 0; i < Wrorksheet.length; i++) {

//             list += "<tr><td>" + [i + 1] + "</td><td>" + Wrorksheet[i].Project  + "</td><td>" + student_data[i].mobile + "</td><td>" + student_data[i].email + "</td><td>" + student_data[i].college + "</td><td>" + student_data[i].cgpa + "</td><td>" + student_data[i].branch + "</td><td>" + student_data[i].fromtowhenyoustudied + "</td><td>" + student_data[i].state + "</td><td>" + student_data[i].city + "</td><td>" + student_data[i].zip + "</td><td>" + colors + "</td> <td> <button type='button' data-val=" + [i + 1] + " class='edit btn btn-success'>Edit</button><td> <button type='button' data-val=" + [i + 1] + " data-val='1' class='delete btn btn-danger'>Delete</button></td></tr>\n"

//         }
//     }
//     $("#table").html(list)
