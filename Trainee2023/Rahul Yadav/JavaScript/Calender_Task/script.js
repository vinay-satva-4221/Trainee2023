document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        selectable: true,
        selectHelper: true,
        // select: function (start, end, allDay) {
        //     console.log(start, end, allDay)
        //     // document.getElementById("exampleModal")
        //     $("#exampleModal").modal("toggle");
        // },

        selectable: true,
        selectHelper: true,
        eventResourceEditable: true,
        eventClick: function (info) {
            SweetA(info);
        },

        editable: true,
    });


    calendar.on('dateClick', function (info) {
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'))
        modal.show();

        document.getElementById("submit").onclick = function () {
            var inp = document.getElementById("name").value;
            var inp1 = document.getElementById("num").value;
            var inp2 = document.getElementById("fcolor").value;
            var date = info.dateStr;
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
        }


    });
    calendar.render();
});

function SweetA(info) {
    console.log(info);
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Edit",
        denyButtonText: "Delete",
        customClass: {
            actions: "my-actions",
            cancelButton: "order-1 right-gap",
            confirmButton: "order-2",
            denyButton: "order-3",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            $("#exampleModal").modal("toggle");

            let value = info.event.title;
            const myArray = value.split(" ");

            $("#name").val(myArray[0]);
            $("#num").val(myArray[1]);
            $("#fcolor").val(info.event.backgroundColor);

            document.getElementById("submit").onclick = function () {
                var inp = document.getElementById("name").value;
                var contact = document.getElementById("num").value;
                var color = document.getElementById("fcolor").value;
                var tittle = inp + " " + contact;
                info.event.setProp("title", tittle);
                info.event.setProp("color", color);

            };
        } else if (result.isDenied) {
            info.event.remove();
        }
    });
}
























// document.getElementById("submit").onclick = function () {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         events: [
//             {
//                 title: $('#fname').val(),
//                 start: '2023-02-02'
//             },
//         ],
//     });

// }


// $('#submit').on('click', function (e) {

//     e.preventDefault();
//     // doSubmit();
// });

// function doSubmit() {
//     $("#exampleModal").modal('hide');

//     alert("form submitted");

//     // $("#calendar").Calendar('renderEvent',
//     //     {
//     //         title: $('#fname').val(),
//     //         start: '2023-02-02',
//     //         // end: new Date($('#apptEndTime').val()),
//     //         // allDay: ($('#apptAllDay').val() == "true"),
//     //     },
//     //     true);
// }