// Wait for the HTML document to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Helper Function to Fetch JSON Data ---
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Could not fetch data:", error);
        return null; // Return null if fetching fails
      }
    }
  
    // --- Render Directory Items ---
    function renderDirectory(items, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return; // Exit if the container doesn't exist on this page
  
      if (!items || items.length === 0) {
          container.innerHTML = '<p class="text-gray-500">No directory listings available at the moment.</p>';
          return;
      }
  
      // Clear loading message
      container.innerHTML = '';
  
      items.forEach(item => {
        // Add specific classes if item is featured
        const featuredClass = item.featured ? 'featured-item border-l-4 border-blue-600 bg-blue-50' : '';
        const itemHtml = `
          <div class="p-4 border border-gray-200 rounded-lg shadow-sm ${featuredClass}">
            <h3 class="text-xl font-semibold text-gray-800">${item.name} ${item.featured ? '<span class="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full ml-2">Featured</span>' : ''}</h3>
            <p class="text-gray-600 mt-1">${item.service}</p>
            ${item.description ? `<p class="text-sm text-gray-500 mt-2">${item.description}</p>` : ''}
            ${item.contact ? `<p class="text-sm text-gray-700 mt-2"><strong>Contact:</strong> ${item.contact}</p>` : ''}
            ${item.address ? `<p class="text-sm text-gray-500 mt-1"><strong>Address:</strong> ${item.address}</p>` : ''}
          </div>
        `;
        container.innerHTML += itemHtml;
      });
    }
  
    // --- Render Events ---
    function renderEvents(items, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
  
       if (!items || items.length === 0) {
          container.innerHTML = '<p class="text-gray-500">No upcoming events listed right now.</p>';
          return;
      }
  
      container.innerHTML = ''; // Clear loading message
  
      // Optional: Sort events by date if dates are consistently formatted (e.g., YYYY-MM-DD)
      // items.sort((a, b) => new Date(a.date) - new Date(b.date));
  
      items.forEach(item => {
        const itemHtml = `
          <div class="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-800">${item.name}</h3>
            ${item.date ? `<p class="text-sm text-gray-500 mt-1"><strong>Date:</strong> ${item.date}</p>` : ''}
            ${item.time ? `<p class="text-sm text-gray-500 mt-1"><strong>Time:</strong> ${item.time}</p>` : ''}
            ${item.location ? `<p class="text-sm text-gray-500 mt-1"><strong>Location:</strong> ${item.location}</p>` : ''}
            ${item.description ? `<p class="text-gray-600 mt-2">${item.description}</p>` : ''}
          </div>
        `;
        container.innerHTML += itemHtml;
      });
    }
  
     // --- Render News ---
    function renderNews(items, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
  
       if (!items || items.length === 0) {
          container.innerHTML = '<p class="text-gray-500">No news available at the moment.</p>';
          return;
      }
  
      container.innerHTML = ''; // Clear loading message
  
       // Optional: Sort news by date descending
       // items.sort((a, b) => new Date(b.date) - new Date(a.date)); // Assuming YYYY-MM-DD format
  
      items.forEach(item => {
        const itemHtml = `
          <article class="p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
            ${item.date ? `<p class="text-xs text-gray-500 mt-1 mb-2">${item.date}</p>` : ''}
            <p class="text-gray-600">${item.snippet}</p>
            ${item.link ? `<a href="${item.link}" class="text-blue-600 hover:underline text-sm mt-2 inline-block">Read More</a>` : ''}
          </article>
        `;
        container.innerHTML += itemHtml;
      });
    }
  
  
    // --- Load Data Based on Page ---
    // Check if the directory container exists, then fetch and render
    if (document.getElementById('directory-list')) {
      fetchData('data/directory.json')
        .then(data => renderDirectory(data, 'directory-list'));
    }
  
    // Check if the events container exists, then fetch and render
    if (document.getElementById('events-list')) {
      fetchData('data/events.json')
        .then(data => renderEvents(data, 'events-list'));
    }
  
     // Check if the news container exists, then fetch and render
    if (document.getElementById('news-list')) {
      fetchData('data/news.json')
        .then(data => renderNews(data, 'news-list'));
    }
  
    // Update footer year (already in HTML, but can be done here too)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
  }); // End DOMContentLoaded
  