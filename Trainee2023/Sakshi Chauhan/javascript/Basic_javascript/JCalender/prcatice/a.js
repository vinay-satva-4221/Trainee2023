document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    selectable: true,
    editable: true,
    eventResourceEditable: true,
    eventClick: function (info) {
      Salerrt(info);
      //     console.log(info)
      // var eventObj = info.event;
      //     if (eventObj.title) {
      //         //alert('Event Name = ' + eventObj.title);
      //        eventObj.title="kjcbs"
      //     //    $('#calendar').fullCalendar('updateEvent', event);
      //         console.log('Event Name = ' + eventObj.title);
      //     }
      //   //alert(a)
    },
    //           eventRender: function (info) {
    // console.log(info.event.title);}

    // select: function(info) {
    //   //alert('selected ' + info.startStr + ' to ' + info.endStr);
    //   $("#Mymodal").modal("toggle")

    // // $(document).on('click',"#save",function(){
    //     $("#save").click(function(){
    //     debugger
    //     //alert("clicked")})
    // }
  });

  calendar.render();
  calendar.on("dateClick", function (info) {
    let modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById("myModal")
    );
    modal.show();

    document.getElementById("save").onclick = function () {
      var inp = document.getElementById("patient_name").value;
      var contact = document.getElementById("mobile").value;
      var color = document.getElementById("colors").value;
      var date = info.dateStr;
      console.log(date);
      var check = date.includes("+");
      var tittle = inp + " " + contact;
      if (inp != "" && contact != "") {
        if (check) {
          //alert("true")
          // console.log(inp);
          calendar.addEvent({
            title: tittle,
            start: date,
            allDay: false,
            color: color,
          });
        } else {
          //alert("trueee")
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

function Salerrt(info) {
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
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById("myModal")
      );
      modal.show();
      // //alert(info.event.title)
      let value = info.event.title;
      const myArray = value.split(" ");
      //alert(myArray[0])
      //alert(myArray[1])

      $("#patient_name").val(myArray[0]);
      $("#mobile").val(myArray[1]);
      $("#colors").val(info.event.backgroundColor);

      document.getElementById("save").onclick = function () {
        var inp = document.getElementById("patient_name").value;
        var contact = document.getElementById("mobile").value;
        var colorr = document.getElementById("colors").value;
        var date = info.dateStr;
        var tittle = inp + " " + contact;
        // event.setProp()
        //alert(tittle)
        //alert(colorr)
        info.event.setProp("title", tittle);
        info.event.setProp("color", colorr);
      };
    } else if (result.isDenied) {
      info.event.remove();
    }
  });
}