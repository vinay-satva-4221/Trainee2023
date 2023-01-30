$(document).ready(function () {
    $.validator.addMethod('validname', function (value) {
        return /^[a-zA-Z\s]+$/.test(value)
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

    $("#income").keypress(function(e){
        var keyCode = e.which;
    
        if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) { 
          return false;
        }
      });
      $("#loan").keypress(function(e){
        var keyCode = e.which;
      
        if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) { 
          return false;
        }
      });
      $("#investment").keypress(function(e){
        var keyCode = e.which;
       
        if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) { 
          return false;
        }
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
               required : false,
               greaterThanZero: false
            },
            loan: {
                greaterThanZero: false,
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
            name: { validname : "Please enter valid name",
                    minlength : "Enter Full Name"},
            mobile: {
                digits: "Enter Numeric value",
                minlength: "Check for 10 digits",
                maxlength: "Number exceed mobile limit"
            },
            birthday: {
                required: "Please enter you date of birth.",
                minAge: "Age Should be 18 years or Above"
            }, 
            gender: {
                required: "Please Select Gender",
            },
            income: "Enter Income-- Can't be blank",
            investment: "Enter Investment-- Can't be blank",
          
        }
    });
    $("#submit").click(function () {

        if ($("#myform").valid() == true) {
            debugger

            var modalname =  $("#name").val() ;
            var loan = parseInt ( $("#loan").val() );
            var investment =  $("#investment").val() ;
            var income = parseInt ( $("#income").val() );
            var req_investment = 0;

            var dob = $('#birthday').val();
            if (dob != '') {
                dob = new Date(dob);
                var today = new Date();
                var validage = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

            }

            if (investment == "" || investment == 0)
            {
                investment = 0;
            }

            if (loan == "" || loan==0) 
            {
                loan = 0;
            }


            if (investment >= 100000) 
            {
             req_investment = 100000;
            }
            else (investment < 100000 || investment == 0  )
             {
                 req_investment = investment;
            }
debugger
          

            if ( (income + loan) <= investment)
            {
                $("#modaltaxamount").html("Income should be greater than investment");
                $("#payabletax").html("Income should be greater than investment");
            }



            if (validage < 60 && $('#gender').val() == 'male' ) {
              
            taxable_amount = income - ( Math.min( percentage(income, 20), percentage(loan, 80)  + req_investment) );
                var tax_payable = taxable_amount - 240000;
                var tax_slab_2 = 0;
                var tax_slab_3 =0;
                 var tax_remaining =  tax_payable - 360000 ;

                if (taxable_amount < 240000) {
                    $("#modalname").html(modalname);
                    $("#modaltaxamount").html("Hurray ! No tax...");
                    $("#RowTaxAmt").css("background-color", "green");
                }
                else {
                    if (taxable_amount >= 240000 && taxable_amount <= 600000) {
                        tax_slab_2 = percentage(tax_payable, 10);


                        $("#modalname").html(modalname);
                        $("#modaltaxamount").html( taxable_amount);
                        $("#payabletax").html(tax_slab_2);
                        $("#RowTaxAmt").css("background-color", "red");
                        $("#RowPayableTax").css("background-color", "red");
                        
                       
                    }
                    if((taxable_amount > 600000))
                    {
                          tax_slab_2 = percentage(360000 , 10);
                          tax_slab_3 = tax_slab_2  + percentage(tax_remaining,20); 


                          $("#modalname").html(modalname);
                          $("#modaltaxamount").html( taxable_amount);
                          $("#payabletax").html(tax_slab_3);
                          $("#RowTaxAmt").css("background-color", "red");
                          $("#RowPayableTax").css("background-color", "red");

                    }
                }
            }
            if (validage < 60 && $('#gender').val() == 'female' ) {
              
                taxable_amount = income - ( Math.min( percentage(income, 20), percentage(loan, 80)  + req_investment) );
    
                    var tax_payable = taxable_amount - 270000;
                    var tax_slab_2 = 0;
                    var tax_slab_3 =0;
                     var tax_remaining =  tax_payable - 430000 ;
    
    
                    if (taxable_amount < 270000) {
                        $("#modalname").html(modalname);
                        $("#modaltaxamount").html("Hurray ! No tax...");
                        $("#RowTaxAmt").css("background-color", "green");
                    }
                    else {
                        if (taxable_amount >= 270000 && taxable_amount <= 700000) {
                            tax_slab_2 = percentage(tax_payable, 10);
                            $("#modalname").html(modalname);
                            $("#modaltaxamount").html( taxable_amount);
                            $("#payabletax").html(tax_slab_2);
                            $("#RowTaxAmt").css("background-color", "red");
                            $("#RowPayableTax").css("background-color", "red");
                           
                        }
                        
                        if((taxable_amount > 700000))
                        {
                              tax_slab_2 = percentage(430000, 10);
                              tax_slab_3 = tax_slab_2  + percentage(tax_remaining,20);  
                              $("#modalname").html(modalname);
                              $("#modaltaxamount").html( taxable_amount);
                              $("#payabletax").html(tax_slab_3);
                              $("#RowTaxAmt").css("background-color", "red");
                              $("#RowPayableTax").css("background-color", "red");
    
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
                            $("#RowTaxAmt").css("background-color", "green");
                        }
                        else {
                            if (taxable_amount >= 300000 && taxable_amount <= 700000) {
                                tax_slab_2 = percentage(tax_payable, 10);
                                $("#modalname").html(modalname);
                                $("#modaltaxamount").html( taxable_amount);
                                $("#payabletax").html(tax_slab_2);
                                $("#RowTaxAmt").css("background-color", "red");
                                $("#RowPayableTax").css("background-color", "red");
                               
                            }
                            if((taxable_amount > 700000))
                            {
                                  tax_slab_2 = percentage(400000, 10);
                                  tax_slab_3 = tax_slab_2  + percentage(tax_remaining,20); 
                                  $("#modalname").html(modalname);
                                  $("#modaltaxamount").html( taxable_amount);
                                  $("#payabletax").html(tax_slab_3);
                                  $("#RowTaxAmt").css("background-color", "red");
                                  $("#RowPayableTax").css("background-color", "red");
                            }
                        }
                    }
            $('#exampleModal').modal('show');
        }
    });
});