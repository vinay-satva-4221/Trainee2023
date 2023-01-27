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
                validname: true,
                minlength: 3
            },
            mobile: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            income: {
                required: true,
                greaterThanZero: true,
            },
            investment: {
                required: true,
                greaterThanZero: true,
            },
            loan: {
                required: true,
                greaterThanZero: true,
            },

            birthday: {
                required: true,
                minAge: 18
            },
            gender: {
                required: true
            }
        },
        messages: {
            name: "Please enter your Name",
            mobile: {
                digits: "enter only digits",
                minlength: "minimum 10 digits required",
                maxlength: "number should be of 10 digits only"
            },
            birthday: {
                required: "Please enter you date of birth.",
                minAge: "minimum age is 18"
            }, gender: {
                required: "please select gender",
            },
            income: {
                required: "please fill income details",
                greaterThanZero: "income should be greater then zero",
            },
            investment: {
                required: "please fill investment details",
                greaterThanZero: "investment should be greater then zero",
            },
            loan: {
                required: "please fill loan details",
                greaterThanZero: "loan should be greater then zero",
            },

        }
    });


    $("#submit").click(function () {

        if ($("#myform").valid() == true) {

            var loan = $("#loan").val();
            var income = $("#income").val();
            var investment = $("#investment").val();
            var name = $("#name").val();

            if (investment > income) {
                $("#modaltaxamount").val("income badhao phle bad m tax bharna");
            } else {
                var loan1 = .8 * loan;
                var income1 = .2 * income;
                var minimum = Math.min(loan1, income1);


                if (investment >= 100000) {
                    investment = 100000;
                } else {
                    investment = investment;
                }

                var taxamount = income - (minimum + investment);

                $("#modaltaxamount").val(taxamount);
            }


            $("#modalname").val(name);
            $('#exampleModal').modal('show');


            var a = $("#gender").val();

            if (a == "male") {

                if (taxamount < 240000) {
                    console.log("don't have to pay tax");
                } else {
                    var nonpayamt = taxamount - 240000;
                    if (nonpayamt > 360000) {
                        var tax3 = nonpayamt - 360000;
                        var tax2 = (360000 * 10) / 100;
                        var taax2 = tax2;
                    } else {
                        tax2 = (nonpayamt * 10) / 100;
                        taax2 = tax2;
                    }
                    if (tax3 <= 0) {
                        paybalamt = tax3;
                        console.log("Pay amount", paybalamt);

                    } else {
                        var taax3 = (tax3 * 20) / 100;
                        paybalamt = taax3 + taax2;
                        console.log("pay amount", paybalamt);

                    }
                }
            }
            else {
                if (taxamount < 260000) {
                    console.log("don't have to pay tax");
                } else {
                    var nonpayamt = taxamount - 260000;
                    if (nonpayamt > 440000) {
                        var tax3 = nonpayamt - 440000;
                        var tax2 = (440000 * 10) / 100;
                        var taax2 = tax2;
                    } else {
                        tax2 = (nonpayamt * 10) / 100;
                        taax2 = tax2;
                    }
                    if (tax3 <= 0) {
                        paybalamt = tax3;
                        console.log("Pay amount", paybalamt);
                    } else {
                        var taax3 = (tax3 * 20) / 100;
                        paybalamt = taax3 + taax2;
                        console.log("pay amount", paybalamt);
                    }
                }
            }
            $("#payabletax").val(paybalamt);

        }

    });
});

