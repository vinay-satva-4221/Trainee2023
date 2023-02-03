
$(document).ready(function () {


    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

    jQuery.validator.addMethod("greaterThanZero", function (value, element) {
        return this.optional(element) || (parseFloat(value) > 0);
    }, "* Amount must be greater than zero");

    jQuery.validator.addMethod("Zero", function (value, element) {
        return this.optional(element) || (parseFloat(value) >= 0);
    }, "* Amount must be greater than or equal to zero");

    $.validator.addMethod("age", function (value, element, min) {
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
    }, "You are not old enough!");

    $('#birthdate').val(new Date().toJSON().slice(0,10));

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

            birthdate: {
                required: true,
                age: 18,
            },
            gender: {
                required: true,
            },
            income: {
                required: true,
                greaterThanZero: true,
            },
            loan: {
                required: true,
                greaterThanZero: true,
            },
            investment: {
                required: true,
                Zero: true,
            },
        },

        messages: {
            name: {
                required: " Please enter a name",
                minlength: " Your username must consist of at least 3 characters",

            },
            mobile: {
                required: "Please enter mobile number",
                minlength: "Enter 10 digit number"
            },
            birthdate: {
                required: "Please select BirthDate",
                minAge: "You must be at least 18 years old!"
            },
            gender: {
                required: "Please select gender",
            },
            income: {
                required: "Please Enter income",
            },
            loan: {
                required: "Please Enter Loan",
            },
            investment: {
                required: "Please Enter Investment",
            },
        }


    });

    function fnCalculateAge() {

        var today = new Date();
        var dob = new Date($('#birthdate').val());
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
        if (typeof age != 'undefined' && age != null) {
            return age;
        }
        else {
            return 0;
        }

    }
    $('.valiIncome').change(function (e) {
        var income = parseInt($('#income').val());
        
        var investment = parseInt($('#investment').val());
        if (income<investment) {

            swal("Please enter more income");
            //$('#age').html("You are not eligible");
            return false;
        }
        else
            return true;
        
    });

    $('.allow_decimal').keypress(function (e) {

        var charCode = (e.which) ? e.which : event.keyCode

        if (String.fromCharCode(charCode).match(/[^0-9]/g))

            return false;

    });
    // jQuery.validator.setDefaults({
    //     debug: true,
    //     success: "valid"
    //   });
    var form = $("#form");
    form.validate();

    $("#calculateTax").click(function () {

        var result = form.valid();
        console.log(result);
        if (result == true) {

            var gender = $('#gender').val();
            var income = parseInt($('#income').val());
            var loan = parseInt($('#loan').val());
            var investment = parseInt($('#investment').val());
            var age = fnCalculateAge();
            
            var incomeMinimum = (income * 20) / 100;
            var loanminimum = (loan * 80) / 100;
            if (investment > 100000) {
                var taxable = income - (Math.min(incomeMinimum, loanminimum) + 100000);
                $('#tamount').html(taxable);
            }
            else {
                var taxable = income - (Math.min(incomeMinimum, loanminimum) + investment);
                $('#tamount').html(taxable);
            }

           
            if ((age >= 18 && age <= 60) && gender == 'Male') {
                if (taxable <= 240000) {
                    $('#tamount').html(taxable);
                    $('#ptax').html('0');
                    $("#ptextBg").css("background-color", "green");
                }
                else {
                    var nonpayable = taxable - 240000;
                    if (nonpayable > 360000) {
                        var taxslab1 = nonpayable - 360000;
                        var taxslab2 = (360000 * 10) / 100;
                        var taxslab3 = taxslab2;
                    }
                    else {
                        taxable2 = (nonpayable * 10) / 100;
                        taxslab3 = taxslab2;
                    }
                    if (taxslab1 <= 0) {
                        var payabletax = taxslab3;
                        $('#ptax').html(payabletax);
                        $("#ptextBg").css("background-color", "red");
                    }
                    else {
                        var payamount = (taxslab1 * 20) / 100;
                        payabletax = payamount + taxslab3;
                        $('#ptax').html(payabletax);
                        $("#ptextBg").css("background-color", "red");

                    }
                }
            }
            else if ((age >= 18 && age <= 60) && gender == 'Female') {
                if (taxable <= 260000) {
                    $('#tamount').html(taxable);
                    $('#ptax').html('0');
                    $("#ptextBg").css("background-color", "green");
                }
                else {
                    var nonpayable = taxable - 260000;
                    if (nonpayable > 440000) {
                        var taxslab1 = nonpayable - 440000;
                        var taxslab2 = (440000 * 10) / 100;
                        var taxslab3 = taxslab2;
                    }
                    else {
                        taxable2 = (nonpayable * 10) / 100;
                        taxslab3 = taxslab2;
                    }
                    if (taxslab1 <= 0) {
                        var payabletax = taxslab3;
                        $('#ptax').html(payabletax);
                        $("#ptextBg").css("background-color", "red");
                    }
                    else {
                        var payamount = (taxslab1 * 20) / 100;
                        payabletax = payamount + taxslab3;
                        $('#ptax').html(payabletax);
                        $("#ptextBg").css("background-color", "red");

                    }
                }
            }
            else {
                if (taxable <= 300000) {
                    $('#tamount').html(taxable);
                    $('#ptax').html('0');
                    $("#ptextBg").css("background-color", "green");
                }
                else {
                    var nonpayable = taxable - 300000;
                    if (nonpayable > 400000) {
                        var taxslab1 = nonpayable - 400000;
                        var taxslab2 = (400000 * 10) / 100;
                        var taxslab3 = taxslab2;
                    }
                    else {
                        taxable2 = (nonpayable * 10) / 100;
                        taxslab3 = taxslab2;
                    }
                    if (taxslab1 <= 0) {
                        var payabletax = taxslab3;
                        $('#ptax').html(payabletax);
                        $("#ptextBg").css("background-color", "red");
                    }
                    else {
                        var payamount = (taxslab1 * 20) / 100;
                        payabletax = payamount + taxslab3;
                        $('#ptax').html(payabletax);
                        $("#ptextBg").css("background-color", "red");

                    }
                }
            }
            var name = $('#name').val();
            $('#mname').html(name);
            $('#myModal').modal('show');
        }

    });

    $("#reset").click(function () {
        $("label.error").hide();
        $(".error").removeClass("error");
    });

});
