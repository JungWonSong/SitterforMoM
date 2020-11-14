// 여러 페이지를 이동할 수 있게 도와주는 BrowserRouter를 만드는 것
// 여러 페이지를 하나로 묶어둔다.

import { Layout } from 'Layouts';
import Accounts from 'pages/Accounts/Accounts';
import Jobs from 'pages/Jobs/Jobs';
import Secure from 'pages/Secure/Secure';
import MomTalk from 'pages/MomTalk/MomTalk';
import MomReview from 'pages/MomReview/MomReview';
import CustomerCenter from 'pages/CustomerCenter/CustomerCenter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages';


// react-router-dom v5 switch
// v6 routes - upgrade

// layouts : 전체 레이아웃에 필요한 내용

// PageRouter : 전체 라우팅을 감싸는 역할
// routers : 하위 라우팅(중첩 라우팅)
// Page : 매치된 페이지를 보여주는 역할
// components : 페이지를 구성하는 요소들
// 사고 방식이 사람마다 달라서 -> 프로젝트 폴더링 구조도 달라진다.

// 짜잘하게 쪼개는 방식을 두려워 말라.

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Jobs" component={Jobs} />
                    <Route path="/Secure" component={Secure} />
                    <Route path="/MomTalk" component={MomTalk} />
                    <Route path="/MomReview" component={MomReview} />
                    <Route path="/customercenter" component={CustomerCenter} />
                    <Route path="/accounts" component={Accounts} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default PageRouter;
