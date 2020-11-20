import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

import UserCreate from 'components/UserCreate';
import KakaoMap from 'components/KakaoMap';


const IamaSitter = () => {
    return (
        <div>
        <span>일자리 등록 ></span> <span>시터 할래요</span> 
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">내주변 일자리</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">내 일자리 등록</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">내가 등록한 일자리</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <KakaoMap/>
                    </Tab.Pane>
                <Tab.Pane eventKey="second">
                    
                </Tab.Pane>
                <Tab.Pane eventKey="third">
            
                </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div>
        
        
    );

}

export default IamaSitter;