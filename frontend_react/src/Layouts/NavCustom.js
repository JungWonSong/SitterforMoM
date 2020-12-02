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
        <div>
        <Navbar bg="bg-white" expand="lg"   >
        <Navbar.Brand href="/">
            엄마들을 위한 공간
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >

        <Nav justify  className="mr-auto" >
            <Nav.Link href="/Jobs/FindSitter">시터 찾기</Nav.Link>
            <Nav.Link href="/MomTalk/Worry">맘 상담방</Nav.Link>
            <Nav.Link href="/MomReview/Marketing">맘 리뷰어</Nav.Link>

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
        </Nav>
        
        <Nav justify className="mr-auto" >
            <a className="nav-link-icon text-center nav-link" href="/" >
                <div className="nav-link-icon__wrapper">
                    <i className="material-icons">mail_outline</i>
                    <span className="badge-custom badge-danger badge-pill">2</span>
                </div>
            </a>
        {store.isAuthenticated ? (
            
            <Link
                className="mr-auto"
                to="/accounts/mypage"
            >
                <Button variant="outline-dark">My 엄공<i className="material-icons">settings</i></Button>
            </Link>
         
        ) : (
            <Link
                className="mr-auto"
                to="/accounts/signin"
            >
                <Button variant="outline-dark">로그인<i className="material-icons">login</i></Button>
            </Link>
            
        )}  
        </Nav>
        </Navbar.Collapse>     
      </Navbar>
      </div>
    );
};

export default NavCustom;
