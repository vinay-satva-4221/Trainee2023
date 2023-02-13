

// Daterangepicker
$(function () {
    $('input[name="date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
        var years = moment().diff(start, 'years');
    });
});

//security number allow only one digit
$(function () {
    $("input[name='numonly']").on('input', function (e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

$(function () {
    $("input[name='numonly1']").on('input', function (e) {
        $(this).val($(this).val().replace(/^\w{1}$/g, ''));
    });
});





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
        errorN.style.display = "block";
        // errorN.innerHTML = "This field is required";
        colName.style.background = "#ffcccc";
        return false;
    }
    else {
        colName.style.background = "white";
        document.getElementById("error").style.display = "none";
        return true;
    }
}





window.onload = function () {
    const g = document.getElementsByClassName("row");
    var a = document.getElementsByClassName("colorC1");
    len = g.length;
    var b = document.getElementsByClassName("sn");
    console.log(b)
    console.log(g)
    for (let i = 0; i < len; i++) {
        a[i].onclick = function () {

            var a = document.getElementsByClassName("colorC1")[i];
            console.log(a)

            var g1 = document.getElementsByClassName("row")[i];

            var g3 = document.getElementsByClassName("row")[1];
            var g4 = document.getElementsByClassName("row")[2];
            var g7 = document.getElementsByClassName("row")[5];
            var g8 = document.getElementsByClassName("row")[6];
            var g9 = document.getElementsByClassName("row")[10];
            var g10 = document.getElementsByClassName("row")[13];

            console.log(a)
            if (i == 0) {
                g1.style.background = 'hsl(60, 100%, 93%)';
                g3.style.background = 'white';
                g4.style.background = 'white';
                g7.style.background = 'white';
                g8.style.background = 'white';
                g9.style.background = 'white';
                g10.style.background = 'white';

            }

            if (i == 1) {
                if (validateForm() != true) {
                } else {
                    g1.style.background = 'hsl(60, 100%, 93%)';
                }
                g1.style.background = 'hsl(60, 100%, 93%)'
                g4.style.background = 'white';

                g7.style.background = 'white';
                g8.style.background = 'white';
                g9.style.background = 'white';
                g10.style.background = 'white';

            }

            if (i == 2) {
                g3.style.background = 'white';
                g1.style.background = 'hsl(60, 100%, 93%)';

                g3.style.background = 'white';
                g7.style.background = 'white';
                g8.style.background = 'white';
                g9.style.background = 'white';
                g10.style.background = 'white';



            }

            if (i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9) {
                g3.style.background = 'white';
                g4.style.background = 'hsl(60, 100%, 93%)';
                g7.style.background = 'white';
                g8.style.background = 'white';
                g9.style.background = 'white';
                g10.style.background = 'white';
            }

            if (i == 10 || i == 11) {
                g7.style.background = 'hsl(60, 100%, 93%)'
                g3.style.background = 'white';
                g4.style.background = 'white';
                g8.style.background = 'white';
                g9.style.background = 'white';
                g10.style.background = 'white';

            }

            if (i == 12 || i == 13 || i == 14 || i == 15) {
                g8.style.background = 'hsl(60, 100%, 93%)'
                g3.style.background = 'white';
                g4.style.background = 'white';
                g7.style.background = 'white';
                g9.style.background = 'white';
                g10.style.background = 'white';


            }

            if (i == 16 || i == 17) {
                g9.style.background = 'hsl(60, 100%, 93%)'
                g3.style.background = 'white';
                g4.style.background = 'white';
                g7.style.background = 'white';
                g8.style.background = 'white';
                g10.style.background = 'white';


            }
            if (i == 18 || i == 19 || i == 20 || i == 21) {
                g10.style.background = 'hsl(60, 100%, 93%)'
                g3.style.background = 'white';
                g4.style.background = 'white';
                g7.style.background = 'white';
                g8.style.background = 'white';
                g9.style.background = 'white';


            }

        }

    }
}



//signature canvas

// var canvas = document.getElementById("sig-canvas");

// function resizeCanvas() {
//     var ratio = Math.max(window.devicePixelRatio || 1, 1);
//     canvas.width = canvas.offsetWidth * ratio;
//     canvas.height = canvas.offsetHeight * ratio;
//     canvas.getContext("2d").scale(ratio, ratio);
// }
// window.onresize = resizeCanvas;
// resizeCanvas();

// var signaturePad = new SignaturePad(canvas, {
//     backgroundColor: 'rgb(250,250,250)'
// });

var canvas = document.getElementById("sig-canvas");
    var signaturePad = new SignaturePad(canvas);

    $('#clear-signature').on('click', function () {
        signaturePad.clear();
    });


    

//checkbox show and hide
function showHide(checked) {
    if (checked == true)
        $("#hiddenfield").fadeIn();
    else $("#hiddenfield").fadeOut();
}

// Mouse hover
$(document).ready(function () {
    $("input").mouseenter(function () {
        $(this).css("border-color", "blue");
    });
    $("input").mouseleave(function () {
        $(this).css("border-color", "lightgray");
    });
});


// var canvas = document.getElementById("sig-canvas");

// function resizeCanvas() {
//     var ratio = Math.max(window.devicePixelRatio || 1, 1);
//     canvas.width = canvas.offsetWidth * ratio;
//     canvas.height = canvas.offsetHeight * ratio;
//     canvas.getContext("2d").scale(ratio, ratio);
// }
// window.onresize = resizeCanvas;
// resizeCanvas();

// var signaturePad = new SignaturePad(canvas, {
//     backgroundColor: 'rgb(250,250,250)'
// });
