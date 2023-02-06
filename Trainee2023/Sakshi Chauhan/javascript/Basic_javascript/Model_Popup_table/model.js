var cityList = [
    { State: 'Gujarat', city: 'Ahmedabad' },
    { State: 'Gujarat', city: 'Surat' },
    { State: 'Gujarat', city: 'Vadodara' },
    { State: 'Gujarat', city: 'Rajkot' },
    { State: 'Madhya Pradesh', city: 'Indore' },
    { State: 'Madhya Pradesh', city: 'Bhopal' },
    { State: 'Madhya Pradesh', city: 'Jabalpur' },
    { State: 'Madhya Pradesh', city: 'Gwalior' },
    { State: 'Rajasthan', city: 'Jaipur' },
    { State: 'Rajasthan', city: 'Jodhpur' },
    { State: 'Rajasthan', city: 'Bikaner' },
    { State: 'Karnataka', city: 'Mangalore' }, 
    { State: 'Karnataka', city: 'Kalaburagi' }, 
    { State: 'Karnataka', city: 'Mysore' },
    { State: 'Karnataka', city: 'Hubli-Dharwad' }

];
$(document).ready(function(){
    $.validator.addMethod('validfname',
        function(value){
            return /^[a-zA-Z]+$/.test(value)
        }, 
    );
    $.validator.addMethod('validzip',
    function(value){
        return /^[0-9]{6}$/.test(value)
    }, 
    );
    $.validator.addMethod('validnumber',
    function(value){
        return /^[0-9]{10}$/.test(value)
    }, 
    );
    $("#State").change(function () {

        $("#City").html("<option selected disabled>Choose city</option>");
        const citys = cityList.filter(p => p.State == $("#State").val());
        citys.forEach(element => {
            const option = "<option val='" + element.city + "'>" + element.city + "</option>";
            $("#City").append(option);
        });

    });

    $('#form').validate({
        rules:{
            name:{
                required: true,
                validfname: true
            },
            city:{
                required: true
            },
            state:{
                required: true
            },
            zip:{
                required:true,
                validzip: true
            },
            number:{
                required: true,
                validnumber: true
            },
        },
        messages:{
            name:{
                required:"Enter Your Name",
                validfname: "Only Letters"
            },
            city:"Choose City ",
            state: "Choose State",
            zip:{
                required:"Enter Your ZipCode",
                validzip: "Only Numbers"
            },
            number:{
                required:"Enter Your Mobile Number",
                validnumber: "Only Digits"
            },
        },
    });
});
// function addForm()
// { 
//     var addname =  document.one.name.value;
//     var addstate = document.one.state.value;
//     var addcity = document.one.city.value;
//     var addzip = document.one.zip.value;
//     var addnumber = document.one.number.value;

//     var tr = document.createElement('tr');
   
//     var td1 = tr.appendChild(document.createElement('td'));
//     var td2 = tr.appendChild(document.createElement('td'));
//     var td3 = tr.appendChild(document.createElement('td'));
//     var td4 = tr.appendChild(document.createElement('td'));
//     var td5 = tr.appendChild(document.createElement('td'));
    
//     td1.innerHTML = addname;
//     td2.innerHTML = addstate;
//     td3.innerHTML = addcity;
//     td4.innerHTML = addzip;
//     td5.innerHTML = addnumber;
   
//     document.getElementById('myTable').appendChild(tr);
// }

function showData() {
    var peopleList;

    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr class=text-center>";
        html += "<td>" + (index+1)+ "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.State + "</td>";
        html += "<td>" + element.City + "</td>";
        html += "<td>" + element.zip + "</td>";
        html += "<td>" + element.number + "</td>";
        
        html += "</tr>";

    document.getElementById("tbody").innerHTML = html;
    });
}
document.onload = showData();

function addData() {
    var firstName = document.getElementById("name").value;
    var state = document.getElementById("State").value;
    var city = document.getElementById("City").value;
    var zip = document.getElementById("zip").value;
    var number = document.getElementById("number").value;

    var peopleList;

   
    var lifo = document.getElementById('LIFO').checked;
    var fifo = document.getElementById('FIFO').checked;
    console.log(fifo, "fifo")

    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));

        if(peopleList.length < 5 && lifo == true){
            if(peopleList.length < 5){
                peopleList.push({
                    "name": firstName,
                    "State": state,
                    "City": city,
                    "zip": zip,
                    "number": number,
                })
            }
        }
        else if(peopleList.length >= 5 && lifo == true){
            peopleList.pop();
            peopleList.push({
                "name": firstName,
                "State": state,
                "City": city,
                "zip": zip,
                "number": number,
            })

        }

        if(peopleList.length < 5 && fifo == true){
            if(peopleList.length < 5){
                peopleList.push({
                    "name": firstName,
                    "State": state,
                    "City": city,
                    "zip": zip,
                    "number": number,
                })
            }
        }
        else if(peopleList.length >= 5 && fifo == true){
            peopleList.pop();
            peopleList.unshift({
                "name": firstName,
                    "State": state,
                    "City": city,
                    "zip": zip,
                    "number": number,
            });

        }

    }

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();

    document.getElementById("name").value="";
    document.getElementById("State").value="";
    document.getElementById("City").value="";
    document.getElementById("zip").value="";
    document.getElementById("number").value="";

}
function lifo(){
    var lifo = document.getElementById('LIFO').checked;
    console.log(lifo);
}



