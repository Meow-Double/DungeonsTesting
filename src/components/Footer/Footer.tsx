import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.inner}>
          <p className={styles.text}>
            <span>Created by:</span>
            <span className={styles.copyright}>©Meow_Double 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
