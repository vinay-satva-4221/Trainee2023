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
            var g1 = document.getElementsByClassName("row")[i];
            console.log(a)
            if (i == 0) {
                g1.style.background = 'yellow';
                var g2 = document.getElementsByClassName("row")[1];
                g2.style.background = 'white';

                a[0].onChange = function (){
                    if ( a[i] == null){
                    }
                }
                
                
                
            }

            if (i == 1) {
                var g2 = document.getElementsByClassName("row")[0];
                g2.style.background = 'white';

                g1.style.background = 'yellow';

            
            }

            if (i == 2) {
                var g2 = document.getElementsByClassName("row")[1];
                g2.style.background = 'white';

                g1.style.background = 'yellow';

               
            }
        }
    }
}