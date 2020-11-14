import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <div>
                주소인증.. 공공기관으로 받은 편지를 사진찍어 올리면
                <br/>
                이름과 매칭해서 인증
                <br/>
                구글 API 사용예정(사진에서 텍스트 추출)
                <br/>
            </div>
        );
    }
}

export default Address;