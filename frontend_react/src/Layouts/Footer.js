import icon from '../images/icon.PNG';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="col-12 col-md">
                    <small class="d-block mb-3 text-muted">
                        <img
                            alt=""
                            src={icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /> &nbsp;
                        &copy; 2020 Sitter for MoM
                    </small>
                </div>
                
                <div class="col-6 col-md"></div>
            </div>
        </footer>
    );
};

export default Footer;
