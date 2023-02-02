function evaluatation()
{
    let value1=document.getElementById("result").value;
    let value2=math.evaluate(value1);
    document.getElementById("result").value=value2;
}   

// function evaluatation()
// {
//     let value1=document.getElementById("result").value;
//     // const splitforuse=value1.split(" ");
//     // console.log((splitforuse));
//     let names=value1.split(" ")
//     let first = names[0];
//     let last = names[1];
//     console.log("first",first);
//     console.log("last",last);
// } 


// function add()
// {
//     var field=document.getElementById("result").value;
//     field1=field+field;
//     document.getElementById("result").value=field1;
// }