import { DifficultyLine } from '@/components';
import styles from './DungeonPage.module.css';
import { Button, StatusLine } from '@/shared';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDungeonsId } from '@/api/requests';
import MoneySvg from '@/assets/img/Money.svg';

export const DungeonPage = () => {
  const [data, setData] = useState<DungeonType>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDungeonsId({
      params: {
        id: Number(id)
      }
    }).then((res) => setData(res.data));
  }, [id]);
  
  return (
    <div className={styles.inner}>
      <img className={styles.img} src={data?.img} alt='dungeon' />
      <h2 className={styles.title}>{data?.title}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.desc_title}>Сложность</h3>
          <DifficultyLine difficulty={data?.difficulty} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.desc_title}>Среднее время:</h3>
          <span>{data?.time}</span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.desc_title}>Стоимость:</h3>
          <div className={styles.money_block}>
            <span>{data?.price}</span>
            <img src={MoneySvg} alt='money' />
          </div>
        </li>
        <li className={styles.award_block}>
          <h3 className={styles.desc_title}>Ценность наград:</h3>
          <StatusLine progress={data?.award} />
        </li>
      </ul>
      <Button onClick={() => navigate('/')} variant='primary'>
        Вернуться назад
      </Button>
    </div>
  );
};
