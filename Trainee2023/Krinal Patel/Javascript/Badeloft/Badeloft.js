
window.onload = (event) => {debugger;
  if (localStorage.getItem("LoginDetails") != null) {
    window.location.replace("Dashboard.html");
  }
};
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});
//Data table Dashboard

$(document).ready(function () {
    $('#Dashboard').DataTable();
  });

  $(document).ready( function () {
    $('#myTable').DataTable();
} );

// Data table status
/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return (
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      '<tr>' +
      '<th>#</th>' +
      '<th>Part Number</th>' +
      '<th>Stock Location</th>' +
      '<th>Action</th>' +
      '</tr>' +
      '<td>1</td>' +
      '<td>BW-01-S-M</td>' +
      '<td>Warehouse</td>' +
      '<td>Close</td>' +
      '</tr>' +
      '<td>2</td>' +
      '<td>AT-01-BLK</td>' +
      '<td>C-101</td>' +
      '<td>Close</td>' +
      '</tr>' +
      '<td>3</td>' +
      '<td>BW-03-XL-G</td>' +
      '<td>E-501</td>' +
      '<td>Close</td>' +
      '</tr>' +

      '</table>'
  );
}

$(document).ready(function () {
  var table = $('#status').DataTable({
      data:dataSet,
      
      columns: [
          {
              className: 'dt-control',
              orderable: false,
              data: null,
              defaultContent: '',
          },

          { title: 'QB Invoice#' },
          { title: 'Name' },
          { title: 'QB Ship date' },
          { title: 'QB Payment status' },
          { title: 'QB Status' },
          { title: 'QB Delivery Phone' },
          { title: 'Called' },
          { title: 'QB Tracking' },


      ],
      order: [[1, 'asc']],
  });

  // Add event listener for opening and closing details
  $('#status tbody').on('click', 'td.dt-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row(tr);

      if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      } else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
      }
  });
});
var dataSet = [
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"],
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"],
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"],
  ["","AAAA", "Kenneth Woodard", "12/08/2021", "Paid", "Shipped", "617-235-7647","Tick","WBC-123"]

  // ['Eta Date','-','-','10/08/2021','10/08/2021','10/08/2021'],
  // ['BW-01-S-M','1','0','3','0','0'],
  // ['BW-03-XL-G','1','1','2','2','1'],
  // ['BW-01-Q-M','-','0','3','0','1']
];
var user = [];

function validatecheck() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    var emailC1 = "krinalpatel@gmail.com";
    var emailC2 = "rahul@gmail.com";
    var emailC3 = "preet@gmail.com";
    var emailC4 = "ram@gmail.com";

    var passwordC1 ="Krinal@123";
    var passwordC2 ="Krinal@123";
    var passwordC3 ="Krinal@123";
    var passwordC4 ="Krinal@123";



debugger;
    if(email == emailC1 && password== passwordC1){
        console.log("Log in");

        var userObj = {
          email:email,
          password: password,
          username: "Krinal"
        }
      
        user.push(userObj);
            
        localStorage.setItem( 'LoginDetails', JSON.stringify(user));
  
        window.location.replace("Dashboard.html")

    }
    else if( email == emailC2 && password== passwordC2){
      window.location.replace("Dashboard.html")
      var userObj = {
        email:email,
        password: password,
        username: "Rahul"

      }
      user.push(userObj);
          
      localStorage.setItem( 'LoginDetails', JSON.stringify(user));
    }
    else if( email == emailC3 && password== passwordC3 ){
      window.location.replace("Dashboard.html")
      var userObj = {
        email:email,
        password: password,
        username: "Preet"

        
      }
      user.push(userObj);
          
      localStorage.setItem( 'LoginDetails', JSON.stringify(user));
    }
    else if( email == emailC4 && password== passwordC4){
      window.location.replace("Dashboard.html")
      var userObj = {
        email:email,
        password: password,
        username: "Ram"

        
      }
      user.push(userObj);
          
      localStorage.setItem( 'LoginDetails', JSON.stringify(user));
    }
    else{
        if(email=="" && password==""){
            document.getElementById("invalid_email").innerHTML = "This Field is required*"
            document.getElementById("invalid_password").innerHTML = "This Field is required*"
        }
        else if(email != emailC1 && password!= passwordC1 || email != emailC2 && password!= passwordC2||email != emailC3 && password!= passwordC3 || email != emailC4 && password!= passwordC4){
            document.getElementById("invalid_email").innerHTML = "Email id is wrong*"
            document.getElementById("invalid_password").innerHTML = "Password is wrong*"
        }

    }
  
  }

// function validateemail() {
//     let setemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     let email = document.getElementById("email").value;
//     let msgemail = document.getElementById("invalid_email");
//     if (!setemail.test(email)) {
//         msgemail.innerHTML = "*Please enter @ and .com";
//         msgemail.style.color = "red";
//         document.getElementById("invalid_email").style.display = "unset";

//         return false;
//     } else {
//         document.getElementById("invalid_email").style.display = "none";
//         return true;
//     }
// }
// function validatepassword() {
//     let setpass =/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
//     let pass = document.getElementById("password").value;
//     let msgpass = document.getElementById("invalid_password");
//     if (!setpass.test(pass)) {
//         msgpass.innerHTML = "*Please enter correct password";
//         msgpass.style.color = "red";
//         document.getElementById("invalid_password").style.display = "unset";

//         return false;
//     } else {
//         document.getElementById("invalid_password").style.display = "none";
//         return true;
//     }
// }
$.validator.addMethod("Emailcheck", function (value) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  });
  $.validator.addMethod("password", function (value) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
  });

$("form[name='login_form']").validate({
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
      email: {
        required: "Enter your Email",
        email: true,
        Emailcheck: "Please Enter Email correctly",
      },
      password: {
        required: "Enter your Password",
        password: "Please Enter Password correctly",
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  
  function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }
  