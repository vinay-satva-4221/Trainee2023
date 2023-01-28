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
    function percentage(num, per) {
        return (num / 100) * per;
    }
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
                greaterThanZero: true,
            },
            investment: {
                greaterThanZero: true,
            },
            loan: {
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
            name: "please enter valid name",
            mobile: {
                digits: "Enter Numeric value",
                minlength: "Check for 10 digits",
                maxlength: "Number exceed mobile limit"
            },
            birthday: {
                required: "Please enter you date of birth.",
                minAge: "Only !8+ allowed"
            }, gender: {
                required: "choose gender",
            },
            income: "Enter Income -- Can not blank",
            investment: "Enter Investment -- Can not blank",
            loan:  "Enter loan amount -- Can not blank",

        }
    });
    $("#submit").click(function () {

        if ($("#myform").valid() == true) {

            var modalname = $("#name").val();
            var loan = $("#loan").val();
            var investment = $("#investment").val();
            var income = $("#income").val();
            var req_investment = 0;

            var dob = $('#birthday').val();
            if (dob != '') {
                dob = new Date(dob);
                var today = new Date();
                var validage = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

            }
            if (investment >= 100000) {
             req_investment = 100000;
            }
            else {
                 req_investment = investment;
            }
            if (validage < 60 && $('#gender').val() == 'male') {
              
            taxable_amount = income - ( Math.min( percentage(income, 20), percentage(loan, 80)  + req_investment) );
                var tax_payable = taxable_amount - 240000;
                var tax_slab_2 = 0;
                var tax_slab_3 =0;
                 var tax_remaining =  tax_payable - 360000 ;
                if (taxable_amount < 240000) {
                    $("#modalname").html(modalname);
                    $("#modaltaxamount").html("Hurray ! No tax...");
                }
                else {
                    if (taxable_amount >= 240000 && taxable_amount <= 600000) {
                        tax_slab_2 = percentage(tax_payable, 10);


                        $("#modalname").html(modalname);
                        $("#modaltaxamount").html( taxable_amount);
                        $("#payabletax").html(tax_slab_2);
                       
                    }
                    if((taxable_amount > 600000))
                    {
                          tax_slab_2 = percentage(360000 , 10);
                          tax_slab_3 = tax_slab_2  + percentage(tax_remaining,20); 


                          $("#modalname").html(modalname);
                          $("#modaltaxamount").html( taxable_amount);
                          $("#payabletax").html(tax_slab_3);

                    }
                }
            }
            if (validage < 60 && $('#gender').val() == 'female') {
              
                taxable_amount = income - ( Math.min( percentage(income, 20), percentage(loan, 80)  + req_investment) );
    
                    var tax_payable = taxable_amount - 270000;
                    var tax_slab_2 = 0;
                    var tax_slab_3 =0;
                     var tax_remaining =  tax_payable - 430000 ;
    
    
                    if (taxable_amount < 270000) {
                        $("#modalname").html(modalname);
                        $("#modaltaxamount").html("Hurray ! No tax...");
                    }
                    else {
                        if (taxable_amount >= 270000 && taxable_amount <= 700000) {
                            tax_slab_2 = percentage(tax_payable, 10);
                            $("#modalname").html(modalname);
                            $("#modaltaxamount").html( taxable_amount);
                            $("#payabletax").html(tax_slab_2);
                           
                        }
                        
                        if((taxable_amount > 700000))
                        {
                              tax_slab_2 = percentage(430000, 10);
                              tax_slab_3 = tax_slab_2  + percentage(tax_remaining,20);  
                              $("#modalname").html(modalname);
                              $("#modaltaxamount").html( taxable_amount);
                              $("#payabletax").html(tax_slab_3);
    
                        }
                    }
                }
                if (validage > 60) {
                    taxable_amount = income - ( Math.min( percentage(income, 20), percentage(loan, 80)  + req_investment) );
                        var tax_payable = taxable_amount - 300000;
                        var tax_slab_2 = 0;
                        var tax_slab_3 =0;
                         var tax_remaining =  tax_payable - 400000 ;
        
        
                        if (taxable_amount < 300000) {
                            $("#modalname").html(modalname);
                            $("#modaltaxamount").html("Hurray ! No tax...");
                        }
                        else {
                            if (taxable_amount >= 300000 && taxable_amount <= 700000) {
                                tax_slab_2 = percentage(tax_payable, 10);
                                $("#modalname").html(modalname);
                                $("#modaltaxamount").html( taxable_amount);
                                $("#payabletax").html(tax_slab_2);
                               
                            }
                            
                            if((taxable_amount > 700000))
                            {
                                  tax_slab_2 = percentage(400000, 10);
                                  tax_slab_3 = tax_slab_2  + percentage(tax_remaining,20); 
                                  $("#modalname").html(modalname);
                                  $("#modaltaxamount").html( taxable_amount);
                                  $("#payabletax").html(tax_slab_3);
        
                            }
                        }
                    }
            $('#exampleModal').modal('show');
        }
    });
});