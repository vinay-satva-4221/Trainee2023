
var id = 0;
var studentsArray = [];

function validatecheck(){
    debugger;


    
    if ( !validatename() || !validatemobile() || !validatezip()) {
        $('#myModal').modal('show')
  
               
                swal({
                    title: "Missing fields",
                    text: "Please enter all details",
                    icon: "warning",
                    button: "Ok"
                });
               
      
    
    } else {                       
        $('#myModal').modal('hide')

            return validateallow();      
            

    }

    
   
}

    

// function modaloc(){
//     var isValid = validatecheck()


//     if (isValid) {
//         $('#myModal').modal('hide')
    
    
//     } else {
//         $('#myModal').modal('show'); 
    
//     }
    
// }







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
    let mobile = document.getElementById("phone").value;
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

//Cascading Dropdown 

const CityData = {
    "Cities" : [
        {
            "StateId": 1,
            "Id": 1,
            "Name": "Indore"
        },
        {
            "StateId": 1,
            "Id": 2,
            "Name": "Bhopal"
        },
        {
            "StateId": 2,
            "Id": 3,
            "Name": "Sirohi"
        },
        {
            "StateId": 2,
            "Id": 4,
            "Name": "Udaipur"
        },
        {
            "StateId": 2,
            "Id": 5,
            "Name": "Jaisalmer"
        },
        {
            "StateId": 3,
            "Id": 6,
            "Name": "Ahmedabad"
        },
        {
            "StateId": 3,
            "Id": 7,
            "Name": "Vadodara"
        },
        {
            "StateId": 3,
            "Id": 8,
            "Name": "Surat"
        },
        {
            "StateId": 4,
            "Id": 9,
            "Name": "Ludhiana"
        },
        {
            "StateId": 4,
            "Id": 10,
            "Name": "Amritsar"
        },
        {
            "StateId": 4,
            "Id": 11,
            "Name": "Patiala"
        }
    ]
}

const StateData = {
    "States" : [
        {
            "Id" : 1,
            "Name": "Madhya Pradesh"
        },
        {
            "Id" : 2,
            "Name": "Rajasthan"
        },
        {
            "Id" : 3,
            "Name": "Gujarat"
        },
        {
            "Id" : 4,
            "Name": "Punjab"
        }
    ]
}



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



   
function validateallow() {

    var name = $("#name").val();
    var phone = $("#phone").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var zip = $("#zip").val();
   

    id ++;
    var stuObj = {id:id, name: name, phone:phone, state: state, city: city, zip:zip}

        studentsArray.push(stuObj);
        localStorage.setItem( 'StudentDetails', JSON.stringify(studentsArray));

    prepareTableCell(id, stuObj.name,stuObj.phone,stuObj.state, stuObj.city,stuObj.zip)

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip").value = "";

}

//Table insert data
function prepareTableCell(index, name, phone, state, city, zip) {
var index= index
console.log('index', index)
var table = document.getElementById("mytable");
var row = table.insertRow();
var currentIndex = studentsArray.findIndex(x=> x.id == index)

var srCell = row.insertCell(0);
var nameCell = row.insertCell(1);
var phoneCell = row.insertCell(2);
var stateCell = row.insertCell(7);
var cityCell = row.insertCell(8);
var zipCell = row.insertCell(9);


srCell.innerHTML = currentIndex+1;
nameCell.innerHTML=name;
phoneCell.innerHTML=phone;
stateCell.innerHTML=state;
cityCell.innerHTML=city;
zipCell.innerHTML=zip;


}

