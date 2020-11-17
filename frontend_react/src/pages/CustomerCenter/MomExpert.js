import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class MomExpert extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>엄마 상담전문가는 뭔가요?</h1>
                    <p>
                        맘 상담방은 익명으로 운영될 예정입니다.
                        아이를 키다우다 보면 자연스레 육아 고민이 생기기 마련입니다.
                        하지만 다른 사람들에게 공개하고 싶지 않은 고민들이지요.
                        그렇다고 심리상담센터나 육아상담센터에 가도 시원스레 해결되지 않는 고민들입니다.
                        
                        왜 그럴까요??
                        그건 같은 문제를 경험해 본 사람 만이 속시원한 상담을 해줄수 있기 때문입니다.
                        예를들어 학교폭력에 고통 받는 아이를 위한 상담은 이미 학교폭력을 극복한 학부모만이 좀 더 생생한 상담을 해줄 수 있을 것입니다.

                        그럼 엄마 상담전문가는 어떻게 될 수 있을까요?
                        맘 상담방에 올라오는 고민글들에 친절히 경험했던 일들을 답글로 달아 주시거나 추천을 많이 받은 분들이 될 수 있습니다.
                        엄마 상담전문가가 되시면 전화상담, 화상상담 등 개별 상담권을 구매 할 수 있도록 해 드릴 것입니다.
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default MomExpert;