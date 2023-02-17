// var stateList=[
//     {Country:'India',State:'Maharastra'},
//     {Country:'India',State:'Delhi'},
//     {Country:'India',State:'Gujarat'},
//     {Country:'Us',State:'Alabama'},
//     {Country:'Us',State:'Arizona'},
//     {Country:'Us',State:'California'},
// ];
var cityList=[
    {State:'Maharastra',city:'pune'},
    {State:'Maharastra',city:'mumbai'},
    {State:'Maharastra',city:'nasik'},
    {State:'Gujarat',city:'surat'},
    {State:'Gujarat',city:'baroda'},
    {State:'Delhi',city:'new delhi'},
    {State:'Delhi',city:'vihar'},
];
$(document).ready(function(){
    // $("#save").click(function(){
    //     $("#myModal").modal("hide");
    //   });
    // $("#flexRadioDefault2").click(function(){
    //     showdata().shift();
    // })

    // $("#flexRadioDefault2").click(function(){
    //     var modeldatalist;
    //     modeldatalist=JSON.parse(localStorage.getItem("modeldatalist"));
    //     console.log(modeldatalist);
    //     $("table > tbody > tr").first().remove();
    //     // $(modeldatalist).first().remove();
    //     localStorage.removeItem("modeldatalist > tr");
    // })

    // $("table > tbody > tr").hide().slice(0, 5).show();
    $("#openmodel").click(function() {
        $("#myModal").modal("show");
    });
            // $("#save").click(function() {
            //     $("#myModal").modal("hide");
            //     location.reload();
            // });
    $("#dpdlState").change(function(){
      
        $("#dpdlCity").html("<option selected>Choose City</option>");
        const states=cityList.filter(m=>m.State==$("#dpdlState").val());
      
        states.forEach(element=>{
            const option="<option val='"+element.city+"'>"+element.city+"</option>";
            $("#dpdlCity").append(option);
        }); 
    });
})
function showdata()
{
    var modeldatalist;
    if(localStorage.getItem("modeldatalist")==null)
    {
        modeldatalist=[];
    }
    else{
        modeldatalist=JSON.parse(localStorage.getItem("modeldatalist"))
    }
    var html="";
    modeldatalist.forEach(function(element,index) {
        html+="<tr>";
        html+="<td>"+index+"</td>";
        html+="<td>"+element.name+"</td>";
        html+="<td>"+element.state+"</td>";

        html+="<td>"+element.city+"</td>";

        html+="<td>"+element.zip+"</td>";
        html+="<td>"+element.mobile+"</td>";   
        html+="</tr>";
     
    });
    document.querySelector("#crudtable tbody").innerHTML=html;
}
document.onload=showdata();

function adddata()
{
    var isValid = validateformdetails()

    if (isValid) {
        $("#crudtable").show();
        $("#myModal").modal("hide");
          location.reload();
    }
    else{
        $("#crudtable").hide();
    }
    var name=document.getElementById("name").value;
    var state=document.getElementById("dpdlState").value;
    var city=document.getElementById("dpdlCity").value;
    var zip=document.getElementById("zip").value;
    var mobile=document.getElementById("mobile").value;

    var modeldatalist;
    var lifo=document.getElementById("flexRadioDefault2").checked;
    var fifo=document.getElementById("flexRadioDefault1").checked;

    if(localStorage.getItem("modeldatalist")==null)
    {
        modeldatalist=[];
    }
    else{
        modeldatalist=JSON.parse(localStorage.getItem("modeldatalist"));

        if(modeldatalist.length < 5 && lifo==true)
            {
                
                console.log("soham");
                if(modeldatalist.length < 5)
                {  
                    debugger;
                    modeldatalist.push({
                      
                        name:name,
                        state:state,
                        city:city,
                        zip:zip,
                        mobile:mobile
                    })
                }
            }
            else if(modeldatalist.length >= 5 && lifo==true)
            {
                modeldatalist.pop();
                modeldatalist.push({
                    name:name,
                    state:state,
                    city:city,
                    zip:zip,
                    mobile:mobile
                })
            }
             if(modeldatalist.length<5 && fifo==true)
        {
            if(modeldatalist.length<5)
            {
                modeldatalist.push({
                    name:name,
                    state:state,
                    city:city,
                    zip:zip,
                    mobile:mobile
                })
            }
        }
        else if(modeldatalist.length>=5 && fifo==true)
        {
            modeldatalist.pop();
            modeldatalist.unshift({
                name:name,
                state:state,
                city:city,
                zip:zip,
                mobile:mobile
            })

        }

      
    }

    
    // modeldatalist.push({
    //     name:name,
    //     state:state,
    //     city:city,
    //     zip:zip,
    //     mobile:mobile
    // });
    
    
    // var fifo=document.getElementById("flexRadioDefault1").checked;
    // var lifo=document.getElementById("flexRadioDefault2").checked;


    // if(localStorage.getItem("modeldatalist")==null)
    // {
    //     modeldatalist=[];
    // }
    // else{
    //     modeldatalist=JSON.parse(localStorage.getItem("modeldatalist"));
    //     // debugger;
      
    //     if(modeldatalist.length<5 && lifo==true)
    //     {
    //         debugger;
    //         console.log("soham");
    //         if(modeldatalist.length<5)
    //         {
    //             modeldatalist.push({
    //                 name:name,
    //                 state:state,
    //                 city:city,
    //                 zip:zip,
    //                 mobile:mobile
    //             })
    //         }
    //     }
    //     else if(modeldatalist.lengh>=5 && lifo==true)
    //     {
    //         modeldatalist.pop();
    //         modeldatalist.push({
    //             name:name,
    //             state:state,
    //             city:city,
    //             zip:zip,
    //             mobile:mobile
    //         })
    //     }
        // if(modeldatalist.length<5 && fifo==true)
        // {
        //     if(modeldatalist.length<5)
        //     {
        //         modeldatalist.push({
        //             name:name,
        //             state:state,
        //             city:city,
        //             zip:zip,
        //             mobile:mobile
        //         })
        //     }
        // }
        // else if(modeldatalist.lengh>=5 && fifo==true)
        // {
        //     modeldatalist.pop();
        //     modeldatalist.unshift({
        //         name:name,
        //         state:state,
        //         city:city,
        //         zip:zip,
        //         mobile:mobile
        //     })

        // }
        

    

    localStorage.setItem("modeldatalist",JSON.stringify(modeldatalist));
    showdata();
    document.getElementById("name").value="";
    document.getElementById("dpdlState").value="";
    document.getElementById("dpdlCity").value="";
    document.getElementById("zip").value="";
    document.getElementById("mobile").value=""; 

}


