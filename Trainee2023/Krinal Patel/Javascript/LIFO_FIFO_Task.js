
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
            return addData(),hide(),hide1();

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
// debugger;
const cityList = [
    { State: "MadhyaPradesh", CityName: "Indore" },
    { State: "MadhyaPradesh", CityName: "Bhopal" },
    { State: 'MadhyaPradesh', CityName: "Sirohi" },
    { State: 'Gujrat', CityName: "Unjha" },
    { State: 'Gujrat', CityName: "Mehsana" },
    { State: 'Gujrat', CityName: "Palanpur" },
    { State: 'Gujrat', CityName: "Sidhpur" },
    { State: 'Punjab', CityName: "Ludhiana" },
    { State: 'Punjab', CityName: "Amritsar" },
    { State: 'Punjab', CityName: "Patiala" },
    { State: 'Rajasthan', CityName: "Udaipur" },
    { State: 'Rajasthan', CityName: "Sirohi" },
    { State: 'Rajasthan', CityName: "Jaisalmer" }
]
// jquery started
$(document).ready(function () {
    

    $("#State").change(function () {
        $("#City").html("<option selected disabled value=''>Choose...</option>");
        let citys = cityList.filter(e => e.State == $("#State").val());

        citys.forEach(e => {
            const option = "<option val='" + e.CityName + "'> " + e.CityName + "</option>";
            $("#City").append(option);
        })
    })
});


function showData() {
    var studentDetails;

    if (localStorage.getItem("studentDetails") == null) {
        studentDetails = [];
    }
    else {
        studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
    }

    var html = "";

    studentDetails.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + (index+1)+ "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.State + "</td>";
        html += "<td>" + element.City + "</td>";
        html += "<td>" + element.zip + "</td>";    
        

    document.getElementById("tbody").innerHTML = html;
    });


}

function addData() {

    var name = document.getElementById("name").value
    var State = document.getElementById("State").value
    var City = document.getElementById("City").value
    var zip = document.getElementById("zip").value

    var studentDetails;

    var lifo = document.getElementById("lifo").checked;
    var fifo = document.getElementById("fifo").checked;

    if (localStorage.getItem("studentDetails") == null) {
        studentDetails = [];
    }
    else {
        studentDetails = JSON.parse(localStorage.getItem("studentDetails"));

        if(studentDetails.length < 5 && lifo == true){
            if(studentDetails.length < 5){
                studentDetails.push({
                    name: name,
                    State: State,
                    City: City,
                    zip: zip
                })
            }
        }
        else if(studentDetails.length >= 5 && lifo == true){
            studentDetails.pop();
            studentDetails.push({
                    name: name,
                    State: State,
                    City: City,
                    zip: zip
            })

        }

        if(studentDetails.length < 5 && fifo == true){
            if(studentDetails.length < 5){
                studentDetails.push({
                    name: name,
                    State: State,
                    City: City,
                    zip: zip
                })
            }
        }
        else if(studentDetails.length >= 5 && fifo == true){
            studentDetails.pop();
            studentDetails.unshift({
                name: name,
                    State: State,
                    City: City,
                    zip: zip
            });

        }

    }

    
    localStorage.setItem("studentDetails", JSON.stringify(studentDetails));
    showData();

    document.getElementById("name").value="";
    document.getElementById("State").value="";
    document.getElementById("City").value="";
    document.getElementById("zip").value="";

}