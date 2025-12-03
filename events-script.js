// Admin password (change this to your desired password)
const ADMIN_PASSWORD = 'admin123';

// Current calendar state
let currentDate = new Date();
let selectedDate = null;
let isAdminLoggedIn = false;
let editingEventId = null;

// Note: getEvents(), saveEvent(), updateEvent(), and deleteEvent()
// are now provided by sharepoint-config.js
// These functions automatically use SharePoint if configured,
// or fall back to localStorage

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
async function getEventsForDate(dateStr) {
    const events = await getEvents();
    return events.filter(event => event.date === dateStr)
                 .sort((a, b) => a.time.localeCompare(b.time));
}

// Render calendar
async function renderCalendar() {
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

    // Get all events for the month to check which days have events
    const allEvents = await getEvents();

    // Add previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const dayElement = await createDayElement(day, true, null, allEvents);
        calendarGrid.appendChild(dayElement);
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayElement = await createDayElement(day, false, date, allEvents);
        calendarGrid.appendChild(dayElement);
    }

    // Add next month's days to fill the grid
    const totalCells = calendarGrid.children.length - 7; // Subtract day headers
    const remainingCells = Math.ceil(totalCells / 7) * 7 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = await createDayElement(day, true, null, allEvents);
        calendarGrid.appendChild(dayElement);
    }
}

// Create a day element
function createDayElement(day, isOtherMonth, date = null, allEvents = []) {
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
        const events = allEvents.filter(event => event.date === dateStr);

        if (events.length > 0) {
            dayElement.classList.add('has-events');
            const eventCount = document.createElement('div');
            eventCount.className = 'event-count';
            eventCount.textContent = `${events.length} event${events.length > 1 ? 's' : ''}`;
            dayElement.appendChild(eventCount);
        }

        // Add click handler
        dayElement.addEventListener('click', () => {
            // Remove selected class from all days
            document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
            // Add selected class to clicked day
            dayElement.classList.add('selected');
            showEventsForDate(date, dateStr);
        });
    }

    return dayElement;
}

// Show events for selected date
async function showEventsForDate(date, dateStr) {
    selectedDate = dateStr;
    const events = await getEventsForDate(dateStr);
    const panel = document.getElementById('eventPanel');
    const panelHeader = panel.querySelector('.panel-header h3');
    const eventList = document.getElementById('eventList');

    panelHeader.textContent = formatDisplayDate(dateStr);

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
                ${event.location ? `<div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>` : ''}
                ${event.description ? `<div class="event-description">${event.description}</div>` : ''}
            </div>
        `).join('');
    }
}

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
    resetEventForm();
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
        resetEventForm();
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
const submitBtn = eventForm.querySelector('.submit-btn');

eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const location = document.getElementById('eventLocation').value;
    const description = document.getElementById('eventDescription').value;

    const eventData = {
        title,
        date,
        time,
        location,
        description
    };

    let success = false;

    if (editingEventId) {
        // Update existing event
        success = await updateEvent(editingEventId, eventData);
        if (success) {
            alert('Event updated successfully!');
            editingEventId = null;
            submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add Event';
        }
    } else {
        // Add new event
        eventData.id = Date.now();
        success = await saveEvent(eventData);
        if (success) {
            alert('Event added successfully!');
        }
    }

    if (success) {
        eventForm.reset();
        await renderCalendar();
        await loadAdminEvents();

        // Update event panel if it's showing the same date
        if (selectedDate) {
            const selectedDateObj = new Date(selectedDate + 'T00:00:00');
            await showEventsForDate(selectedDateObj, selectedDate);
        }
    }
});

// Cancel event form
document.getElementById('cancelEvent').addEventListener('click', () => {
    resetEventForm();
});

// Reset event form
function resetEventForm() {
    eventForm.reset();
    editingEventId = null;
    submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add Event';
}

// Load admin events list
async function loadAdminEvents() {
    const events = await getEvents();
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
                ${event.location ? `<p class="event-loc"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>` : ''}
            </div>
            <div class="admin-event-actions">
                <button class="edit-btn" onclick="editEvent(${event.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" onclick="deleteEventHandler(${event.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Edit event
async function editEvent(eventId) {
    const events = await getEvents();
    const event = events.find(e => e.id === eventId);

    if (event) {
        editingEventId = eventId;
        document.getElementById('eventTitle').value = event.title;
        document.getElementById('eventDate').value = event.date;
        document.getElementById('eventTime').value = event.time;
        document.getElementById('eventLocation').value = event.location || '';
        document.getElementById('eventDescription').value = event.description || '';

        submitBtn.innerHTML = '<i class="fas fa-save"></i> Update Event';

        // Scroll to form
        eventForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Delete event handler
async function deleteEventHandler(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        const success = await deleteEvent(eventId);

        if (success) {
            await renderCalendar();
            await loadAdminEvents();

            // Update event panel if it's showing
            if (selectedDate) {
                const date = new Date(selectedDate + 'T00:00:00');
                await showEventsForDate(date, selectedDate);
            }
        }
    }
}

// Search functionality
const searchBtn = document.querySelector('.search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 100);
    });

    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
}

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', async () => {
    await renderCalendar();

    // Add some sample events if none exist (only for localStorage mode)
    const events = await getEvents();
    if (events.length === 0 && !isSharePointConfigured()) {
        const today = new Date();
        const sampleEvents = [
            {
                id: Date.now() + 1,
                title: 'Staff Meeting',
                date: formatDate(new Date(today.getFullYear(), today.getMonth(), 15)),
                time: '10:00',
                location: 'Conference Room A',
                description: 'Monthly staff meeting to discuss departmental updates'
            },
            {
                id: Date.now() + 2,
                title: 'Training Session',
                date: formatDate(new Date(today.getFullYear(), today.getMonth(), 20)),
                time: '14:00',
                location: 'Training Center',
                description: 'New employee orientation and training'
            }
        ];

        // Save sample events
        for (const event of sampleEvents) {
            await saveEvent(event);
        }

        await renderCalendar();
    }
});
