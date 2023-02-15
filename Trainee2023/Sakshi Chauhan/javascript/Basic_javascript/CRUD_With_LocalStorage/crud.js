$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'right'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
  $("#fad").click(function(){
    $("#div1").fadeToggle();

});
$(document).ready(function(){
    $.validator.addMethod('validfname',
    function(value){
        return /^[a-zA-Z]+$/.test(value)
    }, 
    );
    $.validator.addMethod('validnumber',
    function(value){
        return /^[0-9]{10}$/.test(value)
    }, 
    );
    $.validator.addMethod('validcgpa',
    function(value){
        return /^[0-9.]{3}$/.test(value)
    }, 
    );
    $.validator.addMethod('validzip',
    function(value){
        return /^[0-9]{6}$/.test(value)
    }, 
    );
    $('#btnSave').click(function(){
        if($('#form').valid()==true)
        {
            Storage();
        }
    });
    $('#form').validate({
        rules:{
            name:{
                required : true,
                validfname: true
            },
            mobile:{
                required : true,
                validnumber: true
            },
            email:{
                required: true
            },
            clg:{
                required: true,
                validfname: true
            },
            cgpa:{
                required: true,
                validcgpa: true
            },
            branch:{
                required: true
            },
            state:{
                required: true
            },
            city:{
                required: true
            },
            zip:{
                required: true,
                validzip: true
            }
        },
        messages:{
            name:{
                required : "Enter Your Name",
                validfname: "Enter Only Character"
            },
            mobile:{
                required : "Enter Your Mobile Number",
                validnumber: "Enter Only Number"
            },
            email:{
                required:"Enter Your Email"
            },
            clg:{
                required:"Enter Your College Name",
                validfname: "Enter Only Character"
            },
            cgpa:{
                required:"Enter Your CGPA",
                validcgpa: "Allow Only Digit"
            },
            branch:{
                required: "Select Branch"
            },
            state:{
                required: "Select State"
            },
            city:{
                required: "Select City"
            },
            zip:{
                required: "Enter Your Zip Code",
                validzip: "Allow Only Digit"
            }
        },
    });
})
    function Storage()
    {
        var emptyRow = "<tr><td colspan='12' class='text-center'> No Records Available</td></tr>";
        $(document).ready(function () {
          loadDataFromLocal();
          $('#tblData').on('click', '.btn-edit', function () {
            const name = $(this).parent().parent().find(".name").html();
            const contact = $(this).parent().parent().find(".mobile").html();
            const Email = $(this).parent().parent().find(".email").html();
            const cname = $(this).parent().parent().find(".clg").html();
            const cgpa = $(this).parent().parent().find(".cgpa").html();
            const bname = $(this).parent().parent().find(".branch").html();
            const study = $(this).parent().parent().find(".daterange").html();
            const state = $(this).parent().parent().find(".state").html();
            const city = $(this).parent().parent().find(".city").html();
            const zip = $(this).parent().parent().find(".zip").html();
            const id = $(this).parent().parent().find(".name").attr("data-id");
            $("#name").val(name);
            $("#mobile").val(contact);
            $("#email").val(Email);
            $("#clg").val(cname);
            $("#cgpa").val(cgpa);
            $("#branch").val(bname);
            $("#daterange").val(study);
            $("#state").val(state);
            $("#city").val(city);
            $("#zip").val(zip);
            $("#txtId").val(id);
            $("#btnSave").text("Update");
          });
    
          $('#tblData').on('click', '.btn-delete', function () {
            const id = $(this).parent().parent().find(".name").attr("data-id");
            deleteDataFromLocal(id);
          });
    
          $("#btnSave").click(function () {
            if ($("#txtId").val() == '') {
              addDataToLocal();
            } 
            else {
              updateDataFromLocal();
            }
          });
    
          $("#btnClear").click(function () {
            clearForm();
          });
        });
    
        function clearForm() {
          $("#name").val("");
          $("#mobile").val("");
          $("#email").val("");
          $("#clg").val("");
          $("#cgpa").val("");
          $("#branch").val("");
          $("#daterange").val("");
          $("#state").val("");
          $("#city").val("");
          $("#zip").val("");
          $("#btnSave").text("Add");
        }
    
        function addEmptyRow() {
          if ($("#tblData tbody").children().children().length == 0) {
            $("#tblData tbody").append(emptyRow);
          }
        }
    
        function loadDataFromLocal() {
          let localData = localStorage.getItem('localData');
          if (localData) {
            $("#tblData tbody").html("");
            let localArray = JSON.parse(localData);
            let index = 1;
            localArray.forEach(element => {
              let dynamicTR = "<tr>";
              dynamicTR = dynamicTR + "<td> " + index + "</td>";
              dynamicTR = dynamicTR + "<td class='name'  data-id=" + element.id + ">" + element.name + "</td>";
              dynamicTR = dynamicTR + "<td class='mobile'>" + element.contact + "</td>";
              dynamicTR = dynamicTR + "<td class='email'>" + element.Email + "</td>";
              dynamicTR = dynamicTR + "<td class='clg'>" + element.cname + "</td>";
              dynamicTR = dynamicTR + "<td class='cgpa'>" + element.cgpa + "</td>";
              dynamicTR = dynamicTR + "<td class='branch'>" + element.bname + "</td>";
              dynamicTR = dynamicTR + "<td class='daterange'>" + element.study + "</td>";
              dynamicTR = dynamicTR + "<td class='state'>" + element.state + "</td>";
              dynamicTR = dynamicTR + "<td class='city'>" + element.city + "</td>";
              dynamicTR = dynamicTR + "<td class='zip'>" + element.zip + "</td>";
              dynamicTR = dynamicTR + "    <td class='tdAction text-center'>";
              dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-success btn-edit'> Edit</button>";
              dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-danger btn-delete'> Delete</button>";
              dynamicTR = dynamicTR + "    </td>";
              dynamicTR = dynamicTR + " </tr>";
              $("#tblData tbody").append(dynamicTR);
              index++;
            });
          }
          addEmptyRow();
        }
    
        function addDataToLocal() {
          let localData = localStorage.getItem('localData');
          if (localData)
           {
            let localArray = JSON.parse(localData);
            const obj = {
              id: localArray.length + 1,
              name: $("#name").val(),
              contact: $("#mobile").val(),
              Email: $("#email").val(),
              cname: $("#clg").val(),
              cgpa: $("#cgpa").val(),
              bname: $("#branch").val(),
              study: $("#daterange").val(),
              state: $("#state").val(),
              city: $("#city").val(),
              zip: $("#zip").val()
            };
            localArray.push(obj);
            localStorage.setItem('localData', JSON.stringify(localArray));
            loadDataFromLocal();
          } 
          else
           {
            const arryObj = [];
            const obj = {
              id: 1,
              name: $("#name").val(),
              contact: $("#mobile").val(),
              Email: $("#email").val(),
              cname: $("#clg").val(),
              cgpa: $("#cgpa").val(),
              bname: $("#branch").val(),
              study: $("#daterange").val(),
              state: $("#state").val(),
              city: $("#city").val(),
              zip: $("#zip").val()
            };
            arryObj.push(obj);
            localStorage.setItem('localData', JSON.stringify(arryObj));
            loadDataFromLocal();
          }
          clearForm();
        }
    
        function updateDataFromLocal() {
    
            let localData = localStorage.getItem('localData');
            let localArray = JSON.parse(localData);
            const oldRecord = localArray.find(m => m.id == $("#txtId").val());
            oldRecord.name = $("#name").val();
            oldRecord.contact = $("#mobile").val();
            oldRecord.Email = $("#email").val();
            oldRecord.cname = $("#clg").val();
            oldRecord.cgpa = $("#cgpa").val();
            oldRecord.bname = $("#branch").val();
            oldRecord.study = $("#daterange").val();
            oldRecord.state = $("#state").val();
            oldRecord.city = $("#city").val();
            oldRecord.zip = $("#zip").val();
            localStorage.setItem('localData', JSON.stringify(localArray));
            loadDataFromLocal();
            clearForm();
          }
    
        function deleteDataFromLocal(id) {
          let localData = localStorage.getItem('localData');
          let localArray = JSON.parse(localData);
          let i = 0;
          while (i < localArray.length) {
            if (localArray[i].id === Number(id)) {
              localArray.splice(i, 1);
            } 
            else 
            {
              ++i;
            }
          }
          localStorage.setItem('localData', JSON.stringify(localArray));
          loadDataFromLocal();
        }
    
    }
