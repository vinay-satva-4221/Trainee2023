
// jQuery(function ($) {
//     var StateCityObject = {
//         'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara','Rajkot'],
//         'Goa': ['Panaji','Mapusa'],
//         'Chhattisgarh': ['Raipur ','Bilaspur'],
//         'Bihar': ['Patna','Sharif'],
//         'Assam': ['Guwahati','Silchar','Tezpur'],
//         'Andhra Pradesh': ['Visakhapatnam '],
//         'Himachal Pradesh': ['Lucknow'],
        
//     }
    
//      var $City = $('#City');
//     $('#State').change(function () {
//         var State = $(this).val(), citys = StateCityObject[State] || [];

//         var html = $.map(citys, function (city) {
//             return '<option value="' + city + '">' + city + '</option>'
//         }).join('');
//         $City.html(html)
//     });

//     console.log(StateCityObject);
// });

var cityList = [
    { State: 'Gujarat', city: 'Ahmedabad'},
    { State: 'Gujarat', city: 'Surat' },
    { State: 'Gujarat', city: 'Vadodara' },
    { State: 'Gujarat', city: 'Rajkot' },
    { State: 'Goa', city: 'Panaji' },
    { State: 'Goa', city: 'Mapusa' },
    { State: 'Chhattisgarh', city: 'Raipur' },
    { State: 'Chhattisgarh', city: 'Bilaspur' },
    { State: 'Bihar', city: 'Patna' },
    { State: 'Bihar', city: 'Sharif' },
    { State: 'Assam', city: 'Guwahati' },
    { State: 'Assam', city: 'Silchar' },
    { State: 'Assam', city: 'Tezpur' },
    { State: 'Andhra Pradesh', city: 'Visakhapatnam' },
    { State: 'Himachal Pradesh', city: 'Lucknow' }
    
  ];

