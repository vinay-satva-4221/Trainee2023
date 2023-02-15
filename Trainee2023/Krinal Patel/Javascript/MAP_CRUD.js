
//Insert Using Map



let cars = [                            
  {name : "Swift", mileage: 200},
  {name : "Verna", mileage: 100},
  {name : "Alto", mileage: 60}
];

cars.map(function(element,index,array){     //callback Function
    // console.log(element)
    // console.log(index)
    // console.log(array)
});  


let CarDetails = cars.map(function(element){            //Mapping
  return `${element.name} ${element.mileage}`;
}); 



console.log(CarDetails) 


localStorage.setItem( 'CarData', JSON.stringify(CarDetails));

///////////////////////////////////////////////////////////////////Dynamic//////////////////////////////////////////////

var id = 0;
var EmployeeArray = [];

function validateallow() {

    
    var name = $("#name").val();
    var role = $("#role").val();
   
debugger;

    var list=new Map();

    list.set("name",name)
    list.set("role",role)

    var nameCell=list.get("name")
    var roleCell=list.get("role")

    console.log(list);
    console.log(nameCell)


    // id ++;
    
    // var EmpObj=[{name,role}];                        //SET
    // // var EmpObj = {name: name, role: role}


    // let EmployeeArray = EmpObj.map(function(element){            //Mapping
    //     return `${element.name} ${element.role}`;//       K  P
    //   }); 
    //   console.log("EArray = "+EmployeeArray) 


    
    //   EmployeeArray.push(EmpObj);
    
    
    // localStorage.setItem('EmployeeDetails', JSON.stringify(EmpObj));


    // prepareTableCell(EmpObj.name,EmpObj.role)                   //undefinedcd

    // document.getElementById("name").value = "";
    // document.getElementById("role").value = "";

}

//Table insert data

function prepareTableCell(name, role) {
var index= index;
console.log('index', index)
var table = document.getElementById("mytable");
var row = table.insertRow();
var currentIndex = EmployeeArray.findIndex(x=> x.id == index)

var nameCell = row.insertCell(0);
var roleCell = row.insertCell(1);
var editCell = row.insertCell(2);
var deleteCell = row.insertCell(3);

nameCell.innerHTML=name;
roleCell.innerHTML=role;
editCell.innerHTML= '<button class="btn btn-dark" onclick="editTableRow(this)">Edit</button>';
deleteCell.innerHTML= '<button class="btn btn-danger" onclick="deleteTableRow('+index+')">Delete</button>';   

}




    //Delete Row
    function deleteTableRow(index){
        var table = document.getElementById("mytable");
        console.log(index, EmployeeArray)
        var currentIndex = EmployeeArray.findIndex(x=> x.id == index)
        console.log('currentIndex', currentIndex);
        table.deleteRow(currentIndex + 1);
        EmployeeArray.splice(currentIndex, 1);
    
        localStorage.setItem('EmployeeDetails', JSON.stringify(EmployeeArray));
       
        swal({
            title: "Record deleted",
            text: "Student Detail Deleted successfully",
            icon: "success",
            button: "Ok"
        });
    }

     //Edit Row
      
    function editTableRow(td){

        SelectedRow = td.parentElement.parentElement;

        document.getElementById("name").value = SelectedRow.cells[0].innerHTML;
        document.getElementById("role").value = SelectedRow.cells[1].innerHTML;
       
        localStorage.setItem('EmployeeDetails', JSON.stringify(EmployeeArray));

}

    
    //Update Row
    debugger;

    function updateTableRow(formData){
   
        var formData = readFormData();
    debugger;

        SelectedRow.cells[0].innerHTML = formData.name;
        SelectedRow.cells[1].innerHTML = formData.role;

        localStorage.setItem('EmployeeDetails', JSON.stringify(EmployeeArray));

    }
    function readFormData() {
        var formData = {};
        formData["name"] = document.getElementById("name").value;
        formData["role"] = document.getElementById("role").value;
   

        return formData;
    }