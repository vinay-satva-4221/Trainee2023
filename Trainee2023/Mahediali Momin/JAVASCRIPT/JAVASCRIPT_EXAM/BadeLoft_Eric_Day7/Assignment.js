var counter = 1;

window.onload = () => {
  if (localStorage.getItem("loggUser") == null) {
    window.location.replace("LoginPage.html");
  }
};

/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>Full name:</td>" +
    "<td>" +
    d.name +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extension number:</td>" +
    "<td>" +
    d.extn +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extra info:</td>" +
    "<td>And any further details here (images etc)...</td>" +
    "</tr>" +
    "</table>"
  );
}

$(document).ready(function () {

  var assignmentdata = JSON.parse(localStorage.getItem("assignment"));

  var button = document.getElementById("newButton");

var table =  $("#assignmentTable").DataTable({
    // paging: true,
    // dom: '<"toolbar">frtip',
    // bFilter: true,
    bInfo: true,
    fnInitComplete: function () {
      $("#assignmentTable_length").html("<h5><strong>Assignment</strong></h5>");
      $("#assignmentTable_filter").prepend(button);
    },
    data: assignmentdata,
    columns: [
      { data: "quickinvoice", title: "QB Invoice#", sortable: false },
      { data: "customer", title: "Name", sortable: false },
      { data: "createdby", title: "Created By", sortable: false },
      { data: "createdDate", title: "Created Date", sortable: false },
      {
        data: "Action",
        title: "Action",
        className: "text-end",
        render: function (data, type, row) {
          return (
            '<i class="bi bi-pencil-fill edit-row mx-2 p-0"></i>' +
            '<i class="bi bi-trash3-fill history mx-3 p-0"></i>'
          );
        },
      },

    ],

    columnDefs: [
      {
        // targets: [1,2,3,4,5,6,7,8],
        // className: 'text-left',
        defaultContent: "-",
        targets: "_all",
      },
    ],
    language: {
      search: "_INPUT_",
      searchPlaceholder: "Search here...",
      paginate: {
        previous: "<",
        next: ">",
      },
    },

  });


  // Dependent Dropdown
  const List = [
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
    $("#customer-select").change(function () {
      $("#invoice").html("<option selected disabled value=''>Choose...</option>");
      let Lists = List.filter((e) => e.Customer == $("#customer-select").val());

      Lists.forEach((e) => {
        const option =
          "<option val='" + e.Invoice + "'> " + e.Invoice + "</option>";
        $("#invoice").append(option);
      });
    });
  });




  var stock = JSON.parse(localStorage.getItem('stock'));
  var selectOptions = '';
  for (i = 0; i < stock.length; i++) {

    selectOptions += '<option value="' + stock[i].name + '">' + stock[i].name + '</option>';
  }
  $("#stock_name").append(selectOptions).on('change', function () {

    var selected = $(this).find('option:selected').val();

    //$("#parts").html("<option selected disabled>Choose parts</option>");
    const parts = stock.find(m => m.name == selected).nestedData;
    console.log(parts)
    $("#select_parts").html("");
    parts.forEach(element => {

      const option = "<option val='" + element.partnum + "'>" + element.partnum + "</option>";
      $("#select_parts").append(option);
    });
  });

  

  $("#add_parts").on("click", function () {
    var invoice = counter++;
    var stockname = $("#stock_name").val();
    var stockpart = $("#select_parts").val();

    var newRow = $("<tr>");
    newRow.append("<td>" + invoice + "</td>");
    newRow.append("<td>" + stockname + "</td>");
    newRow.append("<td>" + stockpart + "</td>");
    newRow.append(
      '<td><button class="btn delete-row"><i class="fa-solid fa-xmark"></i></button></td>'
    );
    $("#inner_table tbody").append(newRow);
  });


  $("#savedata").on("click", function () {
    debugger
    // document.getElementById("addstockform").reset();

    var customer = $("#customer-select").val();
    var quickinvoice = $("#invoice").val();
    var stockname = $("#stock_name").val();
    var stockpart = $("#select_parts").val();
    

    // // localStorage.setItem("assignment", JSON.stringify(assignmentData))
    // // Perform validation checks here
    
    var activeuser = JSON.parse(localStorage.getItem("loggUser"));
    var username = activeuser[0].name;

    var currentDate = new Date();
    var options = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    var formattedDate = currentDate
      .toLocaleDateString("en-US", options)
      .replace(/\D/g, "/");

    var finaldata = {
      customer: customer,
      quickinvoice: quickinvoice,
      stockname: stockname,
      stockpart: stockpart,
      createdby: username[0].name,
      createdDate: formattedDate, 
    };


    var assignmentData = JSON.parse(localStorage.getItem("assignment")) || [];
    console.log(assignmentData)

    assignmentData.push(finaldata);
    localStorage.setItem("assignment", JSON.stringify(assignmentData));
    table.row.add(assignmentData).draw();
    location.reload(true);
  });



//$(document).on('click','#savedata',function(){


  
  //debugger  
    // document.getElementById("addstockform").reset();

    // var customer = $("#customer-select").val();
    // var quickinvoice = $("#invoice").val();
    // var stockname = $("#stock_name").val();
    // var stockpart = $("#select_parts").val();
    

    // // localStorage.setItem("assignment", JSON.stringify(assignmentData))
    // // Perform validation checks here
    
    // var activeuser = JSON.parse(localStorage.getItem("loggUser"));
    // var username = activeuser[0].name;

    // var currentDate = new Date();
    // var options = {
    //   month: "2-digit",
    //   day: "2-digit",
    //   year: "numeric",
    // };
    // var formattedDate = currentDate
    //   .toLocaleDateString("en-US", options)
    //   .replace(/\D/g, "/");

    // var finaldata = {
    //   customer: customer,
    //   quickinvoice: quickinvoice,
    //   stockname: stockname,
    //   stockpart: stockpart,
    //   createdby: username[0].name,
    //   createdDate: formattedDate, 
    // };


    // var assignmentData = JSON.parse(localStorage.getItem("assignment")) || [];
    // console.log(assignmentData)

    // assignmentData.push(finaldata);
    // localStorage.setItem("assignment", JSON.stringify(assignmentData));
    // table.row.add(assignmentData).draw();
    // location.reload(true);
  
//});







  // Add event listener for opening and closing details
  $("#assignmentTable tbody").on("click", "td.dt-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });

  $('.js-example-basic-multiple').select2();
});



//delete row in outer_modal table
$("#inner_table tbody").on("click", ".delete-row", function () {
  $(this).closest("tr").remove();
});


$(document).ready(function () {
  var user = JSON.parse(localStorage.getItem("loggUser"));
  console.log("user", user);
  $("#Uname").html(user[0].name);
});
function logout() {
  window.location.replace("LoginPage.html");
  localStorage.clear();
}
