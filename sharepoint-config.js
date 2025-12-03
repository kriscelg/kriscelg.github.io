/**
 * SharePoint Lists Integration for WDT Intranet Events Calendar
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a SharePoint List called "WDT Events" with the following columns:
 *    - Title (Single line of text) - Built-in
 *    - EventDate (Date and time)
 *    - EventTime (Single line of text)
 *    - Location (Single line of text)
 *    - Description (Multiple lines of text)
 *    - EventId (Number) - for unique identification
 *
 * 2. Update the SHAREPOINT_CONFIG below with your SharePoint site details
 *
 * 3. For authentication, you have two options:
 *    Option A: User Context (users must be logged into SharePoint)
 *    Option B: App-Only Authentication (requires Azure AD app registration)
 */

// ========================================
// CONFIGURATION - UPDATE THESE VALUES
// ========================================
const SHAREPOINT_CONFIG = {
    // Your SharePoint site URL (e.g., "https://yourtenant.sharepoint.com/sites/WDTIntranet")
    siteUrl: 'YOUR_SHAREPOINT_SITE_URL',

    // The name of your SharePoint list
    listName: 'WDT Events',

    // Authentication mode: 'user' or 'app'
    // 'user' = Users must be logged into SharePoint (simpler setup)
    // 'app' = Use App-Only authentication (requires Azure AD app setup)
    authMode: 'user'
};

// ========================================
// SHAREPOINT API HELPER FUNCTIONS
// ========================================

/**
 * Get the request digest token for POST/UPDATE/DELETE operations
 */
async function getRequestDigest() {
    try {
        const response = await fetch(`${SHAREPOINT_CONFIG.siteUrl}/_api/contextinfo`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json;odata=verbose',
                'Content-Type': 'application/json;odata=verbose'
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Failed to get request digest');
        }

        const data = await response.json();
        return data.d.GetContextWebInformation.FormDigestValue;
    } catch (error) {
        console.error('Error getting request digest:', error);
        throw error;
    }
}

/**
 * Get all events from SharePoint List
 */
async function getEventsFromSharePoint() {
    try {
        const listTitle = SHAREPOINT_CONFIG.listName.replace(/ /g, '%20');
        const url = `${SHAREPOINT_CONFIG.siteUrl}/_api/web/lists/GetByTitle('${listTitle}')/items?` +
                    `$select=Id,Title,EventDate,EventTime,Location,Description,EventId&` +
                    `$orderby=EventDate asc,EventTime asc`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json;odata=verbose',
                'Content-Type': 'application/json;odata=verbose'
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`SharePoint API error: ${response.status}`);
        }

        const data = await response.json();

        // Transform SharePoint items to our event format
        return data.d.results.map(item => ({
            id: item.EventId || item.Id,
            title: item.Title,
            date: item.EventDate ? item.EventDate.split('T')[0] : '',
            time: item.EventTime || '',
            location: item.Location || '',
            description: item.Description || ''
        }));
    } catch (error) {
        console.error('Error fetching events from SharePoint:', error);
        // Fall back to localStorage if SharePoint is unavailable
        return getEventsFromLocalStorage();
    }
}

/**
 * Add a new event to SharePoint List
 */
async function addEventToSharePoint(event) {
    try {
        const digest = await getRequestDigest();
        const listTitle = SHAREPOINT_CONFIG.listName.replace(/ /g, '%20');
        const url = `${SHAREPOINT_CONFIG.siteUrl}/_api/web/lists/GetByTitle('${listTitle}')/items`;

        const itemData = {
            '__metadata': { 'type': 'SP.Data.WDT_x0020_EventsListItem' },
            'Title': event.title,
            'EventDate': new Date(event.date).toISOString(),
            'EventTime': event.time,
            'Location': event.location || '',
            'Description': event.description || '',
            'EventId': event.id
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json;odata=verbose',
                'Content-Type': 'application/json;odata=verbose',
                'X-RequestDigest': digest
            },
            credentials: 'include',
            body: JSON.stringify(itemData)
        });

        if (!response.ok) {
            throw new Error(`Failed to add event: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding event to SharePoint:', error);
        throw error;
    }
}

/**
 * Update an existing event in SharePoint List
 */
async function updateEventInSharePoint(eventId, event) {
    try {
        const digest = await getRequestDigest();

        // First, find the SharePoint item ID for this event
        const spItemId = await getSharePointItemId(eventId);
        if (!spItemId) {
            throw new Error('Event not found in SharePoint');
        }

        const listTitle = SHAREPOINT_CONFIG.listName.replace(/ /g, '%20');
        const url = `${SHAREPOINT_CONFIG.siteUrl}/_api/web/lists/GetByTitle('${listTitle}')/items(${spItemId})`;

        const itemData = {
            '__metadata': { 'type': 'SP.Data.WDT_x0020_EventsListItem' },
            'Title': event.title,
            'EventDate': new Date(event.date).toISOString(),
            'EventTime': event.time,
            'Location': event.location || '',
            'Description': event.description || ''
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json;odata=verbose',
                'Content-Type': 'application/json;odata=verbose',
                'X-RequestDigest': digest,
                'X-HTTP-Method': 'MERGE',
                'IF-MATCH': '*'
            },
            credentials: 'include',
            body: JSON.stringify(itemData)
        });

        if (!response.ok && response.status !== 204) {
            throw new Error(`Failed to update event: ${response.status}`);
        }

        return true;
    } catch (error) {
        console.error('Error updating event in SharePoint:', error);
        throw error;
    }
}

/**
 * Delete an event from SharePoint List
 */
async function deleteEventFromSharePoint(eventId) {
    try {
        const digest = await getRequestDigest();

        // Find the SharePoint item ID for this event
        const spItemId = await getSharePointItemId(eventId);
        if (!spItemId) {
            throw new Error('Event not found in SharePoint');
        }

        const listTitle = SHAREPOINT_CONFIG.listName.replace(/ /g, '%20');
        const url = `${SHAREPOINT_CONFIG.siteUrl}/_api/web/lists/GetByTitle('${listTitle}')/items(${spItemId})`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json;odata=verbose',
                'X-RequestDigest': digest,
                'X-HTTP-Method': 'DELETE',
                'IF-MATCH': '*'
            },
            credentials: 'include'
        });

        if (!response.ok && response.status !== 204) {
            throw new Error(`Failed to delete event: ${response.status}`);
        }

        return true;
    } catch (error) {
        console.error('Error deleting event from SharePoint:', error);
        throw error;
    }
}

/**
 * Helper function to get SharePoint item ID from EventId
 */
async function getSharePointItemId(eventId) {
    try {
        const listTitle = SHAREPOINT_CONFIG.listName.replace(/ /g, '%20');
        const url = `${SHAREPOINT_CONFIG.siteUrl}/_api/web/lists/GetByTitle('${listTitle}')/items?` +
                    `$select=Id,EventId&$filter=EventId eq ${eventId}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json;odata=verbose'
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Failed to find event');
        }

        const data = await response.json();
        return data.d.results.length > 0 ? data.d.results[0].Id : null;
    } catch (error) {
        console.error('Error finding SharePoint item:', error);
        return null;
    }
}

