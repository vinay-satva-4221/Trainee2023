$(document).ready(function(){
    // $(".dlt").click(function(){
    //     alert("$(this).attr('id')");
        $(document).on('click','.dlt',function (id) {
            var deleteid=($(this).attr('id'));
            // $(this).remove();
            // $(this). closest('tr').remove();

            console.log(map.has(parseInt(deleteid)))

            for(let i=1;i<=map.size+1;i++)
            {
                debugger
                if(i==deleteid)
                {
                    map.delete(parseInt(deleteid))
                    $(this). closest('tr').remove();
                }

            }
            console.log(map);


    })
   
})
var map = new Map();
function showdata() {

    var isValid = validateformdetails()

    if (isValid) {
        isValid=true;
        debugger
    var name1 = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var collegename = document.getElementById("collegename").value;

    var Data = {
        name1: name1,
        mobile: mobile,
        email: email,
        collegename: collegename,
    };
    var peopleList = map.set(map.size+1 , JSON.stringify(Data));

    console.log("main",peopleList);

    var html = "";

    for (let i = 1; i <= map.size; i++) {

        var data = map.get(i);
        let columndata = JSON.parse(data);
        console.log(columndata);
        html += "<tr id='+i+'  class=text-center >";
        // html += "<td>" + i + "</td>";
        html += "<td>" + columndata.name1 + "</td>";
        html += "<td>" + columndata.mobile + "</td>";
        html += "<td>" + columndata.email + "</td>";
        html += "<td>" + columndata.collegename + "</td>";

      

        html+='<td><button id='+i+' class="btn dlt btn-danger me-3" >delete</button><button class="btn btn-dark" onclick="editTableRow(this)">Edit</button></td>'
        // html += "<td>" +  ''  + "</td>";


        html += "</tr>";
        document.getElementById("name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("collegename").value = "";
        document.getElementById("root").innerHTML = html;
    }

        // $("#myTable").show();
    }
    else{
        // $("#myTable").hide();
        isValid=false;
    }
    
    }
    // function deleteData(rid)
    // {
    //     // var name1 = document.getElementById("name").value;
    //     // var mobile = document.getElementById("mobile").value;
    //     // var email = document.getElementById("email").value;
    //     // var collegename = document.getElementById("collegename").value;
    //     // var peopleList = new Map();
    
    //     // var mData = {
    //     //     name1: name1,
    //     //     mobile: mobile,
    //     //     email: email,
    //     //     collegename: collegename,
    //     // };
    //     var peopleList = map.set(map.size + 1, JSON.stringify(mData));
    //     var map = peopleList.delete(index);
    
    //     showdata();
    // }
    function editTableRow(td){

        SelectedRow = td.parentElement.parentElement;
  
        document.getElementById("name").value = SelectedRow.cells[0].innerHTML;
        document.getElementById("mobile").value = SelectedRow.cells[1].innerHTML;
        document.getElementById("email").value = SelectedRow.cells[2].innerHTML;
        document.getElementById("collegename").value = SelectedRow.cells[3].innerHTML;

            document.getElementById("save").style.display="none";
            document.getElementById("update").style.display="block";

        document.querySelector("#update").onclick = function(){
            SelectedRow.cells[0].innerHTML = document.getElementById("name").value;
            SelectedRow.cells[1].innerHTML = document.getElementById("mobile").value;
            SelectedRow.cells[2].innerHTML = document.getElementById("email").value;
            SelectedRow.cells[3].innerHTML = document.getElementById("collegename").value;
            document.getElementById("save").style.display="block";
            document.getElementById("update").style.display="none";
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("collegename").value = "";
        }
  }

  function validatename()
{
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    var vname = document.getElementById('NAME')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid name...');
        document.getElementById('NAME').style.display = "unset";
        document.getElementById('name').focus();
        return false;
    } else {
        document.getElementById('NAME').style.display = "none";
        // swal("Good job!", "You clicked the button!", "success");
        return true;
    }
}
function validateMobile()
{
    var regName = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var name = document.getElementById('mobile').value;
    var vname = document.getElementById('MOBILE')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid mobile number...');
        document.getElementById('MOBILE').style.display = "unset";
        document.getElementById('mobile').focus();
        return false;
    } else {
        document.getElementById('MOBILE').style.display = "none";
        return true;
    }
}
function validateClg(){
    var regName = /^[a-zA-Z]+$/;
    var name = document.getElementById('collegename').value;
    var vname = document.getElementById('clgNAME')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid collage name...');
        document.getElementById('clgNAME').style.display = "unset";
        document.getElementById('collegename').focus();
        return false;
    } else {
        document.getElementById('clgNAME').style.display = "none";
        return true;
    }
}
function validateEmail()
{
    var regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var name = document.getElementById('email').value;
    var vname = document.getElementById('emailerror')
    if (!regName.test(name)) {
        vname.innerHTML = ('Please enter valid email...');
        document.getElementById('emailerror').style.display = "unset";
        document.getElementById('email').focus();
        return false;
    } else {
        document.getElementById('emailerror').style.display = "none";
        return true;
    }
}
function validateformdetails()
{
    if(!validatename() && !validateMobile() && !validateClg() && !validateEmail() )
        {
            return false;
        }
        else{
          return true;  
        }
}

 




    

