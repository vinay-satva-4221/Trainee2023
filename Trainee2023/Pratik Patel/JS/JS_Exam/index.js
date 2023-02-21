$(document).ready(function () {
  
    var User = new Array;

    var obj = {
      name: "Pratik",
      email: "pratik@gmail.com",
      password: "12345678",
      type: "Admin",
    };

    var obj2 = {
      name: "Rahul",
      email: "rahul@gmail.com",
      password: "12345678",
      type: "Admin",
    };
    var obj3 = {
      name: "Alok",
      email: "alok@gmail.com",
      password: "12345678",
      type: "Employee",
    };
    var obj4 = {
      name: "Soham",
      email: "soham@gmail.com",
      password: "12345678",
      type: "Employee",
    };

    User.push(obj,obj2,obj3,obj4)
    // console.log(User)
    localStorage.setItem("user",JSON.stringify(User))


  $("#submit").click(function () {
    let email = $("#email").val();
    let password = $("#password").val();
    window.location.href = "stock.html";
    console.log(obj4.name)
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

    if (
      (email == "Pratik@gmail.com" && password == "12345678") ||
      (email == "Rahul@gmail.com" && password == "12345678") ||
      (email == "Alok@gmail.com" && password == "12345678") ||
      (email == "Shivraj@gmail.com" && password == "12345678")
    ) {
      alert("Success");
    }
  });
});