// ========================================
// FALLBACK: localStorage FUNCTIONS
// ========================================

/**
 * Fallback: Get events from localStorage
 */
function getEventsFromLocalStorage() {
    const events = localStorage.getItem('wdtEvents');
    return events ? JSON.parse(events) : [];
}

/**
 * Fallback: Save events to localStorage
 */
function saveEventsToLocalStorage(events) {
    localStorage.setItem('wdtEvents', JSON.stringify(events));
}

// ========================================
// UNIFIED API (Use these in your code)
// ========================================

/**
 * Check if SharePoint is configured
 */
function isSharePointConfigured() {
    return SHAREPOINT_CONFIG.siteUrl !== 'YOUR_SHAREPOINT_SITE_URL' &&
           SHAREPOINT_CONFIG.siteUrl.includes('sharepoint.com');
}

/**
 * Get all events (uses SharePoint if configured, otherwise localStorage)
 */
async function getEvents() {
    if (isSharePointConfigured()) {
        try {
            return await getEventsFromSharePoint();
        } catch (error) {
            console.warn('SharePoint unavailable, using localStorage:', error);
            return getEventsFromLocalStorage();
        }
    } else {
        return getEventsFromLocalStorage();
    }
}

/**
 * Save/Add a new event
 */
async function saveEvent(event) {
    if (isSharePointConfigured()) {
        try {
            await addEventToSharePoint(event);
            return true;
        } catch (error) {
            console.error('Failed to save to SharePoint:', error);
            alert('Failed to save event to SharePoint. Check console for details.');
            return false;
        }
    } else {
        // localStorage fallback
        const events = getEventsFromLocalStorage();
        events.push(event);
        saveEventsToLocalStorage(events);
        return true;
    }
}

/**
 * Update an existing event
 */
async function updateEvent(eventId, event) {
    if (isSharePointConfigured()) {
        try {
            await updateEventInSharePoint(eventId, event);
            return true;
        } catch (error) {
            console.error('Failed to update in SharePoint:', error);
            alert('Failed to update event in SharePoint. Check console for details.');
            return false;
        }
    } else {
        // localStorage fallback
        const events = getEventsFromLocalStorage();
        const index = events.findIndex(e => e.id === eventId);
        if (index !== -1) {
            events[index] = { ...event, id: eventId };
            saveEventsToLocalStorage(events);
            return true;
        }
        return false;
    }
}

/**
 * Delete an event
 */
async function deleteEvent(eventId) {
    if (isSharePointConfigured()) {
        try {
            await deleteEventFromSharePoint(eventId);
            return true;
        } catch (error) {
            console.error('Failed to delete from SharePoint:', error);
            alert('Failed to delete event from SharePoint. Check console for details.');
            return false;
        }
    } else {
        // localStorage fallback
        const events = getEventsFromLocalStorage();
        const filtered = events.filter(e => e.id !== eventId);
        saveEventsToLocalStorage(filtered);
        return true;
    }
}

/**
 * Sync localStorage events to SharePoint (one-time migration)
 */
async function migrateLocalStorageToSharePoint() {
    if (!isSharePointConfigured()) {
        alert('Please configure SharePoint settings first');
        return false;
    }

    const localEvents = getEventsFromLocalStorage();
    if (localEvents.length === 0) {
        alert('No events in localStorage to migrate');
        return false;
    }

    const confirmed = confirm(`Migrate ${localEvents.length} events from localStorage to SharePoint?`);
    if (!confirmed) return false;

    let success = 0;
    let failed = 0;

    for (const event of localEvents) {
        try {
            await addEventToSharePoint(event);
            success++;
        } catch (error) {
            console.error(`Failed to migrate event: ${event.title}`, error);
            failed++;
        }
    }

    alert(`Migration complete!\nSuccess: ${success}\nFailed: ${failed}`);
    return failed === 0;
}
