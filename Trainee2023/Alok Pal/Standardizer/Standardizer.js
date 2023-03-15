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

    // console.log(masterChartAccountObject); // Log the JSON object to the console
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
  // console.log(destinationData);
  destinationData.forEach((item) => {
    htmlD +=
      "<div class='list-group-item mt-2 border p-1 DestinationDynamicFontSize destinatonDrag ps-2'  id='" +
      item.AccountCode +
      "' >" + 
      "⠿ " +
      item.AccountCode +
      "--" +
      item.AccountName +
      "</div>";
  });
 
  $("#DestinationAccount").html(htmlD);


  // ------------------------------------------------------------------------------------------------------

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

    // console.log(StandardChartofAccountObject); // Log the JSON object to the console
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
      Element.Number + "' data-atr= '"+Element.Type+"'>" +
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
  html1 = "";
  DestinationData.forEach((element, index) => {
    html1 +=
    "<div class='list-group-item mt-2 border p-1 DestinationDynamicFontSize destinatonDrag ps-2'>" + "⠿ " +
    element.AccountCode +
    "--" +
    element.AccountName +
    "</div>";
  });
  
  $("#DestinationAccount").html(html1);
  debugger;
  // $('.destinatonDrag').each(function(){
  // console.log("Alok")
  //   // Sortable JS
  //   new Sortable(this, {
  //     group: {
  //       name: 'shared',
  //       pull: 'clone',
  //       put: false // Do not allow items to be put into this list
  //     },
  //     sort: false,
  //     animation: 150
  //   });
  //  })
}

// For Asset
function getAssetData() {
  html = "";
  DestinationData.forEach((element, index) => {
    if (element.AccountTypeName == "ASSETS") {
      html +=
        "<div class='list-group-item mt-2 border p-1 DestinationDynamicFontSize destinatonDrag ps-2'>" + "⠿ " +
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
        "<div class='list-group-item mt-2 border p-1 DestinationDynamicFontSize destinatonDrag ps-2'>" + "⠿ " +
        element.AccountCode +
        "--" +
        element.AccountName +
        "</div>";
     
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
        "<div class='list-group-item mt-2 border p-1 DestinationDynamicFontSize destinatonDrag ps-2'>" + "⠿ " +
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
        "<div class='list-group-item mt-2 border p-1 DestinationDynamicFontSize destinatonDrag ps-2'>" + "⠿ " +
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

    var dataAttribute = $(this).attr('data-atr');
    // console.log("Alok",dataAttribute)

    // if (
    //   SourceBtnData[index].Type == "Assets" &&
    //   SourceBtnData[index].Number != ""
    // )
    if (
      dataAttribute.trim() == "Assets" 
    )
     {
      var id = this.id;
      $(`#${id}`).show();
      $(`#${id}MostLikely`).show();
      $(`#${id}Likely`).show();
      $(`#${id}Possible`).show();
    }
  });

}

function getBtnLiabilityData() {

  debugger
  $(".SourceAcc").each(function (index) {
    // console.log(this.id);
    var id = this.id;
    $(`#${id}`).hide();
    $(`#${id}MostLikely`).hide();
    $(`#${id}Likely`).hide();
    $(`#${id}Possible`).hide();

    var dataAttribute = $(this).attr('data-atr');
    // console.log("Alok",dataAttribute)


    if (
      dataAttribute.trim() == "Liabilities" 
    ) {
      var id = this.id;
      $(`#${id}`).show();
      $(`#${id}MostLikely`).show();
      $(`#${id}Likely`).show();
      $(`#${id}Possible`).show();
    }
  });
}

function getBtnEquityData() {

  $(".SourceAcc").each(function (index) {
    // console.log(this.id);
    var id = this.id;
    $(`#${id}`).hide();
    $(`#${id}MostLikely`).hide();
    $(`#${id}Likely`).hide();
    $(`#${id}Possible`).hide();

    var dataAttribute = $(this).attr('data-atr');
    // console.log("Alok",dataAttribute)


    if (
      dataAttribute.trim() == "Equity" 
    ) {
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
        // this.focus(); 
      }
    });
  });
});

