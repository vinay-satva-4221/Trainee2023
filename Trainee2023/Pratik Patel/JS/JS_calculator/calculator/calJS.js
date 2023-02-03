$(document).ready(function(){
    // debugger
    $("#text").keyup(function(){
        // debugger
        if(isNaN($("#text").val())){
            alert("Enter Numbers")
            $("#text").val("0")
            $("#text").val().replaceAll(/\s/g,'')
            $("#text").val("0")
        } 
    })

    $("#ac").click(function(){
        $("#text").val("0")
        $("#dot").attr("disabled",false)
    });

    $("#7").click(function(){
        append(7)
        btnenable()
    });
    $("#8").click(function(){
        append(8)
        btnenable()
    });
    $("#9").click(function(){
        append(9)
        btnenable()
    });
    $("#6").click(function(){
        append(6)
        btnenable()
    });
    $("#5").click(function(){
        append(5)
        btnenable()
    });
    $("#4").click(function(){
        append(4)
        btnenable()
    });
    $("#3").click(function(){
        append(3)
        btnenable()
    });
    $("#2").click(function(){
        append(2)
        btnenable()
    });
    $("#1").click(function(){
        append(1)
        btnenable()
    });
    $("#0").click(function(){
        append(0)
        btnenable()
    });
    $("#dot").click(function(){
        append(".")
        $(this).attr("disabled",true)
    });
    $("#plus").click(function(){
        append("+")
        btnDisable()


    });
    $("#sub").click(function(){
        append("-")
        btnDisable()
    });
    $("#mul").click(function(){
        append("*")
        btnDisable()
    });
    $("#div").click(function(){
        append("/")
        btnDisable()
    });
    $("#mod").click(function(){
        append("%")
        btnDisable()
    });

    $("#EqualTo").click(function(){
        // debugger
        btnenable()
        let text= $("#text").val()
        // text=eval(text)
        // $("#text").val(text)
        if(text.charAt(0)=="-"){
            // debugger
        let before = text.slice(0, text.lastIndexOf("-"));

        let after = text.slice(text.lastIndexOf("-") + 1);
            before=parseFloat(before)
            after=parseFloat(after)

            text=before-after
            $("#text").val(text)

        }
        if(text.includes("+")){
            addition()
        }  
        if(text.includes("-")){
            subtraction()
        }
        if(text.includes("*")){
            multiplication()
        }
        if(text.includes("/")){
            division()
        }
        if(text.includes("%")){
            mod()
        }


    });

    $("#lastremove").click(function(){
        btnenable()
        let text= $("#text").val()
        text = text.substring(0, text.length-1);
        if(text!=""){
        $("#text").val(text)
    }
    else{
        $("#text").val("0")
    }
    });
    function btnDisable(){
        $("#dot").attr("disabled",false)
        $("#plus").attr("disabled",true)
        $("#sub").attr("disabled",true)
        $("#mul").attr("disabled",true)
        $("#div").attr("disabled",true)
        $("#mod").attr("disabled",true)
    }
    function btnenable(){
        
        $("#plus").attr("disabled",false)
        $("#sub").attr("disabled",false)
        $("#mul").attr("disabled",false)
        $("#div").attr("disabled",false)
        $("#mod").attr("disabled",false)
    }


    function append(a){
        // debugger
       let text= $("#text").val()
       if(text==0){
        text=a
        $("#text").val(text)
       }
       else{
       text=text+a
       $("#text").val(text)
    }
    }
    function addition(){
        // debugger
        let text= $("#text").val()
        const array=text.split(/[+]+/)
        let a=parseFloat(array[0])
        let b=parseFloat(array[1])
        let c=parseFloat(array[2])
        if(isNaN(c)){
            text=a+b
        }
        else{
        text=a+b+c 
    }
    $("#text").val(text)
    }
    function subtraction(){
        let text= $("#text").val()
        const array=text.split(/[-]+/)
        let a=parseFloat(array[0])
        let b=parseFloat(array[1])
        text=a-b
        $("#text").val(text)
    }
    function multiplication(){
        let text= $("#text").val()
        const array=text.split(/[*]+/)
        let a=parseFloat(array[0])
        let b=parseFloat(array[1])
        text=a*b
        $("#text").val(text)
    }
    function division(){
        debugger
        let text= $("#text").val()
        const array=text.split(/[/]+/)
        let a=parseFloat(array[0])
        let b=parseFloat(array[1])
        if(b==0){
            $("#text").val("devide by 0 not posible")
        }
        else{
        text=a/b
        text=parseInt(text)
        $("#text").val(text)
        }
    }
    function mod(){
        let text= $("#text").val()
        const array=text.split(/[%]+/)
        let a=parseFloat(array[0])
        let b=parseFloat(array[1])
        text=a%b
        $("#text").val(text)
    }
})