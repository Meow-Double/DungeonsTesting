import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbFileDungeons = join(__dirname, '..', 'data.json');

export const getDungeons = async (req, res) => {
  try {
    const data = await fs.promises.readFile(dbFileDungeons, 'utf-8');
    const dungeons = JSON.parse(data);

    let filteredDungeons = [...dungeons];
    const { title, limit } = req.query;

    if (title) {
      const keyword = title.toLowerCase();
      filteredDungeons = dungeons.filter((dungeon) =>
        dungeon.title.toLowerCase().includes(keyword)
      );
    }

    if (limit) {
      filteredDungeons = filteredDungeons.filter((_, index) => index < Number(limit));
    }

    res.json({ items: filteredDungeons, maxLength: dungeons.length });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Dungeons is not found' });
  }
};

export const getDungeon = async (req, res) => {
  try {
    const data = await fs.promises.readFile(dbFileDungeons, 'utf-8');
    const dungeon = JSON.parse(data);

    const id = Number(req.params.id);
    const currentDungeon = dungeon.find((dungeon) => dungeon.id === id);

    if (!currentDungeon) {
      res.status(404).json({ error: 'Dungeon nod found' });
    }
    res.json(currentDungeon);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Dungeon is not found' });
  }
};
