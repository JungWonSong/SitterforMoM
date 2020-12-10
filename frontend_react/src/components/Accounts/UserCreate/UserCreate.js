/* daum */
import React, {useState} from 'react';
import axios from 'axios';

import {useHistory} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const UserCreate = () => {

    const [address, setAddressr] = useState();

    const getZipCode = () => {
    // eslint-disable-next-line no-undef
        new daum.Postcode({
            oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                setAddressr(data.address);
                console.log(data);
            }
        }).open();

    };


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
        <div className="container" >

            <Form className="form-join" onSubmit={userJoin}>

               <div className="brick-join">
                    <p className="join-title">회원가입</p>

                    <p className="form-title">로그인 정보</p>
                    <Form.Row>
                    <Col xs={12}>
                        <Form.Control type="text" placeholder="아이디는 전화번호로 입력해주세요~"  />
                    </Col> 
                    </Form.Row>
                    <Form.Row>
                    <Col xs={12}>
                        <Form.Control type="password" placeholder="비밀번호를 입력해 주세요. (8~16자/ 문자, 숫자, 특수문자 혼용)" autoComplete="off"/>
                    </Col> 
                    </Form.Row>
                    <Form.Row>
                    <Col xs={12}>
                        <Form.Control type="password" placeholder="비밀번호를 다시 입력해주세요."  />
                    </Col> 
                    </Form.Row>
                    <Form.Row>
                    <p className="warning-sign" id="password_msg" style={{display:"none"}}></p>
                    </Form.Row>
                    <br/>
                    <hr /> 
                    <p className="form-title">회원 정보</p>
                    <Form.Row>
                    <Col xs={12}>
                        <Form.Control type="text" placeholder="실명을 입력해주세요."  />
                    </Col> 
                    </Form.Row>
                    <Form.Row>
                    <Col xs={8}>
                        <Form.Control type="text" placeholder="휴대전화번호를 입력해주세요."  />
                    </Col>
                    
                    <Col>
                    <Button variant="outline-primary">인증</Button>
                    </Col>
                    </Form.Row>
                    <Form.Row>
                    <Col xs={8}>
                    <Form.Control type="email" placeholder="이메일 주소를 입력해주세요."  />
                    </Col>
                    <Col>
                    <Button variant="outline-primary">인증</Button>
                    </Col>
                    </Form.Row>

                    <Form.Row>
                    <Col xs={4}>
                    <Form.Control className="mb-2 mr-sm-2" placeholder="우편번호 찾기"  onClick={getZipCode} readOnly />
                    </Col>
                    <Col>
                    <Form.Control className="mb-2 mr-sm-2"  type="text" onClick={getZipCode} placeholder="도로명 주소를 선택해주세요." id="address1" value={address} readOnly />
                    </Col>
                    </Form.Row>    

                    <Form.Row>
                    <Col xs={12}>
                    <Form.Control className="mb-2 mr-sm-2"  type="text" placeholder="나머지 주소를 입력주세요." id="address2" />
                    </Col>
                    </Form.Row>   
            
                    <Button variant="outline-dark" type="submit">
                    회원가입
                    </Button>
               </div>
                
                
                
                
            </Form>
        </div>
        
    );
};

export default UserCreate;
