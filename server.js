// Create this file in your project root
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;
const apiKey = '79b9e7a365414dd0a8df7a66fef27576';

app.get('/api/news', async (req, res) => {
  const endpoint = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.use(express.static('.')); // Serve your static files

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));