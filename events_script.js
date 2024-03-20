document.addEventListener('DOMContentLoaded', function() {
    const addEventForm = document.getElementById('add-event-form');
    const mainContent = document.querySelector('.main-content');

    addEventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('event-title').value;
        const description = document.getElementById('event-description').value;
        const date = document.getElementById('event-date').value;
        const startTime = document.getElementById('event-start-time').value;
        const endTime = document.getElementById('event-end-time').value;

        if (title && description && date && startTime && endTime) {
            const eventBox = createEventBox(title, description, date, startTime, endTime);
            mainContent.appendChild(eventBox);

            addEventForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    mainContent.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-event-btn')) {
            const eventBox = event.target.closest('.event-box');
            if (confirm('Are you sure you want to delete this event?')) {
                eventBox.remove();
            }
        }
    });

    function createEventBox(title, description, date, startTime, endTime) {
        const eventBox = document.createElement('div');
        eventBox.classList.add('event-box');

        eventBox.innerHTML = `
            <div class="event-header">
                <h2>${title}</h2>
                <button class="delete-event-btn">Delete</button>
            </div>
            <div class="event-content">
                <p>${description}</p>
            </div>
            <div class="event-timings">
                <p>Date: ${date}</p>
                <p>Start Time: ${startTime}</p>
                <p>End Time: ${endTime}</p>
            </div>
        `;

        return eventBox;
    }
});
