
import { MDBNavbar, MDBTypography } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';
import { Service } from '../../ui/components';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
export const ServicePage = () => {
  const location = useLocation();
  return (
    <>
      <MDBNavbar expand="lg" bgColor="black">
        <div className="w-100 d-flex justify-content-center">
          <MDBTypography color='white' tag='h3'>Servicios - {location.state.nombre}</MDBTypography>
        </div>
      </MDBNavbar>
      <br />
      <Link to={'/home'}>
        <button className="btn"><IoIosArrowBack size={'35'} /></button>
      </Link>
      <div>
        <Service data={location.state} />
      </div>
    </>
  );
}
