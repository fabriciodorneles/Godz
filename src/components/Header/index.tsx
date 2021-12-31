import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <img src="/images/logo.svg" alt="ig.news" /> */}
        <nav>
          <a href="./what">
            <img src="/images/question_icon.svg" alt="ig.news" />
          </a>
          <a href="./how">
            <img src="/images/right_arrow_icon.svg" alt="ig.news" />
          </a>
          <a href="./who">
            <img src="/images/at_icon.svg" alt="ig.news" />
          </a>
        </nav>
      </div>
    </header>
  );
}
