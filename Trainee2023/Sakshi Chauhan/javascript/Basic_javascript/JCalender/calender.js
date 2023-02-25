
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          },
          selectable: true,
          editable: true,
        //   plugins: [ listPlugin ],
        // initialView: 'listWeek',
          eventResourceEditable: true,
      eventClick: function (info) {
        sweetAlert(info);
      },
    });
 
      
    calendar.render();
    calendar.on("dateClick", function (info) {
        var popup = bootstrap.Modal.getOrCreateInstance(
          document.getElementById("schedule-add")
        );
        popup.show();
        document.getElementById("addrow").onclick = function () {
            var scheduler_name = document.getElementById("name").value;
            var works = document.getElementById("work").value;
            var contact = document.getElementById("contact").value;
            var color = document.getElementById("colors").value;
            var date = info.dateStr;
            console.log(date);
            var check_date = date.includes("+");
            var tittle = scheduler_name + " " + works + " " +contact;
            if (scheduler_name != "" && works != "" && contact != "") {
              if (check_date) {
                calendar.addEvent({
                  title: tittle,
                  start: date,
                  allDay: false,
                  color: color,
                });
              } else {
                calendar.addEvent({
                  title: tittle,
                  start: date,
                  allDay: true,
                  color: color,
                });
              }
            }
          };
        });
      
        calendar.render();
      });
      
      function sweetAlert(info) {
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
            var popup = bootstrap.Modal.getOrCreateInstance(
              document.getElementById("schedule-add")
            );
            popup.show();
            let value = info.event.title;
            const myArray = value.split(" ");
      
            $("#name").val(myArray[0]);
            $("#work").val(myArray[1]);
            $("#contact").val(myArray[2]);
            $("#colors").val(info.event.backgroundColor);
      
            document.getElementById("addrow").onclick = function () {
                var scheduler_name = document.getElementById("name").value;
                var works = document.getElementById("work").value;
                var contact = document.getElementById("contact").value;
                var color = document.getElementById("colors").value;
              var check_date = info.dateStr;
              var tittle = scheduler_name + " " + works + " " + contact;
              info.event.setProp("title", tittle);
              info.event.setProp("color", color);
            };
          } else if (result.isDenied) {
            info.event.remove();
          }
        });
      }
    
//   function AddData()
//     {
//         document.getElementById('#schedule').value = "";
//         calendar.getEventSourceById( '#schedule' );
//         calendar.getEventSourceById( '#contact' );
//         calendar.getEventSourceById( '#colors' );
//     }

