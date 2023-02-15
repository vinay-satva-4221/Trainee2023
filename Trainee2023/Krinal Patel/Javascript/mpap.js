
//Static Implementation


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


  //Dynamic Implementation
  var map = new Map();

  function showData() {
    
    debugger;
  
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
 
    //OBJ 
    var peopledata = {
      name:name,
      role:role
    };

    var peopleList = map.set(map.size + 1, JSON.stringify(peopledata));

    // map.set("name", {name:name,role:role});
    // peopleList.set("role", role);
    
    console.log(peopleList);


    // let namelist = map.get("name");
    // let rolelist = peopleList.get("role");

    var html = "";


      for(var i = 1 ; i <= map.size; i++){
        // peopleList.forEach(function (element, index) {
            var data = map.get(i);
            console.log(data)

            let data2 = JSON.parse(data);
            console.log(data2)
            
            html += "<tr>";
            
            // html += "<td>" + namelist.name + "</td>";
            // html += "<td>" + namelist.role + "</td>";
            // html += "<td>" +  '<button class="btn btn-dark" onclick="editTableRow(this)">Edit</button>'  + "</td>";
            // html += "<td>" +  '<button class="btn btn-danger" onclick="deleteTableRow('+index+')">Delete</button>' + "</td>";        

            html += "<td>" + data2.name + "</td>";
            html += "<td>" + data2.role + "</td>";
            html += "<td>" +  '<button class="btn btn-dark" onclick="editTableRow(this)">Edit</button>'  + "</td>";
            html += "<td>" +  '<button class="btn btn-danger" onclick="deleteTableRow('+i+')">Delete</button>' + "</td>";        


            html += "</tr>";

            
            document.getElementById("name").value = "";
            document.getElementById("role").value = "";
              
            document.getElementById("tdata").innerHTML = html;


            // EArray.push(map);
          


        // });
       }

}




 
  function deleteTableRow(i){
    debugger;
    // var table = document.getElementById("mytable");
    document.getElementById("mytable").deleteRow(i);

    // console.log(index, studentsArray)
    // var currentIndex = peopledata.findIndex(x=> x.i == index)
    // console.log('currentIndex', i);
    // table.deleteRow(i + 1);
    // studentsArray.splice(i, 1);

    // localStorage.setItem('StudentDetails', JSON.stringify(studentsArray));
   
    swal({
        title: "Record deleted",
        text: "Student Detail Deleted successfully",
        icon: "success",
        button: "Ok"
    });
}

