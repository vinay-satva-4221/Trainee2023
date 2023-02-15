// Form Validation
function validateForm() {
    if (!nameV() &&
        !mobileV() &&
        !emailV() &&
        !collageV() &&
        !cgpaV() &&
        !BranchV() &&
        !zipV()) {
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


function mobileV() {
    let regName = /^([+]\d{2}[ ])?\d{10}$/;
    let mobile = document.getElementById("fmobile").value;
    if (!regName.test(mobile)) {
        document.getElementById("vmobile").innerHTML =
            "**Please Enter Valid Mobile no.!";
        document.getElementById("vmobile").style.display = "unset";
        document.getElementById("vmobile").focus();
        return false;
    } else {
        document.getElementById("vmobile").style.display = "none";
        return true;
    }
}

function emailV() {
    let setemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("femail").value;
    let msgemail = document.getElementById("vemail");
    if (!setemail.test(email)) {
        msgemail.innerHTML = "**Please enter correct email address";
        msgemail.style.color = "red";
        document.getElementById("vemail").style.display = "unset";
        return false;
    } else {
        document.getElementById("vemail").style.display = "none";
        return true;
    }
}

function collageV() {
    let regName = /^[A-Za-z]+$/;
    let name = document.getElementById("fcollage").value;
    let vname = document.getElementById("vcollage");
    if (!regName.test(name)) {
        vname.innerHTML = "**Please enter Alphabets only**";
        document.getElementById("vcollage").style.display = "unset";
        // document.getElementById("fcollage").focus();
        return false;
    } else {
        document.getElementById("vcollage").style.display = "none";
        return true;
    }
}

function cgpaV() {
    let regName = /^(?:[1-9]|0[1-9]|10)$/;
    let cgpa = document.getElementById("fcgpa").value;
    let vcgpa = document.getElementById("vcgpa");
    if (!regName.test(cgpa)) {
        vcgpa.innerHTML = "**CGPA should be put between 1-10";
        document.getElementById("vcgpa").style.display = "unset";
        // document.getElementById("fcgpa").focus();
        return false;
    } else {
        document.getElementById("vcgpa").style.display = "none";
        return true;
    }
}

function BranchV() {
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
function zipV() {
    let regName = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
    let z1 = document.getElementById("fzip").value;
    let z2 = document.getElementById("vzip1");
    if (!regName.test(z1)) {
        z2.innerHTML = "**Invalid zip code";
        document.getElementById("vzip1").style.display = "unset";
        document.getElementById("vzip1").focus();
        return false;
    } else {
        document.getElementById("vzip1").style.display = "none";
        return true;
    }
}

$(document).ready(function () {
    //slider
    $(".mover").click(function () {
        $("#carouselExampleIndicators").slideToggle(200);
    });

    //DateRange Picker
    $(function () {
        $('input[name="daterange"]').daterangepicker(
            {
                opens: "left",
            },
            function (start, end, label) {
                console.log(
                    "A new date selection was made: " +
                    start.format("YYYY-MM-DD") +
                    " to " +
                    end.format("YYYY-MM-DD")
                );
            }
        );
    });
});

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


//showdata

function showData() {
    var peopleList;

    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr class=text-center>";
        html += "<td>" + (index + 1) + "</td>";
        html += "<td>" + element.firstName + "</td>";
        html += "<td>" + element.mobile + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.collage + "</td>";
        html += "<td>" + element.cgpa + "</td>";
        html += "<td>" + element.branch + "</td>";
        html += "<td>" + element.state + "</td>";
        html += "<td>" + element.city + "</td>";
        html += "<td>" + element.zip + "</td>";
        html += "<td>" + element.date + "</td>";

        html +=
            '<td><button onclick="deleteData( ' +
            index +
            ' )"  class= "btn btn-danger">Delete</button> <button onclick="updateData(' +
            index +
            ')" class= "btn btn-warning m-2">Edit</button></td>';

        html += "</tr>";

        document.getElementById("root").innerHTML = html;
    });
}

// to load data when the page refreshes
document.onload = showData();


// Add data to local storage
function addData() {
    // i can put here the validations
    var firstName = document.getElementById("fname").value;
    var mobile = document.getElementById("fmobile").value;
    var email = document.getElementById("femail").value;
    var collage = document.getElementById("fcollage").value;
    var cgpa = document.getElementById("fcgpa").value;
    var branch = document.getElementById("fbranch").value;
    var state = document.getElementById("State").value;
    var city = document.getElementById("City").value;
    var zip = document.getElementById("fzip").value;
    var date = document.getElementById("fdate").value;


    var peopleList;

    

    if (validateForm() == true) {

        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));

            peopleList.push({
                firstName: firstName,
                mobile: mobile,
                email: email,
                collage: collage,
                cgpa: cgpa,
                state: state,
                branch: branch,
                city: city,
                zip: zip,
                date: date
            });
        }



        document.cookie=Name+"="+$("#colors").val()+";"
        
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData()
        document.getElementById("fname").value = "";
        document.getElementById("fmobile").value = "";
        document.getElementById("femail").value = "";
        document.getElementById("fcollage").value = "";
        document.getElementById("fcgpa").value = "";
        document.getElementById("fbranch").value = "";
        document.getElementById("State").value = "";
        document.getElementById("City").value = "";
        document.getElementById("fzip").value = "";
        document.getElementById("fdate").value = "";
    }
}

