var stateObject = {
    "Gujarat": {
        "Surat": [],
        "Ahmedabad": [],
        "Rajkot": [],
        "Vadodara": [],
    },
    "Madhya Pradesh": {
        "Indore": [],
        "Bhopal": [],
    },
    "Punjab": {
        "Ludhiana": [],
        "Amritsar": [],
    },
    "Rajasthan": {
        "Sirohi": [],
        "Udaipur": [],
    }
}
window.onload = function () {
    var state = document.getElementById("state");
    var city = document.getElementById("city");
    for (var x in stateObject) {
        state.options[state.options.length] = new Option(x, x);
    }
    state.onchange = function () {

        city.length = 1;
        //display correct values
        for (var y in stateObject[this.value]) {
            city.options[city.options.length] = new Option(y, y);
        }
    }

}



$(document).ready(function () {
    $.validator.addMethod("validname", function (value) {
        return /^[a-zA-Z\s]+$/.test(value);
    });
    $("#add").click(function () {
        $("#basic_form").valid();
    });
    $("#basic_form").validate({
        rules: {
            name: {
                required: true,
                validname: true,
            },
            mobile: {
                required: true,
            },
            zipcode: {
                required: true,
            },
            state: {
                required: true,
            },
            city: {
                required: true,
            },
        },

        messages: {
            name: {
                required: "Enter your detail",
                validname: "please enter only characters",
            },
            mobile: {
                required: "Enter your detail",
            },
            zipcode: {
                required: "Enter your detail",
            },
            state: {
                required: "Enter your detail",
            },
            city: {
                required: "Enter your detail",
            },
        },

    });
    

    $("#add").click(function () {
        var details = localStorage.getItem("details");
        var StudentDetails = {
            // dataId: $("#dataId").val(),
            Name: $("#name").val(),
            State: $("#state").val(),
            City: $("#city").val(),
            Zip: $("#zip").val(),
            Mobile: $("#mobile").val(),

        };




        if (details != null) {
            var studentJsonData = JSON.parse(details);
            if (
                studentJsonData.students[parseInt(StudentDetails)]
            ) {
                studentJsonData.students[parseInt(StudentDetails)] =
                    StudentDetails;
                localStorage.setItem("details", JSON.stringify(studentJsonData));
            } else {
                studentJsonData.students.push(StudentDetails);
                localStorage.setItem("details", JSON.stringify(studentJsonData));
            }
        } else {
            var details = JSON.parse('{"students": []}');
            details.students.push(StudentDetails);
            localStorage.setItem("details", JSON.stringify(details));
        }
        selectData();

        $("#basic_form")[0].reset();

    });

});

function selectData() {

    var lifo = document.getElementById('flifo').checked;
    var fifo = document.getElementById('ffifo').checked;


    details = JSON.parse(localStorage.getItem("details"));
    

    if (details.length < 2 && lifo == true) {
        if (details.length < 2) {
            details.push({
                name: name,
                state: state,
                city: city,
                zip: zip,
                mobile: mobile,
            })
            
        }
    }
    else if (details.length >= 2 && lifo == true) {
        details.pop();
        details.push({
            name: name,
            state: state,
            city: city,
            zip: zip,
            mobile: mobile,
        })
        
    }

    if (details.length < 2 && fifo == true) {

        if (details.length < 2) {
            details.push({
                name: name,
                state: state,
                city: city,
                zip: zip,
                mobile: mobile,
            })
            
        }
    }
    else if (details.length >= 2 && fifo == true) {
        details.shift();
        details.unshift({
            name: name,
            state: state,
            city: city,
            zip: zip,
            mobile: mobile,
            
        });

    }

    // var details = JSON.parse(localStorage.getItem("details"));
    // if (details != null) {
        let html = "";
        for (let i = 0; i < details.students.length; i++) {
            html =
                html +
                `<tr id = ${i} >
        <td>${i + 1}</td>
        <td>${details.students[i].Name}</td>
        <td>${details.students[i].State}</td>
        <td>${details.students[i].City}</td>
        <td>${details.students[i].Zip}</td>
        <td>${details.students[i].Mobile}</td>
        
        <tr>`;
        }
        document.getElementById("root").innerHTML = html;
    // }
}
function lifo(){
    var lifo = document.getElementById('flifo').checked
    console.log(lifo ,"lifo")
}