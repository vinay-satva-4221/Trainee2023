$(document).ready(function(){
    // var StateObject={
    //     "Gujarat": ["ahemdabad", "surat", "rajkot", "navsari"],
    //     "MP":["A","B","C"],
    //     "UP":["X","Y","Z"]
    // }

    // for(var x in StateObject){
    //     $("#")
    // }

    $(document).on('click','#submit',function () {
        debugger
        namecheck()
    alert("aj")
    })
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
})