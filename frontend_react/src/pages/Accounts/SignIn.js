
/*global Kakao */
/*global naver */
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
    
        initKakao();

        initAndCallBackNaver();

      return () => {
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initKakao = () => {
        if(!Kakao.isInitialized()) {
            Kakao.init('13fdd47dd448192e3f9b6d35e6960217');
        }
        // SDK 초기화 여부를 판단합니다.
        console.log(Kakao.isInitialized());
    };

    const initAndCallBackNaver = () => {
        var naverLogin = new naver.LoginWithNaverId(
            {
                clientId: "C_WSFE0_AkdBhEgMki93",
                callbackUrl: "http://localhost:3000/accounts/signin",
                isPopup: false, /* 팝업을 통한 연동처리 여부 */
                loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
            }
        );
        
        /* 설정정보를 초기화하고 연동을 준비 */
        naverLogin.init();

        /* (4) Callback의 처리. 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) */
		window.addEventListener('load', function () {
            naverLogin.getLoginStatus(function (status) {
                if (status) {
                    var id			= naverLogin.user.getId();
                    var nm			= naverLogin.user.getName();
                    var gender		= naverLogin.user.getGender();
                    var birthday	= naverLogin.user.getBirthday();
                    var email		= naverLogin.user.getEmail();
                    
                    var isRequire = true;
                    if(nm === 'undefined' || nm === null || nm === '') {
                        alert('이름은 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    } else if(email === 'undefined' || email === null || email === '') {
                        alert('이메일은 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    }
                    
                    
                    if(isRequire === false) {
                        naverLogin.reprompt(); // 필수정보를 얻지 못 했을 때 다시 정보제공 동의 화면으로 이동
                        return;	
                    }
                    
                    console.log(id);
                    console.log(nm);
                    console.log(gender);
                    console.log(birthday);
                    console.log(email);

                    var username = document.getElementById("username");
                    username.value = id;
                                //console.log(username.value);
                    var password = document.getElementById("password");
                    password.value = id;
                    onSubmit();
                } else {
                    console.log("callback 처리에 실패하였습니다.");
                }
            });
        });
    };
    
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

                                var username = document.getElementById("username");
                                username.value = oPerson.id;
                                //console.log(username.value);
                                var password = document.getElementById("password");
                                password.value = oPerson.id;
                                onSubmit();
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


    const onSubmit = async (e) => {
        if(e) e.preventDefault();
        // formdata 정리
        let formData = new FormData(); 
        formData.append('username', document.getElementById("username").value); 
        formData.append('password',document.getElementById("password").value);

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
                <div id="naverIdLogin">
                <Button variant="success">
                네이버 로그인
                </Button>
                </div>
                <Button variant="danger" >
                구글 로그인
                </Button>
                <br /> <br /> 
                <Link to="/accounts/UserJoin" >회원가입 /</Link> <Link to="" >비밀번호 찾기</Link>
            </Form>
        </div>    
        </div>
        
    );
};
export default SignIn;
