import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class MomReviewer extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>맘 리뷰어는 뭔가요?</h1>
                    <p>
                        육아를 하면서 사용한 제품이나 스스로 홍보하고 싶을 만큼 좋았던 제품이나 맛집을 올리는 엄마 광고 모델입니다.
                        스스로 광고 모델이 되어 보세요.
                        
                        유튜브가 생기면서 이제는 개인TV도 만들 수 있는 시대가 되었습니다.
                        영상을 올리는 것이 부담 스럽다면 좋았던 제품이나 장소를 글로 써보세요.
                        사진 몇장 올리고 간단한 피드백도 좋습니다.
                        그렇게 간단 하지만 꾸준히 올린다면 맘 리뷰어가 될 수 있습니다.

                        맘 리뷰어가 되시면 업체로 부터 제품 홍보 기회를 얻을 수 있습니다.
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default MomReviewer;