




$(document).ready(function(){

    

    var $cat = $('select[name=category]'),
    $items = $('select[name=items]');

    $cat.change(function(){
        
        var $this = $(this).find(':selected'),
        rel = $this.attr('rel');
                
     
        $items.find("option").hide();
       
        $set = $items.find('option.' + rel);
        $set.show().first().prop('selected', true);
        
    });


    $("#daterange").daterangepicker({},function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });


      $.validator.addMethod('validname',
        function(value){
            return /^[a-zA-Z]+$/.test(value)
        }, 
    );
    $.validator.addMethod('number',
        function(value){
            return /^[0-9]{10}$/.test(value)
        }, 
    );

    $.validator.addMethod('cgpa',
    function(value){
        return/[0-9][.][0-9]/.test(value)
    }, 
    );

    $.validator.addMethod('zip',
    function(value){
      return /^[0-9]{6}$/.test(value)
    }, 
    );
      
    $("#fad").click(function(){
          $("#div1").fadeToggle();
      
    });

    // $("#btnvalid").click(function(){
    //     swal("please fill all field");
    // });

   
  $('#frm').validate({
    rules:{
      name:{
        required : true,
       
        
        validname: true
    },
        number:{
            required: true,
            number: true
        },
        email:{
            required: true
        },
        cname:{
            required: true
        },
        cgpa:{
            required: true,
           
            cgpa: true
           
    
    
        },
        bname:{
            required: true
            
        },
        category:{
            required: true
          
        },
        items:{
          required: true
        
      },
      zip:{
        required: true,
        zip:true
        
    },
    },
    messages:{
      name:"Please Enter Your Name",
      number:"Please Enter Your number ",
      email:"Please Enter Your email",
      cname:"Please Enter Your college name",
      cgpa:"Please Enter Your CGPA",
      bname:"Please Enter Your Branch name",
      category:"Please Enter Your State",
      items:"please enter city",
      zip:"Please Enter Your Zip code",
       
       
    },
});


  $('#AddRow').on('click', function () {
    var uniqid = Date.now();
    var student =[];
      var namef, numberf,emailf,cnamef,cgpaf,bnamef, studyf,statef,cityf,zipf,id;
      
      id = uniqid;
      namef = document.getElementById("name").value;
      numberf= document.getElementById("number").value;
      emailf = document.getElementById("email").value;
      cnamef = document.getElementById("cname").value;
      cgpaf =document.getElementById("cgpa").value;
      bnamef = document.getElementById("bname").value;
      studyf=document.getElementById("daterange").value;
      statef =document.getElementById("statevalue").value;
      cityf = document.getElementById("City").value;
      zipf =document.getElementById("zip").value;
      

    
      var data =      "<tr ><td>" + namef + "</td><td>" + numberf + "</td><td>" + emailf + "</td><td>" + cnamef + "</td><td>" + cgpaf + "</td><td>" + bnamef + "</td><td>" + studyf + "</td><td>" + statef + "</td><td>" + cityf + "</td><td>" + zipf + `</td><td><button id='btnUpdate' class='btn btn-info btn-edit ms-2 mt-2'>Edit</button></td><td><button id='delete' deleteId='${uniqid}' class='btn btn-danger btn-delete ms-2 mt-2'>Delete</button></td></tr>`;
      
      
      $("#tblCustomers").append(data);

            debugger;
            var StudentDetails= {
            id:id,
            name:namef,
            number:numberf,
            email:emailf,
            cname:cnamef,
            cgpa:cgpaf,
            bname:bnamef,
            daterange:studyf,
            statevalue:statef,
            City:cityf,
            zip:zipf
        };  

        
        // localStorage.setItem('studentData', JSON.stringify(StudentDetails));
        
        var studentData = localStorage.getItem("studentData");
        console.log(studentData)
        // if (id == "no") {
            debugger;
          if (studentData != null) {
            var studentJsonData = JSON.parse(studentData);
            studentJsonData.push(StudentDetails);
            localStorage.setItem("studentData", JSON.stringify(studentJsonData));
          } else {
          
            student.push(StudentDetails);
            localStorage.setItem("studentData", JSON.stringify(student));
          }
          
        
        // data.push(StudentDetails)
    
  });

//   $('#btnUpdate').on('click', function () {
//       var namef, numberf,emailf,cnamef,cgpaf,bnamef,studyf,statef,cityf,zipf;
//       namef = $("#name").val();
//       numberf= $("#number").val();
//       emailf = $("#email").val();
//       cnamef = $("#cname").val();
//       cgpaf = $("#cgpa").val();
//       bnamef = $("#bname").val();
//       studyf=$("#daterange").val();
//       statef = $("#State").val();
//       cityf = $("#City").val();
//       zipf = $("#zip").val();
      

//       $('#productTable tbody tr').eq($('#name').val()).find('td').eq(1).html(namef);
//       $('#productTable tbody tr').eq($('#number').val()).find('td').eq(2).html(numberf);
//       $('#productTable tbody tr').eq($('#email').val()).find('td').eq(3).html(emailf);
//       $('#productTable tbody tr').eq($('#cname').val()).find('td').eq(4).html(cnamef);
//       $('#productTable tbody tr').eq($('#cgpa').val()).find('td').eq(5).html(cgpaf);
//       $('#productTable tbody tr').eq($('#bname').val()).find('td').eq(6).html(bnamef);
//       $('#productTable tbody tr').eq($('#daterange').val()).find('td').eq(7).html(studyf);
//       $('#productTable tbody tr').eq($('#State').val()).find('td').eq(8).html(statef);
//       $('#productTable tbody tr').eq($('#City').val()).find('td').eq(9).html(cityf);
//       $('#productTable tbody tr').eq($('#zip').val()).find('td').eq(10).html(zipf);
    
 

     
//   });

  $("#tblCustomers").on("click", "#delete", function (e) {
      if (confirm("Are you sure want to delete this record!")) {
    var StudentDetails = JSON.parse(localStorage.getItem("myItems"));
   
        debugger
    var datafordelete= studentData.findIndex($(this).attr("deleteId"));
    console.log(datafordelete)
    splice(datafordelete,1);
      
 

     

        $(this).closest('tr').remove();
      } else {
          e.preventDefault();
      }
  });



  $("#tblCustomers").on("click", "#btnUpdate", function (e) {
      var row = $(this).closest('tr');
      $('#frm').val($(row).index());
      var td = $(row).find("td");
     
      $("#name").val($(td).eq(1).html());
      $("#number").val($(td).eq(2).html());
      $("#email").val($(td).eq(3).html());
      $("#cname").val($(td).eq(4).html());
      $("#cgpa").val($(td).eq(5).html());
      $("#bname").val($(td).eq(6).html());
      $("#daterange").val($(td).eq(7).html());
      $("#State").val($(td).eq(8).html());
      $("#City").val($(td).eq(9).html());
      $("#zip").val($(td).eq(10).html());



    
  });



// $("#AddRow").click(function(){
//     var namef = document.getElementById("name").value;
//     var numberf= document.getElementById("number").value;
//      var emailf = document.getElementById("email").value;
//      var cnamef = document.getElementById("cname").value;
//     var cgpaf =document.getElementById("cgpa").value;
//     var bnamef = document.getElementById("bname").value;
//     var studyf=document.getElementById("daterange").value;
//     var statef =document.getElementById("statevalue").value;
//     var cityf = document.getElementById("City").value;
//     var zipf =document.getElementById("zip").value;
  
//      var StudentDetails = '{ '+
//       '"name":'+namef+',"number":'+numberf+',"email":'+emailf+', '+
//       '"cname":'+cnamef+',"cgpa":'+cgpaf+',"bname":'+bnamef+', '+
//       '"daterange":'+studyf+',"statevalue":'+statef+',"City":'+cityf+',"zip":'+zipf+' '+
//       '}'

     

//     //   var items = JSON.parse(localStorage.getItem('myItems'));

// }); 
    


});


