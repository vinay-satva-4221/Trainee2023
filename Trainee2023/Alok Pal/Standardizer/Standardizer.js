// Make an XMLHttpRequest to fetch the CSV file
const xhr = new XMLHttpRequest();
xhr.open("GET", "ChartAccount.csv",false);

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
console.log("Alok", destinationData);

const parentElement = document.getElementById('DestinationAccount');



// Loop through the JSON data
destinationData.forEach((item) => {
  // Create a new li element
  const liElement = document.createElement('li');

  liElement.textContent = `${item.AccountCode} ${'--'} ${item.AccountName} `;
  liElement.classList.add('list-group-item')

  // Append the li element to the parent element
  parentElement.appendChild(liElement);
});











// btn color
$(document).ready(function () {
  $(".btnActive").click(function () {
    // remove "active" class from all buttons
    $(".btnActive").removeClass("btn-active");

    // add "active" class to clicked button
    $(this).addClass("btn-active");
  });
});



// Get the containers
const DestinationAccount = document.querySelector("#DestinationAccount");
const LikelyDestinationAccount3 = document.querySelector("#LikelyDestinationAccount3");

// Initialize Dragula with options
dragula([DestinationAccount, LikelyDestinationAccount3], {
  copy: true,
  accepts: function (el, target) {
    return target !== container1;
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
