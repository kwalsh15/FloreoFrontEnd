import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/index";
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
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const deleteCart = () => {
    dispatch(cartActions.deleteCart());
  };

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
            <MDBRow
              className="d-flex justify-content-center"
              style={{ marginBottom: "10px" }}
            >
              <MDBValidation className="row g-3">
                <MDBValidationItem feedback="Este campo es requerido" invalid>
                  <MDBInput
                    name="location"
                    className="form-control"
                    label="Provincia"
                    required
                    value={formValue.location}
                    onChange={onChange}
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback="Este campo es requerido" invalid>
                  <MDBInput
                    name="location"
                    className="form-control"
                    label="Cantón"
                    required
                    value={formValue.location}
                    onChange={onChange}
                  />
                </MDBValidationItem>

                <MDBValidationItem feedback="Este campo es requerido" invalid>
                  <MDBInput
                    name="location"
                    className="form-control"
                    label="Distrito"
                    required
                    value={formValue.location}
                    onChange={onChange}
                  />
                </MDBValidationItem>

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
                </MDBCol>

                <MDBCol>
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
              onClick={deleteCart}
            >
              Ordenar Por WhatsApp
            </button>
          </div>
        </div>
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
