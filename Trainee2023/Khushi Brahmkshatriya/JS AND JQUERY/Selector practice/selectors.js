//element selector with hover event
$(document).ready(function()
{
    $('p').hover(function(){
        $(this).css('background-color','black');
        console.log(this);
    })
});
//id selector with click and replace method
$(document).ready(function()
{
    $('#exampleOfIdSelector').click(function(){
        $(this).replaceWith("<h1>Change text using replaceWith method</h1>");
    })
});
//class selector with 
$(document).ready(function()
{
    $('.exOfClassSelector').dblclick(function(){
        $(this).after("This is class selector");
    })
});
//All element selector using click anf hide method
$(document).ready(function(){
    $('button').click(function(){
      $("*").hide();
    });
});
//select first p element with focus
$(document).ready(function(){  
    $('input:first').focus(function(){  
        $(this).next( "span" ).css( "display", "inline" ).fadeOut( 2000 ); 
    });  
}); 
// select 
$(document).ready(function(){  
    $('p input:first').blur(function(){  
        alert("This text box has lost its focus.");  
    });  
}); 
//select li first child
$(document).ready(function(){  
    $('ul li:first-child').click(function(){  
        alert("This is first child.");  
    });  
}); 
//select all elements with an href attribute and delay method
$(document).ready(function(){
    $('[href]').click(function(){
      $("#div1").delay("slow").fadeIn();
      $("#div2").delay("fast").fadeIn();
      $("#div3").delay(800).fadeIn();
      $("#div4").delay(2000).fadeIn();
      $("#div5").delay(4000).fadeIn();
    });
});
//select even and odd row
$(document).ready(function(){
    $("tr:even").css("background-color", "red");
});
$(document).ready(function(){
    $("tr:odd").css("background-color", "lightpink");
});

