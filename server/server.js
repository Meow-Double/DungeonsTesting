import express from 'express';
import cors from 'cors';

import { getDungeon, getDungeons } from './controllers/dungeons';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/dungeons', getDungeons);

app.get('/dungeons/:id', getDungeon);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('server start');
});
