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
    email: "Samiksha142@gmail.com",
    password: "140301",
    name: "samiksha"
    
};
arryObj1.push(obj1);
localStorage.setItem('mail1', JSON.stringify(arryObj1));

const arryObj2 = [];
const obj2 = {
    email: "Shana12@gmail.com",
    password: "123456",
    name: "Shana"

};
arryObj2.push(obj2);
localStorage.setItem('mail2', JSON.stringify(arryObj2));

const arryObj3 = [];
const obj3 = {
    email: "Avni1@gmail.com",
    password: "654321",
    name: "Avni"

};
arryObj3.push(obj3);
localStorage.setItem('mail3', JSON.stringify(arryObj3));

const arryObj4 = [];
const obj4 = {
    email: "Swarali24@gmail.com",
    password: "098765",
    name: "Swarali"

};
arryObj4.push(obj4);
localStorage.setItem('mail4', JSON.stringify(arryObj4));

const arryObj5 = [];
const obj5 = {
    email: "Sakshi74@gmail.com",
    password: "876543",
    name: "Sakshi"

};
arryObj5.push(obj5);
localStorage.setItem('mail5', JSON.stringify(arryObj5));

function match() {
    debugger;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var name;


    let valid = false;
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith("mail")) {
        let storedData = JSON.parse(localStorage.getItem(key));
        let storedEmail = storedData[0].email;
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
  
  
  