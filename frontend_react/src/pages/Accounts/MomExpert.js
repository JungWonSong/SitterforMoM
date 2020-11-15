import React, { Component } from 'react';

class MomExpert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test : 'test test test test test'
        };
    }

    

    functionTest = () => {
        this.setState({
            test : 'TEST #####'
        });
        console.log('TEST#########');
    }

    render() {
        return (
            <div>
                <h1>{this.state.test}</h1>
                <button onClick={this.functionTest}></button>
                맘 수다방에서 얼마나 자신의 경험을 공유했는지.. 댓글을 얼마나 달았는지
                회원들의 추천을 받으면 맘 상담전문가로 활동이 가능하다
            </div>
        );
    }
}

export default MomExpert;