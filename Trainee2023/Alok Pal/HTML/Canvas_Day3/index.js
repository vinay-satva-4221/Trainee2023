let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
ctx.fillStyle = "pink";
ctx.fillRect(0,0,280,260);



//transparency


ctx.fillStyle = "green";
ctx.globalAlpha=0.50;
ctx.fillRect(60,60,280,260);
