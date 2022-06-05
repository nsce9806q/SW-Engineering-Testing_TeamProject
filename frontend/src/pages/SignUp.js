import styles from './SignIn.module.css';
import { useState } from 'react';

function SignUp(){
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        nickname: ''
    });
    const{ email, password, nickname } = inputs;
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return(
        <>
            <br />
            <div className={styles.container}>
                <div className={styles.others}>
                    <h2><strong>SIGN UP</strong></h2>
                </div>
                <input
                        className={styles.textfield}
                        name="nickname"
                        value={nickname}
                        onChange={handleOnChange}
                        placeholder="닉네임 입력"
                        size='40'
                ></input>
                <br />
                <input
                        className={styles.textfield}
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="이메일 입력"
                        size='40'
                ></input>
                <br />
                <input
                        className={styles.textfield}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="비밀번호 입력"
                        size='40'
                ></input>
                <br />
                <button type="signup" className={styles.submit}>회원가입</button>
            </div>
        </>
    );

}

export default SignUp;