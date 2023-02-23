$(document).ready(function () {
    $('#myfrm').validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
            },
            password: {
                required: "Please enter your password",
                minlength: "minimum 5 alphabet required"
            }
        },
        // submitHandler: function (form) {
        //     form.submit();
        // }
    });
});


function addData() {
  
    if ($("#myfrm").valid() == true) {
        const data = [

            {email: "admin@gmail.com", password: "admin1", name: "Mahediali",Image:"/Badeloft/Assets/3_image.jfif" },
            {email: "user@gmail.com", password: "user12", name: "Soham",Image:"/Badeloft/Assets/4_image.jfif" },
            {email:"momin12@gmail.com",password:"momin1",name:"Momin",Image:"/badeloft/assets/5_image.jfif" },
          ];
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;
        
          var details;
          if (localStorage.getItem("details") == null) {
            details = [];
          }
          else {
            details = JSON.parse(localStorage.getItem("details"));
            if ((email == data[0].email  && password==data[0].password) )
             {
              details.push({
                email: email,
                name:data[0].name,
                image:data[0].Image
      
              });
              window.location.replace("Dashboard.html");
            }
            else if((email == data[1].email && password==data[1].password ))
            {
              details.push({
                email: email,
                name:data[1].name,
                image:data[1].Image
      
              });
              window.location.replace("Dashboard.html");
            }
      
            else if((email == data[2].email && password==data[2].password ))
            {
              details.push({
                email: email,
                name:data[2].name,
                 image:data[2].Image
      
              });
              window.location.replace("Dashboard.html");
            }      
            else {
              if ((email != data[0].email) && (password != data[0].password)) {
                document.getElementById("EMAIL").innerHTML = "This  is not login user*"
                document.getElementById("PASSWORD").innerHTML = "This Field is required*"
              }
            }
          }
          localStorage.setItem("details", JSON.stringify(details));
    }
}