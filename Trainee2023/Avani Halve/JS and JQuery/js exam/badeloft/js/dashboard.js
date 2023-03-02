var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

function logout() {
   localStorage.removeItem("loginUser");
   location.replace("login.html");
}

$(document).ready(function () {
   var StickRow = $.fn.dataTable.absoluteOrder([
      { value: "Stock Location", position: "top" },
      { value: "ETA Date", position: "top" },
   ]);

   $("#dashboardTable").DataTable({
      dom: '<"toolbar">frtip',
      bFilter: false,
      bInfo: true,
      language: {
         "info": "items _START_ to _END_ of _TOTAL_ entries",
         search: "_INPUT_",
         searchPlaceholder: "Search here...",
         paginate: {
            previous: "<",
            next: ">",
         },
      },

      columnDefs: [
         { orderable: true, className: "reorder", targets: 0 },
         { orderable: false, targets: "_all" },
         { targets: 0, type: StickRow },
      ],
      fnInitComplete: function () {
         $("div.toolbar").html("<h2></h2>");
      },
   });
   $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#dashboardTable tbody tr").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });
   $(function() {
      $('[data-toggle="popover"]').popover({
        content: function() {
          return $('#popover-content').html();
        }
      });
    });    
});
