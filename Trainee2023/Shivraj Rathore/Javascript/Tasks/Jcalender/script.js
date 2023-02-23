$(document).ready(function () {
    // Initialize FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        eventLimit: true,
        events: [
            // Your events data
        ],
        // Handle date click events
        dayClick: function (date, jsEvent, view) {
            // Set the date in the modal title
            $('#addEventModalLabel').text('Add Event on ' + moment(date).format('MMMM D, YYYY'));
            // Clear the form values
            $('#addEventForm')[0].reset();
            // Set the start and end times to the selected date
            $('#eventStart').val(moment(date).format('YYYY-MM-DD'));
            $('#eventEnd').val(moment(date).format('YYYY-MM-DD'));
            // Show the add event modal
            $('#addEventModal').modal('show');
        },
        // Handle event click events
        eventClick: function (calEvent, jsEvent, view) {
            // Set the event ID in the edit/delete modal
            $('#editEventId').val(calEvent.id);
            // Set the event title in the form
            $('#editEventTitle').val(calEvent.title);
            // Set the start and end times in the form
            $('#editEventStart').val(moment(calEvent.start).format('YYYY-MM-DDTHH:mm'));
            $('#editEventEnd').val(moment(calEvent.end).format('YYYY-MM-DDTHH:mm'));
            // Show the edit/delete event modal
            $('#editEventModal').modal('show');
        }
    });

    // Handle form submit events for adding new events
    $('#addEventForm').submit(function (e) {
    
        e.preventDefault();
        // Get the form values
        var title = $('#eventTitle').val();
        var start = $('#eventStart').val();
        var end = $('#eventEnd').val();
        // Create a new event object
        var newEvent = {
            title: title,
            start: start,
            end: end
        };
        // Add the event to the calendar
        $('#calendar').fullCalendar('renderEvent', newEvent);
        // Hide the modal
        $('#addEventModal').modal('hide');
    });

    // Handle form submit events for editing events
    $('#editEventForm').submit(function (e) {
        e.preventDefault();
        // Get the form values
        var id = $('#editEventId').val();
        var title = $('#editEventTitle').val();
        var start = $('#editEventStart').val();
        var end = $('#editEventEnd').val();
        // Find the event in the calendar and update it
        var event = $('#calendar').fullCalendar('clientEvents', id)[0];
        event.title = title;
        event.start = start;
        event.end = end;
        // Update the event on the calendar
        $('#calendar').fullCalendar('updateEvent', event);
        // Hide the modal
        $('#editEventModal').modal('hide');
    });

    // Handle delete event button click events
    $('#deleteEventButton').click(function () {
        // Get the event ID
        var id = $('#editEventId').val();
        // Find the event in the calendar and remove it
        var event = $('#calendar').fullCalendar('clientEvents', id)[0];
        $('#calendar').fullCalendar('removeEvents', id);
        // Hide the modal
        $('#editEventModal').modal('hide');
    });

});
