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
      SweetAlert(info);
    },
  });
  calendar.render();

  calendar.on("dateClick", function (info) {
    $("#exampleModal").modal("toggle");

    document.getElementById("add").onclick = function () {
      var name = document.getElementById("name").value;
      var numbers = document.getElementById("numbers").value;
      var colors = document.getElementById("colors").value;
      var date = info.dateStr;
      var check = date.includes("+");
      var tittle = name + " " + numbers;

      if (name != "" && numbers != "") {
        if (check) {
          calendar.addEvent({
            title: tittle,
            start: date,
            allDay: false,
            color: colors,
          });

        } else {
          calendar.addEvent({
            title: tittle,
            start: date,
            allDay: true,
            color: colors,
          });
        }
      }
    };
  });

  calendar.render();
});

function SweetAlert(info) {
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
      $("#numbers").val(myArray[1]);
      $("#colors").val(info.event.backgroundColor);

      document.getElementById("add").onclick = function () {
        var name = document.getElementById("name").value;
        var numbers = document.getElementById("numbers").value;
        var colors = document.getElementById("colors").value;
        var tittle = name + " " + numbers;
        info.event.setProp("title", tittle);
        info.event.setProp("color", colors);

      };
    } else if (result.isDenied) {
      info.event.remove();
    }
  });
}

