
$(document).ready(function () {
    var logedinuser = JSON.parse(localStorage.getItem("LogedinUser"));
    if (logedinuser != null) {
        window.location.href = "db.html";
    } else {
        var users = [
            [
                "abc@gmail.com",
                "Abc@12345",
                "Abc",
            ],
            [
                "rahul@gmail.com",
                "Rah@12321",
                "Rahul",
            ],
            [
                "jay@gmail.com",
                "Jay@12321",
                "Jay",
            ],
            [
                "eric@gmail.com",
                "Eric@12321",
                "Eric",
            ],
        ];
        $.validator.addMethod("Emailcheck", function (value) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        });
        $.validator.addMethod("password", function (value) {
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
        });

        $("#form").validate({
            rules: {
                email: {
                    required: true,
                    Emailcheck: true,
                },
                password: {
                    required: true,
                    password: true,
                },
            },
            messages: {
                name: {
                    required: "Enter your Email",
                    Emailcheck: "Please Enter Valid Email",
                },
                password: {
                    required: "Enter your Password",
                    password: "Please Enter Valid Password",
                },
            },
            submitHandler: function (form) {
                form.submit();
            },
        });
        var form = $("#form");
        form.validate();
        $("#login").click(function () {
            var result = form.valid();
            if (result == true) {
                let email = $("#inputemail").val();
                let password = $("#password").val();
                var loggedInUser = new Array();
                for (let i = 0; i < users.length; i++) {
                    if (email.toLowerCase() === users[i][0].toLowerCase() && password === users[i][1]) {
                        loggedInUser.push({
                            Name: users[i][2],
                            Email: users[i][0],
                        });
                        document.getElementById("form").reset();
                        window.location.replace("db.html");
                    }
                }
                document.getElementById("form").reset();
                localStorage.setItem("LogedinUser", JSON.stringify(loggedInUser));
            } else {
                swal("InCorrect Detail!", "You Have Entered Invalid Detail!", "warning");
            }
        });
    }
});










