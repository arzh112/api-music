# api-music

Simple Express CRUD API for music tracks.

## Install

```bash
cd api-music
npm install
```

## Run

```bash
npm start    # production
npm run dev  # development (nodemon)
```

## Endpoints

- GET  /tracks        — list tracks
- GET  /tracks/:id    — get single track
- POST /tracks        — create track (JSON body: title, artist, year)
- PUT  /tracks/:id    — update track
- DELETE /tracks/:id  — delete track

## Examples

Get all tracks:

```bash
curl -s http://localhost:3000/tracks
```

Create a track:

```bash
curl -s -X POST http://localhost:3000/tracks -H "Content-Type: application/json" -d '{"title":"New Song","artist":"An Artist"}'
```
