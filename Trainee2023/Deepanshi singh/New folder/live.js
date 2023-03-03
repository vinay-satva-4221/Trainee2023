

function validatemail() {

  let setemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("email").value;
  let msgemail = document.getElementById("invalid_msg");
  if (!setemail.test(email)) {
    msgemail.innerHTML = "*please enter your email";
    msgemail.style.color = "red";
    document.getElementById("invalid_msg").style.display = "unset";
    return false;
  } else {
    document.getElementById("invalid_msg").style.display = "none";
    return true;
  }
}
function checkPassword() {
  let setpass = /^[A-Za-z]\w{7,14}$/;
  let pass = document.getElementById("password").value;
  let msgpass = document.getElementById("invalid_msg1");
  if (!setpass.test(pass)) {
    msgpass.innerHTML =
      "*please enter your password";
    msgpass.style.color = "red";
    document.getElementById("invalid_msg1").style.display = "unset";
    return false;
  } else {
    document.getElementById("invalid_msg1").style.display = "none";
    return true;
  }
}
function login() {
  var useremail = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var abc =
    { name1: "maahi", email1: "maahithakurr@gmail.com", pass1: "Abcd1234" };

  var email = JSON.stringify(abc);
  localStorage.setItem("user1", email);

  var text = localStorage.getItem("user1");
  let obj = JSON.parse(text);

  if (useremail.toLowerCase() == obj.email1 && password == obj.pass1) {
    var data = localStorage.getItem("user1");
    localStorage.setItem("loggedInUser", JSON.stringify(data));

    window.location.href = "dashboard.html";
  }



  var ab =
    { name2: "deep", email2: "deep@gmail.com", pass2: "Deep1234" };
  var ab = JSON.stringify(ab);
  localStorage.setItem("user2", ab);
  let text2 = localStorage.getItem("user2");
  let obj2 = JSON.parse(text2);
  if (useremail == obj2.email2 && password == obj2.pass2) {
    var data = localStorage.getItem("user1");
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    window.location.href = "dashboard.html";
  }

}

