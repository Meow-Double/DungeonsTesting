import styles from './DifficultyLine.module.css';

interface DifficultyLineProps {
  difficulty?: number;
}
export const DifficultyLine = ({ difficulty }: DifficultyLineProps) => {
  const difficultyValue = difficulty ?? 0;
  return (
    <div className={styles.stars}>
      {[...new Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`${styles.star} ${index < difficultyValue && styles.active}`}
          width='17'
          height='17'
          viewBox='0 0 17 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='8.48529'
            width='12'
            height='12'
            transform='rotate(-45 0 8.48529)'
            fill='#D9D9D9'
          />
        </svg>
      ))}
    </div>
  );
};
