import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { setCollectionData } from "../../../helpers/setCollectionData";
import es from "date-fns/locale/es";
import { subDays } from "date-fns";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { setOrder } from "../../../store/checkout/index";
import {
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./checkout.css";

export const Checkout = () => {
  const position = [10.32322207586839, -84.43113439600504];
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  registerLocale("es", es);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const { orders } = useSelector((state) => state.orders);

  const deleteCart = () => {
    dispatch(cartActions.deleteCart());
  };

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    provincia: "",
    canton: "",
    distrito: "",
    date: "",
    time: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleForm = () => {
    const newPurchase = {
      nombre: formValue.name,
      telefono: formValue.phone,
      provincia: formValue.provincia,
      canton: formValue.canton,
      distrito: formValue.distrito,
      fecha: formValue.date,
      hora: formValue.time,
    };
    setCollectionData("Pedidos", newPurchase);
    dispatch(setOrder([...orders, newPurchase]));
    // formValue = {name: '', email: ''};
    // Swal.fire('Compra exitosa', 'Te has subscribido al boletín informativo de Pupilos', 'success');
  };

  return (
    <div
      className="modal fade"
      id="checkoutModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="title">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Detalles de la orden
              </h5>
            </div>
            <div className="close_btn">
              <MDBBtn
                outline
                floating
                border="none"
                type="button"
                color="dark"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <MDBIcon fas icon="times" />
              </MDBBtn>
            </div>
          </div>

          <div className="modal-body">
            {/* Location */}

            <MDBRow className="d-flex justify-content-center">
              <MDBValidation className="row m-3">
                <MapContainer
                  center={position}
                  zoom={14}
                  style={{ height: "20vh", width: "100%" }}
                >
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>Ubicación</Popup>
                  </Marker>
                </MapContainer>

                <MDBCol>
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="provincia"
                      className="form-control m-3"
                      label="Provincia"
                      required
                      value={formValue.provincia}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol>
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="canton"
                      className="form-control m-3"
                      label="Cantón"
                      required
                      value={formValue.canton}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol>
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="distrito"
                      className="form-control m-3"
                      label="Distrito"
                      required
                      value={formValue.distrito}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
              </MDBValidation>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center">
              <MDBValidation className="row">
                {/* Calendar */}
                <MDBCol>
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <DatePicker
                      customInput={
                        <MDBInput
                          name="date"
                          label="Fecha"
                          className="form-control"
                          value={formValue.date}
                        />
                      }
                      onChange={(date) => setStartDate(date)}
                      //showTimeSelect
                      // timeFormat="h:mm aa"
                      // timeIntervals={30}
                      timeCaption="Hora"
                      dateFormat="d MMMM, yyyy"
                      locale={"es"}
                      selected={startDate}
                      minDate={subDays(new Date(), 0)}
                    />
                  </MDBValidationItem>

                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <DatePicker
                      customInput={
                        <MDBInput
                          name="time"
                          label="Hora"
                          className="form-control m-3"
                          value={formValue.time}
                        />
                      }
                      selected={startTime}
                      onChange={(date) => setStartTime(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Hora"
                      dateFormat="h:mm aa"
                      timeFormat="h:mm aa"
                    />
                  </MDBValidationItem>
                </MDBCol>

                {/* Personal Info */}
                <MDBCol>
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="name"
                      className="form-control"
                      label="Nombre"
                      required
                      value={formValue.name}
                      onChange={onChange}
                    />
                  </MDBValidationItem>

                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="phone"
                      className="form-control m-3"
                      label="Teléfono"
                      required
                      value={formValue.phone}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
              </MDBValidation>
            </MDBRow>

            {/* Items */}
            <div className="items">
              <h5>Servicios solicitados</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))}
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <b>Total a pagar:</b>
                    <b>
                      <span>₡{totalAmount}</span>
                    </b>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer buttons */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => { deleteCart(), handleForm()}}
            >
              Ordenar Por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Time = () => {
//   const [startDate, setStartDate] = useState(null);
//   return (
//     <DatePicker
//       customInput={
//         <MDBInput label="Hora" className="m-3" value={formValue.time} />
//       }
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       showTimeSelect
//       showTimeSelectOnly
//       timeIntervals={30}
//       timeCaption="Hora"
//       dateFormat="h:mm aa"
//       timeFormat="h:mm aa"
//       //placeholderText="Hora"
//     />
//   );
// };

// const Calendar = () => {
//   registerLocale("es", es);
//   const [startDate, setStartDate] = useState(null);
//   return (
//     <DatePicker
//       customInput={<MDBInput label="Fecha" value={formValue.date} />}
//       onChange={(date) => setStartDate(date)}
//       //showTimeSelect
//       // timeFormat="h:mm aa"
//       // timeIntervals={30}
//       timeCaption="Hora"
//       dateFormat="d MMMM, yyyy"
//       locale={"es"}
//       //placeholderText="Fecha y Hora"
//       selected={startDate}
//       minDate={subDays(new Date(), 0)}
//     />
//   );
// };

const Tr = (props) => {
  const { nombre, totalPrice } = props.item;

  return (
    <div>
      <span className="d-flex justify-content-between align-items-center">
        {nombre}
        <span>₡{totalPrice}</span>
      </span>
    </div>
  );
};
