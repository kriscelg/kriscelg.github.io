/**
 * WDT Intranet - Events Calendar Script
 *
 * This script displays events from events-data.js
 * No admin functionality - events are managed by editing events-data.js
 */

// ========================================
// CALENDAR STATE
// ========================================
let currentDate = new Date();
let selectedDate = null;

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for display (e.g., "December 15, 2025")
function formatDisplayDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Format time for display (e.g., "2:30 PM")
function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

// Check if a date is today
function isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}

// ========================================
// EVENT FUNCTIONS
// ========================================

// Get events from the EVENTS array (defined in events-data.js)
function getEvents() {
    return EVENTS || [];
}

// Get events for a specific date
function getEventsForDate(dateStr) {
    const events = getEvents();
    return events.filter(event => event.date === dateStr)
                 .sort((a, b) => a.time.localeCompare(b.time));
}

// ========================================
// CALENDAR RENDERING
// ========================================

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

    // Get all events
    const allEvents = getEvents();

    // Add previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const dayElement = createDayElement(day, true, null, allEvents);
        calendarGrid.appendChild(dayElement);
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayElement = createDayElement(day, false, date, allEvents);
        calendarGrid.appendChild(dayElement);
    }

    // Add next month's days to fill the grid
    const totalCells = calendarGrid.children.length - 7; // Subtract day headers
    const remainingCells = Math.ceil(totalCells / 7) * 7 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = createDayElement(day, true, null, allEvents);
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
function showEventsForDate(date, dateStr) {
    selectedDate = dateStr;
    const events = getEventsForDate(dateStr);
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

// ========================================
// CALENDAR NAVIGATION
// ========================================

// Navigation buttons
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// ========================================
// INITIALIZE CALENDAR
// ========================================
// Note: Search and scroll functionality is handled by nav-footer-loader.js

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
});
