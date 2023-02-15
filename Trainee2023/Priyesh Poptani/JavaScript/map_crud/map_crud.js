$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'right'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
  $("#fad").click(function(){
    $("#div1").fadeToggle();

});
$(document).ready(function(){
  $.validator.addMethod('validfname',
  function(value){
      return /^[a-z A-Z]+$/.test(value)
  }, 
  );
  $.validator.addMethod('validnumber',
  function(value){
      return /^[0-9]{10}$/.test(value)
  }, 
  );
  $.validator.addMethod('validcgpa',
  function(value){
      return /^[0-9.]{5}$/.test(value)
  }, 
  );
  $.validator.addMethod('validzip',
  function(value){
      return /^[0-9]{6}$/.test(value)
  }, 
  );

  $('#form').validate({
      rules:{
          name:{
              required : true,
              validfname: true
          },
          mobile:{
              required : true,
              validnumber: true
          },
          email:{
              required: true
          },
          clg:{
              required: true,
              validfname: true
          },
          cgpa:{
              required: true,
              validcgpa: true
          },
          branch:{
              required: true
          },
          state:{
              required: true
          },
          city:{
              required: true
          },
          zip:{
              required: true,
              validzip: true
          }
      },
      messages:{
          name:{
              required : "Enter Your Name",
              validfname: "Name Must be in Character"
          },
          mobile:{
              required : "Enter Your Mobile Number",
              validnumber: "Mobile Number Must be in Digits"
          },
          email:{
              required:"Enter Your Email"
          },
          clg:{
              required:"Enter Your College Name",
              validfname: "College Name Must be in Character"
          },
          cgpa:{
              required:"Enter Your CGPA",
              validcgpa: "Allow Only Digit"
          },
          branch:{
              required: "Select Branch"
          },
          state:{
              required: "Select State"
          },
          city:{
              required: "Select City"
          },
          zip:{
              required: "Enter Your Zip Code",
              validzip: "Allow Only Digit"
          }
      },
  });
})

var map = new Map()

function showData() {
    var firstName = document.getElementById("name").value;
    var contact = document.getElementById("mobile").value;
    var emails = document.getElementById("email").value;
    var cname = document.getElementById("clg").value;
    var cgpas = document.getElementById("cgpa").value;
    var bname = document.getElementById("branch").value;
    var states = document.getElementById("state").value;
    var cities = document.getElementById("city").value;
    var zips = document.getElementById("zip").value;
    var dateranges = document.getElementById("daterange").value;


    if($('#form').valid()==true)
    {

        // to create a object
        var mData = {
            FirstName: firstName,
            Contact: contact,
            Email: emails,
            Cname: cname,
            Percentage: cgpas,
            Bname: bname,
            State: states,
            City: cities,
            Zip: zips,
            Daterange: dateranges,
        };

        // here map is set and peopleList is just to console the value
        var peopleList = map.set(map.size + 1, JSON.stringify(mData));
        console.log("main", peopleList);

        var html = "";

        for (let i = 1; i <= map.size; i++) {
            var data = map.get(i);
            let newD = JSON.parse(data);
            // console.log(newD);
            html += "<tr class=text-center>";
            html += "<td>" + newD.FirstName + "</td>";
            html += "<td>" + newD.Contact + "</td>";
            html += "<td>" + newD.Email + "</td>";
            html += "<td>" + newD.Cname + "</td>";
            html += "<td>" + newD.Percentage + "</td>";
            html += "<td>" + newD.Bname + "</td>";
            html += "<td>" + newD.State + "</td>";
            html += "<td>" + newD.City + "</td>";
            html += "<td>" + newD.Zip + "</td>";
            html += "<td>" + newD.Daterange + "</td>";
            html +=
                '<td><button onclick="deleteData( ' +
                i +
                ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
                i +
                ')" class= "btn btn-success m-2">Edit</button></td>';

            html += "</tr>";

            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("clg").value = "";
            document.getElementById("cgpa").value = "";
            document.getElementById("branch").value = "";
            document.getElementById("state").value = "";
            document.getElementById("city").value = "";
            document.getElementById("zip").value = "";
            document.getElementById("daterange").value = "";

            document.getElementById("root").innerHTML = html;

        }
    }
}


