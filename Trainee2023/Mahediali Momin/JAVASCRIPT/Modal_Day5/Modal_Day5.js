var city = [

    { State: 'Maharashtra', city: 'pune' },
    { State: 'Maharashtra', city: 'mumbai' },
    { State: 'Maharashtra', city: 'hydrabad' },
    { State: 'Delhi', city: 'new delhi' },
    { State: 'Delhi', city: 'balijt vihar' },
    { State: 'Punjab', city: 'amritsar' },
    { State: 'Punjab', city: 'patiyala' },
    { State: 'Punjab', city: 'jalandhar' },
];

$(document).ready(function () {

    $("#dpdlState").change(function () {
        $("#dpdlCity").html("<option selected>Choose City</option>");
        const states = city.filter(m => m.State == $("#dpdlState").val());
        states.forEach(element => {
            const option = "<option val= '" + element.city + "'>" + element.city + "</option>";
            $("#dpdlCity").append(option);
        });
    });
});



// validation
function validate() {

    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var vname = document.getElementById('errorname')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter your full name');
        document.getElementById('errorname').style.display = "unset";
        // document.getElementById('name').focus();

        return false;
    } else {
        document.getElementById('errorname').style.display = "none";
        return true;

    }
}
function state() {
    var state = document.getElementById("dpdlState");
    if (state.value == "") {
        document.getElementById("state1").innerHTML = "please select state field";
        document.getElementById("state1").style.display = "unset";
        document.getElementById("state1").focus();
        return false;
    }
    document.getElementById("state1").style.display = "none";
    return true;
}
function zipcode() {
    var regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
    var zipcode = document.getElementById('zip').value;
    var zipcodeerror = document.getElementById('errorzip')
    if (!regName.test(zipcode)) {
        zipcodeerror.innerHTML = ('Please enter zip code.');
        document.getElementById('errorzip').style.display = "unset";
        return false;
    } else {
        document.getElementById('errorzip').style.display = "none";
        return true;
    }
}
function mobileNo() {
    let setmobile = /^[0-9]{10}$/;
    let mobile = document.getElementById("phone").value;
    let msgmobile = document.getElementById("errorphone");
    if (!setmobile.test(mobile)) {
        msgmobile.innerHTML = "*Please enter 10 digits..";
        // msgmobile.style.color = "red";
        document.getElementById("errorphone").style.display = "unset";
        return false;
    } else {
        document.getElementById("errorphone").style.display = "none";
        return true;
    }
}

function checkValidate(){
    if(!validate() && !state() && !zipcode() && !mobileNo())
    {
        return false;
    }
    else
    {
        return true;
    }
}



function showData() {
    var List;
    if (localStorage.getItem("List") == null) {
        List = [];
    }
    else {
        List = JSON.parse(localStorage.getItem("List"));
    }

    var html = "";
    List.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + index + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.state + "</td>";
        html += "<td>" + element.city + "</td>";
        html += "<td>" + element.zip + "</td>";
        html += "<td>" + element.phone + "</td>";
        // html = '<td><button onclick="deleteData('+index+')"class=btn btn-danger">Delete</button>'<button onclick="deleteData('+index+')"class=btn btn-danger">Delete</button>' ;
        html += "</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload = showData();


function Adddata() {

    var check = checkValidate();
    if(check==true){

        var name = document.getElementById("name").value;
        var state = document.getElementById("dpdlState").value;
        var city = document.getElementById("dpdlCity").value;
        var zip = document.getElementById("zip").value;
        var phone = document.getElementById("phone").value;
    
        var List;
    
        var lifo = document.getElementById('LiFo').checked;
        var fifo = document.getElementById('FiFo').checked;
    
        if (localStorage.getItem("List") == null) {
            List = [];
        }
        else {
            List = JSON.parse(localStorage.getItem("List"));
    
            if (List.length < 5 && lifo == true) {
                if (List.length < 5) {
                    List.push({
                        name: name,
                        state: state,
                        city: city,
                        zip: zip,
                        phone: phone,
                    })
                }
            }
            else if (List.length >= 5 && lifo == true) {
                List.pop();
                List.push({
                    name: name,
                    state: state,
                    city: city,
                    zip: zip,
                    phone: phone,
                })
    
            }
    
            if (List.length < 5 && fifo == true) {
                if (List.length < 5) {
                    List.push({
                        name: name,
                        state: state,
                        city: city,
                        zip: zip,
                        phone: phone,
                    })
                }
            }
            else if (List.length >= 5 && fifo == true) {
                List.pop();
                List.unshift({
                    name: name,
                    state: state,
                    city: city,
                    zip: zip,
                    phone: phone,
                })
            }
        }
        // List.push({
        //     name: name,
        //     state: state,
        //     city: city,
        //     zip: zip,
        //     phone: phone,
        // });
        localStorage.setItem("List", JSON.stringify(List));
        showData();
    }
    else{
        return false;
    }
    
   
}


// if (table.rows.length == 5) {
//     document.getElementById("orderSelection").style.display = "block";
//   }

//   if (table.rows.length > 5) {
//     var order = document.querySelector('input[name="order"]:checked').value;
//     if (order == "LIFO") {
//       table.deleteRow(table.rows.length - 2);
//     } else {
//       table.deleteRow(1);
//     }
//   }
