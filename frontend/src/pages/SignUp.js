import styles from './SignIn.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const url = "http://ec2-13-209-75-85.ap-northeast-2.compute.amazonaws.com:3000"
    const doSignUp = () => {
        axios.post(url+'/auth/register', {
            email: inputs.email,
            password: inputs.password,
            username: inputs.nickname
        })
        .then(function (response) {
            console.log(response);
            alert(response.data.result);
            navigate('/signin');
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
                <button type="button" className={styles.submit} onClick={() => doSignUp()}>회원가입</button>
            </div>
        </>
    );

}

export default SignUp;