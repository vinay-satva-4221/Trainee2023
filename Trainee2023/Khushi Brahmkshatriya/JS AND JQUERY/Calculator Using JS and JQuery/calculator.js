function deleteCharacter() {
    let currentValue = $('#text').val();
    $('#text').val(currentValue.substring(0, currentValue.length - 1));
}

$(document).ready(function () {
    $('#text').keypress(function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
            return false;
        }
    });



    $('.calculator').on('click', function () {
        var value = $(this).attr('value');
       
    
        if (value == '.'.length>2 ) { // only 1 dot
            return false;
           
        }
        else{
            $('#text').val($('#text').val() + value);
        }
    });
    $('.special').one('click',function(){
        var value = $(this).attr('value');
        $('#text').val($('#text').val() + value);
    })


    $('#clearText').click(function () {
        $('#text').val("");
    });

    $('#equal').click(function () {
        
        var empty = $('#text').val();
        if (empty == "") {
            $('#text').attr("placeholder", "Please enter numbers").css("font-weight", "lighter");
            //$('#text').html("");

        }
        else {
            $('#text').val(eval($('#text').val()));
        }
    })


      
})  