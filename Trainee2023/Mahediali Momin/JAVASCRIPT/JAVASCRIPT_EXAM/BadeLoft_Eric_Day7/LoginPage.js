const data = [

  { email: "admin@gmail.com", password: "admin1", name: "Mahediali", },
  { email: "user@gmail.com", password: "user12", name: "User", },
  { email: "momin12@gmail.com", password: "momin1", name: "Momin", },
];

localStorage.setItem("details", JSON.stringify(data));

function LoginPage() {
  var validator = $("#loginform").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },
      password: {
        required: "Please enter your password.",
        minlength: "minimum 6 alphabet required",
      },
    },
  });

  if (validator.form()) {
    var email = $("#email").val().toLowerCase();
    var password = $("#password").val().toLowerCase();
    var loggUser = [];
    var userDetails = {};

    for (var i = 0; i < data.length; i++) {
      if (email === data[i].email && password === data[i].password) {
        userDetails.email = email;
        userDetails.name = data[i].name;
        loggUser.push(userDetails);
        localStorage.setItem("loggUser", JSON.stringify(loggUser));
        window.location.replace("Dashboard.html");
        break;
      }
    }
    if (loggUser.length === 0) {
      // $("#EMAIL").html("Enter Correct email*");
      // $("#PASSWORD").html("Enter Correct password*");
      swal("Error", "Enter Correct email and password", "error");
    }
  }
}
