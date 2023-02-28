var loginUser = JSON.parse(localStorage.getItem("loginUser"));
var username = loginUser[0].name;
document.getElementById("user").innerHTML = username;

function logout() {
   localStorage.removeItem("loginUser");
   location.replace("login.html");
}

