$(function(){
    $("#navbar").load("navbardata.html");
});

$(document).ready(function () {
    var modal=document.getElementById('modalpopup');
    var table = $('#example').DataTable({

        language: {

            info: "items _PAGE_ to _PAGES_ of _PAGES_ total ",
            paginate:{
                next:'&#62',
                previous:'&#60'
            },
            searchPlaceholder: "Search here..."
            
        },
        
        "dom": '<"toolbar">frtip',
        bFilter: true, bInfo: true,
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>Assignment</h4>');
           $('#example_filter').prepend(modal);
         },

         });

});
