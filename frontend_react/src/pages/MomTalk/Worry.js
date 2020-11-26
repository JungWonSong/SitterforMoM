import React, { Component } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Worry extends Component {
    render() {
        return (
            <div>
            <Tabs defaultActiveKey="inBox" id="uncontrolled-tab-example">
                <Tab eventKey="inBox" title="육아고민 상담">
                   
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