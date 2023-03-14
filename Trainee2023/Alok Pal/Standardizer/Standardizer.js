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
var htmlD = "";
$(document).ready(function () {
  debugger;
  console.log(destinationData);
  destinationData.forEach((item) => {
    htmlD +=
      "<div class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'  id='" +
      item.AccountCode +
      "' >" +
      "⠿ " +
      item.AccountCode +
      "--" +
      item.AccountName +
      "</div>";
  });
  $("#DestinationAccount").html(htmlD);

  // btn color
  $(".btnActive").click(function () {
    // remove "active" class from all buttons
    $(".btnActive").removeClass("btn-active");

    // add "active" class to clicked button
    $(this).addClass("btn-active");
  });

  // Target Active class for the scroll nav
  $(".scrollmenu a").click(function () {
    debugger;
    $(".scrollmenu a").removeClass("active1");
    $(this).addClass("active1");
  });

  // Sortable JS
  var destAcc = document.getElementById("DestinationAccount");
  // console.log(destAcc);
  var mostLikely = document.querySelectorAll('.MostLikely');

  new Sortable(destAcc, {
    group: {
      name: "shared",
      pull: "clone",
      put: false, // Do not allow items to be put into this list
    },
    animation: 150,
  });


  
  new Sortable(mostLikely, {
    group: "shared",
    animation: 150,
  });
});
// --------------------------------------------------------------------------------------------------------

// For Source Account structure

// // Make an XMLHttpRequest to fetch the CSV file
const xhrs = new XMLHttpRequest();
xhrs.open("GET", "Standard CofA.csv", false);
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

// var SourceAccParentElement = document.getElementById("SourceAccount");
var html = "";
var divhtml = "";
var likelyHtml = "";
var possible = "";
// debugger;
SourceData.forEach((Element, index) => {
  // Create a new li element

  if (Element.Number != "") {
    // ("I will use it if it is req");
    html +=
      "<div class='list-group-item mt-2 border p-1 DynamicFontSize SourceAcc ps-2' id='" +
      Element.Number +
      "'>" +
      Element.Number +
      " " +
      Element.Name +
      "<i class='fa-sharp fa-solid fa-clock-rotate-left float-end'></i> <i class='bi bi-check2-all text-end float-end ps-2'></i></div>";
    divhtml +=
      "<div class='list-group-item mt-2 border p-1 DynamicFontSize SourceDivHeight MostLikely ps-2' id='" +
      Element.Number +
      "MostLikely'></div>";
    likelyHtml +=
      "<div class='list-group-item mt-2 border p-1 DynamicFontSize SourceDivHeight likely ps-2' id='" +
      Element.Number +
      "Likely'></div>";
    possible +=
      "<div class='list-group-item mt-2 border p-1 DynamicFontSize SourceDivHeight possible ps-2' id='" +
      Element.Number +
      "Possible'></div>";
  }
});
$("#SourceAccount").html(html);
$("#MostLikely").html(divhtml);
$("#Likely").html(likelyHtml);
$("#Possible").html(possible);

// --------------------------------------------------------------------------------------------------------

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

var destinationAcc = document.getElementById("DestinationAccount");
var DestinationData = JSON.parse(masterChartAccountDataString);
// console.log("Alok2", DestinationData);
var html1;
// For All
function getAllData() {
  debugger;
  html1 = "";
  DestinationData.forEach((element, index) => {
    html1 +=
      "<div class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + "⠿ " +
      element.AccountCode +
      "--" +
      element.AccountName +
      "</div>";
  });
  $("#DestinationAccount").html(html1);
}

// For Asset
function getAssetData() {
  html = "";
  DestinationData.forEach((element, index) => {
    if (element.AccountTypeName == "ASSETS") {
      html +=
        "<div class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + "⠿ " +
        element.AccountCode +
        "--" +
        element.AccountName +
        "</div>";
    }
  });
  $("#DestinationAccount").html(html);
}

// For Liability
function getliabilityData() {
  html = "";
  DestinationData.forEach((element, index) => {
    if (element.AccountTypeName == "LIABILITIES") {
      html +=
        "<div class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + "⠿ " +
        element.AccountCode +
        "--" +
        element.AccountName +
        "</div>";
      divhtml +=
        "<div class='list-group-item mt-2 border p-1 DynamicFontSize SourceDivHeight ps-2'></div>";
    }
  });
  $("#DestinationAccount").html(html);
}

// For Equity And Capital
function getEquityData() {
  html = "";
  DestinationData.forEach((element, index) => {
    if (element.AccountTypeName == "EQUITY/CAPITAL") {
      html +=
        "<div class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + "⠿ " +
        element.AccountCode +
        "--" +
        element.AccountName +
        "</div>";
    }
  });
  $("#DestinationAccount").html(html);
}

