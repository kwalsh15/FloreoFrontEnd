import React from 'react';
import "./ImageCarousel.css";

export const ImageCarousel = ({ images }) => {
  return (
    <>
      <div id="mycarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) =>
            <div className={`carousel-item ${index == 0 ? '' : 'active'}`} key={image}>
              <img className="carousel__img" src={image} />
              <div className="carousel__caption carousel-caption">
              </div>
            </div>
          )}
        </div>
        <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>
    </>
  );
}