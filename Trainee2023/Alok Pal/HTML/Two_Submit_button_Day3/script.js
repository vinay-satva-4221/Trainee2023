const txt1 = getElementbyId("tbuser");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("utput1");

function fun1(){

    out1.innerHTML =txt1.value
}

btn1.addEventListener('click', fun1)
;