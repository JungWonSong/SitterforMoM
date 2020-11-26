import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Marketing extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="inBox" id="uncontrolled-tab-example">
                <Tab eventKey="inBox" title="이런것이 좋았어요">
                   
                </Tab>
                <Tab eventKey="course" title="저희 홍보해주세요">
                   
                </Tab>
            </Tabs>
            </div>
        );
    }
}

export default Marketing;