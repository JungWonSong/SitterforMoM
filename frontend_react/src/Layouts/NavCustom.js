import { delToken } from '../store';
import { useAppContext } from '../store';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const NavCustom = () => {
    const {store, dispatch} = useAppContext();
    
    return (
        <Navbar bg="info" expand="lg" variant="dark"  >
        <Navbar.Brand href="/">
            엄마들을 위한 공간
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >

        <Nav justify  className="mr-auto" >
            <NavDropdown title="일자리 등록" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Jobs/FindSitter">시터 찾아요</NavDropdown.Item>
                <NavDropdown.Item href="/Jobs/IamaSitter">시터 할래요</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="안심인증" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Secure/Insurance">안심보험 인증</NavDropdown.Item>
              <NavDropdown.Item href="/Secure/Idcard">신분증 인증</NavDropdown.Item>
              <NavDropdown.Item href="/Secure/Account">계좌 인증</NavDropdown.Item>
              <NavDropdown.Item href="/Secure/Address">주소 인증</NavDropdown.Item>
              <NavDropdown.Item href="/Secure/Health">보건 인증</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Secure/Record">범죄사실 기록 인증</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="맘 상담방" id="basic-nav-dropdown">
                <NavDropdown.Item href="/MomTalk/Worry">육아고민 상담</NavDropdown.Item>
                <NavDropdown.Item href="/MomTalk/Course">진로고민 상담</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/MomTalk/NoMeaning">수다방</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="맘 리뷰어" id="basic-nav-dropdown">
                <NavDropdown.Item href="/MomReview/Good">이런것이 좋았어요</NavDropdown.Item>
                <NavDropdown.Item href="/MomReview/Marketing">저희 홍보해주세요</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        
        <Nav justify className="mr-auto" >
            <NavDropdown title="고객센터" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/customercenter/whatisit">어떤 공간인가요?</NavDropdown.Item>
                <NavDropdown.Item href="/customercenter/howtouse">어떻게 이용하나요?</NavDropdown.Item>
                <NavDropdown.Item href="/customercenter/howmuch">비용은 얼마인가요?</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/customercenter/writereview">후기는 어떻게 쓰나요?</NavDropdown.Item>
                <NavDropdown.Item href="/customercenter/securereview">비밀 후기는 뭔가요?</NavDropdown.Item>
                <NavDropdown.Item href="/customercenter/secureinfo">안심인증은 무엇인가요?</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/customercenter/momexpert">엄마 상담전문가는 무엇인가요?</NavDropdown.Item>
                <NavDropdown.Item href="/customercenter/momreviewer">맘 리뷰어는 무엇인가요?</NavDropdown.Item>
            </NavDropdown>
        
        {store.isAuthenticated ? (
            <NavDropdown title="프로필" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/accounts/mypage">My 엄공</NavDropdown.Item>
                <NavDropdown.Item href="/accounts/myprofile">프로필</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/accounts/messagebox">메세지 함</NavDropdown.Item>
                <NavDropdown.Item href="/accounts/secureinfo">안심 인증정보</NavDropdown.Item>
                <NavDropdown.Item href="/accounts/sitterreview">시터후기</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/accounts/momexpert">상담전문가 활동</NavDropdown.Item>
                <NavDropdown.Item href="/accounts/momreviewer">맘 리뷰어 활동</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item 
                    href="/accounts/signout" 
                    onClick={(e) => {
                    e.preventDefault();
                    dispatch(delToken());
                    }}>
                        로그아웃
                </NavDropdown.Item>
            </NavDropdown>
            
        ) : (
            <Link
                className="mr-auto"
                to="/accounts/signin"
            >
                <Button variant="danger">로그인</Button>
            </Link>
            
        )}  
        </Nav>
        </Navbar.Collapse>     
      </Navbar>
    );
};

export default NavCustom;
