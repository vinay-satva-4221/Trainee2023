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

var dataSet = [
  ["Stock Location", "", "", "On Water", "On Water", "In production"],
  ['Eta Date','','','10/08/2021','10/08/2021','10/08/2021'],
  ['BW-01-S-M','1','0','3','0','0'],['BW-03-XL-G','1','1','2','2','1'],
  ['BW-01-Q-M','','0','3','0','1']
];

$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [
      { title: "Part Number" },
      { title: "In Warehouse" },
      { title: "Available" },
      { title: "C100" },
      { title: "C101" },
      { title: "C102" },
    ],
  });
});
