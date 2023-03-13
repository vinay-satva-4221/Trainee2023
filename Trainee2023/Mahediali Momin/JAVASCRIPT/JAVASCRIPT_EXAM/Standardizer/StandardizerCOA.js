dragula([document.getElementById('section1'), document.getElementById('section2')], {
    copy: function (el, source) {
        return source === document.getElementById('section1')
    },
    accepts: function (el, target) {
        return target !== document.getElementById('section1')
    }
});



var request = new XMLHttpRequest();

// GET and the file URL
request.open('GET', 'MasterChartOfAcounts - Sheet1.csv', true);

// set the responseType to text to receive the file contents as a string
request.responseType = 'text';

// set a callback function to handle the file data once it's loaded
request.onload = function() {
    // check that the request was successful
    if (request.status === 200) {
        // split the file contents into an array of lines
        var lines = request.response.split('\n');

        // remove the first line (header) of the file
        var headers = lines.shift().split(',');

        // map the remaining lines into an array of objects
        var data = lines.map(function(line) {
            var values = line.split(',');
            var obj = {};

            // loop through all the columns in the row
            for (var i = 0; i < headers.length; i++) {
                // set the key-value pair in the object
                obj[headers[i]] = values[i];
            }
            return obj;

        });
        // do something with the data
        console.log(data);
        // create a new ul element
        var ul = document.getElementById("section2");
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.className = "list-group-item border";
            li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
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
request1.onload = function() {
    // check that the request was successful
    if (request1.status === 200) {
        // split the file contents into an array of lines
        var lines = request1.response.split('\n');

        // remove the first line (header) of the file
        var headers = lines.shift().split(',');

        // map the remaining lines into an array of objects
        var data = lines.map(function(line) {
            var values = line.split(',');
            var obj = {};

            // loop through all the columns in the row
            for (var i = 0; i < headers.length; i++) {
                // set the key-value pair in the object
                obj[headers[i]] = values[i];
            }
            return obj;
        });

        // do something with the data
        console.log(data);
        
        // create a new ul element
        var ul = document.getElementById("section1");
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.className = "list-group-item border";
            li.innerHTML = data[i]["Number"] + " -- " + data[i]["Name"];
            ul.appendChild(li);
        }
    }
};
// send the request
request1.send();




$(document).ready(function(){
    $('#btn-nav-previous').click(function(){
        $(".menu-inner-box").animate({scrollLeft: "-=100px"});
    });
    
    $('#btn-nav-next').click(function(){
        $(".menu-inner-box").animate({scrollLeft: "+=100px"});
    });
});



  
