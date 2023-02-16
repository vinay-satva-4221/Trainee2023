$(document).ready(function(){
    display()
    $("#addrow").click(function(){
        // debugger
        let Name=$("#name").val();
        let Mobile=$("#mobile").val();
        let Email=$("#email").val();
        let College=$("#college").val();
        let CGPA=$("#cgpa").val();
        let BranchName=$("#branchname").val();
       
        studentsDetails=new Array();
        var studentsDetails=JSON.parse(localStorage.getItem("Details"))
        if(studentsDetails==null)
            studentsDetails=[]
        console.log(studentsDetails)
        studentsDetails.push({
            "name":Name,
            "mobile":Mobile,
            "email":Email,
            "college":College,
            "cgpa":CGPA,
            "branchname":BranchName,
        })
            localStorage.setItem("Details",JSON.stringify(studentsDetails))
            display()
    })

    function display(){
        // debugger
        var Data=new Array()
         Data=JSON.parse(localStorage.getItem("Details"))
        list="<tr><th>SR No.</th><th>name</th><th>Mobile</th><th></th><th></th><th></th><th></th><th></th><th></th></tr>"
        for(let i=0;i<Data.length;i++){
            list+="<tr id="+[i+1] +"><td>"+[i+1]+"</td><td>"+Data[i].name+"</td><td>"+Data[i].mobile+"</td><td>"+Data[i].email+"</td><td>"+Data[i].college+"</td><td>"+Data[i].cgpa+"</td><td>"+Data[i].branchname+"</td><td><button type='button' data-val="+[i+1] +" class='delete  btn btn-danger'>Delete</button></td><td><button type='button' data-val="+[i+1] +" class='edit  btn btn-success'>Edit</button></td></tr>"
        }
        $("#table").html(list)
    }
    $(document).on('click','.delete',function () {
    //    alert($(this).data("val")) 
       let index=$(this).data("val")
    debugger
    //    let index=$(this).closest("tr").attr("id") 
    //    alert(index)
       Data=JSON.parse(localStorage.getItem("Details"))
       Data.splice(index-1,1)
       localStorage.setItem("Details",JSON.stringify(Data))
       display()
    })
    $(document).on('click','.edit',function () {
        debugger
        let index=$(this).data("val")
        Data=JSON.parse(localStorage.getItem("Details"))
        $("#addrow").hide()
        $("#export").hide()
        $("#editMain").show()
        $("#name").val(Data[index-1].name);
        $("#mobile").val(Data[index-1].mobile);
        $("#email").val(Data[index-1].email);
        $("#college").val(Data[index-1].college);
        $("#cgpa").val(Data[index-1].cgpa);
        $("#branchname").val(Data[index-1].branchname);
        $("#editMain").click(function(){
            debugger
            let Name=$("#name").val();
            let Mobile=$("#mobile").val();
            let Email=$("#email").val();
            let College=$("#college").val();
            let CGPA=$("#cgpa").val();
            let BranchName=$("#branchname").val();
            Data[index-1].name=Name
            Data[index-1].mobile=Mobile
            Data[index-1].email=Email
            Data[index-1].college=College
            Data[index-1].cgpa=CGPA
            Data[index-1].branchname=BranchName
            
       
            localStorage.setItem("Details",JSON.stringify(Data))
            display()
            $("#addrow").show()
        $("#export").show()
        $("#editMain").hide()
        })
            
        
    })
    $("#export").click(function(){
        htmlTableToExcel('xlsx')
    })
    function htmlTableToExcel(type){
        debugger
        var data = document.getElementById('table');
        var excelFile = XLSX.utils.table_to_book(data, {sheet: "sheet1"});
        XLSX.write(excelFile, { bookType: type, bookSST: true, type: 'base64' });
        XLSX.writeFile(excelFile, 'ExportedFile:HTMLTableToExcel' + type);
       }

})