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