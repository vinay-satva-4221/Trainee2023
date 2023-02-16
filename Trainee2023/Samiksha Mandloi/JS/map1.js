// $(document).ready(function () {
//     $('#root').on('click', '.btn-danger', function () {
//         debugger;
//         const id = $(this).parent().parent().find(".name").remove("i");
//         deleteData(i);
//       });

// });
function validateForm() {
    if (!nameV() && !emailV() && !mobileV()) {
        valid = false;
        
    } else {
        return true;
    }
}

function nameV() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById("name").value;
    let vname = document.getElementById("navalid");
    if (!regName.test(name)) {
        vname.innerHTML = "**Please enter Alphabets only**";
        document.getElementById("navalid").style.display = "unset";
        document.getElementById("name").focus();
        return false;
    } else {
        document.getElementById("navalid").style.display = "none";
        return true;
    }
}
function emailV() {
    let regName = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let name = document.getElementById("email").value;
    let vname = document.getElementById("vmail");
    if (!regName.test(name)) {
        vname.innerHTML = "**Please enter proper mail  id**";
        document.getElementById("vmail").style.display = "unset";
        document.getElementById("email").focus();
        return false;
    } else {
        document.getElementById("vmail").style.display = "none";
        return true;
    }
}

function mobileV() {
    let regName = /^([0-9]{11})+$/;
    let z1 = document.getElementById("mobile").value;
    let z2 = document.getElementById("navalid1");
    if (!regName.test(z1)) {
        z2.innerHTML = "";
        document.getElementById("mobile").style.display = "unset";
        document.getElementById("mobile").focus();
        return false;
    } else {
        document.getElementById("mobile").style.display = "none";
        return true;
    }
}

// Add Data
var map = new Map();


function showData() {
    // debugger


    console.log(map)
    var html = "";
    map.forEach((userData, key) => {
        let newD = JSON.parse(userData);
        //newD = JSON.parse(newD);
        console.log(newD)
        html += "<tr class=text-center id="+ key +">";
        html += "<td>" + key + "</td>";
        html += "<td>" + newD.Name + "</td>";
        html += "<td>" + newD.Mobile + "</td>";
        html += "<td>" + newD.email + "</td>";
        html +=
            '<td><button onclick="deleteData(' + key 
            + ')" class="btn btn-danger">Delete</button> <button type="button" onclick="editData(' + key + ')" class="btn btn-warning m-2">Edit</button></td>';



        html += "</tr>";
        document.getElementById("name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";

        document.getElementById("tbl").innerHTML = html;

    });

}

function AddData() {
    var Name = document.getElementById("name").value;
    var Mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    // to create a object
    var mData = {
        Name: Name,
        Mobile: Mobile,
        email: email

    }
    peopleList = map.set((map.size + 1), JSON.stringify(mData))
    //console.log(peopleList);
    showData();
}
// leList = map.set(i, JSON.stringify(newData));
function editData(i) {
    var data = map.get(i);
    let newData = JSON.parse(data);
  
    document.getElementById("name").value = newData.Name;
    document.getElementById("mobile").value = newData.Mobile;
    document.getElementById("email").value = newData.Email;
  
    var btnSave = document.getElementById("btnSave");
    btnSave.textContent = "Update";
    btnSave.onclick = function() {
        updateData(i);
    };
}

// Function to update data
function updateData(i) {
    var Name = document.getElementById("name").value;
    var Mobile = document.getElementById("mobile").value;
    var Email = document.getElementById("email").value;
  
    let newData = {
      Name: Name,
      Mobile: Mobile,
      Email: Email
    };
  
    map.set(i, JSON.stringify(newData));
  
    // Get the row with the id `i` and update its values
    var row = document.getElementById(i);
    row.cells[1].innerHTML = Name;
    row.cells[2].innerHTML = Mobile;
    row.cells[3].innerHTML = Email;
    var btnSave = document.getElementById("btnSave");
    btnSave.textContent = "Save";
}
  

//     function updateData(i) {
//     debugger
//     $(`#${i}`).remove();
//     var data = map.get(i);
//     // var index = map.set((map.size - 1));
//     // var data = map.get((index + 1)); 
//     let newData = JSON.parse(data);
//     console.log(newData);
    
//     var Name = (document.getElementById("name").value = newData.Name);
//     var Mobile = (document.getElementById("mobile").value = newData.Mobile);
//     var email = (document.getElementById("email").value = newData.email);
//     var peop
//     $(document).ready(function(){
//         $("#btnSave").text("Update");
//     });
//   }

function deleteData(i) {
    map.delete(i);
    console.log(map);
    showData();
}