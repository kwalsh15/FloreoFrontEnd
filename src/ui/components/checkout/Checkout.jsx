import React from "react";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./checkout.css";

export const Checkout = () => {
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
            <form>
              <div className="form-group">
                <label>Provincia</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Provincia"
                ></input>
              </div>
              <div className="form-group">
                <label>Cantón</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Cantón"
                ></input>
              </div>
              <div className="form-group">
                <label>Distrito</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Distrito"
                ></input>
              </div>
            </form>
            {/* Personal Info */}
            <form>
              <div className="row">
                <div className="col">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Teléfono"
                  />
                </div>
              </div>
            </form>
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
            <button type="button" className="btn btn-outline-success">
              Ordenar Por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
