console.log("hello")
$(document).ready(function(){
    $(".form-line").on({
       
        click: function(){
            $(this).css("background-color", "rgb(244, 244, 147)");
        },
        change : function(){
            $(this).css("background-color", "white");
        }
    });    
});