import { Card } from '@/components';
import { Button, Search } from '@/shared';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { getDungeons } from '@/api/requests';

export const HomePage = () => {
  const [value, setValue] = useState<string>('');
  const [limit, setLimit] = useState<number>(3);
  const [items, setItems] = useState<DungeonTypeList>([]);
  useEffect(() => {
    getDungeons({ config: { params: { limit: limit } } }).then((res) => setItems(res.data));
  }, [limit]);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickFind = () => {
    getDungeons({ config: { params: { title: value } } }).then((res) => setItems(res.data));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Найди нужное тебе подземелье!</h1>
        <div className={styles.search_block}>
          <Search placeholder='Поиск ...' value={value} onChange={changeInputValue} />
          <Button variant='primary' onClick={onClickFind}>
            Найти
          </Button>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
        <Button onClick={() => setLimit((prev) => prev + 3)} variant='primary'>
          Показать больше
        </Button>
      </div>
    </>
  );
};
