import axios from 'axios';

import {useHistory} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Alert from 'react-bootstrap/Alert';

const UserCreate = () => {
    const history = useHistory();
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
                history.push('/');
            })
            .catch((e) => {
                console.error(e);
                alert(e);
            });
    };
    return (
        <div className="bg">

            <Form className="form-login" onSubmit={userJoin}>

               
                <Form.Group controlId="username">
                <Form.Control type="text" placeholder="아이디"  />
                </Form.Group>

                <Form.Group controlId="password">
                <Form.Control type="password" placeholder="비밀번호"  />
                </Form.Group>
               
                <Button variant="outline-dark" type="submit">
                회원가입
                </Button>
                
                
                
            </Form>
        </div>
        
    );
};

export default UserCreate;
