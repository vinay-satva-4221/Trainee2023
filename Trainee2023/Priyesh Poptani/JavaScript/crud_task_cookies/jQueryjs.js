const CityData = '{"Citys":['+
                    '{"StateId":"1","Id":"1","Name":"Indore"},' +
                    '{"StateId":"1","Id":"2","Name":"Bhopal"},' +
                    '{"StateId":"2","Id":"3","Name":"Sirohi"},' +
                    '{"StateId":"2","Id":"4","Name":"Udaipur"},' +
                    '{"StateId":"2","Id":"5","Name":"Jaisalmer"},' +
                    '{"StateId":"3","Id":"6","Name":"Ahmedabad"},' +
                    '{"StateId":"3","Id":"7","Name":"Vadodara"},' +
                    '{"StateId":"3","Id":"8","Name":"Surat"},' +
                    '{"StateId":"4","Id":"9","Name":"Ludhiana"},' +
                    '{"StateId":"4","Id":"10","Name":"Amritsar"},' +
                    '{"StateId":"4","Id":"11","Name":"Patiala"}]}';

const StateData = '{"States":['+
                    '{"Id":"1","Name":"Madhya Pradesh"},' +
                    '{"Id":"2","Name":"Rajasthan"},' +
                    '{"Id":"3","Name":"Gujarat"},' +                    
                    '{"Id":"4","Name":"Punjab"}]}';
