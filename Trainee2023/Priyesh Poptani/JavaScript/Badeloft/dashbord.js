$(function(){
    $("#navbar").load("navbardata.html");
});

$(document).ready(function () {
    $('#example').DataTable( {
        dom: '<"toolbar">frtip',
        fnInitComplete: function(){
           $('div.toolbar').html(' <h4>DashBoard</h4>');
         },
        
          "columnDefs": [
            { "width": "40%", "targets": 0 },
           
              
              
             
          ],
          // "rowDefs": [
          //   {"targets": 0 ,"orderable": false},
          // ]
        
    } );

   
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})




