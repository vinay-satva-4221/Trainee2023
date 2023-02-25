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

    eventClick: function(info) {
        alert('Event: ' + info.event.title);
        console.log(info)
      },

      editable: true,

    //   events: 'https://fullcalendar.io/api/demo-feeds/events.json'
    });
  
    calendar.on('dateClick', function(info)

    {
          //It resets all value when adding new event using Modal 
          var element = document.getElementById("f");
          element.reset()
         
          let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal'))
          modal.show();
         
    
          document.getElementById("add").onclick = function () {
              var name = document.getElementById("name").value;
              var contact = document.getElementById("cno").value;
              var colors = document.getElementById("color").value;
              var date = info.dateStr;
           
              if (name != ''   && contact!='' && colors!='') {
                  calendar.addEvent({
                      title: name+"\n"+contact,
                      start: date,
                      allDay: true,
                      color: colors
                 })
              }
        
              else{
                alert("Please Enter all the Details to add Event..!!")
              }
             
          }
  
        });
        
    calendar.render();
  
  });


  function validatename() {
    let setname = /^[a-zA-Z]+$/;
    let name = document.getElementById("name").value;
    let msgname = document.getElementById("invalid_msg");
    if (!setname.test(name)) {
        msgname.innerHTML = "*Please enter a characters only..";
        msgname.style.color = "red";
        document.getElementById("invalid_msg").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg").style.display = "none";
        return true;
    }
}

function validatemobile() {
    let setmobile = /^[0-9]{10}$/;
    let mobile = document.getElementById("cno").value;
    let msgmobile = document.getElementById("invalid_msg1");
    if (!setmobile.test(mobile)) {
        msgmobile.innerHTML = "*Please enter 10 digits..";
        msgmobile.style.color = "red";
        document.getElementById("invalid_msg1").style.display = "unset";

        return false;
    } else {
        document.getElementById("invalid_msg1").style.display = "none";
        return true;
    }
}
