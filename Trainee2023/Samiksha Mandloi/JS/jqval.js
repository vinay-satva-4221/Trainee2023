$(document).ready(function () {
    $.validator.addMethod('validname', function (value) {
        return /^[a-zA-Z\s]+$/.test(value)
    });
     $("#addrow").click(function(){
        $("#basic_form").valid();
    });
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
            }

        }
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

    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States, function (i, option) {
        $("#State").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#State").change(function () {
        var CityJsonData = JSON.parse(CityData);
        $("#City").html('');
        $.each(CityJsonData.Citys, function (i, option) {
            if ($("#State").val() == option.StateId) {
                $("#City").append($('<option></option>').val(option.Id).html(option.Name));
            }
        })

        

    });



$("#addrow").on("click", function () {
    debugger
    var name = $("#name").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var clgname = $("#clgname").val();
    var cgpa = $("#cgpa").val();
    var brnchname = $("#brnchname").val();
    var State = $("#State").val();
    var City = $("#City").val();
    var zipcode = $("#zipcode").val();
    var daterange = $("#daterange").val();
    // var count = $("#table tr").length;
    if (name != "" && mobile != "" && email != "" && clgname != "" && cgpa != "" && brnchname != "" && State != "" && City != "" && zipcode != "" && daterange != "")
      {
        $("#table ").append(
            '<tr class="child"><td>'+
            //  count +
            // "</td><td>" +
            name +
            "</td><td>" +
            mobile +
            "</td><td>" +
            email +
            "</td><td>" +
            clgname +
            "</td><td>" +
            cgpa +
            "</td><td>" +
            brnchname +
            "</td><td>" +
            State +
            "</td><td>" +
            City +
            "</td><td>" +
            zipcode +
            "</td><td>" +
            daterange +
            '</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-warning">Edit</a></td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>'
        )
      }
      var StudentDetails = '{ '+
      '"name":'+name+',"mobile":'+mobile+',"email":'+email+', '+
      '"clgname":'+clgname+',"cgpa":'+cgpa+',"brnchname":'+brnchname+', '+
      '"State":'+State+',"City":'+City+',"zipcode":'+zipcode+',"daterange":'+daterange+' '+
      '}'

      var studentData = localStorage.getItem("studentData");
                //var studentData = sessionStorage.getItem("studentData");
                if(studentData!=null)
                {
                    var studentJsonData = JSON.parse(studentData);
                    studentJsonData.students.push(StudentDetails);
                    localStorage.setItem("studentData",JSON.stringify(studentJsonData));
                    //sessionStorage.setItem("studentData", JSON.stringify(studentData));
                }
                else{
                    var studentData = JSON.parse('{"students": []}');
                    studentData.students.push(StudentDetails);
                    localStorage.setItem("studentData",JSON.stringify(studentData));
                    //sessionStorage.setItem("studentData", JSON.stringify(studentData));
                }
});


});



// $(document).ready (function () {
//     $('#first_form').validate (function (e) {
//         e.preventDefault();
//         var name = $("#name").val();
//         var mobile = $("#mobile").val();
//         var email = $("#email").val();
//         var cgpa = $("#cgpa").val();
//         var state = $("#state").val();
//         var city = $("#city").val();
//         var zipcode = $("#zipcode").val();
//         $(".error").show("all fields are required");
//         // name
//         if (name.length < 1) {
//             $('#name').after('<span class="error">This field is required</span>');
//           } else {
//             var regEx = (/^[a-zA-Z]+$/);
//             var validName = regEx.test(name);
//             if (!validName) {
//               $('#name').after('<span class="error">Enter a valid Name</span>');
//             }
//           }
//         //   mobile
//         if (mobile.length < 10) {
//             $('#mobile').after('<span class="error">Max 10 digits is required</span>');
//           } else {
//             var regEx = (/^[0-9]{10}+$/);
//             var validMobile = regEx.test(mobile);
//             if (!validMobile) {
//               $('#mobile').after('<span class="error">Enter a valid Mobile number</span>');
//             }
//           }
//         //    email
//         if (email.length < 1) {
//             $('#email').after('<span class="error">This field is required</span>');
//           } else {
//             var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
//             var validEmail = regEx.test(email);
//             if (!validEmail) {
//               $('#email').after('<span class="error">Enter a valid email</span>');
//             }
//           }
//         //   collage Name
//         if (clgname.length < 1) {
//             $('#clgname').after('<span class="error">This field is required</span>');
//           }
//             // cgpa
//             if (cgpa.length < 1) {
//                 $('#cgpa').after('<span class="error">This field is required</span>');
//               } else {
//                 var regEx =(/^[0-9][.][0-9]$/);
//                 var validcgpa = regEx.test(cgpa);
//                 if (!validcgpa) {
//                   $('#cgpa').after('<span class="error">Enter a valid cgpa</span>');
//                 }
//               }


//     });
// });


// $(document).ready(function () {
//     $(function () {
//         $('input[name="birthday"]').daterangepicker({
//             singleDatePicker: true,
//             showDropdowns: true,
//             minYear: 1901,
//             maxYear: parseInt(moment().format('YYYY'), 10)
//         }, function (start, end, label) {
//             years = moment().diff(start, 'years');
//             console.log("You are " + years + " years old!");
//             return validAge(years);
//         });
//     });
// });

// $("#tableBody").html('<tr><td>1</td><td></td><td><input id="d2" class="border-0" disabled/></td><td><input id="d3" class="border-0" disabled/></td><td><input id="d4" class="border-0" disabled/></td><td><input id="d5" class="border-0" disabled/></td><td><input id="d6" class="border-0" disabled/></td><td><input id="d7" class="border-0" disabled/></td><td><input id="d8" class="border-0" disabled/></td><td><input id="d9" class="border-0" disabled/></td><td><input id="d10" class="border-0" disabled/></td><td><input id="d11" class="border-0" disabled/></td><td><button class="btn btn-danger">Delete</button></td><td><button class="btn btn-success">Edit</button></td></tr>');