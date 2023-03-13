var counter = 1;
var AssignmentTable= [];

window.onload = () => {
  if (localStorage.getItem("loggUser") == null) {
    window.location.replace("LoginPage.html");
  }
};

/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  var table =
    '<table cellpadding="2" cellspacing="0" class="table border rounded">';
  table +=
    '<thead style="background-color:lightgrey;"><tr><th>#</th><th>Stock</th><th>Part</th><th>Action</th></thead> ';
  table += "<tbody>";
  if (d.AssignmentTable && d.AssignmentTable.length > 0) {
    for (var i = 0; i < d.AssignmentTable.length; i++) {
      if (d.AssignmentTable[i]) {

        table += "<tr>";
        table += "<td>" + "</td>";
        table += "<td>" + d.AssignmentTable[i].stockname + "</td>";
        // table += '<td>' + d.AssignmentTable[i].invoice + '</td>';
        table += "<td>" + d.AssignmentTable[i].stockpart + "</td>";
        table +=
          '<td><button class="btn delete-row"><i class="fa-solid fa-xmark"></i></button></td>';
        table += "</tr>";
      }
    }
  }
  table += "</tbody></table>";

  return table;
}

$(document).ready(function () {

  var assignmentdata = JSON.parse(localStorage.getItem("assignment"));

  var button = document.getElementById("newButton");

  var table = $("#assignmentTable").DataTable({
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
      {
        data: null,
        defaultContent: " ",
        className: "dt-control",
        orderable: false,
      },
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
            '<i class="fa fa-pencil edit-row mx-2 p-0"></i>' +
            '<i class="fa fa-trash history mx-3 p-0"></i>'
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

    AssignmentTable.push({
      stockname: stockname,
      invoice: invoice,
      stockpart: stockpart,
    });

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

    var activeuser = JSON.parse(localStorage.getItem("loggUser"));
    var username = activeuser[0].name;

    var currentDate = new Date();
    var options = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    var formattedDate = currentDate.toLocaleString("en-US", options).replace(/[^\d-/:]/g, "  ");

    var finaldata = {
      customer: customer,
      quickinvoice: quickinvoice,
      stockname: stockname,
      stockpart: stockpart,
      createdby: username,
      createdDate: formattedDate,
      AssignmentTable: AssignmentTable,
    };

    var assignmentData = JSON.parse(localStorage.getItem("assignment")) || [];
    console.log(assignmentData)

    assignmentData.push(finaldata);
    localStorage.setItem("assignment", JSON.stringify(assignmentData));
    table.row.add(assignmentData).draw();
    location.reload(true);
  });


  $("#assignmentTable tbody").on("click", ".edit-row", function () {
    
    isEditMode = true;
    var tr = $(this).closest("tr");
    // var row = table.row(tr);
    // var data = row.data(); 
    // Get the data from the row
    var data = table.row($(this).parents('tr')).data();
    var index = table.row($(this).parents('tr')).index();

    // Populate the edit form with the data
    $("#customer-select").val(data.customer);
    $("#invoice").val(data.quickinvoice);
    $("#stock_name").val(data.stockname);
    $("#select_parts").val(data.stockpart);

    var invoice = counter++;
    if (data.AssignmentTable && data.AssignmentTable.length > 0) {
      let dynamicTR = "<thead style=color:white;><tr><th>#</th><th>Stock</th><th>Part</th><th>Action</th></thead><tbody>";
      data.AssignmentTable.forEach(function (part) {
        dynamicTR += ("<tr>" + "<td>" + part.stockname + "</td>" + "<td>" + part.stockpart + "</td>" + 
          "<td class='text-end'><button type='button' class='btn-close DeleteParts' aria-label='Close'></button></td></tr>");
      });
      dynamicTR += "</tbody>";
      console.log(dynamicTR)
      $('#inner_table').html(dynamicTR);

    }

    AssignmentTable= data.AssignmentTable
    // Show the edit modal
    $("#assignmentModal").modal("show");



    // $("#save_outer").on("click", function () {
      
    //   var activeuser = JSON.parse(localStorage.getItem("loggUser"));
    //   console.log(activeuser);
    //   var username = activeuser;

    //   var currentDate = new Date();
    //   var options = {
    //     month: "2-digit",
    //     day: "2-digit",
    //     year: "numeric",
    //   };
    //   var formattedDate = currentDate
    //     .toLocaleDateString("en-US", options)
    //     .replace(/\D/g, "/");

    //   // Update the data of the selected row with the new values
    //   var newData = {
    //     name: $("#stock_name").val(),
    //     etaDate: $("#eta_date").val(),
    //     stocklocation: $('input[name="btnradio"]:checked').val(),
    //     note: $("#note").val(),
    //     createdby: username[0].name,
    //     createdDate: formattedDate,
    //     nestedData:nestedData,
    //   };
    //   var StockData = JSON.parse(localStorage.getItem("stock")) || [];
    //   StockData[index] = newData;
    //   console.log(JSON.parse(localStorage.getItem("stock")));
    //   localStorage.setItem("stock", JSON.stringify(StockData));
    //   $("#outerModal").modal("hide");
    //   location.reload(true);

    // });
    // //isEditMode = true; // set edit mode flag
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
