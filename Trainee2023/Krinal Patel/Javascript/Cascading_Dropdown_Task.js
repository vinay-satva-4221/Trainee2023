var id = 0;
// Check if any field is empty
function validatecheck() {
    if (!validateemail() && !validatename() && !validatemobile() && !validatezip()  && !validatecgpa() && !validatecname() ) {

        return false;


    } else {
        return true;
    }
}
function init(){
    if(studentsArray.length > 0){
        // studentsArray = JSON.parse(localStorage.StudentDetails);
        console.log(studentsArray)
        for (var i=0; i < studentsArray.length; i++){
            console.log(i);

            prepareTableCell(i, stuObj.name,stuObj.mobile,stuObj.email,stuObj.cname, stuObj.cgpa, stuObj.bname, stuObj.state, stuObj.city,stuObj.zip,stuObj.studied)
        }

    }
}

var studentsArray = [];
        
function validateallow() {

    var isValid = validatecheck()       

    // if(isValid){
  
            // var i = studentsArray[i];
            var name = $("#name").val();
            var mobile = $("#mobile").val();
            var email = $("#email").val();
            var cname = $("#cname").val();
            var cgpa = $("#cgpa").val();
            var bname = $("#bname").val();
            var state = $("#state").val();
            var city = $("#city").val();
            var zip = $("#zip").val();
            var studied = $("#studied").val();


            id ++;
            var stuObj = {id:id, name: name, mobile: mobile, email: email, cname: cname, cgpa: cgpa,bname: bname, state: state, city: city, zip:zip, studied: studied}
            studentsArray.push(stuObj);

            localStorage.setItem( 'StudentDetails', JSON.stringify(studentsArray));

            // init() ;
            prepareTableCell(id, stuObj.name,stuObj.mobile,stuObj.email,stuObj.cname, stuObj.cgpa, stuObj.bname, stuObj.state, stuObj.city,stuObj.zip,stuObj.studied)

            // prepareTableCell(i, name, mobile, email, cname, cgpa, bname, state, city, zip, studied);

            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("cname").value = "";
            document.getElementById("cgpa").value = "";
            document.getElementById("bname").value = "";
            document.getElementById("state").value = "";
            document.getElementById("city").value = "";
            document.getElementById("zip").value = "";
            document.getElementById("studied").value = "";


           


            // swal({
            //     title: "Student",
            //     text: "Student Detail Added successfully",
            //     icon: "success",
            //     button: "Ok"
            // });
        // }else{
        // }
                   
        //console.log(States.firstName);

    }
    function prepareTableCell(index, name, mobile, email, cname, cgpa, bname, state, city, zip,  studied) {
        var index= index
        console.log('index', index)
        var table = document.getElementById("mytable");
        var row = table.insertRow();

        var i = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var mobileCell = row.insertCell(2);
        var emailCell = row.insertCell(3);
        var cnameCell = row.insertCell(4);
        var cgpaCell = row.insertCell(5);
        var bnameCell = row.insertCell(6);
        var stateCell = row.insertCell(7);
        var cityCell = row.insertCell(8);
        var zipCell = row.insertCell(9);
        var studiedCell = row.insertCell(10);
        var editCell = row.insertCell(11);
        var deleteCell = row.insertCell(12);



        i.innerHTML = i;
        nameCell.innerHTML=name;
        mobileCell.innerHTML=mobile;
        emailCell.innerHTML=email;
        cnameCell.innerHTML=cname;
        cgpaCell.innerHTML=cgpa;
        bnameCell.innerHTML=bname;
        stateCell.innerHTML=state;
        cityCell.innerHTML=city;
        zipCell.innerHTML=zip;
        studiedCell.innerHTML=studied;
        editCell.innerHTML= '<button class="btn btn-dark">Edit</button>';
        deleteCell.innerHTML= '<button class="btn btn-danger" onclick="deleteTableRow('+index+')">Delete</button>';

        
    }
    function deleteTableRow(index){
        var table = document.getElementById("mytable");
        console.log(index, studentsArray)
        var currentIndex = studentsArray.findIndex(x=> x.id == index)
        console.log('currentIndex', currentIndex);
        table.deleteRow(currentIndex + 1);
        studentsArray.splice(currentIndex, 1);
        
        
        // console.log(studentsArray)
        localStorage.setItem('StudentDetails', JSON.stringify(studentsArray));
            // init();
    }
    //  else {

    //     $(document).ready(function () {

    //         $("#btn1").click(function () {
    //             swal("Please fill all details");
    //         });
    //     });
    // }





//Date picker and age validation 

$(function () {
    $('input[name="studied"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') );
    });
});

