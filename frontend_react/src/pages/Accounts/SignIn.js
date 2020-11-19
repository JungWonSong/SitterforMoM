import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { setToekn } from 'store';
import { useAppContext } from 'store';
import KaKaoBtn from 'react-kakao-login';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    const { Kakao } = window;
    const { naver } = window;

    const responseKaKao = (res) => {
        console.log("#####" + res.response.key);
        console.log("#####" + res.token);
        console.log("#####" + res.response.access_token);
        const USER_ACCESS_TOKEN = res.response.access_token;
        Kakao.Auth.setAccessToken(USER_ACCESS_TOKEN);
        
        //TODO: 처음 사용자이면 사용자 정보를 장고에 보내서 저장
        // 기 등록된 회원이면 로그인 했다고 알림
        Kakao.API.request({
            url: '/v2/user/me',
            success: function(response) {
                console.log("success:" + response.nickName);
                console.log("success:" + response.profileImageUrl);
                console.log("success:" + response.thumbnailUrl);
                console.log("success:" + response.countryISO);
            },
            fail: function(error) {
                console.log(error);
            }
        });

        dispatch(setToekn(USER_ACCESS_TOKEN));
        history.push('/');
      };
     
    const naverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: "JT8MZMpN9i8c6zKvpvZL",
            callbackUrl: "http://localhost:3000/",
            isPopup: false,
            loginButton: {color: "green", type: 3, height: 60} ,
            callbackHandle: true
          });
          naverLogin.init();
          
          window.addEventListener('load', function () {
            naverLogin.getLoginStatus(function (status) {

                console.log("#######" +status);

                if (status) {
                    var email = naverLogin.user.getEmail();
                    var name = naverLogin.user.getNickName();
                    var profileImage = naverLogin.user.getProfileImage();
                    var birthday = naverLogin.user.getBirthday();			
                    var uniqId = naverLogin.user.getId();
                    var age = naverLogin.user.getAge();
                    console.log(email);
                    console.log(name);
                    console.log(profileImage);
                    console.log(birthday);
                    console.log(uniqId);
                    console.log(age);
                } else {
                    console.log("AccessToken이 올바르지 않습니다.");
                }
            });
          });

          window.location.href.includes('access_token') && GetUser();
          function GetUser() {
            const location = window.location.href.split('=')[1];
            const token = location.split('&')[0];
            console.log("token: ", token);
            dispatch(setToekn(token));
            history.push('/');
            //localStorage.setItem("access_token", res.token);
          }
    }
    
    
    const onSubmit = async (e) => {
        e.preventDefault();
        // formdata 정리
        const formData = new FormData(e.target);
        console.log("form data 확인",JSON.stringify(formData));
        // axios로 통신
        try {
            const response = await axios.post('/accounts/login/', formData);
            // 로그인 완료 후 처리
            const {
                data: { token: jwtToken },
            } = response;
            console.log('토큰 확인 ', jwtToken);
            dispatch(setToekn(jwtToken));
            history.push('/');
        } catch (e) {
            if (e.response) {
                const { data } = e.response;
                console.error(data);
            }
        }
    };
    
    return (
        //TODO: 버튼들 크기에 맞게 정렬하고 가운데로 보내기
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>아이디</label>
                    <input type="text" className="form-control" name="username" />
                </div>
                <div className="form-group">
                    <label>패스워드</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    로그인
                </button>
            </form>
        
        <Card  style={{ width: '18rem' }}>
            <Card.Header variant="pills">로그인</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Link>
                        <img 
                        src="https://static.nid.naver.com/oauth/big_g.PNG"  
                        alt=""  
                        width="100%" />
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <KaKaoBtn 
                        width="100%"
                        //styled component 통해 style을 입혀 줄 예정 
                        jsKey={'13fdd47dd448192e3f9b6d35e6960217'}
                        //카카오에서 할당받은 jsKey를 입력
                        buttonText='카카오 계정으로 로그인'
                        //로그인 버튼의 text를 입력
                        onSuccess={responseKaKao}
                        //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장 
                        getProfile={true}
                    />
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
    );
};
export default SignIn;
