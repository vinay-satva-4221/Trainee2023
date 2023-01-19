function add() {
  let x = document.getElementById("ft1").value;
  let y = document.getElementById("ft2").value;
  let m = document.getElementById("ft3").value;

  if (!isNaN(x) && !isNaN(y) && !isNaN(m)) {
    let c = parseInt(x) + parseInt(y);
    document.getElementById("ans").value = c + " | " + m + " | " + c + m;
  } else {
    document.getElementById("ans").value = "Please enter a digits only ";
  }
}
btn1.addEventListener("click", add);
