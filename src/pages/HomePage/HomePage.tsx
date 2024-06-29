import { Card } from '@/components';
import { Button, Search } from '@/shared';
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { getDungeons } from '@/api/requests';

export const HomePage = () => {
  const [items, setItems] = useState<DungeonTypeList>([]);
  useEffect(() => {
    getDungeons({}).then((res) => setItems(res.data));
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Найди нужное тебе подземелье!</h1>
        <div className={styles.search_block}>
          <Search placeholder='Поиск ...' />
          <Button variant='primary'>Найти</Button>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
};
