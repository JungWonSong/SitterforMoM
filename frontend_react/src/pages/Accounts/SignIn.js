import axios from 'axios';
import React from 'react';
import {useHistory} from 'react-router-dom';
import { setToekn } from 'store';
import { useAppContext } from 'store';
import kakobtn from '../../images/kakao_login_medium_wide.png';
import naverbtn from '../../images/naver_Green.PNG';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const SignIn = () => {
    const {store, dispatch} = useAppContext();
    const history = useHistory();
    

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
            //console.log('토큰 확인 ', jwtToken);
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
        <div>
        <div className="container">
            
            
                 <div className="row ">
                                   
      
                        <div className="col">
                            <Link to="/" alt="" >
                                <img src={kakobtn} alt=""/>
                            </Link>
                        </div>
                        <form onSubmit={onSubmit}>
                        <div className="col">
                            <input type="text" className="username" name="username" placeholder="전화번호를 압력하세요" required />
                            <input type="password" className="password" name="password" placeholder="비밀번호를 입력하세요" required />
                            <Button type="submit">로그인</Button>
                        </div>
                        </form>
                    </div>
                
            </div>
      
            <div className="bottom-container">
                <div className="row">
                    <div className="col">
                        <Link to="/" className="btn text-white">회원 가입 </Link>
                    </div>
                    <div class="col">
                        <Link to="/" className="btn text-white">비밀번호 찾기 </Link>
                    </div>
                </div>
            </div>
      </div>
    );
};
export default SignIn;