// -----------------------------------------------------------------------------------------------------------

// Search
jQuery("#searchinput").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  jQuery("#DestinationAccount div").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});


// --------------------------------------------------------------------------------------------------------

// on Window onload the Asset btn willl be clicked

window.addEventListener('load', function () {
  var assetBtn = this.document.getElementById('assetBtn')
  assetBtn.click()
})

// --------------------------------------------------------------------------------------------------------

var destinationAccount = document.getElementById('DestinationAccount')
// Sortable JS
new Sortable(destinationAccount, {

  group: {
    name: 'shared',
    pull: 'clone',
    put: false // Do not allow items to be put into this list
  },
  sort : false,
  animation: 150
});


// $(".MostLikely").each(function () {
//   new Sortable(this, {
//     group: 'shared',
//     animation: 150,
//     onAdd: function (evt) {
//       // Check if there are any existing items in the div
//       if (evt.to.children.length > 1) {
//         // Cancel the addition of the new item
//         evt.to.removeChild(evt.to.children[0]);
//       }
//     }
//   });
  
// })

// $(".likely").each(function () {
//   new Sortable(this, {
//     group: 'shared',
//     animation: 150
//   });
// })
// $(".possible").each(function () {
//   new Sortable(this, {
//     group: 'shared',
//     animation: 150
//   });
// })



$(".MostLikely").each(function() {
  new Sortable(this, {
    group: 'shared',
    animation: 150,
    onAdd: function(evt) {
      // console.log('onAdd called');
      // Check if there are any existing items in the div
      // $(".DestinationDynamicFontSize").removeClass("mt-2").removeClass("mt-2").removeClass("mt-border ")

      if (evt.to.children.length > 1) {
        evt.to.removeChild(evt.to.children[0]);

        // Remove the first item from MostLikely and add it to likely
        var mostLikelyItem = evt.to.children[0];
        // console.log("Most",mostLikelyItem)
        var likelyList = document.querySelector('.likely');
        // console.log(likelyList)
        // likelyList.insertBefore(mostLikelyItem, likelyList.firstChild);

        // Remove the first item from likely and add it to possible
        var likelyItem = likelyList.children[0];
        var possibleList = document.querySelector('.possible');
        // possibleList.insertBefore(likelyItem, possibleList.firstChild);
      }
    }
  });
});

$(".likely").each(function() {
  new Sortable(this, {
    group: 'shared',
    animation: 150
  });
});

$(".possible").each(function() {
  new Sortable(this, {
    group: 'shared',
    animation: 150
  });
});



// -------------------------------------------------------------------------------------------------------
// locastorage

document.onload = getLocalStorageData();

var SourceAccount = new Array();
function AddDataLocalStorage(){
  // alert("Alok")
  
  
  for(let i =0 ; i < SourceData.length; i++){
    
   var sourceAccountObj = {
      SourceId : SourceData[i].Number,
      MostLikely: $("#" + SourceData[i].Number +"MostLikely").html(),
      Likely: $("#" + SourceData[i].Number +"Likely").html(),
      Possible: $("#" + SourceData[i].Number +"Possible").html(),

    }
    SourceAccount.push(sourceAccountObj)
  }
  // console.log(sourceAccountObj)
  localStorage.setItem("SourceAccount", JSON.stringify(SourceAccount))
}

function getLocalStorageData(){
 var SourceDataJson = JSON.parse(localStorage.getItem("SourceAccount"))
 console.log(SourceData)

 for (let i = 0; i<SourceData.length; i++ ){
  // $("#" + SourceData[i].Number +"MostLikely").html(SourceAccount[i].MostLikely)
  // console.log(SourceAccount[i][i].MostLikely)
 }
}



