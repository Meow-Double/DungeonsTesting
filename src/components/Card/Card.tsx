import { Link } from 'react-router-dom';
import { DifficultyLine } from '../DifficultyLine/DifficultyLine';
import styles from './Card.module.css';
import ArrowSvg from '@/assets/img/Arrow.svg';

interface CardProps {
  title: string;
  img: string;
  difficulty: number;
  id: string;
}

export const Card = ({ title, img, difficulty, id }: CardProps) => {
  return (
    <li className={styles.card}>
      <img className={styles.img} src={img} alt='background' />
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <DifficultyLine difficulty={difficulty} />
        </div>

        <Link to={`/dungeon/${id}`} className={styles.link}>
          <span className={styles.link_text}>Посмотреть подробнее</span>
          <img className={styles.arrow} src={ArrowSvg} alt='arrow' />
        </Link>
      </div>
    </li>
  );
};
