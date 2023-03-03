var d1=JSON.parse(localStorage.getItem("user1"));
$("#p1").html(d1.name1);
console.log(d1.name1);


function logout(){
    window.location.replace("livetask.html");
}
