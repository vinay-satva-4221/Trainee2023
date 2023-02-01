

$(document).ready(function () {



    // var input = '';
// $("#dot").click(function() {
   
//  var input = $(this).attr("value");
//  if (input === '.') {
//       if (input === '.' + '.') {
//         input = '';
//       }
//     }
// });
    
   
    $(".digit").click(function () {
        
        var calculatorValue = $("#calc1").val();
        var digitValue = $(this).val();
        $("#calc1").val(calculatorValue + digitValue);
    })

    $(".operator").click(function () {
        var calculatorValue =  $("#calc1").val();
        var opValue = $(this).val();
        console.log(opValue);
        $("#calc2").val(calculatorValue);
        $("#calc1").val("");
        $("#operation").val(opValue);

    })

    $("#ac").click(function() {
        $("#calc1").val("0");
        $("#calc2").val("0");
    })



    $("#equals").click(function(){
        var value1 = parseFloat($("#calc1").val());
        var value2 = parseFloat($("#calc2").val());
        var opration =  $("#operation").val();
        if(opration == "+"){
            $("#calc1").val(  value2 + value1  );
        }
        if(opration == "-"){
            $("#calc1").val(  value2 - value1  );
        }
        if(opration == "/" ){
            $("#calc1").val(  value2 / value1  );    
        }
        if(opration == "*"){
            $("#calc1").val(  value2 * value1  )
        }
        if(opration == "%"){
            $("#calc1").val(  value2 % value1  )
        }

        $("#calc2").val(calculatorValue);
        $("#calc1").val("");
        $("#operation").val(opValue);
    })
});