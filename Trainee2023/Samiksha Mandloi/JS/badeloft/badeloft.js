$(document).ready(function(){
    const loggedin = localStorage.getItem('loginuser');
    if(loggedin){
        // debugger;
        window.location.replace("./baddashboard.html");
    } else {
        console.log("Invalid username");
    }
     


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
});

const arryObj1 = [];
const obj1 = {
    username: "Cust1@gmail.com",
    password: "111111",
    name: "Kenneth Wooded"
    
};
arryObj1.push(obj1);
localStorage.setItem('mail1', JSON.stringify(arryObj1));

const arryObj2 = [];
const obj2 = {
    username: "cust2@gmail.com",
    password: "222222",
    name: "James Fenske"

};
arryObj2.push(obj2);
localStorage.setItem('mail2', JSON.stringify(arryObj2));

const arryObj3 = [];
const obj3 = {
    username: "cust3@gmail.com",
   password: "333333",
   name: "Kelly McCrony"
};
arryObj3.push(obj3);
localStorage.setItem('mail3', JSON.stringify(arryObj3));

const arryObj4 = [];
const obj4 = {
    username: "cust3@gmail.com",
    password: "444444",
    name: "Jack Mark"

};
arryObj4.push(obj4);
localStorage.setItem('mail4', JSON.stringify(arryObj4));

const arryObj5 = [];
const obj5 = {
    username: "cust5@gmail.com",
    password: "555555",
    name: "Alex John"
};
arryObj5.push(obj5);
localStorage.setItem('mail5', JSON.stringify(arryObj5));

function match() {
    debugger;
    var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
    var name;


    let valid = false;
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith("mail")) {
        let storedData = JSON.parse(localStorage.getItem(key));
        let storedEmail = storedData[0].username;
        let storedPassword = storedData[0].password;
        var storedname = storedData[0].name;
  
        if (email === storedEmail && password === storedPassword) {
          valid = true;
          break;
        }
      }
    }
  
    if (valid) {
        debugger;
    //  alert("success");
    window.location.replace("./baddashboard.html");
    var userData = {
        email: email,
        password: password,
        name: storedname
      };

    localStorage.setItem('loginuser',JSON.stringify(userData));
    
    } else {
        alert("Invalid email or password");
    }
  }
  
  
  