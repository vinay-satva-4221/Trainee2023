var data = [];


var request = new XMLHttpRequest();

// GET and the file URL
request.open('GET', 'MasterChartOfAcounts - Sheet1.csv', true);

// set the responseType to text to receive the file contents as a string
request.responseType = 'text';

// set a callback function to handle the file data once it's loaded
request.onload = function () {
  // check that the request was successful
  if (request.status === 200) {
    // split the file contents into an array of lines
    var lines = request.response.split('\n');

    // remove the first line (header) of the file
    var headers = lines.shift().split(',');

    // map the remaining lines into an array of objects
    data = lines.map(function (line) {
      var values = line.split(',');
      var object = {};

      // loop through all the columns in the row
      for (var i = 0; i < headers.length; i++) {
        // set the key-value pair in the object
        object[headers[i]] = values[i];
      }
      return object;

    });

    // do something with the data
    console.log(data);
    // create a new ul element
    var ul = document.getElementById("section2");
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement("li");
      li.className = "list-group-item border";
      li.innerHTML = '<i class="fa-regular fa-grip-dots-vertical"></i> ' + data[i]["AccountCode"] + " -- " + data[i]["AccountName"];

      ul.appendChild(li);
    }
  }
};
// send the request
request.send();


var request1 = new XMLHttpRequest();
// GET and the file URL
request1.open('GET', 'Standard CofA.csv', true);

// set the responseType to text to receive the file contents as a string
request1.responseType = 'text';

// set a callback function to handle the file data once it's loaded
request1.onload = function () {
  // check that the request was successful
  if (request1.status === 200) {
    // split the file contents into an array of lines
    var lines = request1.response.split('\n');

    // remove the first line (header) of the file
    var headers = lines.shift().split(',');

    // map the remaining lines into an array of objects
    data = lines.map(function (line) {
      var values = line.split(',');
      var object = {};

      // loop through all the columns in the row
      for (var i = 0; i < headers.length; i++) {
        // set the key-value pair in the object
        object[headers[i]] = values[i];
      }
      return object;
    });

    // create a new ul element
    var ul1 = document.getElementById("section1");
    
    for (var i = 0; i < data.length; i++) {
      if(data[i]["Number"]!=""){
      var li = document.createElement("li");
      li.className = "list-group-item border";
      li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
      ul1.appendChild(li);}
    }
  }
};
// send the request
request1.send();



let parsedData = [];

function parseCSVData() {
  var request1 = new XMLHttpRequest();
  // GET and the file URL
  request1.open('GET', 'Standard CofA.csv', true);

  // set the responseType to text to receive the file contents as a string
  request1.responseType = 'text';

  // set a callback function to handle the file data once it's loaded
  request1.onload = function () {
    // check that the request was successful
    if (request1.status === 200) {
      // split the file contents into an array of lines
      var lines = request1.response.split('\n');

      // remove the first line (header) of the file
      var headers = lines.shift().split(',');

      // map the remaining lines into an array of objects
      parsedData = lines.map(function (line) {
        var values = line.split(',');
        var object = {};

        // loop through all the columns in the row
        for (var i = 0; i < headers.length; i++) {
          // set the key-value pair in the object
          object[headers[i]] = values[i];
        }
        return object;
      });

      // do something with the parsed data, if needed
      console.log("Parsed data:", parsedData);
    }
  };

  // send the request
  request1.send();
}

// call the parseCSVData function once on page load
parseCSVData();




const buttons = document.querySelectorAll('.header-button');
const links = document.querySelectorAll('.menu-inner-box a');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');

    const btnType = button.getAttribute('data-btn-type');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-btn-type') === btnType) {
        link.classList.add('active');
        if (link.classList.contains('active')) {
          link.click();
        }
      }
    });

    // filter the parsedData array to only show objects with a "Type" key that matches the button's custom attribute
    const filteredData = parsedData.filter(obj => obj.Type === btnType);

    // update the list to display the name and number of each matching object
    const ul1 = document.getElementById("section1");
    ul1.innerHTML = '';
    filteredData.forEach(obj => {
      if(obj.Number!=""){
      var li = document.createElement("li");
      li.className = "list-group-item border";
      li.innerHTML = obj.Number + " -- " + obj.Name;
      ul1.appendChild(li);
      }
    });
  });
});



