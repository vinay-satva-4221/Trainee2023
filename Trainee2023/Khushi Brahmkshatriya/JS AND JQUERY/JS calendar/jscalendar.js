document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        editable: true,
        eventResourceEditable: true,
        eventClick: function (info) {
            SweetAlertPopup(info);
        },
    });
    calendar.render();

    calendar.on("dateClick", function (info) {
        $("#myModel").modal("toggle");
        $('#name').val('');
        $('#num').val('');
        $('#fcolor').val('');


        document.getElementById("saveData").onclick = function () {
            var inp = document.getElementById("name").value;
            var inp1 = document.getElementById("num").value;
            var inp2 = document.getElementById("fcolor").value;
            
            var date = info.dateStr;
            enterDetails(inp,inp1,inp2);
            var check = date.includes("+");
            var tittle = inp + " " + inp1;

            if (inp != "" && inp1 != "") {
                if (check) {
                    calendar.addEvent({
                        title: tittle,
                        start: date,
                        allDay: false,
                        color: inp2,
                    });

                } else {
                    calendar.addEvent({
                        title: tittle,
                        start: date,
                        allDay: true,
                        color: inp2,
                    });
                }
            }
        };
    });

    calendar.render();
});

function SweetAlertPopup(info) {
    console.log(info);
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Edit",
        denyButtonText: "Delete",
        customClass: {
            actions: "my-actions",
            cancelButton: "order-3 right-gap",
            confirmButton: "order-1",
            denyButton: "order-2",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            $("#myModel").modal("toggle");

            let value = info.event.title;
            const myArray = value.split(" ");

            $("#name").val(myArray[0]);
            $("#num").val(myArray[1]);
            $("#fcolor").val(info.event.backgroundColor);

            document.getElementById("saveData").onclick = function () {
                
                var inp = document.getElementById("name").value;
                var contact = document.getElementById("num").value;
                var color = document.getElementById("fcolor").value;
                enterDetails(inp,contact,color);
                var tittle = inp + " " + contact;
                info.event.setProp("title", tittle);
                info.event.setProp("color", color);

            };
        } else if (result.isDenied) {
            info.event.remove();
        }
    });
}
function lettersValidate(key) {
    var keycode = (key.which) ? key.which : key.keyCode;

    if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123)) {
        return true;
    }
    else {
        return false;
    }

}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function enterDetails(inp,inp1,inp2) {
    
    // var inp = document.getElementById("name").value;
    // var contact = document.getElementById("num").value;
    // var color = document.getElementById("fcolor").value;
    if (inp == '' || inp1 == '' || inp2 == '') {
        document.getElementsByClassName('error').innerHTML = "enter details"
    }

}