$(document).ready(function () {
  $(function () {
    $("form[name='loginform']").validate({
      errorClass: 'msg',
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        }
      },
      messages: {
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
      },
      submitHandler: function (form) {
        form.submit();
      }
    });
  });
});
const data = [
  { email: "ravalsoham17@gmail.com", password: "12345678", name: "Raval",Image:"/Badeloft/Assets/3_image.jfif" },
  { email: "soham17@gmail.com", password: "43211111", name: "Soham",Image:"/Badeloft/Assets/4_image.jfif" },
  {email:"abc2000@gmail.com",password:"65445111",name:"abc",Image:"/Badeloft/Assets/5_image.jfif" },
  {email:"xyx2112@gmail.com",password:"98899111",name:"xyz",Image:"/Badeloft/Assets/6_image.jpg" },
];
localStorage.setItem("staticdata",JSON.stringify(data));
function loginpage() {
  debugger
  if ($("#login_form").valid() == true) {
    var email = document.getElementById("email").value;
    var emaillowercase=email.toLowerCase();
    var password = document.getElementById("password").value;
    var passwordlowercase=password.toLowerCase();
    var details;
    if (localStorage.getItem("details") == null) {
      details = [];
      debugger
    }
    else {
      details = JSON.parse(localStorage.getItem("details"));
      // console.log("key",details)
      if ((emaillowercase == data[0].email  && passwordlowercase==data[0].password) )
       {
        details.push({
          email: emaillowercase,
          Name:data[0].name,
          image:data[0].Image
        });
        window.location.replace("Dashboard.html");
      }
      else if((emaillowercase == data[1].email && passwordlowercase==data[1].password ))
      {
        details.push({
          email: emaillowercase,
          Name:data[1].name,
          image:data[1].Image

        });
        localStorage.setItem("details",JSON.stringify(details));

        window.location.replace("Dashboard.html");
      }
      else if((emaillowercase == data[2].email && passwordlowercase==data[2].password ))
      {
        details.push({
          email: emaillowercase,
          Name:data[2].name,
           image:data[2].Image
        });
        localStorage.setItem("details",JSON.stringify(details));
        window.location.replace("Dashboard.html");
      }else if((emaillowercase == data[3].email && passwordlowercase==data[3].password ))
      {
        details.push({
          email: emaillowercase,
          Name:data[3].name,
         image:data[3].Image

        });
        localStorage.setItem("details",JSON.stringify(details));
        // console.log("person3",email);

        window.location.replace("Login.html");
      }
      else {
        if ((email != data[0].email)) {
          document.getElementById("invalid_email").innerHTML = "This  is not login user*"
        }
      }
    }
    localStorage.setItem("details", JSON.stringify(details));
    console.log(details);
    // localStorage.setItem("validdetails", JSON.stringify(details));
  }
}