//Delete
function deleteData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}


function updateData(index) {
    document.getElementById("save").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("update").style.marginBottom = '10px'
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("fname").value = peopleList[index].firstName;
    document.getElementById("fmobile").value = peopleList[index].mobile;
    document.getElementById("femail").value = peopleList[index].email;
    document.getElementById("fcollage").value = peopleList[index].collage;
    document.getElementById("fcgpa").value = peopleList[index].cgpa;
    document.getElementById("fbranch").value = peopleList[index].state;
    document.getElementById("State").value = peopleList[index].branch;
    document.getElementById("City").value = peopleList[index].city;
    document.getElementById("fzip").value = peopleList[index].zip;
    document.getElementById("fdate").value = peopleList[index].date;


    document.getElementById("update").onclick = function () {
        peopleList[index].firstName = document.getElementById("fname").value;
        peopleList[index].mobile = document.getElementById("fmobile").value;
        peopleList[index].email = document.getElementById("femail").value;
        peopleList[index].collage = document.getElementById("fcollage").value;
        peopleList[index].cgpa = document.getElementById("fcgpa").value;
        peopleList[index].state = document.getElementById("fbranch").value;
        peopleList[index].branch = document.getElementById("State").value;
        peopleList[index].city = document.getElementById("City").value;
        peopleList[index].zip = document.getElementById("fzip").value;
        peopleList[index].date = document.getElementById("fdate").value;

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData()
        document.getElementById("fname").value = "";
        document.getElementById("fmobile").value = "";
        document.getElementById("femail").value = "";
        document.getElementById("fcollage").value = "";
        document.getElementById("fcgpa").value = "";
        document.getElementById("fbranch").value = "";
        document.getElementById("State").value = "";
        document.getElementById("City").value = "";
        document.getElementById("fzip").value = "";
        document.getElementById("fdate").value = "";

    }
}

// function createC() {
//     const myArray = ['apple', 'banana', 'cherry'];
//     const jsonString = JSON.stringify(myArray);
//     document.cookie = "myArray=" + encodeURIComponent(jsonString);


// }

function addCookie() {
    let cookiedata = $.cookie("color");
    if (cookiedata) {
        let localArray = JSON.parse(cookiedata);

        const color = {
            id: localArray.length + 1,
            color: $("#fcolor").val()
        };
        localArray.push(color);
        $.cookie("color", JSON.stringify(localArray));

    }
    else {
        const arryObj = [];
        const color =
        {
            id: 1,
            color: $("#fcolor").val(),
        }
        arryObj.push(color);
        $.cookie("color", JSON.stringify(arryObj));
    }

}


// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
//   console.log(getCookie())


