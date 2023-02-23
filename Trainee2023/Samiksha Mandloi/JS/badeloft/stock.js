var loginUser = JSON.parse(localStorage.getItem('loginuser'));
var username = loginUser.name;
document.getElementById("user").innerHTML = username;

var stockname = document.getElementById("stock_name").value;
var eta = document.getElementById("eta_date").value;
var partno = document.getElementById("npart_no").value;
var order = document.getElementById("nporder_no").value;
var notes = document.getElementById("nnotes_no").value;

function logout() {
  localStorage.removeItem("loginuser");
  location.replace("badeloft.html");
}


//  Add  New Stock

// function stocksave() {
//   debugger
//   var stockname = document.getElementById("stock_name").value;
//   var eta = document.getElementById("eta_date").value;
//   let getdata = localStorage.getItem('stockDetail');
//   let stockpar = JSON.parse(getdata);
//   let index = 1;

//   // stockpar.forEach(element => {
//   //   let dtr = "<tr>";
//   //   dtr = dtr + "<td>" + index + "</td>";
//   //   dtr = dtr + "<td class='txtprtno'>" + element.Parts[0].partno + "</td>";
//   //   dtr = dtr + "<td>" + invoice + "</td>";
//   //   dtr = dtr + "<td class='txtorder'" + element.Parts[1].order + "</td>";
//   //   dtr = dtr + "<td class='txtnotes'" + element.Parts[2].notes + "</td>";
//   //   dtr = dtr + "<td class='tdAction'><button class='btn btn-sm btn-dark btn-delete'>&#x2715;</button></td>";
//   //   dtr = dtr + "</tr>";

//   //   $("#parttable tbody").append(dtr);
//   //   index++;
//   // });

// }

function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>Part Number:</td>" +
    "<td>" +
    d.partno +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Order:</td>" +
    "<td>" +
    d.order +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Assign to:</td>" +
    "<td>And any further details here (images etc)...</td>" +
    "</tr>" +
    "</table>"
  );
}

var data = [
  {
    stockName: stockname,
    eta: eta,
    location: "",
    created_by: username,
    created_date: eta,
    notes: "",
    action: "",
  },
  {},
  // Add more data objects here...
];

var table = $("#example").DataTable({
  data: data,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: null,
      defaultContent: "",
    },
    { data: "stockName" },
    { data: "eta" },
    { data: "location" },
    { data: "created_by" },
    { data: "created_date" },
    {
      data: "notes",
      data: "action",
      // render: function(data, type, row, meta) {
      //  return data + ' <button type="button" class="alert alert-primary p-1"><i class="fa fa-check">Paid</i></button>';
      // }
    },
  ],
  order: [[1, "asc"]],
});

// Add event listener for opening and closing details
$("#example tbody").on("click", "td.dt-control", function () {
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

// function partNumber() {
//   var stockname = document.getElementById("stock_name").value;
//   var eta = document.getElementById("eta_date").value;
//   var partno = document.getElementById("npart_no").value;
//   var order = document.getElementById("nporder_no").value;
//   var notes = document.getElementById("nnotes_no").value;
//   // Get the input values from the user
//   var invoice = 15001;

//   // Get the table body and create a new row
//   >
//          <td class='txtnotes'>${notes}</td>
//          <td class='tdAction'><button class'=btn btn-sm btn-dark btn-delete'>&#x2715;</button></td>
//        `;

//   // Add the new row to the tablelet tableBody = document.querySelector("#parttable tbody");
//   let newRow = document.createElement("tr");

//   // Set the contents of the new row using the input values
//   newRow.innerHTML = `
//          <td class='txtprtno'>${partno}</td>
//          <td>${invoice++}</td>
//          <td class='txtorder'>${order}</td
//   //  invoice++;
//   tableBody.appendChild(newRow);
//   stocksave();
//   local();
// }

$("#parttable").on("click", ".btn", function () {
  $(this).closest("tr").remove();
});

// function local() {
//   debugger;
//   var stockname = document.getElementById("stock_name").value;
//   var eta = document.getElementById("eta_date").value;
//   var partno = document.getElementById("npart_no").value;
//   var order = document.getElementById("nporder_no").value;
//   var notes = document.getElementById("nnotes_no").value;
//   let stockDetail = {
//     stockname: stockname,
//     eta: eta,
//     Parts: [
//       {
//         partno: partno,
//         order: order,
//         notes: notes
//       }
//     ]
//   };
//   var stock = localStorage.setItem('stockDetail', JSON.stringify(stockDetail));


// }

function addStock(){
  debugger;
  let stockArray = [];
 let stocknoDetails = localStorage.getItem('stockDetail');
  let stockName = document.getElementById("stock_name").value;
   let eta = document.getElementById("eta_date").value;
   var loginUser = JSON.parse(localStorage.getItem('loginuser'));
    var username = loginUser.name;

   let stockDetails ={
    stockName:stockName,
    etaDate:eta,
    status:"",
    createdBy: username,
    itemDetails:stockItemDetails
  } //set in local storage.
  stockArray.push(stockDetails);

  localStorage.setItem('stockDetail', JSON.stringify(stockArray));


}


let stockItemDetails = [];

function addItemDetails() {
  debugger
  let partNo = document.getElementById("npart_no").value;
  let order = document.getElementById("nporder_no").value;
  let notes = document.getElementById("nnotes_no").value;
  let invoice = 15001;

  let stockDetail11 = {
        partno: partNo,
        order: order,
        notes: notes
      }
      stockItemDetails.push(stockDetail11);


      let dtr = "<tr>";
      // dtr = dtr + "<td>" + index + "</td>";
      dtr = dtr + "<td class='txtName' data-id= " + stockDetail11.partno + " >" + stockDetail11.partno + "</td>";
      dtr = dtr + "<td class='txtMobile' >" + invoice +  "</td>";
      dtr = dtr + "<td class='txtMobile' >" + stockDetail11.order +  "</td>";
      dtr = dtr + "<td class='txtEmail' >" + stockDetail11.notes +  "</td>";
      dtr = dtr +"<td class='tdAction'><button class'=btn btn-sm btn-dark btn-delete'>&#x2715;</button></td>";  
      dtr = dtr + "</tr>";
      $("#parttable tbody").append(dtr);
      invoice++;

 
    // stockItemDetails.push(stockDetail11);
    // console.log(stockItemDetails);

}



