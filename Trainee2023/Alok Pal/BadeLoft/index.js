//Local storage
function checkEntry() {
    // i can put here the validations
    var email = document.getElementById("femail").value;
    var password = document.getElementById("fpassword").value;
 
    var emailC1 = "alokpal2807@gmail.com";
    var emailC2 = "amitK@gmail.com";
    var emailC3 = "avinash22@gmail.com";
    var emailC4 = "ronak345@gmail.com";

    var passwordC1 ="123456789";
    var passwordC2 ="123456789";
    var passwordC3 ="123456789";
    var passwordC4 ="123456789";

    if(email == emailC1 && password== passwordC1 || email == emailC2 && password== passwordC2||email == emailC3 && password== passwordC3 || email == emailC4 && password== passwordC4){
        console.log("Log in")
    }
  
  }