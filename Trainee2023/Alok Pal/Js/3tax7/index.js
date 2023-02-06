// let a = [[1,2,2], [2,2,2,3]]
// let sum = a[1].reduce(function(total,value){
//  return  total+value
// })
// console.log("sum",sum)
// a[0].push(2);

// console.log(a)


// acct.push([1,2,3]);
// acct.push([1,2,3,4])
// acct[0].push(2)

// console.log(acct)

function getValue(){
    var bank1 =document.getElementById("c1").value;
    var bank2 =document.getElementById("c1").value;
    var bank3 =document.getElementById("c1").value;

    var bank21 =document.getElementById("c21").value;
    var bank22 =document.getElementById("c22").value;
    var bank23 =document.getElementById("c23").value;

    var bank31 =document.getElementById("c31").value;
    var bank32 =document.getElementById("c32").value;
    var bank33 =document.getElementById("c33").value;



    let acc =[[]];
    acc[0] = [bank1,bank2,bank3];
    acc[1] = [bank21,bank22,bank23];
    acc[2] = [bank31,bank32,bank33];
    console.log("first",acc[0])
    console.log("second",acc[1])
    console.log("third",acc[2])
    console.log("Array", acc)

    let max = 0;
    for (let x of acc) {
        let client = x.reduce(function (total, value) {
            return total + value;
        });
        if (max < client) {
            max = client;
        }
    }
    return max;

}
console.log("get value",getValue())




// solution

function wealthMax(accounts) {
    var accounts = [[2,8,7],[7,1,3],[1,9,5],[1,2,3,4,5,6,7]]
    let max = 0;
    for (let x of accounts) {
        let client = x.reduce(function (total, value) {
            return total + value;
        });
        if (max < client) {
            max = client;
        }
    }
    return max;
}
console.log(wealthMax());



// Another way
function max (acc){
    var acc = [[2,8,7],[7,1,3],[1,9,5],[1,2,3,4,5,6,7]];
    let max = 0;

    acc.forEach(function(value){

    })

}