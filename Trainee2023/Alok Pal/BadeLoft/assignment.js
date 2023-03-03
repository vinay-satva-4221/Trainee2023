// Jquery
$(document).ready(function () {
  // Dynamic adding of name
  var user = JSON.parse(localStorage.getItem("user"));
  var jName = user[0].Admin;
  console.log(jName);
  $(".dynamicN").html(jName);

  // Dynamic adding image
  var jImg = user[0].Image;
  console.log(jImg);
  $(".adminImg").attr("src", user[0].Image);
});

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    window.location.replace("Login.html");
  }
};

var $navItems = $(".navbar-collapse li").removeClass("active");

$navItems
  .filter(function () {
    return $(this).find("a").prop("href") === location.href;
  })
  .addClass("active");

// window.load(onD());
window.onload = (event) => {
  if (localStorage.getItem("user") == null) {
    window.location.replace("Login.html");
  }
};

//Logout
function logout() {
  localStorage.removeItem("user");
  window.location.replace("Login.html");
}

// Dependent Dropdown
const cityList = [
  { Customer: "Kenneth Woodard", Invoice: "150001" },
  { Customer: "Kenneth Woodard", Invoice: "150002" },
  { Customer: "Kenneth Woodard", Invoice: "150003" },
  { Customer: "James Fenske", Invoice: "160001" },
  { Customer: "James Fenske", Invoice: "160002" },
  { Customer: "James Fenske", Invoice: "160003" },
  { Customer: "James Fenske", Invoice: "160004" },
  { Customer: "Kelly McCrory", Invoice: "170001" },
  { Customer: "Kelly McCrory", Invoice: "170002" },
  { Customer: "Kelly McCrory", Invoice: "170003" },
  { Customer: "Frances Badger", Invoice: "180001" },
  { Customer: "Frances Badger", Invoice: "180002" },
  { Customer: "Frances Badger", Invoice: "180003" },
  { Customer: "Frances Badger", Invoice: "180004" },
];
$(document).ready(function () {
  $("#Customer").change(function () {
    $("#Invoice").html("<option selected disabled value=''>Choose...</option>");
    let citys = cityList.filter((e) => e.Customer == $("#Customer").val());

    citys.forEach((e) => {
      const option =
        "<option val='" + e.Invoice + "'> " + e.Invoice + "</option>";
      $("#Invoice").append(option);
    });
  });
});

// Select 2 library
$(document).ready(function () {
  $(".multipleSelect").select2();
});

// Active class
var pathname = window.location.pathname.match(/[^\/]+$/)[0];
$(".nav-item a").each(function () {
  if ($(this).attr("href") == pathname) {
    $(this).addClass("active");
  }
});


function format(d,id) {
  // debugger
  let dynamicChildRow = "";
  if (d.Stock && d.Stock.length > 0) {
    dynamicChildRow +=
      '<table cellpadding="5" class="table  table-border " cellspacing="0"  style="padding-left:50px;width:95%; margin-left:4%">';
    dynamicChildRow +=
      '<thead class ="table border text-center"><tr  style= "background-color:#ebebeb" ><th style="color:black"><b> # </b></th><th style="color:black"><b>Stock</b></th><th style="color:black"><b> Part </b></th><th style="color:black"><b>Action</b></th></tr></thead>';
    dynamicChildRow += "<tbody  class ='table '  >";
    d.Stock.forEach((e, index) => {
      let indx = index + 1;
      dynamicChildRow +=
        "<tr ><td>" +
        indx +
        "</td><td>" +
        e.Stock_Name[index].stock +
        "</td><td>" +
        e.Stock_Name.Part +
        "</td><td>"  +
        `<i  class= 'fa-solid fa-x delete'  style='cursor:pointer' data-stock-id='${d.stock}' onclick='deleteMainTableRow(this)'  data-part-index='${index}' ></i>` +
        "</td></tr>";
    });
    dynamicChildRow += "</tbody></table>";
  }
  return dynamicChildRow;
}
















// Dynamic value of dropdown
var stockData = JSON.parse(localStorage.getItem("newStock"));

var stockOptions = "";
for (i = 0; i < stockData.length; i++) {
  stockOptions +=
    '<option value="' +
    stockData[i].stock +
    '">' +
    stockData[i].stock +
    "</option>";
}
$("#stockname")
  .append(stockOptions)
  .on("change", function () {
    var selected = $(this).find("option:selected").val();

    for (let i = 0; i < stockData.length; i++) {
      debugger;
      var option;
      if (stockData[i].stock == selected) {
        console.log(stockData[i].Part);
        for (let j = 0; j < stockData[i].Part.length; j++) {
          option += "<option>" + stockData[i].Part[j].PartN + "</option>";
        }
      }
    }
    $("#parts").html(option);

    // $("#parts").append(option);
    // });
  });


  
