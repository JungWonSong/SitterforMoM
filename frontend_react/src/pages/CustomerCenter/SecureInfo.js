import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class SecureInfo extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>안심인증 이란?</h1>
                    <p>
                        안심인증이란 회원가입을 한 후에도 여러절차를 통해 신분확인을 하는 절차입니다.

                        그럼 안심인증은 참 번거로운거 같은데 왜 하는 걸까요??
                        엄마들을 위한 공간은 무료로 이용 할 수 있지만 아무나 글을 올릴 수는 없습니다.
                        검증되고 검증된 회원만 정보교류를 하는 곳이니까요.
                        그리고 회원들끼리도 연락처 공개는 공개 설정한 회원만 공개됩니다.
                        개인정보는 소중하니까요.
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default SecureInfo;