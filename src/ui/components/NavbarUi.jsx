import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from './ShoppingCart';

export const NavbarUi = () => {
    return (
  
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Floreo
            </Link>

            <div className="navbar-collapse w-100 justify-content-end">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
                        to="/home"
                    >
                        Home
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
                        to="/gallery"
                    >
                        Gallery
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
                        to="/about"
                    >
                        About
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto" >
                    <i className="nav-item nav-link">
                        <ShoppingCart className="nav-item nav-link"/>
                    </i>                    
                </ul>
            </div>
        </nav>
    );
}