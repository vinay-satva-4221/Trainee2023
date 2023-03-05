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





function format(d, id) {
  // debugger
  let dynamicChildRow = "";
  if (d.StockParts && d.StockParts.length > 0) {
    dynamicChildRow +=
      '<table cellpadding="5" class="table  table-border " cellspacing="0"  style="padding-left:50px;width:95%; margin-left:4%">';
    dynamicChildRow +=
      '<thead class ="table border text-center"><tr  style= "background-color:#ebebeb" ><th style="color:black"><b> # </b></th><th style="color:black"><b>Stock</b></th><th style="color:black"><b>Part</b></th><th style="color:black"><b>Action</b></th></tr></thead>';
    dynamicChildRow += "<tbody  class ='table '  >";
    d.StockParts.forEach((e, index) => {
      let indx = index + 1;
      dynamicChildRow +=
        "<tr ><td>" +
        indx +
        "</td><td>" +
        e.StockName +
        "</td><td>" +
        e.Parts +
        "</td><td>" +
        `<i  class= 'fa-solid fa-x delete'  style='cursor:pointer' data-stock-id='${d.id}' onclick='deleteMainTableRow(this)'  data-part-index='${index}' ></i>` +
        "</td></tr>";
    });
    dynamicChildRow += "</tbody></table>";
  }
  return dynamicChildRow;
}

var table;
$(document).ready(function () {
  var datin = JSON.parse(localStorage.getItem("Assigned"));

  table = $('#Assignmenttable').DataTable({
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
        data: "Invoice",
        title: "QB Invoice#",
        className: "dt-control  showchildRow",
        orderable: false,
      },
      { data: 'UserName', title: "Name", },
      { data: 'Customer', title: "Created By", },
      { data: 'CreatedTime', title: "Created Date", },
      {
        data: "null",
        title: "Action",
        orderable: false,
        className: "dt-center editor-edit",
        defaultContent:
          '<i class="bi bi-pencil-fill text-secondary fw-bolder fs-6" on-click="editdata()"/> <i class="bi bi-clock-history text-secondary fw-bolder fs-6"/>',
      },
    ],
    order: [[1, 'asc']],
  });

  // Add event listener for opening and closing details
  $('#Assignmenttable tbody').on('click', 'td.dt-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });
});

// Global
// var customerNameInvoce = new Array();
var StockNameParts = new Array();
var Assigned = [];

function addPartData() {
  // var customer = $("#Customer").val();
  // var QBInvoice = $("#Invoice").val();

  // customerNameInvoce.push({
  //   CustomerName : customer,
  //   Invoice :QBInvoice
  // })

  var stock = $("#stockname").val();
  var PartNumber = $("#parts").val();

  StockNameParts.push({
    StockName: stock,
    Parts: PartNumber
  })

}
// console.log(customerNameInvoce)
// console.log(StockNameParts)


function addStockData() {
  debugger
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user[0].Admin)
  var customer = $("#Customer").val();
  var QBInvoice = $("#Invoice").val();


  if (localStorage.getItem("Assigned") == null) {
    Assigned = [];
    var newObj = {
      Customer: customer,
      Invoice: QBInvoice,
      StockParts: StockNameParts,
      UserName: user[0].Admin,
      id: Date.now(),
      CreatedTime: Time,
    }
    Assigned.push(newObj);
  }
  else {
    Assigned = JSON.parse(localStorage.getItem("Assigned"));
    var newObj = {
      Customer: customer,
      Invoice: QBInvoice,
      StockParts: StockNameParts,
      UserName: user[0].Admin,
      id: Date.now(),
      CreatedTime: Time,
    }
    Assigned.push(newObj);
  }
  $("#StockModal").modal("hide");
  table.row.add(newObj).draw();
  localStorage.setItem("Assigned", JSON.stringify(Assigned));
  $("#AssignedModal").modal("hide");
  resetValue()
}

// Dynamic adding of table
function showModaltable() {
  var html = "";
  html =
    "<thead><th class=text-start color='color:white'>#</th><th class=text-start>Stock</th><th class=text-start>Part</th><th class=text-start>Action</th></thead><tbody id='root'>";
  StockNameParts.forEach(function (element, index) {
    var indx = index + 1;
    html += "<tr>";
    html += "<td class=text-start  > " + indx + "</td>";
    html += "<td class=text-start >" + StockNameParts[index].StockName + "</td>";
    html += "<td class=text-start > " + StockNameParts[index].Parts + "</td>";
    html +=
      '<td class=text-center><i  class= "fa-solid fa-x delete" style="cursor:pointer" onclick="deletePartTableRow(' +
      index +
      ' )"   ></i> </td>';
    html += "</tr>";
    html += "</tbody>";

    $("#partTable").html(html);

  });
}