// function deletefromlocal(id)
// {
//     let myItems=localStorage.getItem('myItems');
//     let localArray=JSON.parse(myItems);
//     let i=0;

//     while(i < localArray.length){
//         if(localArray[i].id===Number(id)){
//             localArray.splice(i,1);
//         }
//         else
//         {
//             ++i;
//         }
//     }
//     localStorage.setItem('myItems',JSON.stringify(localArray));
//     loadDataFromLocal();
// }

// function myFunction()
// {
//  var studentdatalist= JSON.parse(localStorage.getItem("studentData"));

//  var data =      "<tr ><td>" + studentdatalist.name + "</td><td>" + studentdatalist.number + "</td><td>" + studentdatalist.email + "</td><td>" + studentdatalist.cname + "</td><td>" + studentdatalist.cgpa + "</td><td>" + studentdatalist.bname + "</td><td>" +studentdatalist. daterange + "</td><td>" + studentdatalist.State + "</td><td>" + studentdatalist.City + "</td><td>" +studentdatalist. zip + "</td><td><button id='btnUpdate' class='btn btn-info btn-edit ms-2 mt-2'>Edit</button></td><td><button id='delete' class='btn btn-danger btn-delete ms-2 mt-2'>Delete</button></td></tr>";

//   console.log(studentdatalist);
// }