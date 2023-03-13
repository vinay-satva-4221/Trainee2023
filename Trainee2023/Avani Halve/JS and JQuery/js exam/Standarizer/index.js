// For Destination Account Struture
// Make an XMLHttpRequest to fetch the CSV file
const xhr = new XMLHttpRequest();
xhr.open("GET", "./ExcelSheets/MasterChartOfAcounts.csv", false);

var masterDataString;
var masterDataObject;
var masterData = [];
xhr.onreadystatechange = function () {
   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const csv = xhr.responseText;

      // Parse the CSV file using the split() method
      const rows = csv.split("\n");

      // Separate the first row of the CSV file, which contains the column headers
      const headers = rows[0].split(",");

      // Iterate over the remaining rows of the CSV file and create an object for each row
      masterData = [];
      for (let i = 1; i < rows.length; i++) {
         const row = rows[i].split(",");
         const obj = {};
         for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = row[j];
         }
         masterData.push(obj);
      }

      masterDataString = JSON.stringify(masterData);

      // Convert the JSON string to a JSON object
      masterDataObject = JSON.parse(masterDataString);
   }
};
xhr.send();

var destinationData = JSON.parse(masterDataString);
var html = "";
$(document).ready(function () {
   console.log(destinationData);
   destinationData.forEach((item) => {
      html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + "⠿" + item.AccountCode + "-- " + item.AccountName + "</li>";
   });
   $("#DestinationAccount").html(html);

   $(".btnActive").click(function () {
      // remove "active" class from all buttons
      $(".btnActive").removeClass("btn-active");

      // add "active" class to clicked button
      $(this).addClass("btn-active");
   });

   //filter data from buttons
   $("#assetsbtn").click(function () {
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      html = "";
      likelyDiv = "";
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "Assets") {
            html += "<li class='list-group-item mt-2 border p-1'>" + element.Number + "-- " + element.Name + "</li>";
            likelyDiv += "<li class='list-group-item mt-2 border p-3 '> </li>";
         }
         $("#MostLikelyDrop").html(likelyDiv);
         $("#LikelyDrop").html(likelyDiv);
         $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "ASSETS") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });


   $("#liablittbtn").click(function () {
      html = "";
      likelyDiv = "";
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "Liabilities") {
            html += "<li class='list-group-item mt-2 border p-1'>" + element.Number + "-- " + element.Name + "</li>";
            likelyDiv += "<li class='list-group-item mt-2 border p-3'> </li>";
        }
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "LIABILITIES") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#equitybtn").click(function () {
      html = "";
      likelyDiv = "";
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "Equity") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.Number + "-- " + element.Name + "</li>";
            likelyDiv += "<li class='list-group-item mt-2 border p-3'> </li>";
        }
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "EQUITY/CAPITAL") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";  
        }
      });
      $("#DestinationAccount").html(html);
   });

   $("#revenuebtn").click(function () {
      html = "";
      likelyDiv = "";
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "Revenue") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.Number + "-- " + element.Name + "</li>";
            likelyDiv += "<li class='list-group-item mt-2 border p-3'> </li>";
        }
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Professional Services Revenue" || element.AccountTypeName == "Product Revenue") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
        }
      });
      $("#DestinationAccount").html(html);
   });

   $("#CoGSbtn").click(function () {
      html = "";
      likelyDiv = "";
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "COGS") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.Number + "-- " + element.Name + "</li>";
            likelyDiv += "<li class='list-group-item mt-2 border p-3'> </li>";
        }
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Product Costs") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
        }
      });
      $("#DestinationAccount").html(html);
   });

   $("#expensesbtn").click(function () {
      html = "";
      likelyDiv = "";
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "Expense") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.Number + "-- " + element.Name + "</li>";
            likelyDiv += "<li class='list-group-item mt-2 border p-3'> </li>";
        }
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Labor Expense") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
        }
      });
      $("#DestinationAccount").html(html);
   });

   $("#Otherbtn").click(function () {
      html = "";
      likely = "";
      $("#MostLikelyDrop").html("");
      $("#LikelyDrop").html("");
      $("#PossibleDrop").html("");
      SourceBtnData.forEach((element, index) => {
         if (element.Type == "Other Rev & Exp") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.Number + "-- " + element.Name + "</li>";
            likely += "<li class='list-group-item mt-2 border p-3'> </li>";
        } 
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#SourceAccount").html(html);
   });

   $("#allData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
      });
      $("#DestinationAccount").html(html);
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Outside (or '1099'Professional Services Costs)") {
            html += "<li class='list-group-item mt-2 border p-1'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
        }
        $("#MostLikelyDrop").html(likelyDiv);
        $("#LikelyDrop").html(likelyDiv);
        $("#PossibleDrop").html(likelyDiv);
      });
      $("#DestinationAccount").html(html);
   });

   //filter data from MasterData navbar Bar
   $("#assestData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "ASSETS") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#liablittData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "LIABILITIES") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#equityData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "EQUITY/CAPITAL") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#revenueData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Professional Services Revenue" || element.AccountTypeName == "Product Revenue") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#cogsData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Product Costs") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#expensesData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Labor Expense") {
            html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   $("#otherData").click(function () {
      html = "";
      DestinationData.forEach((element, index) => {
         if (element.AccountTypeName == "Outside (or '1099'Professional Services Costs)") {
            html += "<li class='list-group-item mt-2 border p-1  ps-2'>" + element.AccountCode + "-- " + element.AccountName + "</li>";
         }
      });
      $("#DestinationAccount").html(html);
   });

   //search
   $("#search").on("keyup", function () {
      debugger;
      var value = $(this).val().toLowerCase();
      $("#DestinationAccount li").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });
});

