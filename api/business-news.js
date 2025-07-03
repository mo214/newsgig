export default async function handler(req, res) {
  const apiKey = process.env.NEWSAPI_KEY;
  const endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch business news' });
  }
}