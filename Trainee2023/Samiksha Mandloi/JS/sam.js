$(document).ready(function(){

    var stateObject = {
        "Gujarat": {
            "Surat": [],
            "Ahmedabad": [],
            "Rajkot": [],
            "Vadodara": [],
        },
        "Madhya Pradesh": {
            "Indore": [],
            "Bhopal": [],
        },
        "Punjab": {
            "Ludhiana": [],
            "Amritsar": [],
        },
        "Rajasthan": {
            "Sirohi": [],
            "Udaipur": [],
        }
    }
    window.onload = function () {
        var state = document.getElementById("state");
        var city = document.getElementById("city");
        for (var x in stateObject) {
            state.options[state.options.length] = new Option(x, x);
        }
        state.onchange = function () {
    
            city.length = 1;
            //display correct values
            for (var y in stateObject[this.value]) {
                city.options[city.options.length] = new Option(y, y);
            }
        }
    
    }
   function show(){
    detail = new Array();
    var detail = JSON.parse(localStorage.getItem("details"));
    table = "<tbody><tr><th>Sr.no</td><td>Name</td><td>State</td><td>City</td><td>Zipcode</td><td>Mobile</td>";
    if (detail==null){

    } else {
       for(let i=0;i=detail.length;i++){
        table += "<tr id="+[i+1]+"><td>" +[i+1]+"</td><td>"+ detail[i].name+ "</td><td>"+ detail[i].state+ "</td><td>"+ detail[i].city+
        "</td><td>"+ detail[i].zipcode+ "</td><td>"+ detail[i].mobile+ "</td></tr>"
       }
    }
        detail +="</tbody>";
        $("#table").html(detail);
    }

    function LIFO(){
       var name= $("#name").val();
       var state= $("#state").val();
       var city= $("#city").val();
       var zipcode= $("#zipcode").val();
       var mobile= $("#mobile").val();
      value = new Array();
      var value = JSON.parse(localStorage.getItem("details"));
      if(value==null){
        value[]
        value.push({
            
                "name":Name,
                "mobile":Mobile,
                "state":State,
                "city":City,
                "zip":Zip
        }) 
    } else if(value.length<5){
           value.push({
            "name":Name,
            "mobile":Mobile,
            "state":State,
            "city":City,
            "zip":Zip
           })
        } else if(value.length==5){
            value.pop()
            value.push({
                    "name":Name,
                    "mobile":Mobile,
                    "state":State,
                    "city":City,
                    "zip":Zip
            })
        }
        localStorage.setItem("details",JSON.stringify(value));
        show()
      }

      function FIFO(){
        var name= $("#name").val();
       var state= $("#state").val();
       var city= $("#city").val();
       var zipcode= $("#zipcode").val();
       var mobile= $("#mobile").val();
       value = new Array();
       var value = JSON.parse(localStorage.getItem("details"));
       if(value==null){
          value[]
          value.push({
            "name":Name,
                "mobile":Mobile,
                "state":State,
                "city":City,
                "zip":Zip
          })
       } else if(value.length<5){
        value.push({
            "name":Name,
                "mobile":Mobile,
                "state":State,
                "city":City,
                "zip":Zip
        })
       } else if(value.length==5){
        value.pop()
        value.unshift({
            "name":Name,
                "mobile":Mobile,
                "state":State,
                "city":City,
                "zip":Zip
        })
       }
       localStorage.setItem("details",JSON.stringify(value));
       show()
      }
    });
    