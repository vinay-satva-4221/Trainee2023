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



// Select 2 library
$(document).ready(function () {
  $('.multipleSelect').select2();
});




// Active class
var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
$('.nav-item a').each(function () {
  if ($(this).attr('href') == pathname) {
    $(this).addClass('active');
  }
});



// Dynamic value of dropdown
var stockData = JSON.parse(localStorage.getItem('newStock'));

var stockOptions = '';
for (i = 0; i < stockData.length; i++) {

  stockOptions += '<option value="' + stockData[i].stock + '">' + stockData[i].stock + '</option>';
}
$("#stockname").append(stockOptions).on('change', function () {
  debugger
  var selected = $(this).find('option:selected').val();

  // $("#parts").html("<option selected disabled>Choose parts</option>");
  const parts = stockData.filter(m => m.stock == selected);
  console.log(parts)
  parts.forEach(function(element,index) {
   
    var option;
     option += "<option val='" + element.Part[0].PartN + "'>" + element.Part[0].PartN + "</option>";
    option += "<option val='" + element.Part[1].PartN + "'>" + element.Part[1].PartN + "</option>";
    option += "<option val='" + element.Part[2].PartN + "'>" + element.Part[2].PartN + "</option>";
    // option += "<option val='" + element.Part[3].PartN + "'>" + element.Part[3].PartN + "</option>";
    // option += "<option val='" + element.Part[4].PartN + "'>" + element.Part[4].PartN + "</option>";


    $("#parts").append(option);
  });
});
