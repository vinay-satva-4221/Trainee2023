function add() {
  let x = document.getElementById("ft1").value;
  let y = document.getElementById("ft2").value;
  let m = document.getElementById("ft3").value;

  if (!isNaN(x) && !isNaN(y) && !isNaN(m)) {
    let c = parseInt(x) + parseInt(y);
    document.getElementById("ans").value = c + " | " + m + " | " + c + m;
  } else if (!isNaN(x) && !isNaN(y)) {
    document.getElementById("ans").value = "T3 is not a number";
  } 
  else if (!isNaN(x) && !isNaN(m)) {
    document.getElementById("ans").value = "T2 is not a number";
  } else if (!isNaN(m) && !isNaN(y)) {
    document.getElementById("ans").value = "T1 is not a number";
  } else if (!isNaN(x) ) {
    document.getElementById("ans").value = "T2 and T3 is not a number";
  } 
  else if (!isNaN(y) ) {
    document.getElementById("ans").value = "T1 and T3 is not a number";
  } 
  else if (!isNaN(m) ) {
    document.getElementById("ans").value = "T1 and T2 is not a number";
  } 
  
  
  
  
  
  
  else {
    document.getElementById("ans").value = "Please enter a digits only ";
  }
}
btn1.addEventListener("click", add);
