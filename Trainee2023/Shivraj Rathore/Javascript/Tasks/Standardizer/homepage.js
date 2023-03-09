function csvJSON(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");
  
  for(var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");
  
    for(var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
  
    result.push(obj);
  }
  
  return result;
}

$(document).ready(function() {
  $('.navbar-nav .nav-item .btn').click(function() {
    $('.navbar-nav .nav-item .btn').removeClass('active');
    $(this).addClass('active');
  });

  // Load the CSV data
  $.get('Standard CofA (1).csv', function(csvData) {
    // Convert to JSON
    var jsonData = csvJSON(csvData);
    
    // Do something with the JSON data
    console.log(jsonData);
  });
});