// For Source Account structure
const xhrs = new XMLHttpRequest();
xhrs.open("GET", "./ExcelSheets/StandardCofA.csv", false);
var StandardData = [];
var StandardDataString;
var StandardObject;

xhrs.onreadystatechange = function () {
   if (xhrs.readyState === XMLHttpRequest.DONE && xhrs.status === 200) {
      const csv = xhrs.responseText;

      // Parse the CSV file using the split() method
      const rows = csv.split("\n");

      // Separate the first row of the CSV file, which contains the column headers
      const headers = rows[0].split(",");

      // Iterate over the remaining rows of the CSV file and create an object for each row
      StandardData = [];
      for (let i = 1; i < rows.length; i++) {
         const row = rows[i].split(",");
         const obj = {};
         for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = row[j];
         }
         StandardData.push(obj);
      }

      // Convert the array to a JSON string
      StandardDataString = JSON.stringify(StandardData);

      // Convert the JSON string to a JSON object .. It is used to only check the response
      StandardObject = JSON.parse(StandardDataString);

      console.log(StandardObject); // Log the JSON object to the console
   }
};
xhrs.send();

// LI for  Source Account structure

var SourceData = JSON.parse(StandardDataString);

var SourceElement = document.getElementById("SourceAccount");

SourceData.forEach((Element, index) => {
   html += "<li class='list-group-item mt-2 border p-1 ps-2'>" + "⠿" + Element.Number + "-- " + Element.Name + "</li>";
});
$("#SourceAccount").html(html);

//Sortable
const DestinationAccount1 = document.getElementById("DestinationAccount");
const PossibleDrop1 = document.getElementById("PossibleDrop");
const LiklyDrop1 = document.getElementById("LikelyDrop");
const MostLikelyDrop1 = document.getElementById("MostLikelyDrop");

new Sortable(DestinationAccount1, {
   group: {
      name: "shared",
      pull: "clone",
      put: false,
   },
   animation: 250,
   sort: false,
});

new Sortable(MostLikelyDrop1, {
   group: "shared",
   animation: 250,
   put: true,
});

new Sortable(PossibleDrop1, {
   group: "shared",
   animation: 250,
   put: true,
});

new Sortable(LiklyDrop1, {
   group: "shared",
   animation: 250,
   put: true,
});

const masterNavBar = document.getElementById("masterNavBar");
const scrollLeftBtn = document.getElementById("scroll-Left-btn");
const scrollrightBtn = document.getElementById("scroll-right-btn");

// Set up button click handlers
scrollLeftBtn.addEventListener("click", scrollUp);
scrollrightBtn.addEventListener("click", scrollDown);

function scrollUp() {
   masterNavBar.scrollLeft += 70;
}

function scrollDown() {
   masterNavBar.scrollLeft -= 70;
}

var destinationAcc = document.getElementById("DestinationAccount");
var DestinationData = JSON.parse(masterDataString);

var SourceBtnData = JSON.parse(StandardDataString);
