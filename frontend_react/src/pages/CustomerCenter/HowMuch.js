import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class HowMuch extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>서비스를 이용하는데 비용을 지불 해야 하나요?</h1>
                    <p>
                        회원가입과 안심인증을 한 뒤에는 서비스를 무료로 이용 할 수 있습니다.

                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default HowMuch;