async function fetchNews() {
  const newsContainer = document.getElementById('news-container');
  const endpoint = '/api/news'; // Now fetch from your backend

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data && Array.isArray(data.articles)) {
      newsContainer.innerHTML = ''; // Clear existing news

      data.articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/400x200'}" alt="news image">
          <div class="news-content">
            <h2>${article.title}</h2>
            <p>${article.description || ''}</p>
            <a href="${article.url}" target="_blank">Read more →</a>
          </div>
        `;
        newsContainer.appendChild(card);
      });
    } else {
      console.error('News data or articles array is undefined or not an array.');
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}
window.addEventListener('DOMContentLoaded', fetchNews);

