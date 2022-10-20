import { useSelector } from "react-redux";
import { useState } from "react";
import { setCollectionData } from "../../helpers/setCollectionData";
import { setSubscribers } from '../../store/subscribers/index';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

export const Subscription = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: ''
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const { subscribers } = useSelector((state) => state.subscribers);

  const isEmailUnique = (email) => {
    const lowerCaseEmail = email.toLowerCase();
    for (let index = 0; index < subscribers.length; index++) {
      const subscriber = subscribers[index];      
      if (subscriber.email.toLowerCase() === lowerCaseEmail) {
        console.log(subscriber);
        return false;
      }
    }
    return true;
  }

  const isEmailvalid = () => {
    const input = document.createElement('input');
    input.type = 'email';
    input.value = formValue.email

    return input.checkValidity();
  }

const handleForm = (ev) => {
  ev.preventDefault();

  const newEmail = isEmailUnique(formValue.email);
  if (!newEmail) Swal.fire('Error en la subscripción', 'El correo electrónico ingresado ya está registrado', 'error');
  if( !formValue.email || !formValue.name || !isEmailvalid() || !isEmailUnique(formValue.email) ) return;

  const newSubscriber = { nombre: formValue.name, email: formValue.email }
  setCollectionData('Suscriptores', newSubscriber);
  dispatch(setSubscribers([...subscribers, newSubscriber]));
  // formValue = {name: '', email: ''};  
  Swal.fire('Subscripción exitosa', 'Te has subscribido al boletín informativo de Pupilos', 'success');
};

return (
  <>
    {/* <form onSubmit={handleForm}> */}
    <MDBRow className="d-flex justify-content-center" style={{ marginBottom: '10px' }}>
      <MDBValidation className='row g-3' onSubmit={handleForm}>
        <MDBCol md="5" start="6">
          <MDBValidationItem feedback="Este campo es requerido" invalid>
            <MDBInput
              contrast
              name='name'
              className='form-control'
              label="Nombre y apellidos"
              className="mb-4"
              required
              value={formValue.name}
              onChange={onChange}
            />
          </MDBValidationItem>
        </MDBCol>

        <MDBCol md="4" start="0">
          <MDBValidationItem feedback="Este campo es requerido" invalid>
            <MDBInput
              contrast
              name='email'
              className='form-control'
              type="email"
              label="Correo electrónico"
              className="mb-4"
              required
              value={formValue.email}
              onChange={onChange}
            />
          </MDBValidationItem>
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn outline color="light" type="submit" className="mb-4">
            Subscribirme
            </MDBBtn>
        </MDBCol>
      </MDBValidation>
    </MDBRow>

    {/* <MDBRow className="d-flex justify-content-center">

          <MDBCol md="5" start="6">
            <MDBInput
              contrast
              label="Nombre y Apellidos"
              className="mb-4"
              required
              onChange={handleNameChange}
            />
          </MDBCol>

          <MDBCol md="4" start="0">
            <MDBInput
              contrast
              type="email"
              label="Correo electrónico"
              className="mb-4"
              required
              onChange={handleEmailChange}
            />
          </MDBCol>

          <MDBCol size="auto">
            <MDBBtn outline color="light" type="submit" className="mb-4">
              Subscribirme
            </MDBBtn>
          </MDBCol>
        </MDBRow> */}
    {/* </form> */}
  </>
);
};
