
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

$("#W-8BEN").validate({
    // in 'rules' user have to specify all the constraints for respective fields

    rules: {
        pt1: {
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
        pt1: {
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