$(document).ready(function () {
  $('#submitform').click(function () {
    $('#form1').valid() == true
  })

  $.validator.addMethod('validpassword',
    function (value) {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
      //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    },
  );

  $("#form1").validate({
    rules: {
      emailname: {
        required: true,
        email: true
      },
      passwordname: {
        required: true,
        validpassword: true
      },
    },
    messages: {
      emailname: {
        required: "Enter Your Email",
      },
      passwordname: {
        required: "Enter Password",
        validpassword: "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number"
      },
    },
  });


  function disableBack() {
    window.history.forward()
  }
  window.onload = disableBack();
  window.onpageshow = function (e) {
    if (e.persisted)
      disableBack();
  }



});




const data = [
  { email: "admin1@gmail.com", password: "Admin123", name: "Jems" },
  { email: "admin2@gmail.com", password: "Admin234", name: "Priyesh", },
  { email: "admin3@gmail.com", password: "Admin345", name: "Hardik", },
  { email: "admin4@gmail.com", password: "Admin456", name: "Ashish", }
];



function OnClickLogin(e) {
  e.preventDefault()
  var email=document.getElementById("Email").value;
  var email1=email;
  var password=document.getElementById("pass").value;
  var password1=password;

  let loggedUser = data.find(data => data.email==email1 && data.password==password1);
  console.log(loggedUser);
  if(loggedUser){
    localStorage.setItem("loggedUser",JSON.stringify(loggedUser));
    window.location.replace("dashbord.html");
  }
  else{
    alert("Not valid user");
  }
}







