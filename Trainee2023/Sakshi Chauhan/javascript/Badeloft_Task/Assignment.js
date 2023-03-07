$(document).ready(function () {
    var modal = document.getElementById("ModalPopup");
    var table = $('#AssignmentTable').DataTable({
        
      "ordering": true,
      "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function(){
                $('div.toolbar').html('<h2>Assignment</h2>');
                $('#AssignmentTable_filter').prepend(modal);

              },
              language: {
                search: "_INPUT_",
                  // "search": '<i class="fa fa-search"></i>',
                    searchPlaceholder: 'Search...',
                    paginate: {
                      next: '&#62',
                      previous: '&#60' 
                    },
                    "info": "Items _START_ to _END_ of _TOTAL_ total"

              },
          
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            {title: 'QB Invoice#'},
            {title: 'Name'},
            {title: 'Created By'},
            {title: 'Created Date'},
            {title: 'Action'},
        
        ],
        
        
        order: [[1, 'asc']],
    });
    var customerInvoice = [
      { customer: 'Keneth', invoiceNum: '15000' },
      { customer: 'Keneth', invoiceNum: '15001' },
      { customer: 'Keneth', invoiceNum: '15002' },
      { customer: 'Keneth', invoiceNum: '15003' },
      { customer: 'Eric Jensan', invoiceNum: '16001' },
      { customer: 'Eric Jensan', invoiceNum: '16002' },
      { customer: 'Eric Jensan', invoiceNum: '16003' },
      { customer: 'Kelly McCrory', invoiceNum: '17001' },
      { customer: 'Kelly McCrory', invoiceNum: '17002' },

  ];

$("#customer").change(function () {

    $("#quickbookInvoice").html("<option selected disabled>Choose invoice</option>");
    const invoice = customerInvoice.filter(m => m.customer == $("#customer").val());
    invoice.forEach(element => {
        const option = "<option val='" + element.invoiceNum + "'>" + element.invoiceNum + "</option>";
        $("#quickbookInvoice").append(option);
    });

});

var stockData = JSON.parse(localStorage.getItem('StockDetails'));

var selectOptions = '';
for (i = 0; i < stockData.length; i++) {

    selectOptions += '<option value="' + stockData[i].stockName + '">' + stockData[i].stockName + '</option>';
}
$("#stockname").append(selectOptions).on('change', function () {

    var selected = $(this).find('option:selected').val();

    const parts = stockData.find(m => m.stockName == selected).SecondPartDetail;
    console.log(parts)
    $("#parts").html("");
    parts.forEach(element => {

        const option = "<option val='" + element.Partnumber + "'>" + element.Partnumber + "</option>";
        $("#parts").append(option);
    });


});

    // Add event listener for opening and closing details
    $('#AssignmentTable tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
 
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});

function logout(){
    window.location.replace("login.html")
    localStorage.clear();
  }

  
window.onload = (event) => {
  if (localStorage.getItem("Badeloft-Details") == null) {
    window.location.replace("login.html");
  }
  else{
    var par = JSON.parse(localStorage.getItem('Badeloft-Details'));
    var u = par[0].username;
    var uname = document.getElementById("username");
    uname.innerHTML = u;
  }
};