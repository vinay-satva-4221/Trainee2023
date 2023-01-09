const canvas = document.getElementById("canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");



ctx.fillStyle = "pink";
ctx.fillRect(40, 40, 250, 100);
ctx.globalCompositeOperation = "lighter";
ctx.fillStyle = "green";
ctx.fillRect(80, 80, 250, 100);