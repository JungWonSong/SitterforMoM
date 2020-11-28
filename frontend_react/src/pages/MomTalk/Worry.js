import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GetWorries from 'components/MomTalk/GetWorries';


class Worry extends Component {
    render() {
        return (
            <div>
            <Tabs defaultActiveKey="inBox" id="uncontrolled-tab-example">
                <Tab eventKey="inBox" title="육아고민 상담">
                    <Link className="mr-auto" to="/MomTalk/WriteWorry">
                        글쓰기
                    </Link>
                    <GetWorries />
                </Tab>
                <Tab eventKey="course" title="진로고민 상담">
                   
                </Tab>
                <Tab eventKey="talk" title="수다방">
                   
                </Tab>
            </Tabs>
            </div>
        );
    }
}

export default Worry;