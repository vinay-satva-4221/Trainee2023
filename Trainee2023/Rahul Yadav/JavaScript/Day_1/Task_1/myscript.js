function check() {
            var numbers = /^[0-9]+$/;
            let t11 = document.getElementById("t1");
            t11 = document.getElementById("t2");
            t11 = document.getElementById("t3");
            if (t11.value.match(numbers)) {
                let ans = document.getElementById("ans").value = "";

            }
            else {
                let ans = document.getElementById("ans").value = "Please Enter Value or Enter Number Value (EX-1 to 9, Any Number)";

            }
        }

        function calculate() {
            const t1 = parseInt(document.getElementById("t1").value);
            const t2 = parseInt(document.getElementById("t2").value);
            const t3 = parseInt(document.getElementById("t3").value);
            var t4;
            t4 = t1 + t2;
            let ans = document.getElementById("ans").value = t4 + "|" + t3 + "|" + t4 + t3;
        }
