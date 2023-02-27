$(document).ready(function () {
    var modal = document.getElementById("ModalPopup");
    var table = $('#AssignmentTable').DataTable({
        
      "ordering": true,
      "dom": '<"toolbar">frtip',
            bFilter: true, bInfo: true,
            fnInitComplete: function(){
                $('div.toolbar').html('<h2>Assignment</h2>');
                $('#AssignmentTable_filter').prepend(modal);

              },
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            {title: 'QB Invoice#'},
            {title: 'Name'},
            {title: 'Created By'},
            {title: 'Created Date'},
            {title: 'Action'},
        
        ],
        
        
        order: [[1, 'asc']],
    });
 
    // Add event listener for opening and closing details
    $('#AssignmentTable tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
 
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});

function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }

  
window.onload = (event) => {
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