$(document).ready(function () {


    $("#State").change(function () {
       
          $("#City").html("<option selected disabled>Choose city</option>");
          const citys = cityList.filter(m => m.State == $("#State").val());
          citys.forEach(element => {
            const option = "<option val='" + element.city + "'>" + element.city + "</option>";
            $("#City").append(option);
          });
        
      });

    $('#sliderPic').click(function () {
        $("#carouselExampleIndicators").toggle();
    });



    $('input[name="date"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $("#date").keypress(function(event) {
        return ( ( event.keyCode || event.which ) === 9 ? true : false );
    });
    $('input[name="date"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        $("#date-error").hide();
        $(".error").removeClass("error");
    });

    $('input[name="date"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });


    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

    jQuery.validator.addMethod("Zero", function (value, element) {
        return this.optional(element) || ((parseFloat(value) >= 0) && (parseFloat(value) <= 10));
    }, "* Please enter number between 0 to 10 ");

    $('.float-number').keypress(function(event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
            return false;
        }
    });
   
    $("#form").validate({
        // in 'rules' user have to specify all the constraints for respective fields

        rules: {
            name: {
                required: true,
                minlength: 3,
                lettersonly: true
            },
            mobile: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            email: {
                required: true,
                email: true
            },
            cname: {
                required: true,
                lettersonly: true
            },
            cgpa: {
                required: true,
                Zero: true
            },
            branch: {
                required: true,
            },
            state: {
                required: true,
            },
            city: {
                required: true,
            },
            zip: {
                required: true,
                minlength: 6,
                maxlength: 6,
            },
            date: {
                required: true,
            },

        },

        messages: {
            name: {
                required: " Please enter a name",
                minlength: " Your username must consist of at least 3 characters",

            },
            mobile: {
                required: "Please enter mobile number",
                minlength: "Enter 10 digit number",
            },
            email: {
                email: "Please enter a valid email address",
            },
            cname: {
                required: "Enter collage name",
            },
            cgpa: {
                required: "Please enter cgpa",
                number: true,
            },
            branch: {
                required: "Please select branch",
            },
            state: {
                required: "Choose state",
            },
            city: {
                required: "Choose city",
            },
            zip: {
                required: "Enter zip",
                minlength: "Enter 6 digit code",
                maxlength: "Enter 6 digit code",
            },
            date: {
                required: "Enter date",
            }

        }

    });

    var form = $("#form");
    form.validate();

    var emptyRow = "<tr><td colspan='13' class='text-center'> No Records Available</td></tr>";

    loadDataFromLocal();

    $('#tblData').on('click', '.btn-edit', function () {


        const name = $(this).parent().parent().find(".txtName").html();
        const mobile = $(this).parent().parent().find(".txtMobile").html();
        const email = $(this).parent().parent().find(".txtEmail").html();
        const collegeId = $(this).parent().parent().find(".txtCollegeId").html();
        const cgpa = $(this).parent().parent().find(".txtCgpa").html();
        const branch = $(this).parent().parent().find(".txtBranch").html();
        const State = $(this).parent().parent().find(".txtState").html();
        const City = $(this).parent().parent().find(".txtCity").html();
        const zip = $(this).parent().parent().find(".txtZip").html();
        const date = $(this).parent().parent().find(".txtDate").html();
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        $("#name").val(name);
        $("#mobile").val(mobile);
        $("#email").val(email);
        $("#collegeId").val(collegeId);
        $("#cgpa").val(cgpa);
        $("#branch").val(branch);
        $("#State").val(State).change();
        $("#City").val(City);
        $("#zip").val(zip);
        $("#date").val(date);
        $("#txtId").val(id);
        $("#addRow").text("Update");
    });
    
    $('#tblData').on('click', '.btn-delete', function () {
    
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        deleteDataFromLocal(id);
    });

    $("#addRow").click(function () {
        var result = form.valid();
        console.log(result);
        if (result == false) {
            swal("Error!", "Please enter all the details", "error");

        }
        else{
            if ($("#txtId").val() == '') {
                addDataToLocal();
            } else {
                updateDataFromLocal();
            }
        }
        
        
    });
    function addEmptyRow() {

        if ($("#tblData tbody").children().children().length == 0) {
            $("#tblData tbody").append(emptyRow);
        }
    }

    function loadDataFromLocal() {

        let localData = localStorage.getItem('studentData');
        if (localData) {
            $("#tblData tbody").html("");
            let localArray = JSON.parse(localData);
            let index = 1;
            localArray.forEach(element => {
                let dynamicTR = "<tr>";
                dynamicTR = dynamicTR + "<td> " + index + "</td>";
                dynamicTR = dynamicTR + "<td class='txtName'  data-id=" + element.id + ">" + element.name + "</td>";
                dynamicTR = dynamicTR + "<td class='txtMobile'>" + element.mobile + "</td>";
                dynamicTR = dynamicTR + "<td class='txtEmail'>" + element.email + "</td>";
                dynamicTR = dynamicTR + "<td class='txtCollegeId'>" + element.collegeId + "</td>";
                dynamicTR = dynamicTR + "<td class='txtCgpa'>" + element.cgpa + "</td>";
                dynamicTR = dynamicTR + "<td class='txtBranch'>" + element.branch + "</td>";
                dynamicTR = dynamicTR + "<td class='txtState'>" + element.State + "</td>";
                dynamicTR = dynamicTR + "<td class='txtCity'>" + element.City + "</td>";
                dynamicTR = dynamicTR + "<td class='txtZip'>" + element.zip + "</td>";
                dynamicTR = dynamicTR + "<td class='txtDate'>" + element.date + "</td>";
                dynamicTR = dynamicTR + "<td class='tdAction text-center'><button class='btn btn-sm btn-success btn-edit'> Edit</button> </td>";
                dynamicTR = dynamicTR + "<td class='tdAction text-center'> <button class='btn btn-sm btn-danger btn-delete'> Delete</button> </td>";

                dynamicTR = dynamicTR + " </tr>";
                $("#tblData tbody").append(dynamicTR);
                index++;
            });
        }
        addEmptyRow();
    }

    function addDataToLocal() {

        let localData = localStorage.getItem('studentData');
        if (localData) {
            let localArray = JSON.parse(localData);
            const obj = {
                id: localArray.length + 1,
                name: $("#name").val(),
                mobile: $("#mobile").val(),
                email: $("#email").val(),
                collegeId: $("#collegeId").val(),
                cgpa: $("#cgpa").val(),
                branch: $("#branch").val(),
                State: $("#State").val(),
                City: $("#City").val(),
                zip: $("#zip").val(),
                date: $("#date").val()
            };
            localArray.push(obj);
            localStorage.setItem('studentData', JSON.stringify(localArray));
            loadDataFromLocal();
        } else {
            const arryObj = [];
            const obj = {
                id: 1,
                name: $("#name").val(),
                mobile: $("#mobile").val(),
                email: $("#email").val(),
                collegeId: $("#collegeId").val(),
                cgpa: $("#cgpa").val(),
                branch: $("#branch").val(),
                State: $("#State").val(),
                City: $("#City").val(),
                zip: $("#zip").val(),
                date: $("#date").val()
            };
            arryObj.push(obj);
            localStorage.setItem('studentData', JSON.stringify(arryObj));
            loadDataFromLocal();
        }

    }

    function updateDataFromLocal() {

        let localData = localStorage.getItem('studentData');
        let localArray = JSON.parse(localData);
        const oldRecord = localArray.find(m => m.id == $("#txtId").val());
        oldRecord.name = $("#name").val();
        oldRecord.mobile = $("#mobile").val();
        oldRecord.email = $("#email").val();
        oldRecord.collegeId = $("#collegeId").val();
        oldRecord.cgpa = $("#cgpa").val();
        oldRecord.branch = $("#branch").val();
        oldRecord.State = $("#State").val();
        oldRecord.City = $("#City").val();
        oldRecord.zip = $("#zip").val();
        oldRecord.date = $("#date").val();


        localStorage.setItem('studentData', JSON.stringify(localArray));
        loadDataFromLocal();

    }

    function deleteDataFromLocal(id) {
        
        let localData = localStorage.getItem('studentData');
        let localArray = JSON.parse(localData);
        let i = 0;
        while (i < localArray.length) {
            if (localArray[i].id === Number(id)) {
                localArray.splice(i, 1);
            } else {
                ++i;
            }
        }
        localStorage.setItem('studentData', JSON.stringify(localArray));
        loadDataFromLocal();
    }

    $('#export').on('click', function (e) {
        e.preventDefault();
        ResultsToTable();
    });

    function ResultsToTable() {
        $("#tblData").table2excel({
            exclude: ".noExl",
            filename: "Students"
        });
    }

});