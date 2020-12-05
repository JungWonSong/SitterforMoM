import React, { Component } from 'react';
import axios from 'axios';
import KakaoMap from '../components/KakaoMap';

import Carousel from 'react-bootstrap/Carousel';
import home1 from 'images/home1.png';

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
            <div className="container-fluid">
                <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={home1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={home1}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={home1}
                        alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>

            <br/><br/>
            <KakaoMap />
                
        </div>
        );
    }
}

export default Home;
