const express = require('express');
const router = express.Router();

let nextId = 3;
let tracks = [
  { id: 1, title: 'Imagine', artist: 'John Lennon', year: 1971 },
  { id: 2, title: 'Billie Jean', artist: 'Michael Jackson', year: 1982 }
];

// GET /tracks
router.get('/', (req, res) => {
  res.json(tracks);
});

// GET /tracks/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const track = tracks.find(t => t.id === id);
  if (!track) return res.status(404).json({ error: 'Track not found' });
  res.json(track);
});

// POST /tracks
router.post('/', (req, res) => {
  const { title, artist, year } = req.body;
  if (!title || !artist) return res.status(400).json({ error: 'title and artist are required' });
  const newTrack = { id: nextId++, title, artist, year };
  tracks.push(newTrack);
  res.status(201).json(newTrack);
});

// PUT /tracks/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = tracks.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Track not found' });
  const { title, artist, year } = req.body;
  if (!title || !artist) return res.status(400).json({ error: 'title and artist are required' });
  tracks[idx] = { id, title, artist, year };
  res.json(tracks[idx]);
});

// DELETE /tracks/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = tracks.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Track not found' });
  const deleted = tracks.splice(idx, 1);
  res.json({ deleted: deleted[0] });
});

module.exports = router;
