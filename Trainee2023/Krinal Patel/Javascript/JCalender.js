//LAyout
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {

      selectable: true,  
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      headerToolbar: { 
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
  
      dateClick: function(info){
        //Modal
        $('#myModal').modal('toggle');


      },headerToolbar: {
        center: 'addEventButton'
      },
      customButtons: {
        addEventButton: {
          text: 'add event...',
          click: function() {
            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
            var date = new Date(dateStr + 'T00:00:00'); // will be in local time
  
            if (!isNaN(date.valueOf())) { // valid?
              calendar.addEvent({
                title: 'dynamic event',
                start: date,
                allDay: true
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      },  


      editable: true,

    //   events: 'https://fullcalendar.io/api/demo-feeds/events.json'
    });
  

    calendar.render();
  });

