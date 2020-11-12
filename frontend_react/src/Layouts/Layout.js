
import { Nav, Footer } from '.';
import Home from '../pages/Home';

const Layout = ({ children, match, location, history }) => {
    
    return (
        <>
            <Nav />

            <div className="container my-5">{children}
                
            </div>
            
            <Footer />
        </>
    );
};


export default Layout;
