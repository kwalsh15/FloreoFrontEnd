import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export const Footer = () => {
  const { active: aboutInformation } = useSelector((state) => state.section);

  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href={aboutInformation?.Facebook}
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href={aboutInformation?.Instagram}
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Ingresa tu correo electrónico: </strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                  label="Correo electrónico"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribirme
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="d-flex align-items-center justify-content-center">
          <p>Contacto:</p>
        </section>

        <MDBContainer>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="6" sm="3">
              Teléfono:
            </MDBCol>
            <MDBCol size="6" sm="3">
              { aboutInformation?.Telefono }
            </MDBCol>
            <div className="w-100"></div>
            <MDBCol size="6" sm="3">
              Email:
            </MDBCol>
            <MDBCol size="6" sm="3">
              floreolospupilos@gmail.com
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};
