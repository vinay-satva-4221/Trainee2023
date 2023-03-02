$(document).ready(function () {
   $("#loginForm").validate({
      rules: {
         email: {
            required: true,
            email: true,
         },
         password: {
            required: true,
         },
      },
      messages: {
         email: {
            required: "Enter your email",
            email: "Please enter valid email with @",
         },
         password: {
            required: "Enter your password",
         },
      },
   });

   const loggedIn = localStorage.getItem("loginUser");
   if (loggedIn) {
      window.location.replace("dashboard.html");
   } else {
      console.log("Invalid username");
   }
});

const arryObj1 = [];
const obj1 = {
   username: "user1@yopmail.com",
   password: "user1",
   name: "Kenneth Wooded",
};
arryObj1.push(obj1);
localStorage.setItem("User1", JSON.stringify(arryObj1));

const arryObj2 = [];
const obj2 = {
   username: "user2@yopmail.com",
   password: "user2",
   name: "James Fenske",
};
arryObj2.push(obj2);
localStorage.setItem("User2", JSON.stringify(arryObj2));

const arryObj3 = [];
const obj3 = {
   username: "user3@yopmail.com",
   password: "user3",
   name: "Kelly McCrony",
};
arryObj3.push(obj3);
localStorage.setItem("User3", JSON.stringify(arryObj3));

const arryObj4 = [];
const obj4 = {
   username: "user4@yopmail.com",
   password: "user4",
   name: "Jack Mark",
};
arryObj4.push(obj4);
localStorage.setItem("User4", JSON.stringify(arryObj4));

const arryObj5 = [];
const obj5 = {
   username: "user5@yopmail.com",
   password: "user5",
   name: "Alex John",
};
arryObj5.push(obj5);
localStorage.setItem("User5", JSON.stringify(arryObj5));

function validate() {
   debugger;
   var email = document.getElementById("email").value;
   var lowerCaseEmail = email.toLowerCase();
   var password = document.getElementById("password").value;
   var name;

   let valid = false;
 
   for (let i = 0; i < localStorage.length; i++) {
     let key = localStorage.key(i);
     if (key.startsWith("User")) {
       let storedData = JSON.parse(localStorage.getItem(key));
       let storedEmail = storedData[0].username;
       let storedPassword = storedData[0].password;
      //  var storedname = storedData[0].name;
 
       if (lowerCaseEmail === storedEmail && password === storedPassword) {
         valid = true;
         break;
       }
     }
   }

   if (lowerCaseEmail == "user1@yopmail.com") {
      var obj = arryObj1;
   } else if (lowerCaseEmail == "user2@yopmail.com") {
      var obj = arryObj2;
   } else if (lowerCaseEmail == "user3@yopmail.com") {
      var obj = arryObj3;
   } else if (lowerCaseEmail == "user4@yopmail.com") {
      var obj = arryObj4;
   } else {
      var obj = arryObj5;
   }

   if (valid) {
      localStorage.setItem("loginUser", JSON.stringify(obj));
      location.replace("dashboard.html");
   }
}
