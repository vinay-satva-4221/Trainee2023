$(document).ready(function() {
    $('#DashboardTable').DataTable({
  
      "ordering": true,
      "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function(){
                $('div.toolbar').html('<h2>Dashboard</h2>');
              },
              "columnDefs": [
                { "orderable": true, "targets": 0 },
                { "orderable": false, "targets": "_all" },
                { targets: 0, type: StockLocation },
                {"targets": 0, },
                {"targets": 1,"width":"15%"},
                {"targets": 2, "width":"15%"},
                {"targets": 3, "width":"15%"},
                {"targets": 4, "width":"15%"},
                {"targets": 5, "width":"15%"},
                {"paging": false, "info": false, order: [] },
              ],
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


            });
 
  });
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

  var StockLocation = $.fn.dataTable.absoluteOrder( 
    [{ value: 'Stock Location', position: 'top' },
    { value: 'ETA Date', position: 'top' } ]);
  
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