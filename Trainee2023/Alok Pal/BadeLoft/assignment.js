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

var $navItems = $(".navbar-collapse li").removeClass("active");

$navItems
  .filter(function () {
    return $(this).find("a").prop("href") === location.href;
  })
  .addClass("active");

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    window.location.replace("Login.html");
  }
};

//Logout
function logout() {
  localStorage.removeItem("user");
  window.location.replace("Login.html");
}

// Dependent Dropdown
const cityList = [
  { Customer: "Kenneth Woodard", Invoice: "150001" },
  { Customer: "Kenneth Woodard", Invoice: "150002" },
  { Customer: "Kenneth Woodard", Invoice: "150003" },
  { Customer: "James Fenske", Invoice: "160001" },
  { Customer: "James Fenske", Invoice: "160002" },
  { Customer: "James Fenske", Invoice: "160003" },
  { Customer: "James Fenske", Invoice: "160004" },
  { Customer: "Kelly McCrory", Invoice: "170001" },
  { Customer: "Kelly McCrory", Invoice: "170002" },
  { Customer: "Kelly McCrory", Invoice: "170003" },
  { Customer: "Frances Badger", Invoice: "180001" },
  { Customer: "Frances Badger", Invoice: "180002" },
  { Customer: "Frances Badger", Invoice: "180003" },
  { Customer: "Frances Badger", Invoice: "180004" },
];
$(document).ready(function () {
  $("#Customer").change(function () {
    $("#Invoice").html(
      "<option selected disabled value=''>Choose...</option>"
    );
    let citys = cityList.filter((e) => e.Customer == $("#Customer").val());

    citys.forEach((e) => {
      const option =
        "<option val='" + e.Invoice + "'> " + e.Invoice + "</option>";
      $("#Invoice").append(option);
    });
  });
});


$(document).ready(function() {
  $('.js-example-basic-multiple').select2();
});