// For Revenue
function getRevenueData() {
  html = "";
  DestinationData.forEach((element, index) => {
    if (element.AccountTypeName == "EQUITY/CAPITAL") {
      html +=
        "<div class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" + "⠿ " +
        element.AccountCode +
        "--" +
        element.AccountName +
        "</div>";
    }
  });
  $("#DestinationAccount").html(html);
}

// --------------------------------------------------------------------------------------------------------

// Source

var SourceBtnData = JSON.parse(StandardChartofAccountDataString);

// for button click

function getBtnAssetData() {
  debugger;
  // SourceBtnData.forEach((element, index) => {
  // for (let i = 0; i < SourceBtnData.length; i++) {
  //   var id = $(".SourceAcc")[i].id;
  //   $(`#${id}`).hide();
  //   var MostId = $(".MostLikely")[i].id;
  //   $(`#${MostId}MostLikely`).hide();

  //   if (SourceBtnData[i].Type == "Assets" && SourceBtnData[i].Number != "") {

  //     // $(".SourceAcc")[index].id
  //     // console.log($(".SourceAcc")[index].id)
  //     var id = $(".SourceAcc")[i].id;
  //     $(`#${id}`).show();
  //     var MostId = $(".MostLikely")[i].id;
  //     $(`#${MostId}MostLikely`).show();
  //   }
  // }
  // $("#SourceAccount").html(html);

  // $.each(".SourceAcc", function(index) {
  //   console.log(this.id)

  // })

  $(".SourceAcc").each(function (index) {
    // console.log(this.id);
    var id = this.id;
    $(`#${id}`).hide();
    $(`#${id}MostLikely`).hide();
    $(`#${id}Likely`).hide();
    $(`#${id}Possible`).hide();

    if (
      SourceBtnData[index].Type == "Assets" &&
      SourceBtnData[index].Number != ""
    ) {
      var id = this.id;
      $(`#${id}`).show();
      $(`#${id}MostLikely`).show();
      $(`#${id}Likely`).show();
      $(`#${id}Possible`).show();
    }
  });

}

function getBtnLiabilityData() {
  // html = "";
  // SourceBtnData.forEach((element, index) => {
  //   if (element.Type == "Liabilities" && element.Number != "") {
  //     html +=
  //       "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" +
  //       element.Number +
  //       " " +
  //       element.Name +
  //       "</li>";
  //   }
  // });
  // $("#SourceAccount").html(html);
debugger
  $(".SourceAcc").each(function (index) {
    // console.log(this.id);
    var id = this.id;
    $(`#${id}`).hide();
    $(`#${id}MostLikely`).hide();
    $(`#${id}Likely`).hide();
    $(`#${id}Possible`).hide();

   if (
      SourceBtnData[index].Type == "Liabilities" &&
      SourceBtnData[index].Number != ""
    )  {
      var id = this.id;
      $(`#${id}`).show();
      $(`#${id}MostLikely`).show();
      $(`#${id}Likely`).show();
      $(`#${id}Possible`).show();
    }
  });
}

function getBtnEquityData() {
  // html = "";
  // SourceBtnData.forEach((element, index) => {
  //   if (element.Type == "Equity" && element.Number != "") {
  //     html +=
  //       "<li class='list-group-item mt-2 border p-1 DynamicFontSize ps-2'>" +
  //       element.Number +
  //       " " +
  //       element.Name +
  //       "</li>";
  //   }
  // });
  // $("#SourceAccount").html(html);
  $(".SourceAcc").each(function (index) {
    // console.log(this.id);
    var id = this.id;
    $(`#${id}`).hide();
    $(`#${id}MostLikely`).hide();
    $(`#${id}Likely`).hide();
    $(`#${id}Possible`).hide();

   if (
      SourceBtnData[index].Type == "Liabilities" &&
      SourceBtnData[index].Number != ""
    )  {
      var id = this.id;
      $(`#${id}`).show();
      $(`#${id}MostLikely`).show();
      $(`#${id}Likely`).show();
      $(`#${id}Possible`).show();
    }
  });
}

// --------------------------------------------------------------------------------------------------------

// Button click

var dataBtn = document.querySelectorAll(".btnActive");
var Scrollitems = document.querySelectorAll(".scrollItems");

dataBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    var linkSelector = btn.dataset.link;

    Scrollitems.forEach((link) => {
      if (link.matches(linkSelector)) {
        link.click();
      }
    });
  });
});

// -----------------------------------------------------------------------------------------------------------

jQuery("#searchinput").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  jQuery("#DestinationAccount div").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});
