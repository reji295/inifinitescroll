const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001; // You can choose any available port

// Enable CORS for all routes
app.use(cors());

// Example route to proxy requests to an external API
app.get('/api/photos/:page', async (req, res) => {
  try {
    const page = req.params.page;
    const response = await axios.get(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
