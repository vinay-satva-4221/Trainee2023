//document.ready
const arryObj1 = [];
const obj1 = {
   username: "user1@yopmail.com",
   password: "user1",
};
arryObj1.push(obj1); //array k formate me data store hoga
localStorage.setItem("User1", JSON.stringify(arryObj1));

const arryObj2 = [];
const obj2 = {
   username: "user2@yopmail.com",
   password: "user2",
};
arryObj2.push(obj2); //array k formate me data store hoga
localStorage.setItem("User2", JSON.stringify(arryObj2));

const arryObj3 = [];
const obj3 = {
   username: "user3@yopmail.com",
   password: "user3",
};
arryObj3.push(obj3); //array k formate me data store hoga
localStorage.setItem("User3", JSON.stringify(arryObj3));

const arryObj4 = [];
const obj4 = {
   username: "user4@yopmail.com",
   password: "user4",
};
arryObj4.push(obj4); //array k formate me data store hoga
localStorage.setItem("User4", JSON.stringify(arryObj4));

const arryObj5 = [];
const obj5 = {
   username: "user5@yopmail.com",
   password: "user5",
};
arryObj5.push(obj5); //array k formate me data store hoga
localStorage.setItem("User5", JSON.stringify(arryObj5));

function validate() {
   debugger;
   var email = document.getElementById("user").value;
   var password = document.getElementById("password").value;
   var loggedIn = false;

   // Loop through the localStorage keys and check if the email matches the username for any of them
   for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith("User")) {
         var storedData = JSON.parse(localStorage.getItem(key));
         var storedEmail = storedData[0].username;
         var storedPassword = storedData[0].password;

         if (email === storedEmail && password === storedPassword) {
            loggedIn = true;
            break;
         }
      }
   }

   if (loggedIn) {
      location.replace("dashboard.html");
   } else if (email == "" || password == "") {
      alert("Enter Email and Password");
   } else {
      alert("Incorrect username or password.");
   }
}
