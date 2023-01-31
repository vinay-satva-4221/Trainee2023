
let id = "no";
$(document).ready(function () {

    


    const CityData = '{"Citys":[' +
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

    const StateData = '{"States":[' +
        '{"Id":"Madhya Pradesh","Name":"Madhya Pradesh"},' +
        '{"Id":"Rajasthan","Name":"Rajasthan"},' +
        '{"Id":"Gujarat","Name":"Gujarat"},' +
        '{"Id":"Punjab","Name":"Punjab"}]}';

    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States, function (i, option) {
        $("#State").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#State").change(function () {
        var CityJsonData = JSON.parse(CityData);
        $("#City").html('');
        $.each(CityJsonData.Citys, function (i, option) {
            if ($("#State").val() == option.StateId) {
                $("#City").append($('<option></option>').val(option.Id).html(option.Name));
            }
        })

    });

    $('input[name="daterange"]').daterangepicker({
        opens: 'center'
    }, function (start, end, label) {
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



    $("#save").click(function () {
        var studentData = localStorage.getItem("studentData");

        // var Name = $("#name").val();
        // var Mobile = $("#mobile").val();
        // var Email = $("#email").val();
        // var State = $("#State").val();
        // var City = $("#City").val();
        // var Collage = $("#collegename").val();
        // var Branch = $("#branch").val();
        // var CGPA = $("#cgpa").val();
        // var FromToWhenYouStudied = $("#date").val();
        // var Zip = $("#zip").val();
      

        var StudentDetails = {
            dataId: $("#dataId").val(),
            
          Name: $("#name").val(),
          Mobile: $("#mobile").val(),
          Email: $("#email").val(),
          State: $("#State").val(),
          Collage: $("#collegename").val(),
          City: $("#City").val(),
          Branch: $("#branch").val(),
          CGPA: $("#cgpa").val(),
          FromToWhenYouStudied: $("#date").val(),
          Zip: $("#zip").val(),
        };
      
        if (id === "no") 
        {
            if (studentData != null) {
              var studentJsonData = JSON.parse(studentData);
              if(studentJsonData.students && studentJsonData.students[parseInt(StudentDetails.dataId)] )
              {
                studentJsonData.students[parseInt(StudentDetails.dataId)]=StudentDetails
                localStorage.setItem("studentData", JSON.stringify(studentJsonData));
              }
              else{
                    studentJsonData.students.push(StudentDetails);
                    localStorage.setItem("studentData", JSON.stringify(studentJsonData));}
            } else {
              var studentData = JSON.parse('{"students": []}');
              studentData.students.push(StudentDetails);
              localStorage.setItem("studentData", JSON.stringify(studentData));
            }
          } 
          else 
          {
            let datal = JSON.parse(localStorage.getItem("studentData"));
            datal[id] =students.Name;
            localStorage.setItem("studentData", JSON.stringify(datal));
          }
          selectData();

      });

});




function selectData() {
    var isValid = validateform()

    if (isValid) {
        swal("your detais are valid!", "done!", "success");

        $("#myTable" ).show();
  
    }
    else{
        $("#myTable" ).hide();
    }
    var datal = JSON.parse(localStorage.getItem("studentData"));
    if (datal != null) {
      let addtable = "";
  
      for (let i = 0; i < datal.students.length; i++) {
        addtable =
        addtable +
          `<tr id = ${i} >
          <td>${i + 1}</td>
          <td>${datal.students[i].Name}</td>
          <td>${datal.students[i].Mobile}</td>
          <td>${datal.students[i].Email}</td>
          <td>${datal.students[i].Collage}</td>
          <td>${datal.students[i].CGPA}</td>
          <td>${datal.students[i].Branch}</td>
          <td>${datal.students[i].State}</td>
          <td>${datal.students[i].City}</td>
          <td>${datal.students[i].Zip}</td>
          <td>${datal.students[i].FromToWhenYouStudied}</td>
          <td nowrap><a href="javascript:void(0);"  onclick="deleteData(${i})" class="remCF1 btn  border">Delete</a>
          <a href="javascript:void(0);"  onclick="editData(${i})" id="edit" class="remCF1 btn border">Edit</a></td>
          <tr>`;
      }
      document.getElementById("root").innerHTML = addtable; 
    }
    
  }

function validateName() {
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var vname = document.getElementById('NAME');
    if (name == "") {
        vname.innerHTML = ('Please fill ...');
        document.getElementById('NAME').style.display = "unset";
        return false;
    }
    else {
        if (!regName.test(name)) {
            vname.innerHTML = ('Please enter valid name...');
            document.getElementById('NAME').style.display = "unset";
            document.getElementById('name').focus();
            return false;
        } else {
            document.getElementById('NAME').style.display = "none";
            swal("your name is valid!", "done!", "success");
            
            return true;
        }
    }

    
}
function validateMobile() {
    var regName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var name = document.getElementById('mobile').value;
    var vname = document.getElementById('MOBILE')
    if (name == "") {
        vname.innerHTML = ('Please enter  mobile...');
        document.getElementById('MOBILE').style.display = "unset";
    }
    else {
        if (!regName.test(name) || name == "") {
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
        swal("your email is valid!", "done!", "success");

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

function branchfor() {
    var branch = document.getElementById("branch");
    if (branch.value == "") {
        document.getElementById("errorbranch").innerHTML = "please select branch field";
        document.getElementById("errorbranch").style.display = "unset";
        document.getElementById("branch").focus();
        return false;
    }
    document.getElementById("errorbranch").style.display = "none";
    return true;
}
function statefor() {
    var state = document.getElementById("State");
    if (state.value == "") {
        document.getElementById("errorstate").innerHTML = "please select state field";
        document.getElementById("errorstate").style.display = "unset";
        document.getElementById("State").focus();
        return false;
    }
    document.getElementById("errorstate").style.display = "none";
    return true;
}
function zipfor() {

    var regName = /^\d{6}$/;
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
function validateform()
{
  
    
    if(!validateName() && !validateMobile() && !validateemail() && !validatecollegename() &&  !validatecgpa() && !branchfor() && !statefor() && !zipfor())
        {
            return false;
  
        }
        else{

          return true;
            
        }
}

function deleteData(rid)
{
    let deleteData=JSON.parse(localStorage.getItem('studentData'))
    deleteData.students.splice(rid,1);
    localStorage.setItem("studentData",JSON.stringify(deleteData));
    swal("your item is deleted!", "done!", "success");

    selectData();


}

function editData(rid)
{
    let editData=JSON.parse(localStorage.getItem("studentData"));
    document.getElementById("dataId").value = rid;

    document.getElementById("name").value=editData.students[rid].Name;
    document.getElementById("mobile").value=editData.students[rid].Mobile;
    document.getElementById("email").value=editData.students[rid].Email;
    document.getElementById("State").value=editData.students[rid].State;
    document.getElementById("collegename").value=editData.students[rid].Collage;
    document.getElementById("City").value=editData.students[rid].City;
    document.getElementById("branch").value=editData.students[rid].Branch;
    document.getElementById("cgpa").value=editData.students[rid].CGPA;
    document.getElementById("date").value=editData.students[rid].FromToWhenYouStudied;
    document.getElementById("zip").value=editData.students[rid].Zip;
    // localStorage.setItem("studentData",JSON.stringify(editData));
    // var savebutton=document.getElementById("save");
    // savebutton.innerHTML="update";
    // savebutton.setAttribute("index",rid);
    document.getElementById("save").innerHTML="update"

selectData();
}
$(document).ready(function () {
    selectData();
  
});