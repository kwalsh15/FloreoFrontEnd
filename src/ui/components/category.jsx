import { Link } from 'react-router-dom';

export const Category = ({ data }) => {
  const { id, img } = data;
  return (
    <>
      <Link to={'category/services'} state={id}>
        <div className="bg-image">
          <img src={img} style={{ 'width': '100%' }} />
          <div className="mask" style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.6)' }}>
            <div className="text">
              <h1>{id}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
