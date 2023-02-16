var id = 0;
var studentsArray = [];

function delcookie(){
    debugger;
    // document.cookie = "id; expires=Mon, 13 Feb 2023 12:00:00 UTC;";
    document.cookie=id+";max-age=0";  
    alert("Cookie deleted success");
}

function getCookie(id) {

        let name = id+"=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            
          }
        }
        return "";
      }

// || !validatemobile() || !validateemail() || !validatezip() || !validatecgpa() || !validatecname() || !validatebname() 
 // Check if any field is empty
function validatecheck(){
    
    if ( !validatename()   ) {
           
        
        $(document).ready(function () {
    
            $("#btn1").click(function () {
               
                swal({
                    title: "Missing fields",
                    text: "Please enter all details",
                    icon: "warning",
                    button: "Ok"
                });
            });
        });
      
        
    } else {        

            return validateallow(),hide(),hide1(),hideexp();

    }
}


function hide(){
    
    var h = document.getElementById("mytable"); 
    h.classList.remove("hide");
}
function hide1(){
    var h = document.getElementById("hide1"); 
    h.classList.remove("hide");
}
function hideexp(){

    document.getElementById("btn2").style.display ='inline';
}
function showSave(){
    document.getElementById("btn3").style.display ='inline';
}



function init(){
    if(studentsArray.length > 0){
        studentsArray = JSON.parse(localStorage.StudentDetails);
        console.log(studentsArray)
        for (var i=0; i < studentsArray.length; i++){
            console.log(i);

            prepareTableCell(i, stuObj.name,stuObj.mobile,stuObj.email,stuObj.cname, stuObj.cgpa, stuObj.bname, stuObj.state, stuObj.city,stuObj.zip,stuObj.studied)
        }

    }

}
        
function validateallow() {
    

debugger;

// var xt = document.getElementById("mytable").rows.length; //1

// if (xt == 1) {
   
//     var id=0;

// }

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
            var color = $("#color").val();

            id ++;
            var stuObj = {id:id, name: name, mobile: mobile, email: email, cname: cname, cgpa: cgpa,bname: bname, state: state, city: city, zip:zip, studied: studied,color: color}

            
                studentsArray.push(stuObj);

                //set cookie
                document.cookie=id+"="+$("#color").val();

                var cookie=document.cookie;
                  

                  
            localStorage.setItem( 'StudentDetails', JSON.stringify(studentsArray));

            // init() ;
            prepareTableCell(id, stuObj.name,stuObj.mobile,stuObj.email,stuObj.cname, stuObj.cgpa, stuObj.bname, stuObj.state, stuObj.city,stuObj.zip,stuObj.studied, stuObj.color)

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
            document.getElementById("color").value = ""; 

            
        
}




// function getCookie(color) {
//     let name = color + "=";

//     for(let i = 0; i <name.length; i++) {
//       let c = name[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);

