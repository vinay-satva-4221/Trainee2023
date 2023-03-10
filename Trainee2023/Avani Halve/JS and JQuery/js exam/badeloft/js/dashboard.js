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
         info: "Items _START_ to _END_ of _TOTAL_ entries",
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

   //search
   $("#search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#dashboardTable tbody tr").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });

   //popover
      $('[data-toggle="popover"]').popover({
         container: "body",
         title: '<p class="text-start text-dark fw-bold">Assigned to<a href="#" class="close float-end text-secondary fs-4" data-dismiss="alert" style="text-decoration: none;">&#x2715;</a></p> ',
         placement: "right",
         html: true,
         content: function () {
            return $("#popover-content").html();
         },
      });
   });
   $(document).on("click", ".popover .close" , function(){
      $('.popover').hide();
   });
