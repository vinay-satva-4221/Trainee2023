$(document).ready(function () {
  localStorage.setItem('user1', JSON.stringify({ email: 'user1@gmail.com', password: 'password1', username: 'user1' }));
  localStorage.setItem('user2', JSON.stringify({ email: 'user2@gmail.com', password: 'password2', username: 'user2' }));
  localStorage.setItem('user3', JSON.stringify({ email: 'user3@gmail.com', password: 'password3', username: 'user3' }));
  localStorage.setItem('user4', JSON.stringify({ email: 'user4@gmail.com', password: 'password4', username: 'user4' }));
  localStorage.setItem('user5', JSON.stringify({ email: 'user5@gmail.com', password: 'password5', username: 'user5' }));



  $.validator.addMethod('validemail', function (value) {
    return /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value)
  });

  $.validator.addMethod('validpass', function (value) {
    return /^[a-zA-Z0-9]*$/.test(value)
  });

  $("#myform").validate({
    rules: {
      email: {
        validemail: true,
      },
      password: {
        validpass: true,
        minlength: 6,
        maxlength: 10
      }
    },
    messages: {
      email: {
        validemail: "Enter Valid Email",
      },
      password: {
        validpass: "Enter Valid Password",
        minlength: "Minimum Length 6",
        maxlength: "Maximum Length 10"
      }
    }

  })

  // Password Hide and Show
  const passwordInput = document.getElementById('validationCustom02');
  const passwordToggle = document.getElementById('password-toggle');
  const passwordIcon = document.getElementById('password-icon');

  passwordToggle.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('fa-eye-slash');
      passwordIcon.classList.add('fa-eye');
    } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('fa-eye');
      passwordIcon.classList.add('fa-eye-slash');
    }
  });

  $("#login").click(function () {
    if ($("#myform").valid() == true) {
      debugger

      // Get input values for username and password
      const email1 = document.getElementById('validationCustom01').value;
      const password1 = document.getElementById('validationCustom02').value;

      // Check if username and password match with any of the stored local storage
      let isMatched = false;
      for (let i = 1; i <= 5; i++) {
        const userData = JSON.parse(localStorage.getItem(`user${i}`));
        if (userData.email === email1 && userData.password === password1) {
          isMatched = true;
          location.replace("main.html");
          break;
        }
      }
      if (!isMatched) {
        alert('Incorrect username or password!');
      }
    }
  })



});



