//       }
//     }
//     return "";
//   }

    //Table insert data
    function prepareTableCell(index, name, mobile, email, cname, cgpa, bname, state, city, zip,  studied,color) {
       debugger;
       
        var index= index;
       

        console.log('index', index)
        var table = document.getElementById("mytable");
        var row = table.insertRow();    
        var currentIndex = studentsArray.findIndex(x=> x.id == index);

        var srCell = row.insertCell(0);
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
        var colorCell = row.insertCell(11);
        var editCell = row.insertCell(12);
        var deleteCell = row.insertCell(13);

        srCell.innerHTML = currentIndex+1;
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
        colorCell.innerHTML=color;
        editCell.innerHTML= '<button class="btn btn-dark" onclick="editTableRow(this)">Edit</button>';
        deleteCell.innerHTML= '<button class="btn btn-danger" onclick="deleteTableRow('+index+')">Delete</button>';   
        //Color
debugger;
        
        //get cookie

        let x = getCookie(index);

console.log("cookie:",x)

        // let x = document.cookie;
        // let part = x.slice(2);  
        // console.log("Slice",part);

        //red
        
        
        

        var selectElement = document.querySelector('#color');
        var output = selectElement.value;
        console.log("Local",output);
       

        if(x=="Green" && output=="Green"){
 
                row.style.backgroundColor ='lightgreen';
                document.getElementById("con").style.backgroundColor ='lightgreen';


        }else if(x=="Red" && output=="Red"){
            row.style.backgroundColor ='lightcoral';
            document.getElementById("con").style.backgroundColor ='lightcoral';


        }
        else if(x=="Blue" && output=="Blue"){
            row.style.backgroundColor ='lightblue';
            document.getElementById("con").style.backgroundColor ='lightblue';

        }
        else if(x=="Yellow" && output=="Yellow"){
            row.style.backgroundColor ='yellow';
            document.getElementById("con").style.backgroundColor ='yellow';

        }
        else{
            alert("Please select any color !!");
        }


        // y=document.cookie.valueOf();
        // console.log(y);
        // document.cookie = "color=blue";

        $(document).ready(function(){
            $("#btn1").click(function(){
                swal({
                    title:"Record Added!",
                    text:"You entered a record!",
                    icon:"success",
                    button:"Done..."
                });
            });
    })
}


    //Delete Row
    function deleteTableRow(index){
        debugger;   var table = document.getElementById("mytable");
        console.log(index, studentsArray)
        var currentIndex = studentsArray.findIndex(x=> x.id == index)
        console.log('currentIndex', currentIndex);
        table.deleteRow(currentIndex + 1);
        studentsArray.splice(currentIndex, 1);
    
        localStorage.setItem('StudentDetails', JSON.stringify(studentsArray));
        
        if(currentIndex==0){
            document.getElementById("btn2").style.display ='none';

              }
        else{
            document.getElementById("btn2").style.display ='inline';
        }

        var xt = document.getElementById("mytable").rows.length; //1

        if (xt == 1) {
            document.getElementById("con").style.backgroundColor ='unset';

            // document.getElementById("tabCont").style.visibility = "hidden";

  }

        var alast = $("#mytable").find("tr").last().find("td:nth-child(12)").text();
        console.log(alast)
        if(alast=="Blue"){
            document.getElementById("con").style.backgroundColor ='lightblue';
        }
        else if(alast=="Green"){
            document.getElementById("con").style.backgroundColor ='lightgreen';
        }
        else if(alast=="Red"){
            document.getElementById("con").style.backgroundColor ='lightcoral';
        }
        else if(alast=="Yellow"){
            document.getElementById("con").style.backgroundColor ='yellow';
        }
        else{
            document.getElementById("con").style.backgroundColor ='unset';
        }

        swal({
            title: "Record deleted",
            text: "Student Detail Deleted successfully",
            icon: "success",
            button: "Ok"
        });

        
    //     var lastRowIndex = table.rows.length-1;
    //     alert(lastRowIndex);

    //     var lastind = document.getElementById("color")

    }

     //Edit Row
      
    function editTableRow(td){

        SelectedRow = td.parentElement.parentElement;

        document.getElementById("name").value = SelectedRow.cells[1].innerHTML;
        document.getElementById("mobile").value = SelectedRow.cells[2].innerHTML;
        document.getElementById("email").value =  SelectedRow.cells[3].innerHTML;
        document.getElementById("cname").value =  SelectedRow.cells[4].innerHTML;
        document.getElementById("cgpa").value =  SelectedRow.cells[5].innerHTML;
        document.getElementById("bname").value =  SelectedRow.cells[6].innerHTML;
        document.getElementById("state").value =  SelectedRow.cells[7].innerHTML;
        document.getElementById("city").value =  SelectedRow.cells[8].innerHTML;
        document.getElementById("zip").value =  SelectedRow.cells[9].innerHTML;
        document.getElementById("studied").value =  SelectedRow.cells[10].innerHTML;
        // document.getElementById("btn2").innerHTML = "Update Row";
        showSave();
        localStorage.setItem('StudentDetails', JSON.stringify(studentsArray));

}

    
    //Update Row
      
    function updateTableRow(formData){

        debugger;
      
        var formData = readFormData();
        debugger;

    SelectedRow.cells[1].innerHTML = formData.name;
    SelectedRow.cells[2].innerHTML = formData.mobile;
    SelectedRow.cells[3].innerHTML = formData.email;
    SelectedRow.cells[4].innerHTML = formData.cname;
    SelectedRow.cells[5].innerHTML = formData.cgpa;
    SelectedRow.cells[6].innerHTML = formData.bname;
    SelectedRow.cells[7].innerHTML = formData.state;
    SelectedRow.cells[8].innerHTML = formData.city;
    SelectedRow.cells[9].innerHTML = formData.zip;
    SelectedRow.cells[10].innerHTML = formData.studied;
    SelectedRow.cells[11].innerHTML = formData.color;

          //Color
debugger;
        
                //set cookie
    document.cookie=id+"="+$("#color").val();

//get cookie

let x = getCookie(id);

// let x = document.cookie;
// let part = x.slice(6);  
// console.log("Slice",part);

//red



//Get from Local storage
var selectElement = document.querySelector('#color');
var output = selectElement.value;
console.log("Local",output);


if(x=="Green" && output=="Green"){


        SelectedRow.style.backgroundColor ='lightgreen';
        document.getElementById("con").style.backgroundColor ='lightgreen';


}else if(x=="Red" && output=="Red"){
    SelectedRow.style.backgroundColor ='lightcoral';
    document.getElementById("con").style.backgroundColor ='lightcoral';


}
else if(x=="Blue" && output=="Blue"){
    SelectedRow.style.backgroundColor ='lightblue';
    document.getElementById("con").style.backgroundColor ='lightblue';

}
else if(x=="Yellow" && output=="Yellow"){
    SelectedRow .style.backgroundColor ='yellow';
    document.getElementById("con").style.backgroundColor ='yellow';

}
else{

}
    }

    function readFormData() {

       var formData = {};
        formData["name"] = document.getElementById("name").value;
        formData["mobile"] = document.getElementById("mobile").value;
        formData["email"] = document.getElementById("email").value;
        formData["cname"] = document.getElementById("cname").value;
        formData["cgpa"] = document.getElementById("cgpa").value;
        formData["bname"] = document.getElementById("bname").value;
        formData["state"] = document.getElementById("state").value;
        formData["city"] = document.getElementById("city").value;
        formData["zip"] = document.getElementById("zip").value;
        formData["studied"] = document.getElementById("studied").value;
        formData["color"] = document.getElementById("color").value;
        

        return formData;
    }
    
   

