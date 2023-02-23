$(document).ready(function () {

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    // Redirect to dashboard.html if a user is logged in
    location.replace("./dashboard.html");
  }



  $.validator.addMethod('validname', function (value) {
    return /^[a-zA-Z]+$/.test(value)
  });


  $('#myform').validate({
    rules: {
      email: {
        required: true,

      },
      password: {
        required: true,
      }
    },
    messages: {
      email: {
        required: "Please enter your email",

      },
      password: {
        required: "Please enter your Password",

      },

    }
  });

  const data = [
    { email: "amit@gmail.com", password: "amit", name: "Amit", image: "https://picsum.photos/200" },
    { email: "sumit@gmail.com", password: "sumit", name: "Sumit", image: "https://picsum.photos/200" },
    { email: "sohambhai@gmail.com", password: "sohambhai", name: "Soham Bhai", image: "https://picsum.photos/200" },
    { email: "alibhai@gmail.com", password: "alibhai", name: "Ali Bhai", image: "https://picsum.photos/200" },
    { email: "alokbhai@gmail.com", password: "alokbhai", name: "Alok Bhai", image: "https://picsum.photos/200" }
  ];

  // Save data to local storage
  localStorage.setItem('users', JSON.stringify(data));

  $("#submit").on("click", function () {

    if ($("#myform").valid()) {

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

      alert("No match found.");
    }
  });
});


