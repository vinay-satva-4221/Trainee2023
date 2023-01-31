$(document).ready(function () {



    $.validator.addMethod('validname', function (value) {
        return /^[a-zA-Z]+$/.test(value)
    });
    $.validator.addMethod('greaterThanZero', function (value, element) {
        return this.optional(element) || (parseFloat(value) > 0);
    });
    $.validator.addMethod("minAge", function (value, element, min) {
        var today = new Date();
        var birthDate = new Date(value);
        var age = today.getFullYear() - birthDate.getFullYear();

        if (age > min + 1) {
            return true;
        }
        var m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= min;
    });

    $('#myform').validate({
        rules: {
            name: {
                required: true,
                validname: true,
                minlength: 3
            },
            mobile: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            collagename: {
                required: true,
                validname: true,
                
            },
           
            email: {
                required: true,
               
            },
            cgpa: {
                required: true,
                digits: true,
                maxlength: 1,
               
            },

            branchname: {
                required: true,
                
            },
            gender: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your Name",
                validname: "only alphabets allowed",
                minlength: "minimum 3 alphabets required",
            },
            mobile: {
                digits: "enter only digits",
                minlength: "minimum 10 digits required",
                maxlength: "number should be of 10 digits only"
            },
            collagename: {
                required: "Please provide college name",
                validname: "only alphabets allowed",
                
            },
            cgpa: {
                required: "please fill cgpa",
                maxlength: "you can only choose between 1-10",
                digits:"only digits allowed"
            },
            email: {
                required: "please fill your email",
                
            },
            branchname: {
                required: "please choose branch name",
            },
            loan: {
                required: "please fill loan details",
                greaterThanZero: "loan should be greater then zero",
            },

        }
    });

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });




    $("#carouselExampleControls").hide();
    $("#pics").click(function () {

        $("#carouselExampleControls").fadeToggle();
        $("#carouselExampleControls").fadeToggle("slow");
        $("#carouselExampleControls").fadeToggle(2000);
    });


    const CityData = '{"Citys":[' +
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



    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States, function (i, option) {
        $("#State").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#State").change(function () {
        var CityJsonData = JSON.parse(CityData);
        $("#City").html('');
        $.each(CityJsonData.Citys, function (i, option) {
            if ($("#State").val() == option.StateId) {
                $("#City").append($('<option></option>').val(option.Id).html(option.Name));
            }
        })

    });

    $("#table").hide();
    $("#remove-row").hide();
    $("#addrow").click(function (){

        $("#table").show();
        $("#remove-row").show();

        var Name = $("#Name").val();
        var Mobile = $("#mobile").val();
        var Email = $("#email").val();
        var Collage = $("#collagename").val();
        var CGPA = $("#cgpa").val();
        var Branch = $("#branch").val();
        var State = $("#State").val();
        var City = $("#City").val();
        var Zip = $("#zip").val();
        var FromToWhenYouStudied = $("#date").val();

        $(".table tbody tr").last().after(
            '<tr class="fadetext">'+
                '<td><input type="checkbox" id="select-row"></td>'+
                '<td>'+Name+'</td>'+
                '<td>'+Mobile+'</td>'+
                '<td>'+Email+'</td>'+
                '<td>'+Collage+'</td>'+
                '<td>'+CGPA+'</td>'+
                '<td>'+Branch+'</td>'+
                '<td>'+State+'</td>'+
                '<td>'+City+'</td>'+
                '<td>'+Zip+'</td>'+
                '<td>'+FromToWhenYouStudied+'</td>'+
                '<td><button class="btn btn-primary" >Edit</button></td>'+
            '</tr>'
        );
        $("#select-all").click(function(){
            var isSelected = $(this).is(":checked");
            if(isSelected){
                $(".table tbody tr").each(function(){
                    $(this).find('input[type="checkbox"]').prop('checked', true);
                })
            }else{
                $(".table tbody tr").each(function(){
                    $(this).find('input[type="checkbox"]').prop('checked', false);
                })
            }
        });
        $("#remove-row").click(function(){
            $(".table tbody tr").each(function(){
                var isChecked = $(this).find('input[type="checkbox"]').is(":checked");
                var tableSize = $(".table tbody tr").length;
                if(tableSize == 1){
                    alert('All rows cannot be deleted.');
                }else if(isChecked){
                    $(this).remove();
                }
            });
        });
    });



});