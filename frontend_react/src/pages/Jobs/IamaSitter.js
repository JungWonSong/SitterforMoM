import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

import UserCreate from 'components/UserCreate';
import KakaoMap from 'components/KakaoMap';


const IamaSitter = () => {
    return (
        <div>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="#">내 주변 일자리</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">내 일자리 등록</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">나가 등록한 일자리</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
        
        
    );

}

export default IamaSitter;