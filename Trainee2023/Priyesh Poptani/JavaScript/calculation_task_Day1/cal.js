
function calculate()
{

    var resources = document.getElementById('t1').value;
    var minutes = document.getElementById('t2').value;
    var max = document.getElementById('t3').value;

    var a = parseInt(resources)+parseInt(minutes);
    var b = parseInt(max);
    var c = parseInt(a)+""+parseInt(b);
  
   
   
    var x = document.getElementById("t1").value;
    var y = document.getElementById("t2").value;
    var z = document.getElementById("t3").value;

    
    var text;
    

  
    if ((isNaN(x)==false && x > 0 && x < 10) && (isNaN(y)==false && y > 0 && y < 10) && (isNaN(z)==false && z > 0 && z < 10) ) {
   
    document.getElementById('ans').value = (a + '|' +b+'|'+c);
   
     } else {

        text = "Input not valid";
        document.getElementById("ans").value = text;

               
    // text = "Input OK";
     }
  
       
  

   

}
 

    

   