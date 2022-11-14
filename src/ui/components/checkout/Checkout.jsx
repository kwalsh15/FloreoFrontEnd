import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/index";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { setCollectionData } from "../../../helpers/setCollectionData";
import es from "date-fns/locale/es";
import { setOrder } from "../../../store/checkout/index";
import Select from "react-select";
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

// mapa
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const { active: aboutInformation } = useSelector((state) => state.section);

  registerLocale("es", es);

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
    exactLocation: "",
    payment: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onDataChange = (value, action) => {
    setFormValue({ ...formValue, [action.name]: value.value });
  };

  const handleForm = () => {
    const newPurchase = {
      nombre: formValue.name,
      telefono: formValue.phone,
      fecha: formValue.date,
      hora: formValue.time,
      pago: formValue.payment,
      provincia: formValue.provincia,
      canton: formValue.canton,
      distrito: formValue.distrito,
      direccion: formValue.exactLocation,
      ubicacion: [ position.lat , position.lng ],
      servicios: cartItems.map((item) => item=(item.nombre+" - "+"₡"+item.precio)),
      total: totalAmount,
      estado: "pendiente",
    };

    const message = encodeURIComponent(
      `${"NUEVO PEDIDO"}
      \r${"Nombre: " + formValue.name}
      \r${"Teléfono: " + formValue.phone}
      \r${"Fecha: " + formValue.date}
      \r${"Hora: " + formValue.time}
      \r${"Provincia: " + formValue.provincia}
      \r${"Cantón: " + formValue.canton}
      \r${"Distrito: " + formValue.distrito}
      \r${"Dirección: " + formValue.exactLocation}
      \r${"Estado: " + "pendiente"}
      \r${"Pago: " + formValue.payment}
      \r${"Precio total: " + "₡" + totalAmount}
      \r${"Servicios solicitados: \n" + cartItems.map((item) => item=(item.nombre+" - "+"₡"+item.precio+'\n'))}`
    );

    const phone = "506"+aboutInformation?.Telefono;

    setCollectionData("Pedidos", newPurchase);
    dispatch(setOrder([...orders, newPurchase]));
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`);
    // formValue = {name: '', email: ''};
    // Swal.fire('Compra exitosa', 'Te has subscribido al boletín informativo de Pupilos', 'success');
  };

  const options = [
    { value: "Sinpe", label: "Sinpe" },
    { value: "Efectivo", label: "Efectivo" },
  ];

  // mapa
  const [position, setPosition] = useState(null);
  // Events
  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position == null ? null : <Marker position={position}></Marker>;
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
        <MDBValidation
          onSubmit={() => {
            deleteCart(), handleForm();
          }}
        >
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
              <MDBRow className="d-flex justify-content-center g-3">
                <h6>Seleccione la ubicación:</h6>
                <MapContainer
                  style={{ width: "95%", height: "30vh" }}
                  center={[10.32328, -84.431006]}
                  zoom={15}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                  />

                  <HandleClickMap />
                </MapContainer>

                <MDBCol md="4">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="provincia"
                      className="form-control"
                      label="Provincia"
                      required
                      value={formValue.provincia}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol md="4">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="canton"
                      className="form-control"
                      label="Cantón"
                      required
                      value={formValue.canton}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol md="4">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="distrito"
                      className="form-control"
                      label="Distrito"
                      required
                      value={formValue.distrito}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBValidationItem feedback="Este campo es requerido" invalid>
                  <MDBInput
                    name="exactLocation"
                    className="form-control"
                    label="Señas"
                    required
                    value={formValue.exactLocation}
                    onChange={onChange}
                  />
                </MDBValidationItem>
                <MDBCol md="4">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      type="date"
                      min={new Date().toLocaleDateString("en-CA")}
                      name="date"
                      label="Fecha"
                      required
                      className="form-control"
                      value={formValue.date}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol md="4">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      type="time"
                      name="time"
                      label="Hora"
                      required
                      className="form-control"
                      value={formValue.time}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol md="4">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <Select
                      name="payment"
                      placeholder="Pago"
                      value={options.find(
                        (obj) => obj.value.value === formValue.payment
                      )}
                      options={options}
                      onChange={onDataChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
                <MDBCol md="6">
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
                </MDBCol>
                {/* Personal Info */}
                <MDBCol md="6">
                  <MDBValidationItem feedback="Este campo es requerido" invalid>
                    <MDBInput
                      name="phone"
                      className="form-control"
                      label="Teléfono"
                      required
                      value={formValue.phone}
                      onChange={onChange}
                    />
                  </MDBValidationItem>
                </MDBCol>
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
              <button type="submit" className="btn btn-outline-success">
                Ordenar Por WhatsApp
              </button>
            </div>
          </div>
        </MDBValidation>
      </div>
    </div>
  );
};

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
