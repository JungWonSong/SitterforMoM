import React, { Component } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import MessageInBox from 'components/Accounts/MessageInBox';
import MessageOutBox from 'components/Accounts/MessageOutBox';

class MessageBox extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="inBox" id="uncontrolled-tab-example">
                <Tab eventKey="inBox" title="수신함">
                    <MessageInBox/>
                </Tab>
                <Tab eventKey="outBox" title="발신함">
                    <MessageOutBox/>
                </Tab>
  
            </Tabs>
        );
    }
}

export default MessageBox;