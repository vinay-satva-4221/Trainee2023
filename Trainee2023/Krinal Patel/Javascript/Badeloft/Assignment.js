window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Badeloft.html");
    }
    else{
      var par = JSON.parse(localStorage.getItem('LoginDetails'));
      var u = par[0].username;
      var uname = document.getElementById("username");
      uname.innerHTML = u;
    }
};
function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }
const CityData = '{"Cities":['+
'{"StateId":"1","Id":"1","Name":"Indore"},' +
'{"StateId":"1","Id":"2","Name":"Bhopal"},' +
'{"StateId":"2","Id":"3","Name":"Sirohi"},' +
'{"StateId":"2","Id":"4","Name":"Udaipur"},' +
'{"StateId":"2","Id":"5","Name":"Jaisalmer"},' +
'{"StateId":"3","Id":"6","Name":"Ahmedabad"},' +
'{"StateId":"3","Id":"7","Name":"Vadodara"},' +
'{"StateId":"3","Id":"8","Name":"Surat"},' +
'{"StateId":"4","Id":"9","Name":"Ludhiana"},' +
'{"StateId":"4","Id":"10","Name":"Amritsar"},' +
'{"StateId":"4","Id":"11","Name":"Patiala"}]}';

const StateData = '{"States":['+
'{"Id":"1","Name":"Eric Jensen"},' +
'{"Id":"2","Name":"Kenneth Woodard"},' +
'{"Id":"3","Name":"Kelly McCrory"},' +    
'{"Id":"4","Name":"frances Badger"},' +                    
'{"Id":"5","Name":"John Doe"}]}';

$(document).ready(function(){

    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States,function(i,option){
        $("#customer").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#customer").change(function(){
        var CityJsonData = JSON.parse(CityData);
        $("#selstock").html('');
        $.each(CityJsonData.Cities,function(i,option){
            if($("#customer").val() == option.StateId){
                $("#selstock").append($('<option></option>').val(option.Id).html(option.Name));
            }
    })

    });
});