// EDIT & Update
function updateData(i) {
    let newD = JSON.parse(map.get(i));
    console.log(newD);
    document.getElementById("name").value = newD.FirstName;
    document.getElementById("mobile").value = newD.Contact;
    document.getElementById("email").value = newD.Email;
    document.getElementById("clg").value = newD.Cname;
    document.getElementById("cgpa").value = newD.Percentage;
    document.getElementById("branch").value = newD.Bname;
    document.getElementById("state").value = newD.State;
    document.getElementById("city").value = newD.City;
    document.getElementById("zip").value = newD.Zip;
    document.getElementById("daterange").value = newD.Daterange;

    // update and Add buttons toggle
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    document.querySelector("#update").onclick = function () {
        var fname = (newD.FirstName = document.getElementById("name").value);
        var umobile = (newD.Contact = document.getElementById("mobile").value);
        var uemail = (newD.Email = document.getElementById("email").value);
        var uclg = (newD.Cname = document.getElementById("clg").value);
        var ucgpa = (newD.Percentage = document.getElementById("cgpa").value);
        var ubranch = (newD.Bname = document.getElementById("branch").value);
        var ustate = (newD.State = document.getElementById("state").value);
        var ucity = (newD.City = document.getElementById("city").value);
        var uzip = (newD.Zip = document.getElementById("zip").value);
        var udaterange = (newD.Daterange = document.getElementById("daterange").value);

        var mData = {
          FirstName: fname,
          Contact: umobile,
          Email: uemail,
          Cname: uclg,
          Percentage: ucgpa,
          Bname: ubranch,
          State: ustate,
          City: ucity,
          Zip: uzip,
          Daterange: udaterange,
        };

        var peopleList = map.set(i, JSON.stringify(mData));
        var html = "";

        // Appending row dynamically
        for (let i = 1; i <= map.size; i++) {
            // console.log(map.size);
            var data = map.get(i);
            let newD = JSON.parse(data);
            console.log(newD);
            html += "<tr class=text-center>";
            html += "<td>" + newD.FirstName + "</td>";
            html += "<td>" + newD.Contact + "</td>";
            html += "<td>" + newD.Email + "</td>";
            html += "<td>" + newD.Cname + "</td>";
            html += "<td>" + newD.Percentage + "</td>";
            html += "<td>" + newD.Bname + "</td>";
            html += "<td>" + newD.State + "</td>";
            html += "<td>" + newD.City + "</td>";
            html += "<td>" + newD.Zip + "</td>";
            html += "<td>" + newD.Daterange + "</td>";
            html +=
                '<td><button onclick="deleteData( ' +
                i +
                ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
                i +
                ')" class= "btn btn-warning m-2">Edit</button></td>';

            html += "</tr>";

            // Clearing th form after submission
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("clg").value = "";
            document.getElementById("cgpa").value = "";
            document.getElementById("branch").value = "";
            document.getElementById("state").value = "";
            document.getElementById("city").value = "";
            document.getElementById("zip").value = "";
            document.getElementById("daterange").value = "";

            // Showing the values in table
            document.getElementById("root").innerHTML = html;

            document.getElementById("update").style.display = "none";
            document.getElementById("submit").style.display = "block";
        }
    };
}


function deleteData(i) {
    let newD = i;
    
    console.log(newD)

    JSON.parse(newD);

    for (let i = 1; i <= map.size; i++) {

        if (i == newD) {
            map.delete(newD);

            console.log(map)
        }
    }

    document.getElementById("tblData").deleteRow(i);



}