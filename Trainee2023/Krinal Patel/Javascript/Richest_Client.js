var bank1 = parseInt(document.getElementById("c1").value);
var bank2 = parseInt(document.getElementById("c2").value);
var bank3 = parseInt(document.getElementById("c3").value);

var bank21 = parseInt(document.getElementById("c21").value);
var bank22 = parseInt(document.getElementById("c22").value);
var bank23 = parseInt(document.getElementById("c23").value);

var bank31 = parseInt(document.getElementById("c31").value);
var bank32 = parseInt(document.getElementById("c32").value);
var bank33 = parseInt(document.getElementById("c33").value);

let acc = [[]];
acc[0] = [bank1, bank2, bank3];
acc[1] = [bank21, bank22, bank23];
acc[2] = [bank31, bank32, bank33];
console.log("first", acc[0])
console.log("second", acc[1])
console.log("third", acc[2])
console.log("Array", acc)