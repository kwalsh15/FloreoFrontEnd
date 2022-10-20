import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Category = ({ data }) => {
  const { id, img } = data;
  return (
    <>
      <div className="bg-image">
        <img src={img} style={{ 'width': '100%' }} />
        <div className="mask" style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.6)' }}>
          <div className="text">
            <p>{id}</p>
          </div>
        </div>
      </div>
    </>
  );
}
