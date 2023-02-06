$(document).ready(function () {
    $('#AddData').click(function () {
        addMyDataToLocal();
        
    })
    showMyData();
})


function addMyDataToLocal() {
    var name = $('#name').val();
    var movie = $('#movie').val();

    var MyPracticeData = {
        Name: name,
        Movie: movie
    }

    var localData = JSON.parse(localStorage.getItem("MyPracticeData"));

    if (localData === null) {
        MyArray = [];
    }
    else {
        MyArray = localData;
    }
    MyArray.push(MyPracticeData);
    localStorage.setItem('MyPracticeData', JSON.stringify(MyArray));
    
}

function showMyData() {

    let localData = localStorage.getItem('MyPracticeData');
    
    if (localData) {
        $("#tblData tbody").html("");
        let localArray = JSON.parse(localData);
        let dynamicTR = "";
        
        localArray.forEach((data, index) => {
            
            
            dynamicTR = dynamicTR+ "<tr>";
            dynamicTR = dynamicTR + "<td> " + index + "</td>";
            dynamicTR = dynamicTR + "<td class='txtName'>" + data.Name + "</td>";
            dynamicTR = dynamicTR + "<td class='txtMovie'>" + data.Movie + "</td>";
            dynamicTR = dynamicTR + "<td class='tdAction'><button class='btn btn-sm btn-success btn-edit'> Edit</button> <button class='btn btn-sm btn-danger btn-delete'> Delete</button></td>";
            dynamicTR = dynamicTR + " </tr>";
            
        });
        $("#tblData tbody").append(dynamicTR);
    }
}

$('.btn-delete').on('click',function(){

})