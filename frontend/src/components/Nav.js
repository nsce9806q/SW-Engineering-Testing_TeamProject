import UserMenu from './UserMenu';
import styles from './Nav.module.css';
import Lined from '../components/Lined';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
            <Lined><strong>해외 주식 커뮤니티</strong></Lined>
        </h1>
        <ul className={styles.menu}>
          <li>로그인</li>
          <li>회원가입</li>
          <li>
              <UserMenu />
          </li>
        </ul>
      </div>  
    </div>
  );
}

export default Nav;
