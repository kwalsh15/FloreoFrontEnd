import { MDBTypography } from "mdb-react-ui-kit";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/index";

export const Service = ({ data }) => {
  const { services } = useSelector((state) => state.services);
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const newServices = [];
  const { id } = data;

  //Filter services by ID
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

  //Get input values
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //Get services filter
  const results = !search ? newServices : newServices.filter((value) => value.nombre.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <div style={{ position: 'sticky', top: '0', zIndex: 900, backgroundcolor: 'white', height: '30px', padding: '2rem 2rem' }}>
        <input style={{
          borderradius: '10px', height: '30px',
          border: '2.5px solid #000000',
          padding: '0 4px 0 4px',
          backgroundcolor: 'white',
          width: '50%'
        }}
          value={search} onChange={searcher} type="text" placeholder='Buscar...' className='form-control' />
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3">
        {results.map(service => (
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
          } else if (results.length == 0) {
            return (
              <div className="w-100 d-flex justify-content-center">
                <MDBTypography color='black' tag='h3'>No hay resultados</MDBTypography>
              </div>
            )
          }
        })()
      }
    </>
  );
}
