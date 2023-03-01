window.onload = () => {
    if (localStorage.getItem("details") == null) {
        
      window.location.replace("Badeloft.html");
    }
  }
var dashboarddata = [
    ["Stock Location", "", "", "On water", "On water", "In Production"],
    ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
    ["BW-01-S-M", "1", "0", "3", "0", "0"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
]

// var getdata1=data1[0].
$(document).ready(function () {
    var StockLocation = $.fn.dataTable.absoluteOrder( 
        [{ value: 'Stock Location', position: 'top' },
        { value: 'ETA Date', position: 'top' }]);

        
   var table= $('#dashboard_table').DataTable({
        data: dashboarddata,

          fnInitComplete: function () {
            $('#dashboard_table_length').html('<b><h3>&nbsp;Stock</h3></b>');},
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
            },
            {
                "width": "10%" , "targets": 0
            },
            { targets: 0, type: StockLocation },

          ],

          language:{
            search: "_INPUT_",
            searchPlaceholder: 'Search here',
            paginate:{
                previous:"<",
                next:">"
            },
          },
    });
    // $('#CustomSearchBox').keyup(function() {
    //     table.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    // });
    // var oneSelectedCell = table.cell(2,3);
    // console.log(oneSelectedCell.data());
});
let a=JSON.parse(localStorage.getItem("details"));
console.log("a",a); 
$("#Uname").html(a[0].Name);
function logout() {
    window.location="Login.html"
    localStorage.clear();
}
