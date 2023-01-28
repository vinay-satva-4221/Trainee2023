

  $(document).ready(function () {

    const CityData = '{"Citys":['+
                    '{"StateId":"Madhya Pradesh","Id":"Indore","Name":"Indore"},' +
                    '{"StateId":"Madhya Pradesh","Id":"Bhopal","Name":"Bhopal"},' +
                    '{"StateId":"Rajasthan","Id":"Sirohi","Name":"Sirohi"},' +
                    '{"StateId":"Rajasthan","Id":"Udaipur","Name":"Udaipur"},' +
                    '{"StateId":"Rajasthan","Id":"Jaisalmer","Name":"Jaisalmer"},' +
                    '{"StateId":"Gujarat","Id":"Ahmedabad","Name":"Ahmedabad"},' +
                    '{"StateId":"Gujarat","Id":"Vadodara","Name":"Vadodara"},' +
                    '{"StateId":"Gujarat","Id":"Surat","Name":"Surat"},' +
                    '{"StateId":"Punjab","Id":"Ludhiana","Name":"Ludhiana"},' +
                    '{"StateId":"Punjab","Id":"Amritsar","Name":"Amritsar"},' +
                    '{"StateId":"Punjab","Id":"Patiala","Name":"Patiala"}]}';

    const StateData = '{"States":['+
                    '{"Id":"Madhya Pradesh","Name":"Madhya Pradesh"},' +
                    '{"Id":"Rajasthan","Name":"Rajasthan"},' +
                    '{"Id":"Gujarat","Name":"Gujarat"},' +                    
                    '{"Id":"Punjab","Name":"Punjab"}]}';

                    var StateJsonData = JSON.parse(StateData);
        $.each(StateJsonData.States,function(i,option){
            $("#State").append($('<option></option>').val(option.Id).html(option.Name));
        })

        $("#State").change(function(){
            var CityJsonData = JSON.parse(CityData);
            $("#City").html('');
            $.each(CityJsonData.Citys,function(i,option){
                if($("#State").val() == option.StateId){
                    $("#City").append($('<option></option>').val(option.Id).html(option.Name));
                }
        })

        });

        $('input[name="daterange"]').daterangepicker({
          opens: 'center'
        }, function(start, end, label) {
          console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
      
    $("#slider").click(function () {
      $('#carouselExampleControls').toggle();
    });


    var selectObject = {
        "state": {
          "Madhyapradesh": ["Indore", "Bhopal"],
          "Rajasthan": ["Udaipur", "Jaisalmer"],
          "Gujarat": ["Ahmedabad", "Vadodara", "surat"]
          
        },
      
      }
      window.onchange = function() {
        var state = document.getElementById("state");
        var city = document.getElementById("city");
        
        for (var x in state) {
            state.options[state.options.length] = new Option(x, x);
        }
        state.onchange = function() {
          //empty Chapters- and Topics- dropdowns
       
          city.length = 1;
          //display correct values
          for (var y in subjectObject[this.value]) {
            city.options[city.options.length] = new Option(y, y);
          }
        }
      
      }

    $("#save").on("click", function () {
        var name = $("#name").val();
        var mob = $("#mobile").val();
        var email = $("#email").val();
        var clgname = $("#collegename").val();
        var cgpa = $("#cgpa").val();
        var branch = $("#branch").val();
        var selectS = $("#State").val();
        var selectC = $("#City").val();
        var zip = $("#zip").val();
        var date = $("#date").val();
        var count = $("#myTable tr").length;
        if (name != "" &&  mob != "" && email != "" && clgname != "" && cgpa != "" && branch != "" && selectS != "" && selectC != "" && zip != "" && date != "") {
           $("#myTable tbody").append(
              '<tr class="child"><td>' +
                 count + "</td><td>" +  name + "</td><td>" + mob + "</td><td>" + email +
                 "</td><td>" +clgname + "</td><td>" + cgpa +"</td><td>" +branch + "</td><td>" + selectS +
            "</td><td>" +selectC +"</td><td>" +zip +"</td><td>" +date +
                 '</td><td><a href="javascript:void(0);" class="remCF1 btn  btn-danger">Remove</a></td></tr>'+
                 '</td><td><a href="javascript:void(0);" class="remCF2 btn  btn-primary">Edit</a></td></tr>'
           );
        }
     });
     
     $(document).on("click", ".remCF1", function () {
        $(this).parent().parent().remove();
        $("#myTable tbody tr").each(function (i) {
           $($(this).find("td")[0]).html(i + 1);
        });
     });

  });

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


function validateemail() {
    var regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var email = document.getElementById('email').value;
    var vemail = document.getElementById('emailerror')
    if (!regName.test(email)) {
        vemail.innerHTML = ('Please enter email...');
        document.getElementById('emailerror').style.display = "unset";
        document.getElementById('email').focus();
        return false;
    } else {
        document.getElementById('emailerror').style.display = "none";
        return true;
    }
}
function validatecollegename() {
    var regName = /^[a-zA-Z]+$/;
    var collegename = document.getElementById('collegename').value;
    var vcollegename = document.getElementById('collegenameerror')
    if (!regName.test(collegename)) {
        vcollegename.innerHTML = ('Please enter collegename...');
        document.getElementById('collegenameerror').style.display = "unset";
        document.getElementById('collegename').focus();
        return false;
    } else {
        document.getElementById('collegenameerror').style.display = "none";
        return true;
    }
}

function validatecgpa() {
    var regName = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{2}$/;
    var CGPA = document.getElementById('cgpa').value;
    var vCGPA = document.getElementById('cgpaerror')
    if (!regName.test(CGPA)) {
        vCGPA.innerHTML = ('Please enter cgpa...');
        document.getElementById('cgpaerror').style.display = "unset";
        document.getElementById('cgpa').focus();
        return false;
    } else {
        document.getElementById('cgpaerror').style.display = "none";
        return true;
    }
}

function branchfor()
{
    var branch=document.getElementById("branch");
    if(branch.value=="")
    {
        document.getElementById("errorbranch").innerHTML="please select branch field";
        document.getElementById("errorbranch").style.display="unset";
        document.getElementById("branch").focus();
        return false;
    }
    document.getElementById("errorbranch").style.display="none";
    return true;
}
function statefor()
{
    var state=document.getElementById("State");
    if(state.value=="")
    {
        document.getElementById("errorstate").innerHTML="please select branch field";
        document.getElementById("errorstate").style.display="unset";
        document.getElementById("State").focus();
        return false;
    }
    document.getElementById("errorstate").style.display="none";
    return true;
}
function zipfor()
{

    var regName =/^\d{5}$/;
    var zip = document.getElementById('zip').value;
    var vzip = document.getElementById('errorzip')
    if (!regName.test(zip)) {
        vzip.innerHTML = ('Please enter zip code...');
        document.getElementById('errorzip').style.display = "unset";
        document.getElementById('zip').focus();
        return false;
    } else {
        document.getElementById('errorzip').style.display = "none";
        return true;
    }
   
}





  