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

//Logout
function logout() {
  localStorage.removeItem("user");
  window.location.replace("Login.html");
}

// test
var r = JSON.parse(localStorage.getItem("newStock"));
console.log(r);

function format(d, id) {
  // debugger
  let dynamicChildRow = "";
  if (d.Part && d.Part.length > 0) {
    dynamicChildRow +=
      '<table cellpadding="5" class="table  table-border " cellspacing="0"  style="padding-left:50px;width:95%; margin-left:4%">';
    dynamicChildRow +=
      '<thead class ="table border text-center"><tr  style= "background-color:#ebebeb" ><th style="color:black"><b> # </b></th><th style="color:black"><b>Part Number</b></th><th style="color:black"><b> Ordered </b></th><th style="color:black"><b>Assigned</b></th><th style="color:black"><b>Action</b></th></tr></thead>';
    dynamicChildRow += "<tbody  class ='table '  >";
    d.Part.forEach((e, index) => {
      let indx = index + 1;
      dynamicChildRow +=
        "<tr ><td>" +
        indx +
        "</td><td>" +
        e.PartN +
        "</td><td>" +
        e.Order +
        "</td><td>" +
        e.Comments +
        "</td><td >" +
        `<i  class= 'fa-solid fa-x delete'  style='cursor:pointer' data-stock-id='${d.stock}' onclick='deleteMainTableRow(this)'  data-part-index='${index}' ></i>` +
        "</td></tr>";
    });
    dynamicChildRow += "</tbody></table>";
  }
  return dynamicChildRow;
  
}

// parts new

function modal() {
  IsEditing = false;
  $("#StockModal").modal("show");
  parts = [];
}

// to get todays date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = mm + "/" + dd + "/" + yyyy;
// document.write(today);

