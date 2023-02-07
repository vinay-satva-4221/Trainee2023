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

function getValue() {
    var bank1 = parseInt(document.getElementById("c1").value);
    var bank2 = parseInt(document.getElementById("c1").value);
    var bank3 = parseInt(document.getElementById("c1").value);

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

    let max = 0;
    let ind = 0;
    for (let x of acc) {
        let client = x.reduce(function (total, value) {
            return total + value;
        });
        if (max < client) {
            max = client;
            ind++;
        }
    }

    if (ind == 1) {
        document.getElementById("1").innerHTML = "First Client is the richest"
    }
    else if (ind == 2) {
        document.getElementById("2").innerHTML = "Second Client is the richest"
    }
    else if(ind ==3) {
        document.getElementById("3").innerHTML = "Third Client is the richest"
    }
    console.log(ind)

    console.log(max)
}

// console.log("getValue",getValue());




// solution

// function wealthMax(accounts) {
//     var accounts = [[2,8,7],[7,1,3],[1,9,5],[1,2,3,4,5,6,7]]
//     let max = 0;
//     for (let x of accounts) {
//         let client = x.reduce(function (total, value) {
//             return total + value;
//         });
//         if (max < client) {
//             max = client;
//         }
//     }
//     return max;
// }
// console.log(wealthMax());



// // Another way
// function max (acc){
//     var acc = [[2,8,7],[7,1,3],[1,9,5],[1,2,3,4,5,6,7]];
//     let max = 0;

//     acc.forEach(function(value){

//     })

// }