//Date Picker
$(function() {

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
    let setzip = /^(\d)(?!\1{5})\d{5}$/;

    let zip = document.getElementById("zip").value;
    let msgzip = document.getElementById("invalid_msg2");
    if (!setzip.test(zip)) {
        msgzip.innerHTML = "*Only 6 digits are allowed and all numbers repeated is invalid";
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

const CityData = '{"Cities":['+
'{"StateId":"1","Id":"1","Name":"Indore"},' +
'{"StateId":"1","Id":"2","Name":"Bhopal"},' +
'{"StateId":"2","Id":"3","Name":"Sirohi"},' +
'{"StateId":"2","Id":"4","Name":"Udaipur"},' +
'{"StateId":"2","Id":"5","Name":"Jaisalmer"},' +
'{"StateId":"3","Id":"6","Name":"Ahmedabad"},' +
'{"StateId":"3","Id":"7","Name":"Vadodara"},' +
'{"StateId":"3","Id":"8","Name":"Surat"},' +
'{"StateId":"4","Id":"9","Name":"Ludhiana"},' +
'{"StateId":"4","Id":"10","Name":"Amritsar"},' +
'{"StateId":"4","Id":"11","Name":"Patiala"}]}';

const StateData = '{"States":['+
'{"Id":"1","Name":"Madhya Pradesh"},' +
'{"Id":"2","Name":"Rajasthan"},' +
'{"Id":"3","Name":"Gujarat"},' +                    
'{"Id":"4","Name":"Punjab"}]}';

$(document).ready(function(){

    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States,function(i,option){
        $("#state").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#state").change(function(){
        var CityJsonData = JSON.parse(CityData);
        $("#city").html('');
        $.each(CityJsonData.Cities,function(i,option){
            if($("#state").val() == option.StateId){
                $("#city").append($('<option></option>').val(option.Id).html(option.Name));
            }
    })

    });
});


function exportTableToExcel(tableSelect, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById("mytable");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'Employee.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}