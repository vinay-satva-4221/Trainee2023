function showdata()
{
    var modeldetails;
    if(localStorage.getItem("modeldetails")==null){
    modeldetails=[];
    }
    else{
        modeldetails=JSON.parse(localStorage.getItem("modeldetails"));
    }
    var store=""
    modeldetails.forEach(function(element,index)
        {
            store +="<tr>";
            store+="<td>"+element.index+"</td>";
            store+="<td>"+element.name+"</td>";
            // store+="<td>"+element.city+"</td>";
            // store+="<td>"+element.state+"</td>";
            store+="<td>"+element.zip+"</td>";
            store+="<td>"+element.mobile+"</td>";
           

            store+="</tr>";
        });
        document.querySelector("#crudtable tbody").innerHTML=store;

}
function adddata()
{
    var name=document.getElementById("name").value;
    // var state=document.getElementById("state").value;

    // var city=document.getElementById("city").value;

    var zip=document.getElementById("zip").value;
    var mobile=document.getElementById("mobile").value;

    var modeldetails;
    if(localStorage.getItem("modeldetails")==null){
        modeldetails=[];
    }
    else{
        modeldetails=JSON.parse(localStorage.getItem("modeldetails"));
    }
    modeldetails.push({
        name:name,
        zip:zip,
        mobile:mobile
    });
    localStorage.setItem("modeldetails",JSON.stringify(modeldetails));
    showdata(); 

}