function validateName() {
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var vname = document.getElementById('NAME');
    if (name == "") {
        vname.innerHTML = ('Please fill ...');
        document.getElementById('NAME').style.display = "unset";
        return false;
    }
    else {
        if (!regName.test(name)) {
            vname.innerHTML = ('Please enter valid name...');
            document.getElementById('NAME').style.display = "unset";
            document.getElementById('name').focus();
            return false;
        } else {
            document.getElementById('NAME').style.display = "none";
            return true;
        }
    }
}
function statefor() {
    var state = document.getElementById("dpdlState");
    if (state.value == "") {
        document.getElementById("errorstate").innerHTML = "please select branch field";
        document.getElementById("errorstate").style.display = "unset";
        document.getElementById("dpdlState").focus();
        return false;
    }
    document.getElementById("errorstate").style.display = "none";
    return true;
}
function zipfor() {

    var regName = /^\d{6}$/;
    var zip = document.getElementById('zip').value;
    var vzip = document.getElementById('errorzip')
    if (!regName.test(zip)) {
        vzip.innerHTML = ('Please enter zip code...');
        document.getElementById('errorzip').style.display = "unset";
        document.getElementById('zip').focus();
        return false;
    } else {
        document.getElementById('errorzip').style.display = "none";
        return true;
    }

}
function validateMobile() {
    var regName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var name = document.getElementById('mobile').value;
    var vname = document.getElementById('MOBILE')
    if (name == "") {
        vname.innerHTML = ('Please enter  mobile...');
        document.getElementById('MOBILE').style.display = "unset";
    }
    else {
        if (!regName.test(name) || name == "") {
            vname.innerHTML = ('Please enter valid mobile number...');
            document.getElementById('MOBILE').style.display = "unset";
            document.getElementById('mobile').focus();
            return false;
        } else {
            document.getElementById('MOBILE').style.display = "none";

            return true;
        }
    }
}
function validateformdetails()
{
    if(!validateName() && !statefor() && !zipfor() && !validateMobile() )
        {
            return false;
        }
        else{
          return true;  
        }
}

// function lifo()
// {
//     var name=document.getElementById("name").value;
//     var state=document.getElementById("dpdlState").value;
//     var city=document.getElementById("dpdlCity").value;
//     var zip=document.getElementById("zip").value;
//     var mobile=document.getElementById("mobile").value;

//     var modeldatalist;
//     if(localStorage.getItem("modeldatalist")==null)
//     {
//         modeldatalist=[];
//     }
//     else{
//         modeldatalist=JSON.parse(localStorage.getItem("modeldatalist"));
//     }


//     if(modeldatalist==null || modeldatalist.lengh<5)
//     {
//         modeldatalist.push({ 
//                 "name":name,
//                  "state":state,
//                 "city":city,
//                 "zip":zip,
//                 "mobile":mobile})
//     }
//     else if(modeldatalist==5)
//     {
//         modeldatalist.pop();
//         modeldatalist.push({ 
//             "name":name,
//              "state":state,
//             "city":city,
//             "zip":zip,
//             "mobile":mobile})
//     }
   
    

//     // var modeldatalist=[];
//     // modeldatalist.shift(JSON.parse(localStorage.getItem("modeldatalist")));
//     // localStorage.setItem('modeldatalist', JSON.stringify(modeldatalist));

// }