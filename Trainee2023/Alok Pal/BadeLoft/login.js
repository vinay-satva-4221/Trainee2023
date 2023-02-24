//Local storage
var emailC1 = "alokpal2807@gmail.com";
var emailC2 = "amitK@gmail.com";
var emailC3 = "avinash22@gmail.com";
var emailC4 = "ronak345@gmail.com";

var passwordC1 = "123456789";
var passwordC2 = "123456789";
var passwordC3 = "123456789";
var passwordC4 = "123456789";

var adminC1 = "Alok Pal";
var adminC2 = "Amit Kumar";
var adminC3 = "Avinash Singh";
var adminC4 = "Ronak Yadav";

var image1 = "images/first.png";
var image2 = "images/second.png";
var image3 = "images/third.png";
var image4 = "images/fourth.png";



// var email = document.getElementById("femail").value;

window.onload = (event) => {
  if (localStorage.getItem("user") != null) {
    window.location.replace("Dashboard.html");
  }
};


function checkEntry() {
  // i can put here the validations
  var email = document.getElementById("femail").value;
var password = document.getElementById("fpassword").value;

  if (email.toLowerCase() == emailC1 && password == passwordC1) {
    var user = [];
    user.push({
      Email: emailC1,
      Admin: adminC1,
      Image: image1,
    });
    console.log("Log in");
    window.location.replace("Dashboard.html");
    localStorage.setItem("user", JSON.stringify(user));
  } else if (email.toLowerCase() == emailC2 && password == passwordC2) {
    user.push({
      Email: emailC2,
      Admin: adminC2,
      Image: image2,
    });
    console.log("Log in");
    window.location.replace("Dashboard.html");
    localStorage.setItem("user", JSON.stringify(user));
  } else if (email.toLowerCase() == emailC3 && password == passwordC3) {
    user.push({
      Email: emailC3,
      Admin: adminC3,
      Image: image3,
    });
    console.log("Log in");
    window.location.replace("Dashboard.html");
    localStorage.setItem("user", JSON.stringify(user));
  } else if (email.toLowerCase() == emailC4 && password == passwordC4) {
    user.push({
      Email: emailC4,
      Admin: adminC4,
      Image: image4,
    });
    console.log("Log in");
    window.location.replace("Dashboard.html");

    localStorage.setItem("user", JSON.stringify(user));

    if (localStorage.getItem("user") == undefined) {
      window.location.replace("Login.html");
    }
    window.location.replace("Dashboard.html");
  }

}

function validate() {
  var email = document.getElementById("femail").value;
  var password = document.getElementById("fpassword").value;
  if (email == "" && password == "") {
    document.getElementById("errorE").innerHTML = "Email is required*";
    document.getElementById("errorP").innerHTML = "Password is required*";
  }else if((email != '' && password == '')){
    document.getElementById("errorP").innerHTML = "Password is required*";
  }else if((email == '' && password != '')){
    document.getElementById("errorE").innerHTML = "Email is required*";
  }
  else if((email == emailC1 && password != passwordC1)){
    document.getElementById("errorP").innerHTML = "Password is wrong*";
  }
  else if((email != emailC1 && password == passwordC1)){
    document.getElementById("errorE").innerHTML = "Email is wrong*";
  }
  
  
  
  
  
  
  else if (
    (email != emailC1 && password != passwordC1) ||
    (email != emailC2 && password != passwordC2) ||
    (email != emailC3 && password != passwordC3) ||
    (email != emailC4 && password != passwordC4)
  ) {
    document.getElementById("errorE").innerHTML = "Email id is wrong*";
    document.getElementById("errorP").innerHTML = "Password is wrong*";
  }
}
