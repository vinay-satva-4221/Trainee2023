function deleteCharacter() {
    let currentValue = $('#answer').val();
    $('#answer').val(currentValue.substring(0, currentValue.length - 1));
}

$(document).ready(function () {

    $('#answer').keypress(function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
            return false;
        }
    });



    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#dot').click(function(){
		var v = $(this).val();
		$('#answer').val($('#answer').val() + v);	
	});
	$('#C').click(function(){
		$('#answer').val('');
		$('#operation').val('');
		$('#operation').removeClass('activeAnswer');
		$('#equals').attr('onclick','');
	});

    


	$('#plus').click(function(e) { 
       
		if($('#answer').val() == ''){
			return false;
			//$('#equals').attr('onclick','');
		}
        
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#plus').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#subtract').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			//$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#subtract').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#divide').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			//$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#divide').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#multi').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;	
			//$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#multi').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
        
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#multi').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });	
	$('#equals').click(function(){
		
		if($('#equals').attr('onclick') != 'return false'){
		
			var a = $('#answer').val();
			var b = $('#operation').val();
			var c = b.concat(a);
			$('#answer').val(eval(c));
			$('#operation').val(eval(c));
			$('#operation').addClass('activeAnswer');
			$('#equals').attr('onclick','return false');
		
		}
	});



});