
var getvalueofcsv = [];
var getvalueofmasterdata = [];
$(document).ready(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var destinationData = csvJSON(this.responseText);
            var parsedData = JSON.parse(destinationData);
            getvalueofcsv = parsedData;
        }
    };
    xhttp.open("GET", "Standard CofA.csv", false);
    xhttp.send();
    function csvJSON(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        result.forEach((columndata) => {
            if (columndata.Number != "") {
                $("#Balancesheet_list").append("<li class='list-group-item'>" + columndata.Number + "  " + columndata.Name + "</li>");
            }
        });
        debugger
        $(".source_btn").click(function () {
            var type = $(this).data("value");
            $("#Balancesheet_list").html('');
            result.forEach((columndata) => {
                if (columndata.Type == type) {
                    console.log(columndata.Name);
                    if (columndata.Number != "") {
                        $("#Balancesheet_list").append("<li class='list-group-item'>" + columndata.Number + "  " + columndata.Name + "</li>");
                    }
                }
            });
            const MasterDataMap = {
                "Assets": "ASSETS",
                "Liabilities": "LIABILITIES",
                "Equity": "EQUITY/CAPITAL",
                "Revenue": "Professional Services Revenue",
                "COGS": "Product Revenue",
                "Expense": '"Outside (or ""1099"") Professional Services Costs"',
                "Other Rev & Exp": "Product Costs"
            };
            datamatchedofmaster = MasterDataMap[type];

            $("#list").html('');
            getvalueofmasterdata.forEach((columndata) => {

                if (columndata.AccountTypeName == datamatchedofmaster) {

                    console.log(columndata.AccountName);
                    if (columndata.Number != "") {
                        $("#list").append("<li class='list-group-item'>" + columndata.AccountCode + "  " + columndata.AccountName + "</li>");
                    }
                }
            });
        });
        return JSON.stringify(result);
    }
    var balancesheetxhttp = new XMLHttpRequest();
    balancesheetxhttp.open("GET", "MasterChartOfAcounts - Sheet1.csv", false);

    balancesheetxhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            csvtojsonmasterdata(this.responseText);
            console.log("getvalueofmasterdata", getvalueofmasterdata);
        }
    };
    balancesheetxhttp.send();
    function csvtojsonmasterdata(csv) {
        const lines = csv.split("\n");
        const headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            getvalueofmasterdata.push(obj);
        }
    }
    getvalueofmasterdata.forEach((columndata) => {
        if (columndata.Number != "") {
            $("#list").append("<li class='list-group-item'>" + columndata.AccountCode + "  " + columndata.AccountName + "</li>");
        }
    });
    $('.menu-item').click(function () {
        var navbarvalue = $(this).data("value");
        const MasternavbarMap = {
            "Assets": "ASSETS",
            "Liabilities": "LIABILITIES",
            "Equity/Capital": "EQUITY/CAPITAL",
            "Revenue": "Professional Services Revenue",
            "CoGS": "Product Revenue",
            "Expense": '"Outside (or ""1099"") Professional Services Costs"',
            "other": "Product Costs"
        };
        datamatchedofnavbar = MasternavbarMap[navbarvalue];
        $("#list").html('');
        getvalueofmasterdata.forEach((columndata) => {
            if (columndata.AccountTypeName == datamatchedofnavbar) {
                console.log(columndata.AccountName);
                if (columndata.Number != "") {
                    $("#list").append("<li class='list-group-item'>" + columndata.AccountCode + "  " + columndata.AccountName + "</li>");
                }
            }
        });
          $('#all_data').click(function(){
            getvalueofmasterdata.forEach((columndata) => {      
                  console.log(columndata.AccountName);
                  if(columndata.Number!=""){
                    $("#list").append("<li class='list-group-item'>" + columndata.AccountCode + "  " + columndata.AccountName + "</li>");
                }        

               });
          });
    })
    const buttons = document.querySelectorAll('.source_btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
$(document).ready(function () {
    $('#btn-nav-previous').click(function () {
        $(".menu-inner-box").animate({ scrollLeft: "-=100px" });
    });
    $('#btn-nav-next').click(function () {
        $(".menu-inner-box").animate({ scrollLeft: "+=100px" });
    });
    $(".search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".destination_account_structure ul li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $('.search').on('search', function () {
        if ($(this).val() === '') {
            $('#list li').show();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    dragula([
      document.querySelector('#first-container'),
      document.querySelector('#second-container'),
      document.querySelector('#third-container')
    ]);
  });
  