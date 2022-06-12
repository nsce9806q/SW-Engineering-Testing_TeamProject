import styles from './SignIn.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const url = "http://ec2-13-209-75-85.ap-northeast-2.compute.amazonaws.com:3000"
    const doSignIn = () => {
        axios.post(url+'/auth/login', {
            email: inputs.email,
            password: inputs.password,
        })
        .then(function (response) {
            console.log(response);
            alert("로그인 성공!");
            sessionStorage.setItem("accessToken", response.data.accessToken);
            sessionStorage.setItem("refreshToken", response.data.refreshToken);
            navigate('/');
        })
        .catch(function (error) {
            console.log(error)
        })
    }

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
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="비밀번호 입력"
                        size='40'
                ></input>
                <br />
                <button type="button" onClick={()=>doSignIn()} className={styles.submit}>로그인</button>
                <div className={styles.others}>
                    <p>아이디 찾기</p>
                    <p>비밀번호를 잊어버리셨나요?</p>
                </div>
            </div>
        </>
    );

}

export default SignIn;