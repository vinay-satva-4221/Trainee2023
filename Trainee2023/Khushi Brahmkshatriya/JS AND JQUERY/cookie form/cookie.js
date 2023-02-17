var cityList = [
    { State: 'Gujarat', city: 'Ahmedabad' },
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

    //$.cookie.json = true;

    $("#State").change(function () {

        $("#City").html("<option selected disabled>Choose city</option>");
        const citys = cityList.filter(m => m.State == $("#State").val());
        citys.forEach(element => {
            const option = "<option val='" + element.city + "'>" + element.city + "</option>";
            $("#City").append(option);
        });

    });

    $(".allow_numeric").on("input", function (evt) {
        var self = $(this);
        self.val(self.val().replace(/\D/g, ""));
        if ((evt.which < 48 || evt.which > 57)) {
            evt.preventDefault();
        }
    });


    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

    jQuery.validator.addMethod("Zero", function (value, element) {
        return this.optional(element) || ((parseFloat(value) >= 0) && (parseFloat(value) <= 10));
    }, "* Please enter number between 0 to 10 ");

    $('.float-number').keypress(function (event) {
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
            color: {
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
            color: {
                required: "Choose color",
            }

        }

    });

    var form = $("#form");
    form.validate();

    var emptyRow = "<tr><td colspan='13' class='text-center'> No Records Available</td></tr>";

    loadDataFromLocal();
    backgroundColor()

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
        const color = $(this).parent().parent().find(".txtcolor").html();
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
        $("#color").val(color);
        $("#txtId").val(id);
        $("#addRow").text("Update");
    });

    $('#tblData').on('click', '.btn-delete', function () {

        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        deleteCookie(id);
        deleteDataFromLocal(id);

    });
    $("#deletecookie").click(function () {
        $.removeCookie("color");

        location.reload(true);
    });


    $("#addRow").click(function () {
        var result = form.valid();
        console.log(result);
        if (result == false) {
            swal("Error!", "Please enter all the details", "error");

        }
        else {
            if ($("#txtId").val() == '') {
                addDataToLocal();
                addDataToCookie();
            }
            else {
                updateDataFromLocal();
            }
        }

        backgroundColor();
    });

    function addEmptyRow() {

        if ($("#tblData tbody").children().children().length == 0) {
            $("#tblData tbody").append(emptyRow);
        }
    }

    function loadDataFromLocal() {

        let localData = localStorage.getItem('CookieData');

        if (localData) {
            $("#tblData tbody").html("");
            let localArray = JSON.parse(localData);
            let index = 1;
            localArray.forEach(element => {

                let dynamicTR = "<tr class='color'>";
                dynamicTR = dynamicTR + "<td class='myindex'> " + index + "</td>";
                dynamicTR = dynamicTR + "<td class='txtName'  data-id=" + element.id + ">" + element.name + "</td>";
                dynamicTR = dynamicTR + "<td class='txtMobile'>" + element.mobile + "</td>";
                dynamicTR = dynamicTR + "<td class='txtEmail'>" + element.email + "</td>";
                dynamicTR = dynamicTR + "<td class='txtCollegeId'>" + element.collegeId + "</td>";
                dynamicTR = dynamicTR + "<td class='txtCgpa'>" + element.cgpa + "</td>";
                dynamicTR = dynamicTR + "<td class='txtBranch'>" + element.branch + "</td>";
                dynamicTR = dynamicTR + "<td class='txtState'>" + element.State + "</td>";
                dynamicTR = dynamicTR + "<td class='txtCity'>" + element.City + "</td>";
                dynamicTR = dynamicTR + "<td class='txtZip'>" + element.zip + "</td>";
                dynamicTR = dynamicTR + "<td class='txtcolor'>" + element.color + "</td>";
                dynamicTR = dynamicTR + "<td class='tdAction text-center'><button class='btn btn-sm btn-success btn-edit'> Edit</button> </td>";
                dynamicTR = dynamicTR + "<td class='tdAction text-center'> <button class='btn btn-sm btn-danger btn-delete'> Delete</button> </td>";

                dynamicTR = dynamicTR + " </tr>";
                $("#tblData tbody").append(dynamicTR);

                index++;
            });
        }
        addEmptyRow();
        backgroundColor();
        tableRowColor();

    }

    function addDataToLocal() {

        let localData = localStorage.getItem('CookieData');

        if (localData) {
            let localArray = JSON.parse(localData);
            let myId = localArray.length - 1;
            myId = localArray.map(x => x.id)[myId];
            const obj = {
                id: myId + 1,
                name: $("#name").val(),
                mobile: $("#mobile").val(),
                email: $("#email").val(),
                collegeId: $("#collegeId").val(),
                cgpa: $("#cgpa").val(),
                branch: $("#branch").val(),
                State: $("#State").val(),
                City: $("#City").val(),
                zip: $("#zip").val(),
                color: $("#color").val(),

            };

            localArray.push(obj);
            localStorage.setItem('CookieData', JSON.stringify(localArray));
            loadDataFromLocal();
        }
        else {
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
                color: $("#color").val()

            };

            arryObj.push(obj);
            maxId = localStorage.setItem('CookieData', JSON.stringify(arryObj));
            loadDataFromLocal();

        }


    }

    function addDataToCookie() {

        let cookiedata = $.cookie("color");
        if (cookiedata) {
            let localArray = JSON.parse(cookiedata);
            let myId = localArray.length - 1;
            myId = localArray.map(x => x.id)[myId];
            const color = {
                id: myId + 1,
                color: $("#color").val()
            };
            localArray.push(color);
            $.cookie("color", JSON.stringify(localArray));

        }
        else {
            const arryObj = [];
            const color =
            {
                id: 1,
                color: $("#color").val(),
            }
            arryObj.push(color);
            $.cookie("color", JSON.stringify(arryObj));
        }
        location.reload(true);
    }


    function backgroundColor() {
        let bgcolor = $("#tblData tr:last td:nth-child(11)").text();
        console.log(bgcolor);
        $("#colorBck").css("background-color", bgcolor);

    }

    function deleteCookie(id) {

        let cookiedata = $.cookie("color");
        let localCookieArray = JSON.parse(cookiedata);
        if (localCookieArray) {
            let i = 0;
            while (i < localCookieArray.length) {
                console.log(localCookieArray[i].id);
                if (localCookieArray[i].id === Number(id)) {
                    localCookieArray.splice(i, 1)
                    //$.removeCookie(localCookieArray[i]);
                    //localCookieArray.splice(i, 1);
                    //$.removeCookie(dcookie);
                }
                else {
                    ++i;
                }
            }
        }


        $.cookie("color", JSON.stringify(localCookieArray));

    }
    function updateDataFromLocal() {

        let localData = localStorage.getItem('CookieData');
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
        oldRecord.color = $("#color").val();

        let cookiedata = $.cookie("color");
        let localCookieArray = JSON.parse(cookiedata);
        const oldcookie = localCookieArray.find(m => m.id == $("#txtId").val());
        oldcookie.color = $("#color").val();

        localStorage.setItem('CookieData', JSON.stringify(localArray));
        $.cookie("color", JSON.stringify(localCookieArray));
        loadDataFromLocal();

    }

    function tableRowColor() {

        var rowCount = $("#tblData tr").length;
        for (let i = 1; i < rowCount; i++) {
            let trcolor = $("#tblData tr:eq(" + i + ") td:nth-child(11)").text();

            $("#tblData tr:eq(" + i + ")").css("background-color", trcolor);

        }
    }

    function deleteDataFromLocal(id) {

        let localData = localStorage.getItem('CookieData');
        let localArray = JSON.parse(localData);
        let i = 0;
        while (i < localArray.length) {
            if (localArray[i].id === Number(id)) {
                localArray.splice(i, 1);

            }
            else {
                ++i;
            }
        }


        localStorage.setItem('CookieData', JSON.stringify(localArray));
        loadDataFromLocal();
    }
    $('#export').on('click', function (e) {
        e.preventDefault();

        ResultsToTable();
    });

    function ResultsToTable() {

        TableToExcel.convert(document.getElementById("tblData"), {
            name: "Students.xlsx",
            sheet: {
                name: "Sheet 1"
            }
        });

    }

});