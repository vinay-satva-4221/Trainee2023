//  Validation for log in form
// $(document).ready(function () {


//     // $("#login").click(function () {
//     //     $("#login_form").valid();
//     // });
//     // $("#login_form").validate({
//     //     rules: {
//     //         email: {
//     //             required: true,
//     //             email: true,
//     //         },
//     //         password: {
//     //             required: true
//     //         }
//     //     },
//     //     messages: {
//     //         email: {
//     //             required: "Enter your email",
//     //             email: "Please enter valid email with @",
//     //         },
//     //         password: {
//     //             required: "Enter the Password"
//     //         }
//     //     },
//     // });

//     // var logged = JSON.parse(localStorage.getItem("logged"));
//     // $("#username").html(logged[0].Name);


//     // $('#example').DataTable();


// });



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
                // window.location.href = "stock.html";
                // debugger;

                var logInUser = new Array();
                // debugger;
                for (let i = 0; i < users.length; i++) {
                    // alert(users[i][0])
                    if (email.toLowerCase() === users[i][0].toLowerCase() && password === users[i][1]) {
                        // alert("inside if")
                        logInUser.push({
                            Name: users[i][2],
                            Email: users[i][0],
                        });
                        document.getElementById("form").reset();
                        window.location.replace("db.html");
                    }
                }
                document.getElementById("form").reset();
                localStorage.setItem("LogedinUser", JSON.stringify(logInUser));
            }
        });
    }
});

































//    on click function of Login Button
// document.getElementById("login").onclick = function () {
//     var details = [["abc@gmail.com", "abc123", "Abc"],
//     ["rahul@gmail.com", "rahul123", "Rahul"],
//     ["sam@gmail.com", "sam123", "Sam"]];
//     // var  result=$("#login_form").valid();
//     let email = document.getElementById("inputemail").value;
//     let password = document.getElementById("password").value;
//     // if (result) {
//         var logged = new Array();
//         for (let i = 0; i < 4; i++) {
//             if (email == details[i][0] && password == details[i][1]) {
//                 logged.push({
//                     Name: details[i][2],
//                     Email: details[i][0]
//                 });
//             }
//             localStorage.setItem("logged", JSON.stringify(logged));
//             window.location.replace("db.html");

//         }
//     // }
// };

//  function for log out
// document.getElementById("logout").onclick = function () {
//     window.location.href = "log.html"
// };

// var logged = JSON.parse(localStorage.getItem("logged"));
// if (logged != '') {
//     debugger;
//     window.location.replace("db.html");
// } else {
//     console.log("Invalid username");
// }



// function remove() {
//     localStorage.removeItem('logged');

// }