//delete Part Table
function deletePartTableRow(index) {

  console.log(index);
  StockNameParts.splice(index, 1);
  console.log(parts);
  showModaltable();
}


// delete datatable

function deleteMainTableRow(element) {
  var Assigned = JSON.parse(localStorage.getItem("Assigned"));

  var stockID = $(element).attr('data-stock-id');
  var StockIndex = Assigned.findIndex(x => x.id == stockID);
  var PartIndex = $(element).attr('data-part-index');
  console.log("Part index", PartIndex);

  console.log("Stock index", StockIndex);
  Assigned[StockIndex].StockParts.splice(PartIndex, 1);
  localStorage.setItem("Assigned", JSON.stringify(Assigned));

  var tr = $(element).closest("tr")
  tr.remove()

}

function resetValue(){
  document.getElementById("Customer").value = ''
  document.getElementById("Invoice").value = ''
  document.getElementById("stockname").value =''
}

$("#Assignmenttable").on("click", ".editor-edit", function (e) {
  e.preventDefault();
  $("#AssignedModal").modal("show");

  var indexRow = table.row(this).index();
  console.log(indexRow);

  var tabledata = table.row(this).data();
  console.log(tabledata);

  $("#Customer").val(tabledata.Customer)
  $("#Invoice").val(tabledata.Invoice)


  var newStockModal = JSON.parse(localStorage.getItem("Assigned"));
  // User
  var user = JSON.parse(localStorage.getItem("user"));  

  document.querySelector("#AssignedModalId").onclick = function () {
    
    var updateCustomerName = document.getElementById("Customer").value
    var updateInvoice = document.getElementById("Invoice").value

    var newObj = {
      Customer: updateCustomerName,
      Invoice: updateInvoice,
      StockParts: StockNameParts,
      UserName: user[0].Admin,
      id: Date.now(),
      CreatedTime: Time,
    }
    Assigned[indexRow] = newObj;
    localStorage.setItem("Assigned", JSON.stringify(Assigned));
    $("#AssignedModal").modal("hide");
    window.location.reload();
  }


})

// Edit
// $("#Assignmenttable").on("click", "td.editor-edit", function (e) {
  
//   e.preventDefault();
//   $("#AssignedModal").modal("show");

//   var indexRow = table.row(this).index();
//   console.log(indexRow);

//   var tabledata = table.row(this).data();
//   console.log(tabledata);

//   var newStockModal = JSON.parse(localStorage.getItem("Assigned"));

//   document.getElementById("Customer").value = newStockModal[indexRow].Customer;
//   document.getElementById("Invoice").value = newStockModal[indexRow].Invoice;
//   // document.getElementById("stockname").value = newStockModal[indexRow].StockParts[indexRow].StockName

//   var Parts = $("#parts").val()
//   Parts = newStockModal[indexRow].StockParts

//   // parts = newStockModal[indexRow].Part;
//   showModaltable();

//   document.querySelector("#AssignedModalId").onclick = function () {
//     var updateCustomerName = (document.getElementById("Customer").value = newStockModal[indexRow].Customer);
//     var updateInvoice = (document.getElementById("Invoice").value = newStockModal[indexRow].Invoice);

//     var updateStockName = document.getElementById("stockname").value ;
//     var updteParts = Parts

//     var UStockNameParts = [];
//     UStockNameParts.push({
//       StockName: updateStockName,
//       Parts: updteParts
//     })

//     // User
//     var user = JSON.parse(localStorage.getItem("user"));    

//     var newObj = {
//       Customer: updateCustomerName,
//       Invoice: updateInvoice,
//       StockParts: UStockNameParts,
//       UserName: user[0].Admin,
//       id: Date.now(),
//       CreatedTime: Time,
//     }
//     Assigned[indexRow] = newObj;
//     localStorage.setItem("Assigned", JSON.stringify(Assigned));
//   };
//   // window.location.reload();
//   $("#AssignedModal").modal("hide");
//   resetValue()
// });


