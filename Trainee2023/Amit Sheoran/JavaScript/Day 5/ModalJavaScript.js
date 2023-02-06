var city = [
    
    {State:'Haryana',city:'Bhiwani'},
    {State:'Haryana',city:'Sonipat'},
    {State:'Haryana',city:'karnal'},
    {State:'Punjab',city:'chandigarh'},
    {State:'Punjab',city:'jalandar'},
    {State:'Rajasthan',city:'jaipur'},
    {State:'Rajasthan',city:'jjn'},
    {State:'Rajasthan',city:'sikar'},  
];

$(document).ready(function(){
  $.validator.addMethod('validname', function (value) {
    return /^[a-zA-Z]+$/.test(value)
});

$('#myform').validate({
  rules: {
      name: {
          required: true,
          validname: true,
          minlength: 3
      },
      choosestate: {
        required: true,
      },
      choosecity: {
        required: true,
      },
      zipcode: {
        required: true,
        minlength: 6,
        maxlength: 6
      },
      mobile: {
        digits: true,
        minlength: 10,
        maxlength: 10
    }
  },
  messages: {
      name: {
          required: "Please enter your Name",
          validname: "only alphabets allowed",
          minlength: "minimum 3 alphabets required",
      },
      choosestate: {
        required:"Please Choose Your State"
      },
      choosecity: {
          required: "Please Choose your City",    
      },
      zipcode: {
          required: "Please Enter your Zip Code",
          maxlength: "Zipcode should be of 6 digits",
          minlength:"Zipcode should be of 6 digits"
          
      },
      branchname: {
          required: "please choose branch name",
      },
      mobile: {
        digits: "enter only digits",
        minlength: "minimum 10 digits required",
        maxlength: "number should be of 10 digits only"
      }
  }
});









    
    $("#choosestate").change(function(){
        $("#choosecity").html("<option selected>Choose City</option>");
        const states = city.filter(m=>m.State == $("#choosestate").val());
        states.forEach(element=>{
            const option = "<option val= '"+element.city+"'>"+element.city+"</option>";
            $("#choosecity").append(option);
        });
    });
});


function addData() {
  var name = document.getElementById("name").value;
  var state = document.getElementById("choosestate").value;
  var city = document.getElementById("choosecity").value;
  var zipcode = document.getElementById("zipcode").value;
  var mobile = document.getElementById("mobile").value;

  var table = document.getElementById("dataTable");
  
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = name;
  cell2.innerHTML = state;
  cell3.innerHTML = city;
  cell4.innerHTML = zipcode;
  cell5.innerHTML = mobile;

  if (table.rows.length == 6) {
    document.getElementById("orderSelection").style.display = "block";
  }

  if (table.rows.length > 6) {
    var order = document.querySelector('input[name="order"]:checked').value;
    if (order == "LIFO") {
      table.deleteRow(table.rows.length - 2);
    } else {
      table.deleteRow(1);
    }
  }
}