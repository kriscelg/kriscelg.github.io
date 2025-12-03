# SharePoint Lists Integration Setup Guide

This guide will help you set up SharePoint Lists to store and share events across all users of your WDT Intranet site.

## Overview

The event calendar has been updated to use SharePoint Lists as a backend, which allows all users to see the same events instead of having events stored locally in each user's browser.

## Prerequisites

- Access to a SharePoint site (SharePoint Online or SharePoint Server 2013+)
- Permission to create lists on the SharePoint site
- Users must have read access to the SharePoint site to view events
- Admin users need edit permissions to add/modify/delete events

## Step 1: Create the SharePoint List

1. Navigate to your SharePoint site (e.g., `https://yourtenant.sharepoint.com/sites/WDTIntranet`)

2. Click on **Settings** (gear icon) → **Site contents**

3. Click **+ New** → **List**

4. Choose **Blank list**

5. Name the list: `WDT Events`

6. Click **Create**

## Step 2: Add Custom Columns to the List

After creating the list, add the following columns:

### Column: EventDate
- Type: **Date and time**
- Format: Date only
- Required: Yes

### Column: EventTime
- Type: **Single line of text**
- Required: Yes

### Column: Location
- Type: **Single line of text**
- Required: No

### Column: Description
- Type: **Multiple lines of text**
- Plain text format
- Required: No

### Column: EventId
- Type: **Number**
- Required: Yes
- Unique identifier for events

**Note:** The "Title" column already exists and will be used for the event title.

### Steps to Add a Column:
1. In the list, click **+ Add column**
2. Select the column type
3. Enter the column name exactly as shown above
4. Configure the settings
5. Click **Save**

## Step 3: Configure the JavaScript Files

### Update sharepoint-config.js

Open `/sharepoint-config.js` and update the following section at the top of the file:

```javascript
const SHAREPOINT_CONFIG = {
    // Your SharePoint site URL
    siteUrl: 'https://yourtenant.sharepoint.com/sites/WDTIntranet',

    // The name of your SharePoint list
    listName: 'WDT Events',

    // Authentication mode: 'user' (recommended)
    authMode: 'user'
};
```

Replace:
- `https://yourtenant.sharepoint.com/sites/WDTIntranet` with your actual SharePoint site URL
- `WDT Events` should match the exact name of your list (if you named it differently)

## Step 4: Host Your Website on SharePoint (Recommended)

For the best experience with authentication, host your intranet website directly on SharePoint:

### Option A: SharePoint Pages (Recommended for SharePoint Online)

1. Go to **Site contents** → **Site Pages**
2. Create a new page or upload your HTML files
3. Embed your HTML using the **Embed** web part
4. Users will automatically be authenticated

### Option B: Document Library with HTML Files

1. Create a document library called "WDT Intranet"
2. Upload all your HTML, CSS, and JS files
3. Set the default document to `index.html`
4. Users access via the library URL

### Option C: SharePoint App (Advanced)

1. Package your files as a SharePoint App
2. Deploy to your SharePoint app catalog
3. Install the app on your site

## Step 5: Set Permissions

### For the SharePoint Site:
- **All employees**: Read access
- **Admin users**: Edit access or be part of the site Owners group

### For the WDT Events List:
The list inherits permissions from the parent site by default. If you need custom permissions:

1. Go to list **Settings** → **Permissions for this list**
2. Click **Stop Inheriting Permissions**
3. Configure custom permissions:
   - **Readers**: View events only
   - **Contributors**: Add and edit their own events
   - **Owners/Admins**: Full control

## Step 6: Update List Item Type Name (Advanced)

The SharePoint REST API requires the list item type name in a specific format. By default, it's constructed as `SP.Data.{ListName}ListItem`.

For "WDT Events", the type should be: `SP.Data.WDT_x0020_EventsListItem`

This is already configured in `sharepoint-config.js`. If your list name is different, update line ~54:

```javascript
'__metadata': { 'type': 'SP.Data.Your_x0020_List_x0020_NameListItem' }
```

