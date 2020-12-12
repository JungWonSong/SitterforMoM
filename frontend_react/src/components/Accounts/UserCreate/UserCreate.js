/* daum */

import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {useHistory} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const UserCreate = () => {

    const [address, setAddressr] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        //const script = document.createElement('script')
        //script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        //script.async = true
    
      return () => {
      };
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    const getZipCode = () => {
    // eslint-disable-next-line no-undef
        new daum.Postcode({
            oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            var zipcode = document.getElementById("zipcode");
            zipcode.value = data.zonecode;
                setAddressr(data.address);
                //console.log(data);
            }
        }).open();

    };

  
    const changeImage = (e) => {
  
        var profile_image = document.getElementById("profile_image");
        var fReader = new FileReader();
        fReader.readAsDataURL(profile_image.files[0]);
        fReader.onloadend = function(event) {
           var profile_image_div = document.getElementById("profile_image_div");
            profile_image_div.style = "background-image: url(" + event.target.result + ")";

        }
        
    };

    const InsertProfile = async (e) => {

        let formData = new FormData(); 
        formData.append('user', 2); 
        formData.append('nickname', document.getElementById("nickname").value); 
        formData.append('image',document.getElementById("profile_image").value);
        formData.append('zipcode', document.getElementById("zipcode").value);
        formData.append('address1', document.getElementById("address1").value);
        formData.append('address2', document.getElementById("address2").value);
        formData.append('phone_number', document.getElementById("phone_number").value);
        console.log(userId);
        console.log(document.getElementById("nickname").value);
        console.log(document.getElementById("profile_image").value);
        console.log(document.getElementById("zipcode").value);
        console.log(document.getElementById("address1").value);
        console.log(document.getElementById("address2").value);
        console.log(document.getElementById("phone_number").value);

        await axios
        .post('/api/accounts/profile/', formData)
        .then(({ data }) => {
            console.log(data);
            
        })
        .catch((e) => {
            console.error(e);
            alert(e);
        });
    };

    const Login = async (e) => {
        try {

            let formData = new FormData(); 
            formData.append('username', document.getElementById("username").value); 
            formData.append('password',document.getElementById("password").value);
            await axios
            .post('/api/accounts/login/', formData)
            .then(({ data }) => {
                console.log(data);
                
            })
            .catch((e) => {
                console.error(e);
                alert(e);
            });
    
            } catch (e) {
                console.error(e);
            }
    };

    const history = useHistory();
    // 회원 가입 API 호출
    const userJoin = async (e) => {
        // 1. 기본 동작 막기
        e.preventDefault();
        // 2. 데이터 준비하기
        let formData = new FormData(); 
        formData.append('username', e.target.username.value); 
        formData.append('password',e.target.password.value);
        formData.append('email',e.target.email.value);
        // 3. api 호출
        await axios
            .post('/api/accounts/join/', formData)
            .then(({ data }) => {
                console.log(data.id);
                setUserId(data.id);
                InsertProfile();
                Login()
                history.push('/');
            })
            .catch((e) => {
                console.error(e);
                alert(e);
            });
    };
    return (
        <Container fluid="md">
     
            <Form className="form-join" onSubmit={InsertProfile}>

               <div className="brick-join">
                    <p className="join-title">회원가입</p>

                    <p className="form-title">로그인 정보</p>
                    <br />
                    
                    <Form.Row className="justify-content-md-center">
                    <Col >
                        <Form.Control id="username" type="text" placeholder="아이디는 전화번호로 입력해주세요~"  />
                    </Col> 
                    </Form.Row >

                    <Form.Row className="justify-content-md-center">
                    <Col >
                        <Form.Control id="password" type="password" placeholder="비밀번호를 입력해 주세요. (8~16자/ 문자, 숫자, 특수문자 혼용)" autoComplete="off"/>
                    </Col> 
                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                    <Col>
                        <Form.Control id="re_password" type="password" placeholder="비밀번호를 다시 입력해주세요."  />
                    </Col> 
                    </Form.Row>
                    

                    <Form.Row className="justify-content-md-center">
                    <p className="warning-sign" id="password_msg" style={{display:"none"}}></p>
                    </Form.Row>
                    <br/>
                    <hr /> 
                    <p className="form-title">회원 정보</p>
                    <Form.Row className="justify-content-md-center ">
                    <Col md="auto">
                    <div className="imageCircle" id="profile_image_div" >
                        <div className="imageJoin">
                            <input type="file" accept="image/*" id="profile_image" onChange={changeImage}/>
                            <i className="icon-camera_icon " role="presentation" ></i> 
                        </div>
                    </div> 
                    </Col> 
                    <Col >
                        <Form.Control id="nickname" type="text" placeholder="닉네임을 입력해주세요."  />
                    </Col> 
                    </Form.Row>
                    <Form.Row className="justify-content-md-center ">
                    <Col>
                        <Form.Control id="phone_number" type="text" placeholder="휴대전화번호를 입력해주세요."  />
                    </Col>
                    <Col md="auto">
                    <Button variant="outline-primary">휴대폰 인증</Button>
                    </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                    <Col >
                    <Form.Control id="email" type="email" placeholder="이메일 주소를 입력해주세요."  />
                    </Col>
                    <Col md="auto">
                    <Button variant="outline-primary">이메일 인증</Button>
                    </Col>
                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                    <Col md="auto">
                    <Form.Control id="zipcode" className="mb-2 mr-sm-2" placeholder="우편번호 찾기"  onClick={getZipCode} readOnly />
                    </Col>
                    <Col>
                    <Form.Control id="address1" className="mb-2 mr-sm-2"  type="text" onClick={getZipCode} placeholder="주소를 선택해주세요." value={address} readOnly />
                    </Col>
                    </Form.Row>    

                    <Form.Row className="justify-content-md-center">
                    <Col xs={12}>
                    <Form.Control id="address2" className="mb-2 mr-sm-2"  type="text" placeholder="나머지 주소를 입력주세요." />
                    </Col>
                    </Form.Row>   
            
                    <Button variant="outline-dark" type="submit">
                    회원가입
                    </Button>
               </div>
                
            </Form>
        </Container>
        
    );
};

export default UserCreate;
