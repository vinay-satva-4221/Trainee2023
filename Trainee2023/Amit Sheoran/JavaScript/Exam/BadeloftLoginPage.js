$(document).ready(function () {

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    // Redirect to dashboard.html if a user is logged in
    location.replace("./dashboard.html");
  }



  $.validator.addMethod('validname', function (value) {
    return /^[a-zA-Z]+$/.test(value)
  });
  $.validator.addMethod("customEmail", function (value, element) {
    // Ensure that the email includes the ".com" domain
    return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
  });


  $('#LoginForm').validate({
    rules: {
      email: {
        required: true,
        email: true,
        customEmail: true,

      },
      password: {
        required: true,
        minlength:4,
      }
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
        customEmail: "Please enter a valid email address",

      },
      password: {
        required: "Please enter your Password",
        minlength:"minimum 4 characters required"

      },

    }
  });

  const logindata = [
    { email: "amit@gmail.com", password: "amit", name: "Amit", image: "https://picsum.photos/200" },
    { email: "sumit@gmail.com", password: "sumit", name: "Sumit", image: "https://picsum.photos/200" },
    { email: "sohambhai@gmail.com", password: "sohambhai", name: "Soham Bhai", image: "https://picsum.photos/200" },
    { email: "alibhai@gmail.com", password: "alibhai", name: "Ali Bhai", image: "https://picsum.photos/200" },
    { email: "alokbhai@gmail.com", password: "alokbhai", name: "Alok Bhai", image: "https://picsum.photos/200" }
  ];

  // Save data to local storage
  localStorage.setItem('users', JSON.stringify(logindata));

  $("#loginbutton").on("click", function () {

    if ($("#LoginForm").valid()) {

      var mail = $("#email").val();
      var pass = $("#password").val();

      // Loop through the data in localStorage and check for a match
      const storedData = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < storedData.length; i++) {
        if (storedData[i].email === mail.toLowerCase() && storedData[i].password === pass.toLowerCase()) {
          // Set the data for the logged-in user in a new key
          const user = storedData[i];
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          // Redirect to dashboard.html if there is a match
          location.replace("dashboard.html");
          return;

        }
      }

   
          swal({
            title: "Error!",
            text: "Invalid email or password",
            icon: "error",
            button: "OK",
          });
    }
  });
});


