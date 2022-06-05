import personIcon from '../assets/person.png';
import Lined2 from '../components/Lined2';
import styles from './MyPage.module.css'

function MyPage(){
    return(
        <>
            <br />
            <div className={styles.container}>
                <img src={personIcon} alt="프로필" />
                <h2><Lined2>닉네임</Lined2></h2>
                <h3>swtesting@naver.com</h3>
                <br />
                <h3><Lined2>관심 종목</Lined2></h3>
                <br />
                <h3><Lined2>내 댓글</Lined2></h3>
            </div>
        </>
        
    );

}

export default MyPage;