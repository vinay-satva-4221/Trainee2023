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

        dateClick: function (info) {
            // alert('clicked ' + info.dateStr);
        },
        selectable: true,
        selectHelper: true,

        // eventClick: function (calEvent, jsEvent, view) {
        //     if (confirm("Are you sure you want to delete this event?")) {
        //         $('#calendar').calendar('removeEvents', calEvent.id);
        //         alert('Event deleted');
        //     }
        // },
        //     let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('deleteModal'))
        // modal.show();




        editable: true,
    });
    calendar.on('eventClick',function(){
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('deleteModal'))
        modal.show();
        // alert("delete")
        // removeEventListener();

    });

    calendar.on('dateClick', function (info) {
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'))
        modal.show();



        document.getElementById("submit").onclick = function () {
            var inp = document.getElementById("name").value;
            var inp1 = document.getElementById("num").value;
            var inp2 = document.getElementById("fcolor").value;

            var date = info.dateStr;
            if (inp != '') {

                console.log(inp);
                calendar.addEvent({
                    title: [inp, inp1, inp2,],
                    id: inp1,
                    start: date,
                    allDay: true,
                    color: inp2
                })

            }
        }


    });


    calendar.render();
});
























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