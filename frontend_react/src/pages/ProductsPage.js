import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

// 인증 방법 - 심플 토큰 ->
// api 설계 구조 - 유행(1. 많이 쓰는 방식, 교육 기관에서 활용)
// 2. 보안 트렌드나, 설계 트렌드가 바뀐 경우

// 코드 고도화, 코드 리팩토링 ---> 회사에 들어가면 새로 배워야 하는 경우
// jwt -> js(ajax -> api call)
// 토큰 -> 서버 -> 토큰 정보를 db에서 조회 -> 인증 ok -> 회신 결과
// MSA 네이버(검색 서비스가 안되더라도 메일은 동작해야 한다.)
// 회원정보 디비
// jwt - api운영에 필요한 필수 정보를 담고 있다.
// 암호화 -> 토큰 자체는 공개되어 있다.
// 암호화 레벨에 대한 의구심

const ProductsPage = ({ match }) => {
    useEffect(() => {
        // match.params.product_slug 를 가지고 api 호출을 한다.
        axios
            .get('/products')
            .then(({ data }) => {
                console.log(data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);
    return (
        <>
            <a href="#" className="btn btn-primary">
                홈으로 가는 링크
            </a>
            
            <p>Products List</p>
            <span>1</span>
            <br />
            <Link to={match.url + '/macbookair'}>See Macbook Air</Link>
            <br />
            <span>
                {match.params.product_slug
                    ? match.params.product_slug
                    : 'no slug'}
            </span>
            <Link to="/">Go main</Link>
        </>
    );
};

export default ProductsPage;
