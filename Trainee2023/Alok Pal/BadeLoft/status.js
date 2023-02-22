// Jquery
$(document).ready(function () {
    // Dynamic adding of name
    var user = JSON.parse(localStorage.getItem("user"));
    var jName = user[0].Admin;
    console.log(jName);
    $(".dynamicN").html(jName);
  
    // Dynamic adding image
    var jImg = user[0].Image;
    console.log(jImg);
    $(".adminImg").attr("src", user[0].Image);
  
    // Class removal
    $(".sorting").removeClass(".sorting");
  });
  
  // window.load(onD());
  window.onload = (event) => {
    if (localStorage.getItem("user") == null) {
      window.location.replace("Login.html");
    }
  };
  
  //Logout
  function logout() {
    window.location.replace("Login.html");
    localStorage.clear("user");
  }
  

  

  function format(d) {
    // `d` is the original data object for the row
    return (
        '<table class="table-responsive" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Full name:</td>' +
        '<td>' +
        d.name +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Extension number:</td>' +
        '<td>' +
        d.extn +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Extra info:</td>' +
        '<td>And any further details here (images etc)...</td>' +
        '</tr>' +
        '</table>'
    );
}
var dataSet = [
  ['150000','Keneth Woodard','12/08/2021','Paid','Shipped','617-235-7647','chk','WBC-123'],
  ['Eta Date','-','-','10/08/2021','10/08/2021','10/08/2021'],
  ['BW-01-S-M','1','0','3','0','0'],['BW-03-XL-G','1','1','2','2','1'],
  ['BW-01-Q-M','-','0','3','0','1']
];
 
$(document).ready(function () {
    var table = $('#example').DataTable({
      data: dataSet,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { title: "QB Invoice#" },
            { title: "Name" },
            { title: "QB Ship date" },
            { title: "QB Payment Status" },
            { title: "QB Status" },
            { title: "QB Delivery Phone" },
            { title: "Called" },
            { title: "QB Tracking" },
        ],
        order: [[1, 'asc']],
    });
 
    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.dt-control', function () {
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