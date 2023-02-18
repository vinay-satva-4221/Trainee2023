// document.cookie="username=soham";
var id = 0;
var studentsdetails = [];
const CityData = '{"Cities":[' +
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
$(document).ready(function () {
    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States, function (i, option) {
        $("#state").append($('<option></option>').val(option.Id).html(option.Name));
    })
    $("#state").change(function () {
        var CityJsonData = JSON.parse(CityData);
        $("#city").html('');
        $.each(CityJsonData.Cities, function (i, option) {
            if ($("#state").val() == option.StateId) {
                $("#city").append($('<option></option>').val(option.Id).html(option.Name));
            }
        })
    });
});

$("#table").hide();
$("#carouselExampleControls").hide();
$("#slider").click(function () {
    $("#carouselExampleControls").toggle("show");
});
// function validatecheck() {

//     if (!validatename() && !validatemobile() && !validateemail() && !validatezip() && !validatecgpa() && !validatecollegename() && !validatebranchname() && !validatestate()) {
        
//         $(document).ready(function () {
//             $("#btn_add").click(function () {
//                 swal({
//                     title: "Missing fields",
//                     text: "Please enter all details",
//                     icon: "warning",
//                     button: "Ok"
//                 });
//             });
//         });
//     } else {
//         return validateall();
//     }
// }


// function hide(){

//     var h = document.getElementById("mytable"); 
//     h.classList.remove("hide");
// }
// function hide1(){
//     var h = document.getElementById("hide1"); 
//     h.classList.remove("hide");
// }
// function hideexp(){
//     var h = document.getElementById("hide1"); 
//     h.classList.remove("hide");
// }
// var saveclass = null;

// function saveTheme(cookieValue)
// {
//     var sel = document.getElementById('color');

//     saveclass = saveclass ? saveclass : document.body.className;
//     document.body.className = saveclass + ' ' + sel.value;

//     setCookie('color', cookieValue, 365);


// }

// function setCookie(cookieName, cookieValue, nDays) {
//     var today = new Date();
//     var expire = new Date();

//     if (nDays==null || nDays==0)
//         nDays=1;

//     expire.setTime(today.getTime() + 3600000*24*nDays);
//     document.cookie = cookieName+"="+(cookieValue) + ";expires="+expire.toGMTString();
// }


// function init(){
//     if(studentsdetails.length > 0){
//         studentsdetails = JSON.parse(localStorage.StudentDetails);
//         console.log(studentsdetails)
//         for (var i=0; i < studentsdetails.length; i++){
//             console.log(i);

//             prepareTableCell(i, stuObj.name,stuObj.mobile,stuObj.email,stuObj.cname, stuObj.cgpa, stuObj.bname, stuObj.state, stuObj.city,stuObj.zip,stuObj.studied,stuObj.color)
//         }
//     }
// }

function showdata()
{
    debugger
    var details;
    if(localStorage.getItem("details")==null){
    details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }
    var store=""
        details.forEach(function(element,index)
        {
            store +="<tr>";
            store+="<td>"+element.name+"</td>";
            store+="<td>"+element.mobile+"</td>";
            store+="<td>"+element.email+"</td>";
            store+="<td>"+element.cname+"</td>";
            store+="<td>"+element.cgpa+"</td>";
            store+="<td>"+element.bname+"</td>";
            store+="<td>"+element.state+"</td>";
            store+="<td>"+element.city+"</td>";
            store+="<td>"+element.zip+"</td>";
            store+="<td>"+element.studied+"</td>";
            store+="<td>"+element.color+"</td>";


            store+='<td><button type="button" onclick="deleteItem('+index+')">delete</button></td>';
            store+='<td><button type="button" onclick="editItem('+index+')">edit</button></td>';

            store+="</tr>";
        });
        document.querySelector("#mytable tbody").innerHTML=store;

}

