import { delToken } from '../store';
import { useAppContext } from '../store';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavCustom = () => {
    const {store, dispatch} = useAppContext();
    
    return (
        <Navbar bg="info" expand="lg" variant="dark"  >
        <Navbar.Brand href="/">
            엄마들을 위한 공간
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >

        <Nav className="mr-auto" >
            <NavDropdown title="일자리 등록" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">시터 찾아요</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">시터 할래요</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="안심인증" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="맘 상담방" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">육아고민 상담</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">진로고민 상담</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">수다방</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        
        <Nav className="mr-auto" >
            <NavDropdown title="고객센터" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">어떤 공간인가요?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">어떻게 이용하나요?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">비용은 얼마인가요?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">후기는 어떻게 쓰나요?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">비밀 후기는 뭔가요?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">안심인증은 무엇인가요?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">엄마 상담전문가는 무엇인가요?</NavDropdown.Item>
            </NavDropdown>
        
        {store.isAuthenticated ? (
            <NavDropdown title="프로필" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">메세지 수신함</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">메세지 발신함</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">프로필 수정</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">안심 인증정보</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">후기</NavDropdown.Item>
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
