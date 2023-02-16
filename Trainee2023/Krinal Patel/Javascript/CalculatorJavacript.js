function disp(val){
    document.getElementById("result").value+=val;
}

function clr(){
    document.getElementById("result").value="";
}

function calc(){
debugger;

    let x = document.getElementById("result").value; 
    y = eval(x);
    document.getElementById("result").value = y;
    

}
