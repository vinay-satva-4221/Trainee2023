$(document).ready(function()
{
$(function() {
    $("form[name='registration']").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
});
 
  function adddata()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;


    var firstemail="Ravalsoham17@gmail.com";
    var  firstpassword="12345";
    var secondemail="soham17@gmail.com";
    var  secondpassword="43211";
    var thirdemail="abc2000@gmail.com";
    var  thirdpassword="65445";
    var forthemail="xyx2112@gmail.com";
    var  forthpassword="98899";

    var details;
    if(localStorage.getItem("details")==null){
    details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));


        if((email==firstemail && firstpassword==firstpassword) ||
        (email==secondemail && password==secondpassword) || (email==thirdemail && password==thirdpassword)
        || (email==forthemail && password==forthpassword)
        )
        {
            details.push({
                email:email,
                password:password
            });
            // window.location.href = "Deshboard.html";
            window.location.replace("Stock.html");
        }
        else{
            if(email=="" && password==""){
                document.getElementById("invalid_email").innerHTML = "This  is required*"
                document.getElementById("invalid_password").innerHTML = "This is required*"
            }
        }
    }
    localStorage.setItem("details",JSON.stringify(details));
}