// global variable
var table;
$(document).ready(function () {
  var datin = JSON.parse(localStorage.getItem("newStock"));
  console.log(datin);

  table = $("#stock_table").DataTable({
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
        data: "stock",
        title: "Stock Name",
        className: "dt-control  showchildRow",
        orderable: false,
      },
      {
        data: "date",
        title: "ETA Date",
        orderable: false,
        className: "showchildRow",
        class: "text-center",
      },
      {
        data: "stockStatus",
        title: "Stock Location",
        orderable: false,
        class: "text-center",
        render: function (data, type, row) {
          // create a select element with options
          var select =
            '<select class="statusdropdown"><option value="Change">Change </option><option value="In Warehouse">In Warehouse</option><option value="On Water">On Water</option><option value="On Production">On Production</option></select>';
          // return the select element as the cell content
          return select + data;
        },
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
        data: "Part[0].Comments",
        title: "Notes",
        orderable: false,
        className: "showchildRow",
        class: "text-center",
      },
      {
        data: "null",
        title: "Action",
        orderable: false,
        className: "dt-center ",
        render: function (data, type, row) {
          return (
            '<button type="button" class="bi bi-pencil-fill text-secondary fw-bolder editor-edit stockeditbtn fs-6 border-0 bg-light"></button>' +
            '<button type="button" class="bi bi-clock-history text-secondary fw-bolder fs-6 border-0 bg-light"></button>'
          );
        },
      },
    ],
  });

  $("#stock_table tbody").on("change", "select", function () {
    debugger;
    var rowData = table.row($(this).closest("tr")).data(); // get the data for the current row
    var newValue = $(this).val(); // get the new value from the dropdown
    rowData.stockStatus = newValue; // update the data object
    table.row($(this).closest("tr")).data(rowData); // update the table

    // update the local storage
    var data = JSON.parse(localStorage.getItem("newStock"));
    var index = data.findIndex(function (item) {
      return item.stock === rowData.stock;
    });
    if (index !== -1) {
      data[index].stockStatus = newValue;
      localStorage.setItem("newStock", JSON.stringify(data));
    }
    location.reload(true);
  });

  $(".bi-clock-history").on("click", function () {
    debugger;
    $("#historyModal").modal("toggle");
  });

  // Add event listener for opening and closing details
  $("#stock_table tbody").on("click", "td.showchildRow", function () {
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

// Array creation
var parts = new Array();
var IsEditing = false;

function getModal() {
  debugger;
  var partN = document.getElementById("pNum").value;
  var order = document.getElementById("order").value;
  var comments = document.getElementById("floatingTextarea").value;

  if (partN == "" && order == "") {
    Swal.fire({
      title: "Error!",
      text: "Add part Name",
      icon: "error",
    });
  } else {
    parts.push({
      PartN: partN,
      Order: order,
      Comments: comments,
    });
  }
}

// add
var r1 = document.getElementById("btnradio1").checked;
var r2 = document.getElementById("btnradio1").checked;
var r3 = document.getElementById("btnradio1").checked;
var user = JSON.parse(localStorage.getItem("user"));
console.log(user);

var newStock = [];
var Stockstatus;

function addStockData() {
  if (!IsEditing) {
    debugger;
    // parts
    var stockName = document.getElementById("stock").value;
    var dateM = document.getElementById("date").value;

    Stockstatus = radioBtnValue();

    console.log(parts.length);
    if (stockName != null && parts.length > 0) {
      if (localStorage.getItem("newStock") == null) {
        newStock = [];
        var newObj = {
          stock: stockName,
          date: dateM,
          stockStatus: Stockstatus,
          CreatedDate: today,
          Part: parts,
          user: user,
        };
        newStock.push(newObj);
        table.row.add(newObj).draw();
        localStorage.setItem("newStock", JSON.stringify(newStock));
        $("#StockModal").modal("hide");
        resetSVal();
        // parts = [];
        $("#partTable").html(null);
        $("#partTable").append("<tbody></tbody");
      } else {
        newStock = JSON.parse(localStorage.getItem("newStock"));

        var flag;
        for (let i = 0; i < newStock.length; i++) {
          flag = false;
          if (stockName == newStock[i].stock) {
            flag = true;
            break;
          } else {
            flag = false;
          }
        }

        if (flag == false) {
          var newObj = {
            stock: stockName,
            date: dateM,
            stockStatus: Stockstatus,
            CreatedDate: today,
            Part: parts,
            user: user,
          };
          newStock.push(newObj);
          table.row.add(newObj).draw();
          localStorage.setItem("newStock", JSON.stringify(newStock));
          $("#StockModal").modal("hide");
          resetSVal();
          // parts = [];
          $("#partTable").html(null);
          $("#partTable").append("<tbody></tbody");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Duplicate Stock Name is not allowed",
            icon: "error",
          });
        }
      }
    } else {
      if (stockName == "") {
        Swal.fire({
          title: "Error!",
          text: "Add Stock Name",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Please add part",
          icon: "error",
        });
      }
    }
  }
}

// loading the documnet to show data in table

// show data
function showModaltable() {
  debugger;
  var html = "";

  html +=
    '<table cellpadding="5" class="table  table-border " cellspacing="0"  style="padding-left:50px;width:95%; margin-left:4%">';
  if (parts.length > 0) {
    html =
      "<thead><th class=text-start>Part Number</th><th class=text-start>Invoice#</th><th class=text-start>Ordered</th><th class=text-start>Notes</th><th class=text-center></th></thead><tbody id='root'>";
    parts.forEach(function (element, index) {
      html += "<tr>";
      html += "<td class=text-start text-white>" + parts[index].PartN + "</td>";
      html += "<td class=text-start >" + Date.now() + "</td>";
      html += "<td class=text-start > " + parts[index].Order + "</td>";
      html += "<td class=text-start >" + parts[index].Comments + "</td>";
      html +=
        '<td class=text-end><i  class= "fa-solid fa-x delete" style="cursor:pointer" onclick="deletePartTableRow(' +
        index +
        ' )"   ></i> </td>';
      html += "</tr>";
      html += "</tbody>";
      html += "</tbody></table>";
    });
  
  }
  $("#partTable").html(html);

  $("#PartModal").modal("hide");
  resetPartModal();
}

//reset
function resetSVal() {
  document.getElementById("stock").value = "";
  document.getElementById("pNum").value = "";
  document.getElementById("order").value = "";
  document.getElementById("floatingTextarea").value = "";
}

