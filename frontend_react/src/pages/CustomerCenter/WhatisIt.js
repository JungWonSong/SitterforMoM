import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class WhatisIt extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>이곳은 엄마들을 위한 공간입니다.</h1>
                        <p>
                        특히 육아를 하면서 경제활동을 하고 싶으신 엄마들을 위한 공간입니다. 
                        엄마들을 위한 공간을 만들어 보자 엄마 경력을 만들 수 있는 공간을 기획해 보았습니다.
                <br/><br/>
                육아는 그 어느 일보다 사회적으로 부가가치가 높은 일 입니다.
                한 아이를 성인이 될때까지 올바르게 양육을 한다는 것은 단순히 먹이고 입히고 재우는 일만 하는 것과 다르다고 생각합니다.
                올바른 가치관을 생성해주고 바르게 키워 나가는 일은 누구에게도 쉬운일이 아니라고 생각합니다.
                그래서 서로 고민을 나누고 남의 집 아이들은 어떻게 키우나 관찰도 해보고 내 아이도 보면서 남의 아이도 같이보고..
                그러면서 혼자하는 육아를 함께 하는 육아로 인식을 바꾸고 싶습니다.
                외동이 점점 많아 지는 시대에 이웃집 형 누나 동생들과 함께 커나가면서 사회생활이 무엇인지 조기교육도 하면서 말입니다.
                <br/><br/>
                이곳은 <br/>
                엄마들이 육아를 하면서 경제활동도 할 수 있는 공간입니다.
                        </p>
                </Container>
            </Jumbotron>           
        );
    }
}

export default WhatisIt;