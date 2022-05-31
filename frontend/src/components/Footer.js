import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <ul className={styles.links}>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
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
