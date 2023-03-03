// function validateForm(){
//     var name=document.getElementById("name").value;
//     var address=document.getElementById("address").value;
//     var age=document.getElementById("age").value;
//     var colors=document.getElementById("colors").value;
//     if(name==""){
//       alert("name is reuired");
//       return false;
//     }
//     if(address==""){
//       alert("name is reuired");
//       return false;
//     }
//     if(age==""){
//       alert("name is reuired");
//       return false;
//     }
//     if(colors==""){
//       alert("name is reuired");
//       return false;
//     }
//     return true;
//    }
    
// function show(){
//     var arr;
//      if(localStorage.getItem("arr")==null){
//         arr=[];
       
//      }
//      else{
//         arr=JSON.parse(localStorage.getItem("arr"));
//      }
//      var html="";
//      arr.forEach(function(element,index){
//      html+="<tr>"
//      html+="<td>" +element.name+"</td>";
//      html+="<td>" +element.address+"</td>"
//      html+="<td>" +element.age+"</td>"

//      html+="<td>" +element.colors+"</td>"
//      html+=`<td><button onclick="deletedata('+index+')" class="btn btn-danger">delete</button><button onclick="updatedata('+index+')" class="btn btn-warning">edit</button></td>`;
//      html+="</tr>";
//      document.querySelector("#crud tbody").innerHTML=html;
//      });

//     }
//     document.onload=show();


//     function add(){
   
//     var name=document.getElementById("name").value;
//     var address=document.getElementById("address").value;
//     var age=document.getElementById("age").value;
//     var colors=document.getElementById("colors").value;
//     var arr;
//      if(localStorage.getItem("arr")==null){
//         arr=[];
       
//      }
//      else{
//         arr=JSON.parse(localStorage.getItem("arr"));
//      }
//      arr.push({
//         name:name,
//         address:address,
//         age:age,
//         colors:colors,

//      });
//      localStorage.setItem("arr",JSON.stringify(arr));
//      show();
//      document.getElementById("name").value="";
//      document.getElementById("age").value="";
//      document.getElementById("address").value="";
//      document.getElementById("colors").value="";

//    }
//    //function to edit data
//    updatedata('+index+'){

//    }




















function add(){
    var name=document.getElementById("name").value;
    var address=document.getElementById("address").value;
    var age=document.getElementById("age").value;
    var colors=document.getElementById("colors").value;
    console.log(name);
    var table=document.getElementById("crud");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=name;
    cell2.innerHTML=address;
    cell3.innerHTML=age;
    cell4.innerHTML=colors;
}
var setCookie = function (n, val) {
    var exdays = 30;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = n + "=" + val + "; " + expires;
};

var getCookie = function (n) {
    var name = n + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};


document.onclick = function (e) {
    if (e.target.id == 'colors') {
        
        e.target.style.backgroundColor=document.getElementById("colors").value;
        var favColor = e.target.style.backgroundColor;
        setCookie('color', favColor);
        document.body.style.backgroundColor = favColor;
        console.log(favColor);
    }
}
    // function colorrr(){
    //       var colors=document.getElementById("colors").value;
    //       console.log(colors);
    // }

window.onload = function () {
    var favColor = document.body.style.backgroundColor;
    var color = getCookie('color');
    if (color === '') {
        document.body.style.backgroundColor = favColor;
    } else {
      document.body.style.backgroundColor = color;
    }
};