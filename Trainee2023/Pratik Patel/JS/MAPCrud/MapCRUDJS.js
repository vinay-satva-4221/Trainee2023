$(document).ready(function(){
    var map=new Map()
    display()
    $("#Edit").hide()
    $("#submit").click(function(){
        ////debugger
        // addData()


        if(!myFunction()){
            swal({
                title:"Deatils",
                text:"Detail Added successfully",
                icon:"success",
                button:"Ok"
            });
            addData()
        }
        else{
            swal("Please Enter all details");
        }
    })
    function myFunction() { 
        var valid=false
        
            valid= namecheck()
            if(valid==true)
             return valid
            valid=emailcheck()
            if(valid==true)
                return valid
            valid=collegename()
            if(valid==true)
                return valid
            valid=mobilecheck()
            if(valid==true)
                return valid
            valid=checkzip()
            if(valid==true)
                return valid
            valid=checkcity()
            if(valid==true)
                return valid
        }
        function namecheck(){
            var valid=true
            // //alert("namecheck")
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
            // //alert(valid)
            return valid
        }
        function mobilecheck(){
            // //debugger
            var valid=true
            
            var string1=/^[0]?[789]\d{9}$/
            // var a=$("#mobile").val()
            // //alert(a)
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

        function emailcheck(){
            var valid=true
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if($("#email").val().match(mailformat)){
                $("#emailfails").html("")
                valid=false
            }
            else{
                $("#emailfails").html("Pelase Enter Proper Emails")
                valid=true
            }
            return valid

        }

        function collegename(){
            var valid=true
            if(isNaN($("#collegename").val())){
                valid=false
                $("#collegefails").html("")
            }
            else{
                valid=true
                $("#collegefails").html("Pelase Enter Proper College Name")
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

    function checkcity(){
        // //debugger
        var valid=true
        selectElement = document.querySelector('#city');
        output1=selectElement.value;
        if(output1==0){
            $("#cityfails").html("Please Select State")
            valid=true;
        }
        else{
            $("#cityfails").html("")
            valid=false
        }
        return valid

    }

    function addData(){
        // //debugger
        var NAME=$("#name").val()
        var EMAIL=$("#email").val()
        var COLLEGENAME=$("#collegename").val()
        var MOBILE=$("#mobile").val()
        var ZIP=$("#zip").val()
        var CITY=$("#city").val()
        
        var object={
            "name":NAME,
            "email":EMAIL,
            "collegename":COLLEGENAME,
            "mobile":MOBILE,
            "zip":ZIP,
            "city":CITY
        }
        let obj=JSON.stringify(object)
        map.set(map.size+1,obj)

        console.log(map)
        $("input[type=text], #city ,#email").val("");
        display()
    }
    // function display(){
    //     ////debugger
    //     console.log(map)
    //     var list = "<tbody><tr><th>SR.No</th><th>Name</th><th>Mobile</th><th>Email</th><th>College Name</th><th>City</th><th>Mobile</th><th>zip</th><th></th><th></th> </tr>\n";
        
    //         for ( let i = 0; i < map.size; i++) {
    //          var Data=JSON.parse(map.get(i+1))
    //             list+="<tr><td>"+[i+1]+"</td><td>"+Data.name+"</td><td>"+Data.mobile+"</td><td>"+Data.email+"</td><td>"+Data.collegename+"</td><td>"+Data.city+"</td><td>"+Data.mobile+"</td><td>"+Data.zip+"</td> <td> <button type='button' data-val="+[i+1]+" class='edit btn btn-success'>Edit</button><td> <button type='button' data-val="+[i+1]+" data-val='1' class='delete btn btn-danger'>Delete</button></td></tr>\n"
         
            
    //     }
    //     list+="</tbody>"
    //     $("#table").html(list)
    // }

    function display(){
        console.log(map)
        var list = "<tbody><tr><th>SR.No</th><th>Name</th><th>Mobile</th><th>Email</th><th>College Name</th><th>City</th><th>Mobile</th><th>zip</th><th></th><th></th> </tr>\n";
        let i=0;
        map.forEach(function(value,key,index){
            
            var Data=JSON.parse(map.get(key))
            list+="<tr><td>"+[i+1]+"</td><td>"+Data.name+"</td><td>"+Data.mobile+"</td><td>"+Data.email+"</td><td>"+Data.collegename+"</td><td>"+Data.city+"</td><td>"+Data.mobile+"</td><td>"+Data.zip+"</td> <td> <button type='button' data-val="+key+" class='edit btn btn-success'>Edit</button><td> <button type='button' data-val="+key+" data-val='1' class='delete btn btn-danger'>Delete</button></td></tr>\n"
            i++
        })
        list+="</tbody>"
        $("#table").html(list)

    }
    $(document).on('click','.delete',function () {
        //debugger
        // $("button").closest("tr").hide()
       var index11=parseInt( $(this).data('val'))
       ////alert(index)

        // map.delete(index)
        
        // console.log(map)


        // ---------
        // map.forEach(function(key,index,value){
        //     //alert(key)
        //     //alert(typeof(key))
        //     if(key==index11){
        //         map.delete(key)
        //     }
        //     if(key>=index){
        //         key--;
        //         map.set(key,value)
        //     }
        // })
       
        for (let i=1;i<=map.size;i++){
            
            if(i==index11){
                map.delete(index11)
                
            }
            
            if(i>=index11){
                if(i-1==map.size){
                    break
                }
                else{
                    var Details=JSON.parse(map.get(i+1))
            
                let key=i;
                map.set(key,JSON.stringify(Details))
                map.delete(i+1)
                console.log(map)
            }
            }
        }
        
        display()

      });

      $(document).on('click','.edit',function () {
        //debugger
        $("#Edit").show()
        $("#submit").hide()
        ////debugger
        var index1=$(this).data('val')
        


        var Data=JSON.parse(map.get(index1))
        //alert("before Set Data"+index1)
        $("#name").val(Data.name)
        $("#email").val(Data.email)
        $("#collegename").val(Data.collegename)
        $("#mobile").val(Data.mobile)
        $("#zip").val(Data.zip)
        $("#city").val(Data.city)
        $("#hidden").val(index1)
        // //alert("After Set Data"+index1)
        // Edit(index1)
        //alert($("#hidden").val())
        

    });

 
        $(document).on('click','#Edit',function () {
            // //alert("In Main Edit button click"+i)
            ////debugger
        var NAME=$("#name").val()
        var EMAIL=$("#email").val()
        var COLLEGENAME=$("#collegename").val()
        var MOBILE=$("#mobile").val()
        var ZIP=$("#zip").val()
        var CITY=$("#city").val()
        var INDEX=$("#hidden").val()

        var object={
            "name":NAME,
            "email":EMAIL,
            "collegename":COLLEGENAME,
            "mobile":MOBILE,
            "zip":ZIP,
            "city":CITY
        }
        let obj=JSON.stringify(object)

        map.set(parseInt(INDEX),obj)
        
        display()
        
        $("#Edit").hide()
        $("#submit").show()
        // $("input[type=text], #city ,#email").val("");
        });
    

})