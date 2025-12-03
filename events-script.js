// Admin password (change this to your desired password)
const ADMIN_PASSWORD = 'admin123';

// Current calendar state
let currentDate = new Date();
let selectedDate = null;
let isAdminLoggedIn = false;

// Get events from localStorage
function getEvents() {
    const events = localStorage.getItem('wdtEvents');
    return events ? JSON.parse(events) : [];
}

// Save events to localStorage
function saveEvents(events) {
    localStorage.setItem('wdtEvents', JSON.stringify(events));
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for display
function formatDisplayDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Format time for display
function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

// Check if date is today
function isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}

// Get events for a specific date
function getEventsForDate(dateStr) {
    const events = getEvents();
    return events.filter(event => event.date === dateStr)
                 .sort((a, b) => a.time.localeCompare(b.time));
}

// Render calendar
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Update month display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Get previous month's last day
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Clear existing calendar days
    const calendarGrid = document.querySelector('.calendar-grid');
    const dayHeaders = calendarGrid.querySelectorAll('.day-header');
    calendarGrid.innerHTML = '';
    dayHeaders.forEach(header => calendarGrid.appendChild(header));

    // Add previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const dayElement = createDayElement(day, true);
        calendarGrid.appendChild(dayElement);
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayElement = createDayElement(day, false, date);
        calendarGrid.appendChild(dayElement);
    }

    // Add next month's days to fill the grid
    const totalCells = calendarGrid.children.length - 7; // Subtract day headers
    const remainingCells = Math.ceil(totalCells / 7) * 7 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = createDayElement(day, true);
        calendarGrid.appendChild(dayElement);
    }
}

// Create a day element
function createDayElement(day, isOtherMonth, date = null) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';

    if (isOtherMonth) {
        dayElement.classList.add('other-month');
    } else if (date && isToday(date)) {
        dayElement.classList.add('today');
    }

    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayElement.appendChild(dayNumber);

    // Check for events
    if (date) {
        const dateStr = formatDate(date);
        const events = getEventsForDate(dateStr);

        if (events.length > 0) {
            dayElement.classList.add('has-events');
            const eventCount = document.createElement('div');
            eventCount.className = 'event-count';
            eventCount.textContent = `${events.length} event${events.length > 1 ? 's' : ''}`;
            dayElement.appendChild(eventCount);
        }

        // Add click handler
        dayElement.addEventListener('click', () => showEventsForDate(date, dateStr));
    }

    return dayElement;
}

// Show events for selected date
function showEventsForDate(date, dateStr) {
    selectedDate = dateStr;
    const events = getEventsForDate(dateStr);
    const panel = document.getElementById('eventPanel');
    const selectedDateElement = document.getElementById('selectedDate');
    const eventList = document.getElementById('eventList');

    selectedDateElement.textContent = formatDisplayDate(dateStr);

    if (events.length === 0) {
        eventList.innerHTML = '<p class="no-events">No events scheduled for this day.</p>';
    } else {
        eventList.innerHTML = events.map(event => `
            <div class="event-item">
                <h4>${event.title}</h4>
                <div class="event-time">
                    <i class="far fa-clock"></i>
                    ${formatTime(event.time)}
                </div>
                ${event.description ? `<div class="event-description">${event.description}</div>` : ''}
            </div>
        `).join('');
    }

    panel.classList.add('active');
}

// Close event panel
document.getElementById('closePanel').addEventListener('click', () => {
    document.getElementById('eventPanel').classList.remove('active');
});

// Navigation buttons
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Admin login modal
const loginModal = document.getElementById('loginModal');
const adminModal = document.getElementById('adminModal');
const adminBtn = document.getElementById('adminBtn');
const closeLogin = document.getElementById('closeLogin');
const closeAdmin = document.getElementById('closeAdmin');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

adminBtn.addEventListener('click', () => {
    if (isAdminLoggedIn) {
        adminModal.classList.add('active');
        loadAdminEvents();
    } else {
        loginModal.classList.add('active');
    }
});

closeLogin.addEventListener('click', () => {
    loginModal.classList.remove('active');
    loginError.textContent = '';
    loginForm.reset();
});

closeAdmin.addEventListener('click', () => {
    adminModal.classList.remove('active');
});

// Close modals on background click
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        loginError.textContent = '';
        loginForm.reset();
    }
});

adminModal.addEventListener('click', (e) => {
    if (e.target === adminModal) {
        adminModal.classList.remove('active');
    }
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;

    if (password === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        loginModal.classList.remove('active');
        adminModal.classList.add('active');
        loginForm.reset();
        loginError.textContent = '';
        loadAdminEvents();

        // Update admin button
        adminBtn.innerHTML = '<i class="fas fa-unlock"></i> Admin Panel';
    } else {
        loginError.textContent = 'Incorrect password. Please try again.';
    }
});

// Event form submission
const eventForm = document.getElementById('eventForm');

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const description = document.getElementById('eventDescription').value;

    const events = getEvents();
    events.push({
        id: Date.now(),
        title,
        date,
        time,
        description
    });

    saveEvents(events);
    eventForm.reset();
    renderCalendar();
    loadAdminEvents();

    // Show success feedback
    alert('Event added successfully!');
});

// Cancel event form
document.getElementById('cancelEvent').addEventListener('click', () => {
    eventForm.reset();
});

// Load admin events list
function loadAdminEvents() {
    const events = getEvents();
    const adminEventList = document.getElementById('adminEventList');

    if (events.length === 0) {
        adminEventList.innerHTML = '<p class="no-events">No events scheduled.</p>';
        return;
    }

    // Sort events by date and time
    events.sort((a, b) => {
        const dateCompare = a.date.localeCompare(b.date);
        if (dateCompare !== 0) return dateCompare;
        return a.time.localeCompare(b.time);
    });

    adminEventList.innerHTML = events.map(event => `
        <div class="admin-event-item">
            <div class="admin-event-info">
                <h5>${event.title}</h5>
                <p>${formatDisplayDate(event.date)} at ${formatTime(event.time)}</p>
            </div>
            <button class="delete-btn" onclick="deleteEvent(${event.id})">
                <i class="fas fa-trash"></i> Delete
            </button>
        </div>
    `).join('');
}

// Delete event
function deleteEvent(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        let events = getEvents();
        events = events.filter(event => event.id !== eventId);
        saveEvents(events);
        renderCalendar();
        loadAdminEvents();

        // Update event panel if it's showing
        const panel = document.getElementById('eventPanel');
        if (panel.classList.contains('active') && selectedDate) {
            const date = new Date(selectedDate + 'T00:00:00');
            showEventsForDate(date, selectedDate);
        }
    }
}

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();

    // Add some sample events if none exist
    const events = getEvents();
    if (events.length === 0) {
        const today = new Date();
        const sampleEvents = [
            {
                id: Date.now() + 1,
                title: 'Staff Meeting',
                date: formatDate(new Date(today.getFullYear(), today.getMonth(), 15)),
                time: '10:00',
                description: 'Monthly staff meeting to discuss departmental updates'
            },
            {
                id: Date.now() + 2,
                title: 'Training Session',
                date: formatDate(new Date(today.getFullYear(), today.getMonth(), 20)),
                time: '14:00',
                description: 'New employee orientation and training'
            }
        ];
        saveEvents(sampleEvents);
        renderCalendar();
    }
});
