$(document).ready(function () {

    const checkuser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (checkuser == null) {
      location.replace("./login.html");
    }

    var activeuser = JSON.parse(localStorage.getItem("loggedInUser"));
    $("#activeuser").html(activeuser.username);

    var newassign = document.getElementById("newassign");

    $('#newassign').click(function () {
      $('#assignmodal').modal('show');
    });
    
       
    $('#example').DataTable({
      "paging": true,
      "dom": '<"toolbar">frtip',
      bFilter: true,
      bInfo: true,
      fnInitComplete: function () {
        $('div.toolbar').html('<h2>Assignment</h2>');
        $('#example_filter label').prepend(newassign);
      }
    });
   
    const userData = JSON.parse(localStorage.getItem("userData"));

const userSelect = document.getElementById("user-select");

userData.forEach(user => {
  const option = document.createElement("option");
  option.value = user.username;
  option.textContent = user.username;
  userSelect.appendChild(option);
});
    

    $("#logout").click(function () {
      localStorage.removeItem("loggedInUser");
      location.replace("login.html");
    });
  });
  