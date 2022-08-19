import {  FaTiktok, } from 'react-icons/fa';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn

} from 'mdb-react-ui-kit';

export const Footer = () => {
    
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='https://facebook.com' target="_blank" role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com' target="_blank" role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='https://web.whatsapp.com' target="_blank" role='button'>
              <MDBIcon fab icon='whatsapp' />
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='https://tiktok.com' target="_blank" role='button'>
              <MDBIcon fab>
                    <FaTiktok />
                </MDBIcon>
            </MDBBtn>
          </section>
  
          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>
  
                <MDBCol md='5' start='12'>
                  <MDBInput contrast type='email' label='Email address' className='mb-4' />
                </MDBCol>
  
                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>
  
          <section className='mb-4'>
            <p>
              Gracias por visitarnos!!
            </p>
          </section>
  
    
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    );
}
