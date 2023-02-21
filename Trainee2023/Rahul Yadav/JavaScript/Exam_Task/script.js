//  Validation for log in form
$(document).ready(function () {
    $("#login").click(function () {
        $("#login_form").valid();
    });
    $("#login_form").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Enter your email",
                email: "Please enter valid email with @",
            },
            password: {
                required: "Enter the Password"
            }
        },
    });
    $('#table_id').DataTable();
    
});

//    on click function of Login Button
document.getElementById("login").onclick = function () {
    var details = [["abc@gmail.com", "abc123", "Abc"],
    ["rahul@gmail.com", "rahul123", "Rahul"],
    ["sam@gmail.com", "sam123", "Sam"]];
    let email = document.getElementById("inputemail").value;
    let password = document.getElementById("password").value;
    if (email != "" && password != "") {
        var logged = new Array();
        for (let i = 0; i < 4; i++) {
            if (email == details[i][0] && password == details[i][1]) {
                logged.push({
                    Name: details[i][2],
                    Email: details[i][0]
                });
            }
            localStorage.setItem("logged", JSON.stringify(logged));
            window.location.replace("dashboard.html");

        }
    }
};

//  function for log out
document.getElementById("logout").onclick = function () {
    window.location.href = "log.html"
};

$(document)
    .ready(function () {
        $('#table_id')
            .DataTable();
    });