$(document).ready(function(){
   
    doShowAll()
   
   
     $("#editMain").hide()
    var StateJsonData = JSON.parse(StateData);
        $.each(StateJsonData.States,function(i,option){
            $("#State").append($('<option></option>').val(option.Id).html(option.Name));
        })

        $("#State").change(function(){
            var CityJsonData = JSON.parse(CityData);
            $("#City").html('');
            $.each(CityJsonData.Citys,function(i,option){
                if($("#State").val() == option.StateId){
                    $("#City").append($('<option></option>').val(option.Id).html(option.Name));
                }
        })

        });


    
    $("#addrow").click(function(e){
        // debugger
        e.preventDefault();
        if(!myFunction()){
            swal("successful");
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
            valid=mobilecheck()
            if(valid==true)
                return valid
            valid=emailcheck()
            if(valid==true)
                return valid
            valid=collegename()
            if(valid==true)
                return valid
            valid=cgpacheck()
            if(valid==true)
                return valid
            valid=checkbranch()
            if(valid==true)
                return valid
            valid=checkstate()
            if(valid==true)
                return valid
            valid=checkzip()
            if(valid==true)
                return valid
            valid=DatePicker()
            if(valid==true)
                return valid
            valid=checkcolors()
            if(valid==true)
                return valid
            addlocalstorage()
            doShowAll()
            
        return valid
        }
        function namecheck(){
            var valid=true
            // //alert("namecheck")
            if($("#name").val()==""){
            $("#namefails").html("Pelase Enter Proper Name")
            valid=true
            }
            var string=/^[a-z A-Z]+$/
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
            // debugger
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
            if(isNaN($("#college").val())){
                valid=false
                $("#collegefails").html("")
            }
            else{
                valid=true
                $("#collegefails").html("Pelase Enter Proper College Name")
            }
            return valid
        }
        function cgpacheck(){
            var valid=true
            if(isNaN($("#cgpa").val())|| $("#cgpa").val()==""){
                $("#cgpafails").html("Please Enter Proper CGPA  less than 10")
                valid=true
            }
            else{
                if($("#cgpa").val()>10){
                    $("#cgpafails").html("Please Enter Proper CGPA less than 10")
                    valid=true
                }
                else{
                    $("#cgpafails").html("")
                    valid=false
                }
            }
            return valid
        }

        function checkbranch(){
            var valid=true
            selectElement = document.querySelector('#branchname');
            output1=selectElement.value;
            if(output1==0){
                $("#branchfails").html("Please Select Branch")
                // document.getElementById("branchfails").innerHTML="Select Gender"
                valid=true;
            }
            else{
                $("#branchfails").html("")
                valid=false
            }
            return valid
        }
        function checkstate(){
            // debugger
            var valid=true
            selectElement = document.querySelector('#colors');
            output1=selectElement.value;
            if(output1==0){
                $("#colorsfails").html("Please Select Color")
                valid=true;
            }
            else{
                $("#colorsfails").html("")
                valid=false
            }
            return valid

        }
        function checkcolors(){
            // debugger
            var valid=true
            selectElement = document.querySelector('#State');
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

    function DatePicker(){
        
        var valid=true
        
        if($("#daterange").val()=="01/01/2018 - 01/15/2018"){
            // //alert("Choose date")
            $("#studyyears").html("Choose Date")
            valid=true
        }
        else{
            $("#studyyears").html("")
            valid=false
        }
        return valid
    }  

    function Statee(State){
        if(State==1){
            State="Madhya Pradesh"
        }
        else if(State==2)
            State="Rajasthan"
        else if(State==3)
            State="Gujarat"
        else
            State="Punjab"
        return State
    }
    function cityy(City){
        if(City==1){
            City="Indore"
        }
        else if(City==2)
            City="Bhopal"
        else if(City==3)
            City="Sirohi"
        else if(City==4)
            City="Udaipur"
        else if(City==5)
            City="Jaisalmer"
        else if(City==6)
            City="Ahemdabad"
        else if(City==7)
            City="Vadodara"
        else if(City==8)
            City="Surat"
        else if(City==9)
            City="Ludhiana"
        else if(City==10)
            City="Amritsar"
        else
            City="Patiala"
        return City
    }
    function addlocalstorage(){

            let Name = $("#name").val();
            let Mobile = $("#mobile").val();
            let Email = $("#email").val();
            let State = $("#State").val();
           State= Statee(State)
            let City = $("#City").val();
            City=cityy(City)
            let Collage = $("#college").val();
            let Branch = $("#branchname").val();
            let CGPA = $("#cgpa").val();
            let FromToWhenYouStudied = $("#daterange").val();
            let Zip = $("#zip").val();
            debugger

                StudentDetails=new Array()
              var StudentDetails= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

                // //alert(StudentDetails.length)
                // document.cookie=Name[StudentDetails.length=1]+"="+$("#colors").val()+";"
                StudentDetails.push({
                    "name":Name,
                    "mobile":Mobile,
                    "email":Email,
                    "state":State,
                    "city":City,
                    "college":Collage,
                    "branch":Branch,
                    "cgpa":CGPA,
                    "fromtowhenyoustudied":FromToWhenYouStudied,
                    "zip":Zip

                })
                
                document.cookie=Name+"="+$("#colors").val()+";"

                localStorage.setItem("users",JSON.stringify(StudentDetails));

                
                swal({
                    title:"Student",
                    text:"Student Detail Added successfully",
                    icon:"success",
                    button:"Ok"
                });
                $("#myModal").modal('hide');
                document.getElementById("myform").reset()
    }
   

    $(".edit").click(function(){
       
        //alert("Edit button Click");
      });

    function doShowAll() {
  
        var student_data=new Array()
         student_data=JSON.parse(localStorage.getItem("users"));
            var list = "<tr><th>SR.No</th><th>Name</th><th>Mobile</th><th>Email</th><th>College Name</th><th>CGPA</th><th>Branch Name</th><th>study period</th><th>State</th><th>City</th><th>zip</th><th>Color</th><th></th><th></th> </tr>\n";
            // var i = 0;
            if(student_data){
            for ( let i = 0; i < student_data.length; i++) {
            
               let coloor= getCookie(student_data[i].name)
                list+="<tr><td>"+[i+1]+"</td><td>"+student_data[i].name+"</td><td>"+student_data[i].mobile+"</td><td>"+student_data[i].email+"</td><td>"+student_data[i].college+"</td><td>"+student_data[i].cgpa+"</td><td>"+student_data[i].branch+"</td><td>"+student_data[i].fromtowhenyoustudied+"</td><td>"+student_data[i].state+"</td><td>"+student_data[i].city+"</td><td>"+student_data[i].zip+"</td><td>"+coloor+"</td> <td> <button type='button' data-val="+[i+1]+" class='edit btn btn-success'>Edit</button><td> <button type='button' data-val="+[i+1]+" data-val='1' class='delete btn btn-danger'>Delete</button></td></tr>\n"
               
            }
        }
        $("#table").html(list)
        backgroundColor()
        Tablerow()
        
    }

    function getCookie(uname){
        debugger
        let nameq = uname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(nameq) == 0) {
            return c.substring(nameq.length, c.length);
            }
        }
        return "";
    }
    $(document).on('click','.delete',function () {
        debugger
        // $("button").closest("tr").hide()
       var index=parseInt( $(this).data('val'))
       alert(index)
        deleteData=JSON.parse(localStorage.getItem("users"))
        let CookieName=$('#table tr:eq('+ index+') td:nth-child(2)').text()
        console.log(deleteData)
        $(this).parent().parent().hide()
        deleteData.splice(index-1, 1);
        document.cookie = CookieName+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        localStorage.setItem("users",JSON.stringify(deleteData));
        doShowAll()

      });

      $(document).on('click','.edit',function () {

        
        $("#addrow").hide()
        $("#export").hide()
        $("#editMain").show()
        var index=parseInt( $(this).data('val'))-1
        let i=index+1
        let CookieName=$('#table tr:eq('+ i+') td:nth-child(2)').text()
        alert(CookieName)
        document.cookie = CookieName+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        Data=JSON.parse(localStorage.getItem("users"))
        $("#name").val(Data[index].name)
        $("#mobile").val(Data[index].mobile)
        $("#email").val(Data[index].email)
        $("#college").val(Data[index].college)
        $("#cgpa").val(Data[index].cgpa)
        $("#branchname").val(Data[index].branch)
        $("#State").val(Data[index].state)
        $("#City").val(Data[index].city)
        $("#zip").val(Data[index].zip)
        $("#colors").val(getCookie(Data[index].name))
        $("#hidden").val(index)

         
        
      });
      
      $(document).on('click','#editMain',function () {
        
        //alert("hello")
        let Name = $("#name").val();
        let Mobile = $("#mobile").val();
        let Email = $("#email").val();
        let State = $("#State").val();
        State=Statee(State)
        let City = $("#City").val();
        City=cityy(City)
        let Collage = $("#college").val();
        let Branch = $("#branchname").val();
        let CGPA = $("#cgpa").val();
        let FromToWhenYouStudied = $("#daterange").val();
        let Zip = $("#zip").val();
        let index=$("#hidden").val();
        
    var student_data=new Array()
     student_data=JSON.parse(localStorage.getItem("users"));
     student_data[index].name=Name
     student_data[index].mobile=Mobile
     student_data[index].email=Email
     student_data[index].college=Collage
     student_data[index].cgpa=CGPA
     student_data[index].branch=Branch
     student_data[index].state=State
     student_data[index].city=City
     student_data[index].fromtowhenyoustudied=FromToWhenYouStudied
     student_data[index].zip=Zip
     
     document.cookie=Name+"="+$("#colors").val()+";"
     localStorage.setItem("users",JSON.stringify(student_data));
   
     doShowAll()

     $("#addrow").show()
    $("#export").show()
    $("#editMain").hide()

   })


      $("#slide").click(function(){
        $(".main").fadeToggle();
      });
      $("#daterange").daterangepicker({},function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
      $("#export").click(function(){
            TableToExcel.convert(document.getElementById("table"));
           
        })
        function backgroundColor(){
            let bgcolor= $('#table tr:last td:nth-child(12)').text()
       $("body").css("background-color", bgcolor);
        }
        function Tablerow(){
            debugger 
            var rowCount = $("#table tr").length;
            for (let i=1;i<rowCount;i++){
                let trcolor=$('#table tr:eq('+ i+') td:nth-child(12)').text()
                //alert($(this).text())
                $('#table tr:eq('+ i+')').css("background-color", trcolor);
            }
        }
        $("#removeCookie").click(function(){
            debugger
            var rowCount = $("#table tr").length;
            for (let i=1;i<rowCount;i++){
                let Trname=$('#table tr:eq('+ i+') td:nth-child(2)').text()
                //alert($(this).text())
                document.cookie = Trname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
            }
            doShowAll()
            
        })
  });