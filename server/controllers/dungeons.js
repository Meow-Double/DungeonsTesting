import { fileURLToPath } from 'url';
import Data from './data.json' with { type: 'json' };
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbFileDungeons = join(__dirname, '..', 'data.json');

export const getDungeons = async (req, res) => {
  try {
    const data = await fs.promises.readFile(dbFileDungeons, 'utf-8');

    let filteredDungeons = [...data];
    const { title, limit } = req.query;

    if (title) {
      const keyword = title.toLowerCase();
      filteredDungeons = data.filter((dungeon) => dungeon.title.toLowerCase().includes(keyword));
    }

    if (limit) {
      filteredDungeons = filteredDungeons.filter((_, index) => index < Number(limit));
    }

    res.json({ items: filteredDungeons, maxLength: Data.length });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Dungeons is not found' });
  }
};

export const getDungeon = async (req, res) => {
  try {
    const data = await fs.promises.readFile(dbFileDungeons, 'utf-8');

    const id = Number(req.params.id);
    const dungeon = data.find((dungeon) => dungeon.id === id);
    if (!dungeon) {
      res.status(404).json({ error: 'Dungeon nod found' });
    }
    res.json(dungeon);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Dungeon is not found' });
  }
};
