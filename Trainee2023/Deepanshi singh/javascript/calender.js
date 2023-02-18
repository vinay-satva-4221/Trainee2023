document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    dateClick: function(info) {
     
      let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'))
      modal.show();

      document.getElementById("add").onclick=function(){
        var name=document.getElementById("name").value;
        var numbers=document.getElementById("numbers").value;
        var colors=document.getElementById("colors").value;
        var date=info.dateStr;
        if(name!=''||numbers!=''||colors!=''){
          calendar.addEvent({
            title:[name,numbers,colors],
            start:date,
            allDay:true,
            color: colors,
      
          })
          $('#calendar').fullCalendar('removeEvents',events._id);
          
        }
      
      }
      
    }
 
    
  });
  

  calendar.render();
});
