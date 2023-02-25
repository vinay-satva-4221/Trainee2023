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

  
});

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    window.location.replace("Login.html");
  }
};

//Logout
function logout() {
  localStorage.removeItem('user')
  window.location.replace("Login.html");
}

var dataSet = [
  ["Stock Location", "", "", "On Water", "On Water", "In production"],
  ["Eta Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
  ["BW-01-S-M", "1", "0", "3", "0", "0"],
  ["BW-03-XL-G", "1", "1", '<button type="button" class="" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">2</button>', "2", "1"],
  ["BW-01-Q-M", "", "0", "3", "0", "1"],
];

$(document).ready(function () {
  $("#example").DataTable({
    dom: "rtip",
    data: dataSet,
    rowReorder: true,
    columnDefs: [
        { orderable: true, className: 'reorder', targets: 0 },
        { orderable: false, targets: '_all' }
    ],
    columns: [
      { title: "Part Number" },
      { title: "In Warehouse" },
      { title: "Available" },
      { title: "C100" },
      { title: "C101" },
      { title: "C102" },
    ],
  });

  var options = {
    html: true,
    title: "Optional: HELLO(Will overide the default-the inline title)",
    //html element
    //content: $("#popover-content")
    content: $('[data-name="popover-content"]'),
    //Doing below won't work. Shows title only
    //content: $("#popover-content").html()
  };
  var exampleEl = document.getElementById("example");
  var popover = new bootstrap.Popover(exampleEl, options);
});
