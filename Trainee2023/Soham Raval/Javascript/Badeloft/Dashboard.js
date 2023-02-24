window.onload = () => {
    if (localStorage.getItem("details") == null) {
        
      window.location.replace("Badeloft.html");
    }
  }

var data1 = [
    ["Stock Location", "", "", "On water", "On water", "In Production"],
    ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
    ["BW-01-S-M", "1", "0", "3", "0", "0"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
]
// var getdata1=data1[0].
$(document).ready(function () {
   var table= $('#example').DataTable({
        data: data1,
        columns: [
            { title: 'Part Number' },
            { title: 'In Warehouse',"sortable": false },
            { title: 'Available',"sortable": false },
            { title: 'C100',"sortable": false },
            { title: 'C101',"sortable": false },
            { title: 'C102',"sortable": false },
 
        ],

        columnDefs: [
            {
                targets: [1,2,3,4,5],
                className: 'text-center'
            }
          ]
        
    });
    var oneSelectedCell = table.cell(2,3);
    console.log(oneSelectedCell.data());
    
   
});

let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 

$("#Uname").html(a[0].Name);


function logout() {
    window.location="Badeloft.html"
    localStorage.clear();
}
