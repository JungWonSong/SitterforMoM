import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import MyPage from './MyPage';
import MyProfile from './MyProfile';
import MessageBox from './MessageBox';
import SecureInfo from './SecureInfo';
import SitterReview from './SitterReview';
import MomExpert from './MomExpert';
import MomReviewer from './MomReviewer';
import SignOut from './SignOut';
import UserJoin from './UserJoin';
import KakaoLogin from './KakaoLogin';

// 회원 정보에 관한 뷰들을 라우팅
// 로그인, 회원가입, 마이페이지
const Accounts = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/signin'} component={SignIn} />
            <Route exact path={match.url +'/mypage' } component={MyPage} />
            <Route exact path={match.url +'/myprofile' } component={MyProfile} />
            <Route exact path={match.url +'/messagebox' } component={MessageBox} />
            <Route exact path={match.url +'/secureinfo' } component={SecureInfo} />
            <Route exact path={match.url +'/sitterreview' } component={SitterReview} />
            <Route exact path={match.url +'/momexpert' } component={MomExpert} />
            <Route exact path={match.url +'/momreviewer' } component={MomReviewer} />
            <Route exact path={match.url +'/signout' } component={SignOut} />
            <Route exact path={match.url +'/UserJoin' } component={UserJoin} />
            <Route exact path={match.url +'/KakaoLogin' } component={KakaoLogin} />
        </Switch>
    );
};

export default Accounts;
