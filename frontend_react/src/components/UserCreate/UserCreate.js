import axios from 'axios';

const UserCreate = () => {
    // 회원 가입 API 호출
    const userLogin = (e) => {
        // 1. 기본 동작 막기
        e.preventDefault();
        // 2. 데이터 준비하기
        const formData = new FormData(e.target);
        // 3. api 호출
        axios
            .post('http://127.0.0.1:8000/login/', formData)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    return (
        <form action="" onSubmit={userLogin}>
            <label>Username</label>
            <input type="text" name="username" className="btn btn-sm" />
            <label>Email</label>
            <input type="text" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
            <button type="submit">로그인</button>
        </form>
    );
};

export default UserCreate;
