const express = require('express');
const tracksRouter = require('./routes/tracks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tracks', tracksRouter);

app.get('/', (req, res) => res.send('api-music is running'));

app.listen(PORT, () => console.log(`api-music listening on port ${PORT}`));
