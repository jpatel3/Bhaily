Guide: Updating Your Bhaily Village Hub Website ContentThis guide explains how to add, remove, or modify content in the Directory, Events, News, and Gallery sections. All updates involve editing specific files in your website's code repository and then uploading those changes to GitHub using Git commands.General Workflow:Locate File: Find the correct file to edit on your local computer within your cloned repository.Edit File: Make changes using a text editor (like VS Code, Notepad++, etc.).Save File: Save your changes.Upload Changes (Using Git):Open a terminal or command prompt in your repository folder.Type git add . (This stages all your changes).Type git commit -m "Describe your update, e.g., Added new event" (This saves the changes locally with a message).Type git push (This uploads your saved changes to GitHub, updating the live website).1. Updating the Directory (data/directory.json)The directory listings are stored in the data/directory.json file. This file contains a list (an array [...]) of objects ({...}), where each object represents one business listing.File: data/directory.jsonStructure of one entry (JSON Object):{
  "name": "Business Name",
  "service": "Type of Service/Goods",
  "description": "Optional: A short description.",
  "contact": "Optional: Phone number or email",
  "address": "Optional: Physical address",
  "featured": false // Set to true to highlight this listing
}
To Add a New Listing:Open data/directory.json.Go to the end of the list, just before the closing ].If the list isn't empty, add a comma , after the last existing }.Add a new object {...} with the details of the new business, following the structure above.Ensure all text values are enclosed in double quotes "".Save the file and follow the Git workflow to upload.Example: Adding "Gupta Electronics"// Before adding (showing end of file)
  {
    "name": "Local Handicrafts Cooperative",
    "service": "Handmade Crafts & Souvenirs",
    "description": "Support local artisans, buy unique handmade items.",
    "contact": "Visit stall at market days",
    "address": "Community Hall (Market Days)",
    "featured": true
  } // <--- Add comma here if adding below
]

// After adding
  {
    "name": "Local Handicrafts Cooperative",
    "service": "Handmade Crafts & Souvenirs",
    "description": "Support local artisans, buy unique handmade items.",
    "contact": "Visit stall at market days",
    "address": "Community Hall (Market Days)",
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
]
To Modify/Remove: Edit the values within an existing object or delete the entire object (including the surrounding { and }). Remember to handle the commas , correctly between objects.2. Updating Events (data/events.json)Events are stored in data/events.json, following a similar structure to the directory.File: data/events.jsonStructure of one entry:{
  "name": "Event Name",
  "date": "YYYY-MM-DD (or descriptive, e.g., Every Sunday)",
  "time": "Optional: Event time",
  "location": "Optional: Where it takes place",
  "description": "Details about the event."
}
To Add/Modify/Remove: Follow the same process as the Directory, editing the data/events.json file and ensuring correct JSON formatting (commas between objects, quotes around strings).3. Updating News (data/news.json)News items are in data/news.json.File: data/news.jsonStructure of one entry:{
  "title": "News Headline",
  "date": "YYYY-MM-DD",
  "snippet": "A short summary of the news item.",
  "link": "Optional: URL to a full article or related page (can be left empty \"\")"
}
To Add/Modify/Remove: Follow the same process as the Directory/Events, editing the data/news.json file. It's generally best to add the newest items at the top of the list (after the opening [).Example: Adding a new item at the top[ // <--- Start of list
  { // <--- Added new entry
    "title": "New Bus Service Announced",
    "date": "2025-04-02",
    "snippet": "A new daily bus service connecting Bhaily to Vadodara central bus station will begin next month. Check schedule at Panchayat office.",
    "link": ""
  }, // <--- Added comma
  { // <--- Existing first item
    "title": "New Community Well Inaugurated",
    "date": "2025-04-01",
    "snippet": "A new community well was inaugurated near the temple...",
    "link": ""
  },
  // ... other items
]
4. Updating the Gallery (gallery.html)The gallery is different as it involves editing the HTML file directly and uploading image files.File: gallery.htmlStructure of one image entry (HTML):<div class="bg-gray-200 rounded-lg overflow-hidden shadow aspect-square">
     <img src="images/your-image-filename.jpg" alt="Descriptive text about the image" class="w-full h-full object-cover"
          onerror="this.onerror=null; this.src='https://placehold.co/600x600/e2e8f0/94a3b8?text=Image+Not+Found';"> </div>
To Add a New Image:Prepare Image: Get your image file (e.g., village_festival.jpg). Make sure it's reasonably sized for the web.Upload Image: Place the image file inside the images folder within your local repository.Edit HTML: Open gallery.html.Find the `` comment or the end of the existing image grid (</div> before the closing </section>).Copy an existing image block (from the starting <div> to the closing </div>).Paste the copied block where you want the new image to appear.Update src: Change src="images/your-image-filename.jpg" to the correct path and filename of the image you uploaded (e.g., src="images/village_festival.jpg").Update alt: Change the alt="..." text to accurately describe the new image. This is important for accessibility.Save & Upload: Save gallery.html and use the Git workflow (git add ., git commit -m "Added festival photo", git push) to upload both the HTML change and the new image file.To Remove: Delete the entire <div>...</div> block for the image you want to remove. Save and use the Git workflow.