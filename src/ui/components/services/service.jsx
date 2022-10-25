import { MDBTypography } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/index";

export const Service = ({ data }) => {
  const { services } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const newServices = [];
  const { id, img } = data;

  services.forEach(element => {
    if (element.categoria == id) {
      newServices.push(element);
    }
  });

  const addToCart = (id, nombre, precio) => {
    dispatch(
      cartActions.addItem({
        id,
        nombre,
        precio,
      })
    );
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3">
        {newServices.map(service => (
          <div className="col mb-4" key={service.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{service.nombre}</h5>
                <p className="card-text">{service.informacion}</p>
                <p style={{ float: 'left' }} className="card-text">
                  <small className="text-muted">
                    Precio:
                    <strong style={{ color: 'black' }}> ₡{service.precio}</strong>
                  </small>
                </p>
                <br />
                <button style={{ background: 'black', float: 'right' }} className="btn btn-primary"
                  onClick={() => { addToCart(service.id, service.nombre, service.precio) }}>
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        (() => {
          if (newServices.length == 0) {
            return (
              <div className="w-100 d-flex justify-content-center">
                <MDBTypography color='black' tag='h3'>No hay servicios</MDBTypography>
              </div>
            )
          }
        })()
      }
    </>
  );
}
