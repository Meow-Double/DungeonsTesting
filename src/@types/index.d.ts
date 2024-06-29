interface DungeonType {
  id: number;
  title: string;
  difficulty: number;
  time: string;
  price: number;
  award: number;
  img: string;
}

type DungeonTypeList = Array<Dungeon>;
