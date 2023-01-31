$(document).ready(function() {
    var a = $("p.title").text(); 
    var k = $("#t1").text();

    console.log("Title of P before Hide = ",a);

    $("p.title").click(function(){


        //If we miss spell hide event then console will show an error..
        $(this).hide();
        
        
        console.log("Title of P after Hide = ",a);

    });      
    $("#t1").click(function(){ //here writing p is optional...


        //If we miss spell hide event then console will show an error..
        $(this).hide();
        
        
        console.log("Title of P after Hide = ",k);

    }); 
    
    

});


// ---------------------------------------------------
// Variables 
//Variable can be redeclared..!!
var a = 5;
{var a = "KP"; 
}
vardemo.innerHTML = a;


//Let can not be redeclared..!!
let b = 7;
{
    let b = "Patel"; //This is not allowed in LET
}
b="patel"; // It will allow this

letdemo.innerHTML =b;



//Const can not be reassigned..!!
const pi=3.014449974;

// pi=3.14; //This will generate error in console

constdemo.innerHTML =pi;

// ----------------------------------------------------------------------
// Datatypes
$(document).ready(function() {

// Numbers:
let length = 16;
let weight = 7.5;
console.log("length =  ",length,"Weight = ", weight);

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log("color =  ",color,"Last name = ", lastName);

// Booleans
let x = true;
let y = false;
console.log("x =  ",x,"y = ", y);

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log("Name = ",person);


// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log("Cars = ",cars);

// Date object:
const date = new Date("2023-01-23");
console.log("Date = ",date);

//Adding numbers to String object and string to number object:
let n= 10+15+"Patel"
let s="Patel"+10+15
console.log("Number + string = ",n);
console.log("String + number = ",s);

// $("*").css("text-align","center");
// $("*").css("background-color","lightgray");


//First and last p tag will be bold:
$("p:first").css("font-weight","bold");
$("p:last").css("font-weight","bold");



  const car = ["Saab", "Volvo", "BMW"];

  //for loop
    let text="";
    for (let i=0; i<car.length; i++){
      text = text + car[i] + "<br>";
    }
    a2.innerHTML = text;
 //for in loop
    let txt="";
    for (let i of car){
        txt = txt + i + "<br>";
    }
    a3.innerHTML = txt;
 //for Of loop
    


});
// var a=10;
// var b=20;
// var c=30;
// if(a<b || a==10 || a==b)
// {

// }



function myFunction(p1, p2) {
    // return p1 * p2;
    return this.p1 ;
  }
  a1.innerHTML = myFunction(4, 3);


  $(document).ready(function(){
    $("td").children().css({"color": "red", "border": "2px solid red"});

    const alphabets = new Set(["H","I","J","K","L","M","N"]);
    a3.innerHTML = alphabets.size;
});

function eligible(age){
    return(age ? '18' : '20');
    console.log(age(true));
}

//Self Learning Day 2 

$(document).ready(function() {
 

    
//Hide

$("#hide_btn").click(function(){
    $(".hide").hide(1000);
});
//show
$("#show_btn").click(function(){
    $(".hide").show(1000);
});

//fade
$("#fadein_btn").click(function(){
    $(".fades").fadeIn(1000);
});
$("#fadeout_btn").click(function(){
    $(".fades").fadeOut(1000);
});
$("#fadetoggle_btn").click(function(){
    $(".fades").fadeToggle(1000);
});
$("#fadeto_btn").click(function(){
    $(".fades").fadeTo(1000);
});

    
// Slide

$("#slideDown").click(function(){
    $(".slide").slideDown(1000);
});

$("#slideUp").click(function(){
    $(".slide").slideUp(1000);
});

$("#slideToggle").click(function(){
    $(".slide").slideToggle(1000);
});

// Slide
$("#animate").click(function(){

    $(".animate").animate({
left: '250px',
opacity: '0.5',
height: '150px',
width: '150px'
},1000);
});

$("#daterange").daterangepicker({},function(start, end, label) {
console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});

$('.slick').slick({
rtl: true
});
});