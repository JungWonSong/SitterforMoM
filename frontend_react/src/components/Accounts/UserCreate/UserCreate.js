import axios from 'axios';

import {useHistory} from 'react-router-dom';


const UserCreate = () => {

    // 회원 가입 API 호출
    const userJoin = async (e) => {
        // 1. 기본 동작 막기
        e.preventDefault();
        // 2. 데이터 준비하기
        const formData = new FormData(e.target);
        // 3. api 호출
        await axios
            .post('/accounts/join/', formData)
            .then(({ data }) => {
                console.log(data);
                useHistory.push('/');
            })
            .catch((e) => {
                console.error(e);
                alert(e);
            });
    };
    return (
        <form action="" onSubmit={userJoin}>
            <input type="text" name="username" placeholder="전화번호를 입력하세요."  />
            <input type="text" name="email" placeholder="이메일을 입력하세요." />
            <input type="text" name="address" placeholder="주소를 입력하세요." />
            <input type="password" name="password" placeholder="비밀번호를 입력하세요." />
            <button type="submit">회원가입</button>
        </form>
    );
};

export default UserCreate;
