import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarLink,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

export const NavbarUi = () => {
  const { active: aboutInformation } = useSelector((state) => state.section);
  // d-flex w-auto mb-3"

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <div className="w-100 d-flex justify-content-center">
        <MDBTypography tag='h3'>{aboutInformation?.Nombre}</MDBTypography>  
      </div>
      {/* <MDBNavbarBrand className="w-100 d-flex justify-content-cente">Navbar</MDBNavbarBrand> */}
      {/* <MDBNavbarLink className="ml-auto">
        <MDBIcon fas icon="shopping-cart" />
      </MDBNavbarLink> */}

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          <i
            className="nav-item nav-link"
            style={{
              cursor: "pointer",
            }}
          >
            <ShoppingCart />
          </i>
        </ul>
      </div>
    </MDBNavbar>
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //   <div className='w-100 d-flex justify-content-center'>
    //     { aboutInformation?.Nombre }
    //    </div>

    //     <div className="navbar-collapse collapse">
    //         <ul className="navbar-nav ml-auto">
    //             <i
    //                 className="nav-item nav-link"
    //                 style={{
    //                   cursor: 'pointer'
    //                 }}
    //             >
    //                 <ShoppingCart />
    //             </i>
    //         </ul>
    //     </div>
    // </nav>
  );
};
