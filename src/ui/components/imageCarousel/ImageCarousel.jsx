import React from 'react';
import "./ImageCarousel.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export const ImageCarousel = ({images}) => {
  return (
    <MDBCarousel showControls>
      <MDBCarouselInner>
        {images.map((image, index) =>
          <MDBCarouselItem className={`carousel-item ${index == 0 ? '' : 'active'}`} key={image}>
            <MDBCarouselElement className={'carousel__img'} src={image} />
          </MDBCarouselItem>
        )}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}