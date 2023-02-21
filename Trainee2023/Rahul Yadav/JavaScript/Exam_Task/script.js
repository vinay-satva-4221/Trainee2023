document.getElementById("login").onclick = function () {
    var email = document.getElementById("inputemail").value;
    var password = document.getElementById("password").value;
    if (email == "rahul1234@gmail.com" && password == 123456 || email == "rahul@gmail.com" && password == 12) {
        alert("You Have Login ")

    }

};
