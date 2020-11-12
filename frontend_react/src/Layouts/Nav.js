import { Link } from 'react-router-dom';
import { delToken } from '../store';
import { useAppContext } from '../store';
import icon from '../images/icon.PNG';


const Nav = () => {
    const {store, dispatch} = useAppContext();
    
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top bg-info">
            <div class="container d-flex flex-column flex-md-row justify-content-between ">
                
                <div class="navbar-header">
                    
                    &nbsp;&nbsp;
                    <a class="navbar-brand text-white" href="/" alt="">Sitter for MoM</a>
                </div>
                <div class="collapse navbar-collapse" id="nav_menu">
                    <ul class="nav navbar-nav">
                    <li class="active">
                            <a href="">HTML</a>
                        </li>
                    </ul>
                </div>
                {store.isAuthenticated ? (
                    <Link
                    class="py-2 d-none d-md-inline-block text-white"
                       to="/accounts/signout" 
                       onClick={(e) => {
                           e.preventDefault();
                           dispatch(delToken());
                       }}
                   >
                    SignOut
                   </Link>
                ) : (
                    <button 
                        class="btn btn-outline-dark my-2 my-sm-0"
                        type="submit"
                    >
                    <Link
                     class="py-2 d-none d-md-inline-block text-white"
                        to="/accounts/signin"
                    >
                     SignIn
                    </Link>
                    </button>
                )}               
            </div>
        </nav>
    );
};

export default Nav;
