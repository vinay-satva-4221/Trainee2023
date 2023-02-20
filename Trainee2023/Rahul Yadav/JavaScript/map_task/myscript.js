
var studentData = new Map()
$(document).ready(function () {

    $.validator.addMethod("validname", function (value) {
        return /^[a-zA-Z\s]+$/.test(value);
    });
    $("#addrow").click(function () {
        $("#basic_form").valid();
    });
    $("#basic_form").validate({
        rules: {
            name: {
                required: true,
                validname: true,
            },
            mobile: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },

            zipcode: {
                required: true,
            },
        },

        messages: {
            name: {
                required: "Enter your Name",
                validname: "please enter only characters",
            },
            mobile: {
                required: "Enter your mobile number",
            },
            email: {
                required: "Enter your email",
                email: "Please enter valid email with @",
            },
        },
    });


    $("#addrow").click(function () {

        let dataId = $("#dataId").val();
        let name = $("#name").val();
        let mobile = $("#mobile").val();
        let email = $("#email").val();
        let zip = $("#zipcode").val();

        var detail = {
            Name: name,
            Mobile: mobile,
            Email: email,
            Zip: zip

        };
        studentData.set(studentData.size + 1, JSON.stringify(detail));
        var html = "";
        for (let i = 1; i <= studentData.size; i++) {
            var detaillist = studentData.get(i);
            let data = JSON.parse(detaillist);
            html =
                html +
                `<tr >
                <td>${data.Name}</td>
                <td>${data.Mobile}</td>
                <td>${data.Email}</td>
                <td>${data.Zip}</td>
                <td nowrap><a href="javascript:void(0);" class="remCF1 btn btn-danger border" onclick="deletedata(${i})" >Delete</a><a href="javascript:void(0);" class="remCF1 btn btn-warning" onclick="editData(${i})" >Edit</a></td>
                <tr>`;

        }
        document.getElementById("root").innerHTML = html;
        console.log(studentData)
        $("#basic_form")[0].reset();
    });

});



////////edit ✔👍👍✔

function editData(i) {
    let editData = JSON.parse(studentData.get(i));

    document.getElementById("name").value = editData.Name;
    document.getElementById("mobile").value = editData.Mobile;
    document.getElementById("email").value = editData.Email;
    document.getElementById("zipcode").value = editData.Zip;


    $("#save").css('display', 'block')
    $("#addrow").css("display", "none");



    document.querySelector("#save").onclick = function () {
        var updateName = (editData.Name = $("#name").val());
        var updateMobile = (editData.Mobile = $("#mobile").val());
        var updateEmail = (editData.Email = $("#email").val());
        var updateZip = (editData.Zip = $("#zipcode").val());

        var detail = {
            Name: updateName,
            Mobile: updateMobile,
            Email: updateEmail,
            Zip: updateZip

        };

        studentData.set((i), JSON.stringify(detail));
        var html = "";
        for (let i = 1; i <= studentData.size; i++) {
            var detaillist = studentData.get(i);
            let data = JSON.parse(detaillist);
            html =
                html +
                `<tr >
                <td>${data.Name}</td>
                <td>${data.Mobile}</td>
                <td>${data.Email}</td>
                <td>${data.Zip}</td>
                <td nowrap><a href="javascript:void(0);" class="remCF1 btn btn-danger border" onclick="deletedata(${i})">Delete</a><a href="javascript:void(0);" class="remCF1 btn btn-warning" onclick="editData(${i})" >Edit</a></td>
                <tr>`;

        }
        document.getElementById("root").innerHTML = html;
        console.log(studentData)
        $("#basic_form")[0].reset();
        $("#save").css('display', 'none')
        $("#addrow").css("display", "block");

    }
}
      //delete done 👍👍

function deletedata(i) {
    let deletedata = i;
    for (let i = 1; i <= studentData.size; i++) {
        if (i==deletedata) {
            studentData.delete(deletedata);
            console.log(studentData)
        }
        console.log(deletedata)
    }
    document.getElementById("myTable").deleteRow(i);


}