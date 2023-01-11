function submitform(){
    let name = document.forms["myForm"]["fname1"].value;
    console.log(name);

    let name2 = document.forms["myForm"]["fname2"].value;
    console.log(name2);

    let phone = document.forms["myForm"]["fphone"].value;
    console.log(phone)

    let email = document.forms["myForm"]["femail"].value;
    console.log(email)
    
    return false;
}

// smilley onmouse
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}
  
function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}

// colour change
function mouseDown() {
    document.getElementById("p1").style.color = "red";
}
  
function mouseUp() {
    document.getElementById("p1").style.color = "green";
}

//
function myFunction() {
    document.getElementById("demo").innerHTML = "Form submitted";
  }

 