$(document).ready(function () {
  $("#submit").click(function () {
    let email = $("#email").val();
    let password = $("#password").val();

    // alert(email+password)

    // User=new Array();
    // var User=JSON.parse(localStorage.getItem("user"))
    // if(User==null){
    //     User=[]
    // }
    // // console.log(studentsDetails)
    // User.push({
    //     "email":email,
    //     "password": password,
    //     "type":"Employee"

    // })
    //     localStorage.setItem("user",JSON.stringify(User))
    //--------------login-----------//
    // var User = JSON.parse(localStorage.getItem("user"));
    // for (let i = 0; i < User.length; i++) {
    //   if (User[i].email == email && User[i].password == password) {
    //     alert("Success");
    //   }
    // }

    if(email=="Pratik@gmail.com" && password=="12345678" || email=="Rahul@gmail.com" && password=="12345678"|| email=="Alok@gmail.com" && password=="12345678" || email=="Shivraj@gmail.com" && password=="12345678" ){
        alert("Success");
    }
  });
});
