
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var destinationData = csvJSON(this.responseText);
    var parsedData = JSON.parse(destinationData);
    console.log(parsedData);
    var list = document.getElementById("list");
    for (var i = 0; i < parsedData.length; i++) {
      var item = parsedData[i];
      var listItem = document.createElement("li");
      listItem.classList.add("list-item");
      listItem.innerHTML = item.AccountName + " - " + item.AccountCode;
      list.appendChild(listItem);
    }
  }
};
xhttp.open("GET", "MasterChartOfAcounts - Sheet1.csv", false);
xhttp.send();

function csvJSON(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");
  var nameIndex = headers.indexOf("AccountName");
  var numberIndex = headers.indexOf("AccountCode");
  for(var i = 1; i < lines.length; i++){
      var obj = {};
      var currentline = lines[i].split(",");
      obj["AccountName"] = currentline[nameIndex];
      obj["AccountCode"] = currentline[numberIndex];
      result.push(obj);
  }
  var nameAndNumberData = result.map(function(item) {
    return {
      AccountName: item.AccountName,
      AccountCode: item.AccountCode
    };
  });
  return JSON.stringify(nameAndNumberData);
}




var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var destinationData = csvJSON(this.responseText);
    var parsedData = JSON.parse(destinationData);
    console.log(parsedData);
    var list = document.getElementById("list");
    for (var i = 0; i < parsedData.length; i++) {
      var item = parsedData[i];
      var listItem = document.createElement("li");
      listItem.classList.add("list-item");
      listItem.innerHTML = item.AccountName + " - " + item.AccountCode;
      list.appendChild(listItem);
    }
  }
};
xhttp.open("GET", "MasterChartOfAcounts - Sheet1.csv", false);
xhttp.send();

function csvJSON(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");
  var nameIndex = headers.indexOf("AccountName");
  var numberIndex = headers.indexOf("AccountCode");
  for(var i = 1; i < lines.length; i++){
      var obj = {};
      var currentline = lines[i].split(",");
      obj["AccountName"] = currentline[nameIndex];
      obj["AccountCode"] = currentline[numberIndex];
      result.push(obj);
  }
  var nameAndNumberData = result.map(function(item) {
    return {
      AccountName: item.AccountName,
      AccountCode: item.AccountCode
    };
  });
  return JSON.stringify(nameAndNumberData);
}

var balancesheetxhttp = new XMLHttpRequest();
balancesheetxhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var balancesheetdestinationdata = csvJSON2(this.responseText);
    var balancesheetparsedata = JSON.parse(balancesheetdestinationdata);
    console.log(balancesheetparsedata);
    var list = document.getElementById("Balancesheet_list");
    for (var i = 0; i < balancesheetparsedata.length; i++) {
      var item = balancesheetparsedata[i];
      var listItem = document.createElement("li");
      listItem.classList.add("list-item");
      listItem.innerHTML = item.Number + " - " + item.Name;
      list.appendChild(listItem);
    }
  }
};
balancesheetxhttp.open("GET", "Standard CofA.csv", false);
balancesheetxhttp.send();

function csvJSON2(csv) {
  var line = csv.split("\n");
  var results = [];
  var header = line[0].split(",");
  var NumberIndex = header.indexOf("Number");
  var NameIndex = header.indexOf("Name");
  for(var i = 1; i < line.length; i++){
      var objects = {};
      var currentlines = line[i].split(",");
      objects["Number"] = currentlines[NumberIndex];
      objects["Name"] = currentlines[NameIndex];
      results.push(objects);
  }
  var NameAndNumberData = results.map(function(item) {
    return {
      Number: item.Number,
      Name: item.Name
    };
  });
  return JSON.stringify(NameAndNumberData);
}



$(document).ready(function(){
  $('#btn-nav-previous').click(function(){
      $(".menu-inner-box").animate({scrollLeft: "-=100px"});
  });
  
  $('#btn-nav-next').click(function(){
      $(".menu-inner-box").animate({scrollLeft: "+=100px"});
  });
});