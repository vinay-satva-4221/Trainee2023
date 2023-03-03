
function logout(){
    window.location.replace("livetask.html");
}
// var d1=JSON.parse(localStorage.getItem("user"));
// $("#p1").html(d1.name1);
// console.log(d1.name1);

var d1=JSON.parse(localStorage.getItem("user1"));
$("#p1").html(d1.name1);
console.log(d1.name1);
// datatable
$(document).ready(function () {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
  // popover
  // $('[data-toggle="popover"]').popover();   
    $('#dashboard').DataTable({
      binfo:true,
      bFilter:true,
   
      language:{
        
        info: "Items 1 to 15 of 30 total",

        paginate:{
          
          previous:"<",
          next:">",
        }

  },

    
  });
});
