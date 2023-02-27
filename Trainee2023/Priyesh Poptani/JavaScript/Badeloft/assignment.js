$(function(){
    $("#navbar").load("navbardata.html");
});

$(document).ready(function () {
    var modal=document.getElementById('modalpopup');
    var table = $('#example').DataTable({
        "dom": '<"toolbar">frtip',
        bFilter: true, bInfo: true,
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>Assignment</h4>');
           $('#example_filter').prepend(modal);
         },

         });

});
