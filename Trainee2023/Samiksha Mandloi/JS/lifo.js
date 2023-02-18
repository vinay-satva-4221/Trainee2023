$(document).ready(function(){
    var locations = {
        'Gujarat': ['Ahemdabad', 'Surat', 'Rajkot'],
        'Maharastra': ['Mumbai','Nashik','Pune'],
        'MadhyaPradesh': ['Indore','Bhopal']
    }

    var $locations = $('#city');
    $('#state').change(function () {
        
        var country = $(this).val(), lcns = locations[country] || [];
        
        var html = $.map(lcns, function(lcn){
            return '<option value="' + lcn + '">' + lcn + '</option>'
        }).join('');
        $locations.html(html)
        $('#city').change(function () {
            //debugger
        });   
    });
    display()
    $(document).on('click','#submit',function () {
        
        // debugger
        if(!myFunction()){
            //debugger
            
            $('#exampleModal').modal('hide');
            let a=$(".radio")
            for(let i=0;i<a.length;i++){
                if(a[i].checked){
                    
                    if(i==1){
                        LIFO()
                    }
                    if(i==2){
                        FIFO()
                    }
                }
            }
            
        }
        else{
            //alert("Please Enter all details");
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
    
        return valid
    }
    function mobilecheck(){
        // //debugger
        var valid=true
        
        var string1=/^[0]?[0-9]\d{9}$/
       
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
    // //debugger
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


function display(){
    //debugger
   var Datas=new Array()
    Datas=JSON.parse(localStorage.getItem("Data"))
   list="<tbody><tr><th>SR No.</th><th>name</th><th>Mobile</th><th>State</th><th>City</th><th>zip</th></tr>"
   if(Datas==null){

   }
   else{
   for(let i=0;i<Datas.length;i++){
       list+="<tr id="+[i+1] +"><td>"+[i+1]+"</td><td>"+Datas[i].name+"</td><td>"+Datas[i].mobile+"</td><td>"+Datas[i].state+"</td><td>"+Datas[i].city+"</td><td>"+Datas[i].zip+"</td></tr>"
   }
}
    list += "</tbody>";
   $("#table").html(list)
}

function LIFO(){
    // debugger
    var Name=$("#name").val()
    var Mobile=$("#mobile").val()
    var State=$("#state").val()
    var City=$("#city").val()
    var Zip=$("#zip").val()

    Details=new Array();
    var Details=JSON.parse(localStorage.getItem("Data"))
    if(Details==null){
        Details=[]

    Details.push({
        "name":Name,
        "mobile":Mobile,
        "state":State,
        "city":City,
        "zip":Zip
    })
}
else if(Details.length<5){
    Details.push({
        "name":Name,
        "mobile":Mobile,
        "state":State,
        "city":City,
        "zip":Zip
    })
}

else if(Details.length==5){
    Details.pop()  //first pop the data then push new data
    Details.push({
        "name":Name,
        "mobile":Mobile,
        "state":State,
        "city":City,
        "zip":Zip
    })
    
}

        localStorage.setItem("Data",JSON.stringify(Details))
         display()
}


function FIFO(){
    // debugger
    var Name=$("#name").val()
    var Mobile=$("#mobile").val()
    var State=$("#state").val()
    var City=$("#city").val()
    var Zip=$("#zip").val()

    Details=new Array();
    var Details=JSON.parse(localStorage.getItem("Data"))
    if(Details==null){
        Details=[]
    // console.log(studentsDetails)
    Details.push({
        "name":Name,
        "mobile":Mobile,
        "state":State,
        "city":City,
        "zip":Zip
    })
}
else if(Details.length<5){
    Details.push({
        "name":Name,
        "mobile":Mobile,
        "state":State,
        "city":City,
        "zip":Zip
    })
}


else if(Details.length==5){
    Details.pop()  //remove data from end
    Details.unshift({ //add data from
        "name":Name,
        "mobile":Mobile,
        "state":State,
        "city":City,
        "zip":Zip
    })
    
    
}
        localStorage.setItem("Data",JSON.stringify(Details))
         display()
}
})