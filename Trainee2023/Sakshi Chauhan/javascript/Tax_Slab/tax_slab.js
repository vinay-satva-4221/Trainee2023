
$(document).ready(function(){
    $.validator.addMethod('validfname',
        function(value){
            return /^[a-zA-Z]+$/.test(value)
        }, 
    );
    $.validator.addMethod('validnumber',
        function(value){
            return /^[0-9]{10}$/.test(value)
        }, 
    );
	$.validator.addMethod('validdigit',
        function(value){
            return /^[0-9]+$/.test(value)
        }, 
    );
	$(function() {
		$('input[name="birthday"]').daterangepicker({
		  singleDatePicker: true,
		  showDropdowns: true,
		  minYear: 1901,
		  maxYear: parseInt(moment().format('YYYY'),10)
		});
	  });
	  // $("#reset").click(function(){
        // swal("Are you sure you want to do this?", {
        //     buttons: ["Oh No!", "Yess!"],
        //   });
        // });     
		

		//var incomee;
		//var inc;
        //$("#income").on('input', function(){
        //    incomee = $('#income').val();
		//		inc = (incomee * 20) / 100;
        //     console.log("income 20%: "+inc);
        // });   
        
        // $("#loan").on('input', function(){
        //     var loann = $('#loan').val();
        //     var loa = (loann * 80) / 100;
        //     console.log("Loan 80%: "+loa);
        // });  

        // $("#investmenet").on('input', function(){
        //     var invest = $('#investmenet').val();
        //     var total = (invest(Math.min(inc,loa)));
        //     console.log("investement"+total);
        // });  
     
        $('#submit1').click(function(){
             if($('#frm').valid()==true)
             {
				  var income =parseInt(document.getElementById('income').value); 
				
				  var invest = parseInt(document.getElementById('investmenet').value);

					if(income>invest)
					{
						data();
					}
					else
					{
						alert('Investment can not be greater than Income.');
					}
             }
        });
      
    $('#frm').validate({
        rules:{
            fname:{
                required : true,
                minlength: 2,
				maxlength: 20,
                validfname: true
            },
            mobile:{
                required: true,
                validnumber: true
            },
            birthday:{
                required: true,
            },
            gender:{
                required: true
            },
            income:{
                required: true,
				minlength: 2,
				validdigit: true
            },
            loan:{
                required: true,
				validdigit: true
            },
            investement:{
                required: true,
				minlength: 1,
				validdigit: true
            },
        
        },
        messages:{
            fname:"Please Enter Your Name",
            mobile: "Please Enter Your Number",
            birthday: "Please Enter Your Birthday",
            gender: "Please Enter Your Gender",
            income: "Please Enter Only Digits",
            loan: "Please Enter Only Digits",
            investement: "Please Enter Only Digits",
        },
    });

});

function CalculateTaxAmount(income,loan,invest)
{
	var finalIncome = (parseInt(income) * 20)/100;
    var finalLoan = (parseInt(loan) * 80)/100;
    var taxamount= (Math.min(finalIncome,finalLoan));
    var tax= parseInt(income) - (parseInt(taxamount) + parseInt(invest));
	return tax;
}

