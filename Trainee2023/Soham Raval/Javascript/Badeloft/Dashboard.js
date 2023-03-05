window.onload = () => {
    if (localStorage.getItem("details") == null) {
        
      window.location.replace("Login.html");
    }
  }
var dashboarddata = [
    ["Stock Location", "", "", "On water", "On water", "In Production"],
    ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
    ["BW-01-S-M", "1", "0", "<button class='text-primary  border-0 bg-light' data-bs-toggle='popover' id='popover'>3</button>", "0", "0"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
    // ["BW-01-Q-M", "", "0", "3", "0", "1"],
]
$(document).ready(function () {
    var StockLocation = $.fn.dataTable.absoluteOrder( 
        [{ value: 'Stock Location', position: 'top' },
        { value: 'ETA Date', position: 'top' }]);
   var datatable= $('#dashboard_table').DataTable({
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
          language: {
              search: "_INPUT_",
            searchPlaceholder: 'Search here',
            info: "items _START_ to _END_ of _TOTAL_ items",
                paginate:{
          
                previous:"<",
                next:">",
            },
         
        },
    });
    $('[data-bs-toggle="popover"]').popover({
      container: 'body',
      placement: 'right',
      html: true, 
      content: function() {
            return $('#popover_details').html();
      }
    });
    $(document).on('click', '.fa-times', function() {
  $('[data-bs-toggle="popover"]').popover('hide');
});
});
let Usernameget=JSON.parse(localStorage.getItem("details"));
console.log("Usernameget",Usernameget); 
$("#Username").html(Usernameget[0].Name);
console.log(Usernameget[0].Name);
function logout() {
    window.location="Login.html"
    localStorage.clear();
}$(document).on('click', '.fa-times', function() {
  $('[data-bs-toggle="popover"]').popover('hide');
});

function stockdatastore() {
  
    if (!editstockdetails) {
        debugger
        
        console.log(partDetails)
        if($("#stockform").valid()==true)
        {
        var stockname = $('#stockname').val();
        var eta_date = $('#date').val();
        var stock_status = $('input[name="btnradio"]:checked').next('label').text();
        var usernameget = Usernameget[0].Name;
        //Getting current date
        var getcurrentdate = new Date(Date.now()).toLocaleString().split(',')[0];
        console.log(getcurrentdate)
        var notes = $("#notes").val();
        let stockList = JSON.parse(localStorage.getItem("stockList")) || [];
        if (stockDetails == null) {
            stockDetails = [];
        }
        stockDetails.push({
            stockname: stockname,
            eta_date: eta_date,
            stock_status: stock_status,
            usernameget: usernameget,
            getcurrentdate: getcurrentdate,
            partDetails: partDetails,
            notes: notes
        });
        console.log(partDetails)
        var stock = {
            "stockname": stockname,
            "eta_date": eta_date,
            "stock_status": stock_status,
            "usernameget": usernameget,
            "getcurrentdate": getcurrentdate,
            "partlist": partDetails,
            "notes": notes
        };
        stockList.push(stock);
        console.log("StockList", stockList)

        
        tableData.row.add(['', stockname, eta_date, stock_status, usernameget, getcurrentdate, notes]).draw();
        localStorage.setItem("stockList", JSON.stringify(stockList));
        console.log("part", partDetails)
        location.reload(true)

    }
 }
}