//Fade img

$("#fadetoggle_btn").click(function () {
    $(".fades").fadeToggle(1000);
});


//Javascript Validations
function validatename() {
    let setname = /^[a-zA-Z]+$/;
    let name = document.getElementById("name").value;
    let msgname = document.getElementById("invalid_msg");
    if (!setname.test(name)) {
        msgname.innerHTML = "*Please enter a characters only..";
        msgname.style.color = "red";
        document.getElementById("invalid_msg").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg").style.display = "none";
        return true;
    }
}



function validatemobile() {
    let setmobile = /^[0-9]{10}$/;
    let mobile = document.getElementById("mobile").value;
    let msgmobile = document.getElementById("invalid_msg1");
    if (!setmobile.test(mobile)) {
        msgmobile.innerHTML = "*Please enter 10 digits..";
        msgmobile.style.color = "red";
        document.getElementById("invalid_msg1").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg1").style.display = "none";
        return true;
    }
}

function validateemail() {
    let setemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById("email").value;
    let msgemail = document.getElementById("invalid_email");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "*Please enter @ and .com";
        msgemail.style.color = "red";
        document.getElementById("invalid_email").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_email").style.display = "none";
        return true;
    }
}

function validatezip() {
    let setzip = /^\d{6}$/;
    let zip = document.getElementById("zip").value;
    let msgzip = document.getElementById("invalid_msg2");
    if (!setzip.test(zip)) {
        msgzip.innerHTML = "*Only 6 digits are allowed";
        msgzip.style.color = "red";
        document.getElementById("invalid_msg2").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg2").style.display = "none";
        return true;
    }
}

function validatecgpa() {
    let setcgpa = /^(?:[1-9]|0[1-9]|10)$/;
    let cgpa = document.getElementById("cgpa").value;
    let msgcgpa = document.getElementById("invalid_cgpa");
    if (!setcgpa.test(cgpa)) {
        msgcgpa.innerHTML = "*Only 1 to 10 are allowed";
        msgcgpa.style.color = "red";
        document.getElementById("invalid_cgpa").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_cgpa").style.display = "none";
        return true;
    }
}

function validatecname() {
    let setcname = /^[a-zA-Z]+$/;
    let cname = document.getElementById("cname").value;
    let msgcname = document.getElementById("invalid_cname");
    if (!setcname.test(cname)) {
        msgcname.innerHTML = "*Please enter a characters only..";
        msgcname.style.color = "red";
        document.getElementById("invalid_cname").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_cname").style.display = "none";
        return true;
    }
}

function validatebname() {
    let bname = document.getElementById("bname");
     let msg=document.getElementById("invalid_bname");

    if (bname.value == "") {
        document.getElementById("invalid_bname").innerHTML = "*Please select any Branch..";
        msg.style.color = "red";
        document.getElementById("invalid_bname").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_bname").style.display = "none";
        return true;
    }
}


function validatestate() {
    let state = document.getElementById("State");
     let msg=document.getElementById("invalid_state");

    if (state.value == "") {
        document.getElementById("invalid_state").innerHTML = "*Please select any State..";
        msg.style.color = "red";
        document.getElementById("invalid_state").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_state").style.display = "none";
        return true;
    }
}





//Cascading Dropdown 
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
// let test = {
//     "Cities" : [
//         {
//             "StateId": 1,
//             "Id": 1,
//             "Name": "Indore"
//         },
//         {

//         },
//         {

//         },
//     ]
// }
const StateData = '{"States":['+
'{"Id":"Madhya Pradesh","Name":"Madhya Pradesh"},' +
'{"Id":"Rajasthan","Name":"Rajasthan"},' +
'{"Id":"Gujarat","Name":"Gujarat"},' +                    
'{"Id":"Punjab","Name":"Punjab"}]}';

//StateData.States[0].Id
//const test = {States:[{"fds":1,"fdsf":1}]}
//{States:[{"fds":1,"fdsf":1}]}

// getAllRecords(){
    //  localStorage.getItem('studentDetails')
// }
$(document).ready(function(){

    // getAllRecords()
//createCookie("test","t65565",7);
//document.cookie="test=1201";

var StateJsonData = JSON.parse(StateData);
$.each(StateJsonData.States,function(i,option){
$("#state").append($('<option></option>').val(option.Id).html(option.Name));
})

$("#state").change(function(){
var CityJsonData = JSON.parse(CityData);
$("#city").html('');
$.each(CityJsonData.Citys,function(i,option){
if($("#state").val() == option.StateId){
$("#city").append($('<option></option>').val(option.Id).html(option.Name));
}
})

});
});
