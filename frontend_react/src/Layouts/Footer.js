import icon from '../images/icon.PNG';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return (
        <Navbar fixed="bottom" expand="sm" variant="light" bg="light">
            
                <small className="d-block mb-3 text-muted">
                    <img
                        alt=""
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                   /> &nbsp;
                    &copy; 2020 엄공(momworldq@gmail.com)
                </small>
            
        </Navbar>
    );
};

export default Footer;
