import styles from './SignIn.module.css';
import { useState } from 'react';

function SignIn(){
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const{ email, password } = inputs;
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
                    <h2><strong>LOGIN</strong></h2>
                </div>
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
                <button type="signin" className={styles.submit}>로그인</button>
                <div className={styles.others}>
                    <p>아이디 찾기</p>
                    <p>비밀번호를 잊어버리셨나요?</p>
                </div>
            </div>
        </>
    );

}

export default SignIn;