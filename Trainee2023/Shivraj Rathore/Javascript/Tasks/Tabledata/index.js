$(document).ready(function () {
    $.validator.addMethod('validname', function (value) {
        return /^[a-zA-Z\s]+$/.test(value)
    });


    $('#myform').validate({
        rules: {
            name: {
                required: true,
                validname: true
            },

            state: {
               required : true
            },
            city:
            {
                required : true
            },
            zip:
            {
                required: true,
                digits: true,
                minlength: 6,
                maxlength: 6
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            name: {
                required: "Enter Name",
                validname: "Enter Valid Name"
            },

            state: "Select State",
            city: "Select City",
            zip:
            {
                digits: "Enter Numerical Value",
                minlength: "Zip Code Consist Six Digits",
                maxlength: "Zip Code Limit Exceeded"
            },
            mobile: {
                digits: "Enter Numerical Value",
                minlength: "Mobile Num Contains 10 Digits",
                maxlength: "Limit Exceeded"
            }
        },
    })


    var cityList = [
        { State: 'Madhya Pradesh', city: 'Bhopal' },
        { State: 'Madhya Pradesh', city: 'Rajgarh' },
        { State: 'Madhya Pradesh', city: 'Morena' },
        { State: 'Jharkhand', city: 'Hazaribagh' },
        { State: 'Jharkhand', city: 'Ramgarh' },
        { State: 'Jharkhand', city: 'Dhanbad' },
        { State: 'Haryana', city: 'Faridabad' },
        { State: 'Haryana', city: 'Fatehabad' },
        { State: 'Haryana', city: 'Gurugram	' },
        { State: 'Haryana', city: 'Hisar' },
        { State: 'Rajasthan', city: 'Nagaur' },
        { State: 'Rajasthan', city: 'Jaipur' },
        { State: 'Rajasthan', city: 'Kota' },
        { State: 'Rajasthan', city: 'Bundi' },
    ];

    $("#state").change(function () {
        $("#city").html("<option selected>Choose City</option>");
        const cities = cityList.filter(m => m.State == $("#state").val());
        cities.forEach(element => {
            const option = "<option val='" + element.city + "'>" + element.city + "</option>";
            $("#city").append(option);
        });

    })

    $("[name=flexRadioDefault]").change(() => {
        if ($("#lifo").is(":checked") || $("#fifo").is(":checked")) {


            $("#showModal").click(function () {
                $('#exampleModal').modal('show');
                debugger
                let formdata = [];

              

                if (($("#lifo").is(":checked")) == true) {
                    

                    $("#submit").click(function () {
                        if ($("#myform").valid() == true){
                        var details = {
                            name: $("#name").val(),
                            state: $("#state").val(),
                            city: $("#city").val(),
                            zip: $("#zip").val(),
                            mobile: $("#mobile").val()
                        }

                        if (formdata.length < 5) {
                            formdata.push(details);

                             var Table = document.getElementById("table");
                            Table.innerHTML = "";
                            let table = document.querySelector(".mytable");
                            for (let obj of formdata) {
                          
                                let tr = table.insertRow();
                                tr.insertCell().textContent = obj.name;
                                tr.insertCell().textContent = obj.state;
                                tr.insertCell().textContent = obj.city;
                                tr.insertCell().textContent = obj.zip;
                                tr.insertCell().textContent = obj.mobile;
                            }
                        }

                        if (formdata.length == 5) {
                            formdata.pop();
                            formdata.push(details);

                                 var Table = document.getElementById("table");
                            Table.innerHTML = "";
                            let table = document.querySelector(".mytable");
                            for (let obj of formdata) {
                                let tr = table.insertRow();
                                tr.insertCell().textContent = obj.name;
                                tr.insertCell().textContent = obj.state;
                                tr.insertCell().textContent = obj.city;
                                tr.insertCell().textContent = obj.zip;
                                tr.insertCell().textContent = obj.mobile;
                            }
                        }
                    }
                    })
                }
                if (($("#fifo").is(":checked")) == true) {
                    $("#submit").click(function () {
                        if ($("#myform").valid() == true){
                        var details = {
                            name: $("#name").val(),
                            state: $("#state").val(),
                            city: $("#city").val(),
                            zip: $("#zip").val(),
                            mobile: $("#mobile").val()
                        }

                        if (formdata.length < 5) {
                            formdata.push(details);
                            var Table = document.getElementById("table");
                            Table.innerHTML = "";
                            let table = document.querySelector(".mytable");
                            for (let obj of formdata) {
                                let tr = table.insertRow();
                                tr.insertCell().textContent = obj.name;
                                tr.insertCell().textContent = obj.state;
                                tr.insertCell().textContent = obj.city;
                                tr.insertCell().textContent = obj.zip;
                                tr.insertCell().textContent = obj.mobile;
                            }

                        }
                        if (formdata.length == 5) {
                            formdata.shift();
                            formdata.push(details);
                            var Table = document.getElementById("table");
                            Table.innerHTML = "";
                            let table = document.querySelector(".mytable");
                            for (let obj of formdata) {
                                let tr = table.insertRow();
                                tr.insertCell().textContent = obj.name;
                                tr.insertCell().textContent = obj.state;
                                tr.insertCell().textContent = obj.city;
                                tr.insertCell().textContent = obj.zip;
                                tr.insertCell().textContent = obj.mobile;
                            }
                        }
                    }
                    })
                }
            })
        }
    })
});