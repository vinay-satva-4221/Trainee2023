window.onload = () => {
  if (localStorage.getItem("loggUser") == null) {
    window.location.replace("LoginPage.html");
  }
};

/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>Full name:</td>" +
    "<td>" +
    d.name +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extension number:</td>" +
    "<td>" +
    d.extn +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extra info:</td>" +
    "<td>And any further details here (images etc)...</td>" +
    "</tr>" +
    "</table>"
  );
}

$(document).ready(function () {
  $("#assignmentTable").DataTable({
    // paging: true,
    // dom: '<"toolbar">frtip',
    // bFilter: true,
    // bInfo: true,
    fnInitComplete: function () {
        $("#assignmentTable_length").html("<h4><strong>Assignment</strong></h4>");
        $("#StockTable_filter").prepend(button);
      },
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Search here...",
        paginate: {
          previous: "<",
          next: ">",
        },
      },
  
  });
  
  

  // Add event listener for opening and closing details
  $("#example tbody").on("click", "td.dt-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });
});

$(document).ready(function () {
  var user = JSON.parse(localStorage.getItem("loggUser"));
  console.log("user", user);
  $("#Uname").html(user[0].name);
});
function logout() {
  window.location.replace("LoginPage.html");
  localStorage.clear();
}
