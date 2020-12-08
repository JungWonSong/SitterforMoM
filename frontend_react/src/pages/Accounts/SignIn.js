
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { setToekn, setId } from 'store';
import { useAppContext } from 'store';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const SignIn = ({match}) => {
    const {dispatch} = useAppContext();
    const history = useHistory();
    const [show, setShow] = useState(false);
   
    useEffect(() => {
      //console.log(match);
     
      return () => {
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const loginWithNaver= async (e) => {
        try {
            axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';  
            axios.defaults.headers.common['Accept'] = '*/*'; 
            axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
            axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
            axios.defaults.headers.common['access-control-allow-origin'] = '*';  
            axios.defaults.headers.common['access-control-allow-credentials'] = 'true';
            const response = await axios.get('allauth/naver/login/');
            console.log(response);
            // 로그인 완료 후 처리
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            console.log("###################");
            } catch (e) {
                console.log("###################"+ e);
                if (e.response) {
                    const { data } = e.response;
                    console.log(e.response.data);
                    console.log(e.response.status);
                    console.log(e.response.statusText);
                    console.log(e.response.headers);
                    console.log(e.response.config);
                    console.error(data);
                }
            }
    }
    const loginWithKakao= async (e) => {
      try {
        axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';  
        axios.defaults.headers.common['Accept'] = '*/*'; 
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.common['access-control-allow-origin'] = '*';  
        axios.defaults.headers.common['access-control-allow-credentials'] = 'true';
        const response = await axios.get('kakao/');
        console.log(response);
        // 로그인 완료 후 처리
        console.log("###################");
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        } catch (e) {
            console.log("###################" + e);
            if (e.response) {
                const { data } = e.response;
                console.log(e.response.data);
                    console.log(e.response.status);
                    console.log(e.response.statusText);
                    console.log(e.response.headers);
                    console.log(e.response.config);
                console.error(data);
            }
        }
    }
   

    const onSubmit = async (e) => {
        e.preventDefault();
        // formdata 정리
        let formData = new FormData(); 
        formData.append('username', e.target.username.value); 
        formData.append('password',e.target.password.value);

       // console.log("form data 확인",e.target.username.value);
        //console.log("form data 확인",e.target.password.value);
        // axios로 통신
        try {
            const response = await axios.post('/accounts/login/', formData);
           // console.log(response);
            // 로그인 완료 후 처리
            const {
                data: { token: jwtToken,
                        user: currentUserName }
            } = response;
            
            const {
                id : idT
            } = currentUserName;
            //console.log('response 확인 ', currentUserName);
            dispatch(setToekn(jwtToken));
            dispatch(setId(idT));
            history.push('/');
        } catch (e) {
            setShow(true);
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };
    
    
    
    return (
        <div className="container-fluid">
        <div className="bg">
            <Form className="form-login" onSubmit={onSubmit}>
                <Form.Group controlId="username">
                <Form.Control type="text" placeholder="아이디"  />
                </Form.Group>

                <Form.Group controlId="password">
                <Form.Control type="password" placeholder="비밀번호"  />
                </Form.Group>
                {show ? (<Alert variant="danger">비밀번호를 확인하세요.</Alert>) : (<> </>)}
                
                <Button variant="outline-dark" type="submit">
                로그인
                </Button>
                <hr />
                <Button variant="warning" onClick={loginWithKakao} >
                카카오 로그인
                </Button>
                <Button variant="success" onClick={loginWithNaver}>
                네이버 로그인
                </Button>
                <br /> <br /> 
                <Link to="/accounts/UserJoin" >회원가입 /</Link> <Link to="" >비밀번호 찾기</Link>
            </Form>
        </div>    
        </div>
        
    );
};
export default SignIn;
