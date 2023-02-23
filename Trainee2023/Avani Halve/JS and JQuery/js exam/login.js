$( document ).ready(function() {
   
$("#basic_form").validate({
   rules: {
       email: {
           required: true,
           email: true
       },
       password: {
           required: true,
           minlength: 6,
           maxlength: 6
       }
   },
   messages:{
       email: {
           required: "Enter your email",
           email: "Please enter valid email with @"
       },
       password: {
           required: " Enter your password",
           minlength: "please enter 6 digits",
           maxlength: "only 6 digits are allowed"
       }
   }
});


const loggedIn = localStorage.getItem('loginUser');
if(loggedIn){
    window.location.replace("dashboard.html");
} else {
    console.log("Invalid username");
}

});
 
const arryObj1 = [];
const obj1 = {
   username: "user1@yopmail.com",
   password: "user1",
   name: "Kenneth Wooded"
};
arryObj1.push(obj1);

// Fetch the image file as a Blob object
fetch("person1.jfif")
   .then((response) => response.blob())
   .then((blob) => {
      // Create a new FileReader object to read the Blob as a data URL
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
         const base64String = fileReader.result.split(",")[1];

         // Add the image file to the object and store the object in local storage
         obj1.image = base64String;
         localStorage.setItem("User1", JSON.stringify(arryObj1));
         console.log("Username, password, and image file stored in local storage.");
      };
   })
   .catch((error) => console.error(error));

const arryObj2 = [];
const obj2 = {
   username: "user2@yopmail.com",
   password: "user2",
   name: "James Fenske"
};
arryObj2.push(obj2); //array k formate me data store hoga
fetch("person2.jfif")
   .then((response) => response.blob())
   .then((blob) => {
      // Create a new FileReader object to read the Blob as a data URL
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
         const base64String = fileReader.result.split(",")[1];

         // Add the image file to the object and store the object in local storage
         obj2.image = base64String;
         localStorage.setItem("User2", JSON.stringify(arryObj2));
      };
   })
   .catch((error) => console.error(error));

const arryObj3 = [];
const obj3 = {
   username: "user3@yopmail.com",
   password: "user3",
   name: "Kelly McCrony"
};
arryObj3.push(obj3); //array k formate me data store hoga
fetch("person3.jfif")
   .then((response) => response.blob())
   .then((blob) => {
      // Create a new FileReader object to read the Blob as a data URL
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
         const base64String = fileReader.result.split(",")[1];

         // Add the image file to the object and store the object in local storage
         obj3.image = base64String;
         localStorage.setItem("User3", JSON.stringify(arryObj3));
      };
   })
   .catch((error) => console.error(error));

const arryObj4 = [];
const obj4 = {
   username: "user4@yopmail.com",
   password: "user4",
   name: "Jack Mark"
};
arryObj4.push(obj4); //array k formate me data store hoga
fetch("person4.jfif")
   .then((response) => response.blob())
   .then((blob) => {
      // Create a new FileReader object to read the Blob as a data URL
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
         const base64String = fileReader.result.split(",")[1];

         // Add the image file to the object and store the object in local storage
         obj4.image = base64String;
         localStorage.setItem("User4", JSON.stringify(arryObj4));
      };
   })
   .catch((error) => console.error(error));

const arryObj5 = [];
const obj5 = {
   username: "user5@yopmail.com",
   password: "user5",
   name: "Alex John"
};
arryObj5.push(obj5); //array k formate me data store hoga
fetch("person5.jfif")
   .then((response) => response.blob())
   .then((blob) => {
      // Create a new FileReader object to read the Blob as a data URL
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
         const base64String = fileReader.result.split(",")[1];

         // Add the image file to the object and store the object in local storage
         obj5.image = base64String;
         localStorage.setItem("User5", JSON.stringify(arryObj5));
      };
   })
   .catch((error) => console.error(error));

function validate() {;
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

   if(email == 'user1@yopmail.com'){
      var obj = arryObj1;
   }
   else if(email == 'user2@yopmail.com'){
      var obj = arryObj2;
   }
   else if(email == 'user3@yopmail.com'){
      var obj = arryObj3;
   }
   else if(email == 'user4@yopmail.com'){
      var obj = arryObj4;
   }
   else{
      var obj = arryObj5;
   }

   if (loggedIn) {
      localStorage.setItem("loginUser", JSON.stringify(obj));
      location.replace("dashboard.html");
   } else if (email == "" || password == "") {
     
   } else {
      
   }
}