function validatecheck()
{
   
    var name=document.getElementById("name").value ;
  
     var mobile=document.getElementById("mobile").value ;
     var email=document.getElementById("email").value ;
     var cname=document.getElementById("cname").value ;
     var cgpa=document.getElementById("cgpa").value ;
     var bname=document.getElementById("bname").value ;
     var state=document.getElementById("state").value ;
     var city=document.getElementById("city").value ;
     var zip=document.getElementById("zip").value ;
     var studied=document.getElementById("studied").value ;
     var color=document.getElementById("color").value ;


    var details;
    if(localStorage.getItem("details")==null){
    details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }
    details.push({
        name:name,
        mobile:mobile,
        email:email,
        cname:cname,
        cgpa:cgpa,
        bname:bname,
        state:state,
        city:city,
        zip:zip,
        studied:studied,
        color:color


    });
    localStorage.setItem("details",JSON.stringify(details));
    showdata(); 

     document.cookie=id+"="+$("#color").val();



}
function deleteItem(index)
{
    var details;
        if(localStorage.getItem("details")==null){
        details=[];
        }
        else{
            details=JSON.parse(localStorage.getItem("details"));
        }

        details.splice(index,1);
        // 1=itemremove at position of index
             localStorage.setItem("details",JSON.stringify(details));
             showdata();
}

function editItem(index)
{
    debugger
    // document.getElementById("btn2").style.display="none";
    document.getElementById("btn2").innerHTML = "Update Row";


    var details;
        if(localStorage.getItem("details")==null){
        details=[];
        }
        else{
            details=JSON.parse(localStorage.getItem("details"));
        }

        document.getElementById("name").value=  details[index].name;
        document.getElementById("mobile").value=  details[index].mobile;
        document.getElementById("email").value=  details[index].email;
        document.getElementById("cname").value=  details[index].cname;
        document.getElementById("cgpa").value=  details[index].cgpa;
        document.getElementById("bname").value=  details[index].bname;
        document.getElementById("state").value=  details[index].state;
        document.getElementById("city").value=  details[index].city;
        document.getElementById("zip").value=  details[index].zip;
        document.getElementById("studied").value=  details[index].studied;
        document.getElementById("color").value=  details[index].color;


      

        document.querySelector("#btn2").onclick=function()
        {
            details[index].name=document.getElementById("name").value;
            details[index].mobile=document.getElementById("mobile").value;
            details[index].email=document.getElementById("email").value;
            details[index].cname=document.getElementById("cname").value;
            details[index].cgpa=document.getElementById("cgpa").value;
            details[index].bname=document.getElementById("bname").value;
            details[index].state=document.getElementById("state").value;
            details[index].city=document.getElementById("city").value;
            details[index].zip=document.getElementById("zip").value;
            details[index].studied=document.getElementById("studied").value;
            details[index].color=document.getElementById("color").value;


            localStorage.setItem("details",JSON.stringify(details));
            showdata();


            // document.getElementById("btn2").style.display="block";
        }
}

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
    let setzip = /^(\d)(?!\1{5})\d{5}$/;

    let zip = document.getElementById("zip").value;
    let msgzip = document.getElementById("invalid_msg2");
    if (!setzip.test(zip)) {
        msgzip.innerHTML = "*Only 6 digits are allowed and repeated number is not valid";
        msgzip.style.color = "red";
        document.getElementById("invalid_msg2").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg2").style.display = "none";
        return true;
    }
}


function validatecgpa() {
    let setcgpa = /^(10|\d)(\.\d{1,2})?$/;
    let cgpa = document.getElementById("cgpa").value;
    let msgcgpa = document.getElementById("invalid_cgpa");
    if (!setcgpa.test(cgpa)) {
        msgcgpa.innerHTML = "*Only 1 to 10 are allowed with decimal";
        msgcgpa.style.color = "red";
        document.getElementById("invalid_cgpa").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_cgpa").style.display = "none";
        return true;
    }
}

function validatecollegename() {
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

function validatebranchname() {
    var branch = document.getElementById("bname");
    let msg = document.getElementById("invalid_bname");

    if (branch.value == "") {
        document.getElementById("invalid_bname").innerHTML = "please select branch field";
        msg.style.color = "red";
        document.getElementById("invalid_bname").style.display = "unset";
        // document.getElementById("bname").focus();
        return false;
    }
    else {
        document.getElementById("invalid_bname").style.display = "none";
        return true;
    }
}


function validatestate() {

    let state = document.getElementById("state");
    let msg = document.getElementById("invalid_state");

    if (state.value == "") {
        document.getElementById("invalid_state").innerHTML = "*Please select any State..";
        msg.style.color = "red";
        document.getElementById("invalid_state").style.display = "unset";

        return false;
    }
    else {
        document.getElementById("invalid_state").style.display = "none";
        return true;
    }
}




// function Export(type, fn, dl) {
//     var elt = document.getElementById('mytable');
//     var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
//     return dl ?
//         XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
//         XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
// }

//Date Picker
$(function () {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#studied').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#studied').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});
