// console.log("hello")
// $(document).ready(function(){
//     $("#form-label").on({

//         click: function(){
//             $(".form-line").css("background-color", "rgb(244, 244, 147)");
//         },
//         change : function(){
//             $(this).css("background-color", "white");
//         }
//     });    
// });

// window.onload = function () {
//     var input = document.getElementById("colorC1")
//     var div = document.getElementById("colorC")
//     input.addEventListener('click', function () {
//         div.style.background = 'yellow';
//         // div.style.color = 'bl';
//     });
//     input.addEventListener('blur', function() {
//         div.style.background = 'white';
//         div.style.color = '#000';
//       });
// } 


// Daterangepicker
$(function () {
    $('input[name="date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        alert("You are " + years + " years old!");
    });
});



// function col() {
//     var t = document.getElementsByClassName("row");
//     console.log(t[0])
//     console.log(t.length)

//     for (let i = 0; i <= t.length; i++) {

//         console.log(t[i])
//     }
// }


//Form Validation
function validateForm() {
    if (!nameV1()) {
        valid = false;
    } else {
        return true;
    }
}
function nameV1() {
    var nameI = document.getElementById("inp1").value;
    var colName = document.getElementById("colorC");
    var errorN = document.getElementById("error");
    if (nameI == '') {
        errorN.innerHTML = "This Field is required";
        colName.style.background = "#ffcccc";
        return false;
    }
    else {
        colName.style.background = "white";
        document.getElementById("error").style.display = "none";
        return true;

    }
}

// function nameV() {
//     let regName = /^[A-Za-z]+$/;
//     let name = document.getElementById("inp1").value;
//     let vname = document.getElementById("error");
//     if (!regName.test(name)) {
//         vname.innerHTML = "**Please enter Alphabets only**";
//         document.getElementById("error").style.display = "unset";
//         document.getElementById("inp1").focus();
//         return false;
//     } else {
//         document.getElementById("error").style.display = "none";
//         return true;
//     }
// }



window.onload = function () {
    const g = document.getElementsByClassName("row");
    var a = document.getElementsByClassName("colorC1");
    len = g.length;
    console.log(g)
    for (let i = 0; i < len; i++) {
        a[i].onclick = function () {

            var a = document.getElementsByClassName("colorC1")[i];
            console.log(a)

            var g1 = document.getElementsByClassName("row")[i];

            var g2 = document.getElementsByClassName("row")[0];
            var g3 = document.getElementsByClassName("row")[1];
            var g4 = document.getElementsByClassName("row")[2];
            var g5 = document.getElementsByClassName("row")[3];
            var g6 = document.getElementsByClassName("row")[4];
            var g7 = document.getElementsByClassName("row")[5];
            var g8 = document.getElementsByClassName("row")[9];
            var g9 = document.getElementsByClassName("row")[12];
            var g10 = document.getElementsByClassName("row")[15];






            console.log(a)
            if (i == 0) {
                g1.style.background = 'hsl(60, 100%, 93%)';
                g3.style.background = 'white';

            }

            if (i == 1) {
                if (validateForm() != true) {
                } else {
                    g1.style.background = 'hsl(60, 100%, 93%)';
                }
                g1.style.background = 'hsl(60, 100%, 93%)'
                g4.style.background = 'white';

            }

            if (i == 2) {
                // var one = document.getElementsByClassName("row")[1];
                g3.style.background = 'white';
                g1.style.background = 'hsl(60, 100%, 93%)';

            }

            if (i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10) {
                g3.style.background = 'white';
                g4.style.background = 'hsl(60, 100%, 93%)';


            }

            if (i == 11 || i == 12) {
                g6.style.background = 'hsl(60, 100%, 93%)'

            }
            if (i == 13 || i == 14 || i == 15 || i == 16) {
                g7.style.background = 'hsl(60, 100%, 93%)'

            }
            if (i == 17 || i == 18) {
                g8.style.background = 'hsl(60, 100%, 93%)'


            }
            if (i == 19 || i == 20 || i == 21 ) {
                g9.style.background = 'hsl(60, 100%, 93%)'

            }
            if(i==23){

            }
        }
    }
}


//signature canvas

var canvas = document.getElementById("sig-canvas");

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgb(250,250,250)'
});


function cl() {
    var on = document.getElementsByClassName("row")[2];
    var of = document.getElementsByClassName("chck");

    on.style.background = "yellow"
}
