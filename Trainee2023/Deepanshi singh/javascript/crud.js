function validateform(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var address=document.getElementById("address").value;
    var email=document.getElementById("email").value;
    var colors=document.getElementById("colors").value;
    console.log(name);
   if(name==''){
    alert("name is required");
    return false;
   }
   if(age==""){
    alert("age is required");
    return false;
   }
   if(address==''){
    alert("address is required");
    return false;
   }
   if(email==''){
    alert("email is required");
    return false;
   }
   if(colors==''){
      alert("email is required");
      return false;
     }
   return true;
}
   function showdata(){
    var arr;
        if(localStorage.getItem("arr")==null){
            arr=[];
        }
     else{
        arr=JSON.parse(localStorage.getItem("arr"));
     }
     var html="";
     arr.forEach(function(element,index){
        html+="<tr>";
        html+="<td>" + element.name + "</td>";
        html+="<td>" + element.age + "</td>";
        html+="<td>" +element.address + "</td>";
        html+="<td>" + element.email + "</td>";
        html+="<td>" + element.colors + "</td>";
        html+='<td><button onclick="deleteData('+index+')" class="btn btn-danger">delete</button><button onclick="updateDdata('+ index + ')" class="btn btn-warning mt-2">edit</button></td>';
        html+="<tr>";
     });
     document.querySelector("#crudTable tbody").innerHTML=html;
    } 
    document.onload=showdata();

    function adddata(){
        var name=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        document.cookie=email + "=" + $("#colors").val()+";"


        if(validateform()==true){
            var name=document.getElementById("name").value;
            var age=document.getElementById("age").value;
            var address=document.getElementById("address").value;
            var email=document.getElementById("email").value;
            var colors=document.getElementById("colors").value;
           var arr;
           if(localStorage.getItem("arr")==null){
            arr=[];
        }
     else{
        arr=JSON.parse(localStorage.getItem("arr"));
     }
        arr.push({
            name : name,
            age:age,
            address:address,
            email:email,
            colors:colors,
        });
        localStorage.setItem("arr",JSON.stringify(arr));
        showdata();
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("address").value="";
        document.getElementById("email").value="";
        document.getElementById("colors").value="";
    }
    }
    //function to delete
    function deleteData(index){
        var arr;
        if(localStorage.getItem("arr")==null){
            arr=[];
        }
     else{
        arr=JSON.parse(localStorage.getItem("arr"));
     }
     arr.splice(index,1);
     localStorage.setItem("arr",JSON.stringify(arr));
     showdata();
    }
    //function to edit
    function updateDdata(index){
        document.getElementById("submit").style.display="none";
        document.getElementById("update").style.display="block";
//         let indexEdit = (index+1)
//   let CookieName = $("#crudTable tr:eq(" + indexEdit + ") td:nth-child(2)").text();
// //   alert(CookieName)
//   document.cookie = CookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        var arr;
        if(localStorage.getItem("arr")==null){
            arr=[];
        }
     else{
        arr=JSON.parse(localStorage.getItem("arr"));
     }
     document.getElementById("name").value=arr[index].name;
     document.getElementById("age").value=arr[index].age;
     document.getElementById("address").value=arr[index].address;
     document.getElementById("email").value=arr[index].email;
     document.getElementById("colors").value=arr[index].colors;
     
     document.querySelector("#update").onclick=function(){
        if(validateform()==true){
       arr[index].name=document.getElementById("name").value;
       arr[index].age=document.getElementById("age").value;
       arr[index].address=document.getElementById("address").value;
       arr[index].email=document.getElementById("email").value;
       arr[index].colors=document.getElementById("colors").value;
    //    document.cookie = arr[index].name + "=" + $("#colors").val() + ";"

      
       localStorage.setItem("arr",JSON.stringify(arr));
       showdata();
       document.getElementById("name").value="";
       document.getElementById("age").value="";
       document.getElementById("address").value="";
       document.getElementById("email").value="";
       document.getElementById("colors").value="";
       document.getElementById("submit").style.display="block";
       document.getElementById("update").style.display="none";
        }
     }
    }
    function backgroundColor(){
        let bgcolor= $('#crudTable tr:last td:nth-child(7)').text()
   $("body").css("background-color", bgcolor);
    }


