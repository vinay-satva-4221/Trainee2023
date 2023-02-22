$(document).ready(function(){
    $('#login').click(function(){
        $('#Login').valid()==true
    })
    $.validator.addMethod('validPassword',
    function(value){
        return /^[a-zA-Z0-9]{8,}$/.test(value)
    }, 
    );
    $("#Login").validate({
        rules:{
            Email:{
                required: true,
                email: true
            },
            Password:{
                required : true,
                validPassword: true
            },
        },
        messages:{
            Email:{
                required: "Enter Your Email",
            },
            Password: {
                required: "Enter Password",
                validPassword: "Minimum 8 Chracter"
            },
        },
    });
    window.history.forward();
    if(window.history.forward(1) != null)
      window.history.forward(1);
});


function checkEmailPass()
{
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    localStorage.setItem("Email", email);
    localStorage.setItem("Password",password);

    if((Login.Email.value == "sakshi@gmail.com" && Login.Password.value =="12345678") || (Login.Email.value == "p@gmail.com" && Login.Password.value =="12345678") || (Login.Email.value == "k@gmail.com" && Login.Password.value =="12345678") || (Login.Email.value == "a@gmail.com" && Login.Password.value =="12345678"))
    {
        window.location.href = "Dashboard.html";
    }
    else
    {
        swal("Email or Password Is Incorrect");
    }
}
