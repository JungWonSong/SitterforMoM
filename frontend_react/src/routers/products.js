import { Switch, Route } from 'react-router-dom';
import ProductsPage from 'pages/ProductsPage';

// /product
// /product/macbook
// /product/macbook?id=13&page=11#do7
// react-router-dom 을 이용해서 페이지 이동을 한 도착지 컴포넌트

// match : 전달받은 url 요소
// location : 브라우저의 url 전체 요소
// histroy : 페이지 이동을 함수를 이용해서 해야하는 경우
// front : react - API - backend : django
// 두개에서 차이가 있는 부분, 비슷한 용도로 쓰는 부분 -> 방법을 최대한 비슷하게
// front : react - API - backend : spring
// front : vue.js - API - backend : django
// django -> react, vue, angular
// react - django, node.js

// 로그인 처리 -> header에 인증 정보를 넣어보낸다.
// AUTHENTICATION_KEY
// AUTH_KEY
// 라면 끓여먹을거야 - 마트 - 농심
// 라면 라볶기 - 마트 - 오뚜기

// curl
const products = ({ match }) => {
    return (
        <Switch>
            <Route
                exact
                path={match.url}
                render={() => <span>prodcuts home</span>}
            />
            <Route
                path={match.url + '/:product_slug'}
                component={ProductsPage}
            />
        </Switch>
    );
};

export default products;
