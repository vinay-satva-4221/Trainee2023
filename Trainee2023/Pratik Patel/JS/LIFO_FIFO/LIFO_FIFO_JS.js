$(document).ready(function(){
    var locations = {
        'Gujarat': ['Ahemdabad', 'Surat', 'Rajkot'],
        'Maharastra': ['Mumbai','Nashik','Pune'],
        'MadhyaPradesh': ['Indore','Bhopal']
    }

    var $locations = $('#city');
    $('#state').change(function () {
        alert($(this).val())
        var country = $(this).val(), lcns = locations[country] || [];
        
        var html = $.map(lcns, function(lcn){
            return '<option value="' + lcn + '">' + lcn + '</option>'
        }).join('');
        $locations.html(html)
        $('#city').change(function () {
            debugger
        alert($("#city").val());
    });   
    });
    $(document).on('click','#submit',function () {
        alert($(".radio").val()) 
        debugger
        if(!myFunction()){
            alert("successful");
        }
        else{
            alert("Please Enter all details");
        }
    })
    function myFunction(){
        var valid=false
        valid= namecheck()
       if(valid==true)
       return valid
       valid=checkstate()
       if(valid==true)
       return valid
       valid= checkzip()
       if(valid==true)
       return valid
       valid= mobilecheck()
       if(valid==true)
       return valid

    return valid
    }
    function namecheck(){
        var valid=true
        // alert("namecheck")
        if($("#name").val()==""){
        $("#namefails").html("Pelase Enter Proper Name")
        valid=true
        }
        var string=/^[a-zA-Z]+$/
        if($("#name").val().match(string)){
        $("#namefails").html("")
        valid=false
        }
        else{
            $("#namefails").html("Pelase Enter Proper Name")
        }
        // alert(valid)
        return valid
    }
    function mobilecheck(){
        // debugger
        var valid=true
        
        var string1=/^[0]?[789]\d{9}$/
        // var a=$("#mobile").val()
        // alert(a)
        if($("#mobile").val().match(string1)){
            $("#mobilefails").html("")
            valid=false
        }
        else{
            $("#mobilefails").html("Pelase Enter 10 Digits")
            valid=true
        }
        return valid
    }
    function checkzip(){
        var valid=true

        if(isNaN($("#zip").val())){
            $("#zipfails").html("Enter 6 Digits")
            valid=true
        }
        else{
            if($("#zip").val().length<6 || $("#zip").val().length>6){
                $("#zipfails").html("Enter 6 Digits")
             }
             if($("#zip").val().length==6){
                $("#zipfails").html("")
                valid=false
             }
        }
        return valid
} 
function checkstate(){
    // debugger
    var valid=true
    selectElement = document.querySelector('#state');
    output1=selectElement.value;
    if(output1==0){
        $("#statefails").html("Please Select State")
        valid=true;
    }
    else{
        $("#statefails").html("")
        valid=false
    }
    return valid

}

})