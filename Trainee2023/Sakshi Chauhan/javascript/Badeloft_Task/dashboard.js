$(document).ready(function() {
    $('#myTable').DataTable({
  
      "ordering": true,
      "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function(){
                $('div.toolbar').html('<h2>Dashboard</h2>');
              },
        columnDefs: [{
        // "targets":0,"width":"8%",
        orderable: false,
        targets: "no-sort",
        "paging": false, "info": false, order: [] ,
      }]
    });
  });
  function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }

  
window.onload = (event) => {debugger;
  if (localStorage.getItem("Badeloft-Details") == null) {
    window.location.replace("Badeloft.html");
  }
  else{
    var par = JSON.parse(localStorage.getItem('Badeloft-Details'));
    var u = par[0].username;
    var uname = document.getElementById("username");
    uname.innerHTML = u;
  }
};