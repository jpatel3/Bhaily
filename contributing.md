# Contributing to the Bhaily Village Website

Thank you for your interest in contributing to the Bhaily Village website! Contributions primarily involve keeping the village information (directory listings, events, news, photos) up-to-date. This guide explains how to add, remove, or modify content.

All updates involve editing specific files in the website's code repository and then uploading those changes to GitHub using Git commands.

## General Workflow

1. **Clone Repository**: Ensure you have a local copy of the repository
2. **Locate File**: Find the correct file to edit on your local computer
3. **Edit File**: Make changes using a text editor (like VS Code, Notepad++, etc.)
4. **Save File**: Save your changes
5. **Upload Changes (Using Git)**:
   - Open a terminal or command prompt in your repository folder
   - Type `git pull` (To get the latest changes from GitHub first)
   - Type `git add .` (This stages all your changes)
   - Type `git commit -m "Describe your update, e.g., Added new event"` (This saves the changes locally with a message)
   - Type `git push` (This uploads your saved changes to GitHub, updating the live website)

## Updating Content Sections

### 1. Updating the Directory (`data/directory.json`)

The directory listings are stored as structured data in the `data/directory.json` file. This file contains a list (an array `[...]`) of objects `({...})`, where each object represents one business listing.

**File**: `data/directory.json`

**Structure of one entry (JSON Object)**:
```json
{
  "name": "Business Name",
  "service": "Type of Service/Goods",
  "description": "Optional: A short description.",
  "contact": "Optional: Phone number or email",
  "address": "Optional: Physical address",
  "featured": false // Set to true to highlight this listing (requires payment/agreement offline)
}
```

**To Add a New Listing**:
1. Open `data/directory.json`
2. Go to the end of the list, just before the closing `]`
3. If the list isn't empty, add a comma `,` after the last existing `}`
4. Add a new object `{...}` with the details of the new business, following the structure above
5. Ensure all text values are enclosed in double quotes `""`
6. Save the file and follow the Git workflow to upload

**Example: Adding "Gupta Electronics"**
```json
// ... (previous entries)
  {
    "name": "Local Handicrafts Cooperative",
    // ... details ...
    "featured": true
  }, // <--- Added comma
  { // <--- Added new entry
    "name": "Gupta Electronics",
    "service": "Appliance Repair & Sales",
    "description": "Repairing TVs, fridges, fans. Also sells small electronics.",
    "contact": "555-123-4567",
    "address": "Shop #5, Market Lane",
    "featured": false
  }
] // <--- End of list
```

**To Modify/Remove**: Edit the values within an existing object or delete the entire object (from `{` to `}`). Remember to adjust the commas `,` between objects correctly (no comma after the very last object).

### 2. Updating Events (`data/events.json`)

Upcoming and recurring events are stored in `data/events.json`.

**File**: `data/events.json`

**Structure of one entry**:
```json
{
  "name": "Event Name",
  "date": "YYYY-MM-DD (or descriptive like 'Every Friday')",
  "time": "Optional: Event time (e.g., '6:00 PM', 'All Day')",
  "location": "Optional: Where it takes place (e.g., 'Community Hall')",
  "description": "Details about the event."
}
```

**To Add/Modify/Remove**: Follow the same process as the Directory, editing the `data/events.json` file. Ensure correct JSON formatting. You might want to remove past, non-recurring events periodically.

### 3. Updating News (`data/news.json`)

Recent news items and announcements are stored in `data/news.json`.

**File**: `data/news.json`

**Structure of one entry**:
```json
{
  "title": "News Headline",
  "date": "YYYY-MM-DD",
  "snippet": "A short summary of the news item.",
  "link": "Optional: URL to a full article or related page (can be left empty \"\")"
}
```

**To Add/Modify/Remove**: Follow the same process, editing `data/news.json`. It's recommended to add the newest items at the top of the list (right after the opening `[` bracket) to ensure they appear first on the website. Remember the comma rules.

**Example: Adding a new item at the top**
```json
[ // <--- Start of list
  { // <--- Added new entry
    "title": "New Library Section Opened",
    "date": "2025-04-10",
    "snippet": "A small library section with reading materials for children and adults has opened in the Community Hall.",
    "link": ""
  }, // <--- Added comma
  { // <--- Previously first item
    "title": "New Bus Service Schedule Released",
    "date": "2025-04-02",
    // ... snippet ...
    "link": ""
  },
  // ... other items
]
```

### 4. Updating the Gallery (`gallery.html`)

The photo gallery requires editing the `gallery.html` file directly and uploading the actual image files to the `/images/` folder.

**File**: `gallery.html`
**Image Folder**: `/images/`

**Structure of one image entry (HTML block)**:
```html
<div class="bg-gray-200 rounded-lg overflow-hidden shadow aspect-square">
  <img src="images/your-image-filename.jpg" alt="Descriptive text about the image" class="w-full h-full object-cover"
       onerror="this.onerror=null; this.src='https://placehold.co/600x600/e2e8f0/94a3b8?text=Image+Not+Found';">
  <p class="text-center text-sm p-2 bg-gray-50">Optional Caption Here</p>
</div>
```

**To Add a New Image**:
1. **Prepare Image**: Get your image file (e.g., `village_pond.png`). Ensure it's web-optimized (not excessively large in file size)
2. **Upload Image**: Place the image file inside the `/images/` folder in your local repository
3. **Edit HTML**: Open `gallery.html`
4. **Locate the grid section** (inside `<div class="grid ...">`)
5. **Copy an existing image block** (from the starting `<div>` to the closing `</div>`)
6. **Paste it** where you want the new image to appear
7. **Modify the `src` attribute** to point to your new image file
8. **Update the `alt` text** to describe your image
9. **Add or modify the caption** if desired
10. Save `gallery.html` and use the Git workflow

**To Remove an Image**:
1. Delete the entire `<div>...</div>` block (or the `<div>...</div>`) for the image you want to remove
2. Save `gallery.html` and use the Git workflow

## Other Contributions

For suggestions regarding website structure, design changes, new features, or fixing bugs, please open an issue in the GitHub repository first to discuss the proposed changes.