// When a menu link is clicked
$('.menu-inner-box a').click(function () {
  // Remove the "active" class from all links
  $('.menu-inner-box a').removeClass('active');
  // Add the "active" class to the clicked link
  $(this).addClass('active');

  var linkValue = $(this).attr('data-link-value').toLowerCase();

  var request = new XMLHttpRequest();

  // GET and the file URL
  request.open('GET', 'MasterChartOfAcounts - Sheet1.csv', true);

  // set the responseType to text to receive the file contents as a string
  request.responseType = 'text';

  // set a callback function to handle the file data once it's loaded
  request.onload = function () {
    // check that the request was successful
    if (request.status === 200) {
      // split the file contents into an array of lines
      var lines = request.response.split('\n');

      // remove the first line (header) of the file
      var headers = lines.shift().split(',');

      // map the remaining lines into an array of objects
      data = lines.map(function (line) {
        var values = line.split(',');
        var object = {};

        // loop through all the columns in the row
        for (var i = 0; i < headers.length; i++) {
          // set the key-value pair in the object
          object[headers[i]] = values[i];
        }
        return object;

      });
      // create a new ul element
      var ul = document.getElementById("section2");
      ul.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
        if (((data[i].AccountTypeName).toLowerCase()).includes(linkValue)) {
          var li = document.createElement("li");
          li.className = "list-group-item border";
          li.innerHTML = '<i class="fa-regular fa-grip-dots-vertical"></i> ' + data[i].AccountCode + " -- " + data[i].AccountName;
          ul.appendChild(li);
        }
      }
    }
  };
  // send the request
  request.send();
});



// select the "mostlikely" list
var mostlikelyList = $("#mostlikely");
var mostlikelyList = $("#likely");
var mostlikelyList = $("#possible");

// create a new list item with some text
var newItem = $("<li>").text("");

// append the new item to the list
mostlikelyList.append(newItem);

























// $(".header-button").click(function () {
//     var btnType = $(this).data("btn-type"); // Get the data attribute of the button that was clicked

//     // Clear both sections and set up new lists
//     var ul1 = document.getElementById("section1");
//     ul1.innerHTML = "";

//     var ul2 = document.getElementById("section2");
//     ul2.innerHTML = "";

//     var filteredData1 = data.filter(function(item) {
//         switch (btnType) {
//           case "assets":
//             return item.Type === "Assets";
//           case "liability":
//             return item.Type === "Liabilities";
//           case "equity":
//             return item.Type === "Equity";
//           case "revenue":
//             return item.Type === "Revenue";
//           case "cogs":
//             return item.Type === "COGS";
//           case "expenses":
//             return item.Type === "Expense";
//           case "other":
//             return item.Type === "Other Rev & Exp";
//         }
//       });

//     var filteredData2 = data.filter(function(item) {
//         switch (btnType) {
//           case "assets":
//             return item.AccountTypeName === "ASSETS";
//           case "liability":
//             return item.AccountTypeName === "LIABILITIES";
//           case "equity":
//             return item.AccountTypeName === "EQUITY/CAPITAL";
//           case "revenue":
//             return item.AccountTypeName === "Professional Services Revenue";
//           case "cogs":
//             return item.AccountTypeName === "";
//           case "expenses":
//             return item.AccountTypeName === "Labor Expense";
//           case "other":
//             return item.AccountTypeName === "Product Costs";
//         }
//       });


//       filteredData1.forEach(function(item) {
//         var li = document.createElement("li");
//         li.className = "list-group-item border";
//         li.innerHTML = item["Number"] + " -- " + item["Name"];
//         ul1.appendChild(li);
//       });

//       filteredData2.forEach(function(item) {
//         var li = document.createElement("li");
//         li.className = "list-group-item border";
//         li.innerHTML = item["AccountCode"] + " -- " + item["AccountName"];
//         ul2.appendChild(li);
//       });

// });







// $(".header-button").click(function () {
//     var btnType = $(this).data("btn-type"); // Get the data attribute of the button that was clicked
//     // Clear section 2 and set up a new list
//     var ul = document.getElementById("section2");
//     ul.innerHTML = "";

//     var filteredData = data.filter(function(item) {
//         switch (btnType) {
//           case "assets":
//             return item.AccountTypeName === "ASSETS";
//           case "liability":
//             return item.AccountTypeName === "LIABILITIES";
//           case "equity":
//             return item.AccountTypeName === "EQUITY/CAPITAL";
//           case "revenue":
//             return item.AccountTypeName === "Professional Services Revenue";
//           case "cogs":
//             return item.AccountTypeName === "";
//           case "expenses":
//             return item.AccountTypeName === "Labor Expense";
//           case "other":
//             return item.AccountTypeName === "Product Costs";
//         }
//       });

//     //   var ul = document.getElementById("section2");
//     //   ul.innerHTML = "";

//       filteredData.forEach(function(item) {
//         var li = document.createElement("li");
//         li.className = "list-group-item border";
//         li.innerHTML = item["AccountCode"] + " -- " + item["AccountName"];
//         ul.appendChild(li);
//       });

// });


