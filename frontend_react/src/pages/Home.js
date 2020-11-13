import React, { Component } from 'react';
import axios from 'axios';
import KakaoMap from '../components/KakaoMap';

class Home extends Component {

    

    getSomeItem = () => {
        axios
            .get('/products')
            .then(({ data }) => {
                console.log(data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    componentDidMount() {
        //this.getSomeItem();
    }
    render() {
        //const { history } = this.props;

        return (
            <div>
                <KakaoMap />
                
            </div>
        );
    }
}

export default Home;
