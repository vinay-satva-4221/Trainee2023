// function validateform(){
//      var name = document.getElementById("name").value;
//      var mobile = document.getElementById("mobile").value;

//      if(name==""){
//         alert("Please Enter your Name");
//         return false;
//      }
//      if(mobile==""){
//         alert("Please enter your Mobile");
//         return false;
//      }
//      return true;




const cars = ["vodka", "daaru", "Sharab", "rum", "whiskey", "wine"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text = text+cars[i] + "<br>"
}

document.getElementById("demo").innerHTML = text;
