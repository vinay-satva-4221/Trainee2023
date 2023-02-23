$(document).ready(function () {
  const hello = JSON.parse(localStorage.getItem("loggedInUser"));
  if (hello == null) {
    location.replace("./login.html");
  }
  
  const partTable = $('#table2').DataTable({
    "paging": false,
    "searching": false,
    "ordering": false,
    "info": false,
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
  });
  
  renderTable();
  
  var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
  $("#activeuser").html(activeuser.username);
  
  var myButton = document.getElementById("myButton");
  
  $('#myButton').click(function () {
    $('#myModal').modal('show');
  });
  
  $('#AddPart').click(function () {
    $('#AddPartModal').modal('show');
  });
  
  $('#example').DataTable({
    "paging": true,
    "dom": '<"toolbar">frtip',
    bFilter: true,
    bInfo: true,
    fnInitComplete: function () {
      $('#example_filter label').prepend(myButton);
    }
  });
  $('#save_part').on('click', function () {
    const partNumInput = $('#part_num');
    const orderedInput = $('#ordered');
    const notesInput = $('#notes');
    const partNum = partNumInput.val();
    const ordered = orderedInput.val();
    const notes = notesInput.val();
    const invoice = "123456789";
    const part = { part_num: partNum, ordered: ordered, notes: notes, invoice: invoice };
    let parts = [];
    const partsJson = localStorage.getItem('parts');
    if (partsJson !== null) {
      parts = JSON.parse(partsJson);
    }
    parts.push(part);
    localStorage.setItem('parts', JSON.stringify(parts));
    partNumInput.val('');
    orderedInput.val('');
    notesInput.val('');
    renderTable();
  });
  function renderTable() {
    let parts = [];
    const partsJson = localStorage.getItem('parts');
    if (partsJson !== null) {
      parts = JSON.parse(partsJson);
    }
    partTable.clear();
    parts.forEach(part => {
      const row = [
        part.part_num,
        part.invoice,
        part.ordered,
        part.notes,
        '<button class="delete" data-id="' + parts.indexOf(part) + '"> <i class="fa fa-close"></i></button>'
      ];
      partTable.row.add(row);
    });
    partTable.draw();
  }
  $('#table2 tbody').on('click', 'button.delete', function () {
    const index = $(this).data('id');
    let parts = JSON.parse(localStorage.getItem('parts'));
    parts.splice(index, 1);
    localStorage.setItem('parts', JSON.stringify(parts));
    renderTable();
  });
  
  $("#logout").click(function () {
    localStorage.removeItem("loggedInUser");
    location.replace("login.html");
  });
});
