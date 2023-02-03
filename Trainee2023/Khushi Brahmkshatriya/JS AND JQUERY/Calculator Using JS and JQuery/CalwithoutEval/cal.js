$(document).ready(function(){

    $('.calculator').on('click',function(){
        
        //var answer1 = $('#answer').val();
        //var ans3 = $(this).val();

        var ans = $(this).val();
        $("#answer").val(ans);

        
    })

    // $('.againCall').on('click',function(){
        
    //     $('#operation').val(($(this).val()))
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
        
        var value1 = parseFloat($("#operation").val( ));
        var value2 = parseFloat($("#answer").val());
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

    })
})