
/*global Kakao */
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
        //const script = document.createElement('script')
        //script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        //script.async = true
    
        if(!Kakao.isInitialized()) {
            Kakao.init('13fdd47dd448192e3f9b6d35e6960217');
        }
        // SDK 초기화 여부를 판단합니다.
        console.log(Kakao.isInitialized());

      return () => {
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const loginWithKakao= async (e) => {
        try{
            if(!Kakao) {
                console.log("no kakao");
            }
            Kakao.Auth.login({
                success:(auth) => {
                    console.log("login success! " + auth);
                    //console.log( auth);
                    if (!Kakao.Auth.getAccessToken()) {
                        Kakao.Auth.setAccessToken(auth);
                    }
                    
                    if (Kakao.Auth.getAccessToken()) {
                        console.log('logged in.');
                        Kakao.API.request({
                            url: '/v2/user/me',
                            success: function(response) {
                                var sPerson = JSON.stringify(response);
                                var oPerson = JSON.parse(sPerson);
                                console.log(oPerson.kakao_account.profile.nickname);
                                console.log(oPerson.kakao_account.profile.profile_image_url);
                            },
                            fail: function(error) {
                                console.log(error);
                            }
                        });
                        
                    }
                },
                fail: (err) => {
                    console.error(err);
                }
            })
        } catch(err) {
            console.log(err);
        }
    };

    const loginWithNaver= async (e) => {
        try {
             const response = await axios.get('allauth/naver/login/', { withCredentials: true });
            console.log(response);
            // 로그인 완료 후 처리
            } catch (e) {
                console.log("###################"+ e);
                if (e.response) {
                    const { data } = e.response;
                    console.error(data);
                }
            }
    };

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
            const response = await axios.post('/api/accounts/login/', formData);
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
    
    // eslint-disable-next-line no-undef
    
    
    
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
                <Button variant="warning" onClick={loginWithKakao}>
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