// $(".header-button").click(function () {
//     debugger
//     var btnType = $(this).data("btn-type"); // Get the data attribute of the button that was clicked
//     // Clear section 2 and set up a new list
//     var ul = document.getElementById("section1");
//     // ul.innerHTML = "";
//     console.log("mydata",data)
//     var filteredData = data.filter(function(item) {
//         switch (btnType) {
//           case "assets":
//             return item.Type === "Assets";
//           case "liability":
//             return item.Type === "Liabilities";
//           case "equity":
//             return item.Type === "Equity";
//           case "revenue":
//             return item.Type === "Revenue";
//           case "cogs":
//             return item.Type === "COGS";
//           case "expenses":
//             return item.Type === "Expense";
//           case "other":
//             return item.Type === "Other Rev & Exp";
//         }
//       });

//     //   var ul = document.getElementById("section1");
//     //   ul.innerHTML = "";

//       filteredData.forEach(function(item) {
//         var li = document.createElement("li");
//         li.className = "list-group-item border";
//         li.innerHTML = item["Number"] + " -- " + item["Name"];
//         ul.appendChild(li);
//       });

// });


//for searchbar
$(document).ready(function () {
  $('.search').on('keyup search', function () {
    var query = $(this).val().toLowerCase();
    $('#section2 li').each(function () {
      var text = $(this).text().toLowerCase();
      if (text.indexOf(query) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
  $('.search').on('search', function () {
    if ($(this).val() === '') {
      $('#section2 li').show();
    }
  });
});



// header buttons
$(document).ready(function () {
  // Add click event listener to all buttons
  $('.header-button').on('click', function () {
    // Remove active class from all buttons
    $('.header-button').removeClass('active');
    // Add active class to clicked button
    $(this).addClass('active');
  });
});


document.querySelectorAll('.menu-inner-box a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelectorAll('.menu-inner-box a').forEach(function (link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});


dragula([document.getElementById('section1'), document.getElementById('section2')], {
  copy: function (el, source) {
    return source === document.getElementById('section1')
  },
  accepts: function (el, target) {
    return target !== document.getElementById('section1')
  }
});


$(document).ready(function () {
  $('#btn-nav-previous').click(function () {
    $(".menu-inner-box").animate({ scrollLeft: "-=100px" });
  });

  $('#btn-nav-next').click(function () {
    $(".menu-inner-box").animate({ scrollLeft: "+=100px" });
  });
});

// // Click event for all the buttons
// $(".header-button").click(function () {
//     // Get the AccountTypeName from the button's class name
//     var accountType = $(this).attr("class").split(" ")[1];

//     // Clear the section2 list
//     $("#section2").empty();

//     // Iterate through the data and add the matching accounts to the list
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].AccountTypeName == accountType) {
//             console.log("Matched account: ", data[i]);
//             var li = $("<li>", {class: "list-group-item border"});
//             li.text(data[i]["AccountCode"] + " -- " + data[i]["AccountName"]);
//             $("#section2").append(li);
//         }
//     }

// });

// $(".header-button").click(function () {
//     debugger
//     var btnType = $(this).data("btn-type"); // Get the data attribute of the button that was clicked

//     // Clear section 2 and set up a new list
//     var ul = document.getElementById("section1");
//     ul.innerHTML = "";

//     // Loop through the data array and add list items based on the button that was clicked
//     for (var i = 0; i < data.length; i++) {
//         if (btnType === "assets" && data[i].Type === "Assets") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         } else if (btnType === "liability" && data[i].Type === "Liabilities") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         } else if (btnType === "equity" && data[i].Type === "EQUITY/CAPITAL") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         } else if (btnType === "revenue" && data[i].Type === "Professional Services Revenue") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         } else if (btnType === "cogs" && data[i].Type === "") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         } else if (btnType === "expenses" && data[i].Type === "Labor Expense") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         } else if (btnType === "other" && data[i].Type === "Product Costs") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
//             ul.appendChild(li);
//         }
//     }

// });




// $(".btn1").click(function () {
//     var btnType = $(this).data("btn-type"); // Get the data attribute of the button that was clicked

//     // Clear section 2 and set up a new list
//     var ul = document.getElementById("section2");
//     ul.innerHTML = "";

//     // Loop through the data array and add list items based on the button that was clicked
//     for (var i = 0; i < data.length; i++) {
//         if (btnType === "assets" && data[i].AccountTypeName === "ASSETS") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         } else if (btnType === "liability" && data[i].AccountTypeName === "LIABILITIES") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         } else if (btnType === "equity" && data[i].AccountTypeName === "EQUITY/CAPITAL") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         } else if (btnType === "revenue" && data[i].AccountTypeName === "Professional Services Revenue") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         } else if (btnType === "cogs" && data[i].AccountTypeName === "") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         } else if (btnType === "expenses" && data[i].AccountTypeName === "Labor Expense") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         } else if (btnType === "other" && data[i].AccountTypeName === "Product Costs") {
//             var li = document.createElement("li");
//             li.className = "list-group-item border";
//             li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
//             ul.appendChild(li);
//         }
//     }
// });