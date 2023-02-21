document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');


  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    selectable: true,
    //selectHelper: true,
    editable: true,
    eventResourceEditable: true,
    eventClick: function (info) {
      console.log(info);
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Edit",
        denyButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          $("#newModal").modal("show");
          debugger
          let value = info.event.title;
          const name = value.split(" ");

          $("#name").val(name[0]);
          $("#number").val(name[1]);
          $("#color").val(info.event.backgroundColor);

          document.getElementById("saveBtn").onclick = function () {
            var name = document.getElementById("name").value;
            var num = document.getElementById("number").value;
            var color = document.getElementById("color").value;
            var label = name + " " + num;
            info.event.setProp("title", label);
            info.event.setProp("color", color);

          };
        } else if (result.isDenied) {
          info.event.remove();
        }
      });
    },

    //console.log(start, end, allDays)
    //$('#newModal').modal('show');

    // eventClick: function(calEvent, jsEvent, view) {


    // }


    // var start_date = moment(start).format('YYYY-MM-DD');
    // var end_date = moment(end).format('YYYY-MM-DD');




    // dateClick: function(info) {
    //   alert('clicked ' + info.dateStr);
    // },
    // select: function(info) {
    //   alert('selected ' + info.startStr + ' to ' + info.endStr);
    // },

    //events: 'https://fullcalendar.io/api/demo-feeds/events.json'
  });
  calendar.render();

  calendar.on('dateClick', function (info) {
    // let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('newModal'))
    // modal.show();
    $("#newModal").modal("show");


    document.getElementById("saveBtn").onclick = function () {
      var name = document.getElementById("name").value;
      var num = document.getElementById("number").value;
      var color = document.getElementById("color").value;

      var date = info.dateStr;
      var dateinsert = date.includes("+");
      let label = name + " " + num;

      if (name != '' && num != '') {
        console.log(name);
        if (dateinsert) {
          calendar.addEvent({
            title: label,
            start: date,
            allDay: false,
            color: color,
          });

        } else {
          calendar.addEvent({
            title: label,
            start: date,
            allDay: true,
            color: color,
          });
        }
      }
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
      document.getElementById("color").value = "";
    };
  });
  calendar.render();
});