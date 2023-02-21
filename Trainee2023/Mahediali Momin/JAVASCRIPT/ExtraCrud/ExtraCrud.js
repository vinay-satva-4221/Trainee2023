
window.onload = showdata();
function showdata()
{
    var details;
    if(localStorage.getItem("details")==null){
    details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }
    var store=""
        details.forEach(function(element,index)
        {
            store +="<tr>";
            store+="<td>"+element.name+"</td>";
            store+="<td>"+element.age+"</td>";
            store+="<td>"+element.address+"</td>";
            store+="<td>"+element.email+"</td>";
            store+='<td><button type="button" onclick="deleteItem('+index+')">delete</button></td>';
            store+='<td><button type="button" onclick="editItem('+index+')">edit</button></td>';

            store+="</tr>";
        });
        document.querySelector("#crudtable tbody").innerHTML=store;

}
function adddata()
{
    debugger
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;

    var address=document.getElementById("address").value;

    var email=document.getElementById("email").value;

    var details;
    if(localStorage.getItem("details")==null){
    details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }
    details.push({
        name:name,
        age:age,
        address:address,
        email:email
    });
    localStorage.setItem("details",JSON.stringify(details));
    showdata(); 

}
function deleteItem(index)
{
    var details;
        if(localStorage.getItem("details")==null){
        details=[];
        }
        else{
            details=JSON.parse(localStorage.getItem("details"));
        }

        details.splice(index,1);
        // 1=itemremove at position of index
             localStorage.setItem("details",JSON.stringify(details));
             showdata();
}

function editItem(index)
{
    document.getElementById("submit").style.display="none";
    document.getElementById("update").style.display="block";

    var details;
        if(localStorage.getItem("details")==null){
        details=[];
        }
        else{
            details=JSON.parse(localStorage.getItem("details"));
        }

        document.getElementById("name").value=  details[index].name;
        document.getElementById("age").value=  details[index].age;
        document.getElementById("address").value=  details[index].address;
        document.getElementById("email").value=  details[index].email;

        document.querySelector("#update").onclick=function()
        {
            details[index].name=document.getElementById("name").value;
            details[index].age=document.getElementById("age").value;
            details[index].address=document.getElementById("address").value;
            details[index].email=document.getElementById("email").value;

            localStorage.setItem("details",JSON.stringify(details));
            showdata();


            document.getElementById("submit").style.display="block";
            document.getElementById("update").style.display="none";
        }
}