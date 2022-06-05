import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import landingImg from '../assets/landing.svg';
import { useState } from 'react';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function HomePage() {
  const [keyword, setKeyword] = useState('');
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <>
      <div className={styles.bg} />
      <div className={styles.container}>
        <form className={searchBarStyles.form}>
          <input
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="종목명, 종목코드 입력"
            size='40'
          ></input>
          <button type="submit">
            <Link to='/stockinfo'><img src={searchIcon} alt="검색" /></Link>
          </button>
        </form>
      </div>
        <div className={styles.figure}>
          <h2>NASDAQ CHART</h2> 
          <img src={landingImg} alt="그래프, 모니터, 윈도우, 자물쇠, 키보드" />
        </div>
    </>
  );
}

export default HomePage;
