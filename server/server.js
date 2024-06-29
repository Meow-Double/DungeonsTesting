import express from 'express';
import cors from 'cors';

import Data from './data.json' with { type: 'json' };

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

app.get('/dungeons', (_, res) => {
  return res.json(Data);
});

app.listen(8000, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('server start');
});
