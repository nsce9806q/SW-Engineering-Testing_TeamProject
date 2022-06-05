import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <ul className={styles.links}>
          <li><a target="_blank" rel="noopener noreferrer" href="https://finance.yahoo.com">Yahoo Finance</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/nsce9806q/SW-Engineering-Testing_TeamProject">Our Github</a></li>
        </ul>
        <ul className={styles.info}>
          <li>SW 공학 및 테스팅 Team project</li>
          <li>5팀 | 예창언 정규원 박지혜</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
