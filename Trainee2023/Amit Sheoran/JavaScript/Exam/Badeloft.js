$(document).ready(function () {
    $.validator.addMethod('validname', function (value) {
        return /^[a-zA-Z]+$/.test(value)
    });
    

$('#myform').validate({
    rules: {
        email: {
            required:true,
           
        },
        password:{
            required:true,
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

$("#submit").click(function () {

    const data = {
        "amit@gmail.com": "amit",
        "sumit@gmail.com": "sumit",
        "sohambhai@gmail.com": "sohambhai",
        "alibhai@gmail.com": "alibhai",
        "alokbhai@gmail.com": "alokbhai"
      };
      
      localStorage.setItem("users", JSON.stringify(data));
  
      const users = JSON.parse(localStorage.getItem("users"));

      $("#submit").click(function () {
        if ($("#myform").valid() == true){
          var mail = $("#email").val();
          var pass = $("#password").val();
          if (users.hasOwnProperty(mail) && users[mail] === pass) {       
            window.location.href=("dashboard.html");
          } else {
            alert("Invalid email or password. Please try again.");
          }
        }
      });
      



});





});

function checkLoggedIn() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }

  function login(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password') {
      const userData = {
        username: username,
        isLoggedIn: true
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password');
    }
  }
  