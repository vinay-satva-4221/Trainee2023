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
        //empty Chapters- and Topics- dropdowns
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
});