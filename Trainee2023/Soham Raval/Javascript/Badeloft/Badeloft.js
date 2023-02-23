$(document).ready(function () {
  $(function () {
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
      submitHandler: function (form) {
        form.submit();
      }
    });
  });
});

//   function adddata()
// {
//     var email=document.getElementById("email").value;
//     var password=document.getElementById("password").value;


//     var firstemail="Ravalsoham17@gmail.com";
//     var  firstpassword="12345";
//     var secondemail="soham17@gmail.com";
//     var  secondpassword="43211";
//     var thirdemail="abc2000@gmail.com";
//     var  thirdpassword="65445";
//     var forthemail="xyx2112@gmail.com";
//     var  forthpassword="98899";

//     var details;
//     if(localStorage.getItem("details")==null){
//     details=[];
//     }
//     else{
//         details=JSON.parse(localStorage.getItem("details"));


//         if((email==firstemail && firstpassword==firstpassword) ||
//         (email==secondemail && password==secondpassword) || (email==thirdemail && password==thirdpassword)
//         || (email==forthemail && password==forthpassword)
//         )
//         {
//             details.push({
//                 email:email,
//                 password:password
//             });
//             // window.location.href = "Deshboard.html";
//             window.location.replace("Stock.html");
//         }
//         else{
//             if(email=="" && password==""){
//                 document.getElementById("invalid_email").innerHTML = "This  is required*"
//                 document.getElementById("invalid_password").innerHTML = "This is required*"
//             }
//         }
//     }
//     localStorage.setItem("details",JSON.stringify(details));
// }

function adddata() {
  debugger

  if ($("#myform").valid() == true) {

    //     var email=document.getElementById("email").value;
    //     var password=document.getElementById("password").value;


    //     var firstemail="Ravalsoham17@gmail.com";
    //     var  firstpassword="12345";
    //     var secondemail="soham17@gmail.com";
    //     var  secondpassword="43211";
    //     var thirdemail="abc2000@gmail.com";
    //     var  thirdpassword="65445";
    //     var forthemail="xyx2112@gmail.com";
    //     var  forthpassword="98899";

    //     var details;
    //     if(localStorage.getItem("details")==null){
    //     details=[];
    //     }
    //     else{
    //         details=JSON.parse(localStorage.getItem("details"));


    //         if((email==firstemail && firstpassword==firstpassword) ||
    //         (email==secondemail && password==secondpassword) || (email==thirdemail && password==thirdpassword)
    //         || (email==forthemail && password==forthpassword)
    //         )
    //         {

    //             details.push({
    //                 email:email,
    //                 password:password
    //             });
    //             // window.location.href = "Deshboard.html";
    //             window.location.replace("Stock.html");
    //             // window.location.href = "Deshboard.html";

    //         }
    //         else{
    //           if((email!=firstemail)&&(email!=secondemail)&&(email!=thirdemail)&&(email!=forthemail)){
    //               document.getElementById("invalid_email").innerHTML = "This  is not login user*"
    //           }
    //         }

    //     }
    //     localStorage.setItem("details",JSON.stringify(details));
    window.onload = (event) => {
      if (localStorage.getItem("details") == null) {
        window.location.replace("Badeloft.html");
      }
    }
    const data = [
      { email: "Ravalsoham17@gmail.com", password: "12345", name: "Raval",Image:"/Badeloft/Assets/3_image.jfif" },
      { email: "soham17@gmail.com", password: "43211", name: "Soham",Image:"/Badeloft/Assets/4_image.jfif" },
      {email:"abc2000@gmail.com",password:"65445",name:"abc",Image:"/Badeloft/Assets/5_image.jfif" },
      {email:"xyx2112@gmail.com",password:"98899",name:"xyz",Image:"/Badeloft/Assets/6_image.jpg" },
    ];
    localStorage.setItem("staticdata",JSON.stringify(data));
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var details;
    if (localStorage.getItem("details") == null) {
      details = [];
      debugger
    }
    else {
      details = JSON.parse(localStorage.getItem("details"));
      // console.log("key",details)

      if ((email == data[0].email  && password==data[0].password) )
       {
        details.push({
          email: email,
          name:data[0].name,
          image:data[0].Image

        });

        window.location.replace("Stock.html");
      }
      else if((email == data[1].email && password==data[1].password ))
      {
        details.push({
          email: email,
          name:data[1].name,
          image:data[1].Image

        });
        // localStorage.setItem("loginusercheck",JSON.stringify(details));

        window.location.replace("Stock.html");
      }

      else if((email == data[2].email && password==data[2].password ))
      {
        details.push({
          email: email,
          name:data[2].name,
           image:data[2].Image

        });
        // localStorage.setItem("loginusercheck",JSON.stringify(details));

        window.location.replace("Stock.html");
      }else if((email == data[3].email && password==data[3].password ))
      {
        details.push({
          email: email,
          name:data[3].name,
         image:data[3].Image

        });
        // localStorage.setItem("loginusercheck",JSON.stringify(details));
        // console.log("person3",email);

        window.location.replace("Stock.html");
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
