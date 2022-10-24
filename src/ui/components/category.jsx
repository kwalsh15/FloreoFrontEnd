import { Link } from 'react-router-dom';

export const Category = ({ data }) => {
  const { nombre, img } = data;
  return (
    <>
      <Link to={'category/services'} state={data}>
        <div className="bg-image">
          <img src={img} style={{ 'width': '100%' }} />
          <div className="mask" style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.6)' }}>
            <div className="text">
              <h3>{nombre}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
