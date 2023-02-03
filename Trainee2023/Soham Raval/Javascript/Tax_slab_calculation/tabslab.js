
function validateName() {
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var vname = document.getElementById('NAME');
    if(name=="")
    {
      vname.innerHTML = ('Please fill ...');
      document.getElementById('NAME').style.display = "unset";
      return false;
    }
    else{
    if (!regName.test(name)  ) {
        vname.innerHTML = ('Please enter valid name...');
        document.getElementById('NAME').style.display = "unset";
        document.getElementById('name').focus();
        return false;
    } else {
        document.getElementById('NAME').style.display = "none";
        return true;
    }
  } 
}
function validateMobile() {
    var regName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var name = document.getElementById('mobile').value;
    var vname = document.getElementById('MOBILE')
    if(name=="")
    {
      vname.innerHTML = ('Please enter  mobile...');
      document.getElementById('MOBILE').style.display = "unset";
    }
    else{
    if (!regName.test(name) || name=="") {
        vname.innerHTML = ('Please enter valid mobile number...');
        document.getElementById('MOBILE').style.display = "unset";
        document.getElementById('mobile').focus();
        return false;
    } else {
        document.getElementById('MOBILE').style.display = "none";
        return true;
    }
  }
}

$(function() {
    $('input[name="datetimes"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
    //    alert("You are " + years + " years old!");
    // document.getElementById("age").innerHTML=years;
    document.getElementById("vage").value=years;

    if(years<=18)
    {
        var validyear=  document.getElementById('dateerror')
        validyear.innerHTML=("you are not accepted");
        document.getElementById('dateerror').style.display = "unset";
    }
    else{
        document.getElementById('dateerror').style.display = "none";
    }
    });
  });

  function genderfor()
{
    var gender=document.getElementById("gender");
    if(gender.value=="")
    {
        document.getElementById("gen1").innerHTML="please select gender field";
        document.getElementById("gen1").style.display="unset";
        document.getElementById("gen1").focus();
        return false;
    }
    document.getElementById("gen1").style.display="none";
    return true;
}

function validateincome() {
    var regName = /^[0-9]+$/;
    var name = document.getElementById('income').value;
    var vname = document.getElementById('incomeerror')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter income...');
        document.getElementById('incomeerror').style.display = "unset";
        document.getElementById('income').focus();
        return false;
    } else {
        document.getElementById('incomeerror').style.display = "none";
        return true;
    }
}
function validateloan() {
    var regName = /^[0-9]+$/;
    var name = document.getElementById('loan').value;
    var vname = document.getElementById('loanerror')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter loan...');
        document.getElementById('loanerror').style.display = "unset";
        document.getElementById('loan').focus();
        return false;
    } else {
        document.getElementById('loanerror').style.display = "none";
        return true;
    }
}
function validateinvestment() {
    var regName = /^[0-9]+$/;
    var name = document.getElementById('investment').value;
    var vname = document.getElementById('investmenterror')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter investment...');
        document.getElementById('investmenterror').style.display = "unset";
        document.getElementById('investment').focus();
        return false;
    } else {
        document.getElementById('investmenterror').style.display = "none";
        return true;
    }
}
function validateform()
{
  
    if(validateName() && validateMobile() && genderfor() && validateincome() &&  validateloan() && validateinvestment())
        {
          
            //  var validdetail=  document.getElementsByClassName('validate')
            // validdetail.innerHTML=("please correct valid details");
            //  document.getElementById('validate').style.display = "unset";
            //  document.getElementById('validate').style.display = "none";
            return true;
  
            
        }
        else{
     
            // var validdetail=  document.getElementById('validate')
            // validdetail.innerHTML=("please correct valid details");
            // document.getElementById('validate').style.display = "unset";
          return false;
        }
}

function getdata(){
     
  var isValid = validateform()

  if (isValid) {
      $("#exampleModal").modal("show");

  }
  else{
      $("#exampleModal").modal("hide");
  }
   
    var nameofmodel=document.getElementById('name').value;
    document.getElementById("namemodel").value=nameofmodel;
    var loan = parseInt(document.getElementById("loan").value);
    var income =parseInt( document.getElementById("income").value);
    var investment = parseInt(document.getElementById("investment").value);
    var loan1 = .8 * loan;
    var income1 = .2 * income;
    var minimum = Math.min(loan1, income1);
    if (investment >= 100000) {
        investment = 100000;
    } else {
        investment = investment;
    }
    var taxamount = income - (minimum + investment);
    console.log(taxamount);
    document.getElementById('value1').value=taxamount;
    if(document.getElementById('value1').value>0)
    {
        document.getElementById("value1").style.backgroundColor = "red";
    }
    else{
        document.getElementById("value1").style.backgroundColor = "green";
    }
    // document.getElementById('Mname').innerHTML=taxamount;



var genderget=document.getElementById("gender").value;
var citizen=document.getElementById("vage").value;
console.log("sam",citizen);

if(genderget == "male" && citizen>=18) {
    if (taxamount < 240000) {
             console.log("don't have to pay tax");

    } else {
      var notax = taxamount - 240000;
      if (notax > 360000) {
        // if it is big
        var payabletax2 = 360000;
        var payabletax3 = notax - 360000;
      } else {

        payabletax2 = 0.1 * notax;
       
        document.getElementById("value2").value=payabletax2;
      }
      if (payabletax3 <= 0) {
        
        document.getElementById("value2").value=payabletax3;

      } else {
        let payabletax4 = 0.2 * payabletax3;
        document.getElementById("value2").value=payabletax4+payabletax2;
      }
    }
  }

   if(genderget == "female" && citizen>=18) {
    if (taxamount < 260000) {
             console.log("don't have to pay tax");

    } else {
      var notax = taxamount - 260000;
      if (notax > 440000) {
        // if it is big
        var payabletax2 = 440000;
        var payabletax3 = notax - 440000;
      } else {

        payabletax2 = 0.1 * notax;
       
        document.getElementById("value2").value=payabletax2;
      }
      if (payabletax3 <= 0) {
        
        document.getElementById("value2").value=payabletax3;

      } else {
        let payabletax4 = 0.2 * payabletax3;
        document.getElementById("value2").value=payabletax4+payabletax2;

      }
    }
  }

  if((genderget == "male" || genderget=="female")  && citizen>=60) {
    if (taxamount < 300000) {
             console.log("don't have to pay tax");

    } else {
      var notax = taxamount - 300000;
      if (notax > 400000) {
        // if it is big
        var payabletax2 = 400000;
        var payabletax3 = notax - 400000;
      } else {

        payabletax2 = 0.1 * notax;
       
        document.getElementById("value2").value=payabletax2;
      }
      if (payabletax3 <= 0) {
        
        document.getElementById("value2").value=payabletax3;

      } else {
        let payabletax4 = 0.2 * payabletax3;
        document.getElementById("value2").value=payabletax4+payabletax2;

      }
    }
  }

  if(document.getElementById('value2').value>0)
  {
      document.getElementById("value2").style.backgroundColor = "red";
  }
  else{
      document.getElementById("value2").style.backgroundColor = "green";
  }

}
  