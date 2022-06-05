import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import styles from './Nav.module.css';
import Lined from '../components/Lined';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
            <Link to='/'><Lined><strong>해외 주식 커뮤니티</strong></Lined></Link>
        </h1>
        <ul className={styles.menu}>
          <li><Link to='/signin'>로그인</Link></li>
          <li><Link to='./signup'>회원가입</Link></li>
          <li>
              <UserMenu />
          </li>
        </ul>
      </div>  
    </div>
  );
}

export default Nav;
