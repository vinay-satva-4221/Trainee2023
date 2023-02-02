function validateName() {
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var vname = document.getElementById('NAME')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid name...');
        document.getElementById('NAME').style.display = "unset";
        document.getElementById('name').focus();
        return false;
    } else {
        document.getElementById('NAME').style.display = "none";
        // swal("Good job!", "You clicked the button!", "success");
        return true;
    }
}

function validateMobile() {
    var regName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var name = document.getElementById('mobile').value;
    var vname = document.getElementById('MOBILE')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid mobile number...');
        document.getElementById('MOBILE').style.display = "unset";
        document.getElementById('mobile').focus();
        return false;
    } else {
        document.getElementById('MOBILE').style.display = "none";
        return true;
    }
}

function validateEmail() {
    var regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var name = document.getElementById('email').value;
    var vname = document.getElementById('EMAIL')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid email...');
        document.getElementById('EMAIL').style.display = "unset";
        document.getElementById('email').focus();
        return false;
    } else {
        document.getElementById('EMAIL').style.display = "none";
        return true;
    }
}

function validateCollageName() {
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('clgname').value;
    var vname = document.getElementById('CLGNAME')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid collage name...');
        document.getElementById('CLGNAME').style.display = "unset";
        document.getElementById('clgname').focus();
        return false;
    } else {
        document.getElementById('CLGNAME').style.display = "none";
        return true;
    }
}

function validateCgpa() {
    var regName = /^(?:[1-9]|0[1-9]|6)$/;
    var name = document.getElementById('cgpa').value;
    var vname = document.getElementById('CGPA')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid cgpa...');
        document.getElementById('CGPA').style.display = "unset";
        document.getElementById('cgpa').focus();
        return false;
    } else {
        document.getElementById('CGPA').style.display = "none";
        return true;
    }
}

function validateBranch() {
    var branch = document.getElementById("branch");
    if (branch.value == "") {
        document.getElementById("BRANCH").innerHTML = "please select branch field";
        document.getElementById("BRANCH").style.display = "unset";
        document.getElementById("BRANCH").focus();
        return false;
    }
    document.getElementById("BRANCH").style.display = "none";
    return true;
}

function validateState() {
    var state = document.getElementById("State");
    if (state.value == "") {
        document.getElementById("STATE").innerHTML = "please select State field";
        document.getElementById("STATE").style.display = "unset";
        document.getElementById("State").focus();
        return false;
    }
    document.getElementById("STATE").style.display = "none";
    return true;
}

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
});
function validateZip() {
    debugger
    var regName = /[0-9]{6}(\s*,*,\s*[0-9]{6})*/;
    var name = document.getElementById('zip').value;
    var vname = document.getElementById('ZIP')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid zip...');
        document.getElementById('ZIP').style.display = "unset";
        document.getElementById('zip').focus();
        return false;
    } else {
        document.getElementById('ZIP').style.display = "none";
        return true;
    }
}

$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$('#carouselExampleControls').hide();
$("#slider").click(function () {
    $('#carouselExampleControls').toggle("show");
});

function validateRow1() {
    if (!validateName() && !validateMobile() && !validateEmail() && !validateCollageName() && !validateCgpa() && !validateBranch() && !validateState() && !validateZip) {
        return false;
    }
    else {
        return true;
    }
}


// localstroage

$("#addrow").click(function () {

    var StudentDetails = {

        Name: $("#name").val(),
        Mobile: $("#mobile").val(),
        Email: $("#email").val(),
        Collage: $("#clgname").val(),
        CGPA: $("#cgpa").val(),
        Branch: $("#branch").val(),
        State: $("#State").val(),
        City: $("#City").val(),
        Zip: $("#zip").val(),
        FromToWhenYouStudied: $("#date").val(),

    };

    var studentData = localStorage.getItem("studentData");
    // if (id == "no") {
    if (studentData != null) {
        var studentJsonData = JSON.parse(studentData);
        studentJsonData.students.push(StudentDetails);
        localStorage.setItem("studentData", JSON.stringify(studentJsonData));
    } else {
        var studentData = JSON.parse('{"students": []}');
        studentData.students.push(StudentDetails);
        localStorage.setItem("studentData", JSON.stringify(studentData));
    }
});

