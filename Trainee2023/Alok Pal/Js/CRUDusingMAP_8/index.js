// Form Validation
function validateForm() {
    if (!nameV() && !lnameV() && !zipV()) {
        valid = false;
        sweetA = false;
    } else {
        return true;
    }
}

function nameV() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById("fname").value;
    let vname = document.getElementById("navalid");
    if (!regName.test(name)) {
        vname.innerHTML = "**Please enter Alphabets only**";
        document.getElementById("navalid").style.display = "unset";
        document.getElementById("fname").focus();
        return false;
    } else {
        document.getElementById("navalid").style.display = "none";
        return true;
    }
}
function lnameV() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById("lname").value;
    let vname = document.getElementById("navalid1");
    if (!regName.test(name)) {
        vname.innerHTML = "**Please enter Alphabets only**";
        document.getElementById("navalid1").style.display = "unset";
        document.getElementById("lname").focus();
        return false;
    } else {
        document.getElementById("navalid1").style.display = "none";
        return true;
    }
}

function zipV() {
    let regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
    let z1 = document.getElementById("fzip").value;
    let z2 = document.getElementById("vzip");
    if (!regName.test(z1)) {
        z2.innerHTML = "**Invalid zip code";
        document.getElementById("vzip").style.display = "unset";
        document.getElementById("vzip").focus();
        return false;
    } else {
        document.getElementById("vzip").style.display = "none";
        return true;
    }
}

function stateV() {
    let branch = document.getElementById("fbranch").value;
    if (branch == "") {
      document.getElementById("vbranch").innerHTML =
        "**Please Select Valid Option!";
      document.getElementById("vbranch").style.display = "unset";
      // document.getElementById("fbranch").focus();
      return false;
    } else {
      document.getElementById("vbranch").style.display = "none";
      return true;
    }
  }

// DropDown Data

const cityList = [
    { State: "MadhyaPradesh", CityName: "Indore" },
    { State: "MadhyaPradesh", CityName: "Bhopal" },
    { State: "MadhyaPradesh", CityName: "Ratlam" },
    { State: "Gujrat", CityName: "Ahmedabad" },
    { State: "Gujrat", CityName: "Vadodara" },
    { State: "Gujrat", CityName: "Surat" },
    { State: "Punjab", CityName: "Udaipur" },
    { State: "Punjab", CityName: "Sirohi" },
    { State: "Punjab", CityName: "Jaisalmer" },
    { State: "Rajasthan", CityName: "Ludhiana" },
    { State: "Rajasthan", CityName: "Amritsar" },
    { State: "Rajasthan", CityName: "Patiala" },
];




// jquery started
$(document).ready(function () {
    $("#State").change(function () {
        $("#City").html("<option selected disabled value=''>Choose...</option>");
        let citys = cityList.filter((e) => e.State == $("#State").val());

        citys.forEach((e) => {
            const option =
                "<option val='" + e.CityName + "'> " + e.CityName + "</option>";
            $("#City").append(option);
        });
    });
});




// Add Data
var map = new Map();

function showData() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var state = document.getElementById("State").value;
    var city = document.getElementById("City").value;
    var zip = document.getElementById("fzip").value;


    if (validateForm() == true) {



        // to create a object
        var mData = {
            FirstName: firstName,
            LastName: lastName,
            State: state,
            City: city,
            Zip: zip,
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
            html += "<td>" + newD.LastName + "</td>";
            html += "<td>" + newD.State + "</td>";
            html += "<td>" + newD.City + "</td>";
            html += "<td>" + newD.Zip + "</td>";
            html +=
                '<td><button onclick="deleteData( ' +
                i +
                ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
                i +
                ')" class= "btn btn-warning m-2">Edit</button></td>';

            html += "</tr>";

            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("State").value = "";
            document.getElementById("City").value = "";
            document.getElementById("fzip").value = "";

            document.getElementById("root").innerHTML = html;

        }
    }
}


// EDIT & Update
function updateData(i) {
    let newD = JSON.parse(map.get(i));
    console.log(newD);
    document.getElementById("fname").value = newD.FirstName;
    document.getElementById("lname").value = newD.LastName;
    document.getElementById("State").value = newD.State;
    document.getElementById("City").value = newD.City;
    document.getElementById("fzip").value = newD.Zip;

    // update and Add buttons toggle
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    document.querySelector("#update").onclick = function () {
        var uname = (newD.FirstName = document.getElementById("fname").value);
        var ulname = (newD.LastName = document.getElementById("lname").value);
        var ustate = (newD.State = document.getElementById("State").value);
        var ucity = (newD.City = document.getElementById("City").value);
        var uzip = (newD.Zip = document.getElementById("fzip").value);

        var mData = {
            FirstName: uname,
            LastName: ulname,
            State: ustate,
            City: ucity,
            Zip: uzip,
        };

        var peopleList = map.set(i, JSON.stringify(mData));
        var html = "";

        // Appending row dynamically
        for (let i = 1; i <= map.size; i++) {
            console.log(map.size);
            var data = map.get(i);
            let newD = JSON.parse(data);
            console.log(newD);
            html += "<tr class=text-center>";
            html += "<td>" + newD.FirstName + "</td>";
            html += "<td>" + newD.LastName + "</td>";
            html += "<td>" + newD.State + "</td>";
            html += "<td>" + newD.City + "</td>";
            html += "<td>" + newD.Zip + "</td>";
            html +=
                '<td><button onclick="deleteData( ' +
                i +
                ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
                i +
                ')" class= "btn btn-warning m-2">Edit</button></td>';

            html += "</tr>";

            // Clearing th form after submission
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("State").value = "";
            document.getElementById("City").value = "";
            document.getElementById("fzip").value = "";

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

    document.getElementById("table").deleteRow(i);



}