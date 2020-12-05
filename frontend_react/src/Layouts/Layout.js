

import { NavCustom, Footer } from './';

const Layout = ({ children, match, location, history }) => {
    
    return (
        <>
            <NavCustom />

            <div className="container-fluid">
                {children}
                
            </div>
            
            <Footer />
        </>
    );
};


export default Layout;