function validateRow() {
    var isValid = validateRow1()
    // if (isValid) {
    //     swal("your detais are valid!", "done!", "success");

    //     $("#showUsers").show();
    // }
    // else {
    //     $("#showUsers").hide();
    // }
    var data = JSON.parse(localStorage.getItem("studentData"));
    if (data != null) {
        let addtable = "";

        for (let i = 0; i < data.students.length; i++) {
            addtable =
                addtable +
                `<tr id = ${i} >
          <td>${i + 1}</td>
          <td>${data.students[i].Name}</td>
          <td>${data.students[i].Mobile}</td>
          <td>${data.students[i].Email}</td>
          <td>${data.students[i].Collage}</td>
          <td>${data.students[i].CGPA}</td>
          <td>${data.students[i].Branch}</td>
          <td>${data.students[i].State}</td>
          <td>${data.students[i].City}</td>
          <td>${data.students[i].Zip}</td>
          <td>${data.students[i].FromToWhenYouStudied}</td>
          <td nowrap><a href="javascript:void(0);"  onclick="deleteData(${i})" class="remCF1 btn  border">Delete</a>
          <a href="javascript:void(0);"  onclick="editData(${i})" class="remCF1 btn border ">Update</a></td>
          <tr>`;
        }
        document.getElementById("root").innerHTML = addtable;
    }
}

function deleteData(index) {
    var peoplelist;
    // if(localStorage.getItem("studentData")==null){
    //     peoplelist = [];
    // }
    // else{
    //     peoplelist = JSON.parse(localStorage.getItem("studentData"));
    // }
    peoplelist = JSON.parse(localStorage.getItem("studentData"));
    peoplelist.students.splice(index, 1);
    localStorage.setItem("studentData", JSON.stringify(peoplelist));
    validateRow();
}

function editData(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    if (localStorage.getItem("studentData") == null) {
        peoplelist = [];
    }
    else {
        peoplelist = JSON.parse(localStorage.getItem("studentData"));
    }

    document.getElementById("name").value = peoplelist.students[index].name;
    document.getElementById("mobile").value = peoplelist.students[index].mobile;
    document.getElementById("email").value = peoplelist.students[index].email;
    document.getElementById("clgname").value = peoplelist.students[index].clgname;
    document.getElementById("cgpa").value = peoplelist.students[index].cgpa;
    document.getElementById("branch").value = peoplelist.students[index].branch;
    document.getElementById("state").value = peoplelist.students[index].state;
    document.getElementById("city").value = peoplelist.students[index].city;
    document.getElementById("zip").value = peoplelist.students[index].zip;
    document.getElementById("date").value = peoplelist.students[index].date;

    document.querySelector("#Update").onclick = function(){
        if(validateRow() == true)
        {
            peoplelist[index].name = document.getElementById("name").value;
            peoplelist[index].mobile = document.getElementById("mobile").value;
            peoplelist[index].email = document.getElementById("email").value;
            peoplelist[index].clgname = document.getElementById("clgname").value;
            peoplelist[index].cgpa = document.getElementById("cgpa").value;
            peoplelist[index].branch = document.getElementById("branch").value;
            peoplelist[index].state = document.getElementById("state").value;
            peoplelist[index].city = document.getElementById("city").value;
            peoplelist[index].zip = document.getElementById("zip").value;
            peoplelist[index].date = document.getElementById("date").value;

            localStorage.setItem("studentData",JSON.stringify(peoplelist));
            validateRow();

            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("clgname").value = "";
            document.getElementById("cgpa").value = "";
            document.getElementById("branch").value = "";
            document.getElementById("state").value = "";
            document.getElementById("city").value = "";
            document.getElementById("zip").value = "";
            document.getElementById("date").value = "";
            
            document.getElementById("submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        
        }
    }
}





// function showData() {
//     var list;
//     if (localStorage.getItem("list") == null) {
//         list = [];
//     }
//     else {
//         list = JSON.parse(localStorage.getItem("list"));
//     }
//     var html = "";

//     list.foreach(function (element, index) {
//         html += "<tr>";
//         html += "<td>" + element.name + "</td>";
//         html += "<td>" + element.mobile + "</td>";
//         html += "<td>" + element.email + "</td>";
//         html += "<td>" + element.clgname + "</td>";
//         html += "<td>" + element.cgpa + "</td>";
//         html += "<td>" + element.branch + "</td>";
//         html += "<td>" + element.state + "</td>";
//         html += "<td>" + element.city + "</td>";
//         html += "<td>" + element.zip + "</td>";
//         html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-danger">Edit</button></td>';
//         html += "</tr>";
//     });
//     document.querySelector("#crudTable tbody").innerHTML = html;
// }

// document.onload = showData();


// function validateRow(){

// }