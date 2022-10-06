import { Link } from 'react-router-dom';
import { ShoppingCart } from './ShoppingCart';



export const NavbarUi = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className='w-100 d-flex justify-content-center'>
        <Link
            className="navbar-brand"
            to="/"
        >
            Escuela De Floreo Los Pupilos
        </Link>

      </div>

        <div className="navbar-collapse collapse">
            <ul className="navbar-nav ml-auto">
                <i
                    className="nav-item nav-link"
                    style={{
                      cursor: 'pointer'
                    }}
                >
                    <ShoppingCart />
                </i>
            </ul>
        </div>
    </nav>
     );
}