var table;
var datin = JSON.parse(localStorage.getItem("Assigned"));
console.log(datin);
$(document).ready(function () {
  table = $("#Assignmenttable").DataTable({
    data: datin,
    language: {
      info: "Items _START_ to _END_ of _TOTAL_ total",
      paginate: {
        next: "&#62",
        previous: "&#60",
      },
    },

    order: [],
    dom: "rtip",
    columnDefs: [
      {
        defaultContent: "-",
        targets: "_all",
      },
    ],
    bInfo: true,
    columns: [
      {
        data: "Name[0].QBinvoice",
        title: "QB Invoice#",
        className: "dt-control  showchildRow",
        orderable: false,
      },

      {
        data: "Name[0].Name",
        title: "Name",
        orderable: false,
        className: "showchildRow",
        class: "text-center",
      },
      {
        data: "user[0].Admin",
        title: "Created By",
        orderable: false,
        className: "showchildRow",
        class: "text-center",
      },
      {
        data: "CreatedDate",
        title: "Created Date",
        orderable: false,
        className: "showchildRow",
        class: "text-center",
      },

      {
        data: "null",
        title: "Action",
        orderable: false,
        className: "dt-center editor-edit",
        defaultContent:
          '<i class="bi bi-pencil-fill text-secondary fw-bolder fs-6" on-click="editdata()"/> <i class="bi bi-clock-history text-secondary fw-bolder fs-6"/>',
      },
    ],
  });

  // Add event listener for opening and closing details
  $("#Assignmenttable tbody").on("click", "td.showchildRow", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data(), table.row(this).index())).show();
      tr.addClass("shown");
    }
  });
});

// Storing in the local storage
var user = JSON.parse(localStorage.getItem("user"));
console.log(user);

var Assigned = [];
var CustomerName = new Array();
var Stock = new Array();

function addModalData() {
  var Customer = document.getElementById("Customer").value;
  var Invoice = document.getElementById("Invoice").value;
  var StockName = document.getElementById("stockname").value;
  var PartNumber = $("#parts").val();
  // console.log(PartNumber);

  CustomerName = [
    {
      Name: Customer,
      QBinvoice: Invoice,
    },
  ];

  Stock = [
    {
      stock: StockName,
      Part: PartNumber,
    },
  ];

  if (localStorage.getItem("Assigned") == null) {
    Assigned = [];

    var newObj = {
      Name: CustomerName,
      Stock_Name: Stock,
      user: user,
      CreatedDate: Time,
      Part: PartNumber,
    };
    Assigned.push(newObj);
    table.row.add(newObj).draw();
    // localStorage.setItem("Assigned", JSON.stringify(Assigned));
  } else {
    newStock = JSON.parse(localStorage.getItem("newStock"));
    var newObj = {
      Name: CustomerName,
      Stock_Name: Stock,
      user: user,
      CreatedDate: Time,
      Part: PartNumber,
    };
    Assigned.push(newObj);
    table.row.add(newObj).draw();
  }
  
  localStorage.setItem("Assigned", JSON.stringify(Assigned));
  $("#AssignedModal").modal("hide");
  resetSVal();
  $("#partTable").append("<tbody></tbody");
}

// Time
function formatDate(dateVal) {
  var newDate = new Date(dateVal);

  var sMonth = padValue(newDate.getMonth() + 1);
  var sDay = padValue(newDate.getDate());
  var sYear = newDate.getFullYear();
  var sHour = newDate.getHours();
  var sMinute = padValue(newDate.getMinutes());
  var sAMPM = "AM";

  var iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
    sAMPM = "PM";
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = "12";
  }

  sHour = padValue(sHour);

  return (
    sMonth +
    "/" +
    sDay +
    "/" +
    sYear +
    " " +
    "at" +
    " " +
    +sHour +
    ":" +
    sMinute +
    " " +
    sAMPM
  );
}

function padValue(value) {
  return value < 10 ? "0" + value : value;
}

var Time = formatDate(new Date());
console.log(Time);

// Search
$("#stock_search").on("keyup", function () {
  table.search(this.value).draw();
});

//reset
function resetSVal() {
  document.getElementById("stockname").value = "";
  document.getElementById("parts").value = "";
  document.getElementById("Customer").value = "";
  document.getElementById("Invoice").value = "";
}

// Dynamic adding of table
function showModaltable() {
  var html = "";
  html =
    "<thead><th class=text-start>#</th><th class=text-start>Stock</th><th class=text-start>Part</th><th class=text-start>Action</th></thead><tbody id='root'>";
  Stock.forEach(function (element, index) {
    var indx = index + 1;
    html += "<tr>";
    html += "<td class=text-start > " + indx + "</td>";
    html += "<td class=text-start text-white>" + Stock[index].stock + "</td>";
    html += "<td class=text-start > " + Stock[index].Part + "</td>";
    html +=
      '<td class=text-center><i  class= "fa-solid fa-x delete" style="cursor:pointer" onclick="deletePartTableRow(' +
      index +
      ' )"   ></i> </td>';
    html += "</tr>";
    html += "</tbody>";

    $("#partTable").html(html);

    Stock = [];
  });
}
