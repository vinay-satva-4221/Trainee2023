var emptyRow = "<tr><td colspan='5' class='text-center'> No Records Available</td></tr>";

    $(document).ready(function () {
        $.validator.addMethod('validname', function (value) {
            return /^[a-zA-Z\s]+$/.test(value)
        });
      loadDataFromLocal();
      $('#tblData').on('click', '.btn-edit', function () {
        debugger;
        const name = $(this).parent().parent().find(".txtName").html();  //parent is complete tr & td]
        const mobile = $(this).parent().parent().find(".txtMobile").html();
        const email = $(this).parent().parent().find(".txtEmail").html();
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        $("#name").val(name);
        $("#mobile").val(mobile);
        $("#email").val(email);
        $("#txtId").val(id);
        $("#btnSave").text("Update");
      });
      $('#btnSave').on('click', function() {
        $("#basic_form").valid();
    });

      // $('#tblData').on('click', '.btn-delete', function () {
      //   debugger;
      //   const id = $(this).parent().parent().find(".txtName").attr("data-id");
      //   deleteDataFromLocal(id);
      // });

      $("#btnSave").click(function () {
        
        var isFormValid =  $("#basic_form").valid();
        if(isFormValid)
        {
        if ($("#txtId").val() == '') {
          addDataToLocal();
        } else {
          updateDataFromLocal();
        }
    }
    else  {}  
      });

      $("#btnClear").click(function () {
        debugger;
        clearForm();
      });
      
    $("#basic_form").validate({

        rules: {
            name: {
                required: true,
                //   Text: true,
                validname: true
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            name: {

                required: "Enter your Name",
                validname: "please enter only characters"
            },
            mobile: {
                required: "Enter your mobile number",
                minlength: "please enter 10 digits",
                maxlenght: "please enter 10 digits",
            },
            email: {
                required: "Enter your email",
                email: "Please enter valid email with @"
            }

        },
        
    });
      

    });

    function clearForm() {
      debugger;
      $("#name").val("");
        $("#mobile").val("");
        $("#email").val("");
        $("#btnSave").text("Add");
    }

    function addEmptyRow() {
      debugger;
      if ($("#tblData tbody").children().children().length == 0) {
        $("#tblData tbody").append(emptyRow);
      }
    }

    // Add Data
var map = new Map();

function showData() {

    var Name = document.getElementById("#name").value;
    var Mobile = document.getElementById("#mobile").value;
    var email = document.getElementById("#email").value;
    
    // to create a object
    var mData = { 
      debugger
      Name: Name,
      Mobile: Mobile,
      email: email
        
    }

    var peopleList = map.set((map.size + 1), JSON.stringify(mData))



    console.log(peopleList);




    // let namef = peopleList.get("FirstName");
    // let namel = peopleList.get("LastName");
    // let state1 = peopleList.get("State");
    // let city1 = peopleList.get("city");
    // let zip1 = peopleList.get("Zip");

    var html = "";



    for (let i = 1; i <= map.size; i++) {
        console.log(map.size);
        var data = map.get(i);
        let newD = JSON.parse(data);
        console.log(newD)
        html += "<tr class=text-center>";
        html += "<td class='txtName'>" + i + "</td>";
        html += "<td>" + newD.Name + "</td>";
        html += "<td>" + newD.Mobile + "</td>";
        html += "<td>" + newD.email + "</td>";
        
        html +=
            '<td><button onclick="deleteData( ' + i
            +
            ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' + i
            +
            ')" class= "btn btn-warning m-2">Edit</button></td>';

        html += "</tr>";



        document.getElementById("name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        


        document.getElementById("tbl").innerHTML = html;

    }
}

function updateData(i) {
    let newD = JSON.parse(map.get(i));
    console.log(newD)
    var Name = (document.getElementById("name").value = newD.Name);
    document.getElementById("mobile").value = newD.Mobile;
    document.getElementById("email").value = newD.email;
   

    // map.set(i,)

    

    
}

    // function loadDataFromLocal() {
    //   debugger;
    //   let fDetails = localStorage.getItem('detailData');
    //   if (fDetails) {
    //     $("#tblData tbody").html("");
    //     let localArray = JSON.parse(fDetails);
    //     let index = 1;
    //     localArray.map(element => {
    //         let dtr = "<tr>";
    //         dtr = dtr + "<td>" + index + "</td>";
    //         dtr = dtr + "<td class='txtName' data-id= " + element.id + " >" + element.name + "</td>";
    //         dtr = dtr + "<td class='txtMobile' >" + element.mobile +  "</td>";
    //         dtr = dtr + "<td class='txtEmail' >" + element.email +  "</td>";
    //         dtr = dtr + "<td class='tdAction text-center'>";
    //         dtr = dtr + "<button class='btn btn-sm btn-success btn-edit' type='button'> Edit </button>"; 
    //         dtr = dtr + "<button class='btn btn-sm btn-danger btn-delete' > Delete </button>";
    //         dtr = dtr + "</td>";
    //         dtr = dtr + "</tr>";
    //         $("#tblData tbody").append(dtr);
    //       index++;
    //     });
    //   }
    //   addEmptyRow();
    // }

    // function addDataToLocal() {
    //   debugger;
    //   let fDetails = localStorage.getItem('detailData');
    //   if (fDetails) {
    //     let localArray = JSON.parse(fDetails);
    //     const obj = {
    //         id: localArray.length + 1,
    //         name: $('#name').val(),
    //         mobile: $('#mobile').val(),
    //         email: $('#email').val(),
            
    //     };
    //     localArray.push(obj);
    //     localStorage.setItem('detailData', JSON.stringify(localArray));
    //     loadDataFromLocal();
    //   } else {
    //     const arryObj = [];
    //     const obj = {
    //         id: 1,
    //         name: $('#name').val(),
    //         mobile: $('#mobile').val(),
    //         email: $('#email').val(),
           
    //     };
    //     arryObj.push(obj);
    //     localStorage.setItem('detailData', JSON.stringify(arryObj));
    //     loadDataFromLocal();
    //   }
    //   clearForm();
    // }

    // function updateDataFromLocal() {
    //   debugger;
    //   let fDetails = localStorage.getItem('detailData');
    //   let localArray = JSON.parse(fDetails);
    //   const oldRecord = localArray.find(m => m.id == $("#txtId").val());
    //   oldRecord.name = $("#name").val();
    //     oldRecord.mobile = $("#mobile").val();
    //     oldRecord.email = $("#email").val();
    
    //   localStorage.setItem('detailData', JSON.stringify(localArray));
    //   loadDataFromLocal();
    //   clearForm();
    // }

    // function deleteDataFromLocal(id) {
    //   debugger;
    //   let fDetails = localStorage.getItem('detailData');
    //   let localArray = JSON.parse(fDetails);
    //   let i = 0;
    //   while (i < localArray.length) {
    //     if (localArray[i].id === Number(id)) {
    //       localArray.splice(i, 1);
    //     } else {
    //       ++i;
    //     }
    //   }
    //   localStorage.setItem('detailData', JSON.stringify(localArray));
    //   loadDataFromLocal();
    // }