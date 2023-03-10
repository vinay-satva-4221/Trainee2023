// For Destination Account Struture
// Make an XMLHttpRequest to fetch the CSV file
const xhr = new XMLHttpRequest();
xhr.open("GET", "ChartAccount.csv", false);

var masterChartAccountDataString;
var masterChartAccountObject;
var masterChartAccountData = [];
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const csv = xhr.responseText;

    // Parse the CSV file using the split() method
    const rows = csv.split("\n");

    // Separate the first row of the CSV file, which contains the column headers
    const headers = rows[0].split(",");

    // Iterate over the remaining rows of the CSV file and create an object for each row
    masterChartAccountData = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
      masterChartAccountData.push(obj);
    }

    // Convert the array to a JSON string
    masterChartAccountDataString = JSON.stringify(masterChartAccountData);

    // Convert the JSON string to a JSON object
    masterChartAccountObject = JSON.parse(masterChartAccountDataString);

    console.log(masterChartAccountObject); // Log the JSON object to the console
  }
};
xhr.send();

var destinationData = JSON.parse(masterChartAccountDataString);
// console.log("Alok", destinationData);

//---------------------------------------------------------------------------------------------------------

// LI For DestinationAccount

// Global element
var html = '';
$(document).ready(function () {
  debugger
  console.log(destinationData)
  destinationData.forEach((item) => {
    html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" +'⠿'+ item.AccountCode + '-- ' + item.AccountName + "</li>"

    // Append the li element to the parent element
  });
  $('#DestinationAccount').html(html)
})
// --------------------------------------------------------------------------------------------------------

// For Source Account structure

// // Make an XMLHttpRequest to fetch the CSV file
const xhrs = new XMLHttpRequest();
xhrs.open("GET", "StandardCofA.csv", false);
var StandardChartofAccountData = [];
var StandardChartofAccountDataString;
var StandardChartofAccountObject;

xhrs.onreadystatechange = function () {
  if (xhrs.readyState === XMLHttpRequest.DONE && xhrs.status === 200) {
    const csv = xhrs.responseText;

    // Parse the CSV file using the split() method
    const rows = csv.split("\n");

    // Separate the first row of the CSV file, which contains the column headers
    const headers = rows[0].split(",");

    // Iterate over the remaining rows of the CSV file and create an object for each row
    StandardChartofAccountData = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
      StandardChartofAccountData.push(obj);
    }

    // Convert the array to a JSON string
    StandardChartofAccountDataString = JSON.stringify(
      StandardChartofAccountData
    );

    // Convert the JSON string to a JSON object .. It is used to only check the response
    StandardChartofAccountObject = JSON.parse(StandardChartofAccountDataString);

    console.log(StandardChartofAccountObject); // Log the JSON object to the console
  }
};
xhrs.send();

// -------------------------------------------------------------------------------------------------------

// LI for  Source Account structure
var SourceData = JSON.parse(StandardChartofAccountDataString);
// console.log("Alok1", SourceData);

var SourceAccParentElement = document.getElementById("SourceAccount");

SourceData.forEach((Element, index) => {
  // Create a new li element
  
    // if (Element.Number != "") {
      // ("I will use it if it is req");
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" +'⠿'+ Element.Number + '-- ' + Element.Name + "</li>"
    // }
});
$('#SourceAccount').html(html)

// --------------------------------------------------------------------------------------------------------

// btn color
$(document).ready(function () {
  $(".btnActive").click(function () {
    // remove "active" class from all buttons
    $(".btnActive").removeClass("btn-active");

    // add "active" class to clicked button
    $(this).addClass("btn-active");
  });
});

// --------------------------------------------------------------------------------------------------------

// Get the containers
const DestinationAccount = document.querySelector("#DestinationAccount");
const LikelyDestinationAccount3 = document.querySelector(
  "#LikelyDestinationAccount3"
);

// Initialize Dragula with options
dragula([DestinationAccount, LikelyDestinationAccount3], {
  copy: true,
  accepts: function (el, target) {
    return target !== DestinationAccount;
  },
});

dragula([DestinationAccount, LikelyDestinationAccount3])
  .on("drag", function (el) {
    el.className = el.className.replace(" animazing", "");
  })
  .on("drop", function (el) {
    setTimeout(function () {
      el.className += " animazing";
    }, 0);
  });

// --------------------------------------------------------------------------------------------------------

const scrollbar = document.getElementById("scrollbar");
const scrollLeftBtn = document.getElementById("scroll-Left-btn");
const scrollrightBtn = document.getElementById("scroll-right-btn");

// Set up button click handlers
scrollLeftBtn.addEventListener("click", scrollUp);
scrollrightBtn.addEventListener("click", scrollDown);

function scrollUp() {
  // Scroll up by 50 pixels
  scrollbar.scrollLeft += 70;
}

function scrollDown() {
  // Scroll down by 50 pixels
  scrollbar.scrollLeft -= 70;
}

// --------------------------------------------------------------------------------------------------------

// Json data of the Destination account source data

var destinationAcc = document.getElementById("DestinationAccount")
var DestinationData = JSON.parse(masterChartAccountDataString);
// console.log("Alok2", DestinationData);

// For All
function getAllData() {
  html = '';
  DestinationData.forEach((element, index) => {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.AccountCode + '-- ' + element.AccountName + "</li>"
  });
  $('#DestinationAccount').html(html)
}


// For Asset
function getAssetData() {
  html = '';
  DestinationData.forEach((element, index) => {
    if (element.AccountTypeName == "ASSETS") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.AccountCode + '-- ' + element.AccountName + "</li>"
    }
  });
  $('#DestinationAccount').html(html)
}


// For Liability
function getliabilityData() {
  html = '';
  DestinationData.forEach((element, index) => {

    if (element.AccountTypeName == "LIABILITIES") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.AccountCode + '-- ' + element.AccountName + "</li>"
    }
  })
  $('#DestinationAccount').html(html);

}

// For Equity And Capital
function getEquityData() {
  html = '';
  DestinationData.forEach((element, index) => {

    if (element.AccountTypeName == "EQUITY/CAPITAL") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.AccountCode + '-- ' + element.AccountName + "</li>"
    }
  })
  $('#DestinationAccount').html(html);

}

// For Revenue
function getRevenueData() {
  html = '';
  DestinationData.forEach((element, index) => {

    if (element.AccountTypeName == "EQUITY/CAPITAL") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.AccountCode + '-- ' + element.AccountName + "</li>"
    }
  })
  $('#DestinationAccount').html(html);

}



// --------------------------------------------------------------------------------------------------------

var SourceBtnData = JSON.parse(StandardChartofAccountDataString);

// for button click 

function getBtnAssetData(){
  html = '';
  SourceBtnData.forEach((element, index) => {
    if (element.Type == "Assets") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.Number + '-- ' + element.Name + "</li>"
    }
  });
  $('#SourceAccount').html(html)
}


function getBtnLiabilityData(){
  html = '';
  SourceBtnData.forEach((element, index) => {
    if (element.Type == "Liabilities") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.Number + '-- ' + element.Name + "</li>"
    }
  });
  $('#SourceAccount').html(html)
}

function getBtnEquityData(){
  html = '';
  SourceBtnData.forEach((element, index) => {
    if (element.Type == "Equity") {
      html += "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + element.Number + '-- ' + element.Name + "</li>"
    }
  });
  $('#SourceAccount').html(html)
}