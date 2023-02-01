function resultValue(val){
    document.getElementById("result").value += val;

}
function clr(){
    document.getElementById("result").value = ""
}

function final()
{
    let x=document.getElementById("result").value;
    let y=math.evaluate(x);
    document.getElementById("result").value=y;

}  
