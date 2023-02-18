const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
  // Set up the calendar options
  // ...
  initialView: 'dayGridMonth',

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        
       
});

const addEventModal = document.getElementById('add-event-modal');
const addEventForm = addEventModal.querySelector('form');

addEventForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values of the form inputs
  const title = addEventForm.querySelector('[name="title"]').value;
  const start = addEventForm.querySelector('[name="start"]').value;
  const end = addEventForm.querySelector('[name="end"]').value;
  const allDay = addEventForm.querySelector('[name="all-day"]').checked;

  // Create an event object
  const event = {
    title: title,
    start: start,
    end: end,
    allDay: allDay
  };

  // Add the event to the calendar
  calendar.addEvent(event);

  // Close the modal
  const instance = M.Modal.getInstance(addEventModal);
  instance.close();
});

const addButton = document.getElementById('add-event-button');

addButton.addEventListener('click', function() {
  const instance = M.Modal.getInstance(addEventModal);
  instance.open();
});