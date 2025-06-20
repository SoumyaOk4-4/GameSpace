const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://steamspy.com/api.php?request=all');
    const data = response.data;

    const games = Object.values(data);

    res.render('index', { games });
  } catch (error) {
    res.send('Failed to fetch data from SteamSpy API.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
