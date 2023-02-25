function displayy(){


    var first=document.getElementById("first").value;
    var last=document.getElementById("last").value;
    var address =document.getElementById("address").value;
    var apt=document.getElementById("apt").value;
    var city=document.getElementById("city").value;
    var option=document.getElementById("option").value;
    var zip=document.getElementById("zip").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    document.getElementById("option").style.color="red";
   
    console.log(first);
    var table=document.getElementById("tbody");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=first;
    cell2.innerHTML=last;
    cell3.innerHTML=address;
    cell4.innerHTML=apt;
    cell5.innerHTML=city;
    cell6.innerHTML=option;
    cell7.innerHTML=zip;
    cell8.innerHTML=email;
    cell9.innerHTML=number;
    document.getElementById("7")
    
}
function validatefname() {
    let setfname = /^[a-zA-Z]+$/;
   let msgfname = document.getElementById("invalid_msg");
    if (!setfname.test(first)) {
        msgfname.innerHTML = "*Only alphabets are allowed in First name";
        msgfname.style.color = "red";
        document.getElementById("invalid_msg").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg").style.display = "none";
        return true;
    }
}
function validatelname() {
    let setlname = /^[a-zA-Z]+$/;
    let msglname = document.getElementById("invalid_msg1");
    if (!setlname.test(last)) {
        msglname.innerHTML = "*Only alphabets are allowed in Last name";
        msglname.style.color = "red";
        document.getElementById("invalid_msg1").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg1").style.display = "none";
        return true;
    }
}
function validatezip() {
    let setzip = /^\d{6}$/;
    let zip = document.getElementById("zip").value;
    let msgzip = document.getElementById("invalid_msg2");
    if (!setzip.test(zip)) {
        msgzip.innerHTML = "*Only 6 digits are allowed";
        msgzip.style.color = "red";
        document.getElementById("invalid_msg2").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg2").style.display = "none";
        return true;
    }
}
function validateaddress(){
    let setlname = /^[a-zA-Z]+$/;
    let msglname = document.getElementById("invalid_msg5");
    if (!setlname.test(address)) {
        msglname.innerHTML = "*Only alphabets are allowed in addresss";
        msglname.style.color = "red";
        document.getElementById("invalid_msg5").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg5").style.display = "none";
        return true;
    }
}
function validateapt(){
    let setapt=/^\d{6}$/;
    let msgapt=document.getElementById("invalid_msg6");
    if(setapt.length>3){
        msgapt.innerHTML="*apartment number is not valid";
        msgapt.style.color="red";
        document.getElementById("invalid_msg6").style.display = "unset";
        return false;
    }
    
}
function validateemail() {
    let setemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value;
    let msgemail = document.getElementById("invalid_msg3");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "*Should include @";
        msgemail.style.color = "red";
        document.getElementById("invalid_msg3").style.display = "unset";
        return false;
    } else {
        document.getElementById("invalid_msg3").style.display = "none";
        return true;
    }
}
function phonenumber()
{
  var phoneno = /^\d{10}$/;
  let msgno = document.getElementById("invalid_msg4");
  if(!phoneno.test(number)){
       msgno.innerHTML="*must be of 10 digits";
       msgno.style.color="red";
       document.getElementById("invalid_msg4").style.display = "unset";
       return false;
  }
  else{
    document.getElementById("invalid_msg4").style.display = "none";
    return true;
  }
    }

 function validateForm() {
    var returnval=true;
    var fname = document.forms['myForm']["fname"].value;
    var lname = document.forms['myForm']["lname"].value;
    var address = document.forms['myForm']["address"].value;
    var apt = document.forms['myForm']["apt"].value;
    var city= document.forms['myForm']["city"].value;
    var option = document.forms['myForm']["option"].value;
    var zip= document.forms['myForm']["zip"].value;
    var email = document.forms['myForm']["email"].value;
    var number = document.forms['myForm']["number"].value;
    
   console.log(fname);
    console.log(lname);
    console.log(address);
    console.log(apt);
    console.log(city);
    console.log(option);
    console.log(zip);
    console.log(email);
    console.log(number);

    if(fname==''|| lname==''|| address==''|| apt==''||city==''||option==''||zip==''||email==''||number==''){
        alert("Please fill out all the boxes");
        returnval=false;
    }
    
   if(fname=='0'||fname=='1'||fname=='2'||fname=='3'){
       alert("only alphabets are allowed");
       returnval=false;
   }
   if(lname.length<5){
    alert("last name is too short");
    returnval=false;
}
   
    return returnval;
   
  }


