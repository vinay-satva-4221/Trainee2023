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