// Sortable.create(source, {
//     animation: 100,
//     group: 'list-1',
//     draggable: '.list-group-item',
//     handle: '.list-group-item',
//     sort: true,
//     filter: '.sortable-disabled',
//     chosenClass: 'active'
//   });
  
  Sortable.create(destination, {
    group: 'list-1',
    handle: '.list-group-item'
  });
  

  Sortable.create(mostlikely, {
    group: 'list-1',
    handle: '.list-group-item',
  });

  Sortable.create(likely, {
    group: 'list-1',
    handle: '.list-group-item'
  });

  Sortable.create(possible, {
    group: 'list-1',
    handle: '.list-group-item'
  });


const destinationdata = new XMLHttpRequest();
destinationdata.open("GET", "MasterChartOfAcounts.csv",false);

var masterChartAccountDataString;
var masterChartAccountObject;
var masterChartAccountData = [];
destinationdata.onreadystatechange = function () {
  if (destinationdata.readyState === XMLHttpRequest.DONE && destinationdata.status === 200) {
    const csv = destinationdata.responseText;

    const rows = csv.split("\n");
    const headers = rows[0].split(",");

    masterChartAccountData = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
      masterChartAccountData.push(obj);
    }

    masterChartAccountDataString = JSON.stringify(masterChartAccountData);
    masterChartAccountObject = JSON.parse(masterChartAccountDataString);
  }
};
destinationdata.send();

var destinationData = JSON.parse(masterChartAccountDataString);
const parentElement = document.getElementById('destination');

destinationData.forEach((item) => {
  var liElement = document.createElement('li');
  liElement.textContent = `${item.AccountCode} ${'--'} ${item.AccountName} `;
  liElement.classList.add('list-group-item')
  parentElement.appendChild(liElement);
});

//////////////////////////////////////////////////////////


var sourcedata = new XMLHttpRequest();
sourcedata.open("GET", "StandardCofA.csv",false);

var standardcofstring;
var standardcofobject;
var standardcofData = [];
sourcedata.onreadystatechange = function () {
  if (sourcedata.readyState === XMLHttpRequest.DONE && sourcedata.status === 200) {
    const csv = sourcedata.responseText;

    const rows = csv.split("\n");
    const headers = rows[0].split(",");

    standardcofData = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
      standardcofData.push(obj);
    }

    standardcofstring = JSON.stringify(standardcofData);
    standardcofobject = JSON.parse(standardcofstring);
  }
};
sourcedata.send();

var sourcedata = JSON.parse(standardcofstring);
const parent = document.getElementById('source');

sourcedata.forEach((item) => {
  var liElement = document.createElement('li');
  liElement.textContent = `${item.Number} ${'--'} ${item.Name} `;
  liElement.classList.add('list-group-item')
  parent.appendChild(liElement);
});