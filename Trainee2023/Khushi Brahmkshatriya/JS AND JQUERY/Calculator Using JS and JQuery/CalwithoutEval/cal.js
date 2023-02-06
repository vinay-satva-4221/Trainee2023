$(document).ready(function(){

    $('.calculator').on('click',function(){
        
        var calculatorValue = $("#answer").val();
        var digitValue = $(this).val();
        var secondTime = $("#answer").val(calculatorValue + digitValue);
    
    })


    // function fnAddCalString (operator){
    //         var oldString =   $("#operation").val();
    //         var ans =  $("#answer").val() ;
            
    //         var newStr = oldString + ans + operator ;
    //         $("#operation").val(newStr);
    // }

    // $('.operation').click(function () {
    //      fnAddCalString($(this).val());
    //     var ans =  $("#answer").val();
        
    //     var opValue = $(this).val();
    //     console.log(opValue);
    //     // $("#operation").val(calculatorValue);
    //     $("#answer").val("");
    //     // $("#operation").val(calculatorValue + opValue);
    // })
    $('.operation').click(function () {
        
        var calculatorValue =  $("#answer").val();
        var opValue = $(this).val();
        console.log(opValue);
        $("#operation").val(calculatorValue);
        $("#answer").val("");
        $("#operation").val(calculatorValue + opValue);
        
        
    })
    $("#C").click(function() {
        $("#answer").val("");
        $("#operation").val("");
    })
    $("#equals").click(function(){
        
        var value1 = parseFloat($("#operation").val());
        var value2 = parseFloat($("#answer").val());
        console.log(value2);   
        debugger
        if(isNaN(value2))
        {
            alert('Not valid');
            $('#answer').val("");
        }
        else
        {
            var opration =  $("#operation").val();
            var result = opration.slice(-1);
    
            if(result == "+"){
                $("#answer").val(value1 + value2);
    
            }
            if(result == "-"){
                $("#answer").val(value1 - value2);
            }
            if(result == "/" ){
                $("#answer").val(value1 / value2);    
            }
            if(result == "*"){
                $("#answer").val(value1 * value2)
            }
            if(result == "%"){
                $("#answer").val(value1 % value2)
            }
        }
        

    })
})