interface DungeonTypeItems {
  id: number;
  title: string;
  difficulty: number;
  time: string;
  price: number;
  award: number;
  img: string;
}

interface DungeonType {
  items: DungeonTypeItemsList;
  maxLength: number;
}

type DungeonTypeItemsList = Array<DungeonTypeItems>;
