import { Link, NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi'

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
                        className="nav-item nav-link" 
                        to="/home"
                    >
                        Home
                    </NavLink>
                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/gallery"
                    >
                        Gallery
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/about"
                    >
                        About
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto" >
                
                <NavLink 
                        className="nav-item nav-link" 
                        to="/about"
                    >
                    <GiShoppingCart 
                        size={ 30 }
                    />
                </NavLink>
                    
                    {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    );
}