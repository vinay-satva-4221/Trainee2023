$(document).ready(function() {
    $('#myTable').DataTable({
  
      "ordering": true,
      "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function(){
                $('div.toolbar').html('<h2>Stock</h2>');
              },
        columnDefs: [{
        orderable: false,
        targets: "no-sort",
        // "aoColumnDefs": [{
        //     'bSortable': true,
        //     'aTargets': [0]
        // }]
        "paging": false, "info": false, order: [] ,
      }]
    });
   

  });
 // Code By Webdevtrick ( https://webdevtrick.com )
"use strict";
var underlineMenuItems = document.querySelectorAll("ul li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});