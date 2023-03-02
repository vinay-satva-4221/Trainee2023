window.onload = (event) => {
  debugger;
  if (localStorage.getItem("LoginDetails") != null) {
    window.location.replace("Dashboard.html");
  }
};


//Data table Dashboard


$(document).ready(function () {
  $('#myTable').DataTable();
});


var user = [];

function validatecheck() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailC1 = "krinalpatel@gmail.com";
  var emailC2 = "rahul@gmail.com";
  var emailC3 = "preet@gmail.com";
  var emailC4 = "ram@gmail.com";

  var passwordC1 = "Krinal@123";
  var passwordC2 = "Krinal@123";
  var passwordC3 = "Krinal@123";
  var passwordC4 = "Krinal@123";



  debugger;
  if (email.toLowerCase() == emailC1 && password == passwordC1) {
    console.log("Log in");

    var userObj = {
      email: email,
      password: password,
      username: "Krinal"
    }

    user.push(userObj);

    localStorage.setItem('LoginDetails', JSON.stringify(user));

    window.location.replace("Dashboard.html")

  } else if (email.toLowerCase() == emailC2 && password == passwordC2) {
    window.location.replace("Dashboard.html")
    var userObj = {
      email: email,
      password: password,
      username: "Rahul"

    }
    user.push(userObj);

    localStorage.setItem('LoginDetails', JSON.stringify(user));
  } else if (email.toLowerCase() == emailC3 && password == passwordC3) {
    window.location.replace("Dashboard.html")
    var userObj = {
      email: email,
      password: password,
      username: "Preet"


    }
    user.push(userObj);

    localStorage.setItem('LoginDetails', JSON.stringify(user));
  } else if (email.toLowerCase() == emailC4 && password == passwordC4) {
    window.location.replace("Dashboard.html")
    var userObj = {
      email: email,
      password: password,
      username: "Ram"


    }
    user.push(userObj);

    localStorage.setItem('LoginDetails', JSON.stringify(user));
  } else {
  

    // swal({
    //   title: "Incorrect Credentials",
    //   text: "Please enter correct details",
    //   icon: "warning",
    //   button: "Ok"
    // });


  }
}

$.validator.addMethod("Emailcheck", function (value) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
});
$.validator.addMethod("password", function (value) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
});
// $("#checkConfirmPass").css("color", "red");



$("form[name='login_form']").validate({


  errorClass: 'msgerror',
  rules: {
    email: {
      required: true,
      Emailcheck: true,
    },
    password: {
      required: true,
      password: true,
    },
  },
  messages: {
    email: {
      required: "Enter your Email",
      email: true,
      Emailcheck: "Enter valid Email",
    },
    password: {
      required: "Enter your Password",
      password: "Please enter one Special character, one Uppercase, one Lowercase, one numeric and minimum 8 characters",
    },
  },
  submitHandler: function (form) {
    form.submit();
  }
});
