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

$(document).ready(function () {
    $('#example').DataTable({
        data: data1,
        columns: [
            { title: 'Part Number' },
            { title: 'In Warehouse' },
            { title: 'Available' },
            { title: 'C100' },
            { title: 'C101' },
            { title: 'C102' },
        ],
        
    });
   
});

let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 

$("#Uname").html(a[0].Name);


function logout() {
    window.location="Badeloft.html"
    localStorage.clear();
}
