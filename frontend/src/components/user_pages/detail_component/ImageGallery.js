import React, { useState } from "react";
import { Image } from "antd";
import ImageModal from "./ImageModal"; // Adjust the import path as necessary

const ImageGallery = ({ images }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const handleShowMore = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Inline styles for the overlay
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '5px'
  };

  return (
    <div className="row p-3">
      {/* Large Image */}
      <div className="col-lg-6 d-flex align-items-center">
        <Image
          src={images[0]}
          className="img-fluid rounded shadow-sm"
          alt="Large Gallery Image"
        />
      </div>

      {/* Small Images */}
      <div className="col-lg-6">
        <div className="row position-relative">
          {images.slice(1,5).map((image, index) => (
            <div
              key={index}
              className={`col-6 mb-2 ${images.length > 5 && index === 4 ? 'position-relative' : ''}`}
              style={images.length > 5 && index === 4 ? { position: 'relative' } : {}}
            >
              <Image
                src={image}
                className="img-fluid rounded shadow-sm"
                alt={`Small Gallery Image ${index + 1}`}
                onClick={() => {
                  if (images.length > 5 && index === 4) {
                    setModalImages(images.slice(4)); // Set the images to show in the modal
                    handleShowMore();
                  }
                }}
              />
              {images.length > 5 && index === 3 && (
                <div
                className="fs-small "
                  style={overlayStyle}
                  onClick={() => {
                    setModalImages(images.slice(4)); // Set the images to show in the modal
                    handleShowMore();
                  }}
                >
                  Show More
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        images={modalImages}
      />
    </div>
  );
};

export default ImageGallery;
