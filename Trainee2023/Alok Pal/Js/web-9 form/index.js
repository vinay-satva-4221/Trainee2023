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

$(function() {
    $('input[name="date"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
      alert("You are " + years + " years old!");
    });
  });


function col() {
    var t = document.getElementsByClassName("row");
    console.log(t[0])
    console.log(t.length)

    for (let i = 0; i <= t.length; i++) {

        console.log(t[i])
    }
}

window.onload = function () {
    const g = document.getElementsByClassName("row");
    var a = document.getElementsByClassName("colorC1");
    len = g.length;
    console.log(len)
    for (let i = 0; i < len; i++) {
        a[i].onclick = function () {

            var a = document.getElementsByClassName("colorC1")[i];
            console.log(a)
            var g1 = document.getElementsByClassName("row")[i];
            var g2 = document.getElementsByClassName("row")[0];

            console.log(a)
            if (i == 0) {
                g1.style.background = 'hsl(60, 100%, 93%)';
                var g2 = document.getElementsByClassName("row")[1];
                g2.style.background = 'white';

                a[0].onChange = function (){
                    if ( a[i] == null){
                    }
                }
                
                
                
            }

            if (i == 1) {
                g2.style.background = 'white';

                g1.style.background = 'hsl(60, 100%, 93%)';

            
            }

            if (i == 2) {
                var g2 = document.getElementsByClassName("row")[1];
                g2.style.background = 'white';

                g1.style.background = 'hsl(60, 100%, 93%)';

               
            }
            if(i==3){
                var g2 = document.getElementsByClassName("row")[1];
                g2.style.background = 'white';

                g1.style.background = 'hsl(60, 100%, 93%)';

               
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


