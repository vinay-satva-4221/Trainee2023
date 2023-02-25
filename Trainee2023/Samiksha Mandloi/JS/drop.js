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
      $('#tblData').on('click', '.btn-edit', function () {
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

      $('#tblData').on('click', '.btn-delete', function () {
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
      $("#tblData").table2excel({
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
      debugger;
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
      debugger;
      if ($("#tblData tbody").children().children().length == 0) {
        $("#tblData tbody").append(emptyRow);
      }
    }

    // Function to set cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


    function loadDataFromLocal() {
      debugger;
      let localData = localStorage.getItem('localData') || cookieStorage.getItem('localData');
      if (localData) {
        $("#tblData tbody").html("");
        let localArray = JSON.parse(localData);
        let index = 1;
        localArray.forEach(element => {
            let dtr = "<tr class='custom-row'>";
            dtr = dtr + "<td>" + index + "</td>";
            dtr = dtr + "<td class='txtName' data-id= " + element.id + " >" + element.name + "</td>";
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
            $("#tblData tbody").append(dtr);
          index++;
        });
      }
      addEmptyRow();
    }



    function addDataToLocal() {
      debugger;
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
        localStorage.setItem('localData', JSON.stringify(arryObj));
        loadDataFromLocal();
      }
      clearForm();
    }

    function updateDataFromLocal() {
      debugger;
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
      debugger;
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

    function storeColor() {
        debugger
        // Get the selected color from the select box
        var colorSelect = document.getElementById("color");
        var selectedColor = colorSelect.options[colorSelect.selectedIndex].value;
    
        // Store the selected color in a cookie
        document.cookie = "selectedColor=" + selectedColor + "; path=/";
    
        // Update the background color of each row in the table
        var rows = document.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            rows[i].style.backgroundColor = selectedColor;
        }
    
        // Update the background color of the table header
        var header = document.getElementsByTagName("th")[0];
        header.style.backgroundColor = selectedColor;
    
        // Update the body background color
        document.body.style.backgroundColor = selectedColor;
    }
    