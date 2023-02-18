document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');


  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    selectable:true,
    selectHelper:true,
    select: function(start, end , allDays)
    {
      //console.log(start, end, allDays)
      $('#newModal').modal('show');

      // eventClick: function(calEvent, jsEvent, view) {


      // }

      $('#saveBtn').click(function(){
        var title = $("#title").val();
        console.log(title);
        // var start_date = moment(start).format('YYYY-MM-DD');
        // var end_date = moment(end).format('YYYY-MM-DD');

      })
    }
    
    // dateClick: function(info) {
    //   alert('clicked ' + info.dateStr);
    // },
    // select: function(info) {
    //   alert('selected ' + info.startStr + ' to ' + info.endStr);
    // },

   //events: 'https://fullcalendar.io/api/demo-feeds/events.json'
  });
  calendar.on('dateClick', function(info)

  {
        // let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newModal'))
        // modal.show();
        
  
        document.getElementById("saveBtn").onclick = function () {
            var name = document.getElementById("name").value;
            var num = document.getElementById("number").value;
            var color = document.getElementById("color").value;

            var date = info.dateStr;
            if (name != '' && num != '' && color !='') {
                console.log(name);
                calendar.addEvent({
                    title: name + "\n" + num,
                    start: date,
                    allDay: true,
                    color: color
                })
            }
            else{
              alert("please enter all the feild");
            }
        }

      });

  calendar.render();
});