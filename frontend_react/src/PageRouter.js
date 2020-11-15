
import { Layout } from 'Layouts';
import Accounts from 'pages/Accounts/Accounts';
import Jobs from 'pages/Jobs/Jobs';
import Secure from 'pages/Secure/Secure';
import MomTalk from 'pages/MomTalk/MomTalk';
import MomReview from 'pages/MomReview/MomReview';
import CustomerCenter from 'pages/CustomerCenter/CustomerCenter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages';


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
