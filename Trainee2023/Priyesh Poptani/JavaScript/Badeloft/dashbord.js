$(function(){
    $("#navbar").load("navbardata.html");
});





$(document).ready(function () {



  
    $('#dashbordtable').DataTable( {
      bFilter: true, bInfo: true,
      language: {
        "info": "items _PAGE_ to _PAGES_ of _PAGES_ total ",
        paginate:{
            next:'&#62',
            previous:'&#60',
           
        },
        searchPlaceholder:" Search here...",
        search: '<i class="fa fa-search"></i>',
       
        
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

