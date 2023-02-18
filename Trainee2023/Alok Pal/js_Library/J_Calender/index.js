document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",

      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      selectable: true,
      selectHelper: true,

      select: function () {},

      eventClick: function (calEvent, jsEvent, view) {
        var title = prompt("Event Title:", calEvent.title, {
          buttons: { Ok: true, Cancel: false },
        });
        console.log(calEvent);
        if (title) {
          calEvent.title = title;

          // $('#calendar').fullCalendar('updateEvent', calEvent);
        }
      },
    });

    calendar.on('dateClick', function(info)
 {
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'))
        modal.show();
        
        

        document.getElementById("saveData").onclick = function () {
            var inp = document.getElementById("name").value;
            var inp1 = document.getElementById("num").value;
            var inp2 = document.getElementById("fcolor").value;

            var date = info.dateStr;
            if (inp != '') {

                console.log(inp);
                calendar.addEvent({
                    title:[ inp,inp1,inp2,],
                    id:inp1,
                    start: date,
                    allDay: true,
                    color: inp2
                })
            }

        }
        
        
    });
    

    calendar.render();

});

// function addMyData()
// {
   

// }
// var c = document.getElementById("saveData").onclick()
//         console.log(c)