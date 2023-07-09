// ImageList.js
import React from 'react';
import ImageList from './ImageList';

function ImageList({ images, arrayBufferToBase64 }) {
  return (
    <div>
      {images.map((image, index) => {
        if (image.img && image.img.data && image.img.data.data) {
          return (
            <div key={index}>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <img
                src={`data:${image.img.contentType};base64,${arrayBufferToBase64(image.img.data.data)}`}
                alt={image.title}
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ImageList;