function GetAge(bday) 
{
	
	var today = new Date();
    var birthDate = new Date(bday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function CalculateTaxForSeniorcitizen(FinalTaxableAmount)
{
	var NillTaxable=300000;
	var TenPercentTaxableMin=300000;
	var TenPercentTaxableMax=700000;
	
	var TaxAmount=0;
	
		if(FinalTaxableAmount<=NillTaxable)
		{
			return 0;
		}
		if(FinalTaxableAmount>TenPercentTaxableMin)
		{
			var TaxPercentage=10;
			var TenPercentSlabAmount=TenPercentTaxableMax-TenPercentTaxableMin;
			var TaxAmount = TaxAmount + (TenPercentSlabAmount * TaxPercentage)/100;
			
		}
		if(FinalTaxableAmount>TenPercentTaxableMax)
		{
			var TaxPercentage=20;
			var TwentyPercentSlabAmount=FinalTaxableAmount-TenPercentTaxableMax;
			TaxAmount =TaxAmount + (TwentyPercentSlabAmount * TaxPercentage)/100;
			 
		}
		return TaxAmount;
}

function CalculateTaxForMan(FinalTaxableAmount)
{
	var NillTaxable=240000;
	var TenPercentTaxableMin=240000;
	var TenPercentTaxableMax=600000;
	var TaxAmount=0;
		if(FinalTaxableAmount<=NillTaxable)
		{
			return 0;
			
		}
		if(FinalTaxableAmount>TenPercentTaxableMin)
		{
			var TaxPercentage=10;
			var TenPercentSlabAmount=TenPercentTaxableMax-TenPercentTaxableMin;
			TaxAmount =TaxAmount + (TenPercentSlabAmount * TaxPercentage)/100;
			
		}
		if(FinalTaxableAmount>TenPercentTaxableMax)
		{
			var TaxPercentage=20;
			
			var TwentyPercentSlabAmount=FinalTaxableAmount-TenPercentTaxableMax;
			TaxAmount =TaxAmount + (TwentyPercentSlabAmount * TaxPercentage)/100;
			
		}
		return TaxAmount;
}

function CalculateTaxForFemale(FinalTaxableAmount)
{
	var NillTaxable=260000;
	var TenPercentTaxableMin=260000;
	var TenPercentTaxableMax=700000;
	var TaxAmount =0;
		if(FinalTaxableAmount<=NillTaxable)
		{
			return 0;
			
		}
		if(FinalTaxableAmount>TenPercentTaxableMin)
		{
			var TaxPercentage=10;
			var TenPercentSlabAmount=TenPercentTaxableMax-TenPercentTaxableMin;
			TaxAmount =TaxAmount + (TenPercentSlabAmount * TaxPercentage)/100;
			
		}
		if(FinalTaxableAmount>TenPercentTaxableMax)
		{
			var TaxPercentage=20;
			var TwentyPercentSlabAmount=FinalTaxableAmount-TenPercentTaxableMax;
			TaxAmount =TaxAmount + (TwentyPercentSlabAmount * TaxPercentage)/100;
			
		}
		return TaxAmount;
}

function data()
{

    var incomee = document.getElementById('income').value;
    var loann = document.getElementById('loan').value;
    var invest = document.getElementById('investmenet').value;
	var bday = document.getElementById('birthday').value;
	
	if(invest>100000)
	{
		invest=100000;
	}
	// var Currency = currency(income,loan,investement);
	var FinalAge=GetAge(bday);
	
	if(FinalAge<18)	
	{
		document.getElementById('NameforEmp').innerHTML = document.getElementById('fname').value;
		$('#modelforNonTaxable').modal('show');
		return;
	}
	var FinalTaxableAmount = CalculateTaxAmount(incomee,loann,invest);
    //var finalIncome = (parseInt(incomee) * 20)/100;
    //var finalLoan = (parseInt(loann) * 80)/100;
    //var taxamount= (Math.min(finalIncome,finalLoan));
    //var tax= parseInt(incomee) - (parseInt(taxamount) + parseInt(invest));
    //console.log(FinalTaxableAmount);
    
	var selectedgender = document.getElementById("gender");
	var genderValue = selectedgender.value;
	
	var FinalTaxAmount=0;
	
	if(FinalAge>=60)
	{
		FinalTaxAmount=CalculateTaxForSeniorcitizen(FinalTaxableAmount);
	}
	else if(genderValue=='male')
	{
		FinalTaxAmount=CalculateTaxForMan(FinalTaxableAmount);
	}
	else
	{
		FinalTaxAmount=CalculateTaxForFemale(FinalTaxableAmount);
	}
	
	document.getElementById('first_name').innerHTML=document.getElementById('fname').value;
    document.getElementById("taxableammount").innerHTML = FinalTaxableAmount;
	document.getElementById("taxamount").innerHTML = FinalTaxAmount;
	
	$('#model').modal('show');
   
}