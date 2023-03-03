$(function(){
    $("#navbar").load("navbardata.html");
});





$(document).ready(function () {



  
    $('#dashbordtable').DataTable( {
      bFilter: true, bInfo: true,
      language: {
        "info": "Items _START_ to _END_ of _TOTAL_ total ",
        paginate:{
            next:'&#62',
            previous:'&#60',
           
        },
       
        search: "_INPUT_",
                searchPlaceholder:" Search here...",
        
    },

        dom: '<"toolbar">frtip',
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>Dashboard</h4>');
          
         },
        
          "columnDefs": [
            { "width": "40%", "targets": 0 },
            { "orderable": true, "targets": 0 },
                { "orderable": false, "targets": "_all" },
            {targets:0, type:StockLocation},
         
          ],
       
    } );
  
   
});

  var StockLocation = $.fn.dataTable.absoluteOrder( 
    [{ value: 'Stock Location', position: 'top' },
    { value: 'ETA Date', position: 'top' } ]);

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })