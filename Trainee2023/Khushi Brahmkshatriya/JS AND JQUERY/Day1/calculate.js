function Mycal() {

    let t1 = document.getElementById('t1').value;
    let t2 = document.getElementById('t2').value;
    let t3 = document.getElementById('t3').value;

    if (!t1 || !t2 || !t3) {

        if (!t1) {
            document.getElementById('n1').innerHTML = "Enter number of t1";
        }
        if (!t2) {
            document.getElementById('n2').innerHTML = "Enter number of t2";
        }
        if (!t3) {
            document.getElementById('n3').innerHTML = "Enter number of t3";
        }
        console.log('Enter numbers')
        document.getElementById('ans').value = "Enter number";
    }
    else {
        if (isNaN(t1) || isNaN(t2) || isNaN(t3)) {
            if (isNaN(t1)) {
                document.getElementById('n1').innerHTML = "Enter number only";
            }
            if (isNaN(t2)) {
                document.getElementById('n2').innerHTML = "Enter number only";
            }
            if (isNaN(t3)) {
                document.getElementById('n3').innerHTML = "Enter number only";
            }
            console.log('Enter numbers only')
            document.getElementById('ans').value = "Enter number only";
        }

        else {
            let n1 = parseInt(t1);
            let n2 = parseInt(t2);
            let n3 = parseInt(t3);

            let ans1 = n1 + n2;
            console.log(ans1);
            let ans2 = n3;

            let s1 = ans1.toString();
            let s2 = ans2.toString();

            let ans = s1 + s2;
            result = document.getElementById('ans').value = ans1 + "|" + ans2 + "|" + ans;
            console.log(result);
        }
    }
}