import express from 'express';
import cors from 'cors';

import Data from './data.json' with { type: 'json' };

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

app.get('/dungeons', (req, res) => {
  let filteredDungeons = [...Data];
  const { title, limit } = req.query;

  if (title) {
    const keyword = title.toLowerCase();
    filteredDungeons = Data.filter((dungeon) => dungeon.title.toLowerCase().includes(keyword));
  }

  if (limit) {
    filteredDungeons = filteredDungeons.filter((_, index) => index < Number(limit));
  }

  res.json({ items: filteredDungeons, maxLength: Data.length });
});

app.get('/dungeons/:id', (req, res) => {
  const id = Number(req.params.id);
  const dungeon = Data.find((dungeon) => dungeon.id === id);
  if (!dungeon) {
    res.status(404).json({ error: 'Dungeon nod found' });
  }
  res.json(dungeon);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('server start');
});
