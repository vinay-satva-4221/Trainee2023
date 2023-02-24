var LoginData = [
    {
        type: 'Admin',
        id: 1,
        Email: 'admin1@gmail.com',
        Password: 'admin1',
        Username: 'Admin1'
    },
    {
        type: 'Admin',
        id: 2,
        Email: 'admin2@gmail.com',
        Password: 'admin2',
        Username: 'Admin2'
    },
    {
        type: 'Employee',
        id: 3,
        Email: 'emp1@gmail.com',
        Password: 'emp1',
        Username: 'Employee1'
    },
    {
        type: 'Employee',
        id: 4,
        Email: 'emp2@gmail.com',
        Password: 'emp2',
        Username: 'Employee2'
    },
]
localStorage.setItem('Logindata', JSON.stringify(LoginData));

$(document).ready(function () {
    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        window.location.replace("./dashboard.html");
    }
    else
    {
        //window.location.replace("login.html");
        //window.location.href = 'login.html';
        //$(redirect).click();
        //header('location:login.html');
    }
    $("#form").validate({
        // in 'rules' user have to specify all the constraints for respective fields

        rules: {

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                email: "Please enter a valid email address",
            },
            password: {
                password: "Please enter password"
            }
        }
    });
    var form = $("#form");
    form.validate();
    $("#login").click(function () {
        var result = form.valid();
        console.log(result);
        if (result == false) {
            //swal("Error!", "Please enter all the details", "error");
        }
        else {

            var useremail = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            const login = LoginData.find(
                x => x.Email === useremail &&
                    x.Password === password && x.Username);

            if (login == undefined) {

                swal("Error!", "Please enter valid email or password", "error");
            }
            else {

                var userName = login.Username;

                const loggedUser = [
                    {
                        id: 1,
                        UserName: userName,
                        Email: useremail,

                    }
                ]
                localStorage.setItem('LoggedInUser', JSON.stringify(loggedUser));
                //alert("Logged in");
                window.location.replace("./dashboard.html");

            }



        }
    });

});

