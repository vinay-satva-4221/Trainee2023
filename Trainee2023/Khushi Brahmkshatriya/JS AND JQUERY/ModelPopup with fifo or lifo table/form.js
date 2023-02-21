
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

    showMyData();

    $("#State").change(function () {

        $("#City").html("<option selected disabled>Choose city</option>");
        const citys = cityList.filter(m => m.State == $("#State").val());
        citys.forEach(element => {
            const option = "<option val='" + element.city + "'>" + element.city + "</option>";
            $("#City").append(option);
        });

    });

    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

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
        }
    });

    var form = $("#form");
    form.validate();


    $("#addRow").click(function () {
        var result = form.valid();
        console.log(result);

        if (result == true) {

            addDataToLocal();
            location.reload(true);
        }
    });


    function addDataToLocal() {

        var name = $('#name').val();
        var mobile = $('#mobile').val();
        var State = $('#State').val();
        var City = $('#City').val();
        var zip = $('#zip').val();
        var approach = $("input[name='approach']:checked").val();
        console.log(approach);

        var FifoLifoData = {
            Name: name,
            Mobile: mobile,
            State: State,
            City: City,
            Zip: zip
        }

        var localData = JSON.parse(localStorage.getItem("FifoLifoData"));

        if (localData === null) {
            MyArray = [];

        }
        else {

            MyArray = localData;
        }

        console.log(MyArray.length);
        var sizeOFarray = MyArray.length;
        if (sizeOFarray < 5) {
            MyArray.push(FifoLifoData);
            localStorage.setItem('FifoLifoData', JSON.stringify(MyArray));
        }

        if (approach === "LIFO") {

            var popData = MyArray.pop();
            console.log(popData);
            MyArray.push(FifoLifoData);
            localStorage.setItem('FifoLifoData', JSON.stringify(MyArray));

        }
        if (approach === "FIFO") {

            var popData = MyArray.shift();
            console.log(popData);
            MyArray.push(FifoLifoData);
            localStorage.setItem('FifoLifoData', JSON.stringify(MyArray));

        }


    }

    function showMyData() {

        let localData = localStorage.getItem('FifoLifoData');

        if (localData) {
            $("#tblData tbody").html("");
            let localArray = JSON.parse(localData);
            let dynamicTR = "";
            let srNo = 1;
            localArray.forEach((data) => {

                dynamicTR = dynamicTR + "<tr>";
                dynamicTR = dynamicTR + "<th scope='row'> " + srNo + "</th>";
                dynamicTR = dynamicTR + "<td class='txtName'>" + data.Name + "</td>";
                dynamicTR = dynamicTR + "<td class='txtMobile'>" + data.Mobile + "</td>";
                dynamicTR = dynamicTR + "<td class='txtMobile'>" + data.State + "</td>";
                dynamicTR = dynamicTR + "<td class='txtMobile'>" + data.City + "</td>";
                dynamicTR = dynamicTR + "<td class='txtMobile'>" + data.Zip + "</td>";
                dynamicTR = dynamicTR + " </tr>";
                srNo++;
            });

            $("#tblData tbody").append(dynamicTR);
        }
    }
});