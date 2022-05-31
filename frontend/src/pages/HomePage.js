import styles from './HomePage.module.css';
import landingImg from '../assets/landing.svg';

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
        <div className={styles.texts}>
          <p className={styles.description}>
            종목명/종목 코드를 입력하세요
          </p>
        </div>
        <div className={styles.figure}>
          <h2>NASDAQ CHART</h2> 
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
    </>
  );
}

export default HomePage;