Use these rules:
- Replace spaces with `_x0020_`
- Remove special characters
- Append `ListItem` at the end

## Step 7: Test the Integration

1. Open your intranet site (index.html or events.html)

2. Check the browser console (F12) for any errors

3. If you see authentication errors:
   - Ensure users are logged into SharePoint
   - Check CORS settings on SharePoint
   - Verify the site URL is correct

4. Test adding an event:
   - Click **Admin Portal** button
   - Login with password: `admin123`
   - Add a test event
   - Verify it appears in SharePoint list
   - Verify it shows on the calendar

5. Test on another browser/computer:
   - Open the same site
   - Verify the event appears for other users

## Troubleshooting

### Issue: "Failed to get request digest" Error
**Solution:**
- Ensure you're logged into SharePoint
- Check that the site URL is correct
- Try accessing the SharePoint site directly first

### Issue: "SharePoint API error: 403" or "Access Denied"
**Solution:**
- Verify users have read permissions to the site and list
- Check that the list isn't hidden or restricted
- Admin users need edit permissions to add events

### Issue: "List not found" Error
**Solution:**
- Verify the list name in `sharepoint-config.js` matches exactly (case-sensitive)
- Check that the list exists in Site Contents
- Ensure the list is not in the recycle bin

### Issue: Events Show in localStorage but Not SharePoint
**Solution:**
- Events in localStorage are separate from SharePoint
- Use the migration function (see below)
- Or manually re-add events through the admin portal

### Issue: CORS or Cross-Origin Errors
**Solution:**
- Host the website on the same SharePoint site
- Or configure CORS policies in SharePoint admin center
- For SharePoint Online, same-domain hosting is recommended

## Migrating Existing Events from localStorage

If you have events stored in localStorage that you want to migrate to SharePoint:

1. Open the events.html page
2. Open browser console (F12)
3. Run this command:
   ```javascript
   migrateLocalStorageToSharePoint()
   ```
4. Confirm the migration when prompted
5. Check the SharePoint list to verify events were migrated

## Fallback to localStorage

The system is designed to gracefully fall back to localStorage if:
- SharePoint is not configured
- SharePoint is unavailable
- Authentication fails

This ensures the calendar continues to work even if SharePoint has issues.

To check if SharePoint is configured, open console and run:
```javascript
isSharePointConfigured()
```

## Security Notes

1. **Admin Password**: Change the admin password in `events-script.js`:
   ```javascript
   const ADMIN_PASSWORD = 'your-new-password';
   ```

2. **SharePoint Permissions**: Only grant edit access to trusted admin users

3. **Site Access**: Ensure the SharePoint site is only accessible to authorized employees

4. **Data Validation**: The SharePoint list will enforce data types and required fields

## Additional Configuration Options

### Change Authentication Mode (Advanced)

For app-only authentication (doesn't require user login):

1. Register an Azure AD application
2. Grant it permissions to your SharePoint site
3. Update `sharepoint-config.js`:
   ```javascript
   authMode: 'app'
   ```
4. Add authentication token handling (requires additional code)

### Customize List Name

If you want to use a different list name:

1. Create the list with your desired name
2. Update `SHAREPOINT_CONFIG.listName` in `sharepoint-config.js`
3. Update the metadata type name accordingly

### Multiple SharePoint Sites

If you need to support multiple SharePoint sites:

1. Create environment-specific config files
2. Load the appropriate config based on hostname
3. Or use a configuration page to let admins select the site

## Support and Resources

- SharePoint REST API Documentation: https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service
- SharePoint Permissions: https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-permissionlevel
- Microsoft 365 Admin Center: https://admin.microsoft.com

## Summary

After completing these steps:
- ✅ Events are stored in SharePoint Lists
- ✅ All users see the same events
- ✅ Events are centrally managed
- ✅ Admin users can add/edit/delete events
- ✅ Changes appear immediately for all users
- ✅ Automatic fallback to localStorage if SharePoint is unavailable

Your WDT Intranet event calendar is now powered by SharePoint!
