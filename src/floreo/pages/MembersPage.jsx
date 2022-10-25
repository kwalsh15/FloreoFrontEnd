import { useSelector } from "react-redux";
import { Members } from "../../ui/components/members";
import { MDBNavbar, MDBTypography } from "mdb-react-ui-kit";

export const MembersPage = () => {
  const { members }  = useSelector((state) => state.members);
  return (
    <>
      <MDBNavbar expand="lg" bgColor="dark">
        <div className="w-100 d-flex justify-content-center">
          <MDBTypography color='light' tag='h3'>Integrantes</MDBTypography>
        </div>
      </MDBNavbar>
      <div className='row g-0'>
        {members.map(member => (
          <div className="col mb-4" key={member.id}>
            <Members data={member} />
          </div>
        ))}
      </div>
    </>
  );
}