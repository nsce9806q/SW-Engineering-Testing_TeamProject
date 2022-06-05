import { Link } from 'react-router-dom';
import styles from './StockInfo.module.css';
import { useState } from 'react';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';
import landingImg from '../assets/landing.svg';
import Lined2 from '../components/Lined2.js';

function StockInfo(){
    const [keyword, setKeyword] = useState('');
    const handleKeywordChange = (e) => setKeyword(e.target.value);

    return(
        <>
            <div className={styles.container}>
                <form className={searchBarStyles.form}>
                <input
                    name="keyword"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="종목명, 종목코드 입력"
                ></input>
                <button type="submit">
                    <Link to='/stockinfo'><img src={searchIcon} alt="검색" /></Link>
                </button>
                </form>
            </div>
            <div className={styles.text}>
                <h3><Lined2>AMAZON.com, Inc. (AMZN)</Lined2></h3>
                <h4>[주식 차트]</h4>
                <div className={styles.figure}>
                    <img src={landingImg} alt="차트" />
                </div>
                <h4>[회사 요약 정보]</h4>
                <h4>[재무제표]</h4>
                <h4>[종목토론방]</h4>
            </div>
            
        </>
    );

}

export default StockInfo;