$(document).ready(function () {

    //DEstinationData
  var destinationData;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    destinationData = this.responseText;
    // //console.log(destinationData)
  };
  xhttp.open("GET", "./DataFiles/MasterChartOfAcounts - Sheet1.csv",false);
  xhttp.send();
  destinationData=CSVtoJSON(destinationData)
  console.log(destinationData)

  //Source Account Data
  var SourceAccountData;
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    SourceAccountData = this.responseText;
    // console.log(destinationData)
  };
  xhr.open("GET", "./DataFiles/Standard CofA.csv",false);
  xhr.send();
  SourceAccountData =CSVtoJSON(SourceAccountData)

//    //console.log(SourceAccountData)
  list=""
  for(let i=1;i<SourceAccountData.length;i++){
    if(SourceAccountData[i].Type=="Assets")
    // list+=" <div class='dragableDiv'>"+SourceAccountData[i].Number+"</div>"
    list+="<li class='Item'>"+SourceAccountData[i].Number+ " "+ SourceAccountData[i].Number+"</li>"
  }
  $("#SourceAccountList").html(list)

  destinationList=""
  for(let j=1;j<destinationData.length;j++){
    destinationList+="<li class='Item'>"+destinationData[j].AccountCode+"-"+destinationData[j].AccountName +"</li>"
  }
  $("#DestinationAccountList").html(destinationList)

$('.accountTypebtn').click(function(){
    $(".accountTypebtn").removeClass("activebtn");
    $(this).addClass("activebtn")
})
 
 
});


//CSV to Json
function CSVtoJSON(csv){
var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
    }

    result.push(obj);
    //console.log(result)

}
return result
}