function resetPartModal() {
  document.getElementById("pNum").value = "";
  document.getElementById("order").value = "";
  document.getElementById("floatingTextarea").value = "";
}
// for search bar
$("#stock_search").on("keyup", function () {
  table.search(this.value).draw();
});

// daterangepicker
$(function () {
  $('input[name="ETA"]').daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format("YYYY"), 10),
    },
    function (start, end, label) {
      var years = moment().diff(start, "years");
    }
  );
});

//Edit
$("#stock_table").on("click", ".editor-edit", function () {
  debugger;
  IsEditing = true;
  $("#StockModal").modal("show");
  var tabledata = table.row($(this).parents("tr")).data();
  var indexRow = table.row($(this).parents("tr")).index();
  var newStockModal = JSON.parse(localStorage.getItem("newStock")) ;
  console.log(newStockModal[indexRow].Part[0]);
  document.getElementById("stock").value = newStockModal[indexRow].stock;
  document.getElementById("date").value = newStockModal[indexRow].date;
  $('input[name="btnradio"][value="' + tabledata.stockStatus + '"]').prop(
    "checked",
    true
  );
  parts = newStockModal[indexRow].Part;
  showModaltable();

  document.querySelector("#modalstock").onclick = function () {
    newStock = JSON.parse(localStorage.getItem("newStock"));
    var stockName = document.getElementById("stock").value;
    var flag;
    for (let i = 0; i < newStock.length; i++) {
      flag = false;
      if (stockName == newStock[i].stock) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }

    if (flag == false) {
      if (IsEditing) {
        debugger;
        var updatestock = (newStockModal[indexRow].stock =
          document.getElementById("stock").value);
        var updatedate = (newStockModal[indexRow].date =
          document.getElementById("date").value);

        Stockstatus = radioBtnValue();

        var newObj = {
          stock: updatestock,
          date: updatedate,
          stockStatus: Stockstatus,
          CreatedDate: today,
          Part: parts,
          user: user,
        };

        newStockModal[indexRow] = newObj;
        localStorage.setItem("newStock", JSON.stringify(newStockModal));
        $("#StockModal").modal("hide");
        table.row(indexRow).data(newObj).draw();
        // window.location.reload();
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Duplicate Stock Name is not allowed",
        icon: "error",
      });
    }
  };
});

// to check radio btn
function radioBtnValue() {
  var btnChecked;
  if (document.getElementById("btnradio1").checked) {
    btnChecked = document.getElementById("btnradio1").value;
  } else if (document.getElementById("btnradio2").checked) {
    btnChecked = document.getElementById("btnradio2").value;
  } else if (document.getElementById("btnradio3").checked) {
    btnChecked = document.getElementById("btnradio3").value;
  }
  return btnChecked;
}

function deletePartTableRow(index) {
  debugger;
  console.log(index);
  parts.splice(index, 1);
  console.log(parts);
  showModaltable();
}

function deleteMainTableRow(element) {
  var newStockModal = JSON.parse(localStorage.getItem("newStock"));

  var stockID = $(element).attr("data-stock-id");
  var StockIndex = newStockModal.findIndex((x) => x.stock == stockID);
  var PartIndex = $(element).attr("data-part-index");
  console.log("Part index", PartIndex);

  // var partLength = newStockModal[PartIndex].Part.length ;
  // console.log("length",newStockModal[PartIndex].Part.length)
  console.log("Stock index", StockIndex);

  newStockModal[StockIndex].Part.splice(PartIndex, 1);

  console.log(newStockModal);

  localStorage.setItem("newStock", JSON.stringify(newStockModal));

  var tr = $(element).closest("tr");
  tr.remove();
}

//active
var pathname = window.location.pathname.match(/[^\/]+$/)[0];

$(".nav-item a").each(function () {
  if ($(this).attr("href") == pathname) {
    $(this).addClass("active");
  }
});

//search cancel
const input = document.querySelector('input[type="search"]');
input.addEventListener("search", () => {
  table.search(input.value).draw();
  // console.log(`The term searched for was ${}`);
});
