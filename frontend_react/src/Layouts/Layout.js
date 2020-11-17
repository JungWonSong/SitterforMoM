
import UserCreate from 'components/UserCreate';
import { NavCustom, Footer } from './';

const Layout = ({ children, match, location, history }) => {
    
    return (
        <>
            <NavCustom />

            <div className="container mr-auto">
                {children}
                
            </div>
            
            <Footer />
        </>
    );
};


export default Layout;
