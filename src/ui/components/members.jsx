export const Members = ({ data }) => {
  const { nombre, img, telefono, contacto } = data;
  return (
    <>
      <div className="card" style={{width: 20+'rem', margin: 'auto', marginTop: 20+'px', display: 'block'}}>
        <img className="card-img-top" src={img} alt="Imagen" style={{ 'height': '250pt', 'width': '250pt' }}/>
        <div className="card-body">
          <h4 className="card-title">{nombre}</h4>
          <i className="card-text"> <strong>Teléfono:</strong> {telefono}</i><br />
          <i className="card-text"> <strong>Correo:</strong> {contacto}</i>
        </div>
      </div>
    </>
  );
};
