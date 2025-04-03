Bhaily Village Hub WebsiteOverviewThis repository contains the source code for the Bhaily Village Hub website (bhaily.com). The goal of this website is to provide a central online resource for residents and people connected to Bhaily village near Vadodara, Gujarat, India.It features:Information about the village (history, location)A directory of local businesses and servicesAn events calendarVillage news and announcementsA photo galleryTechnologyThe website is built using simple, static web technologies:HTML: For structuring the content.Tailwind CSS (via CDN): For styling and layout.JavaScript: For dynamically loading data (directory, events, news) from JSON files.JSON: For storing the data for directory, events, and news listings.DeploymentThis website is designed to be deployed using GitHub Pages.Live URL: https://bhaily.com/ (Replace with your actual live URL once deployed)GitHub Pages URL: https://your-username.github.io/your-repo-name/ (Replace with your GitHub Pages URL)Project Structure/
├── index.html         # Homepage
├── about.html         # About Bhaily page
├── directory.html     # Business Directory page
├── events.html        # Events page
├── news.html          # News page
├── gallery.html       # Photo Gallery page
├── contact.html       # Contact page
├── css/
│   └── style.css      # Custom CSS (minimal)
├── js/
│   └── main.js        # JavaScript for loading data
├── data/
│   ├── directory.json # Business listings data
│   ├── events.json    # Events data
│   └── news.json      # News items data
├── images/            # Folder for gallery images, logos etc.
├── README.md          # This file
└── CONTRIBUTING.md    # Guide for updating content
Updating ContentMost content updates (like adding a new business, event, or news item) involve editing the JSON files in the /data/ directory or adding images and editing gallery.html.For detailed instructions on how to update the website content, please see the CONTRIBUTING.md file.Issues & SuggestionsIf you find any bugs or have suggestions for improvement, please open an issue in this GitHub repository.