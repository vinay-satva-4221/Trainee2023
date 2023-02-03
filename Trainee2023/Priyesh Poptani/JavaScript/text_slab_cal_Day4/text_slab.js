//function mycalculatebtn() {
   
//     // genderfor();
//     // namevalidate();
//     // numbervalidate();
//     // birthdayvalid();
//     $('#f1').blur(function()
// {
//     if( $(this).val().length === 0 ) {
//         $(this).parents('p').addClass('warning');
//     }
// });

//}


// function namevalidate(){

//     var regName = /^[a-zA-Z]+$/;
//     var name = document.getElementById('firstname').value;
//     var vname = document.getElementById('errorfname')
//     if(!regName.test(name)){
//         vname.innerHTML=('Please enter your valid name.');
//         document.getElementById('errorfname').style.display="unset";
//         document.getElementById('firstname').focus();
        
//         return false    ;
//     }else{
//         document.getElementById('errorfname').style.display="none";
//         return true;

//     }
// }

// function numbervalidate()
// {
    
//     var regName = /^\d{10}$/;
//     var name = document.getElementById('mobile').value;
//     var vname = document.getElementById('errornumber')
//     if(!regName.test(name)){
//         vname.innerHTML=('Please enter only 10 digit number.');
//         document.getElementById('errornumber').style.display="unset";
//         document.getElementById('mobile').focus();
        
//         return false    ;
//     }else{
//         document.getElementById('errornumber').style.display="none";
//         return true;

//     }
// }


// // $(function() {
// //     $('input[name="birthday"]').daterangepicker({
// //       singleDatePicker: true,
// //       showDropdowns: true,
// //       minYear: 1901,
// //       maxYear: parseInt(moment().format('YYYY'),10)
// //     }, function(start, end, label) {
// //       var years = moment().diff(start, 'years');
// //       alert("You are " + years + " years old!");
// //     });
// //   });

// function birthdayvalid()
// {
//     var gender=document.getElementById("birth");
//     if(gender.value=="")
//     {
//         document.getElementById("errorbirth").innerHTML="please select birthday field";
//         document.getElementById("errorbirth").style.display="unset";
//         document.getElementById("errorbirth").focus();
//         return false;


//     }
//     document.getElementById("errorbirth").style.display="none";
//     return true;
// }

// function genderfor()
// {
//     var gender=document.getElementById("gender");
//     if(gender.value=="")
//     {
//         document.getElementById("errorgender").innerHTML="please select gender field";
//         document.getElementById("errorgender").style.display="unset";
//         document.getElementById("errorgender").focus();
//         return false;


//     }
//     document.getElementById("errorgender").style.display="none";
//     return true;
// }


// $(document).ready(function()
// {
// var data=$('#income').val();
// $('#btn_1').click(function(){
// var length = data.length;
// if(length < 10)
// {
//     document.getElementById("errorincome").innerHTML="please select field";
//         document.getElementById("errorincome").style.display="unset";
//         document.getElementById("errorincome").focus();
//         return false;
// }
// else
// {
//     document.getElementById("errorincome").innerHTML="";
//     return true;
// }
// });
// });

    









// // $("#btn_2").bind("click", function() {
// //     $("input[type=text],textarea").val("");
// //     $("select,textarea").val("");
// //     $('input[type=date]').val('0000-00-00');
    
// //   });


    
$(document).ready(function(){   
    $.validator.addMethod('fname',
function(value)
{
    return /^[a-zA-Z]+$/.test(value)
},
'plz enter a valid name'
);

$('#btn_1').click(function(){
    if($('#f1').valid()==true)
    {
        $('#exampleModal').modal('show');
    }
});

$('#f1').validate({
rules:{
    fname:{
        required:true,
        fname:true
    },

    number:{
        required:true,
        
        minlength:10
        

    },
    birthday:{
        required:true,
        date: true
    },
    gender:{
        required:true
    },
    income:{
        required:true,
        number: true
    },
    loun:{
        required:true,
        number: true
    },
    investment:{
        required:true,
        number: true
    }

},


messages:{
    fname:"Enter Your name",
    number:"Enter your number",
    birthday:"Enter your birthday",
    gender:"Enter your gender",
    income:"Enter your income",
    loun:"Enter your loun emount",
    investment:"Enter your investment"
},
});
   
});


function getdata()
{
    var messages
    var p
    var maletex
    var k
    var maletex2
    var textfinalresult
    var final



    var inc = document.getElementById('income').value;
    var lou = document.getElementById('loan').value;
    var inv = document.getElementById('investment').value;

    var getinc= (parseInt(inc) * 20) / 100;
 
    var getlou= (parseInt(lou) * 80) / 100;

    var taxamount= (Math.min(getinc,getlou));

    var taxtamountend= parseInt(inc) - (parseInt(taxamount) + parseInt(inv));

    console.log(taxtamountend)

    document.getElementById('namef').innerHTML=document.getElementById('firstname').value;
    document.getElementById('texta').innerHTML=taxtamountend;
    debugger
    // console.log(taxtamountend);
    var gender = document.getElementById('gender').value;
    
    
    
    if(gender=='male')
    {
   if(taxtamountend <= 240000)
   {
        messages="no tax";
        document.getElementById(taxtamountend).value = messages;
   }

   
    
   else if(taxtamountend >= 260000 && taxtamountend <= 600000)
   {
        var p= parseInt(taxtamountend)-240000;
       
        var maletex= (parseInt(p) * 10) / 100;
    }

  
   else if (taxtamountend >  600000)
   {
        var k= parseInt(taxtamountend)-600000;
        
        var maletex2= (parseInt(k) * 20) / 100;
       

        var textfinalresult = parseInt(maletex) + parseInt(maletex2);
        
        var final=parseInt(maletex)+parseInt(textfinalresult);
        return final;
   }
}

    // var gender = document.getElementById('gender').value;
    // if(gender=='female')
    // {
    //     if(inc == 260000)
    //     {
    //         messages="no tex";
    //         document.getElementById("income").value = messages;
    //     }
    //     else if(inc > 260000 && inc < 700000)
    //     {
    //         var femaletex= (parseInt(inc) * 10) / 100;
    //         var femaletexfinal=parseInt(femaletex)+parseInt(taxtamountend);
    //         document.getElementById("income").value=femaletexfinal;

    //     }
    //     else if(inc >  700000)
    //     {
    //         var femaletex= (parseInt(inc) * 20) / 100;
    //         var femaletexfinal=parseInt(femaletex)+parseInt(taxtamountend);
    //         document.getElementById("income").value=femaletexfinal;

    //     }
    // }
   
}

