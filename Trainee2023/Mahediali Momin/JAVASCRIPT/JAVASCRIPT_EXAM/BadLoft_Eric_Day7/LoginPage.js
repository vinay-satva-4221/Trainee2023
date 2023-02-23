$(document).ready(function () {
  $('#myfrm').validate({
    errorClass: 'error',
    rules: {
      email: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      email: {
        required: "Please enter your email",
      },
      password: {
        required: "Please enter your password",
        minlength: "minimum 5 alphabet required"
      }
    },
    // submitHandler: function (form) {
    //     form.submit();
    // }
  });
});


const data = [

  { email: "admin@gmail.com", password: "admin1", name: "Mahediali", },
  { email: "user@gmail.com", password: "user12", name: "User", },
  { email: "momin12@gmail.com", password: "momin1", name: "Momin", },
];

localStorage.setItem("details", JSON.stringify(data));

function add() {
  
  if ($("#myfrm").valid() == true) {

    var email = document.getElementById("email").value;
    var checkEmail = email.toLowerCase();
    var password = document.getElementById("password").value;
    var checkPass = password.toLowerCase();


    var loggUser;
    if (localStorage.getItem("loggUser") == null) {
      loggUser = [];
    }
    else {
      loggUser = JSON.parse(localStorage.getItem("loggUser"));
      if ((checkEmail == data[0].email && checkPass == data[0].password)) {
        loggUser.push({
          email: checkEmail,
          name: data[0].name,
        });
        window.location.replace("Dashboard.html");
      }
      else if ((checkEmail == data[1].email && checkPass == data[1].password)) {
        loggUser.push({
          email: checkEmail,
          name: data[1].name,
        });
        localStorage.setItem("loggUser", JSON.stringify(loggUser));

        window.location.replace("Dashboard.html");
      }

      else if ((checkEmail == data[2].email && checkPass == data[2].password)) {
        loggUser.push({
          email: checkEmail,
          name: data[2].name,
        });
        localStorage.setItem("loggUser", JSON.stringify(loggUser));

        window.location.replace("Dashboard.html");
      }
      else {
        if ((checkEmail != data[0].email) && (checkPass != data[0].password)) {
          document.getElementById("EMAIL").innerHTML = "This  is not login user*"
          document.getElementById("PASSWORD").innerHTML = "This is not correct password*"
        }
      }
    }
    localStorage.setItem("loggUser", JSON.stringify(loggUser));

  }
}