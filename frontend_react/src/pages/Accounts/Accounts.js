import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';

// 회원 정보에 관한 뷰들을 라우팅
// 로그인, 회원가입, 마이페이지
const Accounts = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.url + '/signin'} component={SignIn} />
        </Switch>
    );
};

export default Accounts;
