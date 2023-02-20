var emptyRow = "<tr><td colspan='12' class='text-center'> No Records Available</td></tr>";
const CityData = '{"Citys":[' +
        '{"StateId":"Madhya Pradesh","Id":"Indore","Name":"Indore"},' +
        '{"StateId":"Madhya Pradesh","Id":"Bhopal","Name":"Bhopal"},' +
        '{"StateId":"Rajasthan","Id":"Sirohi","Name":"Sirohi"},' +
        '{"StateId":"Rajasthan","Id":"Udaipur","Name":"Udaipur"},' +
        '{"StateId":"Rajasthan","Id":"Jaisalmer","Name":"Jaisalmer"},' +
        '{"StateId":"Gujarat","Id":"Ahmedabad","Name":"Ahmedabad"},' +
        '{"StateId":"Gujarat","Id":"Vadodara","Name":"Vadodara"},' +
        '{"StateId":"Gujarat","Id":"Surat","Name":"Surat"},' +
        '{"StateId":"Punjab","Id":"Ludhiana","Name":"Ludhiana"},' +
        '{"StateId":"Punjab","Id":"Amritsar","Name":"Amritsar"},' +
        '{"StateId":"Punjab","Id":"Patiala","Name":"Patiala"}]}';

    const StateData = '{"States":[' +
        '{"Id":"Madhya Pradesh","Name":"Madhya Pradesh"},' +
        '{"Id":"Rajasthan","Name":"Rajasthan"},' +
        '{"Id":"Gujarat","Name":"Gujarat"},' +
        '{"Id":"Punjab","Name":"Punjab"}]}';
    $(document).ready(function () {
        $.validator.addMethod('validname', function (value) {
            return /^[a-zA-Z\s]+$/.test(value)
        });
      loadDataFromLocal();
      $('#dataTable').on('click', '.btn-edit', function () {
        debugger;
        const name = $(this).parent().parent().find(".txtName").html();  //parent is complete tr & td]
        const mobile = $(this).parent().parent().find(".txtMobile").html();
        const email = $(this).parent().parent().find(".txtEmail").html();
        const clgname = $(this).parent().parent().find(".txtCollegeName").html();
        const cgpa = $(this).parent().parent().find(".txtCGPA").html();
        const brnchname = $(this).parent().parent().find(".txtbrnchname").html();
        const State = $(this).parent().parent().find(".txtState").html();
        const City = $(this).parent().parent().find(".txtCity").html();
        const zipcode = $(this).parent().parent().find(".txtzipcode").html();
        const color = $(this).parent().parent().find(".txtcolor").html();
 
        const daterange = $(this).parent().parent().find(".txtdaterange").html();
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        $("#name").val(name);
        $("#mobile").val(mobile);
        $("#email").val(email);
        $("#clgname").val(clgname);
        $("#cgpa").val(cgpa);
        $("#brnchname").val(brnchname);
        $("#State").val(State);
        $("#City").val(City);
        $("#zipcode").val(zipcode);
        $("#color").val(color);
        $("#daterange").val(daterange);
        $("#txtId").val(id);
        $("#btnSave").text("Update");
      });
      $('#btnSave').on('click', function() {
        $("#basic_form").valid();
    });

      $('#dataTable').on('click', '.btn-delete', function () {
        debugger;
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        deleteDataFromLocal(id);
        swal({ 
          title: "Delete", 
          text: "deleted successfully", 
          type: "success" 
      }); 
      });

      $("#btnSave").click(function () {
        
        var isFormValid =  $("#basic_form").valid();
        if(isFormValid)
        {
        if ($("#txtId").val() == '') {
          addDataToLocal();
        } else {
          updateDataFromLocal();
        }
    }
    else  {} 
    swal({ 
      title: "Save", 
      text: "Your data has been saved", 
      type: "success" 
  }); 
      });



      $("#btnClear").click(function () {
        debugger;
        clearForm();
      });

    //   $(function () {
    //     $("#btnExport").click(function () {
    //         $("#tblData").table2excel({
    //           exclude: ".noExl",
    //           name: "Excel Document Name",
    //           filename: "table2excel",
    //           fileext: ".xls",
    //           exclude_img: true,
    //           exclude_links: true,
    //           exclude_inputs: true
    //         });
    //     });
    // });
      
    $("#basic_form").validate({

        rules: {
            name: {
                required: true,
                //   Text: true,
                validname: true
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            clgname: {
                required: true
            },
            cgpa: {
                required: true,
                number: true,
                minlength: 2
            },
            zipcode: {
                required: true
            },
            City: {
                required: true
            },
            State: {
                required: true
            }
        },

        messages: {
            name: {

                required: "Enter your Name",
                validname: "please enter only characters"
            },
            mobile: {
                required: "Enter your mobile number",
                minlength: "please enter 10 digits",
                maxlenght: "please enter 10 digits",
            },
            email: {
                required: "Enter your email",
                email: "Please enter valid email with @"
            },
            clgname: {
                required: "Enter your collage Name",
            },
            cgpa: {
                required: "Enter your cgpa",
                minlength: "Min length should be atleast 2"
            },
            brnchname: {
                required: "Enter your branch name "
            }, City: {
                required: "Enter City "
            },

        },
        
    });
      // for image
      $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    //   for study year
    $(function () {
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
        }, function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    });
    var StateJsonData = JSON.parse(StateData);
    $("#State").append('<option value="0">Select State</option>');
    $.each(StateJsonData.States, function (i, option) {
        
        $("#State").append($('<option></option>').val(option.Id).html(option.Name));
    });
    $("#State").change(function () {
        var CityJsonData = JSON.parse(CityData);
        $("#City").html('');
        $.each(CityJsonData.Citys, function (i, option) {
            if ($("#State").val() == option.StateId) {
                $("#City").append($('<option></option>').val(option.Id).html(option.Name));
            }
        });
    });
       
    $("#btnExport").click(function() {
      $("#dataTable").table2excel({
        exclude: ".noExl",
        name: "Excel Document Name",
        filename: "table2excel",
        fileext: ".xls",
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true
      });
      swal({ 
        title: "Download this File", 
        text: "Downloaded successfully", 
        type: "success" 
    }); 
    });
  });
  

    function clearForm() {
      // debugger;
      $("#name").val("");
        $("#mobile").val("");
        $("#email").val("");
        $("#clgname").val("");
        $("#cgpa").val("");
        $("#brnchname").val("");
        $("#State").val("");
        $("#City").val("");
        $("#zipcode").val("");
        $("#color").val("");
        $("#daterange").val("");
        $("#btnSave").text("Add");
    }

    function addEmptyRow() {
      // debugger;
      if ($("#dataTable tbody").children().children().length == 0) {
        $("#dataTable tbody").append(emptyRow);
      }
    }

    function loadDataFromLocal() {
      // debugger;
      let localData = localStorage.getItem('localData') || cookieStorage.getItem('localData');
      if (localData) {
        $("#dataTable tbody").html("");
        let localArray = JSON.parse(localData);
        let index = 1;
        localArray.forEach(element => {
            let dtr = "<tr id='custom-row'>";
            dtr = dtr + "<td >" + index + "</td>";
            dtr = dtr + "<td class='txtName'  data-id= " + element.id + " >" + element.name + "</td>";
            dtr = dtr + "<td class='txtMobile' >" + element.mobile +  "</td>";
            dtr = dtr + "<td class='txtEmail' >" + element.email +  "</td>";
            dtr = dtr + "<td class='txtCollegeName' >" + element.clgname +  "</td>";
            dtr = dtr + "<td class='txtCGPA' >" + element.cgpa +  "</td>";
            dtr = dtr + "<td class='txtbrnchname' >" + element.brnchname +  "</td>";
            dtr = dtr + "<td class='txtState' >" + element.State +  "</td>";
            dtr = dtr + "<td class='txtCity' >" + element.City +  "</td>";
            dtr = dtr + "<td class='txtzipcode' >" + element.zipcode +  "</td>";
            dtr = dtr + "<td class='txtcolor' >" + element.color +  "</td>";
            dtr = dtr + "<td class='txtdaterange' >" + element.daterange +  "</td>";
            dtr = dtr + "<td class='tdAction'><button class='btn btn-sm btn-success btn-edit' type='button'> Edit </button><button class='btn btn-sm btn-danger btn-delete' > Delete </button></td>";
            dtr = dtr + "</tr>";
            $("#dataTable tbody").append(dtr);
          index++;
        });
      }
      addEmptyRow();
    }

    function addDataToLocal() {
      // debugger;
      let localData = localStorage.getItem('localData');
      if (localData) {
        let localArray = JSON.parse(localData);
        const obj = {
            id: localArray.length + 1,
            name: $('#name').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            clgname: $('#clgname').val(),
            cgpa: $('#cgpa').val(),
            brnchname: $('#brnchname').val(),
            State: $('#State').val(),
            
            City: $('#City').val(),
            zipcode: $('#zipcode').val(),
            color: $('#color').val(),
            daterange: $('#daterange').val()
        };
        localArray.push(obj);
        document.cookie = "selectedColor=" + color;
        localStorage.setItem('localData', JSON.stringify(localArray));
        loadDataFromLocal();
      } else {
        const arryObj = [];
        const obj = {
            id: 1,
            name: $('#name').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            clgname: $('#clgname').val(),
            cgpa: $('#cgpa').val(),
            brnchname: $('#brnchname').val(),
            State: $('#State').val(),
            City: $('#City').val(),
            zipcode: $('#zipcode').val(),
            color: $('#color').val(),
            daterange: $('#daterange').val()
        };
        arryObj.push(obj);
        document.cookie = "selectedColor=" + color;

        localStorage.setItem('localData', JSON.stringify(arryObj));
        loadDataFromLocal();
      }
      clearForm();
    }

    function updateDataFromLocal() {
      // debugger;
      let localData = localStorage.getItem('localData');
      let localArray = JSON.parse(localData);
      const oldRecord = localArray.find(m => m.id == $("#txtId").val());
      oldRecord.name = $("#name").val();
        oldRecord.mobile = $("#mobile").val();
        oldRecord.email = $("#email").val();
        oldRecord.clgname = $("#clgname").val();
        oldRecord.cgpa = $("#cgpa").val();
        oldRecord.brnchname = $("#brnchname").val();
        oldRecord.State = $("#State").val();
        oldRecord.City = $("#City").val();
        oldRecord.zipcode = $("#zipcode").val();
        oldRecord.color = $("#color").val();
        oldRecord.daterange = $("#daterange").val();
      localStorage.setItem('localData', JSON.stringify(localArray));
      loadDataFromLocal();
      clearForm();
    }

    function deleteDataFromLocal(id) {
      // debugger;
      let localData = localStorage.getItem('localData');
      let localArray = JSON.parse(localData);
      let i = 0;
      while (i < localArray.length) {
        if (localArray[i].id === Number(id)) {
          localArray.splice(i, 1);
        } else {
          ++i;
        }
      }
      localStorage.setItem('localData', JSON.stringify(localArray));
      loadDataFromLocal();
    }

        // function to handle form submission
        function storeData() {
            debugger
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;
      var clgname = document.getElementById("clgname").value;
      var cgpa = document.getElementById("cgpa").value;
      var branchname = document.getElementById("brnchname").value;
      var State = document.getElementById("State").value;
      var City = document.getElementById("City").value;
      var zipcode = document.getElementById("zipcode").value;
      var date = document.getElementById("daterange").value;
      var color = document.getElementById("color").value;
    
      // Get existing data from localStorage or create an empty object
      var data = JSON.parse(localStorage.getItem("formData")) || {};
    
      // Add the new data to the object
      data[name] = {email: email, color: color, mobile: mobile, clgname: clgname, cgpa: cgpa,branchname: branchname, State: State, City: City, zipcode: zipcode, date: date};
    
      // Store the updated object in localStorage
      localStorage.setItem("formData", JSON.stringify(data));
    
      // Add the color value to a cookie
      document.cookie = name + "=" + color;
    
      // Update the table
      updateTable();
    }
    
    
    function updateTable() {
        debugger
      var tableBody = document.querySelector("#dataTable tbody");
      tableBody.innerHTML = "";
    
      // Get the data from localStorage
      var data = JSON.parse(localStorage.getItem("formData"));
    
      // Add a row to the table for each entry in the data object
      for (var name in data) {
        var row = document.createElement("tr");
    
        var nameCell = document.createElement("td");
        nameCell.textContent = name;
        row.appendChild(nameCell);
    
        var emailCell = document.createElement("td");
        emailCell.textContent = data[name].email;
        row.appendChild(emailCell);

        
        var mobileCell = document.createElement("td");
        mobileCell.textContent = data[name].mobile;
        row.appendChild(mobileCell);

        
        var clgnameCell = document.createElement("td");
        clgnameCell.textContent = data[name].clgname;
        row.appendChild(clgnameCell);

        
        var cgpaCell = document.createElement("td");
        cgpaCell.textContent = data[name].cgpa;
        row.appendChild(cgpaCell);

        
        var branchnameCell = document.createElement("td");
        branchnameCell.textContent = data[name].branchname;
        row.appendChild(branchnameCell);

        
        var StateCell = document.createElement("td");
        StateCell.textContent = data[name].State;
        row.appendChild(StateCell);

        
        var CityCell = document.createElement("td");
        CityCell.textContent = data[name].City;
        row.appendChild(CityCell);

        
        var zipcodeCell = document.createElement("td");
        zipcodeCell.textContent = data[name].zipcode;
        row.appendChild(zipcodeCell);

        
        var dateCell = document.createElement("td");
        dateCell.textContent = data[name].date;
        row.appendChild(dateCell);

        

    
        var colorCell = document.createElement("td");
        colorCell.textContent = data[name].color;
        row.style.backgroundColor = data[name].color;
        document.body.style.backgroundColor = data[name].color;
        row.appendChild(colorCell);
    
        tableBody.appendChild(row);
      }
    }
    
    // Call updateTable when the page loads to display any existing data
    updateTable();

    
    